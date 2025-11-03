import React from 'react';
import { Briefcase, Mail, Github, Linkedin } from 'lucide-react';

const NavLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
  >
    <Icon size={16} />
    <span>{label}</span>
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900">MyPortfolio</a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#projects" icon={Briefcase} label="Proyek" />
            <NavLink href="#contact" icon={Mail} label="Kontak" />
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md hover:bg-slate-100 text-slate-700"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md hover:bg-slate-100 text-slate-700"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
