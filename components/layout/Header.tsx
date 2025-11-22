import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCart } from '../../contexts/CartContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useSearch } from '../../contexts/SearchContext';
import { ShoppingBag, Search, Menu, X, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const { t, toggleLanguage, language, isRTL } = useLanguage();
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const navLinks = [
    { to: '/', text: t('home') },
    { to: '/shop', text: t('shop') },
    { to: '/category/perfumes', text: t('perfumes') },
    { to: '/category/makeup', text: t('makeup') },
    { to: '/category/clothing', text: t('clothing') },
    { to: '/about', text: t('about') },
    { to: '/contact', text: t('contact') },
  ];

  const activeLinkStyle = {
    color: '#D1A38A',
    borderBottom: '2px solid #D1A38A'
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
    }, 300); // Match animation duration
  };

  const openMenu = () => {
      setIsMobileMenuOpen(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // If user is not on a shop page, navigate them there when they start searching
    if (!window.location.hash.includes('/shop') && !window.location.hash.includes('/category')) {
      navigate('/shop');
    }
  };

  // Navigate to the shop page when the user explicitly presses the search button.
  const handleSearchSubmit = () => {
    // Only navigate if not already on a shop or category page
    if (!window.location.hash.includes('/shop') && !window.location.hash.includes('/category')) {
      navigate('/shop');
    }
  };

  const MobileMenu = () => (
    <div className="fixed inset-0 bg-black/50 z-50 lg:hidden animate-fade-in" onClick={closeMenu}>
      <div 
        className={`absolute top-0 bottom-0 bg-white dark:bg-gray-800 shadow-xl 
          w-[78vw] max-w-[320px] 
          md:w-[300px] 
          lg:w-[300px] 
          xl:w-[340px] 
          ${isRTL ? 'right-0' : 'left-0'} 
          ${isClosing 
            ? (isRTL ? 'animate-slide-out-right' : 'animate-slide-out-left') 
            : (isRTL ? 'animate-slide-in-right' : 'animate-slide-in-left')
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
            <div className="flex justify-between items-center mb-12">
                <Link to="/" className="text-2xl font-display text-gray-800 dark:text-white" onClick={closeMenu}>
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
                className={({isActive}) => `text-gray-700 dark:text-gray-300 hover:text-[#D1A38A] transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'} ${isActive ? 'font-bold text-[#D1A38A]' : ''}`}
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

  return (
    <header className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-40 shadow-sm dark:shadow-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="lg:hidden">
          <button onClick={openMenu}>
            <Menu size={24} className="text-gray-800 dark:text-gray-200" />
          </button>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <Link to="/" className="text-3xl font-display text-gray-800 dark:text-white">
                MELORA
            </Link>
        </div>

        <nav className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-gray-700 dark:text-gray-300 hover:text-[#D1A38A] transition-colors pb-1 border-b-2 border-transparent"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        
        <div className="flex items-center gap-x-2 md:gap-x-4">
          {/* Search bar with a submit button */}
          <div className="flex items-stretch border rounded-full overflow-hidden bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <input 
              type="text" 
              placeholder={t('searchPlaceholder')} 
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-transparent focus:outline-none text-sm w-24 md:w-32 px-2 text-gray-800 dark:text-gray-200" 
            />
            <button
              onClick={handleSearchSubmit}
              className="px-3 bg-[#d1a38a] text-white text-sm font-medium hover:bg-[#c19277] transition-colors"
            >
              {t('searchProductLabel')}
            </button>
          </div>

          <button onClick={toggleTheme} className={`${theme === 'dark' ? 'text-white' : 'text-gray-700 dark:text-gray-300'} hover:text-[#D1A38A]`}>
            {/* Show a crescent when dark mode is active, and a sun when light mode is active */}
            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button onClick={toggleLanguage} className="text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-[#D1A38A]">
            {t('language')}
          </button>
          
          <Link to="/cart" className="relative">
            <ShoppingBag size={24} className="text-gray-800 dark:text-gray-200" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D1A38A] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  );
};
export default Header;