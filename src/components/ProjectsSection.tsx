/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowRight, MapPin, Eye, Building2, Wind, ShieldAlert, CheckCircle, X } from 'lucide-react';

export default function ProjectsSection() {
  const [activeTab, setActiveTab ] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tabs = ['All', 'Commercial', 'Industrial', 'Residential', 'Hospitality', 'Retail'];

  const filteredProjects = activeTab === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(proj => proj.category === activeTab);

  // Mock mechanical layouts data to populate our premium blueprint lightbox
  const getProjectSpecs = (projId: string) => {
    switch (projId) {
      case 'proj-1':
        return {
          capacity: '450 TR (Thermal Rating)',
          chillerBrand: 'DAIKIN VRF IV Inverters',
          ductSize: '18,500 Sq Ft GI supply system',
          ventilation: 'Fresh air induction systems with heat recover wheels',
          challenges: 'High solar heat absorption profile cured by custom double glazing loads.'
        };
      case 'proj-2':
        return {
          capacity: '850 TR (Centrifugal air chiller)',
          chillerBrand: 'TRANE helical-rotary chillers',
          ductSize: '45,000 Sq Ft spiral rigid ventilation lines',
          ventilation: 'Negative draft safety ventilation ducts for fabrication area',
          challenges: 'Exhaust grease scrubbing dynamic load management.'
        };
      case 'proj-3':
        return {
          capacity: '35 TR (Concealed splits)',
          chillerBrand: 'SAMSUNG DVM S Eco Smart',
          ductSize: '3,800 Sq Ft insulated PI ductwork',
          ventilation: 'Low decibel acoustic acoustic return grilles',
          challenges: 'Complete architectural concealment within low concrete ceilings.'
        };
      case 'proj-4':
        return {
          capacity: '1,200 TR (Water Cooled Plant)',
          chillerBrand: 'CARRIER 19XR Centrifugal chillers',
          ductSize: '82,000 Sq Ft SMACNA class GI ventilation lines',
          ventilation: 'VAV (Variable Air Volume) control boxes',
          challenges: 'Balancing indoor atmospheric pressure cycles across multi-entrance pathways.'
        };
      case 'proj-5':
        return {
          capacity: '800 TR (Water Cooled Plant)',
          chillerBrand: 'MITSUBISHI City Multi VRF',
          ductSize: '32,500 Sq Ft dual air distribution lines',
          ventilation: 'Carbon filter sanitizing ventilation grilles',
          challenges: 'Maintaining specific humidity boundaries at night.'
        };
      default:
        return {
          capacity: '150 TR',
          chillerBrand: 'Selected Premium Brand',
          ductSize: 'Custom GI sizing systems',
          ventilation: 'High speed air handlers',
          challenges: 'Standard desert environmental constraints.'
        };
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="projects-headers" data-reveal>
          <div className="text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">
              OUR WORK SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-2">
              Projects We're Proud Of
            </h2>
          </div>

          {/* Filter Tab buttons */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none" id="projects-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
                  activeTab === tab 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs' 
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-205 text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project grid layout (Matching original visual references exactly) */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 border border-slate-100 rounded-3xl" id="projects-empty-state">
            <Building2 className="w-12 h-12 text-slate-350 mx-auto mb-3" />
            <p className="text-slate-500 text-sm font-sans">No completed projects under the **{activeTab}** category currently published.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid-items">
            {filteredProjects.map((proj, idx) => (
              <div 
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="premium-card group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 bg-slate-100 aspect-16/11 cursor-pointer"
                data-reveal
                style={{ '--reveal-delay': `${idx * 80}ms` } as CSSProperties}
              >
                {/* Photo frame */}
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-104 transition duration-500 select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shade covering */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
                
                {/* Information Overlays */}
                <div className="absolute bottom-5 left-5 right-5 text-left flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold font-mono tracking-widest text-blue-400 uppercase bg-blue-950/60 px-2 py-0.5 rounded-sm">
                      {proj.category}
                    </span>
                    <h3 className="text-lg font-black text-white uppercase font-sans tracking-tight leading-tight mt-1.5">
                      {proj.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" /> {proj.location}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-full bg-white/10 text-white border border-white/20 group-hover:bg-white group-hover:text-[#0066cc] group-hover:scale-110 transition-all shrink-0">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Projects Action button */}
        <div className="text-center mt-12">
          <a 
            href="#/contact"
            className="premium-button px-6 py-3 bg-white hover:bg-slate-50 border border-slate-205 text-slate-800 font-sans font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 "
            id="view-all-projects-btn"
          >
            Request Project Portfolios <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Projects Blueprint Lightbox Popup modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-xs animate-fadeIn" id="blueprint-popup-overlay">
            <div className="relative w-full sm:max-w-2xl bg-slate-950 text-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 border border-blue-950 flex flex-col md:flex-row gap-6 animate-scaleUp max-h-[92vh] overflow-y-auto">
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full cursor-pointer"
                id="close-blueprint-btn"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left-hand column: Schematic stats */}
              <div className="flex-1 space-y-5 text-left">
                <div>
                  <span className="text-[9px] font-mono uppercase bg-blue-950 text-blue-400 px-2.5 py-1 rounded-sm font-bold">HVAC Blueprint</span>
                  <h3 className="text-2xl font-black font-sans text-white mt-2 uppercase tracking-tight">{selectedProject.title} Specs</h3>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-red-400 text-xs" /> {selectedProject.location} • {selectedProject.category}</p>
                </div>

                <div className="space-y-3.5 border-t border-slate-900 pt-4 text-xs font-sans">
                  <div>
                    <span className="text-[10px] text-slate-505 font-mono uppercase tracking-wider block">1. Installed Capacity</span>
                    <span className="text-slate-200 font-semibold text-xs flex items-center gap-2 mt-0.5"><Wind className="w-4 h-4 text-blue-400" /> {getProjectSpecs(selectedProject.id).capacity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-505 font-mono uppercase tracking-wider block">2. Primary Compressor Brand</span>
                    <span className="text-slate-200 font-semibold text-xs flex items-center gap-2 mt-0.5"><Building2 className="w-4 h-4 text-blue-400" /> {getProjectSpecs(selectedProject.id).chillerBrand}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-505 font-mono uppercase tracking-wider block">3. Ventilation & Ducting Fabrication</span>
                    <span className="text-slate-200 font-semibold text-xs flex items-center gap-2 mt-0.5"><ShieldAlert className="w-4 h-4 text-blue-400" /> {getProjectSpecs(selectedProject.id).ductSize}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-505 font-mono uppercase tracking-wider block">4. Ventilation Fresh Air Sizing</span>
                    <p className="text-slate-350 text-xs mt-0.5 leading-relaxed">{getProjectSpecs(selectedProject.id).ventilation}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-505 font-mono uppercase tracking-wider block">5. Key Thermal Challenge Solved</span>
                    <p className="text-slate-350 text-xs mt-0.5 leading-relaxed italic">{getProjectSpecs(selectedProject.id).challenges}</p>
                  </div>
                </div>
              </div>

              {/* Right-hand column: Image preview & layout */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="rounded-2xl overflow-hidden border border-slate-850 aspect-video md:aspect-square bg-slate-900 shadow-inner">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover select-none" referrerPolicy="no-referrer" />
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-2.5 bg-blue-650 hover:bg-blue-600 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all mt-4"
                >
                  Return to Portfolio
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
