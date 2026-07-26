# Get Saldo Pita Cukai (by id P3C detail)

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi saldo pita cukai berdasarkan parameter ID detail P3C yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/be/host-to-host/saldo-pita-cukai/getSaldoPitaCukaiById?idNppbkc={idNppbkc}&idP3cDetail={idP3cDetail}&page={page}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idNppbkc |
| `String` | `Identifikasi unik untuk NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 111e2222-e89b-12d3-a456-426614174001 |
| `idP3cDetail` | `String` | Identifikasi unik untuk detail P3C |
| `fe8acc9c-3818-802c-e054-90e2ba68fe24` | `page` | Integer |
| `Nomor Halaman` | `1` | Parameter Example |

`GET` `{API_URL}/be/host-to-host/saldo-pita-cukai/getSaldoPitaCukaiById?idNppbkc=111e2222-e89b-12d3-a456-426614174001&idP3cDetail=fe8acc9c-3818-802c-e054-90e2ba68fe24&page=1`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "header": {
      "nomorObc": "30007",
      "kodeKantor": "070600",
      "namaKantor": "KPPBC TMC MALANG",
      "nppbkc": "0028079515623000070623",
      "tanggalP3c": "2023-09-03",
      "kodeWarna": "AB",
      "warna": "ABU-ABU",
      "namaSeripita": "III TP",
      "idP3cDetail": "fe8acc9c-3818-802c-e054-90e2ba68fe24",
      "idJenisBkc": "3",
      "idSeripita": 3,
      "isiVolume": 4.8,
      "tarif": 6,
      "hje": 37,
      "idP3cHeader": "fe8acc9c-3809-802c-e054-90e2ba68fe24",
      "nomorP3c": "000693",
      "namaPerusahaan": "BENTOEL DISTRIBUSI UTAMA, PT",
      "kodeJenisProduksiBkc": "REL",
      "idNppbkc": "111e2222-e89b-12d3-a456-426614174001",
      "ambilPitaCukai": "KP",
      "personalisasi": "-",
      "tahunPita": 2023,
      "tanggalOBC": "0008-03-15"
    },
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