import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '@/data/translations.json';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState('pt');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedLang = typeof window !== 'undefined' && localStorage.getItem('portfolio-lang');
    const savedTheme = typeof window !== 'undefined' && localStorage.getItem('portfolio-theme');
    if (savedLang) setLang(savedLang);
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-lang', lang);
    }
  }, [lang]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[lang];
    for (const key of keys) {
      value = value?.[key];
    }
    return value ?? path;
  };

  const toggleLang = () => setLang((l) => (l === 'pt' ? 'en' : 'pt'));
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <AppContext.Provider value={{ lang, theme, t, toggleLang, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
