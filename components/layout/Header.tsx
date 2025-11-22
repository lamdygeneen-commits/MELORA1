import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { useCart } from "../../contexts/CartContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useSearch } from "../../contexts/SearchContext";
import { ShoppingBag, Menu, X, Sun, Moon } from "lucide-react";

const Header: React.FC = () => {
  const { t, toggleLanguage, isRTL } = useLanguage();
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  // header measurement for dynamic spacer
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
  };

  // ---------------- MOBILE MENU -----------------
  const MobileMenu = () => (
    <div
      className="fixed inset-0 bg-black/50 z-50 lg:hidden animate-fade-in"
      onClick={closeMenu}
    >
      <div
        className={`absolute top-0 bottom-0 bg-white dark:bg-gray-800 shadow-xl 
          w-[78vw] max-w-[320px] md:w-[300px] xl:w-[340px]
          ${isRTL ? "right-0" : "left-0"}
          ${
            isClosing
              ? isRTL
                ? "animate-slide-out-right"
                : "animate-slide-out-left"
              : isRTL
              ? "animate-slide-in-right"
              : "animate-slide-in-left"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-12">
            <Link
              to="/"
              className="text-2xl font-display text-gray-800 dark:text-white"
              onClick={closeMenu}
            >
              MELORA
            </Link>
            <button onClick={closeMenu}>
              <X size={24} className="text-gray-800 dark:text-gray-200" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-700 dark:text-gray-300 hover:text-[#D1A38A] transition-colors py-2 
                   ${isRTL ? "text-right" : "text-left"} ${
                    isActive ? "font-bold text-[#D1A38A]" : ""
                  }`
                }
                onClick={closeMenu}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );

  // ---------------- HEADER -----------------

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setSpacerHeight(`${headerRef.current.offsetHeight}px`);
      }
    };

    // run once
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
  }, [isMobileMenuOpen, isRTL, theme]);

  return (
    <>
      <header ref={headerRef} className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-40 shadow-sm dark:shadow-gray-800">

      {/* ROW 1 — Logo & Icon Buttons */}
      <div className="px-4 py-2 md:py-3 flex items-center justify-between">

        {/* Mobile Side Menu Button */}
        <button onClick={openMenu} className="lg:hidden">
          <Menu size={26} className="text-gray-800 dark:text-gray-200" />
        </button>

        {/* LOGO — Always centered cleanly */}
        <Link
          to="/"
          className="font-display font-bold text-gray-800 dark:text-white
                     text-xl md:text-3xl tracking-widest mx-auto lg:mx-0"
        >
          MELORA
        </Link>

        {/* Right Buttons */}
        <div className="flex items-center gap-x-2">
          <button onClick={toggleTheme}>
            {theme === "dark" ? <Moon /> : <Sun />}
          </button>

          <button
            onClick={toggleLanguage}
            className="text-sm font-bold text-gray-700 dark:text-gray-300"
          >
            {t("language")}
          </button>

          <Link to="/cart" className="relative">
            <ShoppingBag size={24} className="text-gray-800 dark:text-gray-200" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D1A38A] text-white text-xs 
                                rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* ROW 2 — MOBILE SEARCH BAR ONLY */}
      <div className="px-4 pb-3 lg:hidden">
        <div className="flex items-stretch border rounded-full overflow-hidden w-full
                        bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-transparent focus:outline-none text-sm md:text-sm px-2 md:px-3 py-1 md:py-2 w-full
                      text-gray-800 dark:text-gray-200"
          />
          <button
            onClick={handleSearchSubmit}
            className="px-3 md:px-4 bg-[#d1a38a] text-white text-sm font-medium hover:bg-[#c19277]"
          >
            {t("searchProductLabel")}
          </button>
        </div>
      </div>

      {/* ROW 3 — NAV (compact on mobile, full on desktop) */}
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 pb-3">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="text-gray-700 dark:text-gray-300 hover:text-[#D1A38A] 
                       transition-colors pb-1 border-b-2 border-transparent text-sm md:text-base"
            style={({ isActive }) => (isActive ? activeLinkStyle : {})}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>

        {isMobileMenuOpen && <MobileMenu />}
      </header>

        {/* Spacer to offset sticky header so page content doesn't sit under it on small screens
          Adjust `h-20` / `lg:h-16` if your header height changes. */}
        <div className="h-20 lg:h-16" aria-hidden="true" />
    </>
  );
};

export default Header;
