# Rekam MMEA

### Introduction

  * Purpose: API ini digunakan untuk rekam MMEA

  * Overview: Proses rekam MMEA mensyaratkan 2 object data dalam bentuk JSON yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck4/rekam-mmea`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

```json
{
  "header": { ... },
  "details": [ ... ]
}

Header Section

Parameter Name

Type

Description

Example Value

npwp

String

Nomor Pokok Wajib Pajak (NPWP)

14539407415000

idNppbkc

String

ID unik NPPBKC

0499af9b-f53b-40c7-b1f8-9b16c9f89b76

nppbkc

String

Nomor Pokok Pengusaha Barang Kena Cukai (NPPBKC)

0014539407415000150312

namaPerusahaan

String

Nama perusahaan yang terkait

PANJANG JIWO PT

alamatPerusahaan

String

Alamat lengkap perusahaan

Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten

jenisLaporan

String

Jenis laporan yang dibuat

HARIAN

nomorPemberitahuan

String

Nomor pemberitahuan

1223232

tanggalPemberitahuan

Date

Tanggal pemberitahuan

2024-08-21

tanggalJamProduksiAwal

Date Time

Tanggal dan waktu dimulainya produksi

2024-08-21 13:26:45

tanggalJamProduksiAkhir

Date Time

Tanggal dan waktu berakhirnya produksi

2024-08-22 13:26:47

periodeBulan

String

Periode bulan produksi

Agustus

periodeTahun

String

Periode tahun produksi

2024

totalJumlahKemasan

Integer

Total jumlah kemasan yang diproduksi

12

totalJumlahProduksi

Integer

Total jumlah barang yang diproduksi

60000

namaPengusaha

String

Nama pengusaha yang terkait

HENDRY

namaKota

String

Nama kota tempat perusahaan berada

TANGERANG

idSpl

String 

ID unik SPL

2

Detail Section

Parameter Name

Type

Description

Example Value

nomorProduksi

String

Nomor produksi

3433

tanggalProduksi

Date

Tanggal produksi

2024-08-21

jumlahKemasan

String

Jumlah kemasan

12

jumlahProduksi

Integer

Jumlah barang yang diproduksi

60000

idMerkMmea

String

ID unik merk MMEA (Minuman Mengandung Etil Alkohol)

8e219058-d4b6-4998-8ea4-ce93e62580ee

merkMmea

String

Nama merk MMEA

MMEA

isi

Integer

Isi per kemasan

5000

tarif

Integer

Tarif yang dikenakan per satuan

8000000

kodeSatuan

String

Kode satuan untuk ukuran volume barang

ltr

namaGolongan

String

Nama golongan barang kena cukai

MMEA GOLONGAN A

keterangan

String

Keterangan tambahan

test

idJenisProduksiBkc

Integer

ID jenis produksi barang kena cukai

13

JSONSchema Rekam MMEA

