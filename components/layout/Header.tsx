import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { useCart } from "../../contexts/CartContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useSearch } from "../../contexts/SearchContext";
import { ShoppingBag, Menu, X, Sun, Moon, Search, Globe } from "lucide-react";

const Header: React.FC = () => {
  const { t, toggleLanguage, isRTL } = useLanguage();
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // لقياس ارتفاع الهيدر حتى لا يختفي المحتوى تحته
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

  // تم تعديل هذا ليناسب التصميم الجديد
  const navLinksDesktop = [
    { to: "/", text: t("home") },
    { to: "/shop", text: t("store") }, // المتجر
    { to: "/category/perfumes", text: t("perfumes") }, // العطور
    { to: "/category/makeup", text: t("makeup") }, // الميكب
    { to: "/category/clothing", text: t("clothing") }, // الملابس
    { to: "/about", text: t("aboutUs") }, // من نحن
    { to: "/contact", text: t("contactUs") }, // تواصل معنا
  ];

  const activeLinkStyle = {
    color: "#D1A38A",
    borderBottom: "2px solid #D1A38A",
  } as const;

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

  // ------------- قائمة الموبايل الجانبية -------------
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

  // ------------- حساب ارتفاع الهيدر -------------
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

  // ------------- الهيدر -------------
  return (
    <>
      <header
        ref={headerRef}
        className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-40 shadow-sm dark:shadow-gray-800"
      >
        {/* شريط علوي موحد للموبايل والديسكتوب */}
        <div className="flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4">
          {/* يسار: أيقونات (EN, سلة, بحث) */}
          <div className="flex items-center gap-x-3 lg:order-3">
            {/* أيقونة اللغة */}
            <button
              onClick={toggleLanguage}
              className="text-gray-700 dark:text-gray-300 hover:text-[#D1A38A] flex items-center gap-x-1"
            >
              <Globe size={20} className="hidden lg:block" />
              <span className="text-sm font-bold">
                {isRTL ? "EN" : "عربي"}
              </span>
            </button>

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

            {/* أيقونة البحث (للموبايل فقط) */}
            <button
              onClick={handleSearchSubmit} // يمكن تعديل هذا لفتح نافذة بحث منبثقة في الموبايل
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-[#D1A38A]"
            >
              <Search size={24} />
            </button>

            {/* أيقونة الثيم (للموبايل فقط) */}
            <button
              onClick={toggleTheme}
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-[#D1A38A]"
            >
              {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* الوسط: روابط النافبار (لديسكتوب) / زر القائمة (للموبايل) */}
          <div className="flex items-center gap-x-8 lg:order-2">
            {/* روابط النافبار للديسكتوب */}
            <nav className="hidden lg:flex items-center gap-x-8">
              {navLinksDesktop.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 dark:text-gray-300 hover:text-[#D1A38A] transition-colors pb-1 border-b-2 border-transparent text-sm font-medium"
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                >
                  {link.text}
                </NavLink>
              ))}
            </nav>

            {/* زر القائمة للموبايل */}
            <button onClick={openMenu} className="lg:hidden">
              <Menu size={26} className="text-gray-800 dark:text-gray-200" />
            </button>
          </div>

          {/* اليمين: الشعار (MELORA) */}
          <Link
            to="/"
            className="font-display font-bold text-gray-800 dark:text-white text-2xl lg:text-3xl tracking-widest lg:order-1"
          >
            MELORA
          </Link>
        </div>

        {/* شريط البحث في الديسكتوب فقط */}
        <div className="hidden lg:flex px-6 pb-4 justify-center">
          <div className="flex items-stretch border rounded-full overflow-hidden bg-gray-50 dark:bg-gray-800 dark:border-gray-700 w-full max-w-xl">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-transparent focus:outline-none text-sm px-4 py-2 w-full text-gray-800 dark:text-gray-200"
            />
            <button
              onClick={handleSearchSubmit}
              className="px-4 bg-[#d1a38a] text-white text-sm font-medium hover:bg-[#c19277] transition-colors"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && <MobileMenu />}
      </header>

      {/* مسافة تحت الهيدر الثابت */}
      <div style={{ height: spacerHeight }} aria-hidden="true" />
    </>
  );
};

export default Header;
