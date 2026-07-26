# Get Jenis Pita

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi jenis pita cukai berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/transform/getCukaiJenisPita?nppbkc={nppbkc}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0014539407415000150312 |

`GET` `{API_URL}/transform/getCukaiJenisPita?nppbkc=0014539407415000150312`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": [
    {
      "idJenisPita": "3f872bea-3121-471c-9fac-b19baeab783e",
      "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
      "kodeJenisProduksiBkc": "A",
      "isiVolume": 10,
      "hje": 0,
      "tarif": 15000,
      "idSeripita": 5,
      "awalBerlaku": "2023-10-25T17:00:00.000+00:00",
      "akhirBerlaku": "2023-12-30T17:00:00.000+00:00",
      "flagPakai": "N",
      "idProses": "0488280d-6a2f-4ce0-8a8b-28e6340ce57c",
      "personalisasi": "PANJIWPT00",
      "idGolonganBkc": 5,
      "namaSeripita": "I",
      "namaGolonganBkc": "TANPA GOLONGAN",
      "idJenisBkc": 2,
      "kodeWarna": "ab",
      "warna": "abang",
      "idJenisProduksiBkc": 13,
      "kodeKantor": "999999",
      "namaKantor": "UNIT LAIN DI LUAR DJBC",
      "nppbkc": "0014539407415000150312",
      "namaPerusahaan": "PANJANG JIWO PT",
      "tahunPita": 2023,
      "waktuRekam": "2023-10-26T04:36:18.926+00:00",
      "kodeSatuan": "btg",
      "status": null,
      "nomorDokumen": null,
      "tanggalDokumen": null,
      "tanggalPembatalan": null,
      "nomorPembatalan": null,
      "nipPejabat": null,
      "namaPejabat": null,
      "keterangan": null,
      "namaPengusaha": null,
      "namaKota": null,
      "kodeUploadDokumen": null
    },
    {
      "idJenisPita": "2fc5d0a6-018a-47d0-95fd-b67502c59adf",
      "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
      "kodeJenisProduksiBkc": "A",
      "isiVolume": 10,
      "hje": 0,
      "tarif": 80000,
      "idSeripita": 5,
      "awalBerlaku": "2023-10-25T17:00:00.000+00:00",
      "akhirBerlaku": "2023-12-30T17:00:00.000+00:00",
      "flagPakai": "N",
      "idProses": "e7dd4072-421f-4566-893e-3d54c41f7da0",
      "personalisasi": "PANJIWPT00",
      "idGolonganBkc": 5,
      "namaSeripita": "I",
      "namaGolonganBkc": "TANPA GOLONGAN",
      "idJenisBkc": 2,
      "kodeWarna": "BI",
      "warna": "BIRU",
      "idJenisProduksiBkc": 13,
      "kodeKantor": "999999",
      "namaKantor": "UNIT LAIN DI LUAR DJBC",
      "nppbkc": "0014539407415000150312",
      "namaPerusahaan": "PANJANG JIWO PT",
      "tahunPita": 2023,
      "waktuRekam": "2023-10-26T07:23:20.726+00:00",
      "kodeSatuan": "btg",
      "status": null,
      "nomorDokumen": null,
      "tanggalDokumen": null,
      "tanggalPembatalan": null,
      "nomorPembatalan": null,
      "nipPejabat": null,
      "namaPejabat": null,
      "keterangan": null,
      "namaPengusaha": null,
      "namaKota": null,
      "kodeUploadDokumen": null
    },
    {
      "idJenisPita": "2864222d-1112-430c-a7a5-990585c26a4c",
      "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
      "kodeJenisProduksiBkc": "A",
      "isiVolume": 20,
      "hje": 0,
      "tarif": 15000,
      "idSeripita": 5,
      "awalBerlaku": "2023-10-25T17:00:00.000+00:00",
      "akhirBerlaku": "2023-12-30T17:00:00.000+00:00",
      "flagPakai": "N",
      "idProses": "f31475bf-5d78-4bd2-bf25-fa872d1d76ef",
      "personalisasi": "PANJIWPT00",
      "idGolonganBkc": 5,
      "namaSeripita": "I",
      "namaGolonganBkc": "TANPA GOLONGAN",
      "idJenisBkc": 2,
      "kodeWarna": "ab",
      "warna": "abang",
      "idJenisProduksiBkc": 13,
      "kodeKantor": "999999",
      "namaKantor": "UNIT LAIN DI LUAR DJBC",
      "nppbkc": "0014539407415000150312",
      "namaPerusahaan": "PANJANG JIWO PT",
      "tahunPita": 2023,
      "waktuRekam": "2023-10-26T09:44:04.757+00:00",
      "kodeSatuan": "btg",
      "status": null,
      "nomorDokumen": null,
      "tanggalDokumen": null,
      "tanggalPembatalan": null,
      "nomorPembatalan": null,
      "nipPejabat": null,
      "namaPejabat": null,
      "keterangan": null,
      "namaPengusaha": null,
      "namaKota": null,
      "kodeUploadDokumen": null
    },
    {
      "idJenisPita": "eedfa22e-28c7-4e89-8574-834b123a399b",
      "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
      "kodeJenisProduksiBkc": "A",
      "isiVolume": 700,
      "hje": 0,
      "tarif": 15000,
      "idSeripita": 0,
      "awalBerlaku": "2023-12-05T17:00:00.000+00:00",
      "akhirBerlaku": "2023-12-30T17:00:00.000+00:00",
      "flagPakai": "N",
      "idProses": "e0e8c3fc-b31b-4df9-ac45-59a499642874",
      "personalisasi": "PANJIWPT00",
      "idGolonganBkc": 5,
      "namaSeripita": null,
      "namaGolonganBkc": "TANPA GOLONGAN",
      "idJenisBkc": 2,
      "kodeWarna": "ab",
      "warna": "abang",
      "idJenisProduksiBkc": 13,
      "kodeKantor": "009000",
      "namaKantor": "DIREKTORAT IKC",
      "nppbkc": "0014539407415000150312",
      "namaPerusahaan": "PANJANG JIWO PT",
      "tahunPita": 2023,
      "waktuRekam": "2023-12-06T07:58:50.700+00:00",
      "kodeSatuan": "ltr",
      "status": "Pembatalan Pita Portal ",
      "nomorDokumen": "NO/656/2023-12-06",
      "tanggalDokumen": null,
      "tanggalPembatalan": "2023-12-17T17:00:00.000+00:00",
      "nomorPembatalan": "TEST/01/2023",
      "nipPejabat": null,
      "namaPejabat": null,
      "keterangan": null,
      "namaPengusaha": null,
      "namaKota": null,
      "kodeUploadDokumen": "QYR1do0bKujoQFOqkrh_rQ==/cuQHp8--6_YY0OhogE6pSA==/KZ0bB4Xvq7NMl05sSrCgAEcWTdgTlC8Vly-F2E2bjYiL8ArqMIvHeGd9mzQLNjXLl305t-qg8fuxAgy9dbXQcw=="
    },
    {
      "idJenisPita": "53e0f65b-81de-45a2-882a-92eda7e94447",
      "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
      "kodeJenisProduksiBkc": "A",
      "isiVolume": 1500,
      "hje": 0,
      "tarif": 10000,
      "idSeripita": 5,
      "awalBerlaku": "2024-03-02T17:00:00.000+00:00",
      "akhirBerlaku": "2024-03-20T17:00:00.000+00:00",
      "flagPakai": "N",
      "idProses": "deff439c-dbe4-4a50-babb-a4e6822eded8",
      "personalisasi": "PANJIWPT00",
      "idGolonganBkc": 5,
      "namaSeripita": "MMEA",
      "namaGolonganBkc": "TANPA GOLONGAN",
      "idJenisBkc": 2,
      "kodeWarna": "ab",
      "warna": "abang",
      "idJenisProduksiBkc": 13,
      "kodeKantor": "150300",
      "namaKantor": "KPPBC TMP A TANGERANG",
      "nppbkc": "0014539407415000150312",
      "namaPerusahaan": "PANJANG JIWO PT",
      "tahunPita": 2024,
      "waktuRekam": "2024-03-21T02:55:19.185+00:00",
      "kodeSatuan": "ltr",
      "status": "Pita Non Aktif",
      "nomorDokumen": "NO/7638/2024-03-21",
      "tanggalDokumen": null,
      "tanggalPembatalan": "2024-03-20T17:00:00.000+00:00",
      "nomorPembatalan": "434",
      "nipPejabat": null,
      "namaPejabat": null,
      "keterangan": "TEST",
      "namaPengusaha": null,
      "namaKota": null,
      "kodeUploadDokumen": "QYR1do0bKujoQFOqkrh_rQ==/cuQHp8--6_YY0OhogE6pSA==/RgS_D8ybcxzz9u17HOcLzqVsjNVoCipXSUsr6LltiUMJtVPTbsxfu39G1_3QaS4ZtnJS9P5EK9LViD7cHzJ-Ou17SrJYrRZJ-Wwj8PVPxf1ciWrSpoM1mMN52ADuPN1_eeJlgENz3uZRPk3UpNvAZxna4vvS83-aL5XC0OdX1m6Wv4C9Fsu9ThFpG--UwafhsksbOUUbceQ5L-A_EFrTK37ZHp2VcFybtWGYQn_iN_I="
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

Last updated 11 months ago
```