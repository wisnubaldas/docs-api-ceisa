# Get Pengurang Pajak Rokok

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi pengurangan pajak rokok berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/getPengurangPajakRokok?limit={limit}&idNppbkc={idNppbkc}&page={page}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idNppbkc |
| `String` | `Identifikasi unik untuk NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | e0f8b402-4440-44c9-b0cd-22662629e4ce |

`GET` `{API_URL}/getPengurangPajakRokok?limit=10&idNppbkc=e0f8b402-4440-44c9-b0cd-22662629e4ce&page=1`

### Response

200

```json
{
  "message": "Pengurang SPPR Kosong, Harap Rekam PR-4 Terlebih Dahulu !",
  "status": true,
  "data": {
    "currentPage": 1,
    "limit": 10,
    "totalPages": 0,
    "totalData": 0,
    "listData": []
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