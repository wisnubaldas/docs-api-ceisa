# Pembatalan LACK-11

### Introduction

  * Purpose: API ini digunakan untuk pembatalan data LACK-11

  * Overview: Proses pembatalan LACK-11 mensyaratkan 1 object data dalam bentuk form 

### Path API

`POST` `{API_URL}/portal/lack11/pembatalan`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Endpoint ini menerima parameter berikut dalam form data:` | Parameter Name |
| `Type` | `Description` | Example Value |
| `idLack11Header` | `String` | Identifikasi unik untuk header LACK-11 |
| `4216f948-76f6-4a17-ba59-f6cfa508a412` | `alasanPembatalan` | String |
| `Alasan pembatalan` | `tidak sah` | dokumenBuktiBelumPengangkutan |
| `Binary` | `Dokumen bukti belum adanya pengangkutan` | (binary) |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Pembatalan LACK-11",
  "properties": {
    "idLack11Header": {
      "type": "string",
      "format": "uuid",
      "description": "ID LACK-11 Header."
    },
    "alasanPembatalan": {
      "type": "string",
      "description": "Alasan pembatalan laporan."
    },
    "dokumenBuktiBelumPengangkutan": {
      "type": "string",
      "format": "binary",
      "description": "Dokumen bukti yang menunjukkan barang belum diangkut."
    }
  },
  "required": [
    "idLack11Header", 
    "alasanPembatalan", 
    "dokumenBuktiBelumPengangkutan"
  ]
}

Example Request : Pembatalan LACK-11

--boundary
Content-Disposition: form-data; name="idLack11Header"

4216f948-76f6-4a17-ba59-f6cfa508a412
--boundary
Content-Disposition: form-data; name="alasanPembatalan"

tidak sah
--boundary
Content-Disposition: form-data; name="dokumenBuktiBelumPengangkutan"

(binary)

Validation Rules

Field

Rules

idLack11Header

Harus merupakan UUID yang valid.
```

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": {
        "idLack11Header": "4216f948-76f6-4a17-ba59-f6cfa508a412",
        "idProses": "644c9679-0ed2-4f5a-9854-efe43c1b4554",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "npwp": "0014539407415000",
        "periode": "3",
        "tahunLaporan": "2023",
        "kotaLaporan": "null",
        "tanggalLaporan": "2023-12-25T17:00:00.000+00:00",
        "namaPengusaha": "ANI",
        "jenisBkc": "MMEA",
        "kodeKantor": "150300",
        "waktuRekam": "2024-01-15T08:05:15.075+00:00",
        "nomorPersetujuanPerbaikan": "567576",
        "tanggalPersetujuanPerbaikan": "2024-03-17T17:00:00.000+00:00",
        "kodeUploadDasarPerbaikan": "dQQ6lgWDU-bo7kLj-Q9-eg==/OB9Liq_DYzrPcv-rqA4M0qEbcFa4HDLaDLWzILvDTCduKmW6ua5X3z39RoXgk_nZesj9a56SmWU5wGidOw_HrNz_7RDx-jgzI6TMZvSB3Hg=",
        "alasanPerbaikan": "-",
        "nomorPersetujuanPembatalan": null,
        "tanggalPersetujuanPembatalan": null,
        "kodeUploadDasarPembatalan": null,
        "alasanPembatalan": " tidak sah"
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