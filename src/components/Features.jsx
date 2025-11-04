import { Users, Shield, Star, MessageCircle } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Kirim Aspirasi Mudah",
    desc: "Formulir sederhana untuk menyampaikan ide, kritik, dan saran dalam hitungan detik.",
  },
  {
    icon: Users,
    title: "Kolaborasi Terbuka",
    desc: "Dukung, komentari, dan kembangkan aspirasi bersama komunitas MI.",
  },
  {
    icon: Shield,
    title: "Transparansi Tindak Lanjut",
    desc: "Setiap aspirasi dipantau statusnya hingga mendapatkan penyelesaian.",
  },
  {
    icon: Star,
    title: "Apresiasi Kontributor",
    desc: "Poin dan lencana bagi mahasiswa aktif yang berkontribusi positif.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Fitur Utama</h2>
          <p className="mt-3 text-slate-600">Didesain untuk memudahkan mahasiswa Manajemen Informatika menyampaikan aspirasi secara nyaman dan berdampak.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-pink-200 bg-gradient-to-b from-pink-50 to-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
        <div id="about" className="mt-16 rounded-3xl border border-pink-200 bg-pink-50/60 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-slate-800">Tentang Platform</h3>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Platform ini merupakan inisiatif untuk menjembatani komunikasi antara mahasiswa dan pengelola program studi Manajemen Informatika. Kami percaya setiap suara berharga dan dapat membawa perubahan nyata.
          </p>
        </div>
      </div>
    </section>
  );
}
