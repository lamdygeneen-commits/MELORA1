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
    borderBottom: "2px solid "#D1A38A",
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
  const MobileMenu = () => {
    return (
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
  }, [isMobileMenuOpen, isRTL, theme]);

  // ---------------- HEADER -----------------
  return (
    <>
      <header
        ref={headerRef}
        className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-40 shadow-sm dark:shadow-gray-800"
      >
        {/* الصف الأول: أيقونات اليسار + القائمة + البحث (ديسكتوب) + الشعار + أيقونات الموبايل */}
        <div className="px-4 lg:px-6 py-2 lg:py-3 flex items-center justify-between gap-x-6">
          {/* يسار الهيدر */}
          <div className="flex items-center gap-x-2 md:gap-x-3">
            {/* زر القائمة للموبايل فقط */}
            <button onClick={openMenu} className="lg:hidden">
              <Menu size={26} className="text-gray-800 dark:text-gray-200" />
            </button>

            {/* مجموعة الأيقونات + البحث في الديسكتوب فقط (كما في التصميم الأصلي) */}
            <div className="hidden lg:flex items-center gap-x-3">
              {/* أيقونة السلة */}
              <Link to="/cart" className="relative">
                <ShoppingBag
                  size={24}
                  className="text-gray-800 dark:text-gray-200"
                />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D1A38A] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* اللغة */}
              <button
                onClick={toggleLanguage}
                className="text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-[#D1A38A]"
              >
                {t("language")}
              </button>

              {/* الثيم */}
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-[#D1A38A]"
              >
                {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              {/* شريط البحث - ديسكتوب فقط */}
              <div className="hidden lg:flex items-stretch border rounded-full overflow-hidden bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="bg-transparent focus:outline-none text-sm w-32 px-2 text-gray-800 dark:text-gray-200"
                />
                <button
                  onClick={handleSearchSubmit}
                  className="px-3 bg-[#d1a38a] text-white text-sm font-medium hover:bg-[#c19277] transition-colors"
                >
                  {t("searchProductLabel")}
                </button>
              </div>
            </div>
          </div>

          {/* النافبار في المنتصف - ديسكتوب فقط */}
          <nav className="hidden lg:flex items-center gap-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-gray-700 dark:text-gray-300 hover:text-[#D1A38A] transition-colors pb-1 border-b-2 border-transparent"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>

          {/* الشعار في اليمين على الديسكتوب، وفي المنتصف تقريبًا على الموبايل */}
          <div className="flex items-center gap-x-2 lg:gap-x-0">
            <Link
              to="/"
              className={`font-display font-bold text-gray-800 dark:text-white text-2xl lg:text-3xl tracking-widest transform ${
                isRTL ? "translate-x-4" : "-translate-x-4"
              } lg:translate-x-0`}
            >
              MELORA
            </Link>

            {/* مجموعة الأيقونات في الموبايل (ثيم + لغة + سلة) */}
            <div className="flex items-center gap-x-2 lg:hidden ml-2">
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-[#D1A38A]"
              >
                {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              <button
                onClick={toggleLanguage}
                className="text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-[#D1A38A]"
              >
                {t("language")}
              </button>

              <Link to="/cart" className="relative">
                <ShoppingBag
                  size={24}
                  className="text-gray-800 dark:text-gray-200"
                />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D1A38A] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* صف البحث في الموبايل فقط (تحت الهيدر) */}
        <div className="px-4 pb-3 lg:hidden">
          <div className="flex items-stretch border rounded-full overflow-hidden w-full bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-transparent focus:outline-none text-sm px-3 py-2 w-full text-gray-800 dark:text-gray-200"
            />
            <button
              onClick={handleSearchSubmit}
              className="px-4 bg-[#d1a38a] text-white text-sm font-medium hover:bg-[#c19277]"
            >
              {t("searchProductLabel")}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && <MobileMenu />}
      </header>

      {/* Spacer لتفادي تغطية المحتوى بالهيدر الـ sticky */}
      <div style={{ height: spacerHeight }} aria-hidden="true" />
    </>
  );
};

export default Header;
