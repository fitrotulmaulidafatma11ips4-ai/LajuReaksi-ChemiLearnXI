import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ComicButton } from "../components/ui/ComicButton";
import { ComicCard } from "../components/ui/ComicCard";
import { ChapterMap } from "./dashboard/ChapterMap";
import { Theory } from "./dashboard/Theory";
import { Practicum } from "./dashboard/Practicum";
import { LKPD } from "./dashboard/LKPD";
import { Evaluation } from "./dashboard/Evaluation";
import { Glossary } from "./dashboard/Glossary";
import { Profile } from "./dashboard/Profile";

export const Dashboard = ({ onHome }: { onHome: () => void }) => {
  const [activeTab, setActiveTab] = useState<string>("chaptermap");

  const tabs = [
    { id: "chaptermap", label: "Chapter Map", color: "bg-yellow-300" },
    { id: "theory", label: "Teori & Materi", color: "bg-cyan-300" },
    { id: "practicum", label: "Praktikum Lab", color: "bg-pink-300" },
    { id: "lkpd", label: "LKPD PBL", color: "bg-green-300" },
    { id: "evaluation", label: "Evaluasi & Skor", color: "bg-purple-300" },
    { id: "glossary", label: "Glosarium", color: "bg-orange-300" },
    { id: "profile", label: "Profil Pengembang", color: "bg-red-300" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "chaptermap": return <ChapterMap />;
      case "theory": return <Theory />;
      case "practicum": return <Practicum />;
      case "lkpd": return <LKPD />;
      case "evaluation": return <Evaluation />;
      case "glossary": return <Glossary />;
      case "profile": return <Profile />;
      default: return <ChapterMap />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row p-4 gap-4 relative overflow-hidden">
      {/* Comic Halftone Background Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)', backgroundSize: '20px 20px' }}></div>

      {/* Sidebar Navigation */}
      <ComicCard variant="white" className="w-full md:w-64 flex-shrink-0 flex flex-col gap-3 z-10 overflow-y-auto">
        <h2 className="text-2xl font-black uppercase text-center mb-4 border-b-4 border-black pb-2">Menu Misi</h2>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 font-bold uppercase tracking-wide border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all text-left ${
              activeTab === tab.id ? tab.color : "bg-white hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
        <div className="mt-auto pt-4 border-t-4 border-black">
          <ComicButton variant="danger" className="w-full" onClick={onHome}>
            KEMBALI KE HOME
          </ComicButton>
        </div>
      </ComicCard>

      {/* Main Content Area */}
      <div className="flex-1 z-10 relative overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
