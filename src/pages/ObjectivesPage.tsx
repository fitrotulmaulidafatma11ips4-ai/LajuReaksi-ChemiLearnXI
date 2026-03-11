import React, { useState } from "react";
import { motion } from "motion/react";
import { ComicButton } from "../components/ui/ComicButton";
import { ComicCard } from "../components/ui/ComicCard";

export const ObjectivesPage = ({ onHome, onNext }: { onHome: () => void, onNext: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="min-h-screen bg-cyan-300 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Comic Halftone Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)', backgroundSize: '20px 20px' }}></div>

      <div className="z-10 w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-5xl font-black uppercase mb-8 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px black' }}>
          Misi Utama Kita!
        </h1>

        {/* Flip Card */}
        <div 
          className="w-full max-w-md h-80 perspective-1000 mb-8 cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="w-full h-full relative preserve-3d"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Front */}
            <ComicCard variant="yellow" className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-black mb-4 uppercase">Tujuan Pembelajaran</h2>
              <p className="text-xl font-bold italic">(Klik untuk membalik kartu!)</p>
            </ComicCard>

            {/* Back */}
            <ComicCard variant="white" className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center text-center" style={{ transform: 'rotateY(180deg)' }}>
              <ul className="text-lg font-bold text-left list-disc pl-6 space-y-2">
                <li>Memahami konsep laju reaksi dan teori tumbukan.</li>
                <li>Menganalisis faktor-faktor yang mempengaruhi laju reaksi.</li>
                <li>Menentukan persamaan laju reaksi dan orde reaksi.</li>
                <li>Menyelesaikan masalah kontekstual (SSI) terkait laju reaksi.</li>
              </ul>
            </ComicCard>
          </motion.div>
        </div>

        {/* Instructions */}
        <ComicCard variant="pink" className="w-full max-w-2xl mb-8 text-center">
          <h3 className="text-2xl font-black uppercase mb-4">Petunjuk Penggunaan</h3>
          <p className="text-lg font-bold">
            Gunakan tombol navigasi di bawah untuk berpindah halaman. Di dalam dashboard, kamu bisa memilih misi mana yang ingin kamu selesaikan terlebih dahulu. Jangan lupa simpan LKPD-mu!
          </p>
        </ComicCard>

        {/* Navigation */}
        <div className="flex space-x-4">
          <ComicButton variant="secondary" onClick={onHome}>
            KEMBALI KE HOME
          </ComicButton>
          <ComicButton variant="primary" onClick={onNext}>
            LANJUT KE DASHBOARD!
          </ComicButton>
        </div>
      </div>
    </div>
  );
};
