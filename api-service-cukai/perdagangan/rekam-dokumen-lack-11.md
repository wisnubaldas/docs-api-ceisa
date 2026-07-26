# Rekam Dokumen LACK-11

### Introduction

  * Purpose: API ini digunakan untuk rekam dokumen LACK-11

  * Overview: Proses rekam dokumen LACK-11 mensyaratkan 2 object data dalam bentuk JSON yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/lack11/rekam-dokumen`

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

periode

String

Periode laporan

3

tahunLaporan

String

Tahun laporan

2024

idNppbkc

String

Identifikasi unik untuk NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)

0499af9b-f53b-40c7-b1f8-9b16c9f89b76

kodeKantor

String

Kode kantor tempat laporan dibuat

150300

nppbkc

String

Nomor Pokok Pengusaha Barang Kena Cukai

0014539407415000150312

namaPerusahaan

String

Nama perusahaan yang melaporkan

PANJANG JIWO PT

npwp

String

Nomor Pokok Wajib Pajak

14539407415000

alamatPerusahaan

String

Alamat lengkap perusahaan

Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten

namaPengusaha

String

Nama pengusaha

yudi

noIdentitas

String

Nomor identitas yang digunakan untuk laporan

0014539407415000150312

tanggalLaporan

Date

Tanggal laporan

2024-08-22T00:00:00.000Z

alamatPemberitahu

String

Alamat pemberitahu

Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten

Detail Section

Parameter Name

Type

Description

Example Value

jenisBkc

String

Jenis Barang Kena Cukai (BKC)

MMEA

namaMerk

String

Nama merk dari barang

Arak

isi

String

Isi per kemasan

200

hje

String

Harga Jual Eceran

20000

tarifSpesifik

Number

Tarif spesifik untuk barang

8000000

kadarEa

String

Kadar Etil Alkohol

90

seriPita

String

Seri pita

3

jenisProduksiBkc

String

Jenis produksi BKC

MMEA GOLONGAN A

keterangan

String

Keterangan tambahan

laporan baru

saldoAwal

Number

Saldo awal barang

10000

pemasukan

Number

Jumlah pemasukan

10

pengeluaran

Number

Jumlah pengeluaran

10

bkcMusnah

Number

Jumlah BKC yang dimusnahkan

10

saldoAkhir

Number

Saldo akhir barang

9980

sudahDilekati

Number

Jumlah kemasan yang sudah dilekati pita

10

belumDilekati

Number

Jumlah kemasan yang belum dilekati pita

10

idJenisBkc

String

ID jenis BKC

2

satuan

String

Satuan dari barang

bungkus

idMerk

String

ID merk dari barang

0ac3b880-03d9-42b5-9da6-c7f3ea65c6b3

idJenisProduksiBkc

Number

ID jenis produksi BKC

13

uuid

String

UUID unik untuk detail

f1489bb6-fe7f-4135-bf91-380c904b8798

JSONSchema Rekam LACK-11

{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam LACK-11",
  "properties": {
    "periode": {
      "type": "string",
      "enum": ["1", "2", "3", "4"],
      "description": "Periode laporan dalam kuartal."
    },
    "tahunLaporan": {
      "type": "string",
      "description": "Tahun laporan dalam format 4 digit (YYYY)."
    },
    "idNppbkc": {
      "type": "string",
      "format": "uuid",
      "description": "UUID untuk ID NPPBKC."
    },
    "kodeKantor": {
      "type": "string",
      "description": "Kode kantor dengan 6 digit angka."
    },
    "nppbkc": {
      "type": "string",
      "description": "Nomor NPPBKC dengan 22 digit angka."
    },
    "namaPerusahaan": {
      "type": "string",
      "description": "Nama perusahaan."
    },
    "npwp": {
      "type": "string",
      "description": "NPWP perusahaan dengan 15 digit angka."
    },
    "alamatPerusahaan": {
      "type": "string",
      "description": "Alamat lengkap perusahaan."
    },
    "namaPengusaha": {
      "type": "string",
      "description": "Nama pengusaha yang terdaftar."
    },
    "noIdentitas": {
      "type": "string",
      "description": "Nomor identitas pengusaha dengan 22 digit angka."
    },
    "tanggalLaporan": {
      "type": "string",
      "format": "date-time",
      "description": "Tanggal laporan dalam format ISO 8601."
    },
    "alamatPemberitahu": {
      "type": "string",
      "description": "Alamat pemberitahu."
    },
    "details": {
      "type": "array",
      "description": "Detail dari laporan.",
      "items": {
        "type": "object",
        "properties": {
          "jenisBkc": {
            "type": "string",
            "description": "Jenis BKC (Barang Kena Cukai)."
          },
          "namaMerk": {
            "type": "string",
            "description": "Nama merk produk."
          },
          "isi": {
            "type": "string",
            "description": "Isi produk (volume atau berat)."
          },
          "hje": {
            "type": "string",
            "description": "Harga jual eceran."
          },
          "tarifSpesifik": {
            "type": "number",
            "description": "Tarif spesifik untuk produk."
          },
          "kadarEa": {
            "type": "string",
            "description": "Kadar alkohol dalam produk."
          },
          "seriPita": {
            "type": "string",
            "description": "Seri pita cukai."
          },
          "jenisProduksiBkc": {
            "type": "string",
            "description": "Jenis produksi BKC."
          },
          "keterangan": {
            "type": "string",
            "description": "Keterangan tambahan untuk laporan."
          },
          "saldoAwal": {
            "type": "integer",
            "description": "Saldo awal produk."
          },
          "pemasukan": {
            "type": "integer",
            "description": "Jumlah pemasukan produk."
          },
          "pengeluaran": {
            "type": "integer",
            "description": "Jumlah pengeluaran produk."
          },
          "bkcMusnah": {
            "type": "integer",
            "description": "Jumlah BKC yang musnah."
          },
          "saldoAkhir": {
            "type": "integer",
            "description": "Saldo akhir produk."
          },
          "sudahDilekati": {
            "type": "integer",
            "description": "Jumlah produk yang sudah dilekati pita cukai."
          },
          "belumDilekati": {
            "type": "integer",
            "description": "Jumlah produk yang belum dilekati pita cukai."
          },
          "idJenisBkc": {
            "type": "string",
            "description": "ID jenis BKC."
          },
          "satuan": {
            "type": "string",
            "description": "Satuan dari produk."
          },
          "idMerk": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk."
          },
          "idJenisProduksiBkc": {
            "type": "integer",
            "description": "ID jenis produksi BKC."
          },
          "uuid": {
            "type": "string",
            "format": "uuid",
            "description": "UUID unik untuk detail laporan."
          }
        },
        "required": [
          "jenisBkc",
          "namaMerk",
          "tarifSpesifik",
          "jenisProduksiBkc",
          "saldoAwal",
          "pemasukan",
          "pengeluaran",
          "bkcMusnah",
          "saldoAkhir",
          "sudahDilekati",
          "belumDilekati",
          "idJenisBkc",
          "satuan",
          "idMerk",
          "idJenisProduksiBkc",
          "uuid"
        ]
      }
    }
  },
  "required": [
    "periode",
    "tahunLaporan",
    "idNppbkc",
    "kodeKantor",
    "nppbkc",
    "namaPerusahaan",
    "npwp",
    "alamatPerusahaan",
    "namaPengusaha",
    "noIdentitas",
    "tanggalLaporan",
    "alamatPemberitahu",
    "details"
  ]
}

JSON Example : Rekam LACK-11

{
    "periode": "3",
    "tahunLaporan": "2024",
    "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
    "kodeKantor": "150300",
    "nppbkc": "0014539407415000150312",
    "namaPerusahaan": "PANJANG JIWO PT",
    "npwp": "0014539407415000",
    "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
    "namaPengusaha": "yudi",
    "noIdentitas": "0014539407415000150312",
    "tanggalLaporan": "2024-08-22T00:00:00.000Z",
    "alamatPemberitahu": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
    "details": [
        {
            "jenisBkc": "MMEA",
            "namaMerk": "Arak",
            "isi": "200",
            "hje": "",
            "tarifSpesifik": 8000000,
            "kadarEa": "",
            "seriPita": "",
            "jenisProduksiBkc": "MMEA GOLONGAN A",
            "keterangan": "laporan baru",
            "saldoAwal": 10000,
            "pemasukan": 10,
            "pengeluaran": 10,
            "bkcMusnah": 10,
            "saldoAkhir": 9980,
            "sudahDilekati": 10,
            "belumDilekati": 10,
            "idJenisBkc": "2",
            "satuan": "bungkus",
            "idMerk": "0ac3b880-03d9-42b5-9da6-c7f3ea65c6b3",
            "idJenisProduksiBkc": 13,
            "uuid": "f1489bb6-fe7f-4135-bf91-380c904b8798"
        }
    ]
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