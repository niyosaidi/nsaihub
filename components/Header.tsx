import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import { LanguageSwitcher } from './LanguageSwitcher';

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
        isActive
          ? 'bg-slate-900 text-cyan-400 shadow-sm border border-slate-800'
          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
      }`
    }
  >
    {children}
  </NavLink>
);

export const Header: React.FC = () => {
  const { t } = useLocalization();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-14 w-auto transform hover:scale-105 transition-all duration-300" src="/Public/Images/NS%20Ai%20Hub%20Logo.png" alt="NS IT Consulting & Training Logo" referrerPolicy="no-referrer" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-6 flex items-baseline space-x-1">
              <NavItem to="/">{t('nav.home')}</NavItem>
              <NavItem to="/services">{t('nav.services')}</NavItem>
              <NavItem to="/training">{t('nav.training')}</NavItem>
              <NavItem to="/portfolio">{t('nav.portfolio')}</NavItem>
              <NavItem to="/about">{t('nav.about')}</NavItem>
              <NavItem to="/contact">{t('nav.contact')}</NavItem>
            </div>
          </div>
           <div className="hidden lg:block">
             <LanguageSwitcher />
           </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-slate-50 inline-flex items-center justify-center p-2.5 rounded-xl text-slate-600 hover:text-cyan-500 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offse..."
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-3 pt-2 pb-4 space-y-1 bg-white border-t border-slate-100 shadow-inner">
            <NavLink to="/" className={({isActive}) => `block px-4 py-2.5 rounded-xl text-base font-semibold ${isActive ? 'bg-slate-900 text-cyan-400' : 'text-slate-700 hover:bg-slate-100'}`} onClick={() => setMobileMenuOpen(false)}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/services" className={({isActive}) => `block px-4 py-2.5 rounded-xl text-base font-semibold ${isActive ? 'bg-slate-900 text-cyan-400' : 'text-slate-700 hover:bg-slate-100'}`} onClick={() => setMobileMenuOpen(false)}>
              {t('nav.services')}
            </NavLink>
            <NavLink to="/training" className={({isActive}) => `block px-4 py-2.5 rounded-xl text-base font-semibold ${isActive ? 'bg-slate-900 text-cyan-400' : 'text-slate-700 hover:bg-slate-100'}`} onClick={() => setMobileMenuOpen(false)}>
              {t('nav.training')}
            </NavLink>
            <NavLink to="/portfolio" className={({isActive}) => `block px-4 py-2.5 rounded-xl text-base font-semibold ${isActive ? 'bg-slate-900 text-cyan-400' : 'text-slate-700 hover:bg-slate-100'}`} onClick={() => setMobileMenuOpen(false)}>
              {t('nav.portfolio')}
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `block px-4 py-2.5 rounded-xl text-base font-semibold ${isActive ? 'bg-slate-900 text-cyan-400' : 'text-slate-700 hover:bg-slate-100'}`} onClick={() => setMobileMenuOpen(false)}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `block px-4 py-2.5 rounded-xl text-base font-semibold ${isActive ? 'bg-slate-900 text-cyan-400' : 'text-slate-700 hover:bg-slate-100'}`} onClick={() => setMobileMenuOpen(false)}>
              {t('nav.contact')}
            </NavLink>
            <div className="pt-3 pl-4 border-t border-slate-100 mt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
