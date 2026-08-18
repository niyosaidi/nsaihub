import React, { useState } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { ExternalLink, Filter, Folder, Image, Video, Award, Users } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'ai' | 'web-it' | 'design' | 'community';
  categoryLabel: string;
  description: string;
  descriptionRw: string;
  client: string;
  year: string;
  imageUrl: string;
  icon: React.ComponentType<{ className?: string }>;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Custom AI Assistant & Document Automation',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    description: 'Developed and integrated a custom Gemini API document summarization and email automation flow for a major local distributor in Kigali, reducing admin overhead by 45%.',
    descriptionRw: 'Twakoze kandi duhuza umufasha wa AI n’ibikorwa by’inyandiko dukoresheje Gemini API ku mucuruzi ukomeye i Kigali, bikaba byaragabanije akazi k’ubuyobozi ku kigero cya 45%.',
    client: 'Murakaza Logistics',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    icon: Award
  },
  {
    id: 'p2',
    title: 'Integrated Library Management System (KOHA)',
    category: 'web-it',
    categoryLabel: 'Web & IT Infrastructure',
    description: 'Deployed and customized KOHA system with full network cabling and server configuration for a regional resource center, accommodating over 5,000 active members.',
    descriptionRw: 'Gushyiraho no guhindura sisitemu ya KOHA, gukora insinga z’imiyoboro n’imikorere ya seriveri ku kigo cy’amashanyarazi mu karere, cyakira abanyamuryango basaga 5,000.',
    client: 'Kigali Knowledge Hub',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
    icon: Folder
  },
  {
    id: 'p3',
    title: 'Brand Identity & WordPress E-Commerce',
    category: 'design',
    categoryLabel: 'Digital Branding',
    description: 'Crafted a full modern visual identity, logo suite, and a lightning-fast responsive WordPress website for an organic Rwandan coffee exporter.',
    descriptionRw: 'Twakoze ikirango gishya n’ibimenyetso, ndetse n’urubuga rwa WordPress rukora neza ku muntu wohereza ikawa y’u Rwanda mu mahanga.',
    client: 'Gorilla Hills Coffee',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
    icon: Image
  },
  {
    id: 'p4',
    title: 'AI Literacy & Productivity Bootcamp',
    category: 'community',
    categoryLabel: 'Community Initiatives',
    description: 'Empowered 120+ local youth and young professionals with practical AI skills, prompt engineering, and digital content production under ILO guidelines.',
    descriptionRw: 'Hahuguwe urubyiruko n’abakozi basaga 120 ku bumenyi ngiro bwa AI, prompt engineering, n’iyandikwa rya raporo hakoreshejwe amabwiriza ya ILO.',
    client: 'Youth Empowerment Center',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    icon: Users
  },
  {
    id: 'p5',
    title: 'Social Video Storyboarding & Production',
    category: 'design',
    categoryLabel: 'Digital Branding',
    description: 'Produced a series of high-engagement vertical short-form TikTok and Instagram video edits utilizing AI tools for a tech startup campaign.',
    descriptionRw: 'Twakoze amashusho magufi ahagaze kuri TikTok na Instagram dukoresheje ibikoresho bya AI ku gikorwa cy’ikigo gishya cy’ikoranabuhanga.',
    client: 'Vuba Services',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
    icon: Video
  },
  {
    id: 'p6',
    title: 'Secure Enterprise WLAN & IT Diagnostic Audit',
    category: 'web-it',
    categoryLabel: 'Web & IT Infrastructure',
    description: 'Conducted comprehensive hardware diagnostic, custom macOS/Windows OS deployment, and optimized a dual-band secure Wi-Fi network across three office floors.',
    descriptionRw: 'Twasuzumye neza ibibazo by’ibikoresho, dushyiraho operating systems za macOS/Windows, kandi dushyiraho imiyoboro ya Wi-Fi ifite umutekano ku magorofa atatu y’ibiro.',
    client: 'Apex Trade Rwanda',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    icon: Folder
  }
];

export const PortfolioPage: React.FC = () => {
  const { language } = useLocalization();
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
            {language === 'en' ? 'Our Showcase' : 'Ibyo Twagezeho'}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
            {language === 'en' ? 'Portfolio & Case Studies' : 'Imishinga n\'Ibikorwa Byiza'}
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            {language === 'en' 
              ? 'Explore our successful deployments of generative AI, customized corporate branding, enterprise networks, and transformative training bootcamps.' 
              : 'Genzura imishinga myiza twarangije mu guhuza AI, gukora imyirondoro y’ibigo, kubaka imiyoboro y’itumanaho, n’amahugurwa y’ikoranabuhanga.'}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: language === 'en' ? 'All Work' : 'Byose' },
            { id: 'ai', label: language === 'en' ? 'Generative AI' : 'Generative AI' },
            { id: 'web-it', label: language === 'en' ? 'IT & Networks' : 'IT & Imiyoboro' },
            { id: 'design', label: language === 'en' ? 'Branding & Video' : 'Ibirango & Videwo' },
            { id: 'community', label: language === 'en' ? 'Bootcamps' : 'Amahugurwa Ngiro' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20 scale-105'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/60 hover:border-cyan-500/40 transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-slate-950 flex-shrink-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700/80 px-3 py-1 rounded-md text-xs font-semibold text-cyan-400 flex items-center gap-1.5 shadow-lg">
                    <Icon className="w-3.5 h-3.5" />
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
                      <span>Client: <strong className="text-slate-300 font-semibold">{item.client}</strong></span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {language === 'en' ? item.description : item.descriptionRw}
                    </p>
                  </div>

                  {/* Visual Indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer gap-1">
                    <span>{language === 'en' ? 'View Case Study details' : 'Reba ibikubiyemo'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call To Action Box */}
        <div className="mt-20 relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 p-8 sm:p-12 border border-slate-700/60 shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {language === 'en' 
                ? 'Ready to collaborate on your next digital milestone?' 
                : 'Wifuza gufatanya natwe ku mushinga wawe utaha?'}
            </h2>
            <p className="mt-4 text-base text-slate-400">
              {language === 'en'
                ? 'Let us partner together to build intelligent, custom-tailored enterprise infrastructure, modern brand assets, or empower your workforce with robust AI skillsets.'
                : 'Reka twubake hamwe ibikorwaremezo byizewe by’ikigo cyawe, ikirango kigezweho, cyangwa guha abakozi bawe ubumenyi bwizewe bwa AI.'}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-105 hover:shadow-cyan-400/30 transition-all text-center"
              >
                {language === 'en' ? 'Consult with Us (Free Tech Audit)' : 'Saba ubujyanama bw\'ubuntu'}
              </a>
              <a 
                href="#/services" 
                className="px-8 py-4 bg-slate-800 border border-slate-700 text-slate-200 font-semibold rounded-xl hover:bg-slate-700 transition-all text-center"
              >
                {language === 'en' ? 'Explore Specific Services' : 'Genzura Serivisi Zacu'}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
