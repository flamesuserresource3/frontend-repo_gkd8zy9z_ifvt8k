import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Dashboard Analitik',
    description:
      'Dasbor interaktif dengan grafik real-time dan manajemen data yang mulus.',
    tech: ['React', 'Tailwind', 'Chart.js'],
    link: '#',
  },
  {
    title: 'Toko Online Minimalis',
    description:
      'Pengalaman e-commerce yang cepat dengan checkout sederhana dan responsif.',
    tech: ['Next.js', 'Stripe', 'Vercel'],
    link: '#',
  },
  {
    title: 'Sistem Portfolio Generator',
    description:
      'Generator portofolio kustom dengan tema dinamis dan konten yang mudah dikelola.',
    tech: ['Node', 'Express', 'MongoDB'],
    link: '#',
  },
];

function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white hover:shadow-lg transition overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md text-xs font-medium">
            <Code2 size={16} />
            <span>Proyek</span>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-slate-900"
            aria-label="Kunjungi proyek"
          >
            <ExternalLink size={18} />
          </a>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-slate-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Proyek Pilihan</h2>
            <p className="text-slate-600 mt-2">Kumpulan pekerjaan terbaik yang saya bangun akhir-akhir ini.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
