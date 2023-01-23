# Proyek Web SI DOMANI (Sistem Pakar Diagnosis Malnutrisi Anak Balita)

> SI DOMANI merupakan sebuah web dengan basis sistem pakar yang digunakan untuk memudahkan orang tua dalam memantau tumbuh kembang anak di bawah usia 60 bulan sesuai dengan petunjuk Kementerian Kesehatan dalam Peraturan Menteri Kesehatan Republik Indonesia Nomor 02 Tahun 2020 tentang Standar Antropometri Anak. Orang tua dapat menggunakan SI DOMANI untuk melakukan diagnosis awal dengan mengetahui gejala-gejala yang menghambat tumbuh kembang anak di bawah usia 60 bulan dan akan dilanjutkan ke pihak kesehatan agar dapat ditangani lebih lanjut.

### Tentang Web SI DOMANI

SI DOMANI merupakan kependekan dari Sistem Pakar Diagnosis Malnutrisi Anak Balita dalam bentuk web yang dibangun oleh Adhitya Bagus Wicaksono dalam waktu ± 7 hari. Data pengetahuan yang digunakan di dalam web ini diperoleh dari artikel ilmiah "[Aplikasi 'GIZIe' Untuk Mengetahui Status Gizi Balita Menggunakan Metode Forward Chaining](http://jurnal.iaii.or.id/index.php/RESTI/article/view/908)" yang ditulis oleh Fiby Nur Afiana dan Ika Romadoni Yunita dari STMIK Amikom Purwokerto.

### Mekanisme Pemilihan Diagnosis dalam Web SI DOMANI

Web ini dapat melakukan diagnosis malnutrisi pada anak balita menggunakan metode Forward Chaining berbentuk `IF-ELSE` berdasarkan data yang telah dimasukkan oleh pengguna melalui formulir yang diberikan. Hal tersebut membuat setiap jawaban yang diberikan dapat memengaruhi hasil yang akan diberikan oleh sistem. Namun, sistem ini memiliki kelemahan di mana sistemnya harus menggunakan aturan yang pasti dan tidak dapat diubah-ubah. Sehingga, apabila ada satu data yang salah dimasukkan, maka akan menghasilkan jawaban yang tidak dapat ditemukan oleh sistem jika sistem tidak memiliki jawaban yang sangat tepat.

### Mekanisme Pembangunan Web SI DOMANI

Web SI DOMANI dibangun tanpa menggunakan framework web, sehingga dari tahap desain menggunakan fitur di dalam Figma sampai implementasi web menggunakan HTML, CSS, dan JavaScript murni. Untuk data pengetahuan disimpan di dalam format JSON.

### Peta Situs Web SI DOMANI

Web ini terdiri dari 4 halaman, yaitu:
+ _Bagian Beranda_
    
  Berisi halaman pembuka ketika pengguna memasuki web SI DOMANI.
    
+ _Bagian Periksa_

  Berisi formulir yang digunakan oleh pengguna untuk mendapatkan hasil diagnosis yang didapat dari kondisi anak balita.

+ _Bagian Tutorial_

  Berisi tata cara penggunaan web SI DOMANI bagi pemula.

+ _Bagian Tentang_

  Berisi pengetahuan mengenai SI DOMANI, kredit pengetahuan yang digunakan di dalam web SI DOMANI, dan kredit pembangun web SI DOMANI.

### Alamat Web SI DOMANI

SI DOMANI dapat diakses menggunakan tautan https://adhityabaguswicaksono.github.io/sidomani-project

###### Pembaruan Terakhir: 23 Januari 2023
