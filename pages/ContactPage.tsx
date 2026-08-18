import React, { useState } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Mail, Phone, MapPin, ExternalLink, Send, Check, MessageSquare, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
    const { language } = useLocalization();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: 'Generative AI & Automation Consulting',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch('https://formspree.io/f/xppaykgp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    formType: 'Contact & Consultation Request',
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                    submittedAt: new Date().toISOString()
                })
            });

            if (!response.ok) {
                console.warn('Formspree response not OK:', response.status);
            }
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting contact form to Formspree:', error);
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen text-slate-800 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="px-3 py-1 text-xs font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-100 rounded-full border border-cyan-200">
                        {language === 'en' ? 'Get In Touch' : 'Twandikire'}
                    </span>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        {language === 'en' ? 'Contact Us & Book Consultations' : 'Twandikire & Ushake Ubujyanama'}
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">
                        {language === 'en'
                            ? 'Have an upcoming network infrastructure deployment, custom AI pipeline requirement, or training registration question? Let us consult.'
                            : 'Mufite imishinga y\'itumanaho rya mudasobwa, guhuza AI m’ubucuruzi, cyangwa kwiyandikisha mu masomo? Turi hano ngo tubafashe.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
                    
                    {/* Left Side: Dynamic Contact Details & Direct Channels */}
                    <div className="lg:col-span-5 bg-slate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border border-slate-900 shadow-xl">
                        {/* Glow blobs */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
                        
                        <div className="relative space-y-10">
                            <div>
                                <h2 className="text-2xl font-extrabold text-white tracking-tight">
                                    {language === 'en' ? 'Direct Contact Channels' : 'Imiyoboro Ituryaho'}
                                </h2>
                                <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                                    {language === 'en'
                                        ? 'Reach our CEO & Lead Consultant directly for priority project assessments.'
                                        : 'Andikira Saidi Niyonzima, Umuyobozi wacu cyangwa umujyanama mukuru.'}
                                </p>
                            </div>

                            <div className="space-y-6 text-sm">
                                <div className="flex items-start gap-4">
                                    <div className="bg-cyan-500/10 p-2.5 rounded-xl border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-[10px] tracking-wider text-slate-400">
                                            {language === 'en' ? 'Headquarters' : 'Ibiro Bikuru'}
                                        </h4>
                                        <p className="mt-1 text-slate-300 leading-relaxed">
                                            Kigali, Nyarugenge, KN 2 Av 266
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-cyan-500/10 p-2.5 rounded-xl border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-[10px] tracking-wider text-slate-400">
                                            {language === 'en' ? 'Corporate Email' : 'Imeri'}
                                        </h4>
                                        <p className="mt-1 text-cyan-400 font-semibold break-all">
                                            nsaihub25@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-cyan-500/10 p-2.5 rounded-xl border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-[10px] tracking-wider text-slate-400">
                                            {language === 'en' ? 'Phone & WhatsApp' : 'Telefone / WhatsApp'}
                                        </h4>
                                        <a 
                                            href="https://wa.me/250738401556" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="mt-1 text-slate-300 hover:text-cyan-400 transition-colors font-bold flex items-center gap-1.5"
                                        >
                                            <span>+250 738 401 556</span>
                                            <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/30 rounded text-[9px] font-bold text-green-400 uppercase tracking-wide">
                                                WhatsApp
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social connections */}
                        <div className="relative pt-8 border-t border-slate-800/80 mt-8">
                            <h4 className="font-bold text-slate-400 uppercase text-[10px] tracking-wider mb-3">
                                {language === 'en' ? 'Official Social Media Channels' : 'Imiyoboro Nkoranyambaga Yemewe'}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <a 
                                    href="https://www.instagram.com/nsaihub25/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="Instagram"
                                    className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-all flex items-center gap-1.5 text-xs font-semibold group"
                                >
                                    <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                    <span>Instagram</span>
                                </a>
                                <a 
                                    href="https://www.facebook.com/profile.php?id=61588621583737" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="Facebook"
                                    className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all flex items-center gap-1.5 text-xs font-semibold group"
                                >
                                    <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    <span>Facebook</span>
                                </a>
                                <a 
                                    href="https://www.tiktok.com/@nsaihub" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="TikTok"
                                    className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-1.5 text-xs font-semibold group"
                                >
                                    <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.05.86.14V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.58a8.27 8.27 0 0 0 4.84 1.56V6.69h-1.07z"/>
                                    </svg>
                                    <span>TikTok</span>
                                </a>
                                <a 
                                    href="https://x.com/nsaihub250" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="X"
                                    className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all flex items-center gap-1.5 text-xs font-semibold group"
                                >
                                    <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                    <span>X</span>
                                </a>
                                <a 
                                    href="https://www.youtube.com/@NSAiHubrw" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="YouTube"
                                    className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-all flex items-center gap-1.5 text-xs font-semibold group"
                                >
                                    <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                    <span>YouTube</span>
                                </a>
                            </div>
                        </div>

                        {/* Response Guarantee */}
                        <div className="relative pt-6 border-t border-slate-800/80 mt-6">
                            <h4 className="font-bold text-slate-500 uppercase text-[10px] tracking-wider mb-2">
                                {language === 'en' ? 'Response Guarantee' : 'Isezerano ry\'Igisubizo'}
                            </h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                {language === 'en'
                                    ? 'Inquiries are addressed within 12-24 business hours by our technical team.'
                                    : 'Ibibazo n\'ubusabe bisubizwa mu masaha 12-24 n\'itsinda ryacu ry\'abahanga.'}
                            </p>
                        </div>

                    </div>

                    {/* Right Side: Interactive Contact & Consultation Form */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
                        
                        {isSubmitted ? (
                            <div className="py-8 space-y-6 text-center">
                                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto text-cyan-600 shadow-inner">
                                    <Check className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                        {language === 'en' ? 'Message Sent Successfully!' : 'Ubutumwa Bwoherejwe Neza!'}
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                        {language === 'en'
                                            ? `Thank you, ${formData.fullName || 'Client'}. Your consultation request has been received. Our advisory team will reach out via WhatsApp / Email (${formData.email || 'your email'}) shortly.`
                                            : `Murakoze, ${formData.fullName || 'Mugenerwabikorwa'}. Twakiriye ubusabe bwawe. Itsinda ryacu ry'inzobere rirakwandikira mu kanya gato.`}
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left text-xs space-y-2">
                                    <div className="flex justify-between text-slate-500 font-medium">
                                        <span>{language === 'en' ? 'Consultation Subject:' : 'Icyifuzo cyangwa Impamvu:'}</span>
                                        <span className="font-bold text-slate-800">{formData.subject}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-500 font-medium">
                                        <span>{language === 'en' ? 'Direct Email Hub:' : 'Ibiro Byakiriye:'}</span>
                                        <span className="font-bold text-cyan-600">nsaihub25@gmail.com</span>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <a
                                        href="https://wa.me/250738401556"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-md text-xs flex items-center justify-center gap-2 transition-colors"
                                    >
                                        <span>{language === 'en' ? 'Speed Up via WhatsApp (+250 738 401 556)' : 'Komeza kuri WhatsApp (+250 738 401 556)'}</span>
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({
                                                fullName: '',
                                                email: '',
                                                phone: '',
                                                subject: 'Generative AI & Automation Consulting',
                                                message: ''
                                            });
                                        }}
                                        className="w-full px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                                    >
                                        {language === 'en' ? 'Send Another Message' : 'Ohereza Ubundi Butumwa'}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 shadow-sm">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <span className="px-2.5 py-1 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-lg text-[11px] font-bold">
                                        {language === 'en' ? 'Free Initial Assessment' : 'Ubujyanama bw\'Ibanze'}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                    {language === 'en' ? 'Send a Message or Request Consultation' : 'Ohereza Ubutumwa cyangwa Saba Ubujyanama'}
                                </h2>
                                <p className="mt-1 text-slate-600 text-xs leading-relaxed mb-6">
                                    {language === 'en'
                                        ? 'Fill out the form below and our technical leads will get back to you with tailored advice.'
                                        : 'Uzuza amakuru yawe hano hasi maze impuguke zacu ziguhe amakuru n\'ubufasha bukwiye.'}
                                </p>

                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                            {language === 'en' ? 'Your Name' : 'Amazina Yawe'} <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder={language === 'en' ? 'e.g. Marie Claire Uwase' : 'Urugero: Marie Claire Uwase'} 
                                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 text-slate-800"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                                {language === 'en' ? 'Email Address' : 'Imeri'} <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="you@company.com" 
                                                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 text-slate-800"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                                {language === 'en' ? 'Phone / WhatsApp' : 'Telefone / WhatsApp'} <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+250 7..." 
                                                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 text-slate-800"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                            {language === 'en' ? 'Topic / Consultation Purpose' : 'Impamvu / Icyo Ukeneye'} <span className="text-red-500">*</span>
                                        </label>
                                        <select 
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 text-slate-800 font-medium"
                                        >
                                            <option value="Generative AI & Automation Consulting">
                                                {language === 'en' ? 'Generative AI & Enterprise Automation Consulting' : 'Ubujyanama bwa AI n\'Ikoranabuhanga'}
                                            </option>
                                            <option value="Enterprise IT & Network Support / Security Audit">
                                                {language === 'en' ? 'Enterprise IT, Network Support & Hardware Diagnostics' : 'Gushyiraho Imiyoboro ya IT & Gukemura Ibibazo bya PC'}
                                            </option>
                                            <option value="ICT Basic Skills & Staff Training Programs">
                                                {language === 'en' ? 'ICT Basic Skills & Corporate Staff Training' : 'Amahugurwa y\'Ibanze ya ICT & Kwigisha Abakozi'}
                                            </option>
                                            <option value="WordPress & Corporate Branding Design">
                                                {language === 'en' ? 'WordPress Web Storefronts & Brand Kit Design' : 'Kubaka Urubuga rwa WordPress & Ibirango'}
                                            </option>
                                            <option value="General Inquiry & Partnerships">
                                                {language === 'en' ? 'General Inquiry / Partnership Opportunities' : 'Ibindi bibazo / Ubufatanye'}
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                            {language === 'en' ? 'Detailed Message' : 'Ubutumwa Bwawe'} <span className="text-red-500">*</span>
                                        </label>
                                        <textarea 
                                            name="message"
                                            rows={3}
                                            required
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder={language === 'en' ? 'Describe your project requirements, timeline, or consultation goals...' : 'Sobanura umushinga wawe, igihe wifuza ko uzakorwa, cyangwa ibyo ukeneye...'}
                                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 text-slate-800"
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full px-5 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-101 active:scale-99 transition-all text-center flex items-center justify-center gap-2 text-xs disabled:opacity-75"
                                    >
                                        {isSubmitting ? (
                                            <span>{language === 'en' ? 'Submitting Message...' : 'Kohereza Ubutumwa...'}</span>
                                        ) : (
                                            <>
                                                <span>{language === 'en' ? 'Send Message & Book Consultation' : 'Ohereza & Saba Ubujyanama'}</span>
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Alternative Google Forms link option */}
                                <div className="pt-4 mt-4 border-t border-slate-100 text-center">
                                    <a 
                                        href="https://forms.gle/avsPpybQBbqb5Rjv8" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                                    >
                                        <span>{language === 'en' ? 'Prefer Google Forms? Open Official Google Form' : 'Ushaka gukoresha Google Form? Kanda hano'}</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};


