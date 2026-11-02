import { BookOpen, Calendar, CheckCircle2, Circle, Trash2 } from "lucide-react";

export default function KartuTugas({ tugas, onToggleStatus, onHapus }) {
  const isSelesai = tugas.status === "Selesai";

  const badgePrioritas = {
    Tinggi: "bg-red-50 text-red-700 border-red-200/80",
    Sedang: "bg-amber-50 text-amber-700 border-amber-200/80",
    Rendah: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
  }[tugas.prioritas] || "bg-slate-50 text-slate-700 border-slate-200";

  const dotPrioritas = {
    Tinggi: "bg-red-500",
    Sedang: "bg-amber-500",
    Rendah: "bg-emerald-500",
  }[tugas.prioritas] || "bg-slate-400";

  return (
    <article
      className={`bg-white rounded-xl border transition-all duration-200 p-5 shadow-xs hover:shadow-sm flex flex-col justify-between group ${
        isSelesai
          ? "border-emerald-200/80 bg-emerald-50/10"
          : "border-slate-200/90 hover:border-indigo-300"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60">
            <BookOpen className="w-3.5 h-3.5 text-slate-500" strokeWidth={2} />
            <span>{tugas.mataKuliah}</span>
          </span>

          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${badgePrioritas}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${dotPrioritas}`}></span>
            <span>Prioritas {tugas.prioritas}</span>
          </span>
        </div>

        <h3
          className={`text-sm sm:text-base font-semibold text-slate-900 mb-2.5 leading-snug transition-colors ${
            isSelesai ? "line-through text-slate-400" : ""
          }`}
        >
          {tugas.judul}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" strokeWidth={2} />
          <span>Tenggat: <strong className="font-medium text-slate-700">{tugas.deadline}</strong></span>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onToggleStatus(tugas.id)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
            isSelesai
              ? "bg-emerald-100/70 text-emerald-800 hover:bg-emerald-100"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900"
          }`}
          title={isSelesai ? "Klik untuk tandai belum selesai" : "Klik untuk tandai telah selesai"}
          aria-label={`Status: ${tugas.status}. Klik untuk mengubah.`}
        >
          {isSelesai ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600" strokeWidth={2} />
          ) : (
            <Circle className="w-4 h-4 text-slate-400" strokeWidth={2} />
          )}
          <span>{tugas.status}</span>
        </button>

        <button
          type="button"
          onClick={() => onHapus(tugas.id)}
          className="inline-flex items-center gap-1 text-slate-400 hover:text-red-600 px-2 py-1.5 rounded-md hover:bg-red-50 text-xs transition-colors cursor-pointer"
          title="Hapus tugas ini"
          aria-label={`Hapus tugas ${tugas.judul}`}
        >
          <Trash2 className="w-3.5 h-3.5" strokeWidth={2} />
          <span>Hapus</span>
        </button>
      </div>
    </article>
  );
}
