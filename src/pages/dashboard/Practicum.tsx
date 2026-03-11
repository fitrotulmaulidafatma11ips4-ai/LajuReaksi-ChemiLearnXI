import React, { useState } from "react";
import { ComicCard } from "../../components/ui/ComicCard";
import { ComicButton } from "../../components/ui/ComicButton";
import { motion, AnimatePresence } from "motion/react";
import { LuasPermukaan } from "./practicum/LuasPermukaan";
import { Konsentrasi } from "./practicum/Konsentrasi";
import { Suhu } from "./practicum/Suhu";
import { Katalis } from "./practicum/Katalis";

export const Practicum = () => {
  const [activeFactor, setActiveFactor] = useState<string | null>(null);

  const factors = [
    { id: "luas", title: "Luas Permukaan", desc: "Bongkahan vs Serbuk", color: "bg-cyan-300" },
    { id: "konsentrasi", title: "Konsentrasi", desc: "Encer vs Pekat", color: "bg-pink-300" },
    { id: "suhu", title: "Suhu", desc: "Dingin vs Panas", color: "bg-yellow-300" },
    { id: "katalis", title: "Katalis", desc: "Tanpa Katalis vs Dengan Katalis", color: "bg-green-300" },
  ];

  const renderExperiment = () => {
    switch (activeFactor) {
      case "luas":
        return <LuasPermukaan />;
      case "konsentrasi":
        return <Konsentrasi />;
      case "suhu":
        return <Suhu />;
      case "katalis":
        return <Katalis />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <ComicCard variant="white" className="flex-shrink-0">
        <h1 className="text-3xl font-black uppercase text-center mb-4">Praktikum Lab Interaktif</h1>
        <p className="text-center font-bold mb-6">Pilih faktor laju reaksi untuk memulai simulasi praktikum!</p>
        <div className="flex flex-wrap justify-center gap-4">
          {factors.map((factor) => (
            <ComicButton 
              key={factor.id} 
              variant={activeFactor === factor.id ? "warning" : "secondary"}
              onClick={() => setActiveFactor(factor.id)}
            >
              {factor.title}
            </ComicButton>
          ))}
        </div>
      </ComicCard>

      <AnimatePresence mode="wait">
        {activeFactor && (
          <motion.div
            key={activeFactor}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="flex-1"
          >
            <ComicCard variant="white" className={`h-full flex flex-col items-center overflow-y-auto ${factors.find(f => f.id === activeFactor)?.color}`}>
              <div className="bg-white p-8 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-4xl mt-4 mb-4">
                {renderExperiment()}
              </div>
            </ComicCard>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeFactor && (
        <ComicCard variant="white" className="flex-1 flex items-center justify-center bg-gray-200">
          <p className="text-2xl font-black text-gray-500 uppercase text-center">Pilih faktor di atas untuk memulai simulasi praktikum!</p>
        </ComicCard>
      )}
    </div>
  );
};
