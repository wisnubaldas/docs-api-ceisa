# Get Detail EA

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail EA pada suatu dokumen CK-4 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/ck4/detail-ea?idCk4={idCk4}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idCk4 |
| `String` | `Identifikasi unik untuk CK-4` | 80ecf32a-6464-499d-8a22-0d25dd96dcc4 |

`GET` `{API_URL}/portal/ck4/detail-ea?idCk4=80ecf32a-6464-499d-8a22-0d25dd96dcc4`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "namaPemrakarsa": null,
    "idProcessPemrakarsa": null,
    "jabatanPemrakarsa": null,
    "nipPemrakarsa": null,
    "idNppbkc": "6b7b89eb-8748-4c4f-a902-9635ab9f8d8b",
    "idCk4header": null,
    "namaNppbkc": "PERUSAHAAN INDUSTRI DAN DAGANG ONGKOWIDJOJO, PT.",
    "alamatNppbkc": "Jl. Kol. Sugiono 28 Malang",
    "jenisLaporan": null,
    "nomorPemberitahuan": "004/OW/2023",
    "tanggalPemberitahuan": "2023-01-17T00:00:00.000+07:00",
    "tanggalJamProduksiAwal": "2023-01-01T00:00:00.000+07:00",
    "tanggalJamProduksiAkhir": "2023-01-14T00:00:00.000+07:00",
    "totalJumlahProduksi": 58770316,
    "namaKota": "Kota Malang",
    "namaPengusaha": "Harman Lukita",
    "npwp": "011230372651000",
    "nppbkc": "0706130088",
    "namaPerusahaan": "PERUSAHAAN INDUSTRI DAN DAGANG ONGKOWIDJOJO, PT.",
    "alamatPerusahaan": "Jl. Kol. Sugiono 28 Malang",
    "jenisBarangKenaCukai": "HT",
    "tanggalDiterima": "2023-07-24T00:00:00.000+07:00",
    "nomorSurat": null,
    "tanggalSurat": null,
    "nipPenjabatBc": "010101214",
    "keteranganPerbaikan": null,
    "namaPenjabat": null,
    "kodeUploadPerbaikan": null,
    "isStck": null,
    "kodeKantor": "070600",
    "namaKantor": "KPPBC TMC MALANG",
    "status": "Selesai",
    "idProses": "2df0e4d5-4320-49ea-afb7-f549cc56e20e",
    "tanggalPermohonanPerbaikan": null,
    "nomorPermohonanPerbaikan": null,
    "tanggalPembatalan": null,
    "nomorPembatalan": null,
    "idSpl": null,
    "details": []
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