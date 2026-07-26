# Get Detail Dokumen LACK-11

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail dokumen LACK-11 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/lack11/detail-dokumen?idLack11Header={idLack11Header}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idLack11Header |
| `String` | `Identifikasi unik untuk header LACK-11` | 6e9e9424-7c99-49b5-9df9-789002590149 |

`GET` `{API_URL}/portal/lack11/detail-dokumen?idLack11Header=6e9e9424-7c99-49b5-9df9-789002590149`

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": {
        "idLack11Header": "6e9e9424-7c99-49b5-9df9-789002590149",
        "idProses": null,
        "namaPerusahaan": "PANJANG JIWO PT",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "npwp": "014539407415000",
        "kotaLaporan": null,
        "tanggalLaporan": "2023-10-25",
        "periode": 1,
        "tahunLaporan": "2023",
        "namaPengusaha": "fandi",
        "jenisBkc": "MMEA",
        "nomorPersetujuanPerbaikan": null,
        "tanggalPersetujuanPerbaikan": null,
        "kodeKantor": "999999",
        "waktuRekam": "2023-10-24T22:45:41.309+00:00",
        "kodeUploadDasarPerbaikan": null,
        "alasanPerbaikan": null,
        "nomorPersetujuanPembatalan": null,
        "tanggalPersetujuanPembatalan": null,
        "kodeUploadDasarPembatalan": "MpgBCAeAW6XX7VrEyFlfBw==/EmPe1xTcx17IdOhCiczUyw==/b67ftg80AK7wiBSUAxDUKtZTMN6GlAdUmP2wpKdnMnm1xs3H80Wk_3uf84vVkQtGj8bvvgO2YzjF_A3apje4yFcxWQKG40GxGLz-OaNn9p4=",
        "status": null,
        "alasanPembatalan": "batal ",
        "details": [
            {
                "idLack11Detail": "8420e0d3-8f1b-4226-bdb6-d4350fe6583c",
                "idMerk": "2fc33098-2dd5-4fbf-b43b-f5f3e9f15370",
                "tarifSpesifik": 44000,
                "kadarEa": 40.00,
                "namaMerk": "OKEOKE",
                "hje": null,
                "isi": 500.00,
                "seriPita": "1",
                "pemasukan": 70000.00,
                "satuan": "bungkus",
                "saldoAwal": 5000.00,
                "pengeluaran": 2000.00,
                "bkcMusnah": 5000.00,
                "saldoAkhir": 6000.00,
                "keterangan": "test",
                "sudahDilekati": 0.00,
                "belumDilekati": 0.00,
                "jenisProduksiBkc": null
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

Last updated 9 months ago

📄
```