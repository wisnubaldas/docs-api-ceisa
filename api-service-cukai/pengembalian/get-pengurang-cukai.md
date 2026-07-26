# Get Pengurang Cukai

## 

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail pengurang cukai berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

## 

### Path API

`GET` `{API_URL}/getPengurangCukai?nppbkc={nppbkc}`

## 

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

## 

Parameter

| Field | Type | Description |
| --- | --- | --- |
| `Example Value` | `nppbkc` | String |

## 

Parameter Example

`GET` `{API_URL}/getPengurangCukai?nppbkc=0014539407415000150312`

## 

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": [
    {
      "idDokumenPengurang": "cac91ff0-f34b-48c2-9add-c2ffedc14309",
      "nomorDokumenPengurang": "CK2-0888",
      "tanggalDokumenPengurang": "2023-09-13",
      "jumlahCukaiPengurang": "5432109876",
      "namaJenisDokumen": "CK-2",
      "idJenisDokumen": "6"
    },
    {
      "idDokumenPengurang": "eba96c5d-6681-46f9-ae8f-01a7e4c7ebfe",
      "nomorDokumenPengurang": "000001",
      "tanggalDokumenPengurang": "2023-09-13",
      "jumlahCukaiPengurang": "2000000",
      "namaJenisDokumen": "CK-2",
      "idJenisDokumen": "6"
    },
    {
      "idDokumenPengurang": "4ddd4274-c787-49c8-a102-c52d2da28989",
      "nomorDokumenPengurang": "CK3-20230001",
      "tanggalDokumenPengurang": "2023-09-20",
      "jumlahCukaiPengurang": "21384000",
      "namaJenisDokumen": "CK-3",
      "idJenisDokumen": "7"
    },
    {
      "idDokumenPengurang": "d2356394-5f9a-435d-b89f-d657f8910db3",
      "nomorDokumenPengurang": "000001",
      "tanggalDokumenPengurang": "2023-09-13",
      "jumlahCukaiPengurang": "3000000",
      "namaJenisDokumen": "CK-2",
      "idJenisDokumen": "6"
    },
    {
      "idDokumenPengurang": "85a3e930-8d03-414e-91ab-0a1044221058",
      "nomorDokumenPengurang": "noCk3",
      "tanggalDokumenPengurang": "2023-11-01",
      "jumlahCukaiPengurang": "31680000",
      "namaJenisDokumen": "CK-3",
      "idJenisDokumen": "7"
    },
    {
      "idDokumenPengurang": "c59f85a6-7f01-4cc4-ab82-7b1b0efc7cb4",
      "nomorDokumenPengurang": "CK3-20230001",
      "tanggalDokumenPengurang": "2023-09-20",
      "jumlahCukaiPengurang": "10500000000",
      "namaJenisDokumen": "CK-3",
      "idJenisDokumen": "7"
    },
    {
      "idDokumenPengurang": "79c9227c-dac7-4316-bfbf-4dee45b381a9",
      "nomorDokumenPengurang": "000001",
      "tanggalDokumenPengurang": "2023-09-13",
      "jumlahCukaiPengurang": "2000000",
      "namaJenisDokumen": "CK-2",
      "idJenisDokumen": "6"
    },
    {
      "idDokumenPengurang": "dcbd8ac6-8647-423c-9503-deb82bd535d4",
      "nomorDokumenPengurang": "noCk3",
      "tanggalDokumenPengurang": "2023-11-01",
      "jumlahCukaiPengurang": "200",
      "namaJenisDokumen": "CK-3",
      "idJenisDokumen": "7"
    },
    {
      "idDokumenPengurang": "a7080ce0-f7e3-4ac5-8454-2ab7dbbde3d6",
      "nomorDokumenPengurang": "000001",
      "tanggalDokumenPengurang": "2023-09-13",
      "jumlahCukaiPengurang": "2000000",
      "namaJenisDokumen": "CK-2",
      "idJenisDokumen": "6"
    },
    {
      "idDokumenPengurang": "35482571-affd-4cc6-931a-287eefba8898",
      "nomorDokumenPengurang": "000001",
      "tanggalDokumenPengurang": "2023-09-13",
      "jumlahCukaiPengurang": "3000000",
      "namaJenisDokumen": "CK-2",
      "idJenisDokumen": "6"
    }
  ]
}

## 

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

[PreviousGet Detail CK-3](api-service-cukai/pengembalian/get-detail-ck-3.md)[NextGet Saldo CK-2](api-service-cukai/pengembalian/get-saldo-ck-2.md)

Last updated 8 months ago

Was this helpful?
```