# Simpan CK-1

### Introduction

  * Purpose: API ini digunakan untuk simpan CK-1

  * Overview: Proses simpan CK-1 mensyaratkan 2 object data dalam bentuk JSON yaitu Header dan Detail

### Path API

`POST` `{API_URL}/ck1/h2h/simpanCk1`

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

alamatPerusahaan

String

Alamat lengkap perusahaan

JALAN DEMANG JAYA 2 NOMOR 03 KREBET SENGGRONG KECAMATAN BULULAWANG KABUPATEN MALANG

ambilPitaCukai

String

Lokasi ambil pita cukai

KC

caraBayar

String

Cara pembayaran

T

idKuasa

String

ID kuasa

49202a82-4a42-4c08-9000-4d4c95f91016

idNppbkc

String

ID Nomor Pokok Pengusaha Barang Kena Cukai

fe3c9198-1af7-05e6-e054-0021f60abd54

jumlahCukaiDibayar

String

Jumlah cukai yang telah dibayar

385000

jumlahCukaiPengurang

String

Jumlah cukai yang dikurangkan

425000

kodeKantor

String

Kode kantor pengawasan

70600

komentar

String

Komentar tambahan

-

namaKantor

String

Nama kantor pengawasan

KPPBC TMC MALANG

namaKuasaPita

String

Nama kuasa pita

Ilham

namaPembohon

String

Nama pemohon

Zaeen

namaPerusahaan

String

Nama perusahaan

DEMANG JAYA, PR

nppbkc

String

Nomor Pokok Pengusaha Barang Kena Cukai

0669986374654000070613

npwp

String

Nomor Pokok Wajib Pajak

669986374654000

ppn

Number

Nilai Pajak Pertambahan Nilai (PPN)

891

tanggalCk1

Date

Tanggal CK-1

07-11-2023

idJenisBkc

Integer

ID jenis barang kena cukai

3

namaJenisBkc

String

Nama jenis barang kena cukai

HT

jumlahCukai

String

Total jumlah cukai

810000

nomorKuasa

String

Nomor kuasa

111111

Detail Section

Parameter Name

Type

Description

Example Value

hje

String

Harga Jual Eceran per kemasan

20000

idGolonganBkc

Integer

ID golongan barang kena cukai

2

idMerk

String

ID merk produk

628a9946-e590-4201-a76c-efd299738184

idP3CDetail

String

ID detail P3C

052cc2b6-849b-4737-e064-0021f60abd54

idSeripita

Integer

ID seri pita cukai

3

isiVolume

String

Isi volume

12

jumlahCukai

String

Jumlah cukai yang dikenakan

810000

jumlahHje

String

Jumlah harga jual eceran

9000

jumlahLembar

String

Jumlah lembar pita cukai

3

jumlahLembarPending

String

Jumlah lembar pita cukai yang pending

0

jumlahSatuan

String

Jumlah satuan barang

12

jumlahPesan

String

Jumlah pesanan pita cukai

100

kodeJenisProduksiBkc

String

Kode jenis produksi barang kena cukai

SKM

kodeWarna

String

Kode warna pita cukai

JI

namaGolonganBkc

String

Nama golongan barang kena cukai

I

namaMerk

String

Nama merk produk

SEMBILAN CENGKEH

namaSeripita

String

Nama seri pita cukai

III TP

personalisasi

String

Kode personalisasi pita cukai

DEMAJAYA01

satuan

String

Satuan pengukuran barang

btg

tahunPita

String

Tahun pita cukai

2023

tarif

String

Tarif cukai

150

warna

String

Warna pita cukai

JINGGA

idJenisProduksiBkc

Integer

ID jenis produksi barang kena cukai

6

idJenisDokumen

Integer

ID jenis dokumen pengurang

7

jumlahCukaiPengurang

String

Jumlah cukai yang dikurangkan

425000

namaJenisDokumen

String

Nama jenis dokumen pengurang

CK-3

nomorDokumenPengurang

String

Nomor dokumen pengurang cukai

CK3-20230001

saldoPengurang

String

