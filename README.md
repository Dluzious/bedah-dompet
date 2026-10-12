# Bedah Dompet: ikon aplikasi

Halaman kecil ini membungkus aplikasi Bedah Dompet (Google Apps Script) supaya bisa dipasang sebagai ikon di layar utama HP, lengkap dengan logo dan nama "Bedah Dompet".

Halaman ini tidak menyimpan atau membaca data keuangan apa pun. Isi aplikasi tetap dimuat langsung dari Google Apps Script, dan datanya tetap berada di Google Sheet milik pemilik akun.

## Isi folder

| File | Fungsi |
| --- | --- |
| `index.html` | Halaman pembungkus: membuka aplikasi, layar "Hubungkan", layar offline |
| `manifest.webmanifest` | Nama, warna, dan ikon saat dipasang di Android |
| `sw.js` | Menyimpan halaman pembungkus agar ikon cepat terbuka |
| `icon-192.png`, `icon-512.png` | Ikon utama |
| `icon-maskable-192.png`, `icon-maskable-512.png` | Ikon Android yang aman dipotong bulat atau kotak |
| `apple-touch-icon.png` | Ikon iPhone dan iPad |
| `favicon.ico`, `favicon-32.png` | Ikon tab browser |

## Cara pakai singkat

1. Unggah semua file di folder ini ke repository GitHub baru, misalnya `bedah-dompet`.
2. Buka **Settings → Pages**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
3. Bagikan tautan dengan format berikut:

```
https://USERNAME.github.io/bedah-dompet/?app=ALAMAT_EXEC
```

`ALAMAT_EXEC` adalah URL aplikasi web dari Apps Script (berakhiran `/exec`).

4. Penerima membuka tautan itu sekali, lalu memilih **Tambahkan ke Layar Utama** (iPhone: tombol Bagikan di Safari; Android: menu ⋮ di Chrome).

Bila halaman ini hanya untuk satu aplikasi, isi `ALAMAT_BAWAAN` di `index.html` agar tautan tidak perlu `?app=`.

Untuk mengganti alamat yang tersimpan di sebuah HP, buka `https://USERNAME.github.io/bedah-dompet/?atur`.
