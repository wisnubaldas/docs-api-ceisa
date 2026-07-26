# Rekam HT

### Introduction

  * Purpose: API ini digunakan untuk rekam HT

  * Overview: Proses rekam HT mensyaratkan 2 object data dalam bentuk JSON yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck4/rekam-ht`

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

namaPerusahaan

String

Nama perusahaan

DEMANG JAYA PR

idNppbkc

String

ID unik NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai) perusahaan

fe3c9198-1af7-05e6-e054-0021f60abd54

nppbkc

String

Nomor Pokok Pengusaha Barang Kena Cukai

0669986374654000070613

alamatPerusahaan

String

Alamat perusahaan

JALAN DEMANG JAYA 2 NOMOR 03 KREBET SENGGRONG KECAMATAN BULULAWANG KABUPATEN MALANG

jenisLaporan

String

Jenis laporan

Bulanan

nomorPemberitahuan

String

Nomor pemberitahuan terkait laporan

TEST/2024/01/22/03

tanggalPemberitahuan

Date

Tanggal pemberitahuan

2023-11-22

tanggalProduksiAwal

Date Time

Tanggal awal periode produksi

2023-10-01T00:00:00.000+07:00

tanggalProduksiAkhir

Date Time

Tanggal akhir periode produksi

2023-10-31T23:59:59.999+07:00

periodeBulan

String

Bulan periode laporan

Nopember

periodeTahun

String

Tahun periode laporan

2023

totalJumlahKemasan

Integer

Total jumlah kemasan yang diproduksi

120

totalJumlahKemasanDilekatiPita

Integer

Total jumlah kemasan yang dilekati pita cukai

120

totalJumlahProduksiHtBtg

Integer

Total jumlah produksi dalam hitungan batang (Ht)

1440

totalJumlahProduksiHtGr

Integer

Total jumlah produksi dalam hitungan gram (Ht)

0

totalJumlahProduksiHtMl

Integer

Total jumlah produksi dalam hitungan mililiter (Ht)

0

namaKota

String

Nama kota di mana perusahaan berlokasi

Kabupaten Malang

namaPengusaha

String

Nama pengusaha yang mengelola perusahaan

intan

Detail Section

Parameter Name

Type

Description

Example Value

nomorProduksi

String

Nomor produksi terkait barang kena cukai

PRD/01/9

tanggalProduksi

Date Time

Tanggal produksi barang

2023-10-01T17:00:00.000Z

jumlahKemasan

Integer

Jumlah kemasan yang diproduksi

120

jumlahProduksi

Integer

Jumlah barang yang diproduksi

1440

idMerkHt

String

ID unik dari merk HT (Hasil Tembakau)

77a71cf1-1afa-47c0-8dcf-6e166648c9ce

namaMerkHt

String

Nama merk dari HT

SEMBILAN CENGKEH

jenisProduksiHt

String

Jenis produksi HT

SKM

hje

Integer

Harga Jual Eceran

20000

tarif

Integer

Tarif cukai

150

isiPerKemasan

Integer

Isi per kemasan dalam satuan

12

bahanKemasan

String

Jenis bahan yang digunakan untuk kemasan

Kertas Biasa (Soft Pack)

kodeSatuan

String

Kode satuan penghitungan barang

btg

jumlahKemasanDilekatiPita

Integer

Jumlah kemasan yang dilekati pita cukai

120

seriPita

String

Seri pita cukai yang digunakan

-

idJenisKemasan

Integer

ID unik dari jenis kemasan yang digunakan

1

idJenisProduksiBkc

Integer

ID unik dari jenis produksi BKC

12

JSONSchema Rekam HT

{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam HT",
  "description": "JSON Schema untuk Rekam HT.",
  "properties": {
    "namaPerusahaan": {
      "type": "string",
      "description": "Nama perusahaan."
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
    "tanggalProduksiAwal": {
      "type": "string",
      "format": "date-time",
      "description": "Tanggal dan jam produksi awal."
    },
    "tanggalProduksiAkhir": {
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
    "totalJumlahKemasanDilekatiPita": {
      "type": "integer",
      "description": "Total jumlah kemasan yang dilekati pita."
    },
    "totalJumlahProduksiHtBtg": {
      "type": "integer",
      "description": "Total jumlah produksi HT dalam satuan botol."
    },
    "totalJumlahProduksiHtGr": {
      "type": "integer",
      "description": "Total jumlah produksi HT dalam satuan gram."
    },
    "totalJumlahProduksiHtMl": {
      "type": "integer",
      "description": "Total jumlah produksi HT dalam satuan mililiter."
    },
    "namaKota": {
      "type": "string",
      "description": "Nama kota."
    },
    "namaPengusaha": {
      "type": "string",
      "description": "Nama pengusaha."
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
            "format": "date-time",
            "description": "Tanggal produksi."
          },
          "jumlahKemasan": {
            "type": "string",
            "description": "Jumlah kemasan."
          },
          "jumlahProduksi": {
            "type": "string",
            "description": "Jumlah produksi."
          },
          "idMerkHt": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk HT."
          },
          "namaMerkHt": {
            "type": "string",
            "description": "Nama merk HT."
          },
          "jenisProduksiHt": {
            "type": "string",
            "description": "Jenis produksi HT."
          },
          "hje": {
            "type": "integer",
            "description": "HJE (Harga Jual Eceran)."
          },
          "tarif": {
            "type": "integer",
            "description": "Tarif."
          },
          "isiPerKemasan": {
            "type": "integer",
            "description": "Isi per kemasan."
          },
          "bahanKemasan": {
            "type": "string",
            "description": "Bahan kemasan."
          },
          "kodeSatuan": {
            "type": "string",
            "description": "Kode satuan."
          },
          "jumlahKemasanDilekatiPita": {
            "type": "string",
            "description": "Jumlah kemasan yang dilekati pita."
          },
          "seriPita": {
            "type": "string",
            "description": "Seri pita."
          },
          "idJenisKemasan": {
            "type": "integer",
            "description": "ID jenis kemasan."
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
          "idMerkHt",
          "namaMerkHt",
          "jenisProduksiHt",
          "hje",
          "tarif",
          "isiPerKemasan",
          "bahanKemasan",
          "kodeSatuan",
          "jumlahKemasanDilekatiPita",
          "seriPita",
          "idJenisKemasan",
          "idJenisProduksiBkc"
        ]
      }
    }
  },
  "required": [
    "namaPerusahaan",
    "idNppbkc",
    "nppbkc",
    "alamatPerusahaan",
    "jenisLaporan",
    "nomorPemberitahuan",
    "tanggalPemberitahuan",
    "tanggalProduksiAwal",
    "tanggalProduksiAkhir",
    "periodeBulan",
    "periodeTahun",
    "totalJumlahKemasan",
    "totalJumlahKemasanDilekatiPita",
    "totalJumlahProduksiHtBtg",
    "totalJumlahProduksiHtGr",
    "totalJumlahProduksiHtMl",
    "namaKota",
    "namaPengusaha",
    "details"
  ]
}

JSON Example :Rekam HT

{
  "namaPerusahaan": "DEMANG JAYA PR",
  "idNppbkc": "fe3c9198-1af7-05e6-e054-0021f60abd54",
  "nppbkc": "0669986374654000070613",
  "alamatPerusahaan": "JALAN DEMANG JAYA 2 NOMOR 03 KREBET SENGGRONG KECAMATAN BULULAWANG KABUPATEN MALANG",
  "jenisLaporan": "Bulanan",
  "nomorPemberitahuan": "TEST/2024/01/22/03",
  "tanggalPemberitahuan": "2023-11-22",
  "tanggalProduksiAwal": "2023-10-01T00:00:00.000+07:00",
  "tanggalProduksiAkhir": "2023-10-31T23:59:59.999+07:00",
  "periodeBulan": "Nopember",
  "periodeTahun": "2023",
  "totalJumlahKemasan": 120,
  "totalJumlahKemasanDilekatiPita": 120,
  "totalJumlahProduksiHtBtg": 1440,
  "totalJumlahProduksiHtGr": 0,
  "totalJumlahProduksiHtMl": 0,
  "namaKota": "Kabupaten Malang",
  "namaPengusaha": "intan",
  "details": [
    {
      "nomorProduksi": "PRD/01/9",
      "tanggalProduksi": "2023-10-01T17:00:00.000Z",
      "jumlahKemasan": "120",
      "jumlahProduksi": "1440",
      "idMerkHt": "77a71cf1-1afa-47c0-8dcf-6e166648c9ce",
      "namaMerkHt": "SEMBILAN CENGKEH",
      "jenisProduksiHt": "SKM",
      "hje": 20000,
      "tarif": 150,
      "isiPerKemasan": 12,
      "bahanKemasan": "Kertas Biasa (Soft Pack)",
      "kodeSatuan": "btg",
      "jumlahKemasanDilekatiPita": "120",
      "seriPita": "",
      "idJenisKemasan": 1,
      "idJenisProduksiBkc": 12
    }
  ]
}

Validation Rules

Field

Rules

idNppbkc

Harus merupakan UUID yang valid.

tanggalPemberitahuan

Harus dalam format YYYY-MM-DD

tanggalProduksiAwal

Harus dalam format YYYY-MM-DD HH:MM:SS

tanggalProduksiAkhir

Harus dalam format YYYY-MM-DD HH:MM:SS

totalJumlahKemasan

Harus berupa angka positif

totalJumlahKemasanDilekatiPita

Harus berupa angka positif

totalJumlahProduksiHtBtg

Harus berupa angka positif

totalJumlahProduksiHtGr

Harus berupa angka positif

totalJumlahProduksiHtMl

Harus berupa angka positif

tanggalProduksi

Harus dalam format YYYY-MM-DD HH:MM:SS

jumlahKemasan

Harus berupa angka positif

jumlahProduksi

Harus berupa angka positif

idMerkHt

Harus merupakan UUID yang valid.

hje

Harus berupa angka positif

tarif

Harus berupa angka positif

isiPerKemasan

Harus berupa angka positif

jumlahKemasanDilekatiPita

Harus berupa angka positif
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

Last updated 8 months ago

📄
```