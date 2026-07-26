# Rekam Draft Pencarian CK-5

### Introduction

  * Purpose: API ini digunakan untuk rekam CK-1C modul Pelunasan 

  * Overview: Proses rekam CK-1C mensyaratkan 1 object data dalam bentuk JSON

### Path API

`POST` `{API_URL}/portal/ck5/rekam-draft-pencarian`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

```json
"Data": { ... }

Header Section

Parameter Name

Type

Description

Example Value

idCk5Header

String

Identifikasi unik untuk CK5 Header

a261581e-4122-4938-9eee-dfd35fbaccd1

kodeKantor

String

Kode kantor

150300

namaPerusahaanAsal

String

Nama perusahaan asal

PANJANG JIWO PT

komentar

String

Komentar tambahan terkait entitas data, jika ada

kode kantor terlampir

JSONSchema Rekam Draft Pencarian CK-5

{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam Draft Pencarian CK-5",
  "description": "JSON Schema untuk Rekam Draft Pencarian CK-5.",
  "properties": {
    "idCk5Header": {
      "type": "string",
      "format": "uuid",
      "description": "ID CK5 Header, berupa UUID."
    },
    "kodeKantor": {
      "type": "string",
      "description": "Kode kantor."
    },
    "namaPerusahaanAsal": {
      "type": "string",
      "description": "Nama perusahaan asal."
    },
    "komentar": {
      "type": "string",
      "description": "Komentar."
    }
  },
  "required": [
    "idCk5Header",
    "kodeKantor",
    "namaPerusahaanAsal"
  ],
  "message": {
    "required": "Wajib mengisi semua field pada header CK5."
  }
}

JSON Example : Rekam Draft Pencarian CK-5

{
    "idCk5Header": "a261581e-4122-4938-9eee-dfd35fbaccd1",
    "kodeKantor": "150300",
    "namaPerusahaanAsal": "PANJANG JIWO PT",
    "komentar": "Berhasil rekam"
}

Validation Rules

Field

Rules

idCk5Header

Harus merupakan UUID yang valid.
```

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": {
        "idCk5Header": "08157bc9-614c-4ec1-95bb-ad1442e55a81",
        "nomorCk5": null,
        "tanggalCk5": "2024-06-07",
        "nomorAju": "decul",
        "tanggalAju": "2024-06-07",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "idJenisIdentitasPenimbun": null,
        "jenisIdentitasPenimbun": null,
        "nomorIdentitasPenimbunan": null,
        "namaPenimbunan": null,
        "alamatPenimbunan": null,
        "nomorIdentitasPemberitahu": "1374024808880004",
        "namaPemberitahu": "REZHA",
        "alamatPemberitahu": "TEST",
        "idJenisPemberitahuan": 11,
        "jenisPemberitahuan": "1.1. Dibayar - Tunai",
        "idCaraAngkut": null,
        "caraAngkut": null,
        "idCaraPelunasan": 2,
        "caraPelunasan": "Pelekatan Pita Cukai",
        "idStatusCukai": 2,
        "statusCukai": "Sudah Dilunasi",
        "idNppbkcAsal": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisIdentitasAsal": 1,
        "jenisIdentitasAsal": "NPPBKC",
        "nomorIdentitasAsal": "0014539407415000150312",
        "nppbkcAsal": "0014539407415000150312",
        "namaPerusahaanAsal": "PANJANG JIWO PT",
        "alamatPerusahaanAsal": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idNppbkcTujuan": "fe3c9198-1af7-05e6-e054-0021f60abd54",
        "jenisIdentitasTujuan": "NPPBKC",
        "idJenisIdentitasTujuan": 1,
        "nomorIdentitasTujuan": "0669986374654000070613",
        "alamatTujuan": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
        "namaTujuan": "DEMANG JAYA PR",
        "kodeNegaraTujuan": null,
        "kodeKantor": null,
        "namaNegaraTujuan": null,
        "kodeKantorAsal": "150300",
        "namaKantorAsal": "KPPBC TANGERANG",
        "kodeKantorMuat": null,
        "namaKantorMuat": null,
        "pelabuhanMuat": null,
        "kodeKantorSinggah": null,
        "namaKantorSinggah": null,
        "pelabuhanSinggah": null,
        "kodeKantorPenimbunan": null,
        "namaKantorPenimbunan": null,
        "kodeKantorTujuan": "070600",
        "namaKantorTujuan": "KPPBC TMC MALANG",
        "nomorInvoice": null,
        "tanggalInvoice": null,
        "nomorSkepFasilitas": "KEP-MANUAL006",
        "tanggalSkepFasilitas": "0018-09-14T00:00:00.000+00:00",
        "jangkaWaktuSetuju": null,
        "jangkaWaktuMohon": null,
        "totalCukai": 0.02,
        "totalDevisa": 0.0,
        "lhpTujuanMandiri": null,
        "flagImpor": "N",
        "idBack1": null,
        "idProses": "be268fc2-c213-4a0c-b929-a9e60ef912f4",
        "flagH2h": null,
        "npwpPerusahaanAsal": null,
        "flagJenisEkspor": null,
        "nomorPeb": null,
        "tanggalPeb": null,
        "tanggalPengeluaran": null,
        "nomorPersetujuanPerbaikan": null,
        "waktuRekam": "2024-08-22T06:54:30.191+00:00",
        "nomorPersetujuanPembatalan": null,
        "tanggalPersetujuanPerbaikan": null,
        "kodeUploadDasarPerbaikan": null,
        "kodeUploadDasarPembatalan": null,
        "alasanPerbaikan": null,
        "tanggalPersetujuanPembatalan": null,
        "alasanPembatalan": null,
        "kategori": null,
        "kodeUploadBelumPengeluaran": null,
        "idStatusAsal": 1,
        "statusAsal": "Pabrik",
        "idStatusTujuan": 1,
        "statusTujuan": "Pabrik",
        "nilaiTransaksi": null,
        "flagTransaksi": "N",
        "nomorSuratJalan": "laksda12312",
        "tanggalSuratJalan": "2024-05-21T00:00:00.000+00:00",
        "lainnya": null,
        "kodeUploadLainnya": null,
        "kategoriAsal": null,
        "kategoriTujuan": "Kuning",
        "nomorWatchlistAsal": null,
        "nomorWatchlistTujuan": "TEST-WATCHLIST-GUDBAR",
        "kodeAlur": "F1.1",
        "periodeBulan": null,
        "periodeTahun": null,
        "tanggalPengeluaranAwal": null,
        "tanggalPengeluaranAkhir": null,
        "flagPeriodik": null,
        "jumlahKemasan": null,
        "status": "Penelitian dan Persetujuan Asal",
        "flagCk1c": null,
        "idOrderOnline": null,
        "tanggalPermohonanPerbaikan": null,
        "nomorPermohonanPerbaikan": null,
        "nomorPermohonanPembatalan": null,
        "kodeUploadPersetujuanPerbaikan": null,
        "tanggalPermohonanPembatalan": null,
        "kodeUploadPersetujuanPembatalan": null
    }
}

Potential Error

Status Code

Description

Reason

400 Bad Request

Permintaan tidak valid

Parameter tidak lengkap atau format tidak sesuai

401 Unauthorized

Otentikasi gagal

Bearer Token tidak valid atau tidak disertakan dalam header permintaan

404 Not Found

Dokumen tidak ditemukan

Data tidak ditemukan berdasarkan parameter yang diberikan

Last updated 8 months ago

📄
```