Saldo pengurang cukai

1000000

tanggalDokumenPengurang

Date

Tanggal dokumen pengurang cukai

20-09-2023

dokumenAsal

String

Nama dokumen asal pengurang SPPR

TESTINGDOC

jumlahPengurangSppr

String

Jumlah pengurang SPPR

9000

nomorDokumenAsal

String

Nomor dokumen asal

1221

nomorPr4

String

Nomor PR4

12345

pajakRokok

String

Pajak rokok yang dikenakan

1000

saldoPr4

String

Saldo PR4

10000

tanggalPr4

Date

Tanggal PR4

16-08-2023

JSONSchema Simpan CK-1

{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Simpan CK-1",
  "description": "JSON Schema untuk Simpan CK-1.",
  "properties": {
    "header": {
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
        "caraBayar": {
          "type": "string",
          "description": "Cara bayar."
        },
        "idKuasa": {
          "type": "string",
          "format": "uuid",
          "description": "ID kuasa."
        },
        "idNppbkc": {
          "type": "string",
          "format": "uuid",
          "description": "ID NPPBKC."
        },
        "jumlahCukaiDibayar": {
          "type": "number",
          "description": "Jumlah cukai dibayar."
        },
        "jumlahCukaiPengurang": {
          "type": "number",
          "description": "Jumlah cukai pengurang."
        },
        "kodeKantor": {
          "type": "string",
          "description": "Kode kantor."
        },
        "komentar": {
          "type": "string",
          "description": "Komentar."
        },
        "namaKantor": {
          "type": "string",
          "description": "Nama kantor."
        },
        "namaKuasaPita": {
          "type": "string",
          "description": "Nama kuasa pita."
        },
        "namaPembohon": {
          "type": "string",
          "description": "Nama pemohon."
        },
        "namaPerusahaan": {
          "type": "string",
          "description": "Nama perusahaan."
        },
        "nppbkc": {
          "type": "string",
          "pattern": "^\\d{22}$",
          "description": "NPPBKC, harus terdiri dari 22 digit."
        },
        "npwp": {
          "type": "string",
          "pattern": "^\\d{15}$",
          "description": "NPWP, harus terdiri dari 15 digit."
        },
        "ppn": {
          "type": "number",
          "description": "PPN."
        },
        "tanggalCk1": {
          "type": "string",
          "format": "date",
          "description": "Tanggal CK1."
        },
        "idJenisBkc": {
          "type": "integer",
          "description": "ID jenis BKC."
        },
        "namaJenisBkc": {
          "type": "string",
          "description": "Nama jenis BKC."
        },
        "jumlahCukai": {
          "type": "number",
          "description": "Jumlah cukai."
        },
        "nomorKuasa": {
          "type": "string",
          "description": "Nomor kuasa."
        }
      },
      "required": [
        "alamatPerusahaan",
        "ambilPitaCukai",
        "caraBayar",
        "idKuasa",
        "idNppbkc",
        "jumlahCukaiDibayar",
        "jumlahCukaiPengurang",
        "kodeKantor",
        "namaKantor",
        "namaKuasaPita",
        "namaPembohon",
        "namaPerusahaan",
        "nppbkc",
        "npwp",
        "ppn",
        "tanggalCk1",
        "idJenisBkc",
        "namaJenisBkc",
        "jumlahCukai",
        "nomorKuasa"
      ],
      "message": {
        "required": "Wajib mengisi semua field pada header."
      }
    },
    "detail": {
      "type": "array",
      "description": "Data detail pita cukai.",
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
          "idMerk": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk."
          },
          "idP3CDetail": {
            "type": "string",
            "format": "uuid",
            "description": "ID P3C detail."
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
          "jumlahHje": {
            "type": "integer",
            "description": "Jumlah HJE."
          },
          "jumlahLembar": {
            "type": "integer",
            "description": "Jumlah lembar."
          },
          "jumlahLembarPending": {
            "type": "integer",
            "description": "Jumlah lembar pending."
          },
          "jumlahSatuan": {
            "type": "integer",
            "description": "Jumlah satuan."
          },
          "jumlahPesan": {
            "type": "integer",
            "description": "Jumlah pesan."
          },
          "kodeJenisProduksiBkc": {
            "type": "string",
            "description": "Kode jenis produksi BKC."
          },
          "kodeWarna": {
            "type": "string",
            "description": "Kode warna."
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
          "personalisasi": {
            "type": "string",
            "description": "Personalisasi."
          },
          "satuan": {
            "type": "string",
            "description": "Satuan."
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
          "idJenisProduksiBkc": {
            "type": "integer",
            "description": "ID jenis produksi BKC."
          }
        },
        "required": [
          "hje",
          "idGolonganBkc",
          "idMerk",
          "idP3CDetail",
          "idSeripita",
          "isiVolume",
          "jumlahCukai",
          "jumlahHje",
          "jumlahLembar",
          "jumlahLembarPending",
          "jumlahSatuan",
          "jumlahPesan",
          "kodeJenisProduksiBkc",
          "kodeWarna",
          "namaGolonganBkc",
          "namaMerk",
          "namaSeripita",
          "personalisasi",
          "satuan",
          "tahunPita",
          "tarif",
          "warna",
          "idJenisProduksiBkc"
        ],
        "message": {
          "required": "Wajib mengisi semua field pada detail."
        }
      }
    },
    "pengurangCukai": {
      "type": "array",
      "description": "Data pengurang cukai.",
      "items": {
        "type": "object",
        "properties": {
          "idJenisDokumen": {
            "type": "integer",
            "description": "ID jenis dokumen."
          },
          "jumlahCukaiPengurang": {
            "type": "number",
            "description": "Jumlah cukai pengurang."
          },
          "namaJenisDokumen": {
            "type": "string",
            "description": "Nama jenis dokumen."
          },
          "nomorDokumenPengurang": {
            "type": "string",
            "description": "Nomor dokumen pengurang."
          },
          "saldoPengurang": {
            "type": "number",
            "description": "Saldo pengurang."
          },
          "tanggalDokumenPengurang": {
            "type": "string",
            "format": "date",
            "description": "Tanggal dokumen pengurang."
          }
        },
        "required": [
          "idJenisDokumen",
          "jumlahCukaiPengurang",
          "namaJenisDokumen",
          "nomorDokumenPengurang",
          "saldoPengurang",
          "tanggalDokumenPengurang"
        ],
        "message": {
          "required": "Wajib mengisi semua field pada pengurangCukai."
        }
      }
    },
    "pengurangSppr": {
      "type": "array",
      "description": "Data pengurang SPPR.",
      "items": {
        "type": "object",
        "properties": {
          "dokumenAsal": {
            "type": "string",
            "description": "Dokumen asal."
          },
          "jumlahPengurangSppr": {
            "type": "number",
            "description": "Jumlah pengurang SPPR."
          },
          "nomorDokumenAsal": {
            "type": "string",
            "description": "Nomor dokumen asal."
          },
          "nomorPr4": {
            "type": "string",
              "description": "Nomor PR4."
          },
          "pajakRokok": {
            "type": "number",
            "description": "Pajak rokok."
          },
          "saldoPr4": {
            "type": "string",
            "description": "Saldo PR4."
          }
          "tanggalPr4": {
            "type": "string",
            "format": "date",
            "description": "Tanggal PR4."
          }
        },
        "required": [
          "dokumenAsal",
          "jumlahPengurangSppr",
          "nomorDokumenAsal",
          "nomorPr4",
          "pajakRokok",
          "saldoPr4",
          "tanggalPr4""
        ],
        "message": {
          "required": "Wajib mengisi semua field pada pengurangSppr."
        }
      }
    }
  }
}

