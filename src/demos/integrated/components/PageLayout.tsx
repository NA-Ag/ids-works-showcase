import React from 'react';
import { ChevronRight } from 'lucide-react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  breadcrumbs: { label: string; href?: string }[];
  bannerImage?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children, breadcrumbs, bannerImage = "/assets/images/header_bg.jpg" }) => {
  return (
    <div className="bg-vault-paper min-h-screen">
      {/* Hero / Page Title */}
      <div 
        className="relative h-[300px] bg-cover bg-center bg-no-repeat bg-vault-darkWine border-b-8 border-vault-yellow"
        style={{ backgroundImage: `url("${bannerImage}")` }}
      >
        <div className="absolute inset-0 bg-vault-darkWine/60 mix-blend-multiply"></div>
      </div>

      {/* Breadcrumbs Bar */}
      <div className="bg-white border-b-4 border-vault-darkWine shadow-md">
        <div className="container mx-auto px-4 lg:px-12 py-5">
            <nav className="flex text-[10px] font-black uppercase tracking-[0.2em] items-center">
                {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={crumb.label}>
                        {index > 0 && <ChevronRight className="w-4 h-4 mx-3 text-vault-yellow" />}
                        {crumb.href ? (
                            <Link to={crumb.href} className="text-gray-400 hover:text-vault-wine transition-colors">
                                {crumb.label}
                            </Link>
                        ) : (
                            <span className="text-vault-darkWine">{crumb.label}</span>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Content Area */}
            <div className="w-full lg:w-3/4">
                <div className="bg-white p-10 md:p-16 rounded-none shadow-2xl border-4 border-vault-darkWine relative">
                    <div className="absolute top-0 left-0 w-2 h-full bg-vault-yellow"></div>
                    <h1 className="font-serif text-4xl md:text-6xl font-black text-vault-darkWine uppercase tracking-tighter mb-10 pb-6 border-b border-gray-200 italic">
                        {title}
                    </h1>
                    <div className="prose prose-lg max-w-none text-gray-700 font-medium leading-relaxed font-serif prose-headings:font-black prose-headings:text-vault-darkWine prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-vault-wine hover:prose-a:text-vault-yellow prose-img:rounded-none prose-img:border-2 prose-img:border-vault-darkWine">
                        {children}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/4 sticky top-32">
                <Sidebar />
            </div>

        </div>
      </div>
    </div>
  );
};

export default PageLayout;