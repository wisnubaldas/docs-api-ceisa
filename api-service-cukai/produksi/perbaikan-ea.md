# Perbaikan EA

## 

### Introduction

  * Purpose: API ini digunakan untuk rubah data EA

  * Overview: Proses rubah data EA mensyaratkan 2 object data dalam bentuk form yaitu Header dan Detail

## 

### Path API

`POST` `{API_URL}/portal/ck4/perbaikan-ea`

## 

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

## 

Parameter

Endpoint ini menerima parameter berikut dalam form data:

### 

Header Section

Parameter Name

Type

Description

Example Value

idCk4

String

Identifikasi unik untuk CK-4

03f75c14-a6c8-4095-832b-9d83970cae74

nomorPemberitahuan

String

Nomor pemberitahuan terkait CK-4

158882

totalJumlahProduksi

String

Total jumlah produksi dalam CK-4

1500

nomorSurat

String

Nomor surat terkait CK-4

SRT/TST/01

tanggalSurat

Date

Tanggal surat

2023-12-10

### 

Detail Section

Parameter Name

Type

Description

Example Value

details[0].idCk4Detail

String

Identifikasi unik untuk detail CK-4

e83ff8cc-2cc0-45da-86d8-9b6f190276e9

details[0].idCk4Header

String

Identifikasi unik untuk header CK-4

abc4b365-2b8e-4266-b7f7-bd705c220083

details[0].jumlahProduksi

Integer

Jumlah produksi

150

details[0].keterangan

String

Keterangan produksi

Sesuai/20ketentuan

details[0].nomorProduksi

String

Nomor produksi

PROD/2F001/2FTESTING

details[0].nomorTangki

String

Nomor tangki

TANGKI/2F001/2FTESTING

details[0].tanggalProduksi

Date

Tanggal produksi

2023-09-09

details[0].kadar

Float

Kadar atau konsentrasi dari produk

4.8

## 

JSONSchema Perbaikan EA

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Perbaikan EA",
  "description": "JSON Schema untuk Perbaikan EA.",
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
          "idCk4Header": {
            "type": "string",
            "format": "uuid",
            "description": "ID header CK4."
          },
          "jumlahProduksi": {
            "type": "integer",
            "description": "Jumlah produksi."
          },
          "keterangan": {
            "type": "string",
            "description": "Keterangan."
          },
          "nomorProduksi": {
            "type": "string",
            "description": "Nomor produksi."
          },
          "nomorTangki": {
            "type": "string",
            "description": "Nomor tangki."
          },
          "tanggalProduksi": {
            "type": "string",
            "format": "date",
            "description": "Tanggal produksi."
          },
          "kadar": {
            "type": "number",
            "description": "Kadar."
          }
        },
        "required": [
          "idCk4Detail",
          "idCk4Header",
          "jumlahProduksi",
          "keterangan",
          "nomorProduksi",
          "nomorTangki",
          "tanggalProduksi",
          "kadar"
        ]
      }
    }
  },
  "required": [
    "idCk4",
    "nomorPemberitahuan",
    "totalJumlahProduksi",
    "nomorSurat",
    "tanggalSurat",
    "details"
  ]
}

## 

Example Request : Perbaikan EA

--boundary
Content-Disposition: form-data; name="details[0].idCk4Detail"

e83ff8cc-2cc0-45da-86d8-9b6f190276e9
--boundary
Content-Disposition: form-data; name="details[0].idCk4Header"

abc4b365-2b8e-4266-b7f7-bd705c220083
--boundary
Content-Disposition: form-data; name="details[0].jumlahProduksi"

150
--boundary
Content-Disposition: form-data; name="details[0].keterangan"

Sesuai/20ketentuan
--boundary
Content-Disposition: form-data; name="details[0].nomorProduksi"

PROD/2F001/2FTESTING
--boundary
Content-Disposition: form-data; name="details[0].nomorTangki"

TANGKI/2F001/2FTESTING
--boundary
Content-Disposition: form-data; name="details[0].tanggalProduksi"

2023-09-09
--boundary
Content-Disposition: form-data; name="details[0].kadar"

4.8
--boundary
Content-Disposition: form-data; name="idCk4"

03f75c14-a6c8-4095-832b-9d83970cae74
--boundary
Content-Disposition: form-data; name="nomorPemberitahuan"

158882
--boundary
Content-Disposition: form-data; name="totalJumlahProduksi"

1500
--boundary
Content-Disposition: form-data; name="nomorSurat"

SRT/TST/01
--boundary
Content-Disposition: form-data; name="tanggalSurat"

2023-12-10
--boundary--

## 

Validation Rules

Field

Rules

idCk4

Harus merupakan UUID yang valid.

totalJumlahProduksi

Harus berupa angka positif

tanggalSurat

Harus dalam format YYYY-MM-DD

details[0].idCk4Detail

Harus merupakan UUID yang valid.

details[0].idCk4Header

Harus merupakan UUID yang valid.

details[0].jumlahProduksi

Harus berupa angka positif

details[0].kadar

Harus berupa angka positif

##
```

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": null
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

[PreviousRekam EA](api-service-cukai/produksi/rekam-ea.md)[NextGet Detail MMEA](api-service-cukai/produksi/get-detail-mmea.md)

Last updated 9 months ago
```