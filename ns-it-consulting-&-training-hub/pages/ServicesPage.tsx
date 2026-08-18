import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import { Service } from '../types';
import { ArrowRight, X, Shield, Users, Layers, Zap, Info, CheckCircle2 } from 'lucide-react';

interface ExtendedService extends Service {
  extendedDescription?: string;
  useCases?: string[];
  deliverables?: string[];
}

export const ServicesPage: React.FC = () => {
  const { t, language } = useLocalization();
  const [selectedService, setSelectedService] = useState<ExtendedService | null>(null);

  const servicesData = t('services.items');
  const rawServices: Service[] = Array.isArray(servicesData) ? servicesData : [];

  // Add robust detailed data for the dynamic modals
  const extendedData: Record<string, Partial<ExtendedService>> = {
    'ai-integration': {
      extendedDescription: language === 'en'
        ? 'Deploy state-of-the-art Generative AI capabilities safely inside your team workflows. Our tailored workshops and API configurations utilize systems like OpenAI GPT-4, Gemini Pro, and Claude 3.5 to create localized, proprietary models, automate business administration, draft legal compliance reviews, and train your staff on elite prompt engineering methodologies.'
        : 'Shyira mu bikorwa ikoranabuhanga rya AI (Generative AI) ryizewe mu mirimo ya buri munsi y’abakozi. Twandika neza prompts, tugahuza API zitandukanye (Gemini Pro, GPT-4, Claude), kandi twayobora ibigo ku gukoresha neza amategeko n’amabwiriza y’umutekano.',
      useCases: language === 'en' 
        ? ['Custom customer-support automation bots', 'AI-assisted vertical storyboard & video content pipelines', 'Autonomous invoice & transaction auto-categorization tools']
        : ['Ubufasha bw’abakiriya bukoresha AI bwikora', 'Ikorwa ry’amashusho magufi ya tekiniki dukoresheje AI', 'Gucunga neza inyemezabwishyu zikoresha AI'],
      deliverables: language === 'en'
        ? ['Tailored Prompt Library & Playbooks', 'Gemini API integration source-code', 'Staff AI Literacy Training certificate']
        : ['Prompt Library n’igitabo cy’amabwiriza', 'Guhuza Gemini API n’izindi mbuga', 'Impamyabumenyi z’amahugurwa ya AI']
    },
    'it-infrastructure': {
      extendedDescription: language === 'en'
        ? 'From initial topology design to live-cabling audits, we engineer secure and robust Local Area Networks (LAN/WLAN) that withstand enterprise demands. We provide deep hardware forensic diagnosis, secure dual-boot multi-OS configuration, and mount specialized library catalog tools (KOHA/eLMIS) built to withstand regional power limits.'
        : 'Kuva ku gushushanya imiterere y’itumanaho kugeza ku gushyiraho insinga, twubaka imiyoboro y’imbere (LAN/WLAN) ifite umutekano ukomeye. Tubasuzumira neza ibibazo bya hardware, tugashyiraho operating systems, kandi tugatunganya sisitemu zihariye nka KOHA cyangwa eLMIS.',
      useCases: language === 'en'
        ? ['Enterprise multi-floor Wi-Fi security auditing', 'Regional public library resource center installations', 'Preventative IT hardware recovery maintenance protocols']
        : ['Igenzura ry’umutekano ku miyoboro ya Wi-Fi y’ibigo', 'Gushyiraho sisitemu z’amasomero y’igihugu', 'Kugarura no kubungabunga ibikoresho bya mudasobwa'],
      deliverables: language === 'en'
        ? ['Full network topology diagram layout', 'Secure OS deployment checklist', '30-day post-installation remote telemetry monitoring']
        : ['Igishushanyo mbonera cy’imiyoboro y’itumanaho', 'Urutonde rwo gukaza umutekano wa OS', 'Iminsi 30 y’ubufasha buhoraho bwa tekiniki']
    },
    'digital-branding': {
      extendedDescription: language === 'en'
        ? 'Your corporate identity is your digital storefront. We specialize in pixel-perfect visual design, customized vector logo suites, and responsive, secure, lightning-fast WordPress content management platforms. Our workflow integrates advanced media storytelling, short-form vertical video edits for social algorithms, and SEO optimization.'
        : 'Isura y’ikigo cyawe ni cyo kigaragaza ubunyamwuga bwawe. Gukora ibirango bishya n’ibimenyetso, ndetse n’urubuga rwa WordPress rukora neza kandi rwihuta cyane rufite umutekano. Dutambutsamo amashusho magufi (TikTok, Instagram) na SEO ikoranye ubuhanga.',
      useCases: language === 'en'
        ? ['Modern e-commerce platform for agricultural export', 'Corporate visual identity guidelines and media kit design', 'TikTok/YouTube video production and digital growth management']
        : ['Urubuga rw’ubucuruzi bw’ikawa n’icyayi bikoherezwa mu mahanga', 'Ibitabo by’amabwiriza n’ibirango by’ibigo bishya', 'Ikorwa n’isaranganya ry’amashusho kuri TikTok na YouTube'],
      deliverables: language === 'en'
        ? ['Vector master file logo suite (.SVG, .AI, .PNG)', 'Fully responsive customized WordPress website deployment', 'Social video strategy blueprint']
        : ['Ibirango mu buryo bwa vector formats (.SVG, .AI)', 'Urubuga rwa WordPress rugezweho rukoranye umutekano', 'Igishushanyo mbonera cy’isaranganya ry’amashusho']
    }
  };

  const services: ExtendedService[] = rawServices.map(s => ({
    ...s,
    ...extendedData[s.id]
  }));

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-100 rounded-full border border-cyan-200">
            {language === 'en' ? 'B2B Solutions' : 'Ibisubizo ku Bigo'}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {t('services.title')}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid with Hover Effects */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex flex-col justify-between h-full hover:shadow-xl hover:border-cyan-500/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-cyan-50 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <Icon className="h-7 w-7 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-cyan-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center text-xs font-bold text-cyan-600 group-hover:text-cyan-700 transition-colors gap-1.5"
                  >
                    <span>{language === 'en' ? 'View Details & Use Cases' : 'Reba ibikubiyemo byose'}</span>
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative">
              
              {/* Header inside modal */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-6 py-4 border-b border-slate-100 flex justify-between items-center z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                    {React.createElement(selectedService.icon, { className: "w-5 h-5 text-cyan-600" })}
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 line-clamp-1">{selectedService.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content inside modal */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    {language === 'en' ? 'Detailed Description' : 'Ibisobanuro birambuye'}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedService.extendedDescription}
                  </p>
                </div>

                {/* Bullets */}
                {selectedService.bullets && selectedService.bullets.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {language === 'en' ? 'Core Capabilities' : 'Ubumenyi n\'ubuhanga'}
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600 Pl-4">
                      {selectedService.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sample Use Cases */}
                {selectedService.useCases && selectedService.useCases.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {language === 'en' ? 'Sample Use Cases' : 'Ibyo Twakoreye Abandi'}
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {selectedService.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Deliverables */}
                {selectedService.deliverables && selectedService.deliverables.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {language === 'en' ? 'What you receive' : 'Ibyo Mutsyikirizwa'}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500">
                      {selectedService.deliverables.map((del, idx) => (
                        <li key={idx} className="bg-slate-50 border border-slate-100 p-2.5 rounded-lg font-semibold flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer action inside modal */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-end rounded-b-3xl">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-150 rounded-xl text-center"
                >
                  {language === 'en' ? 'Cancel' : 'Guhagarika'}
                </button>
                <Link
                  to="/contact"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 text-sm font-bold rounded-xl hover:scale-102 transition-transform shadow-md text-center"
                >
                  {language === 'en' ? 'Request Free Tech Audit' : 'Saba ubujyanama bw\'ubuntu'}
                </Link>
              </div>

            </div>
          </div>
        )}

        {/* Main call to action block */}
        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight">
              {language === 'en' ? 'Request a Free Tech Audit' : 'Saba Ubujyanama n\'Igenzura rya Tekiniki'}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              {language === 'en'
                ? 'We evaluate your current network stability, diagnose computer hardware health, and identify customized AI integration bottlenecks entirely for free.'
                : 'Tuzasuzuma neza imiyoboro y’itumanaho ry’ikigo cyanyu, twandike ibibazo bya hardware, kandi tugaragaze uburyo bwiza bwo guhuza AI mu koroshya imikorere.'}
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <span>{language === 'en' ? 'Consult with Us' : 'Twandikire uyu munsi'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
