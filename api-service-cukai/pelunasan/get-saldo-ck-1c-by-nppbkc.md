# Get Saldo CK-1C (by NPPBKC)

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi saldo CK-1C berdasarkan parameter (NPPBKC) yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/ck1c/portal/getSaldoCk1cByNppbkc?limit={limit}&nppbkc={nppbkc}&page={page}&saldoLiter={saldoLiter}&sortDirection={sortDirection}&sortField={sortField}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `Identifikasi unik untuk NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0026722918048000040422 |

`GET` `{API_URL}/ck1c/portal/getSaldoCk1cByNppbkc?limit=10&nppbkc=0026722918048000040422&page=1&saldoLiter=0.00&sortDirection=desc&sortField=nomorCk1c`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "currentPage": 1,
    "limit": 10,
    "totalPages": 1,
    "totalData": 2,
    "listData": [
      {
        "namaPerusahaan": "PANTJA ARTHA NIAGA, PT.",
        "namaMerk": "Merk A",
        "idSaldoCk1cHeader": "f7f0a0f4-6b15-4d11-824f-0df8a03abf22",
        "nomorCk1c": "000101",
        "tanggalCk1c": "2023-08-10",
        "namaKantor": "KPPBC Jakarta",
        "nppbkc": "0026722918048000040422",
        "kodeKantor": "050600",
        "saldoLiter": 15
      },
      {
        "namaPerusahaan": "PANTJA ARTHA NIAGA, PT.",
        "namaMerk": "Merk A",
        "idSaldoCk1cHeader": "b8c9a4e7-12f9-4b66-8435-cb5f9b231d8d",
        "nomorCk1c": "000101",
        "tanggalCk1c": "2023-08-10",
        "namaKantor": "KPPBC Jakarta",
        "nppbkc": "0026722918048000040422",
        "kodeKantor": "050600",
        "saldoLiter": 56.25
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