JSON Example : Simpan CK-1

{
  "header": {
    "alamatPerusahaan": "JALAN DEMANG JAYA 2 NOMOR 03 KREBET SENGGRONG KECAMATAN BULULAWANG KABUPATEN MALANG",
    "ambilPitaCukai": "KC",
    "caraBayar": "T",
    "idKuasa": "49202a82-4a42-4c08-9000-4d4c95f91016",
    "idNppbkc": "fe3c9198-1af7-05e6-e054-0021f60abd54",
    "jumlahCukaiDibayar": 385000,
    "jumlahCukaiPengurang": 425000,
    "kodeKantor": "070600",
    "komentar": "",
    "namaKantor": "KPPBC TMC MALANG",
    "namaKuasaPita": "Ilham",
    "namaPembohon": "Zaeen",
    "namaPerusahaan": "DEMANG JAYA, PR",
    "nppbkc": "0669986374654000070613",
    "npwp": "669986374654000",
    "ppn": 891,
    "tanggalCk1": "07-11-2023",
    "idJenisBkc": 3,
    "namaJenisBkc": "HT",
    "jumlahCukai": 810000,
    "nomorKuasa": "111111"
  },
  "detail": [
    {
      "hje": 20000,
      "idGolonganBkc": 2,
      "idMerk": "628a9946-e590-4201-a76c-efd299738184",
      "idP3CDetail": "052cc2b6-849b-4737-e064-0021f60abd54",
      "idSeripita": 3,
      "isiVolume": 12,
      "jumlahCukai": 810000,
      "jumlahHje": 9000,
      "jumlahLembar": 3,
      "jumlahLembarPending": 0,
      "jumlahSatuan": 12,
"jumlahPesan": 100,
      "kodeJenisProduksiBkc": "SKM",
      "kodeWarna": "JI",
      "namaGolonganBkc": "I",
      "namaMerk": "SEMBILAN CENGKEH",
      "namaSeripita": "III TP",
      "personalisasi": "DEMAJAYA01",
      "satuan": "btg",
      "tahunPita": 2023,
      "tarif": 150,
      "warna": "JINGGA",
      "idJenisProduksiBkc": 6
    }
  ],
  "pengurangCukai": [
    {
      "idJenisDokumen": 7,
      "jumlahCukaiPengurang": 425000,
      "namaJenisDokumen": "CK-3",
      "nomorDokumenPengurang": "CK3-20230001",
      "saldoPengurang": 1000000,
      "tanggalDokumenPengurang": "20-09-2023"
    }
  ],
  "pengurangSppr": [
    {
      "dokumenAsal": "TESTINGDOC",
      "jumlahPengurangSppr": 9000,
      "nomorDokumenAsal": "1221",
      "nomorPr4": "12345",
      "pajakRokok": 1000,
      "saldoPr4": 10000,
      "tanggalPr4": "16-08-2023"
    }
  ],
  "jumlahCukaiPengurang": 425000,
  "jumlahCukaiDibayar": 385000,
  "jumlahCukaiPembulatan": 385000
}

