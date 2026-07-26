# Get Data Merk Switching

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi data merk (switching host to host) berdasarkan parameter yang diberikan (untuk modul Pengembalian) 

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/data-merk/getDataMerkSwitchingH2h?nppbkc={nppbkc}&tanggalAkhir={tanggalAkhir}&tanggalAwal={tanggalAwal}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0014539407415000150312 |
| `tanggalAkhir` | `Date` | Tanggal pencarian bagian akhir |
| `01-09-2024` | `tanggalAwal` | Date |
| `Tanggal pencarian bagian awal` | `31-10-2023` | Parameter Example |

`GET` `{API_URL}/data-merk/getDataMerkSwitchingH2h?nppbkc=0014539407415000150312&tanggalAkhir=01-09-2024&tanggalAwal=31-10-2023`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": [
    {
      "tarifSpesifik": 16500,
      "isiPerKemasan": 275,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "013aa11d-6276-45dd-a49d-9e1b2ff4b35b",
      "namaMerk": "MMEA NO-2 NEW"
    },
    {
      "tarifSpesifik": 44000,
      "isiPerKemasan": 31,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "02b8e3aa-3fef-4fba-9d82-3bd411d7c10b",
      "namaMerk": "MERK"
    },
    {
      "tarifSpesifik": 8000000,
      "isiPerKemasan": 4000,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "04cb9e5a-4019-42b9-bc6c-616bee1be9e2",
      "namaMerk": "Arak V3"
    },
    {
      "tarifSpesifik": 0,
      "isiPerKemasan": 800,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "05b427a6-e0c6-42fc-b564-651e51ff739f",
      "namaMerk": "Merk 2"
    },
    {
      "tarifSpesifik": 33000,
      "isiPerKemasan": 275,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "05f03feb-0ddc-47a6-ba0f-e9cac0d3f24b",
      "namaMerk": "Merk Tes v2"
    },
    {
      "tarifSpesifik": 44000,
      "isiPerKemasan": 12,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "05fe3edd-f8cf-4f28-9843-c2e3784fa832",
      "namaMerk": "MMEA TEST 01"
    },
    {
      "tarifSpesifik": 15000,
      "isiPerKemasan": 80,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "0c4e167c-71d6-40b4-afa8-02d592f9c7e1",
      "namaMerk": "WAT01"
    },
    {
      "tarifSpesifik": 0,
      "isiPerKemasan": 3000,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "0d3cc4db-c26c-4c6a-91ca-6860658d22fc",
      "namaMerk": "Kamis 2"
    },
    {
      "tarifSpesifik": 8000000,
      "isiPerKemasan": 5000,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "0e0459cf-19f7-460c-95d9-7a005bdd4c53",
      "namaMerk": "TEST/02/08/2024/UPDATE"
    },
    {
      "tarifSpesifik": 10000,
      "isiPerKemasan": 2000,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "0e439172-084a-4e20-b602-92182ca86c0c",
      "namaMerk": "Wine 2"
    },
    {
      "tarifSpesifik": 2,
      "isiPerKemasan": null,
      "seriPita": "3",
      "hjePerKemasan": 0,
      "idMerk": "10e9cd71-8177-4274-8223-954ef4f2115e",
      "namaMerk": "HOKI BOLD >>> 12 KRETEK FILTER 1"
    },
    {
      "tarifSpesifik": 44000,
      "isiPerKemasan": 12,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "1260e007-a0ff-47d9-b35e-5c76539673cf",
      "namaMerk": "MMEA092"
    },
    {
      "tarifSpesifik": 33000,
      "isiPerKemasan": 620,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "1260e007-a0ff-47d9-b35e-5c76539673cf",
      "namaMerk": "MMEA092"
    },
    {
      "tarifSpesifik": 22800,
      "isiPerKemasan": 200,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "12e66007-70d5-4b46-b3f8-1dae85a76b30",
      "namaMerk": "KMEA Berbentuk Cairan"
    },
    {
      "tarifSpesifik": 8000000,
      "isiPerKemasan": 5000,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "13194ec5-5af4-4778-b13d-781998252497",
      "namaMerk": "TEST/05/8/2024(1)"
    },
    {
      "tarifSpesifik": 8000000,
      "isiPerKemasan": 4000,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "13d741e3-d72e-468c-9f58-42f95da6cad6",
      "namaMerk": "test 2"
    },
    {
      "tarifSpesifik": 80000,
      "isiPerKemasan": 183,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "142a08ec-8e3d-4053-866b-83659bc42a87",
      "namaMerk": "merk"
    },
    {
      "tarifSpesifik": 10000,
      "isiPerKemasan": 2000,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "153ec93e-5d45-4c7a-bdb4-a6826f9c69bd",
      "namaMerk": "Arak V2"
    },
    {
      "tarifSpesifik": 15000,
      "isiPerKemasan": 200,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "181b4d46-b1fe-4f06-82be-17bc5dcd9785",
      "namaMerk": "MMEA TEST09"
    },
    {
      "tarifSpesifik": 15000,
      "isiPerKemasan": 275,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "189c6a4b-2aea-42f5-bbb2-5aa16305da6c",
      "namaMerk": "ICELAND VODKA MIX LONG ISLAND"
    },
    {
      "tarifSpesifik": 42500,
      "isiPerKemasan": 500,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "18a10260-5ae2-4dfc-acfa-252c46674f96",
      "namaMerk": "TEST 01 UPDATE"
    },
    {
      "tarifSpesifik": 8000000,
      "isiPerKemasan": 5000,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "1b6e8789-464c-41e8-bde5-b763da4ab934",
      "namaMerk": "MMEA"
    },
    {
      "tarifSpesifik": 8000000,
      "isiPerKemasan": 5000,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "1c7a6bb2-0f61-4bd8-9165-ebe9d6b53e28",
      "namaMerk": "Orangtuan(1)"
    },
    {
      "tarifSpesifik": 44000,
      "isiPerKemasan": 31,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "1d3dddfe-7cbe-4453-a32b-b1606732ed2a",
      "namaMerk": "TEST Sabtu"
    },
    {
      "tarifSpesifik": 44000,
      "isiPerKemasan": 31,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "20bc9754-c96d-48bc-a686-444ec4cb968e",
      "namaMerk": "MMMAAA"
    },
    {
      "tarifSpesifik": 8000000,
      "isiPerKemasan": 5000,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "2191dae1-e4f1-4b90-b6dd-a68444a8d00b",
      "namaMerk": "TEST 1"
    },
    {
      "tarifSpesifik": 44000,
      "isiPerKemasan": 12,
      "seriPita": null,
      "hjePerKemasan": null,
      "idMerk": "23905a5f-2f5f-4853-b30f-987c5cb56d62",
      "namaMerk": "MERK"
    },

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