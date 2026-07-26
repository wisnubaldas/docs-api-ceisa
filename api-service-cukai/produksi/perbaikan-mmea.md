# Perbaikan MMEA

### Introduction

  * Purpose: API ini digunakan untuk rubah data MMEA

  * Overview: Proses rubah data MMEA mensyaratkan 2 object data dalam bentuk form yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck4/perbaikan-mmea`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Endpoint ini menerima parameter berikut dalam form data:` | Header Section |
| `Parameter Name` | `Type` | Description |
| `Example Value` | `idCk4` | UUID |
| `Identifikasi unik untuk CK4` | `f88e8632-1b93-4417-92bd-f64390769e6e` | nomorPemberitahuan |
| `String` | `Nomor pemberitahuan` | TES/PER/MMEA/01/head |
| `totalJumlahKemasan` | `Integer` | Total jumlah kemasan |
| `200` | `totalJumlahProduksi` | Integer |
| `Total jumlah produksi` | `200` | nomorSurat |
| `String` | `Nomor surat yang terkait` | TEST/PERBAIK/01 |
| `tanggalSurat` | `Date` | Tanggal surat |
| `2023-12-11` | `Detail Section` | Parameter Name |
| `Type` | `Description` | Example Value |
| `details[0].idCk4Detail` | `UUID` | Identifikasi unik untuk detail CK4 |
| `5a3c655d-e2a9-4ea6-be3a-826f940c5622` | `details[0].idMerkMmea` | UUID |
| `Identifikasi unik untuk merek MMEA` | `189c6a4b-2aea-42f5-bbb2-5aa16305da6c` | details[0].isi |
| `Integer` | `Volume dalam mililiter` | 1500 |
| `details[0].jenisKemasan` | `String` | Jenis kemasan |
| `Botol` | `details[0].jumlahKemasan` | Integer |
| `Jumlah kemasan` | `200` | details[0].jumlahKemasanDilekatiPita |
| `Integer` | `Jumlah kemasan yang diberi label/stiker` | 200 |
| `details[0].jumlahProduksi` | `Integer` | Jumlah produksi untuk detail |
| `200` | `details[0].kadar` | Float |
| `Kadar atau konsentrasi dari produk` | `10` | details[0].merkMmea |
| `String` | `Nama merek produk MMEA` | ICELAND VODKA MIX LONG ISLAND |
| `details[0].nomorProduksi` | `String` | Nomor produksi |
| `TES/PER/MMEA/01` | `details[0].tanggalProduksi` | Date |
| `Tanggal produksi` | `2023-08-20` | details[0].tarif |
| `Integer` | `Tarif cukai per unit` | 14000 |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Perbaikan MMEA",
  "description": "JSON Schema untuk Perbaikan MMEA.",
  "properties": {
    "idCk4": {
      "type": "string",
      "format": "uuid",
      "description": "ID CK4."
    },
    "nomorPemberitahuan": {
      "type": "string",
      "description": "Nomor pemberitahuan."
    },
    "totalJumlahKemasan": {
      "type": "integer",
      "description": "Total jumlah kemasan."
    },
    "totalJumlahProduksi": {
      "type": "integer",
      "description": "Total jumlah produksi."
    },
    "nomorSurat": {
      "type": "string",
      "description": "Nomor surat."
    },
    "tanggalSurat": {
      "type": "string",
      "format": "date",
      "description": "Tanggal surat."
    },
    "details": {
      "type": "array",
      "description": "Data detail produksi.",
      "items": {
        "type": "object",
        "properties": {
          "idCk4Detail": {
            "type": "string",
            "format": "uuid",
            "description": "ID detail CK4."
          },
          "idMerkMmea": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk MMEA."
          },
          "isi": {
            "type": "integer",
            "description": "Isi per kemasan."
          },
          "jenisKemasan": {
            "type": "string",
            "description": "Jenis kemasan."
          },
          "jumlahKemasan": {
            "type": "integer",
            "description": "Jumlah kemasan."
          },
          "jumlahKemasanDilekatiPita": {
            "type": "integer",
            "description": "Jumlah kemasan yang dilekati pita."
          },
          "jumlahProduksi": {
            "type": "integer",
            "description": "Jumlah produksi."
          },
          "kadar": {
            "type": "number",
            "description": "Kadar."
          },
          "merkMmea": {
            "type": "string",
            "description": "Nama merk MMEA."
          },
          "nomorProduksi": {
            "type": "string",
            "description": "Nomor produksi."
          },
          "tanggalProduksi": {
            "type": "string",
            "format": "date",
            "description": "Tanggal produksi."
          },
          "tarif": {
            "type": "integer",
            "description": "Tarif."
          }
        },
        "required": [
          "idCk4Detail",
          "idMerkMmea",
          "isi",
          "jenisKemasan",
          "jumlahKemasan",
          "jumlahKemasanDilekatiPita",
          "jumlahProduksi",
          "kadar",
          "merkMmea",
          "nomorProduksi",
          "tanggalProduksi",
          "tarif"
        ]
      }
    }
  },
  "required": [
    "idCk4",
    "nomorPemberitahuan",
    "totalJumlahKemasan",
    "totalJumlahProduksi",
    "nomorSurat",
    "tanggalSurat",
    "details"
  ]
}

