# Notes App (Aplikasi Catatan)

Ini adalah aplikasi web front-end untuk membuat dan mengelola catatan sederhana. Aplikasi ini dibangun menggunakan teknologi web modern, termasuk **JavaScript Modules**, **Custom Elements**, dan dibundel menggunakan **Webpack**. Semua catatan disimpan di Local Storage browser, sehingga data tidak akan hilang bahkan setelah halaman ditutup.

---

### ✨ Fitur Utama

* **Buat Catatan Baru:** Pengguna dapat menambahkan catatan baru dengan judul dan isi.
* **Daftar Catatan Aktif & Arsip:** Catatan dipisahkan menjadi dua bagian: "Catatan Aktif" untuk catatan yang masih relevan dan "Arsip" untuk catatan yang sudah selesai.
* **Arsipkan & Pindahkan Catatan:** Pengguna dapat memindahkan catatan dari aktif ke arsip, dan sebaliknya.
* **Hapus Catatan:** Catatan dapat dihapus secara permanen.
* **Desain Responsif:** Tampilan aplikasi menyesuaikan dengan berbagai ukuran layar, dari desktop hingga mobile.
* **Penyimpanan Lokal:** Memanfaatkan Web Storage API untuk menyimpan semua data catatan di browser pengguna.

---

### 💻 Teknologi yang Digunakan

* **HTML5**
* **CSS3** (dengan layout Grid untuk responsivitas)
* **JavaScript Modern (ES6+)**
    * **Custom Elements** untuk membuat komponen UI yang modular (`<note-list>`, `<note-item>`, dll).
    * **Modules (import/export)** untuk mengorganisir kode.
    * **Web Storage API (Local Storage)** untuk persistensi data.
* **Webpack** sebagai *module bundler* untuk menggabungkan semua file JavaScript dan aset menjadi satu.
* **SweetAlert2** untuk menampilkan notifikasi dan konfirmasi yang interaktif.

---

### Cara Menjalankan di Komputer/Device Anda

Proyek ini menggunakan Webpack, sehingga memerlukan beberapa langkah untuk menjalankannya secara lokal.

1.  **Unduh atau Clone Repository:**
    * Unduh dan ekstrak file ZIP dari repository ini, atau clone menggunakan Git.

2.  **Install Dependensi:**
    * Buka terminal atau command prompt di dalam folder proyek.
    * Jalankan perintah berikut untuk meng-install semua library yang dibutuhkan:
        ```bash
        npm install
        ```

3.  **Jalankan Development Server:**
    * Setelah instalasi selesai, jalankan perintah ini:
        ```bash
        npm run start-dev
        ```
    * Perintah ini akan membuka aplikasi secara otomatis di browser Anda, biasanya di alamat `http://localhost:8080`.

---

### 📂 Struktur File

* `/src`: Folder utama yang berisi semua kode sumber (JavaScript, HTML, CSS, dan komponen).
* `/dist`: Folder berisi hasil *build* dari Webpack yang siap untuk di-deploy.
* `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js`: File konfigurasi untuk Webpack.
* `package.json`: Berisi daftar dependensi dan skrip untuk menjalankan proyek.
