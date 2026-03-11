import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ComicButton } from "../components/ui/ComicButton";
import { motivations } from "../data/motivations";

export const LandingPage = ({ onNext }: { onNext: () => void }) => {
  const [motivation, setMotivation] = useState("");

  useEffect(() => {
    const randomMotivation = motivations[Math.floor(Math.random() * motivations.length)];
    setMotivation(randomMotivation);
  }, []);

  return (
    <div className="min-h-screen bg-yellow-300 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Comic Halftone Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)', backgroundSize: '20px 20px' }}></div>
      
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative z-10 text-center"
      >
        <div className="bg-white border-8 border-black p-8 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 mb-12">
          <h1 className="text-6xl md:text-8xl font-black text-cyan-400 uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px black' }}>
            ChemiLearn
          </h1>
          <p className="text-2xl font-bold mt-4 bg-pink-300 inline-block px-4 py-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
            Laju Reaksi Edition!
          </p>
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white border-4 border-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md mx-auto mb-12 relative"
        >
          {/* Speech bubble tail */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-black"></div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-white z-10"></div>
          
          <p className="text-xl font-bold italic text-center">"{motivation}"</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ComicButton variant="primary" className="text-3xl px-12 py-6" onClick={onNext}>
            MULAI PETUALANGAN!
          </ComicButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
