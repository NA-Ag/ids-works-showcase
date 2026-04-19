import { NavItem, AcademicStage, NewsItem } from '../types/types';

export const SCHOOL_NAME = "Colegio IDS";
export const SCHOOL_PHONE = "55 0000 0000";
export const SCHOOL_EMAIL = "admissions@colegio-ids.com";
export const SCHOOL_ADDRESS = "Avenida de la Excelencia 101, Ciudad de México, CDMX";

export const HEADMASTER_NAME = "Dr. Roberto García";
export const HEADMASTER_ROLE = "Director General";

const HERO_SLIDES_EN = [
  "Nurturing the leaders of tomorrow in a vibrant bilingual environment.",
  "Achieving academic excellence through innovation and personal growth.",
  "A community dedicated to shaping conscientious global citizens.",
  "World-class facilities powered by cutting-edge educational technology.",
  "Developing critical thinking skills for a rapidly changing world."
];

const HERO_SLIDES_ES = [
  "Formando a los líderes del mañana en un entorno bilingüe vibrante.",
  "Alcanzando la excelencia académica a través de la innovación.",
  "Una comunidad dedicada a formar ciudadanos globales conscientes.",
  "Instalaciones de clase mundial impulsadas por tecnología educativa.",
  "Desarrollando habilidades de pensamiento crítico para un mundo cambiante."
];

const WELCOME_TITLE_EN = "Welcome to Colegio IDS.";
const WELCOME_TITLE_ES = "Bienvenidos al Colegio IDS.";

const WELCOME_MESSAGE_EN = "At Colegio IDS, we provide a progressive, nurturing community that champions uniqueness through a broad, forward-thinking, and academically exciting education.";
const WELCOME_MESSAGE_ES = "En Colegio IDS, brindamos una comunidad progresista y enriqueceroda que defiende la singularidad a través de una educación amplia y emocionante.";

export const VALUES_EN = [
  { name: 'Respect', icon: 'Heart', desc: 'Accept and appreciate yourself and all members of the community.' },
  { name: 'Responsibility', icon: 'CheckCircle', desc: 'Accept that you have obligations and that your actions have consequences.' },
  { name: 'Innovation', icon: 'Zap', desc: 'Be optimistic, enthusiastic, and take advantage of each opportunity.' },
  { name: 'Trust', icon: 'Shield', desc: 'Help to create and maintain a safe and positive environment.' },
  { name: 'Honesty', icon: 'UserCheck', desc: 'Always be true in what you say and do.' },
  { name: 'Fairness', icon: 'Scale', desc: 'Treat everyone with the same high standards of equity.' },
];

export const VALUES_ES = [
  { name: 'Respeto', icon: 'Heart', desc: 'Acéptate y apréciate a ti mismo, así como a todos los miembros de la comunidad.' },
  { name: 'Responsabilidad', icon: 'CheckCircle', desc: 'Reconoce que tenemos obligaciones y que nuestras acciones tienen consecuencias.' },
  { name: 'Innovación', icon: 'Zap', desc: 'Sé optimista, entusiasta y aprovecha cada oportunidad.' },
  { name: 'Confianza', icon: 'Shield', desc: 'Ayuda a crear y mantener un ambiente seguro y positivo.' },
  { name: 'Honestidad', icon: 'UserCheck', desc: 'Siempre sé sincero en lo que dices y haces.' },
  { name: 'Equidad', icon: 'Scale', desc: 'Trata a todos con los mismos altos estándares de equidad.' },
];

