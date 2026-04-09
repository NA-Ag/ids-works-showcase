import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdmissionsPopup from './components/AdmissionsPopup';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Login from './pages/Login';
import HeadmasterWelcome from './pages/About/HeadteacherWelcome';
import History from './pages/About/History';
import MissionVisionValues from './pages/About/MissionVisionValues';
import Accreditations from './pages/About/Accreditations';
import InternationalOutlook from './pages/About/InternationalOutlook';
import UniqueEnvironment from './pages/About/UniqueEnvironment';
import Library from './pages/About/Library';
import InspectionReports from './pages/About/InspectionReports';
import Kinder from './pages/Programmes/Kinder';
import Primary from './pages/Programmes/Primary';
import Secondary from './pages/Programmes/Secondary';
import Plus from './pages/Programmes/Plus';
import PlusKinder from './pages/Programmes/PlusKinder';
import PlusPrimary from './pages/Programmes/PlusPrimary';
import PlusSecondary from './pages/Programmes/PlusSecondary';
import PlusHighSchool from './pages/Programmes/PlusHighSchool';
import Admissions from './pages/Admissions';
import Testimonials from './pages/Testimonials';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';

const AppContent: React.FC = () => {
  const location = useLocation();
  // Hide header/footer on specialized portal pages
  const isProtectedRoute = location.pathname.endsWith('/login') || location.pathname.endsWith('/dashboard');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      {!isProtectedRoute && <AdmissionsPopup />}
      {!isProtectedRoute && <Header />}
      
      <main className={`flex-grow ${!isProtectedRoute ? 'pt-24 md:pt-32' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about-us/headmaster-welcome" element={<HeadmasterWelcome />} />
          <Route path="/about-us/history" element={<History />} />
          <Route path="/about-us/mission-vision-values" element={<MissionVisionValues />} />
          <Route path="/about-us/accreditations" element={<Accreditations />} />
          <Route path="/about-us/international-outlook" element={<InternationalOutlook />} />
          <Route path="/about-us/unique-environment" element={<UniqueEnvironment />} />
          <Route path="/about-us/library" element={<Library />} />
          <Route path="/about-us/inspection-reports" element={<InspectionReports />} />
          <Route path="/kinder" element={<Kinder />} />
          <Route path="/primary" element={<Primary />} />
          <Route path="/secondary" element={<Secondary />} />
          <Route path="/high-school" element={<Plus />} />
          <Route path="/plus/kinder" element={<PlusKinder />} />
          <Route path="/plus/primary" element={<PlusPrimary />} />
          <Route path="/plus/secondary" element={<PlusSecondary />} />
          <Route path="/plus/high-school" element={<PlusHighSchool />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {!isProtectedRoute && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <AppContent />
    </>
  );
};

export default App;