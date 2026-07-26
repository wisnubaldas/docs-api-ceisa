# Browse Data Draft CK-5

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi browse data draft CK-5 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/ck5/browse-draft?page={page}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | Page |
| `Integer` | `Nomor halaman` | 1 |
| `flagPeriodik` | `String` | Status periodik (Y = Ya atau N = Tidak) |

`GET` `{API_URL}/portal/ck5/browse-draft?page=1`

### Response

200

```json
{
  "message": "SUCCESS",
  "status": true,
  "data": {
    "currentPage": 1,
    "totalData": 0,
    "totalPages": 0,
    "limit": 10,
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

Last updated 1 year ago
```