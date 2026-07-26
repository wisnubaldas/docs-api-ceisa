# Get Daftar Merk

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi daftar merk berdasarkan parameter yang diberikan (untuk modul Pengembalian) 

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/host-to-host/getDaftarMerkH2h?idNppbkc={idNppbkc}&tanggalAkhir={tanggalAkhir}&tanggalAwal={tanggalAwal}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idNppbkc |
| `String` | `Identifikasi unik untuk NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0499af9b-f53b-40c7-b1f8-9b16c9f89b76 |
| `tanggalAkhir` | `Date` | Tanggal pencarian bagian akhir |
| `08-08-2024` | `tanggalAwal` | Date |
| `Tanggal pencarian bagian awal` | `01-01-2020` | Parameter Example |

`GET` `{API_URL}/host-to-host/getDaftarMerkH2h?idNppbkc=0499af9b-f53b-40c7-b1f8-9b16c9f89b76&tanggalAkhir=08-08-2024&tanggalAwal=01-01-2020`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "matriksCk1": [
      {
        "idMerk": "05390e9b-ca8a-6c00-e064-0021f60abd54",
        "namaMerk": "Heineken",
        "tarif": 110,
        "tahunPita": 2021,
        "jumlahSatuan": 12,
        "hje": 0,
        "isiVolume": 12,
        "idSeripita": 5
      },
      {
        "idMerk": "412327eb-0e0d-4ea8-b0d6-b42bb45fd8ff",
        "namaMerk": "TIS2",
        "tarif": 0,
        "tahunPita": 2024,
        "jumlahSatuan": 90,
        "hje": 0,
        "isiVolume": 2500,
        "idSeripita": 5
      },
      {
        "idMerk": "412327eb-0e0d-4ea8-b0d6-b42bb45fd8ff",
        "namaMerk": "TIS2",
        "tarif": 200,
        "tahunPita": 2024,
        "jumlahSatuan": 180,
        "hje": 0,
        "isiVolume": 2500,
        "idSeripita": 5
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

Last updated 10 months ago
```