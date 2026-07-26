# Get Cetak PBCK-4

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi cetak PBCK-4 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/host-to-host/cetakPbck4?nomorPbck4={nomorPbck4}&nppbkc={nppbkc}&tanggalPbck4={tanggalPbck4}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nomorPbck4 |
| `String` | `Nomor dokumen PBCK-4` | PBCK-4-20235 |
| `nppbkc` | `String` | NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai) |
| `0014539407415000150312` | `tanggalPbck4` | Date |
| `Tanggal penerbitan dokumen PBCK-4` | `24-10-2023` | Parameter Example |

`GET` `{API_URL}/host-to-host/cetakPbck4?nomorPbck4=PBCK-4-20235&nppbkc=0014539407415000150312&tanggalPbck4=24-10-2023`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "header": null
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