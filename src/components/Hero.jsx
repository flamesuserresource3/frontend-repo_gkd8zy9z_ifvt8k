import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mb-4">
              <span>Terbuka untuk kesempatan baru</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Halo, saya <span className="text-indigo-600">Profesional Kreatif</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Saya membangun pengalaman digital yang elegan dan berkinerja tinggi —
              menggabungkan desain yang tajam dengan implementasi yang rapi.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Lihat Proyek
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50 transition"
              >
                <Download size={18} />
                Unduh CV
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-tr from-indigo-500 to-pink-500 mx-auto shadow-xl" />
            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold text-slate-900">Nama Anda</h2>
              <p className="text-slate-600">Frontend Engineer • UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
