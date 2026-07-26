# Rekam CK-2 Asal PBCK-7

## 

### Introduction

  * Purpose: API ini digunakan untuk rekam CK-2 berasal dari PBCK-7

  * Overview: Proses rekam CK-2 mensyaratkan 2 object data dalam bentuk JSON yaitu Header dan Detail

## 

### Path API

`POST` `{API_URL}/ck2/portal/saveCk2AsalPbck7`

## 

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

## 

Request Structure

Top-Level Object: Struktur data Dalam Bentuk Top Level JSON Schema

```json
{
  "header": { ... },
  "details": [ ... ]
}

### 

Header Section

Parameter Name

Type

Description

Example Value

alamatPerusahaan

String

Alamat lengkap perusahaan

Malang

asalDokumenCk2

String

Asal dokumen CK2

string

idJenisBkc

Integer

Identifikasi jenis BKC

2

idNppbkc

UUID

Identifikasi unik untuk NPPBKC

fe3c9197-de80-05e6-e054-0021f60abd54

kodeKantor

String

Kode kantor yang terkait dengan permintaan

11500

komentar

String

Komentar tambahan untuk permintaan

test

namaJenisBkc

String

Nama jenis BKC

HT

namaKantor

String

Nama kantor yang memproses permintaan

KPPBC TELUK BAYUR

namaPerusahaan

String

Nama perusahaan

JATI BAGUS PT 01

nomorPBCK7

String

Nomor PBCK7

1233

nppbkc

String

Nomor pokok perusahaan dan BKC

12360822651000

npwp

String

Nomor pokok wajib pajak perusahaan

12360822651000

tanggalPBCK7

Date

Tanggal dokumen PBCK7

2023-02-02

### 

Detail Section

Parameter Name

Type

Description

Example Value

cukaiDiberitahukan

Integer

Jumlah cukai yang diberitahukan

0

cukaiPbck7

Integer

Jumlah cukai PBCK7

0

hje

Integer

Harga Jual Eceran (HJE)

0

idGolonganBkc

Integer

Identifikasi golongan BKC

0

idJenisProduksiBkc

Integer

Identifikasi jenis produksi BKC

1

idMerk

UUID

Identifikasi unik untuk merek

05390e9b-ca9f-6c00-e064-0021f60abd54

idSeripita

Integer

Identifikasi seripita

2

idTarifMerkDetail

UUID

Identifikasi tarif detail merek

05390e9b-cad1-6c00-e064-0021f60abd53

isiVolume

Integer

Volume isi dalam mililiter

275

jumlahKemasanPbck7

Integer

Jumlah kemasan dalam PBCK7

0

jumlahKepingDiberitahukan

Integer

Jumlah keping yang diberitahukan

0

keterangan

String

Keterangan tambahan untuk detail

test

kodeJenisProduksiBkc

String

Kode jenis produksi BKC

SKM

namaGolonganBkc

String

Nama golongan BKC

III

namaMerk

String

Nama merek

btg

namaSeripita

String

Nama seripita

III

tahunPita

Integer

Tahun pita cukai

2023

tarif

Integer

Tarif cukai per unit

0

## 

JSONSchema Rekam CK-2 Asal PBCK-7

{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam CK-2 Asal PBCK-7",
  "description": "JSON Schema untuk Rekam CK-2 Asal PBCK-7.",
  "properties": {
    "alamatPerusahaan": {
      "type": "string",
      "description": "Alamat perusahaan."
    },
    "asalDokumenCk2": {
      "type": "string",
      "description": "Asal dokumen CK2."
    },
    "details": {
      "type": "array",
      "description": "Data detail dokumen.",
      "items": {
        "type": "object",
        "properties": {
          "cukaiDiberitahukan": {
            "type": "number",
            "description": "Cukai diberitahukan."
          },
          "cukaiPbck7": {
            "type": "number",
            "description": "Cukai PBCK7."
          },
          "hje": {
            "type": "integer",
            "description": "HJE."
          },
          "idGolonganBkc": {
            "type": "integer",
            "description": "ID golongan BKC."
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
          "idSeripita": {
            "type": "integer",
            "description": "ID seripita."
          },
          "idTarifMerkDetail": {
            "type": "string",
            "format": "uuid",
            "description": "ID tarif merk detail."
          },
          "isiVolume": {
            "type": "integer",
            "description": "Isi volume."
          },
          "jumlahKemasanPbck7": {
            "type": "number",
            "description": "Jumlah kemasan PBCK7."
          },
          "jumlahKepingDiberitahukan": {
            "type": "number",
            "description": "Jumlah keping diberitahukan."
          },
          "keterangan": {
            "type": "string",
            "description": "Keterangan."
          },
          "kodeJenisProduksiBkc": {
            "type": "string",
            "description": "Kode jenis produksi BKC."
          },
          "namaGolonganBkc": {
            "type": "string",
            "description": "Nama golongan BKC."
          },
          "namaMerk": {
            "type": "string",
            "description": "Nama merk."
          },
          "namaSeripita": {
            "type": "string",
            "description": "Nama seripita."
          },
          "tahunPita": {
            "type": "integer",
            "description": "Tahun pita."
          },
          "tarif": {
            "type": "number",
            "description": "Tarif."
          }
        },
        "required": [
          "cukaiDiberitahukan",
          "cukaiPbck7",
          "hje",
          "idGolonganBkc",
          "idJenisProduksiBkc",
          "idMerk",
          "idSeripita",
          "idTarifMerkDetail",
          "isiVolume",
          "jumlahKemasanPbck7",
          "jumlahKepingDiberitahukan",
          "keterangan",
          "kodeJenisProduksiBkc",
          "namaGolonganBkc",
          "namaMerk",
          "namaSeripita",
          "tahunPita",
          "tarif"
        ],
        "message": {
          "required": "Wajib mengisi semua field pada details."
        }
      }
    },
    "idJenisBkc": {
      "type": "integer",
      "description": "ID jenis BKC."
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
    "komentar": {
      "type": "string",
      "description": "Komentar."
    },
    "namaJenisBkc": {
      "type": "string",
      "description": "Nama jenis BKC."
    },
    "namaKantor": {
      "type": "string",
      "description": "Nama kantor."
    },
    "namaPerusahaan": {
      "type": "string",
      "description": "Nama perusahaan."
    },
    "nomorPBCK7": {
      "type": "string",
      "description": "Nomor PBCK7."
    },
    "nppbkc": {
      "type": "string",
      "description": "NPPBKC, harus terdiri dari 22 digit."
    },
    "npwp": {
      "type": "string",
      "description": "NPWP, harus terdiri dari 16 digit."
    },
    "tanggalPBCK7": {
      "type": "string",
      "format": "date",
      "description": "Tanggal PBCK7."
    }
  },
  "required": [
    "alamatPerusahaan",
    "asalDokumenCk2",
    "details",
    "idJenisBkc",
    "idNppbkc",
    "kodeKantor",
    "komentar",
    "namaJenisBkc",
    "namaKantor",
    "namaPerusahaan",
    "nomorPBCK7",
    "nppbkc",
    "npwp",
    "tanggalPBCK7"
  ],
  "message": {
    "required": "Wajib mengisi semua field pada header dan detail."
  }
}

## 

JSON Example : Rekam CK-2 Asal PBCK-7

{
"alamatPerusahaan": "Malang",
"asalDokumenCk2": "string",
"details": [
    {
    "cukaiDiberitahukan": 0,
    "cukaiPbck7": 0,
    "hje": 0,
    "idGolonganBkc": 0,
    "idJenisProduksiBkc": 1,
    "idMerk": "05390e9b-ca9f-6c00-e064-0021f60abd54",
    "idSeripita": 2,
    "idTarifMerkDetail": "05390e9b-cad1-6c00-e064-0021f60abd53",
    "isiVolume": 275,
    "jumlahKemasanPbck7": 0,
    "jumlahKepingDiberitahukan": 0,
    "keterangan": "test",
    "kodeJenisProduksiBkc": "SKM",
    "namaGolonganBkc": "III",
    "namaMerk": "btg",
    "namaSeripita": "III",
    "tahunPita": 2023,
    "tarif": 0
    }
    ],
"idJenisBkc": 2,
"idNppbkc": "fe3c9197-de80-05e6-e054-0021f60abd54",
"kodeKantor": "011500",
"komentar": "test",
"namaJenisBkc": "HT",
"namaKantor": "KPPBC TELUK BAYUR",
"namaPerusahaan": "JATI BAGUS PT 01",
"nomorPBCK7": "001233",
"nppbkc": "012360822651000",
"npwp": "012360822651000",
"tanggalPBCK7": "2023-02-02"
}

## 

Validation Rules

Field

Rules

idNppbkc

Harus merupakan UUID yang valid.

tanggalPBCK7

Harus dalam format YYYY-MM-DD

cukaiDiberitahukan

Harus berupa angka positif

cukaiPbck7

Harus berupa angka positif

idMerk

Harus merupakan UUID yang valid.

idTarifMerkDetail

Harus merupakan UUID yang valid.

isiVolume

Harus berupa angka positif

jumlahKemasanPbck7

Harus berupa angka positif

jumlahKepingDiberitahukan

Harus berupa angka positif

tahunPita

Harus dalam format YYYY

##
```

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": null
}

## 

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

[PreviousGet Detail CK-2 dari PBCK-7](api-service-cukai/pengembalian/get-detail-ck-2-dari-pbck-7.md)[NextGet Detail CK-3](api-service-cukai/pengembalian/get-detail-ck-3.md)

Last updated 9 months ago
```