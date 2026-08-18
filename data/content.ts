
import { Language, LocalizedContent } from '../types';
import { CodeBracketIcon, MegaphoneIcon, SparklesIcon, BriefcaseIcon } from '../components/IconComponents';

export const content: Record<Language, LocalizedContent> = {
  [Language.EN]: {
    nav: {
      home: 'Home',
      services: 'Services',
      training: 'Training Programs',
      portfolio: 'Portfolio',
      about: 'About Us',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Empowering Rwandan Futures',
      title: 'Innovative IT & AI Solutions for a Digital Age',
      subtitle: 'From custom software to expert training, we are your partners in digital transformation. Leveraging technology to build a stronger Rwanda.',
      cta: 'Explore Our Services',
    },
    services: {
      title: 'Services Offered (B2B & Enterprise)',
      subtitle: 'Tailored technology and AI integrations to elevate your business.',
      items: [
        { 
          id: 'ai-integration', 
          title: 'Generative AI Integration & Automation', 
          description: 'Implementing customized AI workflows and prompt engineering solutions to streamline content, support, and administrative workflows.', 
          icon: SparklesIcon,
          bullets: [
            'Implementing customized AI workflows for small-to-medium businesses (SMBs), non-profits, and educational centers.',
            'Prompt engineering solutions to streamline content generation, customer support, and administrative workflows using tools like ChatGPT, Gemini, and Claude.',
            'AI-powered video, audio, and visual branding assets for marketing campaigns.'
          ]
        },
        { 
          id: 'it-infrastructure', 
          title: 'Managed IT Infrastructure & Network Support', 
          description: 'End-to-end local network design, cable infrastructure, hardware diagnostics, OS deployment, and specialized software maintenance.', 
          icon: CodeBracketIcon,
          bullets: [
            'Local Area Network (LAN/WLAN) design, cable infrastructure, and security optimization.',
            'PC/laptop hardware diagnostic, multi-OS deployment (Windows, Linux, macOS), and software maintenance.',
            'Specialized system installation and configuration (e.g., library/inventory management tools like KOHA and eLMIS).'
          ]
        },
        { 
          id: 'digital-branding', 
          title: 'Digital Branding, Web Management & Content Creation', 
          description: 'Corporate visual identity, custom WordPress setup, ongoing technical maintenance, and video production for digital channels.', 
          icon: MegaphoneIcon,
          bullets: [
            'Corporate logo design, visual identity creation, and marketing collateral design.',
            'Custom WordPress web setup, deployment, and ongoing technical maintenance.',
            'Short-form vertical video editing and visual content production for digital channels (YouTube, TikTok).'
          ]
        },
      ],
      cta: 'Book a Free Consultation',
    },
    training: {
      title: 'Training Programs Offered (B2C & Organizations)',
      subtitle: 'Industry-aligned ICT and AI literacy programs to upskill teams and individuals.',
      courses: [
        { 
          id: 'ai-literacy', 
          title: 'AI Literacy & Productivity Training', 
          instructor: 'E. Mutesi', 
          duration: '4-8 Weeks', 
          imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
          bullets: [
            'AI Basics for Professionals: Practical training on prompt engineering, automated report drafting, and workflow optimization.',
            'Generative AI for Creators & Marketers: Multimedia generation (text-to-image, video production, digital storytelling).',
            'AI for Business Growth: Guidance on leveraging AI tools to scale micro-enterprises and SMBs (aligned with ILO advising methodologies).'
          ]
        },
        { 
          id: 'ict-basic', 
          title: 'ICT Basic Skills Training', 
          instructor: 'Saidi Niyonzima', 
          duration: '3-4 Weeks', 
          imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
          bullets: [
            'Computer & OS Essentials: Fundamentals of operating systems, file organization, typing, and system navigation.',
            'Office Application Mastery: Hands-on training in Microsoft Word, Excel data processing, and PowerPoint presentations.',
            'Internet & Digital Communication: Safe web browsing, professional email writing, online security, and cloud storage basics.'
          ]
        },
        { 
          id: 'ict-network', 
          title: 'Core ICT & Network Essentials Training', 
          instructor: 'F. Gakire', 
          duration: '5-6 Weeks', 
          imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
          bullets: [
            'PC Hardware, Maintenance & Security Fundamentals: Diagnostic skills, system assembly, and basic cybersecurity best practices.',
            'Networking Fundamentals: Wi-Fi setup, router configuration, cabling, and local network troubleshooting.'
          ]
        }
      ],
      cta: 'View All Courses',
    },
    testimonials: {
      title: 'Success Stories',
      subtitle: 'What our clients say about us.',
      items: [
        { id: 't1', quote: "NS IT's AI-powered customer support transformed our workflow. We've seen a 40% increase in efficiency.", clientName: 'Mucyo', company: 'Kigali Innovations' },
        { id: 't2', quote: "The SEO training was incredibly insightful. Our website traffic has doubled in just three months. Highly recommended!", clientName: 'Anitha', company: 'Rwanda Crafts Co.' },
        { id: 't3', quote: "Their team designed and developed a beautiful, functional website that perfectly represents our brand. The process was seamless.", clientName: 'David', company: 'Lakeside Hotel' },
      ],
    },
    about: {
      title: 'About NS IT Consulting & Training',
      missionTitle: 'Our Mission',
      missionText: 'To be a catalyst for digital transformation in Rwanda and beyond, providing innovative IT solutions and high-quality skills training that empower businesses and individuals to thrive in the global digital economy.',
      visionTitle: 'Our Vision',
      visionText: 'To be the leading and most trusted technology partner in the region, recognized for our commitment to excellence, integrity, and contributing to Rwanda\'s journey as a knowledge-based economy.',
      teamTitle: 'Meet Our Experts',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We are here to help. Reach out to us for consultations, service inquiries, or training information.',
      address: 'Address',
      office: 'Kigali, Nyarugenge, KN 2 Av 266',
      email: 'Email',
      emailAddress: 'nsaihub25@gmail.com',
      phone: 'Phone',
      cta: 'Send Message',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
      },
    },
    portal: {
        title: 'Client Portal',
        subtitle: 'Secure access to your projects and support.',
        login: 'Login',
        email: 'Email Address',
        password: 'Password',
        welcome: 'Welcome Back',
        dashboardTitle: 'Your Dashboard',
        projects: 'Ongoing Projects',
        invoices: 'Invoices',
        support: 'Support Tickets',
    },
    chatbot: {
      greeting: "Hello! I'm the NS IT assistant. How can I help you today? You can ask me about our services, training, or how to book a consultation.",
      placeholder: 'Ask about services or training...',
      systemInstruction: "You are a friendly and helpful assistant for NS IT Consulting and Training, a company in Rwanda. Your role is to answer questions about our services (IT Technical Services, Ai Solutions, Business Support, Digital Marketing), training courses (Social Media, SEO, AI, Web Design), and how to book a consultation. Be concise and professional. If you don't know an answer, advise the user to contact us directly at nsaihub25@gmail.com. Do not answer questions outside of this scope."
    },
    footer: {
        about: "Your partner in digital transformation, based in the heart of Africa.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us"
    },
  },
  [Language.RW]: {
    nav: {
      home: 'Ahabanza',
      services: 'Serivisi',
      training: 'Amahugurwa',
      portfolio: 'Imishinga',
      about: 'Abo Turi Bo',
      contact: 'Twandikire',
    },
    hero: {
      tagline: 'Duteza Imbere Ejo Hazaza h\'u Rwanda',
      title: 'Ibisubizo by\'ikoranabuhanga na AI bigezweho',
      subtitle: 'Kuva kuri software zihariye kugeza ku mahugurwa y\'inzobere, turi abafatanyabikorwa banyu mu mpinduramatwara ya digitale. Dukoresha ikoranabuhanga mu kubaka u Rwanda rukomeye.',
      cta: 'Reba Serivisi zacu',
    },
    services: {
      title: 'Serivisi Zitangwa (B2B & Enterprise)',
      subtitle: 'Guhuza ikoranabuhanga rigezweho na AI mu guteza imbere ubucuruzi bwawe.',
      items: [
        { 
          id: 'ai-integration', 
          title: 'Guhuza Generative AI & Kwikoresha', 
          description: 'Gushyira mu bikorwa imikorere ya AI yihariye n\'ibisubizo byo gufasha mu kwihutisha gukora ibikubiyemo, ubufasha, n\'imikorere y\'ubuyobozi.', 
          icon: SparklesIcon,
          bullets: [
            'Gushyira mu bikorwa imikorere ya AI yihariye ku bigo bito n\'ibiciriritse (SMBs), ibigo bitabaranira inyungu, n\'ibigo by\'uburezi.',
            'Ibisubizo bya prompt engineering mu koroshya ikorwa ry\'inyandiko, ubufasha bw\'abakiriya, n\'imikorere y\'ubuyobozi hakoreshejwe ibikoresho nka ChatGPT, Gemini, na Claude.',
            'Gukora amashusho, amajwi, n\'ibirango bikoresha AI mu kwamamaza n\'ubukangurambaga.'
          ]
        },
        { 
          id: 'it-infrastructure', 
          title: 'Gucunga Imikorere ya IT & Ubufasha mu ma-Réseaux', 
          description: 'Gushushanya imiyoboro y\'imbere, ibikorwaremezo by\'insinga, gusuzuma ibikoresho, gushyiraho OS, no gucunga software zihariye.', 
          icon: CodeBracketIcon,
          bullets: [
            'Gushushanya imiyoboro y\'imbere (LAN/WLAN), ibikorwaremezo by\'insinga, no gukaza umutekano.',
            'Gusuzuma ibibazo bya PC/laptop, gushyiraho operating systems zitandukanye (Windows, Linux, macOS), no gucunga software.',
            'Gushyiraho no gucunga sisitemu zihariye (nk\'ibikoresho byo gucunga amasomero n\'ibarura nka KOHA na eLMIS).'
          ]
        },
        { 
          id: 'digital-branding', 
          title: 'Ikirango cya Digitali, Gucunga Imbuga & Guhanga Ibirimo', 
          description: 'Gukora ibirango by\'ibigo, ishusho mbonera, gushyiraho imbuga za WordPress, no gukora amashusho magufi ya digitali.', 
          icon: MegaphoneIcon,
          bullets: [
            'Gukora ibirango by\'ibigo, ishusho mbonera y\'ibicuruzwa, n\'ibikoresho byo kwamamaza.',
            'Gushyiraho imbuga za WordPress zihariye, kuzitangiza, n\'ubufasha bwa tekiniki buhoraho.',
            'Gutunganya amashusho magufi ahagaze (short-form vertical videos) n\'ibindi birimo by\'amashusho ku miyoboro ya digitali (YouTube, TikTok).'
          ]
        },
      ],
      cta: 'Saba Ubujyanama bw\'Ubuntu',
    },
    training: {
      title: 'Amahugurwa Atangwa (B2C & Imiryango)',
      subtitle: 'Amahugurwa ya ICT n\'ubumenyi bwa AI afasha kongerera ubushobozi amatsinda n\'abantu ku giti cyabo.',
      courses: [
        { 
          id: 'ai-literacy', 
          title: 'Amahugurwa yo Kumenya AI no Kongera Umusaruro', 
          instructor: 'E. Mutesi', 
          duration: 'Ibyumweru 4-8', 
          imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
          bullets: [
            'AI Basics for Professionals: Amahugurwa ngiro ku gukoresha prompt engineering, kwandika raporo zikoresha AI, no kunoza imikorere.',
            'Generative AI for Creators & Marketers: Guhanga ibikubiyemo bitandukanye (gukora amashusho mu magambo, gutunganya videwo, kubara inkuru mu buryo bwa digitale).',
            'AI for Business Growth: Ubuyobozi ku gukoresha ibikoresho bya AI mu gukuza ibigo bito n\'ibiciriritse (bihujwe n\'uburyo bwa ILO).'
          ]
        },
        { 
          id: 'ict-basic', 
          title: 'Amahugurwa y\'Ibanze mu Koresha ICT', 
          instructor: 'Saidi Niyonzima', 
          duration: 'Ibyumweru 3-4', 
          imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
          bullets: [
            'Ibanze kuri Mudasobwa: Gukoresha sisitemu, gupanga no kubika dosiye, no kumenya kwinjira mu buryo bwa digitale.',
            'Ubumenyi mu Bya Biro: Amahugurwa ngiro kuri MS Word, Excel yo kubara imibare, no gukora PowerPoint.',
            'Interineti n\'Itumanaho rya Digitale: Gushakisha kuri interineti mu mutekano, kwandika imeri za kinyamwuga, no kubika kuri Cloud.'
          ]
        },
        { 
          id: 'ict-network', 
          title: 'Amahugurwa y\'Ibanze ku koresha ICT n\'Imiyoboro', 
          instructor: 'F. Gakire', 
          duration: 'Ibyumweru 5-6', 
          imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
          bullets: [
            'PC Hardware, Maintenance & Security Fundamentals: Ubumenyi mu gusuzuma ibibazo, guteranya mudasobwa, n\'amahame y\'ibanze y\'umutekano ku mbuga nkoranyambaga.',
            'Networking Fundamentals: Gushyiraho Wi-Fi, gucunga router, gushyiraho insinga, no gukemura ibibazo by\'imiyoboro y\'imbere.'
          ]
        }
      ],
      cta: 'Reba Amahugurwa Yose',
    },
    testimonials: {
      title: 'Inkuru z\'Impinduka',
      subtitle: 'Ibyo abakiriya bacu bavuga.',
      items: [
        { id: 't1', quote: "Ubufasha bw'abakiriya bukoresha AI bwa NS IT bwahinduye imikorere yacu. Twabonye ubwiyongere bwa 40% mu musaruro.", clientName: 'Mucyo', company: 'Kigali Innovations' },
        { id: 't2', quote: "Amahugurwa ya SEO yari meza cyane. Umubare w'abasura urubuga rwacu wikubye kabiri mu mezi atatu gusa. Turabibashimira cyane!", clientName: 'Anitha', company: 'Rwanda Crafts Co.' },
        { id: 't3', quote: "Itsinda ryabo ryakoze urubuga rwiza kandi rukora neza ruhagarariye ikirango cyacu. Byari byoroshye cyane.", clientName: 'David', company: 'Lakeside Hotel' },
      ],
    },
    about: {
      title: 'Abo Turi Bo: NS IT Consulting & Training',
      missionTitle: 'Integano Yacu',
      missionText: 'Kuba umusemburo w’impinduramatwara ya digitale mu Rwanda no hanze, dutanga ibisubizo by’ikoranabuhanga bigezweho n’amahugurwa y’ubumenyi afasha ibigo n’abantu ku giti cyabo gutera imbere mu bukungu bwa digitale ku isi.',
      visionTitle: 'Icyerekezo Cyacu',
      visionText: 'Kuba umufatanyabikorwa wizewe kandi w’imbere mu ikoranabuhanga mu karere, uzwiho ubuhanga, ubunyangamugayo, no kugira uruhare mu rugendo rw’u Rwanda rwo kuba igihugu gishingiye ku bumenyi.',
      teamTitle: 'Hura n\'Inzobere Zacu',
    },
    contact: {
      title: 'Twandikire',
      subtitle: 'Turi hano ngo tugufashe. Twandikire ushaka ubujyanama, amakuru kuri serivisi, cyangwa amahugurwa.',
      address: 'Aderesi',
      office: 'Kigali, Nyarugenge, KN 2 Av 266',
      email: 'Imeri',
      emailAddress: 'nsaihub25@gmail.com',
      phone: 'Telefone',
      cta: 'Ohereza Ubutumwa',
      form: {
        name: 'Izina Ryawe',
        email: 'Imeri Yawe',
        message: 'Ubutumwa Bwawe',
      },
    },
     portal: {
        title: 'Irembo ry\'Abakiriya',
        subtitle: 'Injira neza mu mishinga yawe n\'ubufasha.',
        login: 'Injira',
        email: 'Imeri',
        password: 'Ijambobanga',
        welcome: 'Urakaza Neza',
        dashboardTitle: 'Imbonerahamwe Yawe',
        projects: 'Imishinga Ikirimo',
        invoices: 'Inyemezabwishyu',
        support: 'Amatike y\'Ubufasha',
    },
    chatbot: {
        greeting: "Muraho! Ndi umufasha wa NS IT. Nagufasha iki uyu munsi? Ushobora kumbaza ibijyanye na serivisi zacu, amahugurwa, cyangwa uko wasaba ubujyanama.",
        placeholder: 'Baza kuri serivisi cyangwa amahugurwa...',
        systemInstruction: "Uri umufasha w'icyubahiro kandi ufasha muri NS IT Consulting and Training, ikigo cyo mu Rwanda. Inshingano yawe ni ugusubiza ibibazo bijyanye na serivisi zacu (Serivisi za Tekiniki za IT, Ibisubizo bya Ai, Ubufasha mu bucuruzi, Kwamamaza mu bya Digitali), amahugurwa (Imbuga Nkoranyambaga, SEO, AI, Gukora Imbuga), n'uko wasaba ubujyanama. Vuga mu magambo make kandi kinyamwuga. Niba hari ikibazo utazi igisubizo, gira inama umukoresha kwandikira kuri nsaihub25@gmail.com. Ntusubize ibibazo bitari muri uru rwego."
    },
    footer: {
        about: "Umufatanyabikorwa wanyu mu mpinduramatwara ya digitale, mu mutima wa Afurika.",
        quickLinks: "Aho Wahita Ugera",
        contactUs: "Twandikire"
    },
  },
};
