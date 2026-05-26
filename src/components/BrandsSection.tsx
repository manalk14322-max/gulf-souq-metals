/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BRANDS } from '../data';

export default function BrandsSection() {
  return (
    <section className="bg-slate-50 py-8 sm:py-10 border-y border-slate-100 overflow-hidden relative" id="brands-ticker-bar">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
          BRANDS WE WORK WITH
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 sm:hidden">
        {BRANDS.slice(0, 6).map((brand) => (
          <div key={brand.name} className="rounded-xl bg-white border border-slate-100 px-3 py-3 text-center shadow-sm">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-700">
              {brand.name}
            </span>
          </div>
        ))}
      </div>

      {/* Infinite loop marquee simulator */}
      <div className="relative hidden sm:flex overflow-x-hidden">
        
        {/* Row wrapper */}
        <div className="flex gap-12 md:gap-24 items-center animate-marquee whitespace-nowrap py-2 shrink-0">
          {BRANDS.map((brand, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center font-sans font-black text-slate-350 hover:text-blue-900 text-lg md:text-xl tracking-widest uppercase transition-colors select-none"
              id={`brand-tag-${idx}`}
            >
              {/* Distinct custom typographies representing each real world trademark style */}
              <span className={`
                ${brand.name === 'DAIKIN' ? 'font-sans font-extrabold tracking-normal text-blue-600/60 hover:text-blue-600' : ''}
                ${brand.name === 'LG' ? 'font-serif font-bold italic tracking-tighter text-red-600/60 hover:text-red-650' : ''}
                ${brand.name === 'Carrier' ? 'font-sans italic tracking-tight font-extrabold text-teal-600/60 hover:text-teal-600' : ''}
                ${brand.name === 'SAMSUNG' ? 'font-sans font-semibold tracking-normal text-blue-900/60 hover:text-blue-900' : ''}
                ${brand.name === 'GREE' ? 'font-mono font-black tracking-widest text-[#0066cc]/60 hover:text-[#0066cc]' : ''}
                ${brand.name === 'MITSUBISHI ELECTRIC' ? 'font-sans font-black text-slate-500/60 hover:text-slate-800 tracking-tighter' : ''}
                ${brand.name === 'TRANE' ? 'font-sans tracking-wide text-orange-600/60 hover:text-orange-600' : ''}
                ${brand.name === 'YORK' ? 'font-serif tracking-widest font-black text-slate-900/40 hover:text-slate-900' : ''}
              `}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Second duplicated row wrapper to ensure full screen width without breaks */}
        <div className="flex gap-12 md:gap-24 items-center animate-marquee whitespace-nowrap py-2 shrink-0 ml-12 md:ml-24" aria-hidden="true">
          {BRANDS.map((brand, idx) => (
            <div 
              key={`dup-${idx}`} 
              className="flex items-center justify-center font-sans font-black text-slate-350 hover:text-blue-900 text-lg md:text-xl tracking-widest uppercase transition-colors select-none"
            >
              <span className={`
                ${brand.name === 'DAIKIN' ? 'font-sans font-extrabold tracking-normal text-blue-600/60 hover:text-blue-600' : ''}
                ${brand.name === 'LG' ? 'font-serif font-bold italic tracking-tighter text-red-600/60 hover:text-red-650' : ''}
                ${brand.name === 'Carrier' ? 'font-sans italic tracking-tight font-extrabold text-teal-600/60 hover:text-teal-600' : ''}
                ${brand.name === 'SAMSUNG' ? 'font-sans font-semibold tracking-normal text-blue-900/60 hover:text-blue-900' : ''}
                ${brand.name === 'GREE' ? 'font-mono font-black tracking-widest text-[#0066cc]/60 hover:text-[#0066cc]' : ''}
                ${brand.name === 'MITSUBISHI ELECTRIC' ? 'font-sans font-black text-slate-500/60 hover:text-slate-800 tracking-tighter' : ''}
                ${brand.name === 'TRANE' ? 'font-sans tracking-wide text-orange-600/60 hover:text-orange-600' : ''}
                ${brand.name === 'YORK' ? 'font-serif tracking-widest font-black text-slate-900/40 hover:text-slate-905' : ''}
              `}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
