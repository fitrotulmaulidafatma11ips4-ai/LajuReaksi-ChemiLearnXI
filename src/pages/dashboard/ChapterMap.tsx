import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const definitions: Record<string, React.ReactNode> = {
  "LAJU REAKSI": "Perubahan konsentrasi reaktan atau produk terhadap waktu (M/s). (Sumber: Raymond Chang, Kimia Dasar)",
  "Konsep Laju Reaksi": "Dasar untuk mempelajari seberapa cepat suatu reaksi kimia berlangsung dan faktor-faktor yang mempengaruhinya. (Sumber: Raymond Chang, Kimia Dasar)",
  "Pengertian Laju Reaksi": "Besaran yang menyatakan seberapa cepat reaktan berkurang atau produk bertambah seiring berjalannya waktu. (Sumber: Raymond Chang, Kimia Dasar)",
  "Hukum Laju Reaksi": "Persamaan yang menghubungkan laju reaksi dengan konstanta laju dan konsentrasi reaktan. (Sumber: Raymond Chang, Kimia Dasar)",
  "Persamaan Laju Reaksi": <span>Ekspresi matematika yang menunjukkan hubungan antara laju reaksi dengan konsentrasi reaktan, misalnya v = k[A]<sup>x</sup>[B]<sup>y</sup>. (Sumber: Raymond Chang, Kimia Dasar)</span>,
  "Konstanta Laju Reaksi": "Konstanta kesebandingan (k) dalam hukum laju yang nilainya bergantung pada suhu dan keberadaan katalis. (Sumber: Raymond Chang, Kimia Dasar)",
  "Orde Reaksi 0": "Reaksi di mana laju reaksinya tidak bergantung pada konsentrasi reaktan. (Sumber: Raymond Chang, Kimia Dasar)",
  "Orde Reaksi 1": "Reaksi di mana laju reaksinya berbanding lurus dengan konsentrasi satu reaktan. (Sumber: Raymond Chang, Kimia Dasar)",
  "Orde Reaksi 2": "Reaksi di mana laju reaksinya berbanding lurus dengan kuadrat konsentrasi satu reaktan atau hasil kali konsentrasi dua reaktan. (Sumber: Raymond Chang, Kimia Dasar)",
  "Grafik Orde": "Representasi visual (plot) hubungan antara konsentrasi atau laju terhadap waktu untuk menentukan orde suatu reaksi. (Sumber: Raymond Chang, Kimia Dasar)",
  "Teori Tumbukan": "Teori yang menyatakan bahwa reaksi kimia terjadi akibat tumbukan antar molekul reaktan yang memiliki energi minimum tertentu dan orientasi yang tepat. (Sumber: Raymond Chang, Kimia Dasar)",
  "Tumbukan Efektif": "Tumbukan antar molekul yang berhasil menghasilkan produk reaksi karena memenuhi syarat energi aktivasi dan orientasi molekul yang tepat. (Sumber: Raymond Chang, Kimia Dasar)",
  "Energi Aktivasi": "Energi minimum yang diperlukan untuk memulai suatu reaksi kimia. (Sumber: Raymond Chang, Kimia Dasar)",
  "Faktor Yang Mempengaruhi Laju Reaksi": "Variabel-variabel yang dapat mengubah kecepatan reaksi, meliputi konsentrasi, suhu, luas permukaan, dan keberadaan katalis. (Sumber: Raymond Chang, Kimia Dasar)",
  "Konsentrasi": "Jumlah partikel zat terlarut dalam suatu volume tertentu. Peningkatan konsentrasi meningkatkan frekuensi tumbukan antar molekul. (Sumber: Raymond Chang, Kimia Dasar)",
  "Suhu": "Ukuran energi kinetik rata-rata molekul. Peningkatan suhu meningkatkan energi kinetik sehingga lebih banyak molekul yang memiliki energi melampaui energi aktivasi. (Sumber: Raymond Chang, Kimia Dasar)",
  "Luas Permukaan": "Bidang sentuh antar zat yang bereaksi (terutama padatan). Semakin besar luas permukaan, semakin banyak area untuk terjadinya tumbukan. (Sumber: Raymond Chang, Kimia Dasar)",
  "Katalis": "Zat yang mempercepat laju reaksi dengan menyediakan jalur alternatif yang memiliki energi aktivasi lebih rendah, tanpa ikut terkonsumsi secara permanen. (Sumber: Raymond Chang, Kimia Dasar)",
  "Katalis Homogen": "Katalis yang berada dalam fasa yang sama dengan molekul reaktan (misalnya, sama-sama cair atau gas). (Sumber: Raymond Chang, Kimia Dasar)",
  "Katalis Heterogen": "Katalis yang berada dalam fasa yang berbeda dengan molekul reaktan (misalnya, katalis padat dalam campuran reaksi gas atau cair). (Sumber: Raymond Chang, Kimia Dasar)"
};

