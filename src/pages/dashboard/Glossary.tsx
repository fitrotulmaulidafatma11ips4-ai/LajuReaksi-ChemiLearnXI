import React, { useState, useMemo } from "react";
import { ComicCard } from "../../components/ui/ComicCard";
import { glossary } from "../../data/glossary";
import { motion, AnimatePresence } from "motion/react";
import { Search, Volume2, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

export const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredGlossary = useMemo(() => {
    return glossary.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLetter = activeLetter ? item.term.toUpperCase().startsWith(activeLetter) : true;
      return matchesSearch && matchesLetter;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm, activeLetter]);

  const speak = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Browser Anda tidak mendukung fitur suara.");
    }
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <ComicCard variant="white" className="flex-shrink-0">
        <div className="flex items-center justify-center gap-4 mb-6">
          <BookOpen className="w-10 h-10 text-orange-500" />
          <h1 className="text-4xl font-black uppercase text-center drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '1px black', color: 'white' }}>
            Kamus Kimia
          </h1>
        </div>
        
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Cari istilah kimia di sini..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setActiveLetter(null); // Reset letter filter on search
            }}
            className="w-full pl-12 border-4 border-black rounded-xl p-4 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-orange-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          />
        </div>

        {/* Alphabet Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveLetter(null)}
            className={`px-3 py-1 font-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-110 ${activeLetter === null ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}
          >
            SEMUA
          </button>
          {alphabet.map(letter => (
            <button
              key={letter}
              onClick={() => {
                setActiveLetter(activeLetter === letter ? null : letter);
                setSearchTerm(""); // Reset search on letter filter
              }}
              className={`w-10 h-10 flex items-center justify-center font-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-110 ${activeLetter === letter ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}
            >
              {letter}
            </button>
          ))}
        </div>
      </ComicCard>

      <div className="flex-1 overflow-y-auto bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredGlossary.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <motion.div
                  key={item.term}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => toggleExpand(index)}
                  className={`border-4 border-black p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-colors ${isExpanded ? 'bg-orange-200' : 'bg-orange-50 hover:bg-orange-100'}`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-black uppercase mb-2 text-orange-600 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '1px black' }}>
                      {item.term}
                    </h3>
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => speak(e, `${item.term}. ${item.definition}`)}
                        className="p-2 bg-white border-2 border-black rounded-full hover:bg-yellow-300 transition-colors"
                        title="Dengarkan"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                      <div className="p-2 bg-white border-2 border-black rounded-full">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-white border-2 border-black rounded-lg font-bold text-lg leading-relaxed">
                          {item.definition}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {filteredGlossary.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="col-span-full flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-3xl font-black text-gray-400 uppercase drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '1px black', color: 'white' }}>
                Istilah tidak ditemukan!
              </p>
              <p className="font-bold text-gray-500 mt-2">Coba gunakan kata kunci lain atau pilih huruf yang berbeda.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
