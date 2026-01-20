'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#051923]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex flex-col group">
              <span className="text-2xl font-black italic tracking-tighter text-white leading-none">
                ELE<span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">V8</span>
              </span>
              <span className="text-[0.6rem] font-bold tracking-[0.2em] text-slate-400 group-hover:text-cyan-400 transition-colors uppercase">
                Performance
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
              <Button size="sm" className="ml-4">JOIN NOW</Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#051923] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button size="sm" className="w-full">JOIN NOW</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
