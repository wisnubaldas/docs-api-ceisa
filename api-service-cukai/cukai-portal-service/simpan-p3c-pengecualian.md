# Simpan P3C Pengecualian

### Introduction

  * Purpose: API ini digunakan untuk simpan P3C pengecualian

  * Overview: Proses simpan P3C pengecualian mensyaratkan 2 object data dalam bentuk JSON yaitu Header dan Detail

### Path API

`POST` `{API_URL}/perekaman-p3c-pengecualian/h2h/simpanP3cPengecualian`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

```json
{
  "header": { ... },
  "details": [ ... ]
}

Header Section (saveHeaderPojo)

Parameter Name

Type

Description

Example Value

alamatPerusahaan

String

Alamat dari perusahaan

-

ambilPitaCukai

String

Tipe pengambilan pita cukai

KP

bulanPersediaan

String

Bulan persediaan barang kena cukai

82023

idJenisBkc

String

ID jenis barang kena cukai

3

idJenisPeriodeP3c

String

ID jenis periode pelaporan P3C

1

idNppbkc

String

ID NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)

fe3c9198-1065-05e6-e054-0021f60abd54

kodeKantor

String

Kode kantor

70600

namaJenisBkc

String

Nama jenis barang kena cukai

HT

namaJenisPeriodeP3C

String

Nama jenis periode pelaporan P3C

Awal

namaKantor

String

Nama kantor

KPPBC TMC MALANG

namaPejabat

String

Nama pejabat yang berwenang

ALOYSIUS RADJA SINGAL BBPS

namaPerusahaan

String

Nama perusahaan yang melaporkan

BENTOEL PRIMA, PT

nomorP3C

String

Nomor P3C

123

nppbkc

String

Nomor Pokok Pengusaha Barang Kena Cukai

0015866924651000070623

npwp

String

Nomor Pokok Wajib Pajak

15866924651000

status

String

Status pelaporan

-

tanggalP3C

Date

Tanggal pelaporan P3C

2023-08-21

tanggalPermohonan

Date

Tanggal permohonan pelaporan

2023-08-21

Detail Section (savePitaCukaiDto)

Parameter Name

Type

Description

Example Value

hje

String

Harga Jual Eceran

25101

idGolonganBkc

String

ID golongan barang kena cukai

3

idJenisPitaCukai

String

ID jenis pita cukai

c9a4e440-811b-4073-81e8-f85d0bc85560

idJenisProduksiBkc

String

ID jenis produksi barang kena cukai

6

idSeripita

String

ID seri pita

3

isiVolume

String

Volume isi per kemasan

25

jumlahCukai

String

Jumlah cukai yang dikenakan

0

jumlahPesan

String

Jumlah pesan pita cukai

212

jumlahRekomendasi

String

Jumlah rekomendasi pengambilan pita cukai

0

kodeJenisProduksiBkc

String

Kode jenis produksi barang kena cukai

SKM

kodeWarna

String

Kode warna pita cukai

JI

maksimalPesan

String

Jumlah maksimal pesan pita cukai

0

namaGolonganBkc

String

Nama golongan barang kena cukai

III

namaSeripita

String

Nama seri pita

-

personalisasi

String

Kode personalisasi untuk produk

BINSAYIN00

tahunPita

String

Tahun pita cukai

2023

tarif

String

Tarif cukai

669

warna

String

Warna pita cukai

JINGGA

flagKawasanBebas

String

Indikator apakah kawasan bebas

N

kodeSatuan

String

Satuan volume barang kena cukai

btg

JSONSchema Simpan P3C Pengecualian

{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Simpan P3C Pengecualian",
  "description": "JSON Schema untuk Simpan P3C Pengecualian.",
  "properties": {
    "saveHeaderPojo": {
      "type": "object",
      "description": "Data header dokumen pabean.",
      "properties": {
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
          "description": "Bulan persediaan, format MMYYYY."
        },
        "idJenisBkc": {
          "type": "integer",
          "description": "ID jenis BKC."
        },
        "idJenisPeriodeP3c": {
          "type": "integer",
          "description": "ID jenis periode P3C."
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
        "namaKantor": {
          "type": "string",
          "description": "Nama kantor."
        },
        "namaPejabat": {
          "type": "string",
          "description": "Nama pejabat."
        },
        "namaPerusahaan": {
          "type": "string",
          "description": "Nama perusahaan."
        },
        "nomorP3C": {
          "type": "string",
          "description": "Nomor P3C."
        },
        "nppbkc": {
          "type": "string",
          "description": "NPPBKC, harus terdiri dari 22 digit."
        },
        "npwp": {
          "type": "string",
          "description": "NPWP, harus terdiri dari 15 digit."
        },
        "status": {
          "type": "string",
          "description": "Status."
        },
        "tanggalP3C": {
          "type": "string",
          "format": "date",
          "description": "Tanggal P3C."
        },
        "tanggalPermohonan": {
          "type": "string",
          "format": "date",
          "description": "Tanggal permohonan."
        }
      },
      "required": [
        "alamatPerusahaan",
        "ambilPitaCukai",
        "bulanPersediaan",
        "idJenisBkc",
        "idJenisPeriodeP3c",
        "idNppbkc",
        "kodeKantor",
        "namaJenisBkc",
        "namaJenisPeriodeP3C",
        "namaKantor",
        "namaPejabat",
        "namaPerusahaan",
        "nomorP3C",
        "nppbkc",
        "npwp",
        "status",
        "tanggalP3C",
        "tanggalPermohonan"
      ],
      "message": {
        "required": "Wajib mengisi semua field pada saveHeaderPojo."
      }
    },
    "savePitaCukaiDto": {
      "type": "array",
      "description": "Data pita cukai.",
      "items": {
        "type": "object",
        "properties": {
          "hje": {
            "type": "integer",
            "description": "HJE."
          },
          "idGolonganBkc": {
            "type": "integer",
            "description": "ID golongan BKC."
          },
          "idJenisPitaCukai": {
            "type": "string",
            "format": "uuid",
            "description": "ID jenis pita cukai."
          },
          "idJenisProduksiBkc": {
            "type": "integer",
            "description": "ID jenis produksi BKC."
          },
          "idSeripita": {
            "type": "integer",
            "description": "ID seripita."
          },
          "isiVolume": {
            "type": "integer",
            "description": "Isi volume."
          },
          "jumlahCukai": {
            "type": "number",
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
            "description": "Nama seripita."
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
        ],
        "message": {
          "required": "Wajib mengisi semua field pada savePitaCukaiDto."
        }
      }
    }
  },
  "required": [
    "saveHeaderPojo",
    "savePitaCukaiDto"
  ],
  "message": {
    "required": "Wajib mengisi data saveHeaderPojo dan savePitaCukaiDto."
  }
}

JSON Example : Simpan P3C Pengecualian

{
    "saveHeaderPojo": {
        "alamatPerusahaan": "-",
        "ambilPitaCukai": "KP",
        "bulanPersediaan": "082023",
        "idJenisBkc": 3,
        "idJenisPeriodeP3c": 1,
        "idNppbkc": "fe3c9198-1065-05e6-e054-0021f60abd54",
        "kodeKantor": "070600",
        "namaJenisBkc": "HT",
        "namaJenisPeriodeP3C": "Awal",
        "namaKantor": "KPPBC TMC MALANG",
        "namaPejabat": "ALOYSIUS RADJA SINGAL BBPS",
        "namaPerusahaan": "BENTOEL PRIMA, PT",
        "nomorP3C": "123",
        "nppbkc": "0015866924651000070623",
        "npwp": "015866924651000",
        "status": "-",
        "tanggalP3C": "2023-08-21",
        "tanggalPermohonan": "2023-08-21"
    },
    "savePitaCukaiDto": [
        {
            "hje": 25101,
            "idGolonganBkc": 3,
            "idJenisPitaCukai": "c9a4e440-811b-4073-81e8-f85d0bc85560",
            "idJenisProduksiBkc": 6,
            "idSeripita": 3,
            "isiVolume": 25,
            "jumlahCukai": 0,
            "jumlahPesan": 212,
            "jumlahRekomendasi": 0,
            "kodeJenisProduksiBkc": "SKM",
            "kodeWarna": "JI",
            "maksimalPesan": 0,
            "namaGolonganBkc": "III",
            "namaSeripita": "-",
            "personalisasi": "BINSAYIN00",
            "tahunPita": 2023,
            "tarif": 669,
            "warna": "JINGGA",
            "flagKawasanBebas": "N",
            "kodeSatuan" : "btg" 
        }
    ]
}

Validation Rules

Field

Rules

idNppbkc

Harus merupakan UUID yang valid.

tanggalP3C

Harus dalam format YYYY-MM-DD

tanggalPermohonan

Harus dalam format YYYY-MM-DD

idJenisPitaCukai

Harus merupakan UUID yang valid

jumlahCukai

Harus berupa angka positif

jumlahPesan

Harus berupa angka positif

jumlahRekomendasi

Harus berupa angka positif
```

### Response

200

```json
{
  "message": "Tidak Boleh Lanjut Dikarenakan Perusahaan Mempunyai Hutang",
  "status": true,
  "data": {
    "hutangPerusahaan": 4
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