
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';

export const Footer: React.FC = () => {
    const { t } = useLocalization();

    return (
        <footer className="bg-slate-950 text-white border-t border-slate-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-1">
                        <Link to="/" className="inline-block">
                          <img className="h-14 w-auto transform hover:scale-105 transition-all duration-300" src="/Images/NS%20Ai%20Hub%20Logo.png" alt="NS IT Consulting & Training Logo" referrerPolicy="no-referrer" />
                        </Link>
                        <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                            {t('footer.about')}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">{t('footer.quickLinks')}</h3>
                        <ul className="mt-4 space-y-3">
                            <li><Link to="/services" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">{t('nav.services')}</Link></li>
                            <li><Link to="/training" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">{t('nav.training')}</Link></li>
                            <li><Link to="/portfolio" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">{t('nav.portfolio')}</Link></li>
                            <li><Link to="/about" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">{t('nav.about')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">{t('footer.contactUs')}</h3>
                        <ul className="mt-4 space-y-3 text-slate-300 text-sm leading-relaxed">
                            <li className="break-words">{t('contact.office')}</li>
                            <li className="break-all font-semibold text-cyan-400 hover:underline"><a href="mailto:nsaihub25@gmail.com">nsaihub25@gmail.com</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">Follow Us</h3>
                        <p className="mt-2 text-xs text-slate-400">Connect with us on our official social media channels:</p>
                        <div className="mt-4 flex flex-wrap gap-2.5">
                            <a 
                                href="https://www.instagram.com/nsaihub25/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="Instagram"
                                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-slate-800 transition-all flex items-center justify-center group"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                                    <circle cx="12" cy="12" r="3.441"/>
                                    <path d="M5.921 5.921a4.583 4.583 0 016.48 0"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.facebook.com/profile.php?id=61588621583737" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="Facebook"
                                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-slate-800 transition-all flex items-center justify-center group"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.tiktok.com/@nsaihub" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="TikTok"
                                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all flex items-center justify-center group"
                            >
                                <span className="sr-only">TikTok</span>
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.05.86.14V9.42a6.34 6.34 0 0 0-.86-.06c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c3.59 0 6.5-2.91 6.5-6.5v-5.46c1.29 1.01 2.83 1.61 4.49 1.61v-3.42a6.3 6.3 0 0 1-1.32-.14z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://x.com/nsaihub250" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="X"
                                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all flex items-center justify-center group"
                            >
                                <span className="sr-only">X</span>
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.youtube.com/@NSAiHubrw" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="YouTube"
                                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-red-400 hover:border-red-500/40 hover:bg-slate-800 transition-all flex items-center justify-center group"
                            >
                                <span className="sr-only">YouTube</span>
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-900 pt-8 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} NS IT Consulting & Training. All rights reserved.</p>
                    <p className="text-xs text-slate-600">Empowering Rwanda through custom Enterprise IT & AI solutions.</p>
                </div>
            </div>
        </footer>
    );
};
