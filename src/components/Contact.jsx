import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 id="about" className="text-2xl md:text-3xl font-bold text-slate-900">Mari Bekerja Sama</h2>
          <p className="text-slate-600 mt-2">
            Punya ide menarik atau ingin berdiskusi? Kirim pesan — saya akan segera merespons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <form
              action="mailto:email@domain.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700">Nama</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900"
                  placeholder="email@domain.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                <Send size={18} />
                Kirim Pesan
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white flex items-start gap-4">
              <div className="p-2 rounded-md bg-slate-900 text-white"><Mail size={18} /></div>
              <div>
                <div className="text-sm text-slate-500">Email</div>
                <a href="mailto:email@domain.com" className="text-slate-900 hover:underline">email@domain.com</a>
              </div>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white flex items-start gap-4">
              <div className="p-2 rounded-md bg-slate-900 text-white"><Phone size={18} /></div>
              <div>
                <div className="text-sm text-slate-500">Telepon</div>
                <a href="tel:+6200000000" className="text-slate-900 hover:underline">+62 000 0000</a>
              </div>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white flex items-start gap-4">
              <div className="p-2 rounded-md bg-slate-900 text-white"><MapPin size={18} /></div>
              <div>
                <div className="text-sm text-slate-500">Lokasi</div>
                <div className="text-slate-900">Indonesia</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Nama Anda. Semua hak dilindungi.
        </div>
      </div>
    </section>
  );
}
