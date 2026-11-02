import { ListTodo, Inbox } from "lucide-react";
import KartuTugas from "./KartuTugas";

export default function DaftarTugas({ daftarTugas, onToggleStatus, onHapus }) {
  return (
    <section aria-label="Daftar Tugas Kuliah">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ListTodo className="w-5 h-5 text-indigo-600" strokeWidth={2} />
          <h2 className="text-base font-bold text-slate-900">
            Daftar Tugas Kuliah
          </h2>
          <span className="text-xs bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded-full font-semibold">
            {daftarTugas.length}
          </span>
        </div>
      </div>

      {daftarTugas.length === 0 ? (
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center shadow-xs">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-3">
            <Inbox className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <p className="text-base font-semibold text-slate-800">
            Belum ada data tugas kuliah
          </p>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Gunakan formulir di atas untuk mulai mencatat tugas pertama Anda.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {daftarTugas.map((tugas) => (
            <KartuTugas
              key={tugas.id}
              tugas={tugas}
              onToggleStatus={onToggleStatus}
              onHapus={onHapus}
            />
          ))}
        </div>
      )}
    </section>
  );
}