Example Request : Perbaikan MMEA 

--boundary
Content-Disposition: form-data; name="details[0].idCk4Detail"

5a3c655d-e2a9-4ea6-be3a-826f940c5622
--boundary
Content-Disposition: form-data; name="details[0].idMerkMmea"

189c6a4b-2aea-42f5-bbb2-5aa16305da6c
--boundary
Content-Disposition: form-data; name="details[0].isi"

1500
--boundary
Content-Disposition: form-data; name="details[0].jenisKemasan"

Botol
--boundary
Content-Disposition: form-data; name="details[0].jumlahKemasan"

200
--boundary
Content-Disposition: form-data; name="details[0].jumlahKemasanDilekatiPita"

200
--boundary
Content-Disposition: form-data; name="details[0].jumlahProduksi"

200
--boundary
Content-Disposition: form-data; name="details[0].kadar"

10
--boundary
Content-Disposition: form-data; name="details[0].merkMmea"

ICELAND VODKA MIX LONG ISLAND
--boundary
Content-Disposition: form-data; name="details[0].nomorProduksi"

TES/PER/MMEA/01
--boundary
Content-Disposition: form-data; name="details[0].tanggalProduksi"

2023-08-20
--boundary
Content-Disposition: form-data; name="details[0].tarif"

14000
--boundary
Content-Disposition: form-data; name="idCk4"

f88e8632-1b93-4417-92bd-f64390769e6e
--boundary
Content-Disposition: form-data; name="nomorPemberitahuan"

TES/PER/MMEA/01/head
--boundary
Content-Disposition: form-data; name="totalJumlahKemasan"

200
--boundary
Content-Disposition: form-data; name="totalJumlahProduksi"

200
--boundary
Content-Disposition: form-data; name="nomorSurat"

TEST/PERBAIK/01
--boundary
Content-Disposition: form-data; name="tanggalSurat"

2023-12-11
--boundary--

Validation Rules

Field

Rules

idCk4

Harus merupakan UUID yang valid.

totalJumlahKemasan

Harus berupa angka positif

totalJumlahProduksi

Harus berupa angka positif

tanggalSurat

Harus dalam format YYYY-MM-DD

details[0].idCk4Detail

Harus merupakan UUID yang valid.

details[0].idMerkMmea

Harus merupakan UUID yang valid.

details[0].isi

Harus berupa angka positif

details[0].jumlahKemasan

Harus berupa angka positif

details[0].jumlahKemasanDilekatiPita

Harus berupa angka positif

details[0].jumlahProduksi

Harus berupa angka positif

details[0].kadar

Harus berupa angka positif

details[0].tanggalProduksi

Harus dalam format YYYY-MM-DD

details[0].tarif

Harus berupa angka positif
```

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": null
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

Last updated 11 months ago
```