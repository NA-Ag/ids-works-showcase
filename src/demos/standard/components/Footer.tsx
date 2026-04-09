import React from 'react';
import { SCHOOL_NAME, SCHOOL_ADDRESS, SCHOOL_EMAIL, getSchoolData } from '../data/schoolData';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { ColegioIDSLogo } from './IDSLogo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);

  // Safely find the menu items regardless of language
  const aboutMenu = data.navItems.find(item => item.label === (language === 'en' ? 'About Us' : 'Quiénes Somos'));
  const educationMenu = data.navItems.find(item => item.label === (language === 'en' ? 'Academic Offering' : 'Oferta Académica'));
  const enrichmentMenu = data.navItems.find(item => item.label === (language === 'en' ? 'Enrichment' : 'Cocurricular'));

  return (
    <footer className="bg-vault-darkBlue text-white pt-16 pb-8 border-t-8 border-vault-yellow">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <ColegioIDSLogo inverted className="h-12" />
            <p className="text-xs text-blue-100/60 font-medium leading-relaxed max-w-xs">
                {language === 'en' 
                    ? "Leading the way in digital academic transformation and secure educational ecosystems."
                    : "Liderando el camino en la transformación académica digital y ecosistemas educativos seguros."}
            </p>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h4 className="font-sans font-black text-sm uppercase tracking-widest text-vault-yellow mb-6">{data.footer.about}</h4>
            <ul className="space-y-3 text-sm text-blue-100 font-medium">
              {aboutMenu?.subItems?.slice(0, 5).map((subItem) => (
                <li key={subItem.label}>
                  <Link to={subItem.href} className="hover:text-vault-yellow transition-colors">{subItem.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Offering */}
          <div>
            <h4 className="font-sans font-black text-sm uppercase tracking-widest text-vault-yellow mb-6">{data.footer.education}</h4>
            <ul className="space-y-3 text-sm text-blue-100 font-medium">
               {educationMenu?.subItems?.map((subItem) => (
                <li key={subItem.label}>
                  <Link to={subItem.href} className="hover:text-vault-yellow transition-colors">{subItem.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Enrichment */}
          <div>
            <h4 className="font-sans font-black text-sm uppercase tracking-widest text-vault-yellow mb-6">
                {language === 'en' ? 'Enrichment' : 'Cocurricular'}
            </h4>
            <ul className="space-y-3 text-sm text-blue-100 font-medium">
               {enrichmentMenu?.subItems?.map((subItem) => (
                <li key={subItem.label}>
                  <Link to={subItem.href} className="hover:text-vault-yellow transition-colors">{subItem.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-sans font-black text-sm uppercase tracking-widest text-vault-yellow mb-6">{data.footer.contact}</h4>
            <ul className="space-y-4 text-sm text-blue-100 font-medium">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-vault-yellow shrink-0" />
                <span className="font-mono text-xs">{SCHOOL_ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-vault-yellow shrink-0" />
                <a href={`tel:${data.phone}`} className="hover:text-vault-yellow font-mono text-xs">{data.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-vault-yellow shrink-0" />
                <a href={`mailto:${SCHOOL_EMAIL}`} className="hover:text-vault-yellow font-mono text-xs">{SCHOOL_EMAIL}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-white/40">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} {SCHOOL_NAME}. {data.footer.rights}</p>
          <div className="flex space-x-6">
             <a href={data.footer.privacyUrl} className="hover:text-white transition-colors">{data.footer.privacy}</a>
             <a href="#" className="hover:text-white transition-colors">{data.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;