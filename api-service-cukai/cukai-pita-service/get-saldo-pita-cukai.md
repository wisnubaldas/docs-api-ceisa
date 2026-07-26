# Get Saldo Pita Cukai

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi saldo pita cukai berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/getDataSaldoPitaCukai?lokasiPita={lokasiPita}&nppbkc={nppbkc}&tahunPita={tahunPita}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | lokasiPita |
| `String` | `Lokasi Pita` | KP |
| `nppbkc` | `String` | NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai) |
| `0026722918048000040422` | `tahunPita` | Integer |
| `Tahun dilekatkan pita` | `2023` | Parameter Example |

`GET` `{API_URL}/getDataSaldoPitaCukai?lokasiPita=KP&nppbkc=0026722918048000040422&tahunPita=2023`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": [
    {
      "saldo": 650,
      "idP3cDetail": "052cc2b6-84ae-4737-e064-0021f60abd54"
    },
    {
      "saldo": 500,
      "idP3cDetail": "052cc2b6-84ad-4737-e064-0021f60abd54"
    }
  ]
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