import React, { useState } from "react";
import { ComicCard } from "../../components/ui/ComicCard";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Instagram, GraduationCap, Sparkles, Code, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

export const Profile = () => {
  const [showFunFact, setShowFunFact] = useState(false);

  return (
    <div className="h-full flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-full max-w-3xl my-auto"
      >
        <ComicCard variant="red" className="text-center p-8 md:p-12 relative overflow-hidden">
          {/* Halftone background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)', backgroundSize: '15px 15px' }}></div>
          
          <div className="relative z-10">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-5xl font-black uppercase text-white mb-8 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" 
              style={{ WebkitTextStroke: '2px black' }}
            >
              Profil Pengembang
            </motion.h1>
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-48 h-48 mx-auto bg-white border-8 border-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 overflow-hidden flex items-center justify-center cursor-pointer relative group"
            >
              <img 
                src="https://assets.kompasiana.com/items/album/2026/02/02/whatsapp-image-2026-02-02-at-22-19-00-6980d07ec925c418366a33c2.jpeg?t=o&v=740&x=416" 
                alt="Ika Ni'amah Sari" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-black text-xl">Halo! 👋</span>
              </div>
            </motion.div>
            
            <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-8">
              <h2 className="text-4xl font-black uppercase text-red-500 mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '1px black' }}>
                Ika Ni'amah Sari
              </h2>
              <p className="text-xl font-bold italic mb-4 text-gray-600">"Katalisator Pendidikan Kimia"</p>
              <p className="font-bold text-lg leading-relaxed mb-6">
                Pengembang media pembelajaran interaktif berbasis komik (ChemiLearn) untuk materi Laju Reaksi. Berdedikasi untuk membuat pembelajaran kimia menjadi lebih menyenangkan, interaktif, dan bermakna bagi siswa.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 border-2 border-black rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <GraduationCap className="w-5 h-5 text-yellow-600" />
                  <span>Pendidikan Kimia</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 border-2 border-black rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span>EdTech Developer</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 border-2 border-black rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  <span>Comic Creator</span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="mailto:ika.niamah.2203316@students.um.ac.id" 
                  className="p-3 bg-red-100 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-red-200 transition-colors"
                  title="Email"
                >
                  <Mail className="w-6 h-6 text-red-600" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="https://www.instagram.com/ikkaniaa?igsh=MWRwbnJkcXAwNDRtZg==" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-pink-100 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-200 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-6 h-6 text-pink-600" />
                </motion.a>
              </div>
            </div>

            {/* Fun Fact Toggle */}
            <div className="bg-yellow-300 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transform -rotate-1 mb-6">
              <button 
                onClick={() => setShowFunFact(!showFunFact)}
                className="w-full p-4 flex items-center justify-between font-black text-xl uppercase hover:bg-yellow-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  <span>Fakta Unik Pengembang</span>
                </div>
                {showFunFact ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </button>
              
              <AnimatePresence>
                {showFunFact && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t-4 border-black bg-white"
                  >
                    <div className="p-6 text-left">
                      <ul className="space-y-3 font-bold text-lg">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">🧪</span>
                          <span>Sangat menyukai eksperimen reaksi warna-warni di laboratorium.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">🎨</span>
                          <span>Memiliki hobi menggambar ilustrasi komik sejak di bangku sekolah.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">☕</span>
                          <span>Tidak bisa coding atau mendesain tanpa segelas kopi di sebelahnya!</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </ComicCard>
      </motion.div>
    </div>
  );
};
