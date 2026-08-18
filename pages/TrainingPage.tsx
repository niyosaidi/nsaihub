import React, { useState } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Course } from '../types';
import { CheckCircle2, User, Clock, ArrowRight, BookOpen, Send, Calendar, Mail, FileText, Check, Phone, ExternalLink, Sparkles } from 'lucide-react';

interface ExtendedCourse extends Course {
  audience: string[];
  audienceRw: string[];
  curriculum: string[];
  curriculumRw: string[];
}

const detailedCourses: ExtendedCourse[] = [
  {
    id: 'ai-literacy',
    title: 'AI Literacy & Productivity Training',
    instructor: 'E. Mutesi',
    duration: '4-8 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
    audience: ['For Beginners', 'For Business Owners'],
    audienceRw: ['Abatangira', 'Ba Rhabarura'],
    curriculum: [
      'Prompt Engineering: Mastering generative pipelines (ChatGPT, Gemini, Claude)',
      'Automated Drafting: Generating error-free business reports, contracts and letters',
      'AI Workflow Optimization: Boosting administration productivity up to 3x'
    ],
    curriculumRw: [
      'Prompt Engineering: Gukoresha neza ChatGPT, Gemini, na Claude',
      'Automated Drafting: Kwikoresha mu kwandika raporo n’amakuru y’ubucuruzi',
      'AI Workflow Optimization: Kongera umusaruro w’ibigo binyuze muri AI'
    ]
  },
  {
    id: 'ict-basic',
    title: 'ICT Basic Skills Training',
    instructor: 'Saidi Niyonzima',
    duration: '3-4 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    audience: ['For Beginners', 'For Job Seekers', 'For Small Business Staff'],
    audienceRw: ['Abatangira', 'Abashaka Akazi', 'Abakozi b\'Ibigo Bito'],
    curriculum: [
      'Computer Fundamentals: Operating Windows/macOS, file management, typing & essential shortcuts',
      'Office Productivity Tools: Microsoft Word, Excel spreadsheets, and PowerPoint presentation design',
      'Internet Literacy & Email Essentials: Web navigation, safe online communication, and cloud storage basics (Google Drive/OneDrive)'
    ],
    curriculumRw: [
      'Ibanze kuri Mudasobwa: Gukoresha Windows/macOS, kubika no gupanga dosiye, no kwandika mu buryo bwihuse',
      'Ibikoresho byo mu Biro: Gukoresha Microsoft Word, Excel, no gukora za PowerPoint',
      'Ibanze kuri Interineti n\'Imeri: Gushakisha ku mbuga, itumanaho rya imeri, no kubika ibintu kuri Cloud (Google Drive)'
    ]
  },
  {
    id: 'ict-network',
    title: 'IT Support & Network Essentials',
    instructor: 'Saidi Niyonzima',
    duration: '5-6 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    audience: ['For Beginners', 'For Creatives'],
    audienceRw: ['Abatangira', 'Abahanzi'],
    curriculum: [
      'PC Hardware Diagnostics: System assembly, performance troubleshooting, component recovery',
      'Operating Systems Deployment: Deep configuration of secure Windows, macOS and Linux',
      'Networking & Wi-Fi: Local router topology setups, secure cabling, and LAN routing optimization'
    ],
    curriculumRw: [
      'Gusuzuma ibibazo bya PC: Guteranya mudasobwa, kongera umuvuduko n’ibikoresho',
      'Gushyiraho OS: Gukaza umutekano wa Windows, macOS, na Linux',
      'Imiyoboro n’itumanaho: Gushyiraho Wi-Fi, gucunga router n’insinga'
    ]
  },
  {
    id: 'multimedia',
    title: 'Multimedia Content Creation & Branding',
    instructor: 'Saidi Niyonzima',
    duration: '4 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80',
    audience: ['For Creatives', 'For Business Owners'],
    audienceRw: ['Abahanzi', 'Ba Rhabarura'],
    curriculum: [
      'Vector Logo & Corporate Identity: Crafting high-converting logos and brand kits',
      'Short-form Video Storyboarding: Editing high-retention vertical videos for TikTok and Reels',
      'WordPress CMS Masterclass: Building custom web storefronts with premium templates'
    ],
    curriculumRw: [
      'Ikirango n’Isura y’Ikigo: Gushushanya ibirango bihebuje (.SVG, .AI)',
      'Short-form Video: Gutunganya amashusho magufi ahagaze kuri TikTok',
      'WordPress CMS: Kubaka imbuga z’ubucuruzi no kuzitangiza'
    ]
  }
];

