import { Sparkles, Send } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-rose-50 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-10 w-72 h-72 bg-pink-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-10 w-80 h-80 bg-rose-200/60 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs sm:text-sm text-pink-700 border border-pink-200 shadow-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Ruang Aspirasi Mahasiswa Manajemen Informatika
        </div>
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800">
          Suara Anda, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Perubahan Kita</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-slate-600">
          Sampaikan ide, kritik, dan saran untuk kemajuan Prodi Manajemen Informatika. Setiap aspirasi didengar, ditindaklanjuti, dan dipublikasikan secara transparan.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-pink-200 transition-colors"
          >
            <Send className="h-4 w-4" /> Kirim Aspirasi
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full bg-white hover:bg-pink-50 text-pink-700 px-6 py-3 text-sm font-medium border border-pink-200 shadow-sm transition-colors"
          >
            Pelajari Fitur
          </a>
        </div>
      </div>
    </section>
  );
}
