# Get Data P3C

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi P3C berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/getDataP3c?idP3cHeader={idP3cHeader}&limit={limit}&page={page}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idP3cHeader |
| `String` | `Identifikasi unik untuk header CK-5` | e02423f2-9663-4614-ac13-9324a28f45b4 |
| `limit` | `Integer` | Jumlah limit data |
| `10` | `page` | Integer |
| `Nomor Halaman` | `1` | Parameter Example |

`GET` `{API_URL}/getDataP3c?idP3cHeader=03a4d412-a913-4416-94d1-c76ef8cbe702&limit=10&page=1`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "currentPage": 1,
    "limit": 10,
    "totalPages": 0,
    "totalData": 0,
    "listData": {
      "header": {
        "idP3CHeader": "03a4d412-a913-4416-94d1-c76ef8cbe702",
        "kodeKantor": "004000",
        "namaKantor": "DIREKTORAT CUKAI",
        "idNppbkc": "9ef3abbd-d2ad-4937-aa58-c9b440a798d8",
        "nppbkc": "0948872312654000070612",
        "npwp": "1234",
        "namaPerusahaan": "string",
        "alamatPerusahaan": "Durian runtuh",
        "idJenisBkc": 2,
        "namaJenisBkc": "HT",
        "nomorP3C": "000314",
        "tanggalP3C": "2023-08-29 00:00:00",
        "tanggalPermohonan": "2023-08-29 00:00:00",
        "idJenisPeriodeP3c": 2,
        "namaJenisPeriodeP3c": "Awal",
        "bulanPersediaan": "2023",
        "ambilPitaCukai": "KC",
        "flagBatal": "N",
        "nomorRekomendasi": null,
        "tanggalRekomendasi": null,
        "nomorTolak": null,
        "tanggalTolak": null,
        "nipPejabat": null,
        "namaPejabat": "H.Muhammad",
        "keterangan": null,
        "idProses": "f68052ff-4ca4-4528-9088-25276d39633a",
        "status": "DRAFT",
        "idJenisP3c": "2",
        "suratRekomendasiUrl": null,
        "idResult": "03a4d412-a913-4416-94d1-c76ef8cbe702"
      },
      "detail": []
    }
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