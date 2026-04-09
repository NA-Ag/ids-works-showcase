import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Send, CheckCircle, ArrowLeft } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: 'Director(a)',
    school: '',
    email: '',
    tier: 'standard',
    message: '',
    _honeypot: '' // Anti-spam hidden field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Honeypot check (Basic bot filter)
    if (formData._honeypot) {
      console.warn('Bot detected via honeypot');
      return; 
    }

    // 2. Institutional Email Validation (Basic filter)
    const commonFreeDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'icloud.com'];
    const emailDomain = formData.email.split('@')[1]?.toLowerCase();
    
    if (commonFreeDomains.includes(emailDomain)) {
      alert('Por favor, considere utilizar un correo institucional (.edu.mx) para una respuesta prioritaria.');
    }

    // Simulate API call to contacto@idsworks.com.mx
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      position: 'Director(a)',
      school: '',
      email: '',
      tier: 'standard',
      message: '',
      _honeypot: ''
    });
  };

  return (
    <Section id="contact" className="bg-vault-paper border-t-8 border-vault-blue">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-200">
        <div className="bg-vault-darkBlue p-4 border-b-4 border-vault-yellow">
          <h3 className="text-white font-mono font-bold text-center tracking-widest text-lg">
            // {submitted ? 'TRANSMISIÓN EXITOSA' : 'FORMULARIO DE INICIATIVA'}
          </h3>
        </div>

        <div className="p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12 space-y-8 animate-fade-in">
              <div className="flex justify-center">
                <div className="bg-vault-blue/10 p-6 rounded-full border-4 border-vault-blue animate-bounce-slow">
                  <CheckCircle className="w-16 h-16 text-vault-blue" />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-vault-darkBlue uppercase tracking-tighter italic">Solicitud Recibida</h2>
                <p className="text-vault-gray max-w-md mx-auto leading-relaxed">
                  Gracias, <span className="font-bold text-vault-blue">{formData.name}</span>. Hemos recibido su iniciativa para la infraestructura de <span className="font-bold">{formData.school || 'su institución'}</span>.
                </p>
                <p className="text-sm text-gray-400 font-mono uppercase tracking-widest">
                  Folio de Seguimiento: #{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
                </p>
              </div>
              <div className="pt-8">
                <Button variant="outline" onClick={handleReset} className="flex items-center gap-2 mx-auto">
                  <ArrowLeft size={16} /> Volver al Formulario
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-vault-darkBlue mb-2">Contáctenos</h2>
                <p className="text-gray-500">
                  Complete los campos para iniciar la modernización de su institución.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="position" className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Cargo / Función
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-b-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-vault-blue focus:bg-blue-50 transition-colors rounded-t-sm cursor-pointer"
                    >
                      <option value="Director(a)">Director(a)</option>
                      <option value="Administrativo(a)">Administrativo(a)</option>
                      <option value="Patronato">Patronato / Socio</option>
                      <option value="Sistemas">Sistemas / IT</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-b-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-vault-blue focus:bg-blue-50 transition-colors rounded-t-sm"
                      placeholder="Ej. Francisco González"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                    Correo Electrónico Institucional
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-b-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-vault-blue focus:bg-blue-50 transition-colors rounded-t-sm"
                    placeholder="contacto@escuela.edu.mx"
                    required
                  />
                </div>

                {/* Honeypot field - Hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="_honeypot"
                    value={formData._honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="tier" className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                    Plan de Interés
                  </label>
                  <select
                    id="tier"
                    name="tier"
                    value={formData.tier}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-b-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-vault-blue focus:bg-blue-50 transition-colors rounded-t-sm cursor-pointer"
                  >
                    <option value="lite">Lite ($100k MXN)</option>
                    <option value="standard">Estándar ($300k MXN)</option>
                    <option value="integrated">Integrado ($450k MXN)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                    Requerimientos del Proyecto
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-slate-50 border-b-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-vault-blue focus:bg-blue-50 transition-colors rounded-t-sm resize-none"
                    placeholder="Describa sus necesidades..."
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" fullWidth className="group flex items-center justify-center gap-3">
                    <span className="group-hover:mr-2 transition-all">Enviar Solicitud</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};