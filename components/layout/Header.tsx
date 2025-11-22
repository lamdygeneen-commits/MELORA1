import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { useCart } from "../../contexts/CartContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useSearch } from "../../contexts/SearchContext";
import { ShoppingBag, Menu, X, Sun, Moon, Search } from "lucide-react";

const Header: React.FC = () => {
  const { t, toggleLanguage, isRTL } = useLanguage();
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // قياس ارتفاع الهيدر لعمل مسافة تحته (حتى لا يختفي المحتوى تحت sticky header)
  const headerRef = useRef<HTMLElement | null>(null);
  const [spacerHeight, setSpacerHeight] = useState("0px");

  const navLinks = [
    { to: "/", text: t("home") },
    { to: "/shop", text: t("shop") },
    { to: "/category/perfumes", text: t("perfumes") },
    { to: "/category/makeup", text: t("makeup") },
    { to: "/category/clothing", text: t("clothing") },
    { to: "/about", text: t("about") },
    { to: "/contact", text: t("contact") },
  ];

  const activeLinkStyle = {
    color: "#D1A38A",
    borderBottom: "2px solid #D1A38A",
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const openMenu = () => setIsMobileMenuOpen(true);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (
      !window.location.hash.includes("/shop") &&
      !window.location.hash.includes("/category")
    ) {
      navigate("/shop");
    }
  };

  const handleSearchSubmit = () => {
    if (
      !window.location.hash.includes("/shop") &&
      !window.location.hash.includes("/category")
    ) {
      navigate("/shop");
    }
    setIsSearchOpen(false);
  };

  // ---------------- MOBILE MENU -----------------
  const MobileMenu = () => {
    return (
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden transition-all duration-300"
        onClick={closeMenu}
        style={{
          opacity: isClosing ? 0 : 1,
          visibility: isClosing ? "hidden" : "visible"
        }}
      >
        <div
          className={`absolute top-0 bottom-0 bg-white dark:bg-gray-900 shadow-2xl 
            w-[85vw] max-w-sm
            ${isRTL ? "right-0" : "left-0"}
            transform transition-transform duration-300 ease-out
            ${
              isClosing
                ? isRTL
                  ? "translate-x-full"
                  : "-translate-x-full"
                : "translate-x-0"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 pb-4">
            <div className="flex justify-between items-center">
              <Link
                to="/"
                className="text-3xl font-display font-bold text-white tracking-widest"
                onClick={closeMenu}
              >
                MELORA
              </Link>
              <button 
                onClick={closeMenu}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="p-6 pt-8">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-4 text-lg rounded-xl transition-all duration-200
                     ${isRTL ? "text-right" : "text-left"} 
                     ${
                      isActive 
                        ? "bg-gradient-to-r from-[#D1A38A]/10 to-[#D1A38A]/5 text-[#D1A38A] font-semibold border-r-4 border-[#D1A38A]" 
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#D1A38A]"
                    }`
                  }
                  onClick={closeMenu}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span>{link.text}</span>
                  <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full opacity-50"></div>
                </NavLink>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  {t("theme")}
                </span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
                  <span className="text-sm">{theme === "dark" ? t("dark") : t("light")}</span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  {t("language")}
                </span>
                <button
                  onClick={toggleLanguage}
                  className="px-4 py-2 rounded-lg bg-[#D1A38A] text-white font-semibold hover:bg-[#c19277] transition-colors"
                >
                  {t("language")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ---------------- قياس الهيدر للمسافة السفلية -----------------
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setSpacerHeight(`${headerRef.current.offsetHeight}px`);
      }
    };

    updateHeight();

    let timeoutId: number | undefined;
    const onResize = () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(updateHeight, 100);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [isMobileMenuOpen, isRTL, theme, isSearchOpen]);

  // ---------------- HEADER -----------------
  return (
    <>
    {/* Desktop Layout */}
    <div className="hidden lg:block px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Icons */}
        <div className="flex items-center gap-x-6">
          {/* Cart */}
          <Link to="/cart" className="relative group">
            <ShoppingBag
              size={24}
              className="text-gray-700 dark:text-gray-300 group-hover:text-[#D1A38A] transition-colors"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D1A38A] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Language */}
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#D1A38A] transition-colors"
          >
            {t("language")}
          </button>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-[#D1A38A] transition-colors"
          >
            {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Search */}
          <div className="flex items-stretch border rounded-full overflow-hidden bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-transparent focus:outline-none text-sm w-40 px-4 text-gray-800 dark:text-gray-200"
            />
            <button
              onClick={handleSearchSubmit}
              className="px-4 bg-[#D1A38A] text-white text-sm font-medium hover:bg-[#c19277] transition-colors"
            >
              {t("searchProductLabel")}
            </button>
          </div>
        </div>

        {/* Center - Navigation */}
        <nav className="flex items-center gap-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-gray-700 dark:text-gray-300 hover:text-[#D1A38A] transition-colors pb-1 border-b-2 border-transparent hover:border-[#D1A38A]/50"
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>

        {/* Right - Logo */}
        <Link
          to="/"
          className="font-display font-bold text-3xl tracking-widest text-gray-800 dark:text-white hover:text-[#D1A38A] transition-colors"
        >
          MELORA
        </Link>
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="lg:hidden">
      {/* Top mobile header */}
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Left - Menu button */}
        <button 
          onClick={openMenu}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <Menu size={24} className="text-gray-700 dark:text-gray-300" />
        </button>

        {/* Center - Logo */}
        <Link
          to="/"
          className="font-display font-bold text-2xl tracking-widest text-gray-800 dark:text-white"
        >
          MELORA
        </Link>

        {/* Right - Icons */}
        <div className="flex items-center gap-x-1">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Search size={20} className="text-gray-700 dark:text-gray-300" />
          </button>

          <Link to="/cart" className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <ShoppingBag size={20} className="text-gray-700 dark:text-gray-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D1A38A] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold text-[10px]">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className={`px-4 pb-3 transition-all duration-300 overflow-hidden ${
        isSearchOpen ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex items-stretch border rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-transparent focus:outline-none text-sm px-4 py-3 w-full text-gray-800 dark:text-gray-200"
          />
          <button
            onClick={handleSearchSubmit}
            className="px-4 bg-[#D1A38A] text-white text-sm font-medium hover:bg-[#c19277] transition-colors"
          >
            {t("searchProductLabel")}
          </button>
        </div>
      </div>

      {/* Mobile Bottom Actions */}
      <div className="px-4 pb-3">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
            <span className="text-sm font-medium">{theme === "dark" ? t("dark") : t("light")}</span>
          </button>

          <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-lg bg-[#D1A38A] text-white text-sm font-semibold hover:bg-[#c19277] transition-colors"
          >
            {t("language")}
          </button>
        </div>
      </div>
    </div>

    {isMobileMenuOpen && <MobileMenu />}
  ```


  {/* Spacer لتفادي تغطية المحتوى بالهيدر الـ sticky */}
  <div style={{ height: spacerHeight }} aria-hidden="true" />
</>