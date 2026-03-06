import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HiSun, HiMoon } from 'react-icons/hi';
import logoDark from '../../public/assets/2.png';
import logoLight from '../../public/assets/3.png';
import { SocialLinks } from './SocialLinks';
import { socialLinks } from '@/data/social';
import { useApp } from '@/context/AppContext';

const NAV_IDS = ['', 'about', 'skills', 'projects', 'contact'];

const Navbar = () => {
  const { t, theme, toggleTheme, lang, toggleLang } = useApp();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const scrollToSection = (id) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    const startPosition = window.scrollY;
    const distance = offsetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleNavClick = (id) => {
    if (id) {
      scrollToSection(id);
    }
    setNav(false);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const navItems = NAV_IDS.filter((id) => id).map((id) => ({
    id,
    label: t(`nav.${id}`),
  }));

  const ToggleButtons = () => (
    <div className="flex items-center gap-2 ml-4">
      <button
        onClick={toggleLang}
        className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-slate-700 hover:bg-primary hover:text-white transition-colors uppercase"
        aria-label={lang === 'pt' ? t('aria.switchToEn') : t('aria.switchToPt')}
      >
        {lang === 'pt' ? 'EN' : 'PT'}
      </button>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
        aria-label={theme === 'light' ? t('aria.darkTheme') : t('aria.lightTheme')}
      >
        {theme === 'light' ? <HiMoon size={20} /> : <HiSun size={20} />}
      </button>
    </div>
  );

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 border-b border-gray-200/80 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-[100] transition-all duration-300'
          : 'fixed w-full h-20 bg-white dark:bg-slate-900 z-[100] transition-all duration-300'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/" className="flex items-center">
          <Image
            src={theme === 'dark' ? logoDark : logoLight}
            alt="Logo Matheus Filho"
            width={145}
            height={50}
          />
        </Link>
        <div className="flex items-center">
          <ul className="hidden md:flex items-center">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-200">{t('nav.home')}</li>
            </Link>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                <li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-200">
                  {item.label}
                </li>
              </a>
            ))}
            <ToggleButtons />
          </ul>
          <div className="md:hidden flex items-center gap-2">
            <ToggleButtons />
            <button
              onClick={handleNav}
              className="p-2"
              aria-label={t('aria.openMenu')}
            >
              <AiOutlineMenu size={25} className="dark:text-gray-200" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white dark:bg-slate-900 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" onClick={handleNav} className="flex items-center">
                <Image
                  src={theme === 'dark' ? logoDark : logoLight}
                  alt="Logo Matheus Filho"
                  width={120}
                  height={50}
                />
              </Link>
              <button
                onClick={handleNav}
                className="rounded-full border border-gray-200 dark:border-slate-600 p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors dark:text-gray-200"
                aria-label={t('aria.closeMenu')}
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="border-b border-gray-300 dark:border-slate-600 my-4">
              <p className="w-[85%] md:w-[90%] py-4 dark:text-gray-300">
                {t('navbar.tagline')}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/" onClick={handleNav}>
                <li className="py-4 text-sm dark:text-gray-200">{t('nav.home')}</li>
              </Link>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  <li className="py-4 text-sm dark:text-gray-200">{item.label}</li>
                </a>
              ))}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-primary">
                {t('navbar.findMe')}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <SocialLinks links={socialLinks} size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
