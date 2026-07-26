# Rekam EA

### Introduction

  * Purpose: API ini digunakan untuk rekam EA

  * Overview: Proses rekam EA mensyaratkan 2 object data dalam bentuk JSON yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck4/rekam-ea`

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

idNppbkc

String

ID unik NPPBKC

fe3c9197-df48-05e6-e054-0021f60abd54

jenisLaporan

String

Jenis laporan yang dibuat

HARIAN

jumlahProduksi

Integer

Jumlah total produksi

100

namaKota

String

Nama kota tempat perusahaan berada

MALANG

namaPengusaha

String

Nama pengusaha yang terkait

IR. SANDOJO RUSTANTO

namaPerusahaan

String

Nama perusahaan yang terkait

MOLINDO RAYA INDUSTRIAL, PT.

nomorPemberitahuan

String

Nomor pemberitahuan terkait

87767776

nppbkc

String

Nomor Pokok Pengusaha Barang Kena Cukai (NPPBKC)

0011335387641000070611

npwp

String

Nomor Pokok Wajib Pajak (NPWP)

11335387641000

tanggalJamProduksiAwal

DateTime

Tanggal dan waktu dimulainya produksi

2024-08-21 13:22:14

tanggalJamProduksiAkhir

DateTime

Tanggal dan waktu berakhirnya produksi

2024-08-22 13:22:18

tanggalPemberitahuan

Date

Tanggal pemberitahuan terkait

2024-08-21

alamatPerusahaan

String

Alamat lengkap perusahaan

JL. PANDANARAN NO. 6

idSpl

String

ID unik SPL

2

Detail Section

Parameter Name

Type

Description

Example Value

jumlahProduksi

String

Jumlah produksi

100

keterangan

String

Keterangan

test

nomorProduksi

String

Nomor produksi

785785

nomorTangki

String

Nomor tangki yang digunakan dalam produksi

90

tanggalProduksi

DateTime

Tanggal produksi

2024-08-22 13:22:28

kadar

Integer

Kadar barang yang diproduksi

96

namaMerk

String

Nama merk barang yang diproduksi

Ea Murni Kadar 96%

tarifSpesifik

Integer

Tarif spesifik yang dikenakan

20000

idJenisProduksiBkc

Integer

ID jenis produksi barang kena cukai

18

idMerk

String

ID unik merk barang yang diproduksi

630f97d4-d15e-4636-833c-9305755429c4

idHandleDelete

String

ID unik untuk menghapus data terkait

45f40026-06eb-4f37-bbc0-ee7989d9a16f

JSONSchema Rekam EA

{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam EA",
  "description": "JSON Schema untuk Rekam EA.",
  "properties": {
    "idNppbkc": {
      "type": "string",
      "format": "uuid",
      "description": "ID NPPBKC."
    },
    "jenisLaporan": {
      "type": "string",
      "description": "Jenis laporan.",
      "enum": ["HARIAN", "MINGGUAN", "BULANAN"]
    },
    "jumlahProduksi": {
      "type": "integer",
      "description": "Jumlah produksi."
    },
    "namaKota": {
      "type": "string",
      "description": "Nama kota."
    },
    "namaPengusaha": {
      "type": "string",
      "description": "Nama pengusaha."
    },
    "namaPerusahaan": {
      "type": "string",
      "description": "Nama perusahaan."
    },
    "nomorPemberitahuan": {
      "type": "string",
      "description": "Nomor pemberitahuan."
    },
    "nppbkc": {
      "type": "string",
      "description": "NPPBKC, harus terdiri dari 22 digit."
    },
    "npwp": {
      "type": "string",
      "description": "NPWP, harus terdiri dari 15 digit."
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
    "tanggalPemberitahuan": {
      "type": "string",
      "format": "date",
      "description": "Tanggal pemberitahuan."
    },
    "alamatPerusahaan": {
      "type": "string",
      "description": "Alamat perusahaan."
    },
    "details": {
      "type": "array",
      "description": "Data detail produksi.",
      "items": {
        "type": "object",
        "properties": {
          "jumlahProduksi": {
            "type": "string",
            "description": "Jumlah produksi."
          },
          "keterangan": {
            "type": "string",
            "description": "Keterangan."
          },
          "nomorProduksi": {
            "type": "string",
            "description": "Nomor produksi."
          },
          "nomorTangki": {
            "type": "string",
            "description": "Nomor tangki."
          },
          "tanggalProduksi": {
            "type": "string",
            "format": "date-time",
            "description": "Tanggal produksi."
          },
          "kadar": {
            "type": "integer",
            "description": "Kadar."
          },
          "namaMerk": {
            "type": "string",
            "description": "Nama merk."
          },
          "tarifSpesifik": {
            "type": "number",
            "description": "Tarif spesifik."
          },
          "idJenisProduksiBkc": {
            "type": "integer",
            "description": "ID jenis produksi BKC."
          },
          "idMerk": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk."
          },
          "idHandleDelete": {
            "type": "string",
            "format": "uuid",
            "description": "ID handle delete."
          }
        },
        "required": [
          "jumlahProduksi",
          "keterangan",
          "nomorProduksi",
          "nomorTangki",
          "tanggalProduksi",
          "kadar",
          "namaMerk",
          "tarifSpesifik",
          "idJenisProduksiBkc",
          "idMerk",
          "idHandleDelete"
        ]
      }
    },
    "idSpl": {
      "type": "string",
      "description": "ID SPL."
    }
  },
  "required": [
    "idNppbkc",
    "jenisLaporan",
    "jumlahProduksi",
    "namaKota",
    "namaPengusaha",
    "namaPerusahaan",
    "nomorPemberitahuan",
    "nppbkc",
    "npwp",
    "tanggalJamProduksiAwal",
    "tanggalJamProduksiAkhir",
    "tanggalPemberitahuan",
    "alamatPerusahaan",
    "details",
    "idSpl"
  ]
}

JSON Example : Rekam EA

{
    "idNppbkc": "fe3c9197-df48-05e6-e054-0021f60abd54",
    "jenisLaporan": "HARIAN",
    "jumlahProduksi": 100,
    "namaKota": "MALANG",
    "namaPengusaha": "IR. SANDOJO RUSTANTO",
    "namaPerusahaan": "MOLINDO RAYA INDUSTRIAL, PT.",
    "nomorPemberitahuan": "87767776",
    "nppbkc": "0011335387641000070611",
    "npwp": "0011335387641000",
    "tanggalJamProduksiAwal": "2024-08-21T13:22:14",
    "tanggalJamProduksiAkhir": "2024-08-22T13:22:18",
    "tanggalPemberitahuan": "2024-08-21",
    "alamatPerusahaan": "JL. PANDANARAN NO. 6",
    "details": [
        {
            "jumlahProduksi": "100",
            "keterangan": "test",
            "nomorProduksi": "785785",
            "nomorTangki": "90",
            "tanggalProduksi": "2024-08-22T13:22:28",
            "kadar": 96,
            "namaMerk": "Ea Murni Kadar 96%",
            "tarifSpesifik": 20000,
            "idJenisProduksiBkc": 18,
            "idMerk": "630f97d4-d15e-4636-833c-9305755429c4",
            "idHandleDelete": "45f40026-06eb-4f37-bbc0-ee7989d9a16f"
        }
    ],
    "idSpl": "2"
}

Validation Rules

Field

Rules

idNppbkc

Harus merupakan UUID yang valid.

jumlahProduksi

Harus berupa angka positif

tanggalJamProduksiAwal

Harus dalam format DDD MMM DD YYYY HH:M:S

tanggalJamProduksiAkhir

Harus dalam format DDD MMM DD YYYY HH:M:S

tanggalPemberitahuan

Harus dalam format YYYY-MM-DD

jumlahProduksi

Harus berupa angka positif

tanggalProduksi

Harus dalam format DDD MMM DD YYYY HH:M:S

kadar

Harus berupa angka positif

tarifSpesifik

Harus berupa angka positif

idMerk

Harus merupakan UUID yang valid.

idHandleDelete

Harus merupakan UUID yang valid.
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

Last updated 1 year ago
```