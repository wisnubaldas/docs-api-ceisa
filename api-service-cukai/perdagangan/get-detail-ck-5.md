# Get Detail CK-5

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail CK-5 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/ck5/detail-pencarian?idCk5Header={idCk5Header}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idCk5Header |
| `String` | `Identifikasi unik untuk header CK-5` | ea12d474-a36e-4f31-8748-29b4afdeb323 |

`GET` `{API_URL}/portal/ck5/detail-pencarian?idCk5Header=ea12d474-a36e-4f31-8748-29b4afdeb323`

### Response

200

```json
{
  "message": "Success",
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