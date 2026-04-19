import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Demos } from './pages/Demos';
import { StandardDemo } from './pages/StandardDemo';
import { LiteDemo } from './pages/LiteDemo';
import { BrochureViewer } from './pages/BrochureViewer';
import { AdminApp } from './demos/admin/App';
import { DataProvider } from './demos/admin/context/DataContext';

function AppContent() {
  const location = useLocation();
  const isDemo = location.pathname.startsWith('/demos/standard') || 
                 location.pathname.startsWith('/demos/lite') ||
                 location.pathname.startsWith('/demos/admin');
  const isProtectedRoute = location.pathname.endsWith('/login') || location.pathname.endsWith('/dashboard');

  return (
    <div className="min-h-screen bg-vault-paper text-slate-900 font-sans selection:bg-vault-yellow selection:text-vault-darkBlue">
      {!isDemo && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/brochure" element={<BrochureViewer />} />
          <Route path="/demos/standard/*" element={<StandardDemo />} />
          <Route path="/demos/lite/*" element={<LiteDemo />} />
          <Route path="/demos/admin/*" element={
            <DataProvider mode="mock">
              <AdminApp />
            </DataProvider>
          } />
        </Routes>
      </main>
      {!isDemo && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;