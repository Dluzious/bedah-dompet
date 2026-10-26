# Bedah Dompet: aplikasi terpasang (laptop dan HP)

Halaman ini membuat Bedah Dompet bisa dipasang seperti aplikasi: punya ikon di desktop atau layar HP,
terbuka di jendela sendiri tanpa tab dan bilah alamat browser. Isinya tetap aplikasi pusat di Apps Script;
tidak ada data keuangan yang tersimpan di sini.

1. Isi URL aplikasi pusat (berakhiran `/exec`) di **dua** tempat, dengan alamat yang persis sama:
   - `index.html`: ganti `TEMPEL_ALAMAT_EXEC_DI_SINI` (di dalam tanda kutip).
   - `bedah-dompet.mobileconfig`: ganti `TEMPEL_ALAMAT_EXEC_DI_SINI` (di antara `<string>` dan `</string>`).
   Bila alamat di profil kosong atau berbeda, iPhone otomatis memakai cara lama (ikon tanpa logo).
2. Unggah semua file folder ini ke repository GitHub publik (misalnya `bedah-dompet`), lalu aktifkan
   Settings › Pages › Deploy from a branch › `main` › `/ (root)`.
3. Alamat untuk pembeli: `https://USERNAME.github.io/bedah-dompet/`

Pemasangan oleh pembeli:
- Laptop (Chrome/Edge): buka alamat di atas › ikon pasang di ujung kanan bilah alamat › Instal.
- Android (Chrome): menu ⋮ › Instal aplikasi.
- iPhone (Safari): buka alamat di atas › **Pasang ikon Bedah Dompet** › Izinkan › Pengaturan › Profil Telah Diunduh ›
  Pasang. Ikon berlogo dan terbuka layar penuh. Cadangan tanpa profil: tautan "Pakai cara lain tanpa profil".
- iPad (Safari): Bagikan › Tambah ke Layar Utama.

Bila alamat `/exec` berubah, perbarui kedua file. Pembeli iPhone perlu memasang profil baru
(profil lama tetap mengarah ke alamat lama).
