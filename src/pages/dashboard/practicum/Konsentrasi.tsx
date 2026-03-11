import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ComicButton } from "../../../components/ui/ComicButton";
import { generatePDF } from "../../../utils/pdf";
import { Erlenmeyer, Balloon, ComicText } from "../../../components/ui/LabEquipment";

export const Konsentrasi = () => {
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
    waktuA: "", lajuA: "", obsA: "",
    waktuB: "", lajuB: "", obsB: "",
    waktuC: "", lajuC: "", obsC: "",
    qA: "", qB: "", qC: "", qD: "", qE: "", qF: "", qG: "", qH: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("practicum_konsentrasi");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const updateForm = (key: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [key]: value };
      localStorage.setItem("practicum_konsentrasi", JSON.stringify(newData));
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
      updateForm("lajuA", (1/20).toFixed(2));
    }
    return () => clearInterval(intA);
  }, [stepA, timerA]);

  useEffect(() => {
    let intB: any;
    if (stepB === 3 && timerB < 10) {
      intB = setInterval(() => setTimerB(t => t + 1), 1000);
    } else if (stepB === 3 && timerB >= 10) {
      setStepB(4);
      updateForm("waktuB", "10");
      updateForm("lajuB", (1/10).toFixed(2));
    }
    return () => clearInterval(intB);
  }, [stepB, timerB]);

  useEffect(() => {
    let intC: any;
    if (stepC === 3 && timerC < 5) {
      intC = setInterval(() => setTimerC(t => t + 1), 1000);
    } else if (stepC === 3 && timerC >= 5) {
      setStepC(4);
      updateForm("waktuC", "5");
      updateForm("lajuC", (1/5).toFixed(2));
    }
    return () => clearInterval(intC);
  }, [stepC, timerC]);

  const handleDrop = (target: 'A' | 'B' | 'C', e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(null);
    const tool = e.dataTransfer.getData('tool');
    if (!tool) return;
    
    if (target === 'A') {
      if (tool === 'ch3cooh_01' && stepA === 0) { setStepA(1); triggerActionText('A', 'GLUB GLUB!'); }
      if (tool === 'balon' && stepA === 1) { setStepA(2); triggerActionText('A', 'PLOP!'); }
    } else if (target === 'B') {
      if (tool === 'ch3cooh_05' && stepB === 0) { setStepB(1); triggerActionText('B', 'GLUB GLUB!'); }
      if (tool === 'balon' && stepB === 1) { setStepB(2); triggerActionText('B', 'PLOP!'); }
    } else if (target === 'C') {
      if (tool === 'ch3cooh_10' && stepC === 0) { setStepC(1); triggerActionText('C', 'GLUB GLUB!'); }
      if (tool === 'balon' && stepC === 1) { setStepC(2); triggerActionText('C', 'PLOP!'); }
    }
  };

  const startAllReactions = () => {
    if (stepA === 2) { setStepA(3); triggerActionText('A', 'PSSSHH!'); }
    if (stepB === 2) { setStepB(3); triggerActionText('B', 'PSSSHH!'); }
    if (stepC === 2) { setStepC(3); triggerActionText('C', 'PSSSHH!'); }
  };

  const reset = () => {
    setStepA(0); setStepB(0); setStepC(0);
    setTimerA(0); setTimerB(0); setTimerC(0);
    updateForm("waktuA", ""); updateForm("lajuA", "");
    updateForm("waktuB", ""); updateForm("lajuB", "");
    updateForm("waktuC", ""); updateForm("lajuC", "");
  };

  const tools = [
    { id: 'ch3cooh_01', name: <>CH<sub>3</sub>COOH 0.1M</>, icon: '🧪', color: 'bg-blue-100' },
    { id: 'ch3cooh_05', name: <>CH<sub>3</sub>COOH 0.5M</>, icon: '🧪', color: 'bg-blue-300' },
    { id: 'ch3cooh_10', name: <>CH<sub>3</sub>COOH 1.0M</>, icon: '🧪', color: 'bg-blue-500' },
    { id: 'balon', name: <>Balon (NaHCO<sub>3</sub>)</>, icon: '🎈', color: 'bg-pink-200' }
  ];

  return (
    <div className="w-full" ref={pdfRef}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-black uppercase border-b-4 border-black pb-2">
          Simulasi: Konsentrasi
        </h2>
        <ComicButton variant="success" onClick={() => generatePDF(pdfRef.current!, "Praktikum_Konsentrasi.pdf")}>
          UNDUH PDF
        </ComicButton>
      </div>

      {/* Prosedur Kerja */}
      <div className="bg-white p-4 rounded-xl border-4 border-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="font-black uppercase mb-2">Prosedur Kerja</h3>
        <ol className="list-decimal list-inside font-bold space-y-1">
          <li>Tarik botol larutan CH<sub>3</sub>COOH dengan konsentrasi berbeda (0,1 M, 0,5 M, 1,0 M) ke masing-masing Erlenmeyer.</li>
          <li>Tarik balon yang berisi serbuk soda kue (NaHCO<sub>3</sub>) ke masing-masing Erlenmeyer.</li>
          <li>Klik tombol <span className="bg-yellow-300 px-2 py-0.5 border-2 border-black rounded text-sm">MULAI REAKSI</span> untuk memulai reaksi secara bersamaan.</li>
          <li>Amati animasi reaksi dan catat waktu yang dibutuhkan balon untuk berdiri tegak pada tabel pengamatan.</li>
        </ol>
      </div>

      {/* Alat & Bahan */}
      <div className="bg-white p-4 rounded-xl border-4 border-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="font-black uppercase mb-4 text-center">Alat & Bahan (Tarik ke Erlenmeyer)</h3>
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
          
          {/* Erlenmeyer A */}
          <div 
            className={`relative flex flex-col items-center transition-all duration-300 ${dragOver === 'A' ? 'scale-110 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver('A'); }}
            onDragLeave={() => setDragOver(null)}
            onDrop={(e) => handleDrop('A', e)}
          >
            {actionText.A && <ComicText text={actionText.A} color="text-yellow-400" className="-top-16" />}
            <motion.div animate={stepA === 3 ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}} transition={{ repeat: Infinity, duration: 0.1 }}>
              <Erlenmeyer 
                liquidColor={stepA >= 1 ? "bg-blue-300/80" : "bg-transparent"} 
                liquidLevel={stepA >= 1 ? 40 : 0} 
                bubbles={stepA === 3}
              >
                {stepA >= 2 && (
                  <Balloon 
                    color="text-pink-400" 
                    scale={stepA >= 3 ? Math.min(1.5, 0.2 + timerA/15) : 0.2} 
                  />
                )}
              </Erlenmeyer>
            </motion.div>
            
            <span className="font-bold mt-4 text-center bg-white px-3 py-1 border-2 border-black rounded-lg">Erlenmeyer A<br/>(0,1 M)</span>
            <div className="mt-2 font-black text-xl bg-white px-3 py-1 border-2 border-black rounded-lg">⏱️ {timerA}s</div>
          </div>

          {/* Erlenmeyer B */}
          <div 
            className={`relative flex flex-col items-center transition-all duration-300 ${dragOver === 'B' ? 'scale-110 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver('B'); }}
            onDragLeave={() => setDragOver(null)}
            onDrop={(e) => handleDrop('B', e)}
          >
            {actionText.B && <ComicText text={actionText.B} color="text-yellow-400" className="-top-16" />}
            <motion.div animate={stepB === 3 ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}} transition={{ repeat: Infinity, duration: 0.1 }}>
              <Erlenmeyer 
                liquidColor={stepB >= 1 ? "bg-blue-400/80" : "bg-transparent"} 
                liquidLevel={stepB >= 1 ? 40 : 0} 
                bubbles={stepB === 3}
              >
                {stepB >= 2 && (
                  <Balloon 
                    color="text-pink-400" 
                    scale={stepB >= 3 ? Math.min(1.5, 0.2 + timerB/7) : 0.2} 
                  />
                )}
              </Erlenmeyer>
            </motion.div>
            
            <span className="font-bold mt-4 text-center bg-white px-3 py-1 border-2 border-black rounded-lg">Erlenmeyer B<br/>(0,5 M)</span>
            <div className="mt-2 font-black text-xl bg-white px-3 py-1 border-2 border-black rounded-lg">⏱️ {timerB}s</div>
          </div>

          {/* Erlenmeyer C */}
          <div 
            className={`relative flex flex-col items-center transition-all duration-300 ${dragOver === 'C' ? 'scale-110 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver('C'); }}
            onDragLeave={() => setDragOver(null)}
            onDrop={(e) => handleDrop('C', e)}
          >
            {actionText.C && <ComicText text={actionText.C} color="text-yellow-400" className="-top-16" />}
            <motion.div animate={stepC === 3 ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}} transition={{ repeat: Infinity, duration: 0.1 }}>
              <Erlenmeyer 
                liquidColor={stepC >= 1 ? "bg-blue-600/80" : "bg-transparent"} 
                liquidLevel={stepC >= 1 ? 40 : 0} 
                bubbles={stepC === 3}
              >
                {stepC >= 2 && (
                  <Balloon 
                    color="text-pink-400" 
                    scale={stepC >= 3 ? Math.min(1.5, 0.2 + timerC/3.5) : 0.2} 
                  />
                )}
              </Erlenmeyer>
            </motion.div>
            
            <span className="font-bold mt-4 text-center bg-white px-3 py-1 border-2 border-black rounded-lg">Erlenmeyer C<br/>(1,0 M)</span>
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
        <h3 className="font-black uppercase mb-4 text-xl">Tabel 2. Pengamatan Pengaruh Konsentrasi</h3>
        <div className="overflow-x-auto border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-pink-300 border-b-4 border-black">
                <th className="p-3 border-r-4 border-black font-black">Erlenmeyer</th>
                <th className="p-3 border-r-4 border-black font-black">Waktu (sekon)</th>
                <th className="p-3 border-r-4 border-black font-black">Laju (v ~ 1/t)</th>
                <th className="p-3 font-black">Pengamatan Lain</th>
              </tr>
            </thead>
            <tbody>
              {['A', 'B', 'C'].map((label) => (
                <tr key={label} className="border-b-4 border-black last:border-b-0">
                  <td className="p-3 border-r-4 border-black font-bold text-center text-xl">{label}</td>
                  <td className="p-3 border-r-4 border-black">
                    <input type="text" name={`waktu${label}`} value={(formData as any)[`waktu${label}`] || ""} onChange={handleChange} className="w-full border-2 border-black rounded p-2 font-bold bg-gray-100" placeholder="Auto..." readOnly />
                  </td>
                  <td className="p-3 border-r-4 border-black">
                    <input type="text" name={`laju${label}`} value={(formData as any)[`laju${label}`] || ""} onChange={handleChange} className="w-full border-2 border-black rounded p-2 font-bold bg-gray-100" placeholder="Auto..." readOnly />
                  </td>
                  <td className="p-3">
                    <input type="text" name={`obs${label}`} value={(formData as any)[`obs${label}`]} onChange={handleChange} className="w-full border-2 border-black rounded p-2 font-bold" placeholder="..." />
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
          <p className="font-bold mb-2">a. Tuliskan reaksi antara asam cuka (CH<sub>3</sub>COOH) dengan soda kue (NaHCO<sub>3</sub>)!</p>
          <textarea name="qA" value={formData.qA} onChange={handleChange} rows={2} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-pink-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">b. Buatlah grafik hubungan antara laju (v ~ 1/t) dengan konsentrasi! (Laju pada sumbu Y dan Konsentrasi pada sumbu X)</p>
          <p className="text-sm italic mb-2">*Deskripsikan bentuk grafik di bawah ini, atau gambar secara manual setelah dicetak.</p>
          <textarea name="qB" value={formData.qB} onChange={handleChange} rows={3} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-pink-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">c. Dari data hasil percobaan kalian, apakah hipotesis yang kalian ajukan sesuai dengan hasil percobaan?</p>
          <textarea name="qC" value={formData.qC} onChange={handleChange} rows={2} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-pink-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">d. Dilihat dari nilai konsentrasinya, manakah yang lebih banyak jumlah partikel CH<sub>3</sub>COOH pada Erlenmeyer A, B atau C?</p>
          <textarea name="qD" value={formData.qD} onChange={handleChange} rows={2} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-pink-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">e. Bandingkan peluang jumlah tumbukan yang terjadi antara partikel CH<sub>3</sub>COOH dengan partikel NaHCO<sub>3</sub> pada Erlenmeyer A, B dan C. Erlenmeyer manakah yang perluang terjadinya tumbukan paling banyak?</p>
          <textarea name="qE" value={formData.qE} onChange={handleChange} rows={3} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-pink-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">f. Jelaskan mengapa reaksi antara CH<sub>3</sub>COOH dengan NaHCO<sub>3</sub> pada Erlenmeyer C berlangsung lebih cepat dibandingkan pada Erlenmeyer A dan B, serta reaksi pada Erlenmeyer B lebih cepat dibandingkan pada Erlenmeyer A?</p>
          <textarea name="qF" value={formData.qF} onChange={handleChange} rows={3} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-pink-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">g. Dengan menggunakan teori tumbukan, jelaskan mengapa laju reaksi pada Erlenmeyer C {'>'} B {'>'} A?</p>
          <textarea name="qG" value={formData.qG} onChange={handleChange} rows={3} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-pink-300 outline-none" placeholder="Jawaban..." />
        </div>

        <div className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-bold mb-2">h. Buatlah kesimpulan dari hasil demonstrasi percobaan kalian!</p>
          <textarea name="qH" value={formData.qH} onChange={handleChange} rows={3} className="w-full border-2 border-black rounded p-2 font-bold focus:ring-4 focus:ring-pink-300 outline-none" placeholder="Jawaban..." />
        </div>
      </div>
    </div>
  );
};
