import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ComicButton } from "../../../components/ui/ComicButton";
import { generatePDF } from "../../../utils/pdf";
import { Beaker, BunsenBurner, Thermometer, ComicText } from "../../../components/ui/LabEquipment";

export const Suhu = () => {
  const [stepA, setStepA] = useState(0);
  const [stepB, setStepB] = useState(0);
  const [stepC, setStepC] = useState(0);
  
  const [timerA, setTimerA] = useState(0);
  const [timerB, setTimerB] = useState(0);
  const [timerC, setTimerC] = useState(0);
  
  const [dragOver, setDragOver] = useState<string | null>(null);
  const [actionText, setActionText] = useState<{A: string, B: string, C: string}>({A: "", B: "", C: ""});

  const triggerActionText = (target: 'A'|'B'|'C', text: string) => {
    setActionText(prev => ({ ...prev, [target]: text }));
    setTimeout(() => setActionText(prev => ({ ...prev, [target]: "" })), 1500);
  };

  const pdfRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    suhuA: "", waktuA: "",
    suhuB: "", waktuB: "",
    suhuC: "", waktuC: "",
    qA: "", qB: "", qC: "", qD: "", qE: "", qF: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("practicum_suhu");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const updateForm = (key: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [key]: value };
      localStorage.setItem("practicum_suhu", JSON.stringify(newData));
      return newData;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateForm(e.target.name, e.target.value);
  };

  // Timers
  useEffect(() => {
    let intA: any;
    if (stepA === 3 && timerA < 20) {
      intA = setInterval(() => setTimerA(t => t + 1), 1000);
    } else if (stepA === 3 && timerA >= 20) {
      setStepA(4);
      updateForm("waktuA", "20");
    }
    return () => clearInterval(intA);
  }, [stepA, timerA]);

  useEffect(() => {
    let intB: any;
    if (stepB === 4 && timerB < 10) {
      intB = setInterval(() => setTimerB(t => t + 1), 1000);
    } else if (stepB === 4 && timerB >= 10) {
      setStepB(5);
      updateForm("waktuB", "10");
    }
    return () => clearInterval(intB);
  }, [stepB, timerB]);

  useEffect(() => {
    let intC: any;
    if (stepC === 4 && timerC < 5) {
      intC = setInterval(() => setTimerC(t => t + 1), 1000);
    } else if (stepC === 4 && timerC >= 5) {
      setStepC(5);
      updateForm("waktuC", "5");
    }
    return () => clearInterval(intC);
  }, [stepC, timerC]);

  const handleDrop = (target: 'A' | 'B' | 'C', e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(null);
    const tool = e.dataTransfer.getData('tool');
    if (!tool) return;
    
    if (target === 'A') {
      if (tool === 'termometer' && stepA === 0) {
        setStepA(1);
        updateForm("suhuA", "28");
        triggerActionText('A', 'CELUP!');
      }
      if (tool === 'hcl' && stepA === 1) {
        setStepA(2);
        triggerActionText('A', 'GLUB GLUB!');
      }
    } else if (target === 'B') {
      if (tool === 'bunsen' && stepB === 0) { setStepB(1); triggerActionText('B', 'WUSHH!'); }
      if (tool === 'termometer' && stepB === 1) {
        setStepB(2);
        updateForm("suhuB", "38");
        triggerActionText('B', 'CELUP!');
      }
      if (tool === 'hcl' && stepB === 2) {
        setStepB(3);
        triggerActionText('B', 'GLUB GLUB!');
      }
    } else if (target === 'C') {
      if (tool === 'bunsen' && stepC === 0) { setStepC(1); triggerActionText('C', 'WUSHH!'); }
      if (tool === 'termometer' && stepC === 1) {
        setStepC(2);
        updateForm("suhuC", "48");
        triggerActionText('C', 'CELUP!');
      }
      if (tool === 'hcl' && stepC === 2) {
        setStepC(3);
        triggerActionText('C', 'GLUB GLUB!');
      }
    }
  };

  const startAllReactions = () => {
    if (stepA === 2) { setStepA(3); triggerActionText('A', 'SZZZZ!'); }
    if (stepB === 3) { setStepB(4); triggerActionText('B', 'SZZZZ!'); }
    if (stepC === 3) { setStepC(4); triggerActionText('C', 'SZZZZ!'); }
  };

  const reset = () => {
    setStepA(0); setStepB(0); setStepC(0);
    setTimerA(0); setTimerB(0); setTimerC(0);
    updateForm("waktuA", ""); updateForm("suhuA", "");
    updateForm("waktuB", ""); updateForm("suhuB", "");
    updateForm("waktuC", ""); updateForm("suhuC", "");
  };

  const tools = [
    { id: 'bunsen', name: 'Pemanas Spirtus', icon: '🔥', color: 'bg-orange-200' },
    { id: 'termometer', name: 'Termometer', icon: '🌡️', color: 'bg-gray-200' },
    { id: 'hcl', name: 'HCl 1M', icon: '🧪', color: 'bg-blue-200' }
  ];

  return (
    <div className="w-full" ref={pdfRef}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-black uppercase border-b-4 border-black pb-2">
          Simulasi: Suhu
        </h2>
        <ComicButton variant="success" onClick={() => generatePDF(pdfRef.current!, "Praktikum_Suhu.pdf")}>
          UNDUH PDF
        </ComicButton>
      </div>

      {/* Prosedur Kerja */}
      <div className="bg-white p-4 rounded-xl border-4 border-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="font-black uppercase mb-2">Prosedur Kerja</h3>
        <ol className="list-decimal list-inside font-bold space-y-1">
          <li>Tarik termometer ke Gelas A untuk mengukur suhu awal larutan Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>.</li>
          <li>Tarik pemanas spirtus ke Gelas B dan C untuk memanaskan larutan, lalu tarik termometer untuk mengukur suhunya.</li>
          <li>Tarik botol larutan HCl ke masing-masing gelas kimia.</li>
          <li>Klik tombol <span className="bg-yellow-300 px-2 py-0.5 border-2 border-black rounded text-sm">MULAI REAKSI</span> untuk memulai reaksi secara bersamaan.</li>
          <li>Amati dan catat waktu yang diperlukan hingga tanda silang (X) di dasar gelas tidak terlihat.</li>
        </ol>
      </div>

      {/* Alat & Bahan */}
      <div className="bg-white p-4 rounded-xl border-4 border-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="font-black uppercase mb-4 text-center">Alat & Bahan (Tarik ke Gelas)</h3>
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
          
          {/* Gelas A */}
          <div 
            className={`relative flex flex-col items-center transition-all duration-300 ${dragOver === 'A' ? 'scale-110 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver('A'); }}
            onDragLeave={() => setDragOver(null)}
            onDrop={(e) => handleDrop('A', e)}
          >
            {actionText.A && <ComicText text={actionText.A} color="text-yellow-400" className="-top-16" />}
            {stepA >= 1 && (
              <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute -top-12 z-20 bg-white px-2 py-1 border-2 border-black rounded font-bold text-sm">
                28°C
              </motion.div>
            )}
            
            <motion.div className="relative flex flex-col items-center" animate={stepA === 3 ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}} transition={{ repeat: Infinity, duration: 0.1 }}>
              {stepA >= 1 && (
                <div className="absolute -top-16 z-30 right-0">
                  <Thermometer temperature={28} />
                </div>
              )}
              <Beaker 
                liquidColor={stepA >= 2 ? "bg-yellow-200/80" : (stepA >= 1 ? "bg-blue-100/80" : "bg-transparent")} 
                liquidLevel={stepA >= 2 ? 60 : (stepA >= 1 ? 40 : 0)} 
                bubbles={stepA === 3}
                crossVisible={stepA >= 1}
                crossOpacity={stepA >= 3 ? Math.max(0, 1 - timerA/20) : 1}
              />
            </motion.div>
            
            <span className="font-bold mt-4 text-center bg-white px-3 py-1 border-2 border-black rounded-lg">Gelas A<br/>(Suhu Ruang)</span>
            <div className="mt-2 font-black text-xl bg-white px-3 py-1 border-2 border-black rounded-lg">⏱️ {timerA}s</div>
          </div>

          {/* Gelas B */}
          <div 
            className={`relative flex flex-col items-center transition-all duration-300 ${dragOver === 'B' ? 'scale-110 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver('B'); }}
            onDragLeave={() => setDragOver(null)}
            onDrop={(e) => handleDrop('B', e)}
          >
            {actionText.B && <ComicText text={actionText.B} color="text-yellow-400" className="-top-16" />}
            {stepB >= 2 && (
              <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute -top-12 z-20 bg-white px-2 py-1 border-2 border-black rounded font-bold text-sm">
                38°C
              </motion.div>
            )}
            
            <motion.div className="relative flex flex-col items-center" animate={stepB === 4 ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}} transition={{ repeat: Infinity, duration: 0.1 }}>
              {stepB >= 2 && (
                <div className="absolute -top-16 z-30 right-0">
                  <Thermometer temperature={38} />
                </div>
              )}
              <Beaker 
                liquidColor={stepB >= 3 ? "bg-yellow-200/80" : (stepB >= 1 ? "bg-blue-100/80" : "bg-transparent")} 
                liquidLevel={stepB >= 3 ? 60 : (stepB >= 1 ? 40 : 0)} 
                bubbles={stepB === 4}
                crossVisible={stepB >= 1}
                crossOpacity={stepB >= 4 ? Math.max(0, 1 - timerB/10) : 1}
              />
              {stepB >= 1 && stepB < 5 && (
                <div className="absolute -bottom-16">
                  <BunsenBurner isOn={true} />
                </div>
              )}
            </motion.div>
            
            <span className="font-bold mt-16 text-center bg-white px-3 py-1 border-2 border-black rounded-lg">Gelas B<br/>(Dipanaskan)</span>
            <div className="mt-2 font-black text-xl bg-white px-3 py-1 border-2 border-black rounded-lg">⏱️ {timerB}s</div>
          </div>

          {/* Gelas C */}
          <div 
            className={`relative flex flex-col items-center transition-all duration-300 ${dragOver === 'C' ? 'scale-110 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver('C'); }}
            onDragLeave={() => setDragOver(null)}
            onDrop={(e) => handleDrop('C', e)}
          >
            {actionText.C && <ComicText text={actionText.C} color="text-yellow-400" className="-top-16" />}
            {stepC >= 2 && (
              <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute -top-12 z-20 bg-white px-2 py-1 border-2 border-black rounded font-bold text-sm">
                48°C
              </motion.div>
            )}
            
            <motion.div className="relative flex flex-col items-center" animate={stepC === 4 ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}} transition={{ repeat: Infinity, duration: 0.1 }}>
              {stepC >= 2 && (
                <div className="absolute -top-16 z-30 right-0">
                  <Thermometer temperature={48} />
                </div>
              )}
              <Beaker 
                liquidColor={stepC >= 3 ? "bg-yellow-200/80" : (stepC >= 1 ? "bg-blue-100/80" : "bg-transparent")} 
                liquidLevel={stepC >= 3 ? 60 : (stepC >= 1 ? 40 : 0)} 
                bubbles={stepC === 4}
                crossVisible={stepC >= 1}
                crossOpacity={stepC >= 4 ? Math.max(0, 1 - timerC/5) : 1}
              />
              {stepC >= 1 && stepC < 5 && (
                <div className="absolute -bottom-16">
                  <BunsenBurner isOn={true} />
                </div>
              )}
            </motion.div>
            
            <span className="font-bold mt-16 text-center bg-white px-3 py-1 border-2 border-black rounded-lg">Gelas C<br/>(Lebih Panas)</span>
            <div className="mt-2 font-black text-xl bg-white px-3 py-1 border-2 border-black rounded-lg">⏱️ {timerC}s</div>
          </div>

        </div>

        <div className="flex justify-center mt-8 relative z-10 gap-4">
          <ComicButton onClick={startAllReactions} variant="primary">Mulai Reaksi</ComicButton>
          <ComicButton onClick={reset} variant="danger">Reset Praktikum</ComicButton>
        </div>
      </div>

      {/* Tabel Pengamatan */}
      <div className="mb-8">
        <h3 className="font-black uppercase mb-4 text-xl">Tabel 4. Pengamatan Pengaruh Suhu</h3>
        <div className="overflow-x-auto border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-yellow-300 border-b-4 border-black">
                <th className="p-3 border-r-4 border-black font-black">Percobaan</th>
                <th className="p-3 border-r-4 border-black font-black">Konsentrasi HCl 10mL</th>
                <th className="p-3 border-r-4 border-black font-black">Volum Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> (0,2M)</th>
                <th className="p-3 border-r-4 border-black font-black">Suhu (°C)</th>
                <th className="p-3 font-black">Waktu hingga tanda silang tidak terlihat (detik)</th>
              </tr>
            </thead>
            <tbody>
              {['A', 'B', 'C'].map((label) => (
                <tr key={label} className="border-b-4 border-black last:border-b-0">
                  <td className="p-3 border-r-4 border-black font-bold text-center text-xl">{label}</td>
                  <td className="p-3 border-r-4 border-black font-bold text-center">1 M</td>
                  <td className="p-3 border-r-4 border-black font-bold text-center">20 mL</td>
                  <td className="p-3 border-r-4 border-black">
                    <input type="text" name={`suhu${label}`} value={(formData as any)[`suhu${label}`]} onChange={handleChange} className="w-full border-2 border-black rounded p-2 font-bold bg-gray-100" placeholder="Auto..." readOnly />
                  </td>
                  <td className="p-3">
                    <input type="text" name={`waktu${label}`} value={(formData as any)[`waktu${label}`] || ""} onChange={handleChange} className="w-full border-2 border-black rounded p-2 font-bold bg-gray-100" placeholder="Auto..." readOnly />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pertanyaan */}
      <div className="space-y-6">
        <h3 className="font-black uppercase text-xl">Pertanyaan:</h3>
        
        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">a. Tuliskan reaksi yang terjadi dari percobaan tersebut di atas!</p>
          <textarea name="qA" value={formData.qA} onChange={handleChange} rows={2} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-yellow-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">b. Buatlah grafik hubungan antara laju (v ~ 1/t) dengan suhu! (Laju pada sumbu Y dan Suhu pada sumbu X)</p>
          <p className="text-sm italic mb-2">*Deskripsikan bentuk grafik di bawah ini, atau gambar secara manual setelah dicetak.</p>
          <textarea name="qB" value={formData.qB} onChange={handleChange} rows={3} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-yellow-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">c. Pada suhu yang berbeda, apakah waktu yang dibutuhkan sampai tanda silang tidak terlihat juga berbeda?</p>
          <textarea name="qC" value={formData.qC} onChange={handleChange} rows={2} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-yellow-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">d. Bagaimanakah pengaruh suhu terhadap laju reaksi antara larutan natrium tiosulfat dengan larutan asam klorida? Jelaskan sebabnya!</p>
          <textarea name="qD" value={formData.qD} onChange={handleChange} rows={3} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-yellow-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">e. Dengan menggunakan teori tumbukan, jelaskan mengapa pada suhu yang lebih tinggi reaksi berlangsung lebih cepat!</p>
          <textarea name="qE" value={formData.qE} onChange={handleChange} rows={3} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-yellow-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">f. Tuliskan kesimpulanmu tentang pengaruh suhu terhadap laju reaksi!</p>
          <textarea name="qF" value={formData.qF} onChange={handleChange} rows={3} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-yellow-300 outline-none" placeholder="Jawaban..." />
        </div>
      </div>
    </div>
  );
};
