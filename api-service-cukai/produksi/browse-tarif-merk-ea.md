# Browse Tarif Merk EA

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi tarif merk berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/tarif-merk/browse-ea?nppbkc={nppbkc}&page={page}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0014539407415000150312 |
| `page` | `Integer` | Nomor Halaman |

`GET` `{API_URL}/portal/tarif-merk/browse-ea?nppbkc=0014539407415000150312&page=1`

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": {
        "currentPage": 1,
        "totalData": 284,
        "totalPages": 29,
        "limit": 10,
        "listData": [
            {
                "idCk4": "3a5603ed-199f-46ed-9b3a-1b1e05b01d78",
                "nomorPemberitahuan": "TEST/2024/01/22/03",
                "namaPerusahaan": "DEMANG JAYA PR",
                "periodeBulanProduksi": "Nopember",
                "periodeTahunProduksi": "2023",
                "tanggalPemberitahuan": "2023-11-22",
                "tanggalProduksiAwal": "2023-10-01",
                "tanggalProduksiAkhir": "2023-10-31",
                "jumlahProduksiLt": 0,
                "jumlahProduksiBtg": 1440.00,
                "jumlahProduksiGr": 0,
                "npwp": "669986374654000",
                "nppbkc": "0669986374654000070613",
                "status": "Selesai",
                "idJenisBkc": 3,
                "kodeKantor": "070600",
                "isAlert": true,
                "jumlahKemasan": 120,
                "alamatPerusahaan": "JALAN DEMANG JAYA 2 NOMOR 03 KREBET SENGGRONG KECAMATAN BULULAWANG KABUPATEN MALANG",
                "namaPengusaha": "intan",
                "kota": "Kabupaten Malang",
                "tanggalJamProduksiAwal": "2023-10-01T00:00:00.000+07:00",
                "tanggalJamProduksiAkhir": "2023-10-31T23:59:59.999+07:00",
                "tanggalBrck": null,
                "jumlahKemasanDilekatiPita": 120,
                "jenisLaporan": "Bulanan",
                "tanggalPerbaikan": null
            },
            {
                "idCk4": "834ea982-002a-4862-bf03-bb1fcdad055f",
                "nomorPemberitahuan": "7676767676",
                "namaPerusahaan": "DEMANG JAYA PR",
                "periodeBulanProduksi": "Agustus",
                "periodeTahunProduksi": "2024",
                "tanggalPemberitahuan": "2024-08-12",
                "tanggalProduksiAwal": "2024-08-01",
                "tanggalProduksiAkhir": "2024-08-31",
                "jumlahProduksiLt": 0,
                "jumlahProduksiBtg": 1176.00,
                "jumlahProduksiGr": 0,
                "npwp": "669986374654000",
                "nppbkc": "0669986374654000070613",
                "status": "Selesai",
                "idJenisBkc": 3,
                "kodeKantor": "070600",
                "isAlert": false,
                "jumlahKemasan": 12,
                "alamatPerusahaan": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
                "namaPengusaha": "intan",
                "kota": "Kabupaten Malang",
                "tanggalJamProduksiAwal": "2024-08-01T00:00:00.000+07:00",
                "tanggalJamProduksiAkhir": "2024-08-31T23:59:59.999+07:00",
                "tanggalBrck": null,
                "jumlahKemasanDilekatiPita": 300,
                "jenisLaporan": "BULANAN",
                "tanggalPerbaikan": null
            },
            {
                "idCk4": "80497e83-3a91-4bf4-9b0c-04dc746ab566",
                "nomorPemberitahuan": "TES BULANAN",
                "namaPerusahaan": "DEMANG JAYA PR",
                "periodeBulanProduksi": "Agustus",
                "periodeTahunProduksi": "2024",
                "tanggalPemberitahuan": "2024-08-12",
                "tanggalProduksiAwal": "2024-08-01",
                "tanggalProduksiAkhir": "2024-08-31",
                "jumlahProduksiLt": 0,
                "jumlahProduksiBtg": 3000.00,
                "jumlahProduksiGr": 0,
                "npwp": "0669986374654000",
                "nppbkc": "0669986374654000070613",
                "status": "Selesai",
                "idJenisBkc": 3,
                "kodeKantor": "070600",
                "isAlert": false,
                "jumlahKemasan": 300,
                "alamatPerusahaan": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
                "namaPengusaha": "TEST",
                "kota": "Kabupaten Malang",
                "tanggalJamProduksiAwal": "2024-08-01T00:00:00.000+07:00",
                "tanggalJamProduksiAkhir": "2024-08-31T00:00:00.000+07:00",
                "tanggalBrck": null,
                "jumlahKemasanDilekatiPita": 300,
                "jenisLaporan": "BULANAN",
                "tanggalPerbaikan": null
            },
            {
                "idCk4": "5d013094-b5cd-4306-a26a-1738c13a53fd",
                "nomorPemberitahuan": "TES BULANAN",
                "namaPerusahaan": "DEMANG JAYA PR",
                "periodeBulanProduksi": "Juli",
                "periodeTahunProduksi": "2024",
                "tanggalPemberitahuan": "2024-07-31",
                "tanggalProduksiAwal": "2024-07-01",
                "tanggalProduksiAkhir": "2024-07-31",
                "jumlahProduksiLt": 0,
                "jumlahProduksiBtg": 800.00,
                "jumlahProduksiGr": 0,
                "npwp": "0669986374654000",
                "nppbkc": "0669986374654000070613",
                "status": "Selesai",
                "idJenisBkc": 3,
                "kodeKantor": "070600",
                "isAlert": false,
                "jumlahKemasan": 400,
                "alamatPerusahaan": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
                "namaPengusaha": "TEST",
                "kota": "Kabupaten Malang",
                "tanggalJamProduksiAwal": "2024-07-01T00:00:00.000+07:00",
                "tanggalJamProduksiAkhir": "2024-07-31T00:00:00.000+07:00",
                "tanggalBrck": null,
                "jumlahKemasanDilekatiPita": 350,
                "jenisLaporan": "BULANAN",
                "tanggalPerbaikan": null
            },
            {
                "idCk4": "59ff4301-d87a-4b8c-9a23-c530b5b6db76",
                "nomorPemberitahuan": "TES BULANAN",
                "namaPerusahaan": "DEMANG JAYA PR",
                "periodeBulanProduksi": "Juli",
                "periodeTahunProduksi": "2024",
                "tanggalPemberitahuan": "2024-07-29",
                "tanggalProduksiAwal": "2024-07-01",
                "tanggalProduksiAkhir": "2024-07-31",
                "jumlahProduksiLt": 0,
                "jumlahProduksiBtg": 200000.00,
                "jumlahProduksiGr": 0,
                "npwp": "0669986374654000",
                "nppbkc": "0669986374654000070613",
                "status": "Selesai (Perbaikan)",
                "idJenisBkc": 3,
                "kodeKantor": "070600",
                "isAlert": false,
                "jumlahKemasan": 200,
                "alamatPerusahaan": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
                "namaPengusaha": "TEST",
                "kota": "Kabupaten Malang",
                "tanggalJamProduksiAwal": "2024-07-01T00:00:00.000+07:00",
                "tanggalJamProduksiAkhir": "2024-07-31T00:00:00.000+07:00",
                "tanggalBrck": null,
                "jumlahKemasanDilekatiPita": 3000,
                "jenisLaporan": "BULANAN",
                "tanggalPerbaikan": "2024-07-29"
            },
            {
                "idCk4": "cb2e2851-8b4f-4b42-9160-03357543bf9c",
                "nomorPemberitahuan": "6476455",
                "namaPerusahaan": "DEMANG JAYA PR",
                "periodeBulanProduksi": "Juli",
                "periodeTahunProduksi": "2024",
                "tanggalPemberitahuan": "2024-07-27",
                "tanggalProduksiAwal": "2024-07-01",
                "tanggalProduksiAkhir": "2024-07-31",
                "jumlahProduksiLt": 0,
                "jumlahProduksiBtg": 300000.00,
                "jumlahProduksiGr": 0,
                "npwp": "0669986374654000",
                "nppbkc": "0669986374654000070613",
                "status": "Batal",
                "idJenisBkc": 3,
                "kodeKantor": "070600",
                "isAlert": false,
                "jumlahKemasan": 300,
                "alamatPerusahaan": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
                "namaPengusaha": null,
                "kota": null,
                "tanggalJamProduksiAwal": "2024-07-01T00:00:00.000+07:00",
                "tanggalJamProduksiAkhir": "2024-07-31T00:00:00.000+07:00",
                "tanggalBrck": null,
                "jumlahKemasanDilekatiPita": 200,
                "jenisLaporan": "BULANAN",
                "tanggalPerbaikan": null
            },
            {
                "idCk4": "345d11ed-abbf-495d-b97e-c0e0a1a7faab",
                "nomorPemberitahuan": "6476455",
                "namaPerusahaan": "DEMANG JAYA PR",
                "periodeBulanProduksi": "Juli",
                "periodeTahunProduksi": "2024",
                "tanggalPemberitahuan": "2024-07-27",
                "tanggalProduksiAwal": "2024-07-01",
                "tanggalProduksiAkhir": "2024-07-31",
                "jumlahProduksiLt": 0,
                "jumlahProduksiBtg": 600000.00,
                "jumlahProduksiGr": 0,
                "npwp": "0669986374654000",
                "nppbkc": "0669986374654000070613",
                "status": null,
                "idJenisBkc": 3,
                "kodeKantor": "070600",
                "isAlert": false,
                "jumlahKemasan": 600,
                "alamatPerusahaan": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
                "namaPengusaha": "TEST",
                "kota": "Kabupaten Malang",
                "tanggalJamProduksiAwal": "2024-07-01T00:00:00.000+07:00",
                "tanggalJamProduksiAkhir": "2024-07-31T00:00:00.000+07:00",
                "tanggalBrck": null,
                "jumlahKemasanDilekatiPita": 500,
                "jenisLaporan": "BULANAN",
                "tanggalPerbaikan": null
            },
            {
                "idCk4": "42390001-b3ef-4da0-af64-03bda55f9433",
                "nomorPemberitahuan": "77855",
                "namaPerusahaan": "DEMANG JAYA PR",
                "periodeBulanProduksi": "Juli",
                "periodeTahunProduksi": "2024",
                "tanggalPemberitahuan": "2024-07-15",
                "tanggalProduksiAwal": "2024-07-01",
                "tanggalProduksiAkhir": "2024-07-31",
                "jumlahProduksiLt": 0,
                "jumlahProduksiBtg": 4788.00,
                "jumlahProduksiGr": 0,
                "npwp": "669986374654000",
                "nppbkc": "0669986374654000070613",
                "status": "Persetujuan Perbaikan",
                "idJenisBkc": 3,
                "kodeKantor": "070600",
                "isAlert": false,
                "jumlahKemasan": 399,
                "alamatPerusahaan": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
                "namaPengusaha": "intan",
                "kota": "Kabupaten Malang",
                "tanggalJamProduksiAwal": "2024-07-01T00:00:00.000+07:00",
                "tanggalJamProduksiAkhir": "2024-07-31T23:59:59.999+07:00",
                "tanggalBrck": null,
                "jumlahKemasanDilekatiPita": 600,
                "jenisLaporan": "BULANAN",
                "tanggalPerbaikan": null
            },
            {
                "idCk4": "81e8bd79-27be-4c01-b3e8-d2851b769908",
                "nomorPemberitahuan": "758585",
                "namaPerusahaan": "DEMANG JAYA PR",
                "periodeBulanProduksi": "Juli",
                "periodeTahunProduksi": "2024",
                "tanggalPemberitahuan": "2024-07-15",
                "tanggalProduksiAwal": "2024-07-01",
                "tanggalProduksiAkhir": "2024-07-31",
                "jumlahProduksiLt": 0,
                "jumlahProduksiBtg": 36000.00,
                "jumlahProduksiGr": 0,
                "npwp": "669986374654000",
                "nppbkc": "0669986374654000070613",
                "status": "Persetujuan Perbaikan",
                "idJenisBkc": 3,
                "kodeKantor": "070600",
                "isAlert": false,
                "jumlahKemasan": 200,
                "alamatPerusahaan": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
                "namaPengusaha": "intan",
                "kota": "Kabupaten Malang",
                "tanggalJamProduksiAwal": "2024-07-01T00:00:00.000+07:00",
                "tanggalJamProduksiAkhir": "2024-07-31T23:59:59.999+07:00",
                "tanggalBrck": null,
                "jumlahKemasanDilekatiPita": 200,
                "jenisLaporan": "BULANAN",
                "tanggalPerbaikan": null
            },
            {
                "idCk4": "18e3a85e-ceec-4476-bec9-a5a555e0cbfa",
                "nomorPemberitahuan": "875785",
                "namaPerusahaan": "DEMANG JAYA PR",
                "periodeBulanProduksi": "Juli",
                "periodeTahunProduksi": "2024",
                "tanggalPemberitahuan": "2024-01-01",
                "tanggalProduksiAwal": "2024-07-01",
                "tanggalProduksiAkhir": "2024-07-31",
                "jumlahProduksiLt": 0,
                "jumlahProduksiBtg": 300.00,
                "jumlahProduksiGr": 0,
                "npwp": "669986374654000",
                "nppbkc": "0669986374654000070613",
                "status": "Persetujuan Perbaikan",
                "idJenisBkc": 3,
                "kodeKantor": "070600",
                "isAlert": true,
                "jumlahKemasan": 30,
                "alamatPerusahaan": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
                "namaPengusaha": "intan",
                "kota": "Kabupaten Malang",
                "tanggalJamProduksiAwal": "2024-07-01T00:00:00.000+07:00",
                "tanggalJamProduksiAkhir": "2024-07-31T23:59:59.999+07:00",
                "tanggalBrck": null,
                "jumlahKemasanDilekatiPita": 200,
                "jenisLaporan": "BULANAN",
                "tanggalPerbaikan": null
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