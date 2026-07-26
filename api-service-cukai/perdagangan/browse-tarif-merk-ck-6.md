# Browse Tarif Merk CK-6

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi browse tarif merk CK-6 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/data-merk/browse?idTarifMerkCk6={idTarifMerkCk6}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idTarifMerkCk6 |
| `String` | `Identifikasi unik untuk tarif merk CK-6` | d59d3da6-4b50-4fc9-887a-ce9c79fd6111 |
| `page` | `Integer` | Nomor Halaman |

`GET` `{API_URL}/data-merk/browse?idTarifMerkCk6=d59d3da6-4b50-4fc9-887a-ce9c79fd6111&page=1`

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
        "idTarifMerkCk6": "d59d3da6-4b50-4fc9-887a-ce9c79fd6111",
        "idNppbkc": "fe3c9198-1809-05e6-e054-0021f60abd54",
        "idMerk": "05390e9b-ca9d-6c00-e064-0021f60abd54",
        "merkMmea": "MMEA Panjang Jiwo 3",
        "jenisMmea": "MMEA",
        "golongan": "TANPA GOLONGAN",
        "cukaiLiter": 88000,
        "isi": 500,
        "kemasan": "Botol"
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