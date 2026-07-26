# Get Merk by Detail PBCK-7

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi merk berdasarkan parameter yang diberikan (untuk modul Pengembalian) 

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/ck1/getMerkByDetailPbck7H2h?nppbkc={nppbkc}&tanggalAkhir={tanggalAkhir}&tanggalAwal={tanggalAwal}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `Identifikasi unik untuk NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0026722918048000040422 |
| `tanggalAkhir` | `Date` | Tanggal pencarian bagian akhir |
| `01-09-2024` | `tanggalAwal` | Date |
| `Tanggal pencarian bagian awal` | `31-10-2023` | Parameter Example |

`GET` `{API_URL}/ck1/getMerkByDetailPbck7H2h?nppbkc=0014539407415000150312&tanggalAkhir=01-09-2024&tanggalAwal=31-10-2023`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": [
    {
      "idMerk": "05390e9b-ca8a-6c00-e064-0021f60abd54",
      "namaMerk": "Heineken",
      "tarif": 110,
      "tahunPita": 2021,
      "hje": 0,
      "isiVolume": 12,
      "idSeripita": 5,
      "totalJumlahSatuan": 12
    },
    {
      "idMerk": "412327eb-0e0d-4ea8-b0d6-b42bb45fd8ff",
      "namaMerk": "TIS2",
      "tarif": 0,
      "tahunPita": 2024,
      "hje": 0,
      "isiVolume": 2500,
      "idSeripita": 5,
      "totalJumlahSatuan": 90
    },
    {
      "idMerk": "412327eb-0e0d-4ea8-b0d6-b42bb45fd8ff",
      "namaMerk": "TIS2",
      "tarif": 200,
      "tahunPita": 2024,
      "hje": 0,
      "isiVolume": 2500,
      "idSeripita": 5,
      "totalJumlahSatuan": 180
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

Last updated 9 months ago

📄
```