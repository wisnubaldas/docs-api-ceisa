# 📦 Backup & Dokumentasi Resmi API CEISA 4.0 (PIA-CEISA40)

Dokumentasi lengkap API CEISA 4.0 (Direktorat Jenderal Bea dan Cukai) yang di-backup dan dipulihkan secara penuh untuk kebutuhan pengembangan dan integrasi sistem pertukaran data kepabeanan & cukai.

> [!NOTE]
> Dokumentasi ini mencakup spesifikasi endpoint HTTP, metode autentikasi OAuth 2.0, struktur header request, skema payload JSON, parameter respon, error handling, serta seluruh kode referensi sistem Pabean, Manifes, Barang Kiriman, dan Cukai.

---

## 🏗️ Struktur Project Honkit (GitBook)

Project ini disusun mengikuti standar konvensi dokumentasi **Honkit / GitBook**:

```text
api-ceisa-gitbook/
├── README.md                      # Halaman utama / Pengantar dokumentasi
├── SUMMARY.md                     # Indeks navigasi & struktur hirarki sidebar
├── book.json                      # Konfigurasi Honkit (Plugins, Title, Theme)
├── package.json                   # Dependensi & skrip pembangunan (`build`, `serve`)
│
├── authentication/                # Spesifikasi Autentikasi & OAuth 2.0
│   └── oauth2.0.md
├── authentication.md
│
├── headers.md                     # Standar Header HTTP API
├── errors.md                      # Kode Respon REST HTTP
├── error-response-code.md         # Kode Respon Error JSON CEISA
├── faq.md                         # Frequently Asked Questions
├── change-log.md                  # Log Perubahan Dokumentasi
│
├── api-services-pabean/           # Modul Service Pabean (Impor, Ekspor, TPB, FTZ, PLB)
│   ├── kirim-dokumen-impor/
│   ├── kirim-dokumen-tpb/
│   ├── kirim-dokumen-ftz/
│   └── kirim-dokumen-plb/
├── api-services-pabean.md
│
├── api-services-barang-kiriman/   # Modul Service Barang Kiriman (CN, PIBK, E-Invoice)
│   ├── daftar-service-impor-barang-kiriman/
│   └── referensi/
├── api-services-barang-kiriman.md
│
├── api-service-manifes/           # Modul Service Manifes & NVOCC
│   ├── nvocc/
│   └── referensi/
├── api-service-manifes.md
│
├── api-service-cukai/             # Modul Service Cukai (CK-1, CK-1C, P3C, LACK-11)
│   ├── cukai-pita-service/
│   ├── cukai-portal-service/
│   ├── pelunasan/
│   ├── pengembalian/
│   ├── perdagangan/
│   ├── produksi/
│   └── referensi/
├── api-service-cukai.md
│
└── referensi/                     # Tabel Kode Referensi Resmi Sistem CEISA 4.0
    ├── referensi-kantor.md
    ├── referensi-negara.md
    ├── referensi-valuta.md
    └── ... (50+ file referensi)
```

---

## 🗂️ Navigasi & Modul Dokumentasi

### 1. 🔑 Panduan & Standar API
- [Authentication & OAuth 2.0](authentication.md) — Panduan autentikasi bearer token OAuth 2.0.
- [Standard Headers](headers.md) — Header HTTP standar wajib dalam tiap permintaan API.
- [REST Response Codes](errors.md) — Kode status respons HTTP (200, 400, 401, 403, 500).
- [Error Response Codes](error-response-code.md) — Kode error internal CEISA (1008, 1023, 1028, 1042).
- [FAQ](faq.md) — Pertanyaan umum seputar penggunaan API.
- [Change Log](change-log.md) — Catatan riwayat revisi dan pembaruan spesifikasi.

### 2. 🛃 Service API Kepabeanan & Cukai
- [API Services Pabean](api-services-pabean.md) — Layanan dokumen Impor, Ekspor, TPB (BC 2.3/2.5/2.7/4.0/4.1), FTZ, dan PLB.
- [API Services Barang Kiriman](api-services-barang-kiriman.md) — Layanan impor/ekspor barang kiriman (CN, PIBK, Billing, E-Invoice, BC 1.4).
- [API Service Manifes](api-service-manifes.md) — Layanan drafting, validasi, pengiriman manifes kapal/pesawat, serta NVOCC.
- [API Service Cukai](api-service-cukai.md) — Layanan pelunasan CK-1/CK-1C, P3C pita cukai, perdagangan CK-5/CK-6, dan produksi EA/MMEA/HT.

### 3. 📑 Kode Referensi Sistem CEISA
- [Tabel Kode Referensi](referensi.md) — Katalog 50+ tabel referensi resmi (Negara, Pelabuhan, Kantor Bea Cukai, Valuta, Dokumen, Jenis Entitas, Kemasan, Satuan, dll.).

---

## 🛠️ Penggunaan Lokal & Build (Honkit CLI)

Dokumentasi ini menggunakan engine **[Honkit](https://github.com/honkit/honkit)**.

### 1. Prasyarat
Pastikan [Node.js](https://nodejs.org/) telah terinstall pada sistem Anda.

### 2. Jalankan Dev Server (Preview Lokal)
Untuk menjalankan web server lokal dengan fitur live-reload:
```bash
npm run serve
```
Buka browser di `http://localhost:4000` untuk melihat dokumentasi.

### 3. Build HTML Static Documentation
Untuk membangun bundel HTML statis (yang akan disimpan di folder `_book`):
```bash
npm run build
```

---

## 📄 Lisensi & Referensi

Dokumentasi ini disusun berdasarkan rujukan resmi Direktorat Jenderal Bea dan Cukai (DJBC) Kementerian Keuangan Republik Indonesia.