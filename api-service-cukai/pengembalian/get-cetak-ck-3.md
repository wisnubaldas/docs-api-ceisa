# Get Cetak CK-3

## 

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi cetak CK-3 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

## 

### Path API

`GET` `{API_URL}/host-to-host/cetakCk3?nomorCk3={nomorCk3}&nppbkc={nppbkc}&tanggalCk3={tanggalCk3}`

## 

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

## 

Parameter

| Field | Type | Description |
| --- | --- | --- |
| `Example Value` | `nomorCk3` | String |
| `Nomor dokumen PBCK-4` | `CK3-20230006` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0000000000000000040442 |
| `tanggalCk3` | `Date` | Tanggal penerbitan dokumen PBCK-4 |

## 

Parameter Example

`GET` `{API_URL}/host-to-host/cetakCk3?nomorCk3=CK3-20230006&nppbkc=0000000000000000040442&tanggalCk3=%2020-09-2023`

## 

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "header": null
  }
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

[PreviousGet Cetak PBCK-4](api-service-cukai/pengembalian/get-cetak-pbck-4.md)[NextGet Detail CK-2 dari CK-5](api-service-cukai/pengembalian/get-detail-ck-2-dari-ck-5.md)

Last updated 9 months ago
```