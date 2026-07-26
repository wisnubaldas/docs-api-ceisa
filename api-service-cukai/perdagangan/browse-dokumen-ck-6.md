# Browse Dokumen CK-6

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi browse dokumen CK-6 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/ck6/browse-dokumen?page={page}&tanggalCk6={tanggalCk6}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | page |
| `Integer` | `Nomor Halaman` | 1 |
| `tanggalCk6` | `Date` | Tanggal penerbitan dokumen CK-6 |

`GET` `{API_URL}/portal/ck6/browse-dokumen?page=1&tanggalCk6=2024-08-20`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "currentPage": 1,
    "limit": 10,
    "totalPages": 1,
    "totalData": 2,
    "listData": [
      {
        "status": null,
        "idCk6Header": "340f8e3e-3af7-4e7d-bd98-f1ef74424812",
        "waktuRekam": "2024-08-20T07:44:40.920+00:00",
        "namaTujuan": "UD SUMBER MAKMUR",
        "jenisIdentitasTujuan": "NPPBKC",
        "nomorIdentitasTujuan": "0705844892654000070652",
        "nppbkc": "0024143463056000150352",
        "tanggalCk6": "2024-08-20",
        "nomorCk6": "000051",
        "statusTujuan": "Penyalur",
        "jenisIdentitasPemasok": "NPPBKC",
        "nomorIdentitasPemasok": "0024143463056000150352",
        "namaPemasok": "MULTI BINTANG INDONESIA NIAGA, PT",
        "statusPemasok": "Penyalur"
      },
      {
        "status": null,
        "idCk6Header": "cacf7086-7341-4cd6-9cfb-857b3c4e3e6c",
        "waktuRekam": "2024-08-20T07:41:43.547+00:00",
        "namaTujuan": "UD SUMBER MAKMUR",
        "jenisIdentitasTujuan": "NPPBKC",
        "nomorIdentitasTujuan": "0705844892654000070652",
        "nppbkc": "0024143463056000150352",
        "tanggalCk6": "2024-08-20",
        "nomorCk6": "000052",
        "statusTujuan": "Penyalur",
        "jenisIdentitasPemasok": "NPPBKC",
        "nomorIdentitasPemasok": "0024143463056000150352",
        "namaPemasok": "MULTI BINTANG INDONESIA NIAGA, PT",
        "statusPemasok": "Penyalur"
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