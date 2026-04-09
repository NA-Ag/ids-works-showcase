import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'es';

interface CMSData {
  title: string;
  slogan: string;
  heroImage: string;
}

interface CMSData {
  title: string | null;
  slogan: string | null;
  heroImage: string | null;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  cmsData: CMSData;
  updateCMS: (data: Partial<CMSData>) => void;
  resetCMS: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('i18nextLng') as Language;
    if (savedLang === 'en' || savedLang === 'es') return savedLang;
    const currentLang = i18n.language?.split('-')[0];
    return (currentLang === 'es') ? 'es' : 'en';
  });

  const getEmptyCMS = (): CMSData => ({
    title: null,
    slogan: null,
    heroImage: null
  });

  const [cmsData, setCmsData] = useState<CMSData>(() => {
    const saved = localStorage.getItem('ids_cms_data');
    if (saved) return JSON.parse(saved);
    return getEmptyCMS();
  });

  const updateCMS = (data: Partial<CMSData>) => {
    setCmsData(prev => {
      const updated = { ...prev, ...data };
      localStorage.setItem('ids_cms_data', JSON.stringify(updated));
      return updated;
    });
  };

  const resetCMS = () => {
    localStorage.removeItem('ids_cms_data');
    setCmsData(getEmptyCMS());
    window.location.reload();
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  // Sync state if i18next language changes from elsewhere
  useEffect(() => {
    const currentLang = i18n.language?.split('-')[0] as Language;
    if (currentLang && (currentLang === 'en' || currentLang === 'es') && currentLang !== language) {
      setLanguageState(currentLang);
    }
  }, [i18n.language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, cmsData, updateCMS, resetCMS }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};