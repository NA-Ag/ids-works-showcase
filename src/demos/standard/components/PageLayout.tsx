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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero / Page Title */}
      <div 
        className="relative h-[220px] bg-cover bg-center bg-no-repeat bg-gray-100"
        style={{ backgroundImage: `url("${bannerImage}")` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Breadcrumbs Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-12 py-4">
            <nav className="flex text-sm text-gray-500 items-center">
                {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={crumb.label}>
                        {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
                        {crumb.href ? (
                            <Link to={crumb.href} className="hover:text-idsBlue transition-colors">
                                {crumb.label}
                            </Link>
                        ) : (
                            <span className="text-idsBlue font-medium">{crumb.label}</span>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Content Area */}
            <div className="w-full lg:w-3/4">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
                    <h1 className="font-serif text-3xl md:text-4xl text-idsBlue mb-8 pb-4 border-b border-gray-100">
                        {title}
                    </h1>
                    <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <Sidebar />

        </div>
      </div>
    </div>
  );
};

export default PageLayout;