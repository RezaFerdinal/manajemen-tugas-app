import { ClipboardList, Clock, CheckCircle2 } from "lucide-react";

export default function RingkasanStatistik({ totalTugas, tugasSelesai, tugasBelumSelesai }) {
  const persentase = totalTugas > 0 ? Math.round((tugasSelesai / totalTugas) * 100) : 0;

  return (
    <section className="mb-8" aria-label="Statistik Tugas">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-xs border border-slate-200/90 p-5 flex items-center justify-between transition-all hover:border-slate-300">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Total Tugas
            </p>
            <p className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900">
              {totalTugas}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">Semua mata kuliah</p>
          </div>
          <div className="w-11 h-11 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center">
            <ClipboardList className="w-5 h-5" strokeWidth={2} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xs border border-slate-200/90 p-5 flex items-center justify-between transition-all hover:border-amber-300">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Belum Selesai
            </p>
            <p className="mt-1.5 text-2xl font-bold tracking-tight text-amber-600">
              {tugasBelumSelesai}
            </p>
            <p className="text-[11px] text-amber-600/70 mt-0.5">Menunggu pengerjaan</p>
          </div>
          <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <Clock className="w-5 h-5" strokeWidth={2} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xs border border-slate-200/90 p-5 flex items-center justify-between transition-all hover:border-emerald-300">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Selesai
            </p>
            <p className="mt-1.5 text-2xl font-bold tracking-tight text-emerald-600">
              {tugasSelesai}
            </p>
            <p className="text-[11px] text-emerald-600/70 mt-0.5">Telah diselesaikan</p>
          </div>
          <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="mt-4 bg-white p-4 rounded-xl shadow-xs border border-slate-200/90">
        <div className="flex justify-between items-center mb-1.5 text-xs font-medium text-slate-600">
          <span>Progres pengerjaan keseluruhan</span>
          <span className="text-indigo-600 font-semibold">{persentase}% selesai</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${persentase}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
