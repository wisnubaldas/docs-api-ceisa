# Rekam CK-1C

### Introduction

  * Purpose: API ini digunakan untuk rekam CK-1C modul Pelunasan 

  * Overview: Proses rekam CK-1C mensyaratkan 2 object data dalam bentuk JSON yaitu Header dan Detail

### Path API

`POST` `{API_URL}/ck1c/h2h/rekam-ck1c`

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

idProses

String

Identifikasi unik untuk proses atau transaksi.

a3e8205e-9b7c-4d84-a2d5-f195a1e75b91

kodeKantor

String

Kode identifikasi kantor 

GHI789

namaKantor

String

Nama kantor 

Kantor C

idNppbkc

String

Identifikasi unik untuk NPPBKC

70c88e6a-5479-4906-b6e2-d51752180208

nppbkc

String

Nomor Pokok Pengusaha Barang Kena Cukai

3456789012345678901234

npwp

String

Nomor Pokok Wajib Pajak

3456789012345678

namaPerusahaan

String

Nama perusahaan

Perusahaan C

alamatPerusahaan

String

Alamat lengkap perusahaan

Alamat Perusahaan C

nomorCk1c

String

Nomor dokumen CK1C

CK1C789

tanggalCk1c

Date

Tanggal dikeluarkannya dokumen CK1C

2023-08-12

tanggalPermohonan

Date

Tanggal permohonan untuk dokumen

2023-07-25

tanggalJatuhTempo

Date

Tanggal jatuh tempo 

2023-09-25

tanggalLunas

Date

Tanggal saat pembayaran dianggap lunas.

2023-08-12

caraBayar

String

Metode pembayaran yang digunakan

C

flagBatal

String

Indikasi apakah proses ini dibatalkan

N

nipPejabat

String

Nomor Induk Pegawai dari pejabat terkait

345678901234567890

namaPejabat

String

Nama pejabat yang menangani proses

Pejabat C

nipPemeriksa

String

Nomor Induk Pegawai dari pemeriksa

765432109876543210

namaPemeriksa

String

Nama pemeriksa yang bertugas

Pemeriksa C

namaPemohon

String

Nama pihak yang mengajukan permohonan

Pemohon C

jumlahCukaiPembulatan

Integer

Jumlah total cukai yang telah dibulatkan

1800

jumlahCukaiDibayar

Integer

Jumlah cukai yang telah dibayar

1500

ppn

Integer

Jumlah Pajak Pertambahan Nilai (PPN) yang dikenakan

400

status

String

Status pembayaran proses ini

Lunas

Detail Section

Parameter Name

Type

Description

Example Value

idMerk

String

Identifikasi unik untuk merk 

6d7e8f9a-0b1c-2d3e-4f5a-6b7c8d9e0f1a

namaMerk

String

Nama merk dari produk

Merk C

idJenisKemasan

Integer

Identifikasi unik jenis kemasan

3

namaJenisKemasan

String

Nama jenis kemasan 

Jenis Kemasan C

jumlahKemasan

Integer

Total kemasan

75

isiMililiter

Integer

Kapasitas isi dalam mililiter

750

jumlahMililiter

Integer

Total volume dalam mililiter

56250

isiLiter

Float

Kapasitas isi per kemasan dalam liter.

0.70

jumlahLiter

Float

Total volume dalam liter

52.50

tarifCukai

Integer

Tarif cukai yang dikenakan

1200

jumlahCukai

Integer

Total cukai 

680625

JSONSchema Rekam CK-1C

