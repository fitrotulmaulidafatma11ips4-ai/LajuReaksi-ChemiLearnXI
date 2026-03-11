import React, { useState, useEffect, useRef } from "react";
import { ComicCard } from "../../components/ui/ComicCard";
import { ComicButton } from "../../components/ui/ComicButton";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const LKPD = () => {
  const [formData, setFormData] = useState({
    nama: "",
    noAbsen: "",
    kelas: "",
    orientasi: "",
    organisasi: "",
    penyelidikan: "",
    penyajian: "",
    evaluasi: "",
    kesimpulan: ""
  });

  const lkpdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("lkpdData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    localStorage.setItem("lkpdData", JSON.stringify(newData));
  };

  const handleDownloadPDF = async () => {
    if (!lkpdRef.current) return;
    
    try {
      const canvas = await html2canvas(lkpdRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      const ratio = pdfWidth / imgWidth;
      const totalPdfHeight = imgHeight * ratio;
      
      let heightLeft = totalPdfHeight;
      let position = 0;
      
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, totalPdfHeight);
      heightLeft -= pdfHeight;
      
      while (heightLeft > 0) {
        position -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, totalPdfHeight);
        heightLeft -= pdfHeight;
      }
      
      pdf.save(`LKPD_LajuReaksi_${formData.nama || "Siswa"}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Gagal mengunduh PDF. Silakan coba lagi.");
    }
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <ComicCard variant="white" className="flex-shrink-0 flex justify-between items-center">
        <h1 className="text-3xl font-black uppercase">LKPD Berbasis PBL</h1>
        <ComicButton variant="success" onClick={handleDownloadPDF}>
          UNDUH PDF
        </ComicButton>
      </ComicCard>

      <div className="flex-1 overflow-y-auto bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6" ref={lkpdRef}>
        <div className="text-center mb-8 border-b-4 border-black pb-4">
          <h2 className="text-4xl font-black uppercase text-green-500 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '1px black' }}>Lembar Kerja Peserta Didik</h2>
          <p className="text-xl font-bold mt-2">Materi: Laju Reaksi & Isu Sosiosaintifik (SSI)</p>
        </div>

        {/* Identitas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-green-100 p-4 border-4 border-black rounded-xl">
          <div>
            <label className="block font-black uppercase mb-1">Nama Lengkap</label>
            <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full border-4 border-black rounded-lg p-2 font-bold focus:outline-none focus:ring-4 focus:ring-green-400" placeholder="Masukkan nama..." />
          </div>
          <div>
            <label className="block font-black uppercase mb-1">No. Absen</label>
            <input type="text" name="noAbsen" value={formData.noAbsen} onChange={handleChange} className="w-full border-4 border-black rounded-lg p-2 font-bold focus:outline-none focus:ring-4 focus:ring-green-400" placeholder="Masukkan no absen..." />
          </div>
          <div>
            <label className="block font-black uppercase mb-1">Kelas</label>
            <input type="text" name="kelas" value={formData.kelas} onChange={handleChange} className="w-full border-4 border-black rounded-lg p-2 font-bold focus:outline-none focus:ring-4 focus:ring-green-400" placeholder="Masukkan kelas..." />
          </div>
        </div>

        {/* Sintaks PBL */}
        <div className="space-y-8">
          {/* Tahap 1 */}
          <div className="bg-yellow-100 p-6 border-4 border-black rounded-xl relative">
            <div className="absolute -top-4 -left-4 bg-yellow-400 border-4 border-black px-4 py-1 rounded-full font-black transform -rotate-3">Tahap 1</div>
            <h3 className="text-xl font-black uppercase mb-4 mt-2">Orientasi Peserta Didik pada Masalah</h3>
            <div className="mb-4 border-4 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <img src="https://fumida.co.id/wp-content/uploads/2020/04/Gambar-1-Produk-produk-yang-ditawarkan-oleh-Baygon.png" alt="Produk Obat Nyamuk" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
            <p className="font-bold mb-4 text-justify">
              <strong>Wacana SSI:</strong> Saat ini, penggunaan obat nyamuk sangat umum di masyarakat. Ada obat nyamuk bakar, semprot (aerosol), dan elektrik (cair/keping). Obat nyamuk bakar menghasilkan asap tebal yang terus-menerus, aerosol menyebar sangat cepat di udara, sedangkan elektrik menguap perlahan. Beberapa ahli kesehatan memperdebatkan bahaya asap obat nyamuk bakar bagi pernapasan dibandingkan jenis lainnya.
              <br/><br/>
              Berdasarkan wacana di atas, rumuskan masalah terkait perbedaan kecepatan reaksi (penyebaran zat aktif) dari ketiga jenis obat nyamuk tersebut dan kaitannya dengan faktor laju reaksi!
            </p>
            <textarea name="orientasi" value={formData.orientasi} onChange={handleChange} rows={4} className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400" placeholder="Tuliskan rumusan masalahmu di sini..."></textarea>
          </div>

          {/* Tahap 2 */}
          <div className="bg-cyan-100 p-6 border-4 border-black rounded-xl relative">
            <div className="absolute -top-4 -left-4 bg-cyan-400 border-4 border-black px-4 py-1 rounded-full font-black transform -rotate-3">Tahap 2</div>
            <h3 className="text-xl font-black uppercase mb-4 mt-2">Mengorganisasikan Peserta Didik untuk Belajar</h3>
            <p className="font-bold mb-4">
              Diskusikan dengan kelompokmu, faktor laju reaksi apa saja yang membedakan kinerja obat nyamuk bakar, aerosol, dan elektrik? (Petunjuk: perhatikan wujud zat dan cara penggunaannya). Tuliskan hipotesis awal kalian!
            </p>
            <textarea name="organisasi" value={formData.organisasi} onChange={handleChange} rows={4} className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:ring-4 focus:ring-cyan-400" placeholder="Tuliskan hipotesis awalmu di sini..."></textarea>
          </div>

          {/* Tahap 3 */}
          <div className="bg-pink-100 p-6 border-4 border-black rounded-xl relative">
            <div className="absolute -top-4 -left-4 bg-pink-400 border-4 border-black px-4 py-1 rounded-full font-black transform -rotate-3">Tahap 3</div>
            <h3 className="text-xl font-black uppercase mb-4 mt-2">Membimbing Penyelidikan Individu/Kelompok</h3>
            <p className="font-bold mb-4">
              Kumpulkan informasi dari berbagai sumber mengenai konsep laju reaksi, luas permukaan, suhu, dan dampaknya terhadap kesehatan pernapasan. Analisis bagaimana bentuk sediaan obat nyamuk mempengaruhi laju penyebaran zat aktifnya!
            </p>
            <textarea name="penyelidikan" value={formData.penyelidikan} onChange={handleChange} rows={6} className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:ring-4 focus:ring-pink-400" placeholder="Tuliskan hasil penyelidikan dan analisismu di sini..."></textarea>
          </div>

          {/* Tahap 4 */}
          <div className="bg-purple-100 p-6 border-4 border-black rounded-xl relative">
            <div className="absolute -top-4 -left-4 bg-purple-400 border-4 border-black px-4 py-1 rounded-full font-black transform -rotate-3">Tahap 4</div>
            <h3 className="text-xl font-black uppercase mb-4 mt-2">Mengembangkan dan Menyajikan Hasil Karya</h3>
            <p className="font-bold mb-4">
              Berdasarkan analisis kalian, jenis obat nyamuk manakah yang paling aman digunakan di ruang tertutup ditinjau dari konsep laju reaksi pembakaran dan dampaknya? Berikan argumen ilmiahmu!
            </p>
            <textarea name="penyajian" value={formData.penyajian} onChange={handleChange} rows={4} className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:ring-4 focus:ring-purple-400" placeholder="Tuliskan argumen ilmiahmu di sini..."></textarea>
          </div>

          {/* Tahap 5 */}
          <div className="bg-orange-100 p-6 border-4 border-black rounded-xl relative">
            <div className="absolute -top-4 -left-4 bg-orange-400 border-4 border-black px-4 py-1 rounded-full font-black transform -rotate-3">Tahap 5</div>
            <h3 className="text-xl font-black uppercase mb-4 mt-2">Menganalisis dan Mengevaluasi Proses Pemecahan Masalah</h3>
            <p className="font-bold mb-4">
              Tuliskan kesimpulan akhir dari pembelajaran hari ini terkait faktor laju reaksi dan penerapannya dalam kehidupan sehari-hari (isu SSI obat nyamuk), serta tuliskan refleksimu selama mengerjakan LKPD ini!
            </p>
            <textarea name="kesimpulan" value={formData.kesimpulan} onChange={handleChange} rows={6} className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:ring-4 focus:ring-orange-400" placeholder="Tuliskan kesimpulan dan refleksimu di sini..."></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
