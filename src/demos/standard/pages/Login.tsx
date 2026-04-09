import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Eye, EyeOff, Key, User, Info, X, ChevronLeft, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/demos/standard/context/LanguageContext';

const Login: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCreds, setShowCreds] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const translations = {
    title: isEn ? "Sign in" : "Iniciar sesión",
    subtitle: isEn ? "Use your Colegio IDS account" : "Usar su cuenta de Colegio IDS",
    emailPlaceholder: "someone@colegioids.edu.mx",
    next: isEn ? "Next" : "Siguiente",
    passwordTitle: isEn ? "Enter password" : "Escribir contraseña",
    passwordPlaceholder: isEn ? "Password" : "Contraseña",
    signIn: isEn ? "Sign in" : "Iniciar sesión",
    forgot: isEn ? "Forgot password?" : "¿Olvidó su contraseña?",
    noAccount: isEn ? "No account?" : "¿No tiene cuenta?",
    createOne: isEn ? "Create one!" : "Cree una",
    terms: isEn ? "Terms of use" : "Términos de uso",
    privacy: isEn ? "Privacy & cookies" : "Privacidad y cookies",
    demoBtn: isEn ? "Demo Credentials" : "Credenciales de Demo",
    backBtn: isEn ? "Back to site" : "Volver al sitio",
    infoTitle: isEn ? "Login Simulation" : "Simulación de Inicio",
    infoDesc: isEn 
        ? "This is a demonstration of the Microsoft 365 SSO integration. Depending on the credentials used, you will experience a different institutional environment (Admin, Teacher, Student, or Parent)."
        : "Esta es una demostración de la integración de Microsoft 365. Dependiendo de las credenciales, experimentará un entorno institucional diferente (Admin, Maestro, Alumno o Padre)."
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && email) {
      setStep(2);
    } else if (step === 2 && password) {
      let role = 'student';
      if (email.includes('admin')) role = 'admin';
      if (email.includes('profesor') || email.includes('teacher')) role = 'teacher';
      if (email.includes('parent') || email.includes('padre')) role = 'parent';
      navigate('/demos/standard/dashboard', { state: { role, email } });
    }
  };

  const demoAccounts = [
    { role: isEn ? "Administrator" : "Administrador", email: "admin@colegioids.edu.mx" },
    { role: isEn ? "Teacher" : "Profesor", email: "profesor@colegioids.edu.mx" },
    { role: isEn ? "Student" : "Alumno", email: "alumno@colegioids.edu.mx" },
    { role: isEn ? "Parent" : "Padre de Familia", email: "padre@colegioids.edu.mx" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans relative overflow-hidden" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      
      <div className="absolute top-8 left-8 z-50 flex items-center gap-4">
        <Link to="/demos/standard" className="bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full shadow-lg border border-gray-200 text-vault-darkBlue flex items-center gap-2 hover:bg-white transition-all font-black uppercase tracking-widest text-[10px]">
            <ChevronLeft size={14} /> {translations.backBtn}
        </Link>
        <button onClick={() => setShowInfo(!showInfo)} className="bg-vault-darkBlue text-white p-2.5 rounded-full shadow-lg hover:bg-vault-blue transition-all relative">
            <HelpCircle size={18} />
            {showInfo && (
                <div className="absolute top-full left-0 mt-4 w-72 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 text-left animate-fade-in-up">
                    <h4 className="font-black text-vault-darkBlue uppercase tracking-tight text-xs mb-3">{translations.infoTitle}</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{translations.infoDesc}</p>
                </div>
            )}
        </button>
      </div>

      <div className="relative bg-white w-full max-w-[440px] p-10 shadow-2xl animate-fade-in z-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2.5 h-2.5 bg-[#f25022]"></div>
            <div className="w-2.5 h-2.5 bg-[#7fba00]"></div>
            <div className="w-2.5 h-2.5 bg-[#00a4ef]"></div>
            <div className="w-2.5 h-2.5 bg-[#ffb900]"></div>
          </div>
          <span className="text-xl font-semibold text-gray-500">Microsoft</span>
        </div>

        {step === 1 ? (
          <div className="animate-slide-in-right">
            <h1 className="text-2xl font-semibold text-gray-800 mb-1">{translations.title}</h1>
            <p className="text-[15px] text-gray-700 mb-6">{translations.subtitle}</p>
            <form onSubmit={handleNext}>
              <input type="email" placeholder={translations.emailPlaceholder} className="w-full border-b border-gray-400 py-1 focus:outline-none focus:border-[#0067b8] mb-4 text-[15px]" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <div className="text-[13px] text-gray-600 mb-8">{translations.noAccount} <a href="#" className="text-[#0067b8] hover:underline">{translations.createOne}</a></div>
              <div className="flex justify-end items-center gap-2"><button type="submit" className="bg-[#0067b8] text-white px-9 py-1.5 hover:bg-[#005da6] transition-colors text-[15px]">{translations.next}</button></div>
            </form>
          </div>
        ) : (
          <div className="animate-slide-in-right">
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => setStep(1)}><div className="text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></div><span className="text-[15px] text-gray-700">{email}</span></div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">{translations.passwordTitle}</h1>
            <form onSubmit={handleNext}>
              <div className="relative mb-8">
                <input type={showPassword ? "text" : "password"} placeholder={translations.passwordPlaceholder} className="w-full border-b border-gray-400 py-1 focus:outline-none focus:border-[#0067b8] text-[15px]" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="button" className="absolute right-0 top-1 text-gray-500" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
              </div>
              <div className="text-[13px] text-[#0067b8] hover:underline cursor-pointer mb-8">{translations.forgot}</div>
              <div className="flex justify-end items-center gap-2"><button type="submit" className="bg-[#0067b8] text-white px-9 py-1.5 hover:bg-[#005da6] transition-colors text-[15px]">{translations.signIn}</button></div>
            </form>
          </div>
        )}
      </div>

      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        {showCreds && (
            <div className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-vault-yellow w-80 animate-fade-in-up mb-2">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-black text-vault-darkBlue uppercase tracking-tight text-sm flex items-center gap-2"><Info size={16} className="text-vault-blue" /> {translations.demoBtn}</h4>
                    <button onClick={() => setShowCreds(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
                </div>
                <div className="space-y-4">
                    {demoAccounts.map(acc => (
                        <div key={acc.email} className="p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-vault-blue transition-colors cursor-pointer group" onClick={() => { setEmail(acc.email); setPassword('123Demo'); if(step === 2) setShowCreds(false); }}>
                            <p className="text-[10px] font-black text-vault-blue uppercase tracking-widest mb-1">{acc.role}</p>
                            <p className="text-xs font-mono text-gray-600 break-all">{acc.email}</p>
                        </div>
                    ))}
                    <div className="pt-2 border-t border-gray-100"><p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Password for all:</p><p className="text-xs font-mono font-bold text-vault-darkBlue">123Demo</p></div>
                </div>
            </div>
        )}
        <button onClick={() => setShowCreds(!showCreds)} className="bg-vault-darkBlue text-white px-6 py-3 rounded-full shadow-2xl border-2 border-vault-yellow flex items-center gap-3 hover:bg-vault-yellow hover:text-vault-darkBlue transition-all group active:scale-95"><Key size={18} className="group-hover:rotate-12 transition-transform" /><span className="font-black uppercase tracking-widest text-xs">{translations.demoBtn}</span></button>
      </div>

      <div className="fixed bottom-0 right-0 p-4 flex gap-4 text-[12px] text-gray-600"><a href="#" className="hover:underline">{translations.terms}</a><a href="#" className="hover:underline">{translations.privacy}</a><span className="text-gray-400">...</span></div>
    </div>
  );
};

export default Login;