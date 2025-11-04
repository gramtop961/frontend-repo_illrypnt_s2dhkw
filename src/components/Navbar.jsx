import { MessageCircle, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-400 to-rose-400 flex items-center justify-center shadow-sm">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-800">Aspirasi MI</p>
            <p className="text-xs text-slate-500">Manajemen Informatika</p>
          </div>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-600 hover:text-pink-600 transition-colors">Fitur</a>
          <a href="#about" className="text-slate-600 hover:text-pink-600 transition-colors">Tentang</a>
          <a href="#contact" className="text-slate-600 hover:text-pink-600 transition-colors">Kontak</a>
        </nav>
        <a
          href="#submit"
          className="inline-flex items-center gap-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          Sampaikan Aspirasi
        </a>
      </div>
    </header>
  );
}
