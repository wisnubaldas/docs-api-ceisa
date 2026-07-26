# Browse CK-4

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi CK-4 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/ck4/browse?idJenisBkc={idJenisBkc}&jenisLaporan={jenisLaporan}&nppbkc={nppbkc}&page={page}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idJenisBkc |
| `Integer` | `Identifikasi unik untuk jenis BKC` | 3 |
| `jenisLaporan` | `String` | Jenis Laporan |
| `bulan` | `nppbkc` | String |
| `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | `0669986374654000070613` | page |
| `Integer` | `Nomor Halaman` | 1 |

`GET` `{API_URL}/portal/ck4/browse?idJenisBkc=3&jenisLaporan=bulan&nppbkc=0669986374654000070613&page=1`

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": {
        "currentPage": 1,
        "totalData": 19,
        "totalPages": 2,
        "limit": 10,
        "listData": [
            {
                "idTarifMerkHeader": "779b6d6b-4e51-4440-bb01-c09f74f87f29",
                "nomorSkep": "KEP-673/KBC.0906/TRF/2023",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": 138.1818181818182,
                "hjePerKemasan": 38000.0,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "189c6a4b-2aea-42f5-bbb2-5aa16305da6c",
                "namaMerk": "ICELAND VODKA MIX LONG ISLAND",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": null,
                "akhirBerlaku": null,
                "status": "Penetapan Tarif",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC JAKARTA",
                "namaPerusahaan": "PANJANG JIWO, PT.",
                "isi": 275.0,
                "tarifSpesifik": 15000.0,
                "tarifPerKemasan": null,
                "statusMerk": "TIDAK AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "0d66e76e-e73f-488d-8884-07e02672f806",
                "nomorSkep": "KEP-672/KBC.0906/TRF/2023",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": 138.1818181818182,
                "hjePerKemasan": 38000.0,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "189c6a4b-2aea-42f5-bbb2-5aa16305da6c",
                "namaMerk": "ICELAND VODKA MIX LONG ISLAND",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": null,
                "akhirBerlaku": null,
                "status": "Penetapan Tarif",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC JAKARTA",
                "namaPerusahaan": "PANJANG JIWO, PT.",
                "isi": 275.0,
                "tarifSpesifik": 15000.0,
                "tarifPerKemasan": null,
                "statusMerk": "TIDAK AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "d4914f33-2ccf-4a75-b791-bee84c87b3d6",
                "nomorSkep": "KEP-464/KBC.0906/TRF/2023",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "189c6a4b-2aea-42f5-bbb2-5aa16305da6c",
                "namaMerk": "ICELAND VODKA MIX LONG ISLAND",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": null,
                "akhirBerlaku": null,
                "status": "AKTIF",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "DIREKTORAT IKC",
                "namaPerusahaan": "PANJANG JIWO, PT.",
                "isi": 275.0,
                "tarifSpesifik": 15000.0,
                "tarifPerKemasan": null,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "48c1b958-873f-4605-89f2-97dbf2af273e",
                "nomorSkep": "KEP-463/KBC.0906/TRF/2023",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "189c6a4b-2aea-42f5-bbb2-5aa16305da6c",
                "namaMerk": "ICELAND VODKA MIX LONG ISLAND",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": null,
                "akhirBerlaku": null,
                "status": "AKTIF",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "DIREKTORAT IKC",
                "namaPerusahaan": "PANJANG JIWO, PT.",
                "isi": 275.0,
                "tarifSpesifik": 15000.0,
                "tarifPerKemasan": null,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "089c2093-815e-4e36-a7ab-c377ed7c6053",
                "nomorSkep": "KEP-462/KBC.0906/TRF/2023",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "189c6a4b-2aea-42f5-bbb2-5aa16305da6c",
                "namaMerk": "ICELAND VODKA MIX LONG ISLAND",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": null,
                "akhirBerlaku": null,
                "status": "AKTIF",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "DIREKTORAT IKC",
                "namaPerusahaan": "PANJANG JIWO, PT.",
                "isi": 275.0,
                "tarifSpesifik": 15000.0,
                "tarifPerKemasan": null,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "1f530496-68a7-443d-93dd-6c210cd30a79",
                "nomorSkep": "KEP-461/KBC.0906/TRF/2023",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "189c6a4b-2aea-42f5-bbb2-5aa16305da6c",
                "namaMerk": "ICELAND VODKA MIX LONG ISLAND",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": null,
                "akhirBerlaku": null,
                "status": "AKTIF",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "DIREKTORAT IKC",
                "namaPerusahaan": "PANJANG JIWO, PT.",
                "isi": 275.0,
                "tarifSpesifik": 15000.0,
                "tarifPerKemasan": null,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "8c0511d1-dc0c-4325-9f8f-301f3a107334",
                "nomorSkep": "KEP-291/KBC.0906/TRF/2023",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": 15000.0,
                "hjePerKemasan": 1500000.0,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "1593cf85-b99c-4161-aea8-3f1cf859468f",
                "namaMerk": "HALAL CUP",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN B",
                "awalBerlaku": null,
                "akhirBerlaku": null,
                "status": "AKTIF",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TASIKMALAYA",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 100.0,
                "tarifSpesifik": 15000.0,
                "tarifPerKemasan": null,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "26e28577-f9fb-4f34-b0ec-52a5151e4c2e",
                "nomorSkep": "KEP-290/KBC.0906/TRF/2023",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": 15000.0,
                "hjePerKemasan": 1500000.0,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "1593cf85-b99c-4161-aea8-3f1cf859468f",
                "namaMerk": "HALAL CUP",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN B",
                "awalBerlaku": null,
                "akhirBerlaku": null,
                "status": "AKTIF",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TASIKMALAYA",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 100.0,
                "tarifSpesifik": 15000.0,
                "tarifPerKemasan": null,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "2f10e096-a674-4800-beab-7944e8063fed",
                "nomorSkep": "KEP-289/KBC.0906/TRF/2023",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": 15000.0,
                "hjePerKemasan": 1500000.0,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "1593cf85-b99c-4161-aea8-3f1cf859468f",
                "namaMerk": "HALAL CUP",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN B",
                "awalBerlaku": null,
                "akhirBerlaku": null,
                "status": "AKTIF",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TASIKMALAYA",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 100.0,
                "tarifSpesifik": 15000.0,
                "tarifPerKemasan": null,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "d0fc1d7a-42a9-4cb3-89ac-8d531ddc3442",
                "nomorSkep": "KEP-288/KBC.0906/TRF/2023",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": 15000.0,
                "hjePerKemasan": 1500000.0,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "1593cf85-b99c-4161-aea8-3f1cf859468f",
                "namaMerk": "HALAL CUP",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN B",
                "awalBerlaku": null,
                "akhirBerlaku": null,
                "status": "AKTIF",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TASIKMALAYA",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 100.0,
                "tarifSpesifik": 15000.0,
                "tarifPerKemasan": null,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
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

Last updated 8 months ago

📄
```