{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam CK-1C",
  "description": "JSON Schema untuk Rekam CK-1C.",
  "properties": {
    "header": {
      "type": "object",
      "description": "Data header dokumen pabean.",
      "properties": {
        "idProses": {
          "type": "string",
          "format": "uuid",
          "description": "ID Proses dokumen pabean."
        },
        "kodeKantor": {
          "type": "string",
          "description": "Kode kantor pengirim."
        },
        "namaKantor": {
          "type": "string",
          "description": "Nama kantor pengirim."
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
        "npwp": {
          "type": "string",
          "description": "NPWP, harus terdiri dari 16 digit."
        },
        "namaPerusahaan": {
          "type": "string",
          "description": "Nama perusahaan."
        },
        "alamatPerusahaan": {
          "type": "string",
          "description": "Alamat perusahaan."
        },
        "nomorCk1c": {
          "type": "string",
          "description": "Nomor CK1C."
        },
        "tanggalCk1c": {
          "type": "string",
          "format": "date",
          "description": "Tanggal CK1C."
        },
        "tanggalPermohonan": {
          "type": "string",
          "format": "date",
          "description": "Tanggal permohonan."
        },
        "tanggalJatuhTempo": {
          "type": "string",
          "format": "date",
          "description": "Tanggal jatuh tempo."
        },
        "tanggalLunas": {
          "type": "string",
          "format": "date",
          "description": "Tanggal pelunasan."
        },
        "caraBayar": {
          "type": "string",
          "description": "Cara bayar."
        },
        "flagBatal": {
          "type": "string",
          "description": "Flag batal."
        },
        "nipPejabat": {
          "type": "string",
          "description": "NIP pejabat, harus terdiri dari 18 digit."
        },
        "namaPejabat": {
          "type": "string",
          "description": "Nama pejabat."
        },
        "nipPemeriksa": {
          "type": "string",
          "description": "NIP pemeriksa, harus terdiri dari 18 digit."
        },
        "namaPemeriksa": {
          "type": "string",
          "description": "Nama pemeriksa."
        },
        "namaPemohon": {
          "type": "string",
          "description": "Nama pemohon."
        },
        "jumlahCukaiPembulatan": {
          "type": "integer",
          "description": "Jumlah cukai pembulatan."
        },
        "jumlahCukaiDibayar": {
          "type": "integer",
          "description": "Jumlah cukai yang dibayar."
        },
        "ppn": {
          "type": "integer",
          "description": "Jumlah PPN."
        },
        "status": {
          "type": "string",
          "description": "Status pembayaran."
        }
      },
      "required": [
        "idProses",
        "kodeKantor",
        "namaKantor",
        "idNppbkc",
        "nppbkc",
        "npwp",
        "namaPerusahaan",
        "alamatPerusahaan",
        "nomorCk1c",
        "tanggalCk1c",
        "tanggalPermohonan",
        "tanggalJatuhTempo",
        "tanggalLunas",
        "caraBayar",
        "flagBatal",
        "nipPejabat",
        "namaPejabat",
        "nipPemeriksa",
        "namaPemeriksa",
        "namaPemohon",
        "jumlahCukaiPembulatan",
        "jumlahCukaiDibayar",
        "ppn",
        "status"
      ],
      "message": {
        "required": "Wajib mengisi semua field pada header."
      }
    },
    "details": {
      "type": "array",
      "description": "Data detil barang pada dokumen pabean.",
      "items": {
        "type": "object",
        "properties": {
          "idMerk": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk barang."
          },
          "namaMerk": {
            "type": "string",
            "description": "Nama merk barang."
          },
          "idJenisKemasan": {
            "type": "integer",
            "description": "ID jenis kemasan."
          },
          "namaJenisKemasan": {
            "type": "string",
            "description": "Nama jenis kemasan."
          },
          "jumlahKemasan": {
            "type": "integer",
            "description": "Jumlah kemasan."
          },
          "isiMililiter": {
            "type": "integer",
            "description": "Isi kemasan dalam mililiter."
          },
          "jumlahMililiter": {
            "type": "integer",
            "description": "Jumlah mililiter."
          },
          "isiLiter": {
            "type": "number",
            "description": "Isi kemasan dalam liter."
          },
          "jumlahLiter": {
            "type": "number",
            "description": "Jumlah liter."
          },
          "tarifCukai": {
            "type": "integer",
            "description": "Tarif cukai per unit."
          },
          "jumlahCukai": {
            "type": "integer",
            "description": "Jumlah cukai."
          }
        },
        "required": [
          "idMerk",
          "namaMerk",
          "idJenisKemasan",
          "namaJenisKemasan",
          "jumlahKemasan",
          "isiMililiter",
          "jumlahMililiter",
          "isiLiter",
          "jumlahLiter",
          "tarifCukai",
          "jumlahCukai"
        ],
        "message": {
          "required": "Wajib mengisi semua field pada detil barang."
        }
      }
    }
  },
  "required": [
    "header",
    "details"
  ],
  "message": {
    "required": "Wajib mengisi data header dan details."
  }
}

JSON Example : Rekam CK-1C

{
  "header": {
    "idProses": "a3e8205e-9b7c-4d84-a2d5-f195a1e75b91",
    "kodeKantor": "GHI789",
    "namaKantor": "Kantor C",
    "idNppbkc": "70c88e6a-5479-4906-b6e2-d51752180208",
    "nppbkc": "3456789012345678901234",
    "npwp": "3456789012345678",
    "namaPerusahaan": "Perusahaan C",
    "alamatPerusahaan": "Alamat Perusahaan C",
    "nomorCk1c": "CK1C789",
    "tanggalCk1c": "2023-08-12",
    "tanggalPermohonan": "2023-07-25",
    "tanggalJatuhTempo": "2023-09-25",
    "tanggalLunas": "2023-08-12",
    "caraBayar": "C",
    "flagBatal": "N",
    "nipPejabat": "345678901234567890",
    "namaPejabat": "Pejabat C",
    "nipPemeriksa": "765432109876543210",
    "namaPemeriksa": "Pemeriksa C",
    "namaPemohon": "Pemohon C",
    "jumlahCukaiPembulatan": 1800,
    "jumlahCukaiDibayar": 1500,
    "ppn": 400,
    "status": "Lunas"
  },
  "details": [{
      "idMerk": "6d7e8f9a-0b1c-2d3e-4f5a-6b7c8d9e0f1a",
      "namaMerk": "Merk C",
      "idJenisKemasan": 3,
      "namaJenisKemasan": "Jenis Kemasan C",
      "jumlahKemasan": 75,
      "isiMililiter": 750,
      "jumlahMililiter": 56250,
      "isiLiter": 0.70,
      "jumlahLiter": 52.50,
      "tarifCukai": 1200,
      "jumlahCukai": 680625
    }
  ]
}

Validation Rules

Field

Rules

idProses

Harus merupakan UUID yang valid

idNppbkc

Harus merupakan UUID yang valid

tanggalCk1c

Harus dalam format YYYY-MM-DD

tanggalPermohonan

Harus dalam format YYYY-MM-DD

tanggalJatuhTempo

Harus dalam format YYYY-MM-DD

tanggalLunas

Harus dalam format YYYY-MM-DD

jumlahCukaiPembulatan

Harus berupa angka positif

jumlahCukaiDibayar

Harus berupa angka positif

idMerk

Harus merupakan UUID yang valid

jumlahKemasan

Harus berupa angka positif

isiMililiter

Harus berupa angka positif

jumlahMililiter

Harus berupa angka positif

tarifCukai

Harus berupa angka positif

jumlahCukai

Harus berupa angka positif
```

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {data}
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