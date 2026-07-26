# Get Detail MMEA

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail MMEA pada suatu dokumen CK-4 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}portal/ck4/detail-mmea?idCk4={idCk4}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idCk4 |
| `String` | `Identifikasi unik untuk CK-4` | 834ea982-002a-4862-bf03-bb1fcdad055f |

`GET` `{API_URL}portal/ck4/detail-mmea?idCk4=834ea982-002a-4862-bf03-bb1fcdad055f`

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
        "idNppbkc": null,
        "namaNppbkc": "DEMANG JAYA PR",
        "nppbkc": "0669986374654000070613",
        "alamatNppbkc": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
        "jenisLaporan": "BULANAN",
        "nomorPemberitahuan": "7676767676",
        "tanggalPemberitahuan": "2024-08-12T00:00:00.000+07:00",
        "tanggalJamProduksiAwal": "2024-08-01T00:00:00.000+07:00",
        "tanggalJamProduksiAkhir": "2024-08-31T00:00:00.000+07:00",
        "periodeBulan": "Agustus",
        "periodeTahun": "2024",
        "totalJumlahKemasan": 12,
        "totalJumlahKemasanDilekatiPita": 300,
        "totalJumlahProduksi": 1176.00,
        "namaKota": "Kabupaten Malang",
        "namaPengusaha": "intan",
        "npwp": "669986374654000",
        "jenisBarangKenaCukai": "HT",
        "tanggalDiterima": null,
        "nomorSurat": null,
        "tanggalSurat": null,
        "nipPenjabatBc": null,
        "keteranganPerbaikan": null,
        "namaPenjabat": null,
        "kodeUploadPerbaikan": null,
        "isStck": null,
        "kodeKantor": "070600",
        "namaKantor": "KPPBC TMC MALANG",
        "status": "Selesai",
        "idProses": "8712d363-478a-42a2-9cdf-bb1a4b2e65b1",
        "tanggalPermohonanPerbaikan": null,
        "nomorPermohonanPerbaikan": null,
        "tanggalPembatalan": null,
        "nomorpembatalan": null,
        "idSpl": "48b3632d-ced9-4e33-a353-cc151fb683b6",
        "details": [
            {
                "idCk4Detail": "0ffd83df-26db-4731-8e89-218c17f9ce7c",
                "idMerkMmea": null,
                "namaMerkMmea": null,
                "isiMmea": 98.00,
                "tarifMmea": 3074.00,
                "kadarMmea": null,
                "nomorProduksi": "878",
                "keterangan": "test",
                "tanggalProduksi": "2024-08-01",
                "jumlahKemasan": 12,
                "jumlahProduksi": null,
                "jumlahKemasanDilekatiPita": 300,
                "kodeSatuan": "btg",
                "namaGolongan": null,
                "idJenisProduksiBkc": 5
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