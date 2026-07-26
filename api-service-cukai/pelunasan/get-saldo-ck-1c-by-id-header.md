# Get Saldo CK-1C (by Id Header)

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi saldo CK-1C berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/ck1c/portal/getSaldoCk1cById?idSaldoCk1cHeader={idSaldoCk1cHeader}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idSaldoCk1cHeader |
| `String` | `Identifikasi unik untuk saldo header CK-1C` | f7f0a0f4-6b15-4d11-824f-0df8a03abf22 |

`GET` `{API_URL}/ck1c/portal/getSaldoCk1cById?idSaldoCk1cHeader=f7f0a0f4-6b15-4d11-824f-0df8a03abf22`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "header": {
      "saldoLiter": 15,
      "namaMerk": "Merk A",
      "jumlahKemasan": 100,
      "isiMililiter": 200,
      "namaJenisKemasan": "Jenis Kemasan A",
      "isiLiter": 0,
      "tarifCukai": 1000,
      "nomorCk1c": "000101",
      "tanggalCk1c": "2023-08-10T09:59:31.843+00:00",
      "namaKantor": "KPPBC Jakarta",
      "nppbkc": "0026722918048000040422",
      "idSaldoCk1cHeader": "f7f0a0f4-6b15-4d11-824f-0df8a03abf22",
      "namaPerusahaan": "PANTJA ARTHA NIAGA, PT.",
      "kodeKantor": "050600"
    },
    "details": [
      {
        "idSaldoCk1cHeader": "f7f0a0f4-6b15-4d11-824f-0df8a03abf22",
        "tanggalDokumen": "2023-08-13T01:30:00.000+00:00",
        "nomorDokumen": "DOK987",
        "saldo": 15,
        "namaJenisDokumen": "CK-5",
        "idCk1cDetail": "10762b58-7a34-4a62-867f-65dba0ef1275",
        "idSaldoCk1cDetail": "4b5c6d7e-8f9a-0b1c-2d3e-4f5a6b7c8d9e",
        "kodeTransaksi": "K",
        "jumlahTransaksi": 5
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