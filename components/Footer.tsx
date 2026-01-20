import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#020d12] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <div className="flex flex-col">
                <span className="text-3xl font-black italic tracking-tighter text-white leading-none">
                  ELE<span className="text-cyan-400">V8</span>
                </span>
                <span className="text-xs font-bold tracking-[0.3em] text-slate-500 group-hover:text-cyan-400 transition-colors uppercase">
                  Performance
                </span>
              </div>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              Elevating human performance through science-based training, premium facilities, and expert coaching. Your journey to the peak starts here.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3">
              {['About', 'Programs', 'Trainers', 'Contact', 'Membership'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>123 Performance Way,<br />Fitness City, ST 10001</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-cyan-400 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-cyan-400 shrink-0" />
                <span>hello@elev8performance.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Elev8 Performance. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
