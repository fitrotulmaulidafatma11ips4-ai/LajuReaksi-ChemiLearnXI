export const questions = [
  {
    id: 1,
    question: "Seorang siswa mereaksikan pualam (CaCO<sub>3</sub>) dengan HCl. Manakah perlakuan yang akan menghasilkan laju reaksi paling cepat berdasarkan teori tumbukan?",
    options: [
      { id: "A", text: "Bongkahan CaCO<sub>3</sub> dengan HCl 0,1 M" },
      { id: "B", text: "Serbuk CaCO<sub>3</sub> dengan HCl 0,1 M" },
      { id: "C", text: "Bongkahan CaCO<sub>3</sub> dengan HCl 1 M" },
      { id: "D", text: "Serbuk CaCO<sub>3</sub> dengan HCl 1 M" },
      { id: "E", text: "Kepingan CaCO<sub>3</sub> dengan HCl 0,5 M" }
    ],
    answer: "D",
    explanation: "Serbuk memiliki luas permukaan sentuh terbesar, dan HCl 1 M memiliki konsentrasi tertinggi. Keduanya meningkatkan frekuensi tumbukan efektif, sehingga laju reaksi paling cepat.",
    wrongExplanation: "Pilihan lain memiliki luas permukaan atau konsentrasi yang lebih rendah, sehingga frekuensi tumbukan efektif lebih sedikit."
  },
  {
    id: 2,
    question: "Dalam industri pembuatan amonia (Proses Haber-Bosch), digunakan serbuk besi sebagai katalis. Peran utama serbuk besi dalam proses ini adalah...",
    options: [
      { id: "A", text: "Meningkatkan energi kinetik partikel gas N<sub>2</sub> dan H<sub>2</sub>" },
      { id: "B", text: "Menurunkan energi aktivasi reaksi tanpa ikut bereaksi secara permanen" },
      { id: "C", text: "Menambah jumlah tumbukan antar partikel reaktan" },
      { id: "D", text: "Mengubah arah tumbukan partikel agar lebih efektif" },
      { id: "E", text: "Meningkatkan suhu sistem agar reaksi cepat berlangsung" }
    ],
    answer: "B",
    explanation: "Katalis bekerja dengan cara menyediakan jalur reaksi alternatif yang memiliki energi aktivasi (Ea) lebih rendah, sehingga lebih banyak partikel yang dapat bereaksi pada suhu tertentu.",
    wrongExplanation: "Katalis tidak mengubah energi kinetik, suhu, atau jumlah partikel, melainkan hanya menurunkan batas energi (Ea) yang harus dilewati."
  },
  {
    id: 3,
    question: "Data percobaan reaksi A + B &rarr; C menunjukkan bahwa jika konsentrasi A dinaikkan 2 kali (B tetap), laju reaksi menjadi 4 kali lebih cepat. Jika konsentrasi B dinaikkan 2 kali (A tetap), laju reaksi menjadi 2 kali lebih cepat. Persamaan laju reaksinya adalah...",
    options: [
      { id: "A", text: "v = k[A][B]" },
      { id: "B", text: "v = k[A]<sup>2</sup>[B]" },
      { id: "C", text: "v = k[A][B]<sup>2</sup>" },
      { id: "D", text: "v = k[A]<sup>2</sup>[B]<sup>2</sup>" },
      { id: "E", text: "v = k[A]<sup>3</sup>[B]" }
    ],
    answer: "B",
    explanation: "Orde A: (2)<sup>x</sup> = 4 &rarr; x = 2. Orde B: (2)<sup>y</sup> = 2 &rarr; y = 1. Jadi persamaan laju reaksinya v = k[A]<sup>2</sup>[B].",
    wrongExplanation: "Perhitungan orde reaksi didapat dari perbandingan laju terhadap perubahan konsentrasi. Pilihan lain tidak sesuai dengan perhitungan matematis data."
  },
  {
    id: 4,
    question: "Pada suhu 20°C, suatu reaksi berlangsung selama 12 menit. Jika setiap kenaikan suhu 10°C laju reaksi menjadi 2 kali lebih cepat, berapa lama reaksi berlangsung pada suhu 50°C?",
    options: [
      { id: "A", text: "1,5 menit" },
      { id: "B", text: "2 menit" },
      { id: "C", text: "3 menit" },
      { id: "D", text: "4 menit" },
      { id: "E", text: "6 menit" }
    ],
    answer: "A",
    explanation: "Kenaikan suhu = 50 - 20 = 30°C. n = 30/10 = 3. Waktu baru = Waktu awal / (2<sup>n</sup>) = 12 / (2<sup>3</sup>) = 12 / 8 = 1,5 menit.",
    wrongExplanation: "Ingat bahwa jika laju menjadi 2x lebih cepat, maka waktu reaksinya menjadi 1/2 kali lebih singkat. Jangan mengalikan waktu dengan 2."
  },
  {
    id: 5,
    question: "Mengapa menyimpan makanan di dalam kulkas dapat memperlambat pembusukan?",
    options: [
      { id: "A", text: "Suhu rendah mematikan semua bakteri pembusuk" },
      { id: "B", text: "Suhu rendah menurunkan energi kinetik partikel sehingga frekuensi tumbukan efektif berkurang" },
      { id: "C", text: "Suhu rendah meningkatkan energi aktivasi reaksi pembusukan" },
      { id: "D", text: "Kulkas bertindak sebagai inhibitor yang menghentikan reaksi" },
      { id: "E", text: "Suhu rendah mengurangi konsentrasi oksigen di sekitar makanan" }
    ],
    answer: "B",
    explanation: "Penurunan suhu menyebabkan energi kinetik molekul menurun. Akibatnya, pergerakan partikel melambat dan tumbukan efektif yang menghasilkan reaksi pembusukan (oleh enzim/bakteri) semakin jarang terjadi.",
    wrongExplanation: "Suhu rendah tidak mematikan bakteri (hanya menghambat), tidak mengubah energi aktivasi, dan bukan inhibitor kimia."
  },
  {
    id: 6,
    question: "Dua buah pita magnesium dengan massa yang sama dimasukkan ke dalam dua tabung reaksi. Tabung I berisi HCl 1 M dan Tabung II berisi CH<sub>3</sub>COOH 1 M. Pernyataan yang tepat adalah...",
    options: [
      { id: "A", text: "Reaksi di Tabung I lebih cepat karena HCl asam kuat (konsentrasi H<sup>+</sup> lebih banyak)" },
      { id: "B", text: "Reaksi di Tabung II lebih cepat karena CH<sub>3</sub>COOH asam lemah" },
      { id: "C", text: "Laju reaksi keduanya sama karena konsentrasinya sama-sama 1 M" },
      { id: "D", text: "Reaksi di Tabung I lebih lambat karena HCl mudah menguap" },
      { id: "E", text: "Tidak terjadi reaksi pada kedua tabung" }
    ],
    answer: "A",
    explanation: "HCl adalah asam kuat yang terionisasi sempurna, sehingga konsentrasi ion H<sup>+</sup> jauh lebih besar dibandingkan CH<sub>3</sub>COOH (asam lemah) pada molaritas yang sama. Konsentrasi H<sup>+</sup> yang tinggi mempercepat laju reaksi.",
    wrongExplanation: "Meskipun molaritas larutan sama, jumlah ion H+ yang aktif bereaksi berbeda karena perbedaan derajat ionisasi."
  },
  {
    id: 7,
    question: "Grafik energi potensial terhadap koordinat reaksi menunjukkan puncak kurva. Jarak dari energi reaktan ke puncak kurva disebut...",
    options: [
      { id: "A", text: "Entalpi reaksi" },
      { id: "B", text: "Energi kinetik" },
      { id: "C", text: "Energi aktivasi" },
      { id: "D", text: "Kompleks teraktivasi" },
      { id: "E", text: "Energi produk" }
    ],
    answer: "C",
    explanation: "Energi aktivasi (Ea) adalah energi penghalang minimum yang harus dilampaui reaktan agar dapat berubah menjadi produk. Pada grafik, ini diukur dari energi awal reaktan hingga puncak kurva.",
    wrongExplanation: "Entalpi adalah selisih energi produk dan reaktan. Kompleks teraktivasi adalah keadaan transisi di puncak kurva, bukan energinya."
  },
  {
    id: 8,
    question: "Suatu reaksi memiliki orde nol terhadap reaktan X. Jika konsentrasi X dinaikkan 3 kali lipat, maka laju reaksinya akan...",
    options: [
      { id: "A", text: "Menjadi 3 kali lebih cepat" },
      { id: "B", text: "Menjadi 9 kali lebih cepat" },
      { id: "C", text: "Tetap (tidak berubah)" },
      { id: "D", text: "Menjadi 1/3 kali lebih lambat" },
      { id: "E", text: "Menjadi 0" }
    ],
    answer: "C",
    explanation: "Reaksi orde nol berarti laju reaksi tidak dipengaruhi oleh perubahan konsentrasi reaktan tersebut. v = k[X]<sup>0</sup> = k(1) = k.",
    wrongExplanation: "Jika orde 1, laju naik 3x. Jika orde 2, laju naik 9x. Orde nol berarti tidak ada pengaruh."
  },
  {
    id: 9,
    question: "Katalis homogen adalah katalis yang...",
    options: [
      { id: "A", text: "Memiliki wujud yang sama dengan reaktan" },
      { id: "B", text: "Memiliki wujud yang berbeda dengan reaktan" },
      { id: "C", text: "Hanya bekerja pada suhu ruang" },
      { id: "D", text: "Terdiri dari satu jenis unsur saja" },
      { id: "E", text: "Tidak ikut bereaksi sama sekali dalam tahap apapun" }
    ],
    answer: "A",
    explanation: "Katalis homogen berada dalam fase (wujud) yang sama dengan zat-zat yang bereaksi (reaktan), misalnya sama-sama berupa larutan atau gas.",
    wrongExplanation: "Katalis heterogen yang wujudnya berbeda. Katalis sebenarnya ikut bereaksi membentuk zat antara, lalu terbentuk kembali di akhir reaksi."
  },
  {
    id: 10,
    question: "Obat nyamuk bakar lebih lambat habis dibandingkan obat nyamuk semprot (aerosol) di udara terbuka. Faktor laju reaksi yang paling dominan membedakan keduanya adalah...",
    options: [
      { id: "A", text: "Suhu" },
      { id: "B", text: "Katalis" },
      { id: "C", text: "Luas permukaan" },
      { id: "D", text: "Konsentrasi" },
      { id: "E", text: "Tekanan" }
    ],
    answer: "C",
    explanation: "Obat nyamuk semprot (aerosol) berbentuk partikel cair/gas yang sangat halus sehingga luas permukaannya sangat besar dan bereaksi (menyebar/menguap) sangat cepat. Obat nyamuk bakar berbentuk padat dengan luas permukaan kecil.",
    wrongExplanation: "Meskipun obat nyamuk bakar melibatkan suhu tinggi di ujungnya, perbedaan wujud (padat vs aerosol) merujuk pada faktor luas permukaan bidang sentuh."
  },
  {
    id: 11,
    question: "Pernyataan yang BENAR mengenai energi aktivasi adalah...",
    options: [
      { id: "A", text: "Energi aktivasi selalu bernilai negatif" },
      { id: "B", text: "Katalis meningkatkan energi aktivasi" },
      { id: "C", text: "Semakin besar energi aktivasi, reaksi semakin cepat" },
      { id: "D", text: "Semakin kecil energi aktivasi, reaksi semakin cepat" },
      { id: "E", text: "Suhu mempengaruhi besarnya energi aktivasi" }
    ],
    answer: "D",
    explanation: "Energi aktivasi adalah 'bukit' yang harus dilewati. Semakin rendah bukitnya (Ea kecil), semakin mudah dan cepat partikel melewatinya untuk menjadi produk.",
    wrongExplanation: "Katalis menurunkan Ea. Suhu tidak mengubah Ea, suhu hanya menambah energi kinetik partikel agar bisa melewati Ea."
  },
  {
    id: 12,
    question: "Reaksi gas NO dan Cl<sub>2</sub> menghasilkan NOCl. Jika volume wadah diperkecil menjadi setengahnya, maka laju reaksi akan...",
    options: [
      { id: "A", text: "Berkurang" },
      { id: "B", text: "Tetap" },
      { id: "C", text: "Bertambah cepat" },
      { id: "D", text: "Berhenti" },
      { id: "E", text: "Tidak dapat ditentukan" }
    ],
    answer: "C",
    explanation: "Memperkecil volume wadah gas berarti meningkatkan tekanan dan konsentrasi gas (partikel semakin rapat). Konsentrasi yang lebih tinggi menyebabkan frekuensi tumbukan meningkat, sehingga laju reaksi bertambah cepat.",
    wrongExplanation: "Memperkecil volume = memperbesar konsentrasi. Konsentrasi besar = laju cepat."
  },
  {
    id: 13,
    question: "Dari reaksi 2A + B &rarr; A<sub>2</sub>B, diperoleh persamaan laju v = k[A][B]<sup>2</sup>. Jika ke dalam wadah ditambahkan air sehingga volume larutan menjadi 2 kali lipat, laju reaksi yang baru adalah...",
    options: [
      { id: "A", text: "1/2 kali laju awal" },
      { id: "B", text: "1/4 kali laju awal" },
      { id: "C", text: "1/8 kali laju awal" },
      { id: "D", text: "2 kali laju awal" },
      { id: "E", text: "8 kali laju awal" }
    ],
    answer: "C",
    explanation: "Volume 2x lipat berarti konsentrasi masing-masing zat menjadi 1/2 kali semula. v_baru = k(1/2 [A])(1/2 [B])<sup>2</sup> = k(1/2)(1/4)[A][B]<sup>2</sup> = 1/8 k[A][B]<sup>2</sup> = 1/8 v_awal.",
    wrongExplanation: "Pengenceran menurunkan konsentrasi. Karena orde totalnya 3 (1+2), maka lajunya menjadi (1/2)^3 = 1/8."
  },
  {
    id: 14,
    question: "Kayu yang dibelah menjadi potongan kecil lebih mudah terbakar daripada kayu gelondongan utuh. Hal ini membuktikan bahwa laju reaksi dipengaruhi oleh...",
    options: [
      { id: "A", text: "Suhu" },
      { id: "B", text: "Konsentrasi" },
      { id: "C", text: "Katalis" },
      { id: "D", text: "Sifat zat" },
      { id: "E", text: "Luas permukaan" }
    ],
    answer: "E",
    explanation: "Membelah kayu memperbesar luas permukaan bidang sentuh kayu dengan oksigen di udara, sehingga tumbukan efektif lebih banyak dan kayu lebih cepat terbakar.",
    wrongExplanation: "Wujud dan ukuran partikel padat berhubungan langsung dengan luas permukaan, bukan suhu atau konsentrasi."
  },
  {
    id: 15,
    question: "Enzim dalam tubuh manusia berfungsi sebagai biokatalisator. Ciri khas enzim sebagai katalis adalah...",
    options: [
      { id: "A", text: "Bekerja efektif pada suhu sangat tinggi" },
      { id: "B", text: "Meningkatkan energi aktivasi reaksi metabolisme" },
      { id: "C", text: "Bekerja spesifik untuk reaksi tertentu saja" },
      { id: "D", text: "Ikut bereaksi dan habis di akhir reaksi" },
      { id: "E", text: "Mengubah letak kesetimbangan reaksi" }
    ],
    answer: "C",
    explanation: "Enzim memiliki sifat spesifik (teori lock and key), artinya satu jenis enzim hanya mengkatalisis satu jenis reaksi atau substrat tertentu.",
    wrongExplanation: "Enzim rusak pada suhu tinggi (denaturasi), menurunkan Ea, tidak habis bereaksi, dan katalis tidak mengubah letak kesetimbangan."
  },
  {
    id: 16,
    question: "Tumbukan yang menghasilkan reaksi disebut tumbukan efektif. Syarat terjadinya tumbukan efektif adalah...",
    options: [
      { id: "A", text: "Partikel harus berwujud gas" },
      { id: "B", text: "Energi kinetik partikel > energi aktivasi dan arah tumbukan tepat" },
      { id: "C", text: "Suhu sistem harus selalu dinaikkan" },
      { id: "D", text: "Harus menggunakan katalis" },
      { id: "E", text: "Konsentrasi reaktan harus sangat pekat" }
    ],
    answer: "B",
    explanation: "Agar reaksi terjadi, partikel yang bertumbukan harus memiliki energi kinetik yang cukup (minimal sama dengan Ea) untuk memutuskan ikatan lama, dan orientasi (arah) tumbukannya harus tepat.",
    wrongExplanation: "Tumbukan bisa terjadi tanpa katalis atau suhu tinggi, asalkan syarat energi dan arah terpenuhi."
  },
  {
    id: 17,
    question: "Manakah dari kegiatan sehari-hari berikut yang merupakan penerapan faktor suhu dalam memperlambat laju reaksi?",
    options: [
      { id: "A", text: "Mengunyah makanan sebelum ditelan" },
      { id: "B", text: "Menambahkan ragi pada pembuatan roti" },
      { id: "C", text: "Menyimpan daging di dalam freezer" },
      { id: "D", text: "Memotong sayuran menjadi kecil-kecil sebelum dimasak" },
      { id: "E", text: "Menggunakan panci presto untuk merebus daging" }
    ],
    answer: "C",
    explanation: "Freezer memiliki suhu sangat rendah yang menurunkan energi kinetik bakteri pembusuk, sehingga laju reaksi pembusukan daging diperlambat.",
    wrongExplanation: "Mengunyah/memotong = luas permukaan. Ragi = katalis. Panci presto = suhu tinggi (mempercepat)."
  },
  {
    id: 18,
    question: "Suatu reaksi A &rarr; B berlangsung dalam waktu 10 detik. Jika ditambahkan katalis, apa yang akan terjadi pada waktu reaksi dan energi aktivasi?",
    options: [
      { id: "A", text: "Waktu reaksi > 10 detik, Ea naik" },
      { id: "B", text: "Waktu reaksi < 10 detik, Ea turun" },
      { id: "C", text: "Waktu reaksi = 10 detik, Ea turun" },
      { id: "D", text: "Waktu reaksi < 10 detik, Ea tetap" },
      { id: "E", text: "Waktu reaksi > 10 detik, Ea turun" }
    ],
    answer: "B",
    explanation: "Katalis menurunkan energi aktivasi (Ea), sehingga reaksi menjadi lebih cepat. Karena lebih cepat, waktu yang dibutuhkan untuk bereaksi menjadi lebih singkat (< 10 detik).",
    wrongExplanation: "Katalis selalu mempercepat reaksi (waktu lebih singkat) dengan cara menurunkan Ea."
  },
  {
    id: 19,
    question: "Diketahui reaksi: 2NO(g) + O<sub>2</sub>(g) &rarr; 2NO<sub>2</sub>(g). Jika laju pembentukan NO<sub>2</sub> adalah 0,4 M/s, maka laju pengurangan O<sub>2</sub> adalah...",
    options: [
      { id: "A", text: "0,1 M/s" },
      { id: "B", text: "0,2 M/s" },
      { id: "C", text: "0,4 M/s" },
      { id: "D", text: "0,8 M/s" },
      { id: "E", text: "1,2 M/s" }
    ],
    answer: "B",
    explanation: "Perbandingan laju reaksi sama dengan perbandingan koefisien reaksi. v_O<sub>2</sub> / v_NO<sub>2</sub> = koef_O<sub>2</sub> / koef_NO<sub>2</sub> &rarr; v_O<sub>2</sub> / 0,4 = 1 / 2 &rarr; v_O<sub>2</sub> = 0,2 M/s.",
    wrongExplanation: "Gunakan perbandingan koefisien. Koefisien O<sub>2</sub> adalah 1, sedangkan NO<sub>2</sub> adalah 2. Jadi laju O<sub>2</sub> adalah setengah dari laju NO<sub>2</sub>."
  },
  {
    id: 20,
    question: "Dalam konteks isu sosiosaintifik (SSI), penggunaan obat nyamuk bakar sering diperdebatkan. Dari sudut pandang laju reaksi dan kesehatan, mengapa obat nyamuk elektrik cair lebih disarankan daripada obat nyamuk bakar?",
    options: [
      { id: "A", text: "Obat nyamuk elektrik memiliki energi aktivasi yang lebih tinggi sehingga aman" },
      { id: "B", text: "Reaksi pembakaran pada obat nyamuk bakar menghasilkan gas CO dan partikulat padat dengan laju yang konstan yang berbahaya bagi pernapasan" },
      { id: "C", text: "Obat nyamuk cair bereaksi dengan orde nol terhadap udara" },
      { id: "D", text: "Luas permukaan obat nyamuk bakar terlalu besar sehingga cepat habis" },
      { id: "E", text: "Obat nyamuk elektrik bertindak sebagai inhibitor bagi nyamuk" }
    ],
    answer: "B",
    explanation: "Obat nyamuk bakar melibatkan reaksi pembakaran tidak sempurna yang menghasilkan asap (gas CO dan partikulat) secara terus-menerus (laju konstan) yang terhirup dan berbahaya. Obat nyamuk elektrik hanya menguapkan zat aktif tanpa pembakaran.",
    wrongExplanation: "Pilihan lain menggunakan istilah laju reaksi yang tidak relevan dengan konteks bahaya kesehatan dari asap pembakaran."
  }
];
