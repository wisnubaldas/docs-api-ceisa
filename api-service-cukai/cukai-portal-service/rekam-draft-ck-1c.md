# Rekam Draft CK-1C

### Introduction

  * Purpose: API ini digunakan untuk rekam draft CK1-C modul pelunasan

  * Overview: Proses rekam draft CK-1C mensyaratkan 2 object data dalam bentuk JSON yaitu Header dan Detail

### Path API

`POST` `{API_URL}/ck1c/draft/rekam-ck1c`

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

kodeKantor

String

Kode unik yang mewakili kantor bea cukai yang menangani proses ini

150300

namaKantor

String

Nama kantor

KPPBC TMP A TANGERANG

idNppbkc

String

Identifikasi unik untuk nomor pokok pengusaha barang kena cukai (NPPBKC)

126b1230-0162-c3f4-e064-0208207a4329

nppbkc

String

Nomor pokok pengusaha barang kena cukai (NPPBKC)

0014539407415000150312

npwp

String

Nomor Pokok Wajib Pajak (NPWP) perusahaan

14539407415000

namaPerusahaan

String

Nama perusahaan

PANJANG JIWO, PT.

alamatPerusahaan

String

Alamat lengkap perusahaan

Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten

caraBayar

String

Metode pembayaran yang digunakan

K (contoh: Kartu Kredit, Transfer Bank)

flagBatal

String

Indikator apakah dokumen ini dibatalkan atau tidak (N berarti tidak dibatalkan, Y berarti dibatalkan)

N

namaPemohon

String

Nama pemohon yang mengajukan permohonan

HENDRY

status

String

Status dokumen atau transaksi ini

K

flagFinal

String

Indikator apakah dokumen ini sudah final (N berarti belum final, Y berarti final).

N

flagInhouse

String

Indikator apakah proses ini dilakukan di Inhouse

N

jumlahCukaiPembulatan

Integer

Jumlah cukai setelah pembulatan

0

jumlahCukaiDibayar

Integer

Jumlah cukai yang telah dibayarkan

0

Detail Section

Parameter Name

Type

Description

Example Value

key

Integer

Kunci atau identifikasi data detail dalam daftar

0

idMerk

String

Identifikasi unik untuk merek produk

1322b84f-3879-08af-e064-0208207a4329

Merek

String

Nama merek dari produk barang kena cukai

MIXMAX - ICE GLACIER

Jenis

String

Jenis atau kategori dari produk

Lainnya

IsiM

Integer

Kapasitas isi produk per kemasan dalam mililiter

275

IsiL

Float

Kapasitas isi produk per kemasan dalam liter

275

Tarif

Integer

Tarif cukai yang dikenakan per satuan produk

16500

jumlahKemasanValue

String

Jumlah kemasan produk dalam dokumen ini

200

JumlahKemasan

Object

Objek yang mewakili jumlah kemasan produk, mencakup informasi tambahan

{ "key": null, "ref": null, "props": { "children": { "key": null, ... } } }

AwalBerlaku

Date

Tanggal mulai berlakunya tarif cukai

2024-01-01

TujuanPemasaran

String

Tujuan atau area pemasaran

null

Cukai

Float

Jumlah total cukai yang harus dibayar

9.075.000.000.000.000

namaMerk

String

Nama merek dari produk

MIXMAX - ICE GLACIER

idJenisKemasan

Integer

Identifikasi jenis kemasan produk

1

namaJenisKemasan

String

Deskripsi jenis kemasan yang digunakan

Lainnya

jumlahKemasan

String

Jumlah kemasan produk

200

isiMililiter

Integer

Isi per kemasan dalam mililiter

275

jumlahMililiter

Integer

Total isi dalam mililiter

275

isiLiter

Float

Isi per kemasan dalam liter

275

jumlahLiter

Float

Total isi dalam liter

275

tarifCukai

Integer

Tarif cukai yang dikenakan

16500

jumlahCukai

Float

Jumlah total cukai yang harus dibayarkan

9.075.000.000.000.000

JSONSchema Rekam Draft CK-1C

