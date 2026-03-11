import React, { useState } from "react";
import { ComicCard } from "../../components/ui/ComicCard";
import { ComicButton } from "../../components/ui/ComicButton";
import { motion, AnimatePresence } from "motion/react";

export const Theory = () => {
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  const topics = [
    {
      id: 1,
      title: "Konsep Laju Reaksi",
      content: (
        <div className="space-y-4">
          <p>
            Reaksi kimia memerlukan waktu untuk terjadi. Beberapa reaksi, seperti perkaratan (korosi) besi atau perubahan warna daun, muncul relatif lambat, berhari-hari, berbulan-bulan, atau bertahun-tahun. Sementara pula terdapat reaksi pembakaran yang terjadi pada petasan, atau meluncurnya roket yang berlangsung cepat. Cabang ilmu kimia yang mempelajari kecepatan reaksi atau laju reaksi (<em>reaction rate</em>) disebut dengan <strong>KINETIKA KIMIA</strong>.
          </p>
          <p>
            Kecepatan (<em>speed</em>) terjadinya suatu peristiwa didefinisikan sebagai <em>perubahan</em> yang terjadi dalam selang <em>waktu</em> tertentu. Sama halnya dengan laju reaksi. Laju reaksi menyatakan laju berkurangnya jumlah reaktan atau laju bertambahnya jumlah produk dalam satuan waktu.
          </p>
          <div className="bg-white p-4 border-2 border-black rounded-lg inline-block">
            <p className="font-black text-center mb-2">Rumus Umum Laju Reaksi:</p>
            <p className="text-center font-mono text-lg">
              Laju = - Δ[Reaktan] / Δt = + Δ[Produk] / Δt
            </p>
          </div>
          <p>
            Tanda negatif (-) diletakkan di depan persamaan, menunjukkan berkurangnya konsentrasi reaktan. Tanda positif (+) menunjukkan bertambahnya konsentrasi produk.
          </p>
          <p>
            Untuk persamaan reaksi: <strong>mA + nB → pC + qD</strong>
          </p>
          <p>
            Perbandingan nilai laju reaksi sebanding dengan perbandingan koefisien reaksi:
            <br />
            <span className="font-mono">v<sub>A</sub> : v<sub>B</sub> : v<sub>C</sub> : v<sub>D</sub> = m : n : p : q</span>
          </p>
        </div>
      ),
      color: "bg-cyan-300"
    },
    {
      id: 2,
      title: "Persamaan Laju dan Orde Reaksi",
      content: (
        <div className="space-y-4">
          <p>
            Jika diketahui persamaan reaksi: <strong>mA + nB → pC + qD</strong>
            <br />
            maka persamaan laju reaksinya dapat dirumuskan:
          </p>
          <div className="bg-white p-4 border-2 border-black rounded-lg inline-block">
            <p className="text-center font-mono text-xl font-black">
              v = k[A]<sup>m</sup> [B]<sup>n</sup>
            </p>
          </div>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>v</strong> = laju reaksi (M/det)</li>
            <li><strong>k</strong> = tetapan laju reaksi</li>
            <li><strong>[A]</strong> = konsentrasi zat A (mol/L)</li>
            <li><strong>[B]</strong> = konsentrasi zat B (mol/L)</li>
            <li><strong>m</strong> = orde reaksi terhadap A</li>
            <li><strong>n</strong> = orde reaksi terhadap B</li>
          </ul>
          <p>
            Tingkat reaksi atau orde reaksi dinyatakan dengan pangkat dari konsentrasi zat dalam persamaan laju reaksi. <strong>Orde reaksi menyatakan besarnya sumbangsih zat terhadap laju reaksi.</strong> Semakin besar orde reaksi suatu zat semakin besar pula sumbangsih yang diberikan zat tersebut terhadap laju reaksi.
          </p>
          <p className="bg-yellow-200 p-3 border-2 border-black rounded-lg font-bold">
            Persamaan laju reaksi sebenarnya hanya dapat ditentukan secara eksperimen. Caranya dengan melakukan percobaan secara berulang-ulang dan waktu berlangsungnya reaksi dihitung.
          </p>
        </div>
      ),
      color: "bg-yellow-300"
    },
    {
      id: 3,
      title: "Teori Tumbukan",
      content: (
        <div className="space-y-4">
          <p>
            Pengaruh dari berbagai faktor terhadap laju reaksi dapat dijelaskan dengan teori tumbukan. Menurut teori ini, reaksi berlangsung sebagai hasil tumbukan antar partikel pereaksi. Akan tetapi, tidaklah setiap tumbukan menghasilkan reaksi, melainkan hanya tumbukan antar partikel yang memiliki energi cukup serta arah tumbukan yang tepat.
          </p>
          <h4 className="font-black text-xl mt-4">1. Orientasi Tumbukan</h4>
          <p>
            Tumbukan yang menghasilkan reaksi kimia disebut <strong>tumbukan efektif</strong>. Suatu tumbukan efektif dapat terjadi jika partikel-partikel pereaksi juga mempunyai orientasi atau arah yang tepat pada saat bertumbukan. Jika orientasi partikel-partikel tidak tepat, maka terjadi tumbukan tidak efektif.
          </p>
          <h4 className="font-black text-xl mt-4">2. Energi Kinetik Partikel</h4>
          <p>
            Energi kinetik minimum yang diperlukan untuk menghasilkan tumbukan efektif disebut <strong>energi pengaktifan (E<sub>a</sub>)</strong>. Energi pengaktifan ditafsirkan sebagai energi penghalang (<em>barrier</em>) antara pereaksi dan produk. Pereaksi harus didorong sehingga dapat melewati energi penghalang tersebut baru kemudian dapat berubah menjadi produk.
          </p>
          <p>
            Pada proses tumbukan partikel-partikel pereaksi saling mendekat di mana terjadi tolak-menolak antara elektron terluar dari masing-masing partikel. Gaya tolak-menolak tersebut dapat diatasi apabila energi kinetik partikel-partikel tersebut mencukupi (E<sub>k</sub> ≥ E<sub>a</sub>). Dengan demikian, dapat terjadi tumbukan efektif.
          </p>
        </div>
      ),
      color: "bg-green-300"
    },
    {
      id: 4,
      title: "Faktor-Faktor yang Mempengaruhi Laju Reaksi",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-black text-xl mb-2">1. Sifat Alami Reaktan</h4>
            <p>Sifat alami reaktan mempengaruhi laju reaksi. Contoh dalam kehidupan sehari-hari adalah bensin. Bensin cair dapat terbakar dengan halus namun uap bensin dapat meledak jika didekatkan dengan api. Sedangkan air tidak mudah terbakar jika didekatkan dengan api.</p>
          </div>
          
          <div>
            <h4 className="font-black text-xl mb-2">2. Pengaruh Konsentrasi</h4>
            <p>Konsentrasi zat berkaitan dengan jumlah partikel zat terlarut dalam sejumlah tertentu pelarut. Semakin besar konsentrasi maka semakin banyak jumlah partikel suatu zat. Berdasarkan teori tumbukan, semakin besar jumlah partikel maka akan semakin besar pula kemungkinan terjadinya tumbukan antarmolekul yang bereaksi sehingga laju reaksi semakin cepat.</p>
          </div>

          <div>
            <h4 className="font-black text-xl mb-2">3. Pengaruh Suhu</h4>
            <p>Pengaruh suhu terhadap laju reaksi terkait dengan nilai energi kinetik partikel. Apabila suhu reaksi dinaikkan, maka energi kinetik partikel akan bertambah. Dengan demikian, lebih banyak partikel yang akan memiliki energi kinetik minimum ≥ E<sub>a</sub>. Hal ini menyebabkan jumlah tumbukan efektif bertambah, sehingga laju reaksi meningkat.</p>
            <p className="mt-2 font-bold">Pada umumnya, setiap kenaikan suhu 10°C, laju reaksi naik 2 kali lebih cepat dari semula.</p>
          </div>

          <div>
            <h4 className="font-black text-xl mb-2">4. Pengaruh Luas Permukaan</h4>
            <p>Padatan berbentuk serbuk halus memiliki luas permukaan bidang sentuh yang lebih besar daripada padatan berbentuk lempeng atau butiran. Semakin luas permukaan partikel, maka frekuensi tumbukan kemungkinan akan semakin tinggi sehingga reaksi dapat berlangsung lebih cepat.</p>
          </div>

          <div>
            <h4 className="font-black text-xl mb-2">5. Pengaruh Katalis</h4>
            <p>Katalis adalah zat yang dapat memperbesar laju reaksi, tetapi tidak mengalami perubahan kimia secara permanen, sehingga pada akhir reaksi zat tersebut dapat diperoleh kembali. Katalis mempercepat reaksi dengan cara membuat jalur atau mekanisme reaksi lain dengan energi aktivasi yang lebih rendah (E<sub>a</sub>).</p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li><strong>Katalis Homogen:</strong> Berada dalam fasa yang sama dengan molekul pereaksi.</li>
              <li><strong>Katalis Heterogen:</strong> Berada dalam fasa yang berbeda dengan pereaksi; biasanya dalam bentuk padatan.</li>
              <li><strong>Autokatalis:</strong> Zat hasil reaksi yang dapat berperan sebagai katalis.</li>
            </ul>
          </div>
        </div>
      ),
      color: "bg-pink-300"
    }
  ];

  return (
    <div className="h-full flex flex-col gap-4">
      <ComicCard variant="white" className="flex-shrink-0">
        <h1 className="text-3xl font-black uppercase text-center mb-4">Teori & Materi Laju Reaksi</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic) => (
            <ComicButton 
              key={topic.id} 
              variant={activeTopic === topic.id ? "warning" : "secondary"}
              onClick={() => setActiveTopic(topic.id)}
            >
              {topic.title}
            </ComicButton>
          ))}
        </div>
      </ComicCard>

      <AnimatePresence mode="wait">
        {activeTopic && (
          <motion.div
            key={activeTopic}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex-1"
          >
            <ComicCard variant="white" className={`h-full ${topics.find(t => t.id === activeTopic)?.color}`}>
              <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">
                {topics.find(t => t.id === activeTopic)?.title}
              </h2>
              <div className="text-lg whitespace-pre-line leading-relaxed bg-white p-6 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-y-auto max-h-[60vh]">
                {topics.find(t => t.id === activeTopic)?.content}
              </div>
            </ComicCard>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!activeTopic && (
        <ComicCard variant="white" className="flex-1 flex items-center justify-center bg-gray-200">
          <p className="text-2xl font-black text-gray-500 uppercase">Pilih materi di atas untuk mulai belajar!</p>
        </ComicCard>
      )}
    </div>
  );
};
