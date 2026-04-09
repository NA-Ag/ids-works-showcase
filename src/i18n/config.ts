import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
// (For now, we'll keep them as simple objects here, but later we can move to JSON files)
const resources = {
  en: {
    translation: {
      "common": {
        "welcome": "Welcome to Colegio IDS",
        "home": "Home",
        "aboutUs": "About Us",
        "education": "Education",
        "admissions": "Admissions",
        "publications": "Publications",
        "contact": "Contact",
        "intranet": "School Intranet",
        "learnMore": "Learn More",
        "readMore": "Read More"
      },
      "hero": {
        "established": "ESTABLISHED EXCELLENCE"
      },
      "dashboard": {
        "parentPortal": "Parent Portal",
        "studentStatus": "Student Status",
        "attendance": "Attendance",
        "meritPoints": "Merit Points"
      }
    }
  },
  es: {
    translation: {
      "common": {
        "welcome": "Bienvenidos al Colegio IDS",
        "home": "Inicio",
        "aboutUs": "Quiénes Somos",
        "education": "Educación",
        "admissions": "Admisiones",
        "publications": "Publicaciones",
        "contact": "Contacto",
        "intranet": "Intranet Escolar",
        "learnMore": "Saber más",
        "readMore": "Leer más"
      },
      "hero": {
        "established": "EXCELENCIA ESTABLECIDA"
      },
      "dashboard": {
        "parentPortal": "Portal de Padres",
        "studentStatus": "Estatus Alumno",
        "attendance": "Asistencia",
        "meritPoints": "Puntos de Mérito"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