{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam MMEA",
  "description": "JSON Schema untuk Rekam MMEA.",
  "properties": {
    "npwp": {
      "type": "string",
      "description": "NPWP, harus terdiri dari 15 digit."
    },
    "idNppbkc": {
      "type": "string",
      "format": "uuid",
      "description": "ID NPPBKC."
    },
    "nppbkc": {
      "type": "string",
      "description": "NPPBKC, harus terdiri dari 22 digit."
    },
    "namaPerusahaan": {
      "type": "string",
      "description": "Nama perusahaan."
    },
    "alamatPerusahaan": {
      "type": "string",
      "description": "Alamat perusahaan."
    },
    "jenisLaporan": {
      "type": "string",
      "enum": ["HARIAN", "MINGGUAN", "BULANAN"],
      "description": "Jenis laporan."
    },
    "nomorPemberitahuan": {
      "type": "string",
      "description": "Nomor pemberitahuan."
    },
    "tanggalPemberitahuan": {
      "type": "string",
      "format": "date",
      "description": "Tanggal pemberitahuan."
    },
    "tanggalJamProduksiAwal": {
      "type": "string",
      "format": "date-time",
      "description": "Tanggal dan jam produksi awal."
    },
    "tanggalJamProduksiAkhir": {
      "type": "string",
      "format": "date-time",
      "description": "Tanggal dan jam produksi akhir."
    },
    "periodeBulan": {
      "type": "string",
      "description": "Periode bulan."
    },
    "periodeTahun": {
      "type": "string",
      "description": "Periode tahun."
    },
    "totalJumlahKemasan": {
      "type": "integer",
      "description": "Total jumlah kemasan."
    },
    "totalJumlahProduksi": {
      "type": "integer",
      "description": "Total jumlah produksi."
    },
    "details": {
      "type": "array",
      "description": "Data detail produksi.",
      "items": {
        "type": "object",
        "properties": {
          "nomorProduksi": {
            "type": "string",
            "description": "Nomor produksi."
          },
          "tanggalProduksi": {
            "type": "string",
            "format": "date",
            "description": "Tanggal produksi."
          },
          "jumlahKemasan": {
            "type": "string",
            "description": "Jumlah kemasan."
          },
          "jumlahProduksi": {
            "type": "integer",
            "description": "Jumlah produksi."
          },
          "idMerkMmea": {
            "type": "string",
            "format": "uuid",
            "description": "ID Merk MMEA."
          },
          "merkMmea": {
            "type": "string",
            "description": "Merk MMEA."
          },
          "isi": {
            "type": "integer",
            "description": "Isi produk."
          },
          "tarif": {
            "type": "integer",
            "description": "Tarif."
          },
          "kodeSatuan": {
            "type": "string",
            "description": "Kode satuan."
          },
          "namaGolongan": {
            "type": "string",
            "description": "Nama golongan."
          },
          "keterangan": {
            "type": "string",
            "description": "Keterangan."
          },
          "idJenisProduksiBkc": {
            "type": "integer",
            "description": "ID jenis produksi BKC."
          }
        },
        "required": [
          "nomorProduksi",
          "tanggalProduksi",
          "jumlahKemasan",
          "jumlahProduksi",
          "idMerkMmea",
          "merkMmea",
          "isi",
          "tarif",
          "kodeSatuan",
          "namaGolongan",
          "keterangan",
          "idJenisProduksiBkc"
        ]
      }
    },
    "namaPengusaha": {
      "type": "string",
      "description": "Nama pengusaha."
    },
    "namaKota": {
      "type": "string",
      "description": "Nama kota."
    },
    "idSpl": {
      "type": "string",
      "description": "ID SPL"
    }
  },
  "required": [
    "npwp",
    "idNppbkc",
    "nppbkc",
    "namaPerusahaan",
    "alamatPerusahaan",
    "jenisLaporan",
    "nomorPemberitahuan",
    "tanggalPemberitahuan",
    "tanggalJamProduksiAwal",
    "tanggalJamProduksiAkhir",
    "periodeBulan",
    "periodeTahun",
    "totalJumlahKemasan",
    "totalJumlahProduksi",
    "details",
    "namaPengusaha",
    "namaKota",
    "idSpl"
  ]
}

JSON Example : Rekam MMEA

{
    "npwp": "0014539407415000",
    "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
    "nppbkc": "0014539407415000150312",
    "namaPerusahaan": "PANJANG JIWO PT",
    "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
    "jenisLaporan": "HARIAN",
    "nomorPemberitahuan": "1223232",
    "tanggalPemberitahuan": "2024-08-21",
    "tanggalJamProduksiAwal": "2024-08-21T13:26:45",
    "tanggalJamProduksiAkhir": "2024-08-22T13:26:47",
    "periodeBulan": "Agustus",
    "periodeTahun": "2024",
    "totalJumlahKemasan": 12,
    "totalJumlahProduksi": 60000,
    "details": [
        {
            "nomorProduksi": "3433",
            "tanggalProduksi": "2024-08-21",
            "jumlahKemasan": "12",
            "jumlahProduksi": 60000,
            "idMerkMmea": "8e219058-d4b6-4998-8ea4-ce93e62580ee",
            "merkMmea": "MMEA",
            "isi": 5000,
            "tarif": 8000000,
            "kodeSatuan": "ltr",
            "namaGolongan": "MMEA GOLONGAN A",
            "keterangan": "test",
            "idJenisProduksiBkc": 13
        }
    ],
    "namaPengusaha": "HENDRY",
    "namaKota": "TANGERANG",
    "idSpl": null
}

Validation Rules
```

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": null
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

Last updated 9 months ago

📄
```