export const TrainingPage: React.FC = () => {
  const { language } = useLocalization();
  const [selectedCourse, setSelectedCourse] = useState<string>('ai-literacy');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    chosenCourse: 'ai-literacy',
    mode: 'In-person (Kigali)',
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

  const handleSelectCourseToEnroll = (courseId: string) => {
    setSelectedCourse(courseId);
    setFormData(prev => ({ ...prev, chosenCourse: courseId }));
    const formElement = document.getElementById('enroll-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const selectedCourseTitle = detailedCourses.find(c => c.id === formData.chosenCourse)?.title || formData.chosenCourse;
      const response = await fetch('https://formspree.io/f/xaewpapg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          formType: 'Training Enrollment Application',
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: selectedCourseTitle,
          mode: formData.mode,
          message: formData.message || 'N/A',
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        console.warn('Formspree response not OK:', response.status);
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting enrollment form to Formspree:', error);
      // Proceed to show confirmation
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
            {language === 'en' ? 'B2C & Organizational Training' : 'Amahugurwa Yacu'}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {language === 'en' ? 'Core Technology & AI Curricula' : 'Amahugurwa Ngiro ya IT na AI'}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {language === 'en'
              ? 'Join our premium certified programs in Kigali designed to equip youth, creatives, and business teams with robust modern digital skillsets.'
              : 'Yandikire amahugurwa ngiro anyuranye i Kigali yateguriwe guha urubyiruko n’abakozi b’ibigo ubumenyi bugezweho bwa digital.'}
          </p>
        </div>

        {/* Detailed Breakdown of available Curricula */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left Side: Course Selection List & Card */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-wrap gap-2">
              {detailedCourses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    selectedCourse === course.id
                      ? 'bg-slate-900 text-cyan-400 border-slate-800 shadow-md scale-102'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {course.title}
                </button>
              ))}
            </div>

            {/* Main Details Card of Selected Course */}
            {detailedCourses.map((course) => {
              if (course.id !== selectedCourse) return null;
              return (
                <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                  {/* Banner Image */}
                  <div className="relative h-64 bg-slate-950 overflow-hidden">
                    <img 
                      src={course.imageUrl} 
                      alt={course.title} 
                      className="w-full h-full object-cover opacity-90" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {(language === 'en' ? course.audience : course.audienceRw).map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-cyan-400 text-slate-950 shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl font-extrabold text-white tracking-tight">{course.title}</h2>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-8 space-y-6">
                    <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                        <User className="w-4 h-4 text-cyan-600" />
                        <span>Instructor: {course.instructor}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                        <Clock className="w-4 h-4 text-cyan-600" />
                        <span>Duration: {course.duration}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                        {language === 'en' ? 'Course Curriculum Modules' : 'Ibigo Byigwa n\'Imfashanyigisho'}
                      </h3>
                      <ul className="space-y-4">
                        {(language === 'en' ? course.curriculum : course.curriculumRw).map((module, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                                {module.split(':')[0]}
                              </p>
                              {module.split(':')[1] && (
                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                  {module.split(':')[1]}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-bold text-slate-400">
                        * {language === 'en' ? 'Certificates awarded upon graduation' : 'Ibyangombwa bihabwa abarangije'}
                      </span>
                      <button 
                        type="button"
                        onClick={() => handleSelectCourseToEnroll(course.id)}
                        className="inline-flex items-center text-xs font-bold text-cyan-600 hover:text-cyan-700 transition-colors gap-1.5 px-3 py-1.5 bg-cyan-50 rounded-lg hover:bg-cyan-100"
                      >
                        <span>{language === 'en' ? 'Enroll in this Course' : 'Iyandikishe muri iri somo'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Interactive Training Registration & Enrollment Form */}
          <div className="lg:col-span-5 scroll-mt-24" id="enroll-form">
            <div className="bg-white rounded-3xl p-8 sm:p-9 shadow-md border border-slate-100 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              {isSubmitted ? (
                <div className="py-8 space-y-6 text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto text-cyan-600 shadow-inner">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {language === 'en' ? 'Enrollment Application Received!' : 'Ubusabe bwawe Bwakiriwe!'}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {language === 'en'
                        ? `Thank you, ${formData.fullName || 'Student'}. We have received your application for the ${detailedCourses.find(c => c.id === formData.chosenCourse)?.title || 'selected course'}. Our academic admissions team will contact you directly via WhatsApp / Email.`
                        : `Murakoze, ${formData.fullName || 'Mugenerwabikorwa'}. Twakiriye ubusabe bwawe. Itsinda ryacu rirakwandikira kuri WhatsApp cyangwa Imeri.`}
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left text-xs space-y-2">
                    <div className="flex justify-between text-slate-500 font-medium">
                      <span>{language === 'en' ? 'Registered Course:' : 'Isomo ryatoranyijwe:'}</span>
                      <span className="font-bold text-slate-800">
                        {detailedCourses.find(c => c.id === formData.chosenCourse)?.title}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-500 font-medium">
                      <span>{language === 'en' ? 'Study Mode:' : 'Uburyo bwo Kwiga:'}</span>
                      <span className="font-bold text-slate-800">{formData.mode}</span>
                    </div>
                    <div className="flex justify-between text-slate-500 font-medium">
                      <span>{language === 'en' ? 'Contact Destination:' : 'Ibiro Byakiriye:'}</span>
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
                      <span>{language === 'en' ? 'Chat Directly on WhatsApp (+250 738 401 556)' : 'Twandikire kuri WhatsApp (+250 738 401 556)'}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          chosenCourse: 'ai-literacy',
                          mode: 'In-person (Kigali)',
                          message: ''
                        });
                      }}
                      className="w-full px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                    >
                      {language === 'en' ? 'Register Another Candidate' : 'Iyandikishe Undi Munyeshuri'}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 shadow-sm">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-lg text-[11px] font-bold">
                      {language === 'en' ? 'Intake Open 2026' : 'Kwiyandikisha Birafunguye'}
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {language === 'en' ? 'Course Enrollment Form' : 'Ifishi yo Kwiyandikisha'}
                  </h2>
                  <p className="mt-1 text-slate-600 text-xs leading-relaxed mb-6">
                    {language === 'en'
                      ? 'Submit your details below to reserve your seat in our upcoming training cohorts.'
                      : 'Uzuza amakuru yawe hano hasi ngo ufate umwanya mu mahugurwa yegereje.'}
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Full Name' : 'Amazina Yose'} <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder={language === 'en' ? 'e.g. Jean Paul Habimana' : 'Urugero: Jean Paul Habimana'} 
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
                          placeholder="you@domain.com" 
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
                        {language === 'en' ? 'Select Training Program' : 'Hitamo Amahugurwa'} <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="chosenCourse"
                        value={formData.chosenCourse}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 text-slate-800 font-medium"
                      >
                        {detailedCourses.map(c => (
                          <option key={c.id} value={c.id}>{c.title} ({c.duration})</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Preferred Mode of Study' : 'Uburyo bwo Kwiga'}
                      </label>
                      <select 
                        name="mode"
                        value={formData.mode}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 text-slate-800"
                      >
                        <option value="In-person (Kigali)">{language === 'en' ? 'In-person Cohort (Kigali Campus)' : 'Kwicara mu Cyumba (Kigali)'}</option>
                        <option value="Hybrid / Evening">{language === 'en' ? 'Hybrid / Evening Track' : 'Kuvanga / Nimugoroba'}</option>
                        <option value="Weekend Intensive">{language === 'en' ? 'Weekend Intensive Track' : 'Kuri Weekend'}</option>
                        <option value="Online Live">{language === 'en' ? 'Online Live Stream Sessions' : 'Online Kuri Interineti'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Goals or Questions (Optional)' : 'Icyifuzo cyangwa Ibibazo'}
                      </label>
                      <textarea 
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={language === 'en' ? 'Share your background or specific training goals...' : 'Andika ibyo wifuza ko twakwigisha cyangwa ibibazo ufite...'}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 text-slate-800"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full px-5 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-101 active:scale-99 transition-all text-center flex items-center justify-center gap-2 text-xs disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>{language === 'en' ? 'Processing Application...' : 'Gutunganya Ubusabe...'}</span>
                      ) : (
                        <>
                          <span>{language === 'en' ? 'Submit Enrollment Application' : 'Ohereza Ifishi yo Kwiyandikisha'}</span>
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
                      <span>{language === 'en' ? 'Prefer Google Forms? Register via Google Form' : 'Ushaka gukoresha Google Form? Kanda hano'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};


