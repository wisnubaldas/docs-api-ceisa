# Pembatalan CK-6

## 

### Introduction

  * Purpose: API ini digunakan untuk pembatalan data CK-6

  * Overview: Proses pembatalan CK-6 mensyaratkan 1 object data dalam bentuk form 

## 

### Path API

`POST` `{API_URL}/portal/ck6/pembatalan`

## 

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

## 

Parameter

Endpoint ini menerima parameter berikut dalam form data:

Parameter Name

Type

Description

Example Value

idCk6Header

String

UUID unik untuk identifikasi header CK6

eeb568b2-24ec-40e8-8b25-848cd786378f

alasanPembatalan

String

Alasan mengapa pembatalan dilakukan

salah data

nomorPermohonanPembatalan

String

Nomor identifikasi permohonan pembatalan

rtka-2024

tanggalPermohonanPembatalan

Date

Tanggal saat permohonan pembatalan diajukan

2024-08-21

dokumenBuktiBelumPengangkutan

Binary

Dokumen bukti bahwa pengangkutan belum dilakukan

(binary)

## 

JSONSchema Pembatalan CK-6

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Pembatalan CK-6",
  "properties": {
    "idCk6Header": {
      "type": "string",
      "format": "uuid",
      "description": "ID CK6 Header."
    },
    "alasanPembatalan": {
      "type": "string",
      "description": "Alasan pembatalan."
    },
    "nomorPermohonanPembatalan": {
      "type": "string",
      "description": "Nomor permohonan pembatalan."
    },
    "tanggalPermohonanPembatalan": {
      "type": "string",
      "format": "date",
      "description": "Tanggal permohonan pembatalan dalam format YYYY-MM-DD."
    },
    "dokumenBuktiBelumPengangkutan": {
      "type": "string",
      "contentEncoding": "base64",
      "description": "Dokumen bukti belum pengangkutan."
    }
  },
  "required": [
    "idCk6Header",
    "alasanPembatalan",
    "nomorPermohonanPembatalan",
    "tanggalPermohonanPembatalan",
    "dokumenBuktiBelumPengangkutan"
  ]
}

## 

Example Request : Pembatalan CK-6

--boundary
Content-Disposition: form-data; name="idCk6Header"

idCk6Header: eeb568b2-24ec-40e8-8b25-848cd786378f
--boundary
Content-Disposition: form-data; name="alasanPembatalan"

salah data
--boundary
Content-Disposition: form-data; name="nomorPermohonanPembatalan"

rtka-2024
--boundary
Content-Disposition: form-data; name="tanggalPermohonanPembatalan"

2024-08-21
--boundary
Content-Disposition: form-data; name="dokumenBuktiBelumPengangkutan"

(binary)
--boundary--

## 

Validation Rules

Field

Rules

idCk6Header

Harus merupakan UUID yang valid.

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

[PreviousPerbaikan CK-6](api-service-cukai/perdagangan/perbaikan-ck-6.md)[NextBrowse Dokumen LACK-11](api-service-cukai/perdagangan/browse-dokumen-lack-11.md)

Last updated 8 months ago
```