const NAV_ITEMS_EN: NavItem[] = [
  { label: 'Home', href: '/demos/standard' },
  { 
    label: 'About Us', 
    href: '#about', 
    subItems: [
      {label: 'Headmaster Welcome', href: '/demos/standard/about-us/headmaster-welcome'}, 
      {label: 'Our History', href: '/demos/standard/about-us/history'},
      {label: 'Mission & Vision', href: '/demos/standard/about-us/mission-vision-values'},
      {label: 'Accreditations', href: '/demos/standard/about-us/accreditations'},
      {label: 'International Outlook', href: '/demos/standard/about-us/international-outlook'},
      {label: 'Campus & Environment', href: '/demos/standard/about-us/unique-environment'},
      {label: 'School Library', href: '/demos/standard/about-us/library'},
      {label: 'Inspection Reports', href: '/demos/standard/about-us/inspection-reports'}
    ] 
  },
  { 
    label: 'Academic Offering', 
    href: '/demos/standard/kinder',
    subItems: [
      {label: 'Kinder', href: '/demos/standard/kinder'},
      {label: 'Primary', href: '/demos/standard/primary'},
      {label: 'Secondary', href: '/demos/standard/secondary'},
      {label: 'High School', href: '/demos/standard/high-school'}
    ]
  },
  {
    label: 'Enrichment',
    href: '#',
    subItems: [
      {label: 'Kinder Co-Curricular', href: '/demos/standard/plus/kinder'},
      {label: 'Primary Co-Curricular', href: '/demos/standard/plus/primary'},
      {label: 'Secondary Co-Curricular', href: '/demos/standard/plus/secondary'},
      {label: 'High School Co-Curricular', href: '/demos/standard/plus/high-school'}
    ]
  },
  { 
    label: 'Admissions', 
    href: '/demos/standard/admissions',
    subItems: [
      {label: 'Admissions Process', href: '/demos/standard/admissions'},
      {label: 'Visit Our Campus', href: '/demos/standard/about-us/unique-environment'},
      {label: 'Testimonials', href: '/demos/standard/testimonials'}
    ] 
  },
  { label: 'Publications', href: '/demos/standard/publications' },
  { label: 'Contact', href: '/demos/standard/contact' },
  { 
    label: 'Intranet', 
    href: '/demos/standard/login', 
    subItems: [
      {label: 'Student & Staff Portal', href: '/demos/standard/login'},
      {label: 'Parent Portal', href: '/demos/standard/login'}
    ] 
  },
];

const NAV_ITEMS_ES: NavItem[] = [
  { label: 'Inicio', href: '/demos/standard' },
  { 
    label: 'Quiénes Somos', 
    href: '#about', 
    subItems: [
      {label: 'Bienvenida del Rector', href: '/demos/standard/about-us/headmaster-welcome'}, 
      {label: 'Historia', href: '/demos/standard/about-us/history'},
      {label: 'Misión y Visión', href: '/demos/standard/about-us/mission-vision-values'},
      {label: 'Acreditaciones', href: '/demos/standard/about-us/accreditations'},
      {label: 'Enfoque Internacional', href: '/demos/standard/about-us/international-outlook'},
      {label: 'Plantel y Entorno', href: '/demos/standard/about-us/unique-environment'},
      {label: 'Biblioteca', href: '/demos/standard/about-us/library'},
      {label: 'Reportes de Inspección', href: '/demos/standard/about-us/inspection-reports'}
    ] 
  },
  { 
    label: 'Oferta Académica', 
    href: '/demos/standard/kinder',
    subItems: [
      {label: 'Kinder', href: '/demos/standard/kinder'},
      {label: 'Primaria', href: '/demos/standard/primary'},
      {label: 'Secundaria', href: '/demos/standard/secondary'},
      {label: 'Preparatoria', href: '/demos/standard/high-school'}
    ]
  },
  {
    label: 'Cocurricular',
    href: '#',
    subItems: [
      {label: 'Kinder Cocurricular', href: '/demos/standard/plus/kinder'},
      {label: 'Primaria Cocurricular', href: '/demos/standard/plus/primary'},
      {label: 'Secundaria Cocurricular', href: '/demos/standard/plus/secondary'},
      {label: 'Preparatoria Cocurricular', href: '/demos/standard/plus/high-school'}
    ]
  },
  { 
    label: 'Admisiones', 
    href: '/demos/standard/admissions',
    subItems: [
      {label: 'Proceso de Admisión', href: '/demos/standard/admissions'},
      {label: 'Visite Nuestro Campus', href: '/demos/standard/about-us/unique-environment'},
      {label: 'Testimonios', href: '/demos/standard/testimonials'}
    ] 
  },
  { label: 'Publicaciones', href: '/demos/standard/publications' },
  { label: 'Contacto', href: '/demos/standard/contact' },
  { 
    label: 'Intranet', 
    href: '/demos/standard/login', 
    subItems: [
      {label: 'Portal Alumnos y Staff', href: '/demos/standard/login'},
      {label: 'Portal de Padres', href: '/demos/standard/login'}
    ] 
  },
];

const RESOURCES_EN = {
    offeringTitle: "Academic Offering",
    programmesTitle: "School Sections",
    newspaperTitle: "School News",
    resourcesTitle: "Resources",
    intranetTitle: "School Intranet",
    newspaperBtn: "Student News",
    resourcesList: ['Library', 'Our Campus', 'School Calendar', 'Parent Portal'],
    intranetList: ['Parents', 'Staff', 'Students'],
    learnMore: "Learn More",
    aboutUs: "About Us",
    characterTitle: "Rooted in Character"
};

