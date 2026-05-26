/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#/' },
    { label: 'About Us', href: '#/about' },
    { label: 'Services', href: '#/services' },
    { label: 'Projects', href: '#/projects' },
    { label: 'Why Us', href: '#/why-us' },
    { label: 'Contact Us', href: '#/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3' 
          : 'bg-white/90 backdrop-blur-xs py-5'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 min-w-0">
          
          {/* Logo Brand */}
          <a href="#/" className="flex items-center gap-2 sm:gap-3 group animate-fadeIn min-w-0" id="navbar-logo-brand">
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 overflow-hidden shadow-sm shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}gulf-souq-metals-logo.jpeg`}
                alt="Gulf Souq Metals logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <span className="block text-base sm:text-lg font-black tracking-tight text-slate-900 font-sans leading-none uppercase truncate">
                Gulf Souq
              </span>
              <span className="block text-[9px] font-bold tracking-widest text-[#0066cc] font-mono leading-none mt-1">
                METALS
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8" id="desktop-nav-items">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href}
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider relative group"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Trigger Button */}
          <div className="hidden lg:block">
            <button 
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-blue-650 hover:bg-blue-700 text-white font-sans font-bold text-xs tracking-wide rounded-lg uppercase flex items-center gap-2 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
              id="nav-get-quote-btn"
            >
              Get a Quote <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-expanded="false"
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div 
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-[86vw] max-w-xs bg-white shadow-2xl p-5 sm:p-6 transition-transform duration-350 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-drawer-menu"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 overflow-hidden flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}gulf-souq-metals-logo.jpeg`}
                alt="Gulf Souq Metals logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-black text-slate-900 uppercase">Gulf Souq</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600"
            id="close-mobile-drawer-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-8 flex flex-col gap-5">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-blue-600 uppercase tracking-widest pb-1 border-b border-slate-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-100">
          <button 
            onClick={() => {
              setIsOpen(false);
              onOpenQuote();
            }}
            className="w-full py-3 bg-blue-650 hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 "
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
