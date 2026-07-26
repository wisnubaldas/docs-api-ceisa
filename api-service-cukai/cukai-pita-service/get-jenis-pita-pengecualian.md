# Get Jenis Pita Pengecualian

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi jenis pita pengecualian berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/getJenisPitaPengecualian?nppbkc={nppbkc}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0026722918048000040422 |

`GET` `{API_URL}/getJenisPitaPengecualian?nppbkc=0026722918048000040422`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": [
    {
      "idJenisPita": "050bbce2-2433-003b-e064-0021f60abd54",
      "idNppbkc": "fe3c9198-1146-05e6-e054-0021f60abd54",
      "kodeJenisProduksiBkc": "C",
      "isiVolume": 1000,
      "hje": 0,
      "tarif": 139000,
      "idSeripita": 5,
      "awalBerlaku": "+0000-12-31T17:00:00.000+00:00",
      "akhirBerlaku": null,
      "flagPakai": "N",
      "idProses": "e7dba954-afd3-4f69-ad79-86cba7850626",
      "personalisasi": "PANARTNI01",
      "idGolonganBkc": 4,
      "namaSeripita": "I",
      "namaGolonganBkc": "IMPORTIR",
      "idJenisBkc": 2,
      "kodeWarna": "BU",
      "warna": "BIRU",
      "idJenisProduksiBkc": 15,
      "kodeKantor": "040400",
      "namaKantor": "KPPBC JAKARTA",
      "nppbkc": "0026722918048000040422",
      "namaPerusahaan": "PANTJA ARTHA NIAGA, PT.",
      "tahunPita": 2023,
      "waktuRekam": "0001-01-01T08:06:53.706+00:00",
      "kodeSatuan": "ml",
      "status": null,
      "nomorDokumen": null,
      "tanggalDokumen": null,
      "tanggalPembatalan": null,
      "nomorPembatalan": null,
      "nipPejabat": null,
      "namaPejabat": null,
      "keterangan": null,
      "namaPengusaha": null,
      "namaKota": null,
      "kodeUploadDokumen": null
    },
    {
      "idJenisPita": "050bbce2-2436-003b-e064-0021f60abd54",
      "idNppbkc": "fe3c9198-1146-05e6-e054-0021f60abd54",
      "kodeJenisProduksiBkc": "A",
      "isiVolume": 200,
      "hje": 0,
      "tarif": 15000,
      "idSeripita": 5,
      "awalBerlaku": "+0000-12-31T17:00:00.000+00:00",
      "akhirBerlaku": null,
      "flagPakai": "N",
      "idProses": "e7dba954-afd3-4f69-ad79-86cba7850626",
      "personalisasi": "-",
      "idGolonganBkc": 4,
      "namaSeripita": "I",
      "namaGolonganBkc": "IMPORTIR",
      "idJenisBkc": 2,
      "kodeWarna": "-",
      "warna": "-",
      "idJenisProduksiBkc": 13,
      "kodeKantor": "040400",
      "namaKantor": "KPPBC JAKARTA",
      "nppbkc": "0026722918048000040422",
      "namaPerusahaan": "PANTJA ARTHA NIAGA, PT.",
      "tahunPita": 2023,
      "waktuRekam": "0001-01-01T08:06:53.706+00:00",
      "kodeSatuan": "ml",
      "status": null,
      "nomorDokumen": null,
      "tanggalDokumen": null,
      "tanggalPembatalan": null,
      "nomorPembatalan": null,
      "nipPejabat": null,
      "namaPejabat": null,
      "keterangan": null,
      "namaPengusaha": null,
      "namaKota": null,
      "kodeUploadDokumen": null
    },
    {
      "idJenisPita": "050bbce2-2437-003b-e064-0021f60abd54",
      "idNppbkc": "fe3c9198-1146-05e6-e054-0021f60abd54",
      "kodeJenisProduksiBkc": "A",
      "isiVolume": 300,
      "hje": 0,
      "tarif": 15000,
      "idSeripita": 5,
      "awalBerlaku": "+0000-12-31T17:00:00.000+00:00",
      "akhirBerlaku": null,
      "flagPakai": "N",
      "idProses": "e7dba954-afd3-4f69-ad79-86cba7850626",
      "personalisasi": "-",
      "idGolonganBkc": 4,
      "namaSeripita": "I",
      "namaGolonganBkc": "IMPORTIR",
      "idJenisBkc": 2,
      "kodeWarna": "-",
      "warna": "-",
      "idJenisProduksiBkc": 13,
      "kodeKantor": "040400",
      "namaKantor": "KPPBC JAKARTA",
      "nppbkc": "0026722918048000040422",
      "namaPerusahaan": "PANTJA ARTHA NIAGA, PT.",
      "tahunPita": 2023,
      "waktuRekam": "0001-01-01T08:06:53.706+00:00",
      "kodeSatuan": "ml",
      "status": null,
      "nomorDokumen": null,
      "tanggalDokumen": null,
      "tanggalPembatalan": null,
      "nomorPembatalan": null,
      "nipPejabat": null,
      "namaPejabat": null,
      "keterangan": null,
      "namaPengusaha": null,
      "namaKota": null,
      "kodeUploadDokumen": null
    }
  ]
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

Last updated 1 year ago
```