const RESOURCES_ES = {
    offeringTitle: "Oferta Académica",
    programmesTitle: "Secciones Escolares",
    newspaperTitle: "Noticias Escolares",
    resourcesTitle: "Recursos",
    intranetTitle: "Intranet Escolar",
    newspaperBtn: "Noticias Estudiantiles",
    resourcesList: ['Biblioteca', 'Nuestro Campus', 'Calendario Escolar'],
    intranetList: ['Padres', 'Staff', 'Estudiantes'],
    learnMore: "Saber más",
    aboutUs: "Quiénes Somos",
    characterTitle: "Arraigados en el Carácter"
};

const NEWS_EN = {
    title: "News & Events",
    viewAll: "View All",
    readMore: "Read More",
    items: [
        { 
            id: 1, 
            title: "Global Innovation Award", 
            date: "May 2026", 
            excerpt: "Our students have been recognised for their outstanding achievements in international science and technology competitions.", 
            imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800", 
            link: "#" 
        },
        { 
            id: 2, 
            title: "New Arts Wing Opens", 
            date: "April 2026", 
            excerpt: "We are proud to announce the opening of our state-of-the-art facilities for music and visual arts.", 
            imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
            link: "#"
        }
    ]
};

const NEWS_ES = {
    title: "Noticias y Eventos",
    viewAll: "Ver Todo",
    readMore: "Leer Más",
    items: [
        { 
            id: 1, 
            title: "Premio Global a la Innovación", 
            date: "Mayo 2026", 
            excerpt: "Nuestros estudiantes han sido reconocidos por sus logros sobresalientes en competencias internacionales.", 
            imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800", 
            link: "#"
        },
        { 
            id: 2, 
            title: "Nueva Ala de Artes", 
            date: "Abril 2026", 
            excerpt: "Nos enorgullece anunciar la inauguración de nuestras nuevas instalaciones para música y artes visuales.", 
            imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
            link: "#"
        }
    ]
};

const ACADEMIC_STAGES_EN: AcademicStage[] = [
  {
    title: "Kinder",
    description: "A nurturing environment where children begin their bilingual journey through play and structured learning.",
    ageRange: "Early Years",
    imageUrl: "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?auto=format&fit=crop&q=80&w=800",
    link: "/demos/standard/kinder"
  },
  {
    title: "Primary",
    description: "Developing core skills in English and Spanish, fostering curiosity and a love for learning.",
    ageRange: "Primary School",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    link: "/demos/standard/primary"
  },
  {
    title: "Secondary",
    description: "Rigorous academic preparation culminating in globally recognised international certifications.",
    ageRange: "Middle School",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    link: "/demos/standard/secondary"
  },
  {
    title: "High School",
    description: "Advanced university preparation focusing on leadership, research, and global excellence.",
    ageRange: "Key Stage 5",
    imageUrl: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=800", 
    link: "/demos/standard/plus"
  }
];

const ACADEMIC_STAGES_ES: AcademicStage[] = [
  {
    title: "Kinder",
    description: "Nuestra prioridad es crear un ambiente amoroso y acogedor para los más pequeños.",
    ageRange: "Preescolar",
    imageUrl: "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?auto=format&fit=crop&q=80&w=800",
    link: "/demos/standard/kinder"
  },
  {
    title: "Primaria",
    description: "Desarrollando habilidades fundamentales en inglés y español con un enfoque integral.",
    ageRange: "Primaria",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    link: "/demos/standard/primary"
  },
  {
    title: "Secundaria",
    description: "Preparación académica rigurosa que culmina en certificaciones internacionales de alto nivel.",
    ageRange: "Secundaria",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    link: "/demos/standard/secondary"
  },
  {
    title: "Preparatoria",
    description: "Preparación universitaria avanzada con enfoque en liderazgo y excelencia global.",
    ageRange: "Preparatoria",
    imageUrl: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=800",
    link: "/demos/standard/plus"
  }
];

const FOOTER_EN = {
    about: "About Colegio IDS",
    education: "Academic Offering",
    contact: "Contact Us",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    privacyUrl: "#",
    terms: "Terms of Use",
    blog: "School Blog"
};

