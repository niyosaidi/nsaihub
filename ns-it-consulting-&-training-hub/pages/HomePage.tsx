import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import { Service, Course, Testimonial } from '../types';
import { ArrowRight, ShieldCheck, Users, Briefcase, Award, Zap } from 'lucide-react';

const ServiceOverviewCard: React.FC<{ service: Service; language: string }> = ({ service, language }) => (
  <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full hover:shadow-lg hover:shadow-cyan-500/5">
    <div>
      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-cyan-400/10 mb-6 flex-shrink-0 border border-cyan-400/20">
        <service.icon className="h-6 w-6 text-cyan-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">{service.title}</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.description}</p>
    </div>
    {service.bullets && service.bullets.length > 0 && (
      <ul className="text-xs text-slate-500 space-y-2.5 list-disc pl-4 mt-auto border-t border-slate-800/80 pt-6">
        {service.bullets.slice(0, 2).map((bullet, idx) => (
          <li key={idx} className="leading-relaxed text-slate-400">{bullet}</li>
        ))}
      </ul>
    )}
  </div>
);

const FeaturedCourseCard: React.FC<{ course: Course; language: string }> = ({ course, language }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-slate-100">
    <div className="relative h-48 overflow-hidden bg-slate-950 flex-shrink-0">
      <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700/80 px-3 py-1 rounded-md text-xs font-semibold text-cyan-400 shadow-md">
        {course.duration}
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg text-slate-900 mb-2 leading-tight">{course.title}</h3>
        <p className="text-xs text-cyan-600 font-semibold mb-4 uppercase tracking-wider">{language === 'en' ? 'Instructor' : 'Umwarimu'}: {course.instructor}</p>
        
        {course.bullets && course.bullets.length > 0 && (
          <ul className="text-xs text-slate-600 space-y-2 pl-4 list-disc mt-4 border-t border-slate-100 pt-4">
            {course.bullets.slice(0, 2).map((bullet, idx) => {
              const parts = bullet.split(':');
              const heading = parts[0];
              const detail = parts[1];
              return (
                <li key={idx} className="leading-relaxed">
                  {detail ? (
                    <>
                      <span className="font-semibold text-slate-800">{heading}:</span>
                      <span className="text-slate-600">{detail}</span>
                    </>
                  ) : (
                    <span className="text-slate-600">{bullet}</span>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <Link 
          to="/training" 
          className="inline-flex items-center text-xs font-bold text-slate-900 hover:text-cyan-600 transition-colors gap-1"
        >
          <span>{language === 'en' ? 'Learn More & Enroll' : 'Soma birambuye & Ikoreze'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  </div>
);

const HomeTestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-between h-full">
    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-serif text-xl font-bold shadow-md shadow-cyan-500/15">
      “
    </div>
    <p className="text-slate-600 italic leading-relaxed text-sm flex-grow pt-2">"{testimonial.quote}"</p>
    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3 flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-sm border border-slate-200">
        {testimonial.clientName.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-slate-900 text-sm">{testimonial.clientName}</p>
        <p className="text-xs text-cyan-600 font-semibold">{testimonial.company}</p>
      </div>
    </div>
  </div>
);

export const HomePage: React.FC = () => {
  const { t, language } = useLocalization();

  const servicesData = t('services.items');
  const services: Service[] = Array.isArray(servicesData) ? servicesData : [];

  const coursesData = t('training.courses');
  const courses: Course[] = Array.isArray(coursesData) ? coursesData : [];

  const testimonialsData = t('testimonials.items');
  const testimonials: Testimonial[] = Array.isArray(testimonialsData) ? testimonialsData : [];

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        {/* Glow elements */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20 inline-block mb-6 animate-pulse">
              {t('hero.tagline')}
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
              {language === 'en' ? 'Transforming Ideas into Intelligent Digital Solutions' : 'Ibisubizo by\'ikoranabuhanga na AI bigezweho'}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Empowering enterprises and individuals with world-class IT infrastructure engineering, customized Generative AI workflows, and practical hands-on technical bootcamps.'
                : 'Urufatiro rwa tekiniki n’amahugurwa bizewe mu guhuza AI na IT mu guteza imbere ubucuruzi bwanyu n’ubumenyi bw’abakozi.'}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-105 hover:shadow-cyan-400/30 transition-all text-center"
              >
                {t('hero.cta')}
              </Link>
              <Link 
                to="/training" 
                className="px-8 py-4 bg-slate-900 border border-slate-800 text-slate-200 font-semibold rounded-xl hover:bg-slate-800 hover:text-white transition-all text-center"
              >
                {language === 'en' ? 'Enroll in Training' : 'Injira mu mahugurwa'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Metrics Section */}
      <section className="bg-slate-900 border-y border-slate-800 py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
              <div className="bg-cyan-500/10 p-3 rounded-2xl border border-cyan-500/20 flex-shrink-0">
                <Briefcase className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">10+ Years</h3>
                <p className="text-sm text-slate-400 mt-1">{language === 'en' ? 'Enterprise ICT Experience' : 'Ubumenyi mu muco wa tekiniki'}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border-t border-slate-800 md:border-t-0 md:border-x md:border-slate-800 md:px-8">
              <div className="bg-cyan-500/10 p-3 rounded-2xl border border-cyan-500/20 flex-shrink-0">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Certified Experts</h3>
                <p className="text-sm text-slate-400 mt-1">Cisco, Google, ILO & Photostart</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border-t border-slate-800 md:border-t-0 md:pl-8">
              <div className="bg-cyan-500/10 p-3 rounded-2xl border border-cyan-500/20 flex-shrink-0">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">100+ Empowered</h3>
                <p className="text-sm text-slate-400 mt-1">{language === 'en' ? 'Youth & Young Professionals' : 'Urubyiruko n\'abakozi bafashijwe'}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Overview Section */}
      <section className="bg-slate-950 py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
              {language === 'en' ? 'Our Expert Offerings' : 'Serivisi zacu zihariye'}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('services.title')}
            </h2>
            <p className="mt-4 text-slate-400 text-base">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <ServiceOverviewCard key={service.id} service={service} language={language} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-transparent text-sm font-semibold rounded-xl text-slate-950 bg-gradient-to-r from-cyan-500 to-teal-500 hover:scale-105 shadow-lg shadow-cyan-500/10 transition-all"
            >
              <span>{language === 'en' ? 'Detailed Offerings & Portals' : 'Genzura amashuri na serivisi zose'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Courses Section */}
      <section className="bg-slate-50 py-24 sm:py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-600 font-semibold text-xs uppercase tracking-widest bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200">
              {language === 'en' ? 'Upskill Your Team' : 'Hagurukana ubumenyi rugezeho'}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t('training.title')}
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              {t('training.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {courses.map(course => (
              <FeaturedCourseCard key={course.id} course={course} language={language} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/training" 
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-300 text-sm font-semibold rounded-xl text-slate-900 bg-white hover:bg-slate-50 shadow-sm transition-all"
            >
              <span>{t('training.cta')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-600 font-semibold text-xs uppercase tracking-widest bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200">
              {language === 'en' ? 'Testimonials' : 'Abatanga ubuhamya'}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t('testimonials.title')}
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(testimonial => (
              <HomeTestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