Validation Rules

Field

Rules

idKuasa

Harus merupakan UUID yang valid.

idNppbkc

Harus merupakan UUID yang valid.

jumlahCukaiDibayar

Harus berupa angka positif

jumlahCukaiPengurang

Harus berupa angka positif

tanggalCk1

Harus dalam format DD-MM-YYYY

jumlahCukai

Harus berupa angka positif

hje

Harus berupa angka positif

idMerk

Harus merupakan UUID yang valid.

idP3CDetail

Harus merupakan UUID yang valid.

jumlahCukai

Harus berupa angka positif

jumlahHje

Harus berupa angka positif

jumlahLembar

Harus berupa angka positif

jumlahLembarPending

Harus berupa angka positif

jumlahSatuan

Harus berupa angka positif

jumlahPesan

Harus berupa angka positif

tarif

Harus berupa angka positif

jumlahCukaiPengurang

Harus berupa angka positif

saldoPengurang

Harus berupa angka positif

tanggalDokumenPengurang

Harus dalam format DD-MM-YYYY

jumlahPengurangSppr

Harus berupa angka positif

saldoPr4

Harus berupa angka positif

tanggalPr4

Harus dalam format DD-MM-YYYY
```

### Response

200

```json
{
  "message": "Tidak Boleh Lanjut, Dikarenakan Perusahaan Mempunyai Hutang",
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