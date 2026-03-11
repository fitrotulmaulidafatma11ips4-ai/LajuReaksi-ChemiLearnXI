import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ComicButton } from "../../../components/ui/ComicButton";
import { generatePDF } from "../../../utils/pdf";
import { TestTube, ComicText } from "../../../components/ui/LabEquipment";

export const Katalis = () => {
  const [stepA, setStepA] = useState(0);
  const [stepB, setStepB] = useState(0);
  
  const [timerA, setTimerA] = useState(0);
  const [timerB, setTimerB] = useState(0);
  
  const [dragOver, setDragOver] = useState<string | null>(null);
  const [actionText, setActionText] = useState<{A: string, B: string}>({A: "", B: ""});

  const triggerActionText = (target: 'A'|'B', text: string) => {
    setActionText(prev => ({ ...prev, [target]: text }));
    setTimeout(() => setActionText(prev => ({ ...prev, [target]: "" })), 1500);
  };

  const pdfRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    obsA: "", waktuA: "",
    obsB: "", waktuB: "",
    qA: "", qB: "", qC: "", qD: "", qE: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("practicum_katalis");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const updateForm = (key: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [key]: value };
      localStorage.setItem("practicum_katalis", JSON.stringify(newData));
      return newData;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateForm(e.target.name, e.target.value);
  };

  // Timers
  useEffect(() => {
    let intA: any;
    if (stepA === 2 && timerA < 20) {
      intA = setInterval(() => setTimerA(t => t + 1), 1000);
    } else if (stepA === 2 && timerA >= 20) {
      setStepA(3);
      updateForm("waktuA", "20");
      updateForm("obsA", "Gelembung sedikit, lambat");
    }
    return () => clearInterval(intA);
  }, [stepA, timerA]);

  useEffect(() => {
    let intB: any;
    if (stepB === 3 && timerB < 5) {
      intB = setInterval(() => setTimerB(t => t + 1), 1000);
    } else if (stepB === 3 && timerB >= 5) {
      setStepB(4);
      updateForm("waktuB", "5");
      updateForm("obsB", "Gelembung banyak, cepat");
    }
    return () => clearInterval(intB);
  }, [stepB, timerB]);

  const handleDrop = (target: 'A' | 'B', e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(null);
    const tool = e.dataTransfer.getData('tool');
    if (!tool) return;
    
    if (target === 'A') {
      if (tool === 'h2o2' && stepA === 0) { setStepA(1); triggerActionText('A', 'GLUB GLUB!'); }
      if (tool === 'bara' && stepA === 1) {
        setStepA(2);
        triggerActionText('A', 'TSSSSS...');
      }
    } else if (target === 'B') {
      if (tool === 'h2o2' && stepB === 0) { setStepB(1); triggerActionText('B', 'GLUB GLUB!'); }
      if (tool === 'ragi' && stepB === 1) { setStepB(2); triggerActionText('B', 'PLUP PLUP!'); } // Ragi acts as catalyst and starts reaction
      if (tool === 'bara' && stepB === 2) {
        setStepB(3);
        triggerActionText('B', 'FOOOSH!!');
      }
    }
  };

  const reset = () => {
    setStepA(0); setStepB(0);
    setTimerA(0); setTimerB(0);
    updateForm("waktuA", ""); updateForm("obsA", "");
    updateForm("waktuB", ""); updateForm("obsB", "");
  };

  const tools = [
    { id: 'h2o2', name: <>H<sub>2</sub>O<sub>2</sub> 5%</>, icon: '🧪', color: 'bg-blue-100' },
    { id: 'ragi', name: 'Ragi (Katalis)', icon: '🍞', color: 'bg-yellow-200' },
    { id: 'bara', name: 'Bara Api', icon: '🔥', color: 'bg-orange-200' }
  ];

  return (
    <div className="w-full" ref={pdfRef}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-black uppercase border-b-4 border-black pb-2">
          Simulasi: Katalis
        </h2>
        <ComicButton variant="success" onClick={() => generatePDF(pdfRef.current!, "Praktikum_Katalis.pdf")}>
          UNDUH PDF
        </ComicButton>
      </div>

      {/* Alat & Bahan */}
      <div className="bg-white p-4 rounded-xl border-4 border-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="font-black uppercase mb-4 text-center">Alat & Bahan (Tarik ke Tabung)</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {tools.map(t => (
            <motion.div
              key={t.id}
              draggable
              whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
              whileTap={{ scale: 0.9, rotate: 0 }}
              onDragStart={(e: any) => e.dataTransfer.setData('tool', t.id)}
              className={`flex flex-col items-center justify-center w-28 h-28 gap-2 border-4 border-black rounded-2xl font-black cursor-grab active:cursor-grabbing shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${t.color}`}
            >
              <span className="text-5xl drop-shadow-md">{t.icon}</span> 
              <span className="text-xs text-center leading-tight bg-white px-2 py-1 border-2 border-black rounded-md">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Meja Praktikum */}
      <div className="bg-slate-800 p-6 rounded-2xl border-4 border-black mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        {/* Wall */}
        <div className="absolute inset-0 bg-blue-50/50" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}></div>
        
        <h3 className="font-black uppercase mb-6 text-center text-xl relative z-10 bg-white inline-block px-4 py-1 border-2 border-black rounded-lg transform -rotate-1">Meja Praktikum</h3>
        
        {/* Table Surface */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-amber-700 border-t-8 border-amber-900 z-0"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-around items-end h-[350px] md:h-80 mb-8 gap-8 md:gap-0 pb-4">
          
          {/* Tabung A */}
          <div 
            className={`relative flex flex-col items-center transition-all duration-300 ${dragOver === 'A' ? 'scale-110 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver('A'); }}
            onDragLeave={() => setDragOver(null)}
            onDrop={(e) => handleDrop('A', e)}
          >
            {actionText.A && <ComicText text={actionText.A} color="text-yellow-400" className="-top-16" />}
            <motion.div className="relative flex flex-col items-center" animate={stepA === 2 ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}} transition={{ repeat: Infinity, duration: 0.1 }}>
              <TestTube 
                liquidColor={stepA >= 1 ? "bg-blue-200/50" : "bg-transparent"} 
                liquidLevel={stepA >= 1 ? 50 : 0} 
                bubbles={stepA >= 2}
              />
              {stepA >= 2 && stepA < 3 && (
                <motion.div 
                  className="absolute -top-10 text-3xl z-30"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity }}
                >
                  🔥
                </motion.div>
              )}
            </motion.div>
            
            <span className="font-bold mt-4 text-center bg-white px-3 py-1 border-2 border-black rounded-lg">Tabung A<br/>(H<sub>2</sub>O<sub>2</sub> Tanpa Ragi)</span>
            <div className="mt-2 font-black text-xl bg-white px-3 py-1 border-2 border-black rounded-lg">⏱️ {timerA}s</div>
          </div>

          <div className="text-4xl font-black self-center hidden md:block mb-16 bg-white px-4 py-2 rounded-full border-4 border-black transform rotate-12">VS</div>

          {/* Tabung B */}
          <div 
            className={`relative flex flex-col items-center transition-all duration-300 ${dragOver === 'B' ? 'scale-110 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver('B'); }}
            onDragLeave={() => setDragOver(null)}
            onDrop={(e) => handleDrop('B', e)}
          >
            {actionText.B && <ComicText text={actionText.B} color="text-yellow-400" className="-top-16" />}
            <motion.div className="relative flex flex-col items-center" animate={stepB === 3 ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}} transition={{ repeat: Infinity, duration: 0.1 }}>
              <TestTube 
                liquidColor={stepB >= 2 ? "bg-yellow-600/50" : (stepB >= 1 ? "bg-blue-200/50" : "bg-transparent")} 
                liquidLevel={stepB >= 1 ? 50 : 0} 
                bubbles={stepB >= 2}
              />
              {stepB >= 3 && stepB < 4 && (
                <motion.div 
                  className="absolute -top-20 text-7xl z-30 drop-shadow-[0_0_20px_rgba(255,100,0,1)]"
                  animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.5, 1.2, 1.6, 1], rotate: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 0.3 }}
                >
                  🔥
                </motion.div>
              )}
            </motion.div>
            
            <span className="font-bold mt-4 text-center bg-white px-3 py-1 border-2 border-black rounded-lg">Tabung B<br/>(H<sub>2</sub>O<sub>2</sub> + Ragi)</span>
            <div className="mt-2 font-black text-xl bg-white px-3 py-1 border-2 border-black rounded-lg">⏱️ {timerB}s</div>
          </div>
        </div>

        <div className="flex justify-center mt-8 relative z-10">
          <ComicButton onClick={reset} variant="danger">Reset Praktikum</ComicButton>
        </div>
      </div>

      {/* Tabel Pengamatan */}
      <div className="mb-8">
        <h3 className="font-black uppercase mb-4 text-xl">Tabel 5. Pengamatan Pengaruh Katalis</h3>
        <div className="overflow-x-auto border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-green-300 border-b-4 border-black">
                <th className="p-3 border-r-4 border-black font-black">Tabung</th>
                <th className="p-3 border-r-4 border-black font-black">Perlakuan</th>
                <th className="p-3 border-r-4 border-black font-black">Pengamatan Gelembung</th>
                <th className="p-3 font-black">Waktu Nyala Bara Api (sekon)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-4 border-black">
                <td className="p-3 border-r-4 border-black font-bold text-center text-xl">A</td>
                <td className="p-3 border-r-4 border-black font-bold">H<sub>2</sub>O<sub>2</sub> saja</td>
                <td className="p-3 border-r-4 border-black">
                  <input type="text" name="obsA" value={formData.obsA || ""} onChange={handleChange} className="w-full border-2 border-black rounded p-2 font-bold bg-gray-100" placeholder="Auto..." readOnly />
                </td>
                <td className="p-3">
                  <input type="text" name="waktuA" value={formData.waktuA || ""} onChange={handleChange} className="w-full border-2 border-black rounded p-2 font-bold bg-gray-100" placeholder="Auto..." readOnly />
                </td>
              </tr>
              <tr>
                <td className="p-3 border-r-4 border-black font-bold text-center text-xl">B</td>
                <td className="p-3 border-r-4 border-black font-bold">H<sub>2</sub>O<sub>2</sub> + Ragi</td>
                <td className="p-3 border-r-4 border-black">
                  <input type="text" name="obsB" value={formData.obsB || ""} onChange={handleChange} className="w-full border-2 border-black rounded p-2 font-bold bg-gray-100" placeholder="Auto..." readOnly />
                </td>
                <td className="p-3">
                  <input type="text" name="waktuB" value={formData.waktuB || ""} onChange={handleChange} className="w-full border-2 border-black rounded p-2 font-bold bg-gray-100" placeholder="Auto..." readOnly />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Pertanyaan */}
      <div className="space-y-6">
        <h3 className="font-black uppercase text-xl">Pertanyaan:</h3>
        
        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">a. Tuliskan reaksi penguraian H<sub>2</sub>O<sub>2</sub>!</p>
          <textarea name="qA" value={formData.qA} onChange={handleChange} rows={2} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-green-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">b. Bandingkan kecepatan timbulnya gelembung gas pada tabung dengan dan tanpa ragi!</p>
          <textarea name="qB" value={formData.qB} onChange={handleChange} rows={2} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-green-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">c. Apa fungsi ragi dalam percobaan ini?</p>
          <textarea name="qC" value={formData.qC} onChange={handleChange} rows={2} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-green-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">d. Jelaskan bagaimana katalis dapat mempercepat laju reaksi berdasarkan teori tumbukan (hubungkan dengan Energi Aktivasi)!</p>
          <textarea name="qD" value={formData.qD} onChange={handleChange} rows={3} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-green-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">e. Buatlah kesimpulan dari hasil percobaan ini!</p>
          <textarea name="qE" value={formData.qE} onChange={handleChange} rows={3} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-green-300 outline-none" placeholder="Jawaban..." />
        </div>
      </div>
    </div>
  );
};
