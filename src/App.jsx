import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { Send } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-slate-700">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* CTA Submit Section */}
        <section id="submit" className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border border-pink-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800">Kirim Aspirasi Anda</h3>
              <p className="mt-2 text-sm text-slate-600">
                Tulis aspirasi secara singkat dan jelas. Identitas Anda dapat disamarkan jika diinginkan.
              </p>
              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Terima kasih! Aspirasi Anda sudah dikirim.");
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nama (opsional)"
                    className="w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-300"
                  />
                  <input
                    type="email"
                    placeholder="Email (opsional)"
                    className="w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Judul Aspirasi"
                  required
                  className="w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-300"
                />
                <textarea
                  placeholder="Tuliskan aspirasi Anda di sini..."
                  rows={5}
                  required
                  className="w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-300"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-pink-200 transition-colors"
                >
                  <Send className="h-4 w-4" /> Kirim Sekarang
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
