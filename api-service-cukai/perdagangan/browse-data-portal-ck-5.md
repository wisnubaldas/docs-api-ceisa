# Browse Data Portal CK-5

## 

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi browse data portal CK-5 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

## 

### Path API

`GET` `{API_URL}/portal/ck5/browse-data-portal`

## 

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

## 

### Response

200

```json
{
    "message": "Data tidak ditemukan",
    "status": false,
    "data": null
}

## 

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

[PreviousPembatalan LACK-11](api-service-cukai/perdagangan/pembatalan-lack-11.md)[NextBrowse Data Draft CK-5](api-service-cukai/perdagangan/browse-data-draft-ck-5.md)

Last updated 7 months ago

Was this helpful?
```