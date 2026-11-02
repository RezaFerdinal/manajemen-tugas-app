import { CheckSquare, GraduationCap, BookMarked } from "lucide-react";

export default function Header({
  judul = "Manajemen Tugas Kuliah",
  deskripsi = "Pusat kendali dan pencatatan tugas akademik semester 7.",
}) {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-10 backdrop-blur-md bg-opacity-95">
      <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-xs ring-1 ring-white/10">
              <CheckSquare className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-white">
                  {judul}
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  <BookMarked className="w-3 h-3" /> Pemrograman Web
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {deskripsi}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/60 shadow-xs">
              <GraduationCap className="w-4 h-4 text-indigo-400" strokeWidth={2} />
              <span>Semester 7</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
