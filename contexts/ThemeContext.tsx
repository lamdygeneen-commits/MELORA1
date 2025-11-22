import React, { createContext, useState, useContext, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      // جعل الوضع الليلي هو الوضع الافتراضي دائمًا
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // إزالة كلا الفئتين أولاً
    root.classList.remove('light', 'dark');
    
    // إضافة الفئة الحالية
    root.classList.add(theme);
    
    // حفظ الإعداد في localStorage
    localStorage.setItem('theme', theme);
    
    // تحديث لون الخلفية مباشرة للتأكد من تطبيق التغيير
    document.body.className = theme === 'dark' 
      ? 'bg-gray-950 transition-colors duration-300' 
      : 'bg-white transition-colors duration-300';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
