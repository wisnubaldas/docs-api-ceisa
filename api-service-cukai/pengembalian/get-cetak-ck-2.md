# Get Cetak CK-2

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi cetak CK-2 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/hostToHostCetakCk2/cetakCk2?idCk2Header={idCk2Header}&nomorCk2={nomorCk2}&nppbkc={nppbkc}&tanggalCk2={tanggalCk2}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idCk2Header |
| `String` | `Identifikasi unik untuk header CK-2` | 3adf8334-d481-4f66-b29d-3f9a08308746 |
| `nomorCk2` | `String` | Nomor dokumen CK-2 |
| `CK2123456` | `nppbkc` | String |
| `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | `1234567890123456789012` | tanggalCk2 |
| `Date` | `Tanggal penerbitan dokumen CK-2` | 2023-09-13 |

`GET` `{API_URL}/hostToHostCetakCk2/cetakCk2?idCk2Header=3adf8334-d481-4f66-b29d-3f9a08308746&nomorCk2=CK2123456&nppbkc=1234567890123456789012&tanggalCk2=2023-09-13`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "header": null,
    "detail": []
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