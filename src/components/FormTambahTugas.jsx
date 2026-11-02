import { useState } from "react";
import { PlusCircle, AlertCircle, X } from "lucide-react";

export default function FormTambahTugas({ onTambahTugas }) {
  const [judul, setJudul] = useState("");
  const [mataKuliah, setMataKuliah] = useState("");
  const [deadline, setDeadline] = useState("");
  const [prioritas, setPrioritas] = useState("Sedang");
  const [pesanError, setPesanError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!judul.trim() || !mataKuliah.trim()) {
      setPesanError("Masukkan judul tugas dan nama mata kuliah sebelum menyimpan.");
      return;
    }

    onTambahTugas({
      judul: judul.trim(),
      mataKuliah: mataKuliah.trim(),
      deadline: deadline || "Tidak ada tenggat",
      prioritas: prioritas,
      status: "Belum Selesai",
    });

    setJudul("");
    setMataKuliah("");
    setDeadline("");
    setPrioritas("Sedang");
    setPesanError("");
  };

  return (
    <section className="bg-white rounded-xl shadow-xs border border-slate-200/90 p-6 mb-8">
      <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100">
        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
          <PlusCircle className="w-4 h-4" strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-base font-bold text-slate-900 leading-tight">
            Tambah Tugas Baru
          </h2>
          <p className="text-xs text-slate-500">
            Catat rincian tugas akademik baru beserta tenggat waktu pengumpulannya.
          </p>
        </div>
      </div>

      {pesanError && (
        <div className="mb-5 p-3.5 bg-red-50/80 border border-red-200 text-red-700 rounded-lg text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" strokeWidth={2} />
            <span className="font-medium">{pesanError}</span>
          </div>
          <button
            type="button"
            onClick={() => setPesanError("")}
            className="text-red-400 hover:text-red-700 p-0.5 rounded transition-colors"
            aria-label="Tutup pesan peringatan"
          >
            <X className="w-3.5 h-3.5" strokeWidth={2} />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="judul"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
            >
              Judul Tugas <span className="text-red-500">*</span>
            </label>
            <input
              id="judul"
              type="text"
              placeholder="Contoh: Implementasi Komponen Bab 6 React"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50/50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="mataKuliah"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
            >
              Mata Kuliah <span className="text-red-500">*</span>
            </label>
            <input
              id="mataKuliah"
              type="text"
              placeholder="Contoh: Pemrograman Web Lanjut"
              value={mataKuliah}
              onChange={(e) => setMataKuliah(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50/50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="deadline"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
            >
              Tenggat Waktu
            </label>
            <input
              id="deadline"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50/50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="prioritas"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
            >
              Tingkat Prioritas
            </label>
            <select
              id="prioritas"
              value={prioritas}
              onChange={(e) => setPrioritas(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50/50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all cursor-pointer"
            >
              <option value="Tinggi">Tinggi</option>
              <option value="Sedang">Sedang</option>
              <option value="Rendah">Rendah</option>
            </select>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" strokeWidth={2} />
            <span>Tambah Tugas</span>
          </button>
        </div>
      </form>
    </section>
  );
}
