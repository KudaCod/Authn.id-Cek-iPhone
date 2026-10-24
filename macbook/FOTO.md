# Daftar foto untuk form Cek MacBook

Unggah foto ke folder `macbook/img/contoh/` dengan **nama file persis** seperti di bawah (format `.jpg`).
Selama file belum ada, gambar otomatis disembunyikan di form. Begitu file diunggah, gambar langsung muncul — tidak perlu ubah kode.

Kode varian:
- **-new** = screenshot dari macOS 13 ke atas (Ventura, Sonoma, Sequoia, Tahoe — menu *System Settings*)
- **-old** = screenshot dari macOS 12 ke bawah (Monterey dan lebih lama — menu *System Preferences*)
- tanpa akhiran = satu foto untuk semua MacBook

Tip: screenshot jendela di Mac dengan **Command + Shift + 4**, lalu tekan **Spasi** dan klik jendelanya. Tidak perlu foto per tipe MacBook.

## Screenshot pengaturan (perlu versi -new dan -old)

| File | Isi | Dipakai di poin |
|---|---|---|
| mac-about-new.jpg / mac-about-old.jpg | Jendela About This Mac | Versi macOS, Spesifikasi |
| mac-findmy-new.jpg / mac-findmy-old.jpg | Apple ID › iCloud › Find My Mac | Apple ID & Find My |
| mac-profiles-new.jpg / mac-profiles-old.jpg | Device Management / Profiles (kosong) | MDM |
| mac-truetone-new.jpg / mac-truetone-old.jpg | Displays (opsi True Tone) | True Tone |
| mac-touchid-new.jpg / mac-touchid-old.jpg | Touch ID & Password | Touch ID |
| mac-battery-new.jpg / mac-battery-old.jpg | Battery Health (Maximum Capacity) | Kondisi baterai, Maximum Capacity |
| mac-sound-new.jpg / mac-sound-old.jpg | Sound › Output (slider Balance) | Speaker |

## Screenshot yang sama untuk semua MacBook

| File | Isi | Dipakai di poin |
|---|---|---|
| mac-sysreport-hardware.jpg | System Information › Hardware (tandai Serial, Model Number, Activation Lock Status) | Activation Lock, Model Number |
| mac-sysreport-power.jpg | System Information › Power (tandai Cycle Count & Condition) | Kondisi baterai, Cycle Count |
| mac-sysreport-charger.jpg | System Information › Power › AC Charger Information | Pengisian daya |
| mac-sysreport-nvme.jpg | System Information › Storage/NVMExpress (S.M.A.R.T. Verified) | SSD |
| mac-terminal-mdm.jpg | Terminal: hasil `profiles status -type enrollment` | MDM |
| mac-terminal-panic.jpg | Terminal: hasil `ls /Library/Logs/DiagnosticReports \| grep -i panic` | Kernel panic |
| mac-parts-service.jpg | General › About › Parts & Service (khusus Apple Silicon + macOS 26) | Riwayat komponen |
| mac-coverage.jpg | Halaman checkcoverage.apple.com (sensor nomor seri) | Cek garansi |
| mac-diag-hasil.jpg | Hasil Apple Diagnostics | Apple Diagnostics |
| mac-startup-as.jpg | Layar Startup Options Apple Silicon | Apple Diagnostics |
| mac-remote-management.jpg | Layar Remote Management saat setup (contoh red flag) | MDM |
| mac-fwlock-intel.jpg | Layar gembok firmware password (Intel) | Firmware lock |
| mac-pinlock-intel.jpg | Layar PIN lock iCloud (Intel) | Firmware lock |

## Foto fisik & contoh kerusakan

| File | Isi |
|---|---|
| mac-serial-bodi.jpg | Ukiran nomor seri di bodi bawah |
| mac-dus-label.jpg | Label nomor seri & model di dus |
| mac-keyboard-layout.jpg | Perbandingan keyboard US, UK, JIS |
| mac-baut-bawah.jpg | Baut pentalobe bodi bawah (normal vs dol) |
| mac-dead-pixel.jpg | Contoh dead pixel / white spot |
| mac-staingate.jpg | Contoh staingate |
| mac-flexgate.jpg | Contoh stage light (flexgate) |
| mac-pressure-mark.jpg | Contoh bekas tekanan keyboard di layar |
| mac-baterai-bengkak.jpg | Contoh bodi bawah / trackpad terangkat karena baterai bengkak |
| mac-port-korosi.jpg | Contoh korosi di port |

Pakai foto dari unit yang dicek sendiri, jangan ambil dari internet.

## Foto produk (opsional, untuk slider tipe & halaman hasil)

Folder `macbook/img/produk/`, format `.png` latar transparan, nama `<keluarga>-<warna>.png`.
Selama belum ada, form memakai ilustrasi laptop 2D. Setelah mengganti foto, naikkan angka `FOTO_V` di `index.html`.

| Keluarga | Tipe | Warna |
|---|---|---|
| air-2015 | MacBook Air 13" 2015–2017 | silver |
| macbook-12 | MacBook 12" | space-gray, silver, gold, rose-gold |
| pro-2015 | MacBook Pro 2015 | silver |
| pro-2016 | MacBook Pro 13"/15" 2016–2020, Pro 13" M1/M2 | space-gray, silver |
| pro-16-2019 | MacBook Pro 16" 2019 | space-gray, silver |
| air-2018 | MacBook Air 2018–2020, Air M1 | space-gray, silver, gold |
| pro-notch | MacBook Pro 14"/16" 2021 ke atas | space-gray, space-black, silver |
| air-notch | MacBook Air M2 ke atas | midnight, starlight, space-gray, silver, sky-blue |
| neo | MacBook Neo | silver, indigo, blush, citrus |

Contoh: `pro-notch-space-black.png`, `air-notch-midnight.png`.
