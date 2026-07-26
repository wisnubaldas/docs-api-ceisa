# Browse Data Merk (by NPPBKC)

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi data merk berdasarkan parameter yang diberikan (untuk modul Perdagangan) 

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/data-merk/browse?nppbkc={nppbkc}&page={page}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0011335387641000070611 |
| `page` | `Integer` | Nomor Halaman |

`GET` `{API_URL}/data-merk/browse?nppbkc=0011335387641000070611&page=1`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "currentPage": 1,
    "totalData": 6,
    "totalPages": 1,
    "limit": 10,
    "listData": [
      {
        "idNppbkc": "fe3c9197-df48-05e6-e054-0021f60abd54",
        "nppbkc": "0011335387641000070611",
        "idMerk": "0453bfde-639c-4965-a61c-8b350de5fec3",
        "namaKantor": "KPPBC TMC MALANG",
        "namaPerusahaan": "MOLINDO RAYA INDUSTRIAL, PT.",
        "merkMmea": "Ea Murni Kadar 97%",
        "idJenisBkc": 1,
        "jenisMmea": "EA",
        "idGolongan": null,
        "golongan": null,
        "kadar": null,
        "cukaiLiter": 20000,
        "isi": 0,
        "kemasan": null
      },
      {
        "idNppbkc": "fe3c9197-df48-05e6-e054-0021f60abd54",
        "nppbkc": "0011335387641000070611",
        "idMerk": "8b801c5f-8dae-41c6-b30f-74a8498d4521",
        "namaKantor": "KPPBC TMC MALANG",
        "namaPerusahaan": "MOLINDO RAYA INDUSTRIAL, PT.",
        "merkMmea": "Ea Murni Kadar 65%",
        "idJenisBkc": 1,
        "jenisMmea": "EA",
        "idGolongan": null,
        "golongan": null,
        "kadar": null,
        "cukaiLiter": 20000,
        "isi": 0,
        "kemasan": null
      },
      {
        "idNppbkc": "fe3c9197-df48-05e6-e054-0021f60abd54",
        "nppbkc": "0011335387641000070611",
        "idMerk": "c3dccd51-36cd-4ef7-b07c-055554278a36",
        "namaKantor": "KPPBC TMC MALANG",
        "namaPerusahaan": "MOLINDO RAYA INDUSTRIAL, PT.",
        "merkMmea": "Ea Murni Kadar 65%",
        "idJenisBkc": 1,
        "jenisMmea": "EA",
        "idGolongan": null,
        "golongan": null,
        "kadar": null,
        "cukaiLiter": 20000,
        "isi": 0,
        "kemasan": null
      },
      {
        "idNppbkc": "fe3c9197-df48-05e6-e054-0021f60abd54",
        "nppbkc": "0011335387641000070611",
        "idMerk": "ed9daa8f-daeb-4d0f-9482-df58dbec49de",
        "namaKantor": "KPPBC TMC MALANG",
        "namaPerusahaan": "MOLINDO RAYA INDUSTRIAL, PT.",
        "merkMmea": "EA SDA BIT 6",
        "idJenisBkc": 1,
        "jenisMmea": "EA",
        "idGolongan": null,
        "golongan": null,
        "kadar": null,
        "cukaiLiter": 20000,
        "isi": 0,
        "kemasan": null
      },
      {
        "idNppbkc": "fe3c9197-df48-05e6-e054-0021f60abd54",
        "nppbkc": "0011335387641000070611",
        "idMerk": "6c6e506a-a05b-4313-8438-69428a740d27",
        "namaKantor": "KPPBC TMC MALANG",
        "namaPerusahaan": "MOLINDO RAYA INDUSTRIAL, PT.",
        "merkMmea": "Ea Murni Kadar 70%",
        "idJenisBkc": 1,
        "jenisMmea": "EA",
        "idGolongan": null,
        "golongan": null,
        "kadar": 70,
        "cukaiLiter": 20000,
        "isi": 0,
        "kemasan": null
      },
      {
        "idNppbkc": "fe3c9197-df48-05e6-e054-0021f60abd54",
        "nppbkc": "0011335387641000070611",
        "idMerk": "57efa6ed-2aad-45b8-912b-3e6fb6156dd6",
        "namaKantor": "KPPBC TMC MALANG",
        "namaPerusahaan": "MOLINDO RAYA INDUSTRIAL, PT.",
        "merkMmea": "EA SDA IPA 5",
        "idJenisBkc": 1,
        "jenisMmea": "EA",
        "idGolongan": null,
        "golongan": null,
        "kadar": null,
        "cukaiLiter": 20000,
        "isi": 0,
        "kemasan": null
      }
    ]
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

Last updated 9 months ago

📄
```