export const ChapterMap = () => {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  return (
    <div className="w-full h-full bg-[#1e3a8a] overflow-auto p-8 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
      
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
      </div>

      <div className="min-w-[1200px] flex flex-col items-center pb-20">
        
        {/* Header */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative mb-4 mt-4"
        >
          <div className="bg-[#3b82f6] border-4 border-black px-16 py-4 transform -skew-x-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-5xl font-black text-white italic tracking-wider transform skew-x-12" style={{ textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
              CHAPTER MAP
            </h1>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#111827] border-2 border-black rounded-full px-8 py-2 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20"
        >
          <span className="text-yellow-400 font-bold tracking-widest text-sm">PETA INTELIJEN MATERI 🕵️</span>
        </motion.div>

        {/* Map Container */}
        <div className="flex flex-col items-center relative w-full">
          
          {/* Root */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => setSelectedConcept("LAJU REAKSI")}
            className="bg-[#fbbf24] border-4 border-black px-12 py-5 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20 mb-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-black italic">LAJU REAKSI</h2>
          </motion.div>

          {/* Main Vertical Line */}
          <motion.div initial={{ height: 0 }} animate={{ height: 48 }} transition={{ delay: 0.6, duration: 0.3 }} className="w-0.5 bg-gray-300"></motion.div>

          {/* Main Horizontal Line */}
          <div className="w-[80%] relative">
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.9, duration: 0.5 }} className="h-0.5 bg-gray-300 mx-auto"></motion.div>
            
            {/* Drops */}
            <motion.div initial={{ height: 0 }} animate={{ height: 48 }} transition={{ delay: 1.4, duration: 0.3 }} className="absolute left-0 top-0 w-0.5 bg-gray-300"></motion.div>
            <motion.div initial={{ height: 0 }} animate={{ height: 48 }} transition={{ delay: 1.4, duration: 0.3 }} className="absolute left-1/2 top-0 w-0.5 bg-gray-300 -translate-x-1/2"></motion.div>
            <motion.div initial={{ height: 0 }} animate={{ height: 48 }} transition={{ delay: 1.4, duration: 0.3 }} className="absolute right-0 top-0 w-0.5 bg-gray-300"></motion.div>
          </div>

          {/* Level 1 Container */}
          <div className="flex justify-between w-[95%] mt-12 relative">
            
            {/* Branch 1: Konsep Laju Reaksi */}
            <div className="flex flex-col items-center w-[38%] px-2">
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7 }} 
                onClick={() => setSelectedConcept("Konsep Laju Reaksi")}
                className="bg-[#10b981] border-4 border-black px-6 py-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 mb-0 w-[80%] flex justify-center cursor-pointer hover:scale-105 transition-transform"
              >
                <h3 className="font-bold text-black text-center">Konsep Laju Reaksi</h3>
              </motion.div>
              
              <div className="w-0.5 h-8 bg-[#10b981]"></div>
              
              <div className="w-[90%] h-0.5 bg-[#10b981] relative">
                 <div className="absolute left-0 top-0 w-0.5 h-8 bg-[#10b981]"></div>
                 <div className="absolute left-1/2 top-0 w-0.5 h-8 bg-[#10b981] -translate-x-1/2"></div>
                 <div className="absolute right-0 top-0 w-0.5 h-8 bg-[#10b981]"></div>
              </div>

              <div className="flex justify-between w-full mt-8 items-start gap-3">
                {/* Pengertian */}
                <div className="w-[30%] flex justify-center">
                  <div 
                    onClick={() => setSelectedConcept("Pengertian Laju Reaksi")}
                    className="bg-white border-4 border-[#10b981] rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center h-56 w-full cursor-pointer hover:scale-105 transition-transform"
                  >
                    <span className="font-bold text-center leading-tight text-sm">Pengertian<br/>Laju Reaksi</span>
                  </div>
                </div>
                
                {/* Middle Stack */}
                <div className="w-[35%] flex flex-col relative">
                  <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-[#10b981]"></div>
                  
                  {["Hukum Laju Reaksi", "Persamaan Laju Reaksi", "Konstanta Laju Reaksi"].map((text, i) => (
                    <div key={i} className="relative mb-5 last:mb-0 pl-4">
                      <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10b981] -translate-y-1/2"></div>
                      <div 
                        onClick={() => setSelectedConcept(text)}
                        className="bg-white border-4 border-black rounded-xl p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center h-12 cursor-pointer hover:scale-105 transition-transform"
                      >
                        <span className="font-bold text-[11px] text-center block leading-tight">{text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Stack */}
                <div className="w-[35%] flex flex-col relative">
                  <div className="absolute left-0 top-5 bottom-5 w-0.5 bg-[#10b981]"></div>
                  
                  {["Hukum Laju Reaksi", "Orde Reaksi 0", "Orde Reaksi 1", "Orde Reaksi 2", "Grafik Orde"].map((text, i) => (
                    <div key={i} className="relative mb-3 last:mb-0 pl-4">
                      <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10b981] -translate-y-1/2"></div>
                      <div 
                        onClick={() => setSelectedConcept(text)}
                        className="bg-white border-4 border-black rounded-xl p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center h-10 cursor-pointer hover:scale-105 transition-transform"
                      >
                        <span className="font-bold text-[11px] text-center block leading-tight">{text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Branch 2: Teori Tumbukan */}
            <div className="flex flex-col items-center w-[24%] px-2">
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7 }} 
                onClick={() => setSelectedConcept("Teori Tumbukan")}
                className="bg-[#a855f7] border-4 border-black px-6 py-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-white mb-0 w-[90%] flex justify-center cursor-pointer hover:scale-105 transition-transform"
              >
                <h3 className="font-bold text-center">Teori Tumbukan</h3>
              </motion.div>
              
              <div className="w-0.5 h-8 bg-[#a855f7]"></div>
              
              <div className="w-[70%] h-0.5 bg-[#a855f7] relative">
                 <div className="absolute left-0 top-0 w-0.5 h-8 bg-[#a855f7]"></div>
                 <div className="absolute right-0 top-0 w-0.5 h-8 bg-[#a855f7]"></div>
              </div>

              <div className="flex justify-between w-[80%] mt-8 gap-4">
                <div className="w-1/2 flex justify-center">
                  <div 
                    onClick={() => setSelectedConcept("Tumbukan Efektif")}
                    className="bg-white border-4 border-[#a855f7] rounded-xl p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full flex items-center justify-center h-16 cursor-pointer hover:scale-105 transition-transform"
                  >
                    <span className="font-bold text-[11px] text-center">Tumbukan Efektif</span>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div 
                    onClick={() => setSelectedConcept("Energi Aktivasi")}
                    className="bg-white border-4 border-[#a855f7] rounded-xl p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full flex items-center justify-center h-16 cursor-pointer hover:scale-105 transition-transform"
                  >
                    <span className="font-bold text-[11px] text-center">Energi Aktivasi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch 3: Faktor Yang Mempengaruhi */}
            <div className="flex flex-col items-center w-[38%] px-2">
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7 }} 
                onClick={() => setSelectedConcept("Faktor Yang Mempengaruhi Laju Reaksi")}
                className="bg-[#f97316] border-4 border-black px-6 py-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-white mb-0 w-[90%] flex justify-center cursor-pointer hover:scale-105 transition-transform"
              >
                <h3 className="font-bold text-center">Faktor Yang Mempengaruhi Laju Reaksi</h3>
              </motion.div>
              
              <div className="w-0.5 h-8 bg-[#9a3412]"></div>
              
              <div className="w-[90%] h-0.5 bg-[#9a3412] relative">
                 <div className="absolute left-0 top-0 w-0.5 h-8 bg-[#9a3412]"></div>
                 <div className="absolute left-[33%] top-0 w-0.5 h-8 bg-[#9a3412]"></div>
                 <div className="absolute left-[66%] top-0 w-0.5 h-8 bg-[#9a3412]"></div>
                 <div className="absolute right-0 top-0 w-0.5 h-8 bg-[#9a3412]"></div>
              </div>

              <div className="flex justify-between w-full mt-8 items-start gap-2">
                {["Konsentrasi", "Suhu", "Luas Permukaan"].map((text, i) => (
                  <div key={i} className="w-[23%] flex justify-center">
                    <div 
                      onClick={() => setSelectedConcept(text)}
                      className="bg-white border-4 border-[#ea580c] rounded-xl p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center h-40 w-full cursor-pointer hover:scale-105 transition-transform"
                    >
                      <span className="font-bold text-sm text-center whitespace-pre-line">{text === "Luas Permukaan" ? "Luas\nPermukaan" : text}</span>
                    </div>
                  </div>
                ))}
                
                {/* Katalis Stack */}
                <div className="w-[31%] flex flex-col relative">
                  <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-[#9a3412]"></div>
                  
                  {["Katalis", "Katalis Homogen", "Katalis Heterogen"].map((text, i) => (
                    <div key={i} className="relative mb-5 last:mb-0 pl-3">
                      <div className="absolute left-0 top-1/2 w-3 h-0.5 bg-[#9a3412] -translate-y-1/2"></div>
                      <div 
                        onClick={() => setSelectedConcept(text)}
                        className="bg-white border-4 border-black rounded-xl p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center h-10 cursor-pointer hover:scale-105 transition-transform"
                      >
                        <span className="font-bold text-[11px] text-center block leading-tight">{text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Modal Definition */}
      <AnimatePresence>
        {selectedConcept && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedConcept(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white border-4 border-black rounded-2xl p-6 max-w-lg w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black uppercase text-blue-600 border-b-4 border-black pb-2 inline-block">{selectedConcept}</h3>
                <button 
                  onClick={() => setSelectedConcept(null)}
                  className="w-8 h-8 flex items-center justify-center bg-red-500 text-white font-black border-2 border-black rounded-full hover:bg-red-600 transition-colors"
                >
                  X
                </button>
              </div>
              <p className="font-bold text-lg leading-relaxed text-gray-800">
                {definitions[selectedConcept] || "Definisi tidak ditemukan."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
