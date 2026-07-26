# Browse Tarif Merk MMEA

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi tarif merk MMEA berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/tarif-merk/browse-mmea?nppbkc={nppbkc}&page={page}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0014539407415000150312 |
| `page` | `Integer` | Nomor halaman |

`GET` `{API_URL}/portal/tarif-merk/browse-mmea?nppbkc=0014539407415000150312&page=1`

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": {
        "currentPage": 1,
        "totalData": 276,
        "totalPages": 28,
        "limit": 10,
        "listData": [
            {
                "idTarifMerkHeader": "a3e86525-7489-4141-afb7-e39dc09646c5",
                "nomorSkep": "LLLLLL",
                "tanggalSkep": "2024-08-16",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "0ac3b880-03d9-42b5-9da6-c7f3ea65c6b3",
                "namaMerk": "Arak",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TANGERANG",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 200.0,
                "tarifSpesifik": 8000000.0,
                "tarifPerKemasan": 1600000.0,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/V8lBx9QieIrB6W46noGx7YDC66rcuSwcOb27wfZBkGQWDEtvrjTpu58NI4MOvoZeWG6OLVZ0uRg9Y6fVQJ4Anw=="
            },
            {
                "idTarifMerkHeader": "ad197e3b-6cdc-41f8-bc73-c4c5a9ce67eb",
                "nomorSkep": "KEP-234/KBC.0702/TRF/2024",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "a9a39929-6fe4-464f-95f0-a951188f2dec",
                "namaMerk": "WISKI(2)",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TMP A TANGERANG",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 5000.0,
                "tarifSpesifik": 8000000.0,
                "tarifPerKemasan": 4.0E7,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "d3fc694e-17da-4caa-b91e-a8c41470fd18",
                "nomorSkep": "KEP-234/KBC.0702/TRF/2024",
                "tanggalSkep": "2024-08-16",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "0c88bd47-23e9-45dd-b043-d62203cfef06",
                "namaMerk": "WISKI",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TMP A TANGERANG",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 20000.0,
                "tarifSpesifik": 50.0,
                "tarifPerKemasan": 1000.0,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "9a4b53b4-308c-482f-b580-2f9784e537c1",
                "nomorSkep": "KEP-230/KBC.0702/TRF/2024",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "591cf3ed-dd28-4ce3-bd76-b7c979476712",
                "namaMerk": "RUM",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TMP A TANGERANG",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 200.0,
                "tarifSpesifik": 8000000.0,
                "tarifPerKemasan": 1600000.0,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "81d1d28e-8ed6-4fd1-94e8-72e7929aa369",
                "nomorSkep": "KEP-229/KBC.0702/TRF/2024",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "a8e5fecc-ca1a-4708-995b-cf662ae7e9e6",
                "namaMerk": "RUM(2)",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TMP A TANGERANG",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 5000.0,
                "tarifSpesifik": 8000000.0,
                "tarifPerKemasan": 4.0E7,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "148af466-d4be-4d65-8f2d-4e5145700555",
                "nomorSkep": "KEP-230/KBC.0702/TRF/2024",
                "tanggalSkep": "2024-08-16",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "131b7619-efde-46f8-a933-2dfd4b96eb8e",
                "namaMerk": "RUM",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TMP A TANGERANG",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 20000.0,
                "tarifSpesifik": 50.0,
                "tarifPerKemasan": 1000.0,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "08954f97-fb87-42e0-93c2-c6946560c59e",
                "nomorSkep": "KEP-226/KBC.0702/TRF/2024",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "63a64ef1-28db-4614-adda-e4ffb2f1b3ac",
                "namaMerk": "VODKAUPDATE2",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TMP A TANGERANG",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 20000.0,
                "tarifSpesifik": 50.0,
                "tarifPerKemasan": 1000.0,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "551f27ed-c759-48eb-9b4b-026e437dbec0",
                "nomorSkep": "KEP-226/KBC.0702/TRF/2024",
                "tanggalSkep": "null",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "0dc2c715-4df0-46bc-9994-576a833471b8",
                "namaMerk": "VODKAUPDATE2",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TMP A TANGERANG",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 5000.0,
                "tarifSpesifik": 8000000.0,
                "tarifPerKemasan": 4.0E7,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "1ab31aa7-4878-4156-a25b-083fb2b9dd2d",
                "nomorSkep": "KEP-225/KBC.0702/TRF/2024",
                "tanggalSkep": "2024-08-16",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "08a0ab9b-3cb7-4885-871f-8d16f344281c",
                "namaMerk": "VODKA UPDATE",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TMP A TANGERANG",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 20000.0,
                "tarifSpesifik": 50.0,
                "tarifPerKemasan": 1000.0,
                "statusMerk": "AKTIF",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "501576ae-8ea4-44d7-af62-b9f306f7e667",
                "nomorSkep": "KEP-222/KBC.0702/TRF/2024",
                "tanggalSkep": "2024-08-16",
                "idProses": null,
                "hje": null,
                "hjePerKemasan": null,
                "hjePerBatang": null,
                "tujuan": "null",
                "idMerk": "929c1356-6994-4d8b-9e56-ecebb275a9ce",
                "namaMerk": "TEST",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "MMEA GOLONGAN A",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0014539407415000150312",
                "namaKantor": "KPPBC TMP A TANGERANG",
                "namaPerusahaan": "PANJANG JIWO PT",
                "isi": 20000.0,
                "tarifSpesifik": 50.0,
                "tarifPerKemasan": 1000.0,
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

Last updated 1 year ago
```