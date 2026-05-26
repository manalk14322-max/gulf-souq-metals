/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Wrench, Settings, Layers, Cpu, Wind, Sparkles, Building, FileText, ArrowRight, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { SERVICES } from '../data';
import { SystemService } from '../types';

interface ServicesSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

export default function ServicesSection({ onOpenQuote }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<SystemService | null>(null);

  // Map Lucide icons based on standard strings
  const getIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Wrench': return <Wrench className={className} />;
      case 'Settings': return <Settings className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Wind': return <Wind className={className} />;
      case 'ShieldAlert': return <Sparkles className={className} />; // spark clean air
      case 'Building': return <Building className={className} />;
      case 'FileText': return <FileText className={className} />;
      default: return <Wrench className={className} />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#001b44] text-white relative overflow-hidden">
      
      {/* Abstract mesh subtle glow vectors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto mb-16 animate-fadeIn" id="services-text-header" data-reveal>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400">
            OUR TECHNICAL SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans">
            Complete HVAC & Ducting Solutions
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            We provide full diagnostic layout, specialized engineering design, precise sheet fabrication, and priority commercial preventative maintenance across the Gulf.
          </p>
        </div>

        {/* Services grids (8-item Grid matching uploaded dashboard exactly) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid-cards">
          {SERVICES.map((serv, idx) => (
            <div 
              key={serv.id}
              onClick={() => setSelectedService(serv)}
              className="premium-card bg-[#00255a] hover:bg-[#002f70] border border-blue-950 hover:border-blue-450/40 rounded-2xl p-5 sm:p-6 text-left transition-all duration-300 transform hover:-translate-y-1 select-none cursor-pointer group flex flex-col justify-between min-h-[210px]"
              data-reveal
              style={{ '--reveal-delay': `${idx * 60}ms` } as CSSProperties}
            >
              <div>
                <div className="p-3 bg-blue-900/60 text-blue-400 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {getIcon(serv.iconName)}
                </div>
                <h3 className="text-base font-black tracking-tight mt-5 group-hover:text-blue-300 transition-colors">
                  {serv.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 line-clamp-2">
                  {serv.description}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-bold text-blue-400 group-hover:text-blue-350 transition-colors mt-4 self-start">
                Engineering Specs <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic sliding panel / modal for detailing individual Service specifications */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-xs animate-fadeIn" id="service-details-overlay">
            <div className="relative w-full sm:max-w-lg bg-slate-900 text-white rounded-t-2xl sm:rounded-2xl shadow-2xl p-5 sm:p-8 border border-slate-800 animate-scaleUp max-h-[90vh] overflow-y-auto">
              
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
                id="close-details-drawer-btn"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 border-b border-slate-800 pb-5">
                <div className="p-3 bg-blue-600 text-white rounded-xl">
                  {getIcon(selectedService.iconName, "w-7 h-7")}
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono uppercase bg-blue-900/40 text-blue-400 px-2.5 py-1 rounded-sm font-semibold">Service Specifications</span>
                  <h3 className="text-xl font-bold mt-1.5">{selectedService.title}</h3>
                </div>
              </div>

              <div className="py-6 space-y-4 text-left text-xs sm:text-sm">
                <p className="text-slate-350 leading-relaxed font-sans">
                  {selectedService.longDescription}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-wider">Quality Guarantees</p>
                  <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-2 text-slate-400">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> SMACNA Standards</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> ESMA Star Certified</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> 1 Year Duct Warranty</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Original Brand Spares</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col min-[420px]:flex-row gap-3 pt-4 border-t border-slate-800">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-2.5 text-xs font-semibold hover:bg-slate-800 rounded-xl transition-all border border-slate-800 text-slate-400 hover:text-white"
                >
                  Close Specification
                </button>
                <button 
                  onClick={() => {
                    const serviceId = selectedService.id;
                    setSelectedService(null);
                    onOpenQuote(serviceId);
                  }}
                  className="premium-button flex-1 py-2.5 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Request Sizing <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
