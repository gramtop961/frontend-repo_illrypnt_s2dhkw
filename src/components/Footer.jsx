import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-white to-pink-50 border-t border-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          <div>
            <h4 className="font-semibold text-slate-800">Aspirasi MI</h4>
            <p className="mt-2 text-sm text-slate-600">Wadah aspirasi mahasiswa Manajemen Informatika dengan nuansa lembut dan ramah.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800">Navigasi</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-pink-600" href="#features">Fitur</a></li>
              <li><a className="hover:text-pink-600" href="#about">Tentang</a></li>
              <li><a className="hover:text-pink-600" href="#submit">Kirim Aspirasi</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800">Kontak</h4>
            <a
              href="mailto:aspirasi@mi.ac.id"
              className="mt-2 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-pink-600"
            >
              <Mail className="h-4 w-4" /> aspirasi@mi.ac.id
            </a>
            <p className="mt-2 text-xs text-slate-500">© {new Date().getFullYear()} Aspirasi MI. Semua hak dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
