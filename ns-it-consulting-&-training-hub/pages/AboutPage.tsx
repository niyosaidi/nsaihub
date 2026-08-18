import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Award, ShieldCheck, CheckCircle, GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

export const AboutPage: React.FC = () => {
    const { t, language } = useLocalization();
    
    return (
        <div className="bg-slate-50 min-h-screen text-slate-800">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 text-white">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <span className="px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20 inline-block mb-4">
                        {language === 'en' ? 'Our Roots & Core Values' : 'Abo Turi Bo n\'Indangagaciro'}
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
                        {t('about.title')}
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
                        {language === 'en'
                            ? 'Pioneering technical excellence and accessible technology mentoring in Rwanda.'
                            : 'Urufatiro rwa tekiniki n’amahugurwa bizewe mu muco wa tekiniki mu Rwanda.'}
                    </p>
                </div>
            </section>

            {/* Mission & Vision Bento Style cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission card */}
                    <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500"></div>
                        <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block mb-2">
                            {language === 'en' ? 'The Impact We Drive' : 'Umuhate wacu'}
                        </span>
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                            {t('about.missionTitle')}
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            {language === 'en'
                                ? 'Bridging the digital divide through accessible AI education and enterprise IT solutions.'
                                : 'Gukuraho ikinyuranyo cya digitali binyuze mu nyandiko z’ubuntu za AI, amahugurwa ngiro, n’ibisubizo byizewe by’ikoranabuhanga ry’ibigo.'}
                        </p>
                    </div>

                    {/* Vision card */}
                    <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
                        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
                            {language === 'en' ? 'Our Future Outlook' : 'Icyerekezo'}
                        </span>
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                            {t('about.visionTitle')}
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            {language === 'en'
                                ? 'To lead and empower Rwanda\'s workforce into an AI-driven knowledge economy, ensuring digital opportunities are localized, secure, and globally competitive.'
                                : 'Kuyobora n’ubumenyi bwuzuye mu kubaka ubukungu bw’igihugu bushingiye ku bumenyi rwa AI, hashingiwe ku mutekano no gukorera mu mucyo.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Profile Section (Saidi Niyonzima) */}
            <section className="bg-white border-y border-slate-100 py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        
                        {/* Profile Image Column */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-teal-500 rounded-3xl transform rotate-3 scale-102 opacity-20"></div>
                                <div className="relative bg-slate-950 rounded-3xl overflow-hidden p-2 shadow-xl">
                                    <img 
                                        className="w-full max-w-sm h-auto rounded-2xl object-cover hover:scale-102 transition-transform duration-300" 
                                        src="https://i.imgur.com/eGLsr3e.png" 
                                        alt="Saidi Niyonzima - Founder" 
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Profile Details Column */}
                        <div className="lg:col-span-7 space-y-6">
                            <div>
                                <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">
                                    {language === 'en' ? 'Executive Profile' : 'Umwirondoro w\'Ubuyobozi'}
                                </span>
                                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                                    Saidi NIYONZIMA
                                </h2>
                                <p className="text-base text-cyan-600 font-bold mt-1">
                                    {language === 'en' 
                                        ? 'Founder, ICT Instructor, AI Specialist & Infrastructure Technician' 
                                        : 'Uwashinze ikigo, Umwarimu wa ICT, Inzobere ya AI & Umukanishi w’Imiyoboro'}
                                </p>
                            </div>

                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                {language === 'en'
                                    ? 'Saidi Niyonzima is an accomplished ICT Specialist, AI practitioner, and veteran systems infrastructure technician with over 10 years of hands-on experience designing local area networks, hardware diagnostics, and enterprise systems deployment in Rwanda.'
                                    : 'Saidi Niyonzima ni inzobere mu bya ICT, ukora kinyamwuga mubijyanye na AI, ndetse n’umunyaburambe mu kubaka imiyoboro y’itumanaho rya tekiniki mu Rwanda umaze imyaka 10 abikora kinyamwuga.'}
                            </p>

                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                {language === 'en'
                                    ? 'Under his leadership, NS IT Consulting & Training operates as a localized digital transformation catalyst—empowering small businesses, regional library networks, and public institutions to optimize workflows with customized Generative AI pipelines while maintaining a pristine IT security layer.'
                                    : 'Ayoboye neza itsinda rya NS IT Consulting & Training nk’umusemburo w’impinduramatwara ya digitale—gufasha ibigo bito, amasomero, n’inzego za leta koroshya imikorere binyuze mu bikoresho rya AI ndetse n’umutekano ukomeye w’itumanaho.'}
                            </p>

                            {/* Contact quick links */}
                            <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold text-slate-700">
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4 text-cyan-600" />
                                    <span>Kigali, Rwanda</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Mail className="w-4 h-4 text-cyan-600" />
                                    <span>nsaihub25@gmail.com</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Trust Certifications Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-cyan-600 font-semibold text-xs uppercase tracking-widest bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200">
                        {language === 'en' ? 'Verified Credentials' : 'Impamyabumenyi zizewe'}
                    </span>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
                        {language === 'en' ? 'Our Industry Certifications' : 'Ibigo n\'Impamyabumenyi Zitwemeza'}
                    </h2>
                    <p className="mt-3 text-slate-500 text-sm">
                        {language === 'en'
                            ? 'Our expertise is certified by premier global institutes to guarantee enterprise-level standardizations.'
                            : 'Ubumenyi n’ubuhanga bwacu bwemejwe n’ibigo bikomeye ku isi mu rwego rwo gukora kinyamwuga.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Cisco Certified', detail: 'Advanced network configurations, hardware routing protocols, LAN security optimization.', code: 'Cisco Routing & Switching' },
                        { title: 'Google Certified', detail: 'Professional Cloud Architecture, technical workspace deployment, analytics solutions.', code: 'Google Cloud & IT Support' },
                        { title: 'ILO Certified', detail: 'Business development methodologies & SMB growth advising strategies under International Labour Organization.', code: 'International Labour Org.' },
                        { title: 'Photostart Certified', detail: 'Digital branding, visual content creation storyboarding, media creation pipelines.', code: 'Visual Media & Storyboarding' }
                    ].map((cert, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-cyan-500/20 transition-all flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                                    <GraduationCap className="w-5 h-5 text-cyan-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg leading-tight">{cert.title}</h3>
                                <p className="mt-3 text-slate-500 text-xs leading-relaxed">{cert.detail}</p>
                            </div>
                            <span className="block mt-6 pt-4 border-t border-slate-50 text-[10px] font-bold text-cyan-600 tracking-wider uppercase">
                                {cert.code}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};