const FOOTER_ES = {
    about: "Sobre Colegio IDS",
    education: "Oferta Académica",
    contact: "Contáctanos",
    rights: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    privacyUrl: "#",
    terms: "Términos de Uso",
    blog: "Blog Escolar"
};

const VALUES_SECTION_TITLE_EN = "At Colegio IDS";
const VALUES_SECTION_TITLE_ES = "En Colegio IDS";
const VALUES_TEXT_1_EN = "We ensure the highest standards of academic achievement and personal integrity.";
const VALUES_TEXT_1_ES = "Garantizamos los más altos estándares de rendimiento académico e integridad personal.";
const VALUES_TEXT_2_EN = "Colegio IDS is committed to providing a safe, happy and high-achieving environment.";
const VALUES_TEXT_2_ES = "Colegio IDS está comprometido con brindar un ambiente seguro, feliz y de alto rendimiento.";
const IDS_CONNECT_SUB = {
    en: "Secure access for students and staff",
    es: "Acceso seguro para alumnos y personal"
};

export const getSchoolData = (lang: 'en' | 'es') => {
  const isEn = lang === 'en';
  return {
    heroSlides: isEn ? HERO_SLIDES_EN : HERO_SLIDES_ES,
    welcomeTitle: isEn ? WELCOME_TITLE_EN : WELCOME_TITLE_ES,
    welcomeMessage: isEn ? WELCOME_MESSAGE_EN : WELCOME_MESSAGE_ES,
    values: isEn ? VALUES_EN : VALUES_ES,
    navItems: isEn ? NAV_ITEMS_EN : NAV_ITEMS_ES,
    academicStages: isEn ? ACADEMIC_STAGES_EN : ACADEMIC_STAGES_ES,
    accreditations: [
        '/assets/images/accreditations/ib.png',
        '/assets/images/accreditations/cambridge.png',
        '/assets/images/accreditations/cis.png',
        '/assets/images/accreditations/neasc.png',
        '/assets/images/accreditations/cognia.png',
        '/assets/images/accreditations/wasc.png'
    ],
    schoolName: SCHOOL_NAME,
    phone: SCHOOL_PHONE,
    email: SCHOOL_EMAIL,
    address: SCHOOL_ADDRESS,
    headmasterName: HEADMASTER_NAME,
    headmasterRole: HEADMASTER_ROLE,
    footer: isEn ? FOOTER_EN : FOOTER_ES,
    resources: isEn ? RESOURCES_EN : RESOURCES_ES,
    news: isEn ? NEWS_EN : NEWS_ES,
    valuesSection: {
        title: isEn ? VALUES_SECTION_TITLE_EN : VALUES_SECTION_TITLE_ES,
        text1: isEn ? VALUES_TEXT_1_EN : VALUES_TEXT_1_ES,
        text2: isEn ? VALUES_TEXT_2_EN : VALUES_TEXT_2_ES,
    },
    idsConnectSub: isEn ? IDS_CONNECT_SUB.en : IDS_CONNECT_SUB.es,
    timeline: isEn ? [
      { year: "1926", title: "Foundation", desc: "Colegio IDS was founded with a vision of academic excellence and institutional independence." },
      { year: "1954", title: "International Certification", desc: "First major international accreditation received, establishing our global outlook." },
      { year: "1982", title: "Digital Integration", desc: "Pioneering the use of computing in education with our first dedicated technology labs." },
      { year: "2005", title: "IB World School", desc: "Official authorization as an IB World School, offering the prestigious Diploma Programme." },
      { year: "2026", title: "Centennial Celebration", desc: "Celebrating 100 years of securing the future and achieving digital sovereignty." }
    ] : [
      { year: "1926", title: "Fundación", desc: "Colegio IDS fue fundado con una visión de excelencia académica e independencia institucional." },
      { year: "1954", title: "Certificación Internacional", desc: "Se recibe la primera gran acreditación internacional, estableciendo nuestra visión global." },
      { year: "1982", title: "Integración Digital", desc: "Pioneros en el uso de la computación en la educación con nuestros primeros laboratorios de tecnología." },
      { year: "2005", title: "Colegio del Mundo IB", desc: "Autorización oficial como Colegio del Mundo IB, ofreciendo el prestigioso Programa del Diploma." },
      { year: "2026", title: "Celebración del Centenario", desc: "Celebrando 100 años asegurando el futuro y alcanzando la soberanía digital." }
    ],
    graduateProfile: isEn ? [
      { title: "Intellectual Rigour", desc: "Our graduates demonstrate critical thinking and a lifelong passion for knowledge." },
      { title: "Digital Sovereignty", desc: "Students master technology with a deep understanding of data ethics and independence." },
      { title: "Global Citizenship", desc: "Graduates are bilingual leaders prepared to navigate and impact a multicultural world." },
      { title: "Ethical Integrity", desc: "Character development ensures our alumni lead with honesty, respect, and responsibility." }
    ] : [
      { title: "Rigor Intelectual", desc: "Nuestros graduados demuestran pensamiento crítico y una pasión de por vida por el conocimiento." },
      { title: "Soberanía Digital", desc: "Los estudiantes dominan la tecnología con un profundo entendimiento de la ética y la independencia de datos." },
      { title: "Ciudadanía Global", desc: "Los graduados son líderes bilingües preparados para navegar e impactar un mundo multicultural." },
      { title: "Integridad Ética", desc: "El desarrollo del carácter asegura que nuestros exalumnos lideren con honestidad, respeto y responsabilidad." }
    ],
    internationalOutlook: isEn ? {
      stats: [
        { label: "Nationalities", value: "35+" },
        { label: "Bilingual Staff", value: "100%" },
        { label: "Global Partners", value: "12" },
        { label: "Exchange Programs", value: "8" }
      ],
      partnerships: [
        { name: "British Council", type: "Language & Culture", desc: "Strategic partnership for English proficiency and international examinations." },
        { name: "IB Organization", type: "Academic Excellence", desc: "Authorized IB World School providing global educational standards." },
        { name: "Microsoft Education", type: "Digital Sovereignty", desc: "Global showcase school for advanced technological integration." }
      ]
    } : {
      stats: [
        { label: "Nacionalidades", value: "35+" },
        { label: "Staff Bilingüe", value: "100%" },
        { label: "Socios Globales", value: "12" },
        { label: "Intercambios", value: "8" }
      ],
      partnerships: [
        { name: "British Council", type: "Idioma y Cultura", desc: "Socio estratégico para la competencia en inglés y exámenes internacionales." },
        { name: "Organización IB", type: "Excelencia Académica", desc: "Colegio del Mundo IB autorizado con estándares globales." },
        { name: "Microsoft Education", type: "Soberanía Digital", desc: "Escuela referente global para la integración tecnológica avanzada." }
      ]
    },
    campus: isEn ? {
      features: [
        { title: "Smart Classrooms", desc: "Equipped with interactive technology and ergonomic design for collaborative learning.", icon: "Monitor" },
        { title: "Olympic Pool", desc: "A world-class aquatic center for competitive swimming and physical education.", icon: "Waves" },
        { title: "Innovation Hub", desc: "Specialized maker spaces for robotics, coding, and creative engineering.", icon: "Cpu" },
        { title: "Sustainable Design", desc: "Eco-friendly infrastructure with solar energy and water recycling systems.", icon: "Leaf" }
      ],
      stats: [
        { label: "Acres of Greenery", value: "15" },
        { label: "Specialized Labs", value: "8" },
        { label: "Smart Classrooms", value: "45" },
        { label: "Sports Facilities", value: "12" }
      ]
    } : {
      features: [
        { title: "Salones Inteligentes", desc: "Equipados con tecnología interactiva y diseño ergonómico para el aprendizaje colaborativo.", icon: "Monitor" },
        { title: "Alberca Olímpica", desc: "Centro acuático de clase mundial para natación competitiva y educación física.", icon: "Waves" },
        { title: "Hub de Innovación", desc: "Espacios 'maker' especializados en robótica, código e ingeniería creativa.", icon: "Cpu" },
        { title: "Diseño Sustentable", desc: "Infraestructura eco-amigable con energía solar y sistemas de reciclaje de agua.", icon: "Leaf" }
      ],
      stats: [
        { label: "Hectáreas Verdes", value: "6" },
        { label: "Laboratorios", value: "8" },
        { label: "Salones Smart", value: "45" },
        { label: "Instalaciones Deportivas", value: "12" }
      ]
    },
    library: isEn ? {
      stats: [
        { label: "Physical Volumes", value: "25,000+" },
        { label: "Digital Databases", value: "15" },
        { label: "Daily Visitors", value: "200+" },
        { label: "Study Zones", value: "6" }
      ],
      services: [
        { title: "Research Support", desc: "Expert guidance for secondary and high school research projects and academic writing." },
        { title: "Digital Archives", desc: "24/7 access to our extensive cloud-based repository of academic journals and ebooks." },
        { title: "Reading Clubs", desc: "Weekly bilingual literature circles to foster a community of passionate readers." },
        { title: "Tech Hub", desc: "Integration with Microsoft 365 for seamless citation management and collaborative study." }
      ]
    } : {
      stats: [
        { label: "Volúmenes Físicos", value: "25,000+" },
        { label: "Bases de Datos", value: "15" },
        { label: "Visitantes Diarios", value: "200+" },
        { label: "Zonas de Estudio", value: "6" }
      ],
      services: [
        { title: "Apoyo a Investigación", desc: "Guía experta para proyectos de secundaria y preparatoria y escritura académica." },
        { title: "Archivos Digitales", desc: "Acceso 24/7 a nuestro repositorio en la nube de revistas académicas y libros." },
        { title: "Clubes de Lectura", desc: "Círculos literarios bilingües semanales para fomentar una comunidad de lectores." },
        { title: "Hub Tecnológico", desc: "Integración con Microsoft 365 para gestión de citas y estudio colaborativo." }
      ]
    },
    inspections: isEn ? {
      overallScore: "Outstanding",
      lastVisit: "May 2024",
      reports: [
        { title: "BSO Inspection Report", year: "2024", org: "British Schools Overseas", status: "Outstanding", summary: "Full compliance with all standards. Excellence in teaching, leadership, and student welfare." },
        { title: "Cognia Accreditation", year: "2023", org: "Cognia Global", status: "Certified", summary: "Accreditation renewed with commendations for digital infrastructure and innovation." },
        { title: "IB Evaluation", year: "2023", org: "International Baccalaureate", status: "Excellent", summary: "Strong evidence of critical thinking and international-mindedness across all subject groups." }
      ]
    } : {
      overallScore: "Sobresaliente",
      lastVisit: "Mayo 2024",
      reports: [
        { title: "Reporte de Inspección BSO", year: "2024", org: "British Schools Overseas", status: "Sobresaliente", summary: "Cumplimiento total con todos los estándares. Excelencia en enseñanza, liderazgo y bienestar." },
        { title: "Acreditación Cognia", year: "2023", org: "Cognia Global", status: "Certificado", summary: "Acreditación renovada con menciones especiales por infraestructura digital e innovación." },
        { title: "Evaluación IB", year: "2023", org: "Bachillerato Internacional", status: "Excelente", summary: "Sólida evidencia de pensamiento crítico y mentalidad internacional en todos los grupos." }
      ]
    },
    kinder: isEn ? {
      playfulStats: [
        { label: "Daily Smiles", value: "∞", icon: "Smile" },
        { label: "Creative Projects", value: "500+", icon: "Palette" },
        { label: "Active Play Hours", value: "1,200", icon: "Play" },
        { label: "Storytelling sessions", value: "300", icon: "BookOpen" }
      ],
      curriculum: [
        { title: "Sensory Discovery", desc: "Exploring the world through touch, sound, and vibrant colors in our dedicated sensory zones." },
        { title: "Bilingual Foundations", desc: "Natural language acquisition through songs, games, and interactive storytelling." },
        { title: "Social Harmony", desc: "Building confidence and empathy through collaborative play and shared adventures." },
        { title: "Early STEM", desc: "Sparking curiosity with simple experiments and building blocks of logic." }
      ]
    } : {
      playfulStats: [
        { label: "Sonrisas Diarias", value: "∞", icon: "Smile" },
        { label: "Proyectos Creativos", value: "500+", icon: "Palette" },
        { label: "Horas de Juego", value: "1,200", icon: "Play" },
        { label: "Sesiones de Cuentos", value: "300", icon: "BookOpen" }
      ],
      curriculum: [
        { title: "Descubrimiento Sensorial", desc: "Explorando el mundo a través del tacto, sonido y colores vibrantes." },
        { title: "Bases Bilingües", desc: "Adquisición natural del lenguaje mediante canciones, juegos y cuentos." },
        { title: "Armonía Social", desc: "Construyendo confianza y empatía a través del juego colaborativo." },
        { title: "STEM Temprano", desc: "Despertando la curiosidad con experimentos simples y bloques de lógica." }
      ]
    },
    primary: isEn ? {
      pillars: [
        { title: "Analytical Thinking", desc: "Developing the ability to break down complex ideas and solve problems through logic.", icon: "Search" },
        { title: "Creative Inquiry", desc: "Encouraging students to ask 'why' and explore multiple solutions to every challenge.", icon: "Lightbulb" },
        { title: "Cultural Mastery", desc: "Deepening bilingual fluency while exploring the history and arts of global civilizations.", icon: "Globe" },
        { title: "Scientific Discovery", desc: "Hands-on laboratory work to understand the fundamental laws of nature.", icon: "Atom" }
      ],
      stats: [
        { label: "Bilingual Mastery", value: "100%" },
        { label: "STEM Projects", value: "150+" },
        { label: "Library Books", value: "25k" },
        { label: "Student Clubs", value: "24" }
      ]
    } : {
      pillars: [
        { title: "Pensamiento Analítico", desc: "Desarrollando la capacidad de descomponer ideas complejas y resolver problemas.", icon: "Search" },
        { title: "Indagación Creativa", desc: "Fomentando que los alumnos pregunten 'por qué' y exploren múltiples soluciones.", icon: "Lightbulb" },
        { title: "Dominio Cultural", desc: "Profundizando el bilingüismo mientras exploran la historia y artes del mundo.", icon: "Globe" },
        { title: "Descubrimiento Científico", desc: "Trabajo práctico de laboratorio para entender las leyes de la naturaleza.", icon: "Atom" }
      ],
      stats: [
        { label: "Dominio Bilingüe", value: "100%" },
        { label: "Proyectos STEM", value: "150+" },
        { label: "Libros en Biblioteca", value: "25k" },
        { label: "Clubes Estudiantiles", value: "24" }
      ]
    },
    secondary: isEn ? {
      stats: [
        { label: "IB MYP Avg", value: "5.8/7" },
        { label: "IGCSE Pass Rate", value: "98%" },
        { label: "Global Certifications", value: "15+" },
        { label: "Languages Offered", value: "4" }
      ],
      tracks: [
        { title: "Humanities & Arts", desc: "Advanced study of global history, literature, and visual culture with a focus on critical analysis." },
        { title: "STEM & Innovation", desc: "Rigorous scientific inquiry, advanced mathematics, and computer science certifications." },
        { title: "Economics & Business", desc: "Understanding global markets, entrepreneurship, and financial literacy for future leaders." }
      ],
      certifications: [
        { name: "IB MYP Programme", org: "International Baccalaureate", desc: "The rigorous framework for students aged 11 to 16." },
        { name: "IGCSE", org: "Cambridge International", desc: "Globally recognized assessment for secondary education." },
        { name: "Microsoft Expert", org: "Microsoft Education", desc: "Professional-grade digital productivity and coding skills." }
      ]
    } : {
      stats: [
        { label: "Promedio IB MYP", value: "5.8/7" },
        { label: "Aprobación IGCSE", value: "98%" },
        { label: "Certificaciones Globales", value: "15+" },
        { label: "Idiomas Ofrecidos", value: "4" }
      ],
      tracks: [
        { title: "Humanidades y Artes", desc: "Estudio avanzado de historia global, literatura y cultura visual." },
        { title: "STEM e Innovación", desc: "Indagación científica rigurosa, matemáticas avanzadas y certificaciones en computación." },
        { title: "Economía y Negocios", desc: "Entendimiento de mercados globales, emprendimiento y finanzas para futuros líderes." }
      ],
      certifications: [
        { name: "Programa IB MYP", org: "Bachillerato Internacional", desc: "El marco riguroso para estudiantes de 11 a 16 años." },
        { name: "IGCSE", org: "Cambridge International", desc: "Evaluación reconocida globalmente para educación secundaria." },
        { name: "Digital Expert", org: "Digital Education", desc: "Habilidades profesionales en productividad digital y programación." }
      ]
    },
    highSchool: isEn ? {
      stats: [
        { label: "IB Diploma Avg", value: "38/45" },
        { label: "University Acceptance", value: "100%" },
        { label: "Scholarships Awarded", value: "$2.5M+" },
        { label: "Career Internships", value: "40+" }
      ],
      programs: [
        { title: "Higher Education Counselling", desc: "Individualized roadmap for applications to top-tier global universities and scholarship acquisition.", icon: "Map" },
        { title: "IB Diploma Programme", desc: "The most prestigious pre-university curriculum in the world, focused on critical thinking and research.", icon: "Award" },
        { title: "Service & Leadership", desc: "Creativity, Activity, and Service (CAS) projects that foster civic responsibility and personal legacy.", icon: "Compass" },
        { title: "Advanced Research", desc: "Curating a body of work that reflects academic integrity and specialized scholarly achievement.", icon: "Briefcase" }
      ]
    } : {
      stats: [
        { label: "Promedio IB Diploma", value: "38/45" },
        { label: "Aceptación Universitaria", value: "100%" },
        { label: "Becas Otorgadas", value: "$2.5M+" },
        { label: "Prácticas Profesionales", value: "40+" }
      ],
      programs: [
        { title: "Orientación Universitaria", desc: "Plan de ruta individualizado para aplicaciones a las mejores universidades del mundo.", icon: "Map" },
        { title: "Programa del Diploma IB", desc: "El currículo pre-universitario más prestigioso del mundo, enfocado en el pensamiento crítico.", icon: "Award" },
        { title: "Liderazgo y CAS", desc: "Proyectos de Creatividad, Actividad y Servicio que fomentan la responsabilidad cívica.", icon: "Compass" },
        { title: "Investigación Avanzada", desc: "Curaduría de trabajos que reflejan integridad académica y logros especializados.", icon: "Briefcase" }
      ]
    },
    admissions: isEn ? {
      policies: [
        { title: "Academic Integrity", desc: "All applicants must demonstrate a commitment to scholarly honesty and personal responsibility." },
        { title: "Language Proficiency", desc: "Evaluation of bilingual capabilities to ensure successful integration into our bicultural curriculum." },
        { title: "Holistic Assessment", desc: "Review of previous academic records, social-emotional development, and entrance examinations." },
        { title: "Inclusive Excellence", desc: "Welcoming students from diverse backgrounds who share our institutional values and ambition." }
      ],
      requirements: ["Official Academic Transcripts", "Birth Certificate", "Letter of Recommendation", "Entrance Assessment Results", "Medical Records"]
    } : {
      policies: [
        { title: "Integridad Académica", desc: "Todos los aspirantes deben demostrar compromiso con la honestidad intelectual y responsabilidad personal." },
        { title: "Competencia Lingüística", desc: "Evaluación de capacidades bilingües para asegurar una integración exitosa a nuestro currículo." },
        { title: "Evaluación Integral", desc: "Revisión de expedientes académicos, desarrollo socio-emocional y exámenes de admisión." },
        { title: "Excelencia Inclusiva", desc: "Damos la bienvenida a estudiantes de diversos orígenes que compartan nuestros valores institucionales." }
      ],
      requirements: ["Boletas de Calificaciones Oficiales", "Acta de Nacimiento", "Carta de Recomendación", "Resultados de Examen de Admisión", "Expediente Médico"]
    },
    publications: isEn ? {
      magazines: [
        { title: "The Sovereign Review", issue: "Spring 2024", desc: "A quarterly journal documenting academic research and leadership initiatives across the Secondary and High School divisions.", type: "Academic Journal" },
        { title: "IDS Chronicle", issue: "March 2024", desc: "Monthly newsletter highlighting community events, student achievements, and institutional updates.", type: "Community News" }
      ],
      news: [
        { title: "IB Diploma Excellence", date: "April 2024", category: "Academics", excerpt: "Analyzing the latest results and the pedagogical impact of the IB framework on our High School cohort.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" },
        { title: "Digital Sovereignty 2024", date: "March 2024", category: "Technology", excerpt: "How our partnership with tech leaders is shaping the next decade of educational infrastructure.", imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" }
      ]
    } : {
      magazines: [
        { title: "The Sovereign Review", edición: "Primavera 2024", desc: "Revista trimestral que documenta la investigación académica y las iniciativas de liderazgo.", type: "Revista Académica" },
        { title: "Crónica IDS", edición: "Marzo 2024", desc: "Boletín mensual que destaca eventos comunitarios y logros estudiantiles.", type: "Noticias de la Comunidad" }
      ],
      news: [
        { title: "Excelencia en Diploma IB", date: "Abril 2024", category: "Academia", excerpt: "Analizando los últimos resultados y el impacto pedagógico del marco IB en nuestra generación de preparatoria.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" },
        { title: "Soberanía Digital 2024", date: "Marzo 2024", category: "Tecnología", excerpt: "Cómo nuestra alianza con líderes tecnológicos está dando forma a la próxima década de infraestructura educativa.", imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" }
      ]
    }
  };
};
