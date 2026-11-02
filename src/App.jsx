import { useState } from "react";
import { RotateCcw, Trash2 } from "lucide-react";
import Header from "./components/Header";
import RingkasanStatistik from "./components/RingkasanStatistik";
import FormTambahTugas from "./components/FormTambahTugas";
import DaftarTugas from "./components/DaftarTugas";
import { initialTasks } from "./data/initialTasks";

export default function App() {
  const [daftarTugas, setDaftarTugas] = useState(initialTasks);

  const totalTugas = daftarTugas.length;
  const tugasSelesai = daftarTugas.filter((t) => t.status === "Selesai").length;
  const tugasBelumSelesai = totalTugas - tugasSelesai;

  const handleTambahTugas = (tugasBaru) => {
    const tugasDenganId = {
      ...tugasBaru,
      id: Date.now(),
    };
    setDaftarTugas((prevTugas) => [tugasDenganId, ...prevTugas]);
  };

  const handleToggleStatus = (id) => {
    setDaftarTugas((prevTugas) =>
      prevTugas.map((tugas) =>
        tugas.id === id
          ? {
              ...tugas,
              status: tugas.status === "Selesai" ? "Belum Selesai" : "Selesai",
            }
          : tugas
      )
    );
  };

  const handleHapusTugas = (id) => {
    setDaftarTugas((prevTugas) => prevTugas.filter((tugas) => tugas.id !== id));
  };

  const handleKosongkanDaftar = () => {
    setDaftarTugas([]);
  };

  const handleResetDataAwal = () => {
    setDaftarTugas(initialTasks);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 flex flex-col font-sans text-slate-800">
      <Header
        judul="Manajemen Tugas Kuliah"
        deskripsi="Pusat kendali dan pencatatan tugas akademik semester 7."
      />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-end gap-2 mb-6">
          <button
            type="button"
            onClick={handleResetDataAwal}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs transition-colors cursor-pointer"
            title="Muat kembali 3 tugas contoh realistis"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" strokeWidth={2} />
            <span>Muat Data Contoh</span>
          </button>
          <button
            type="button"
            onClick={handleKosongkanDaftar}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white text-slate-600 hover:bg-red-50 hover:text-red-700 hover:border-red-200 border border-slate-200 shadow-xs transition-colors cursor-pointer"
            title="Hapus semua tugas untuk menguji tampilan daftar kosong"
          >
            <Trash2 className="w-3.5 h-3.5 text-slate-400" strokeWidth={2} />
            <span>Kosongkan Daftar</span>
          </button>
        </div>

        <RingkasanStatistik
          totalTugas={totalTugas}
          tugasSelesai={tugasSelesai}
          tugasBelumSelesai={tugasBelumSelesai}
        />

        <FormTambahTugas onTambahTugas={handleTambahTugas} />

        <DaftarTugas
          daftarTugas={daftarTugas}
          onToggleStatus={handleToggleStatus}
          onHapus={handleHapusTugas}
        />
      </main>
    </div>
  );
}