{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam Draft CK-1C",
  "description": "JSON Schema untuk Rekam Draft CK-1C.",
  "properties": {
    "header": {
      "type": "object",
      "description": "Data header dokumen pabean.",
      "properties": {
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
        "caraBayar": {
          "type": "string",
          "description": "Cara bayar."
        },
        "flagBatal": {
          "type": "string",
          "description": "Flag batal."
        },
        "namaPemohon": {
          "type": "string",
          "description": "Nama pemohon."
        },
        "status": {
          "type": "string",
          "description": "Status."
        },
        "flagFinal": {
          "type": "string",
          "description": "Flag final."
        },
        "flagInhouse": {
          "type": "string",
          "description": "Flag inhouse."
        },
        "jumlahCukaiPembulatan": {
          "type": "number",
          "description": "Jumlah cukai pembulatan."
        },
        "jumlahCukaiDibayar": {
          "type": "number",
          "description": "Jumlah cukai yang dibayar."
        }
      },
      "required": [
        "kodeKantor",
        "namaKantor",
        "idNppbkc",
        "nppbkc",
        "npwp",
        "namaPerusahaan",
        "alamatPerusahaan",
        "caraBayar",
        "flagBatal",
        "namaPemohon",
        "status",
        "flagFinal",
        "flagInhouse",
        "jumlahCukaiPembulatan",
        "jumlahCukaiDibayar"
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
          "key": {
            "type": "integer",
            "description": "Key index untuk detil barang."
          },
          "idMerk": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk barang."
          },
          "Merek": {
            "type": "string",
            "description": "Merek barang."
          },
          "Jenis": {
            "type": "string",
            "description": "Jenis barang."
          },
          "IsiM": {
            "type": "integer",
            "description": "Isi kemasan dalam mililiter."
          },
          "IsiL": {
            "type": "number",
            "description": "Isi kemasan dalam liter."
          },
          "Tarif": {
            "type": "integer",
            "description": "Tarif cukai per unit."
          },
          "jumlahKemasanValue": {
            "type": "string",
            "description": "Jumlah kemasan sebagai string."
          },
          "JumlahKemasan": {
            "type": "object",
            "description": "Jumlah kemasan yang didefinisikan dalam objek.",
            "properties": {
              "key": {
                "type": "integer",
                "description": "Key dari objek jumlah kemasan."
              },
              "ref": {
                "type": "string",
                "description": "Referensi objek jumlah kemasan"
              },
              "props": {
                "type": "object",
                "properties": {
                  "children": {
                    "type": "object",
                    "properties": {
                      "key": {
                        "type": "string",
                        "description": "Key dari anak objek"
                      },
                      "ref": {
                        "type": "string",
                        "description": "Referensi objek anak."
                      },
                      "props": {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "string",
                            "description": "Tipe data."
                          },
                          "style": {
                            "type": "object",
                            "properties": {
                              "width": {
                                "type": "string",
                                "description": "Lebar style."
                              }
                            },
                            "description": "Style objek."
                          },
                          "value": {
                            "type": "string",
                            "description": "Nilai kemasan sebagai string."
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "AwalBerlaku": {
            "type": "string",
            "format": "date",
            "description": "Tanggal mulai berlaku."
          },
          "TujuanPemasaran": {
            "type": "string",
            "description": "Tujuan pemasaran, bisa null."
          },
          "Cukai": {
            "type": "number",
            "description": "Jumlah cukai."
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
            "type": "string",
            "description": "Jumlah kemasan sebagai string."
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
            "type": "number",
            "description": "Jumlah cukai."
          }
        },
        "required": [
          "key",
          "idMerk",
          "Merek",
          "Jenis",
          "IsiM",
          "IsiL",
          "Tarif",
          "jumlahKemasanValue",
          "JumlahKemasan",
          "AwalBerlaku",
          "TujuanPemasaran",
          "Cukai",
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

JSON Example : Rekam Draft CK-1C

{
  "header": {
    "kodeKantor": "150300",
    "namaKantor": "KPPBC TMP A TANGERANG",
    "idNppbkc": "126b1230-0162-c3f4-e064-0208207a4329",
    "nppbkc": "0014539407415000150312",
    "npwp": "0014539407415000",
    "namaPerusahaan": "PANJANG JIWO, PT.",
    "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
    "caraBayar": "K",
    "flagBatal": "N",
    "namaPemohon": "HENDRY",
    "status": "K",
    "flagFinal": "N",
    "flagInhouse": "N",
    "jumlahCukaiPembulatan": 0,
    "jumlahCukaiDibayar": 0
  },
  "details": [
    {
      "key": 0,
      "idMerk": "1322b84f-3879-08af-e064-0208207a4329",
      "Merek": "MIXMAX - ICE GLACIER",
      "Jenis": "Lainnya",
      "IsiM": 275,
      "IsiL": 0.275,
      "Tarif": 16500,
      "jumlahKemasanValue": "200",
      "JumlahKemasan": {
        "key": null,
        "ref": null,
        "props": {
          "children": {
            "key": null,
            "ref": null,
            "props": {
              "type": "number",
              "style": {
                "width": "100%"
              },
              "value": "200"
            },
            "_owner": null
          }
        },
        "_owner": null
      },
      "AwalBerlaku": "2024-01-01",
      "TujuanPemasaran": "null",
      "Cukai": 907500.0000000001,
      "namaMerk": "MIXMAX - ICE GLACIER",
      "idJenisKemasan": 1,
      "namaJenisKemasan": "Lainnya",
      "jumlahKemasan": "200",
      "isiMililiter": 275,
      "jumlahMililiter": 275,
      "isiLiter": 0.275,
      "jumlahLiter": 0.275,
      "tarifCukai": 16500,
      "jumlahCukai": 907500.0000000001
    }
  ]
}

Validation Rules

Field

Rules

idNppbkc

Harus merupakan UUID yang valid.

jumlahCukaiPembulatan

Harus berupa angka positif

jumlahCukaiDibayar

Harus berupa angka positif

idMerk

Harus merupakan UUID yang valid.

IsiM

Harus berupa angka positif

IsiL

Harus berupa angka positif

Tarif

Harus berupa angka positif

jumlahKemasanValue

Harus berupa angka positif

JumlahKemasan

Harus berupa angka positif

AwalBerlaku

Harus dalam format YYYY-MM-DD

Cukai

Harus berupa angka positif

jumlahKemasan

Harus berupa angka positif

isiMililiter

Harus berupa angka positif

jumlahMililiter

Harus berupa angka positif

isiLiter

Harus berupa angka positif

jumlahLiter

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