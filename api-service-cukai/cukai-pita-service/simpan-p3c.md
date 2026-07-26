# Simpan P3C

### Introduction

  * Purpose: API ini digunakan untuk menyimpan P3C pada modul Perdagangan

  * Overview: Proses simpan P3C mensyaratkan 2 object data dalam bentuk JSON yaitu Header dan Detail

### Path API

`POST` `{API_URL}/simpanP3c`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

```json
{
  "header": { ... },
  "details": [ ... ]
}

Header Section >> saveHeaderPojo

Parameter Name

Type

Description

Example Value

idJenisP3c

Integer

ID jenis P3C

1

alamatPerusahaan

String

Alamat lengkap perusahaan

Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten

ambilPitaCukai

String

Kode pengambilan pita cukai

KC

bulanPersediaan

String

Bulan dan tahun persediaan dalam format MMYYYY

92024

idJenisBkc

Integer

ID jenis BKC

2

idJenisPeriodeP3c

Integer

ID jenis periode P3C

1

idNppbkc

String

ID NPPBKC

0499af9b-f53b-40c7-b1f8-9b16c9f89b76

kodeKantor

String

Kode kantor

150300

namaJenisBkc

String

Nama jenis BKC

-

namaJenisPeriodeP3C

String

Nama jenis periode P3C

Awal

namaPejabat

String

Nama pejabat yang bertanggung jawab

HENDRY

namaPerusahaan

String

Nama perusahaan

PANJANG JIWO PT

nppbkc

String

Nomor pokok perusahaan barang kena cukai

0014539407415000150312

npwp

String

Nomor pokok wajib pajak

14539407415000

idJenisUsaha

Integer

ID jenis usaha

1

tanggalPermohonan

String

Tanggal permohonan dalam format YYYY-MM-DD

2024-08-01

Detail Section >> savePitaCukaiDto

Parameter Name

Type

Description

Example Value

hje

Integer

Harga Jual Eceran

100

idGolonganBkc

Integer

ID golongan BKC

4

idJenisPitaCukai

String

ID jenis pita cukai

dcc40afb-ff8b-4443-898d-22dde87b9e2c

idJenisProduksiBkc

Integer

ID jenis produksi BKC

13

idSeripita

Integer

ID seri pita

5

isiVolume

Integer

Isi volume pita cukai dalam ml

600

jumlahCukai

Integer

Jumlah cukai

5400000

jumlahPesan

Integer

Jumlah pesanan

10

jumlahRekomendasi

Integer

Jumlah rekomendasi

0

kodeJenisProduksiBkc

String

Kode jenis produksi BKC

A

kodeWarna

String

Kode warna pita cukai

HI

maksimalPesan

Integer

Maksimal jumlah pesanan

0

namaGolonganBkc

String

Nama golongan BKC

IMPORTIR

namaSeripita

String

Nama seri pita

I

personalisasi

String

Personalisasi pita

-

tahunPita

Integer

Tahun pita cukai

2023

tarif

Integer

Tarif cukai per satuan

15000

warna

String

Warna pita cukai

Hijau

flagKawasanBebas

String

Flag kawasan bebas

N

kodeSatuan

String

Kode satuan

btg

JSONSchema Simpan P3C

{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Simpan P3C",
  "description": "JSON Schema untuk Simpan P3C.",
  "properties": {
    "saveHeaderPojo": {
      "type": "object",
      "properties": {
        "idJenisP3c": {
          "type": "integer",
          "description": "ID Jenis P3C."
        },
        "alamatPerusahaan": {
          "type": "string",
          "description": "Alamat perusahaan."
        },
        "ambilPitaCukai": {
          "type": "string",
          "description": "Ambil pita cukai."
        },
        "bulanPersediaan": {
          "type": "string",
          "description": "Bulan persediaan dalam format MMYYYY."
        },
        "idJenisBkc": {
          "type": "integer",
          "description": "ID Jenis BKC."
        },
        "idJenisPeriodeP3c": {
          "type": "integer",
          "description": "ID Jenis Periode P3C."
        },
        "idNppbkc": {
          "type": "string",
          "format": "uuid",
          "description": "ID NPPBKC."
        },
        "kodeKantor": {
          "type": "string",
          "description": "Kode kantor."
        },
        "namaJenisBkc": {
          "type": "string",
          "description": "Nama jenis BKC."
        },
        "namaJenisPeriodeP3C": {
          "type": "string",
          "description": "Nama jenis periode P3C."
        },
        "namaPejabat": {
          "type": "string",
          "description": "Nama pejabat."
        },
        "namaPerusahaan": {
          "type": "string",
          "description": "Nama perusahaan."
        },
        "nppbkc": {
          "type": "string",
          "description": "NPPBKC."
        },
        "npwp": {
          "type": "string",
          "description": "NPWP."
        },
        "idJenisUsaha": {
          "type": "integer",
          "description": "ID Jenis usaha."
        },
        "tanggalPermohonan": {
          "type": "string",
          "format": "date",
          "description": "Tanggal permohonan."
        }
      },
      "required": [
        "idJenisP3c",
        "alamatPerusahaan",
        "ambilPitaCukai",
        "bulanPersediaan",
        "idJenisBkc",
        "idJenisPeriodeP3c",
        "idNppbkc",
        "kodeKantor",
        "namaJenisBkc",
        "namaJenisPeriodeP3C",
        "namaPejabat",
        "namaPerusahaan",
        "nppbkc",
        "npwp",
        "idJenisUsaha",
        "tanggalPermohonan"
      ]
    },
    "savePitaCukaiDto": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "hje": {
            "type": "integer",
            "description": "Harga jual eceran."
          },
          "idGolonganBkc": {
            "type": "integer",
            "description": "ID Golongan BKC."
          },
          "idJenisPitaCukai": {
            "type": "string",
            "format": "uuid",
            "description": "ID Jenis Pita Cukai."
          },
          "idJenisProduksiBkc": {
            "type": "integer",
            "description": "ID Jenis Produksi BKC."
          },
          "idSeripita": {
            "type": "integer",
            "description": "ID Seri Pita."
          },
          "isiVolume": {
            "type": "integer",
            "description": "Isi volume."
          },
          "jumlahCukai": {
            "type": "integer",
            "description": "Jumlah cukai."
          },
          "jumlahPesan": {
            "type": "integer",
            "description": "Jumlah pesan."
          },
          "jumlahRekomendasi": {
            "type": "integer",
            "description": "Jumlah rekomendasi."
          },
          "kodeJenisProduksiBkc": {
            "type": "string",
            "description": "Kode jenis produksi BKC."
          },
          "kodeWarna": {
            "type": "string",
            "description": "Kode warna."
          },
          "maksimalPesan": {
            "type": "integer",
            "description": "Maksimal pesan."
          },
          "namaGolonganBkc": {
            "type": "string",
            "description": "Nama golongan BKC."
          },
          "namaSeripita": {
            "type": "string",
            "description": "Nama seri pita."
          },
          "personalisasi": {
            "type": "string",
            "description": "Personalisasi."
          },
          "tahunPita": {
            "type": "integer",
            "description": "Tahun pita."
          },
          "tarif": {
            "type": "integer",
            "description": "Tarif."
          },
          "warna": {
            "type": "string",
            "description": "Warna."
          },
          "flagKawasanBebas": {
            "type": "string",
            "description": "Flag kawasan bebas."
          },
          "kodeSatuan": {
            "type": "string",
            "description": "Kode satuan."
          }
        },
        "required": [
          "hje",
          "idGolonganBkc",
          "idJenisPitaCukai",
          "idJenisProduksiBkc",
          "idSeripita",
          "isiVolume",
          "jumlahCukai",
          "jumlahPesan",
          "jumlahRekomendasi",
          "kodeJenisProduksiBkc",
          "kodeWarna",
          "maksimalPesan",
          "namaGolonganBkc",
          "namaSeripita",
          "personalisasi",
          "tahunPita",
          "tarif",
          "warna",
          "flagKawasanBebas",
          "kodeSatuan"
        ]
      }
    }
  },
  "required": [
    "saveHeaderPojo",
    "savePitaCukaiDto"
  ]
}

JSON Example : Simpan P3C

{
    "saveHeaderPojo": {
        "idJenisP3c": 1,
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "ambilPitaCukai": "KC",
        "bulanPersediaan": "092024",
        "idJenisBkc": 2,
        "idJenisPeriodeP3c": 1,
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "kodeKantor": "150300",
        "namaJenisBkc": "-",
        "namaJenisPeriodeP3C": "Awal",
        "namaPejabat": "HENDRY",
        "namaPerusahaan": "PANJANG JIWO PT",
        "nppbkc": "0014539407415000150312",
        "npwp": "014539407415000",
        "idJenisUsaha": 1,
        "tanggalPermohonan": "2024-08-01"
    },
    "savePitaCukaiDto": [
        {
            "hje": 100,
            "idGolonganBkc": 4,
            "idJenisPitaCukai": "dcc40afb-ff8b-4443-898d-22dde87b9e2c",
            "idJenisProduksiBkc": 13,
            "idSeripita": 5,
            "isiVolume": 600,
            "jumlahCukai": 5400000,
            "jumlahPesan": 10,
            "jumlahRekomendasi": 0,
            "kodeJenisProduksiBkc": "A",
            "kodeWarna": "HI",
            "maksimalPesan": 0,
            "namaGolonganBkc": "IMPORTIR",
            "namaSeripita": "I",
            "personalisasi": "-",
            "tahunPita": 2023,
            "tarif": 15000,
            "warna": "Hijau",
            "flagKawasanBebas": "N",
            "kodeSatuan": "btg"
        }
    ]
}

Validation Rules

Field

Rules

bulanPersediaan

Harus dalam format MMYYYY

idNppbkc

Harus merupakan UUID yang valid.

tanggalPermohonan

Harus dalam format YYYY-MM-DD

idJenisPitaCukai

Harus merupakan UUID yang valid.

isiVolume

Harus berupa angka positif

jumlahCukai

Harus berupa angka positif

jumlahPesan

Harus berupa angka positif

jumlahRekomendasi

Harus berupa angka positif

tarif

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

Last updated 9 months ago

📄
```