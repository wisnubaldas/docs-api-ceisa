# Browse Dokumen LACK-11

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi browse dokumen LACK-11 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/lack11/browse-dokumen?jenisBkc={jenisBkc}&page={page}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | jenisBkc |
| `String` | `Jenis dari BKC (Barang Kena Cukai)` | EA |
| `page` | `Integer` | Nomor Halaman |

`GET` `{API_URL}/portal/lack11/browse-dokumen?jenisBkc=EA&page=1`

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
    "totalData": 1,
    "listData": [
      {
        "status": "Selesai",
        "idLack11Header": "eb0ea711-b3a3-4f9e-b7db-f7b4ee726d39",
        "periode": 2,
        "jenisBkc": "EA",
        "waktuRekam": "2024-07-17T07:16:27.047+00:00",
        "idProses": "9688bac5-cd31-47eb-8217-3dc884ca5252",
        "namaPerusahaan": "MOLINDO RAYA INDUSTRIAL, PT.",
        "nppbkc": "0011335387641000070611"
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

Last updated 8 months ago

📄
```