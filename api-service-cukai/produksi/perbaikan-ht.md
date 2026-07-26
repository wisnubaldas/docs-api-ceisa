# Perbaikan HT

### Introduction

  * Purpose: API ini digunakan untuk rubah data HT

  * Overview: Proses rubah data HT mensyaratkan 2 object data dalam bentuk form yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck4/perbaikan-ht`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Endpoint ini menerima parameter berikut dalam form data:` | Header Section |
| `Parameter Name` | `Type` | Description |
| `Example Value` | `idCk4Header` | String |
| `ID unik CK4 Header` | `4034d080-db3c-45a5-8c08-ef5b8b3e04e6` | nomorPemberitahuan |
| `String` | `Nomor pemberitahuan` | 98987 |
| `totalJumlahKemasan` | `Integer` | Total jumlah kemasan |
| `100` | `totalJumlahKemasanDilekatiPita` | Integer |
| `Total jumlah kemasan yang dilekati pita cukai` | `300` | totalJumlahProduksiHtBtg |
| `Integer` | `Total jumlah produksi dalam satuan batang` | 100 |
| `totalJumlahProduksiHtGr` | `Integer` | Total jumlah produksi dalam satuan gram |
| `0` | `totalJumlahProduksiHtMl` | Integer |
| `Total jumlah produksi dalam satuan mililiter` | `0` | dokumen |
| `Binary` | `Dokumen terkait (dalam bentuk binary)` | (binary) |
| `nomorSurat` | `String` | Nomor surat terkait laporan CK4 |
| `tes` | `tanggalSurat` | Date |
| `Tanggal surat terkait laporan CK4` | `2024-08-14` | Detail Section |
| `Parameter Name` | `Type` | Description |
| `Example Value` | `details[0].idCk4Detail` | String |
| `ID unik CK4 Detail` | `ed00d5f0-382f-461c-9f2a-e7f78b025dda` | details[0].bahanKemasan |
| `String` | `Jenis bahan kemasan yang digunakan` | Kertas dan Sejenisnya |
| `details[0].hje` | `Integer` | Harga Jual Eceran per kemasan |
| `3000` | `details[0].idMerkHt` | String |
| `ID unik merk HT (Hasil Tembakau)` | `51e196c3-5e72-4c76-825b-52b69a1d7ddf` | details[0].isiPerKemasan |
| `Integer` | `Jumlah isi per kemasan` | 1 |
| `details[0].jenisProduksiHt` | `String` | Jenis produksi hasil tembakau |
| `SKT - III` | `details[0].jumlahKemasan` | Integer |
| `Jumlah kemasan yang diproduksi` | `100` | details[0].jumlahKemasanDilekatiPita |
| `Integer` | `Jumlah kemasan yang dilekati pita cukai` | 300 |
| `details[0].jumlahProduksi` | `Integer` | Jumlah total produksi |
| `100` | `details[0].nomorProduksi` | String |
| `Nomor produksi terkait` | `545454` | details[0].tanggalProduksi |
| `Date` | `Tanggal produksi` | 2024-08-01 |
| `details[0].tarif` | `Integer` | Tarif cukai |
| `122` | `details[0].namaMerkHt` | String |
| `Nama merk hasil tembakau` | `Kretek0909` | details[0].kodeSatuan |
| `String` | `Kode satuan barang` | btg |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Perbaikan HT",
  "description": "JSON Schema untuk Perbaikan HT.",
  "properties": {
    "idCk4Header": {
      "type": "string",
      "format": "uuid",
      "description": "ID CK4 Header."
    },
    "nomorPemberitahuan": {
      "type": "string",
      "description": "Nomor pemberitahuan."
    },
    "totalJumlahKemasan": {
      "type": "integer",
      "description": "Total jumlah kemasan."
    },
    "totalJumlahKemasanDilekatiPita": {
      "type": "integer",
      "description": "Total jumlah kemasan yang dilekati pita."
    },
    "totalJumlahProduksiHtBtg": {
      "type": "integer",
      "description": "Total jumlah produksi HT Botol."
    },
    "totalJumlahProduksiHtGr": {
      "type": "integer",
      "description": "Total jumlah produksi HT Gelas."
    },
    "totalJumlahProduksiHtMl": {
      "type": "integer",
      "description": "Total jumlah produksi HT Mill."
    },
    "dokumen": {
      "type": "string",
      "format": "binary",
      "description": "Dokumen."
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
          "bahanKemasan": {
            "type": "string",
            "description": "Bahan kemasan."
          },
          "hje": {
            "type": "integer",
            "description": "Harga Jual Eceran."
          },
          "idMerkHt": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk HT."
          },
          "isiPerKemasan": {
            "type": "integer",
            "description": "Isi per kemasan."
          },
          "jenisProduksiHt": {
            "type": "string",
            "description": "Jenis produksi HT."
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
          "nomorProduksi": {
            "type": "string",
            "description": "Nomor produksi."
          },
          "tanggalProduksi": {
            "type": "string",
            "format": "date",
            "description": "Tanggal produksi."
          }
        },
        "required": [
          "idCk4Detail",
          "bahanKemasan",
          "hje",
          "idMerkHt",
          "isiPerKemasan",
          "jenisProduksiHt",
          "jumlahKemasan",
          "jumlahKemasanDilekatiPita",
          "jumlahProduksi",
          "nomorProduksi",
          "tanggalProduksi"
        ]
      }
    }
  },
  "required": [
    "idCk4Header",
    "nomorPemberitahuan",
    "totalJumlahKemasan",
    "totalJumlahKemasanDilekatiPita",
    "totalJumlahProduksiHtBtg",
    "totalJumlahProduksiHtGr",
    "totalJumlahProduksiHtMl",
    "dokumen",
    "nomorSurat",
    "tanggalSurat",
    "details"
  ]
}

Example Request : Perbaikan HT

--boundary
Content-Disposition: form-data; name="idCk4Header"

4034d080-db3c-45a5-8c08-ef5b8b3e04e6
--boundary
Content-Disposition: form-data; name="nomorPemberitahuan"

98987
--boundary
Content-Disposition: form-data; name="totalJumlahKemasan"

100
--boundary
Content-Disposition: form-data; name="totalJumlahKemasanDilekatiPita"

300
--boundary
Content-Disposition: form-data; name="totalJumlahProduksiHtBtg"

100
--boundary
Content-Disposition: form-data; name="totalJumlahProduksiHtGr"

0
--boundary
Content-Disposition: form-data; name="totalJumlahProduksiHtMl"

0
--boundary
Content-Disposition: form-data; name="dokumen"

(binary)
--boundary
Content-Disposition: form-data; name="nomorSurat"

tes
--boundary
Content-Disposition: form-data; name="tanggalSurat"

2024-08-14
--boundary
Content-Disposition: form-data; name="details[0].idCk4Detail"

ed00d5f0-382f-461c-9f2a-e7f78b025dda
--boundary
Content-Disposition: form-data; name="details[0].bahanKemasan"

Kertas dan Sejenisnya
--boundary
Content-Disposition: form-data; name="details[0].hje"

3000
--boundary
Content-Disposition: form-data; name="details[0].idMerkHt"

51e196c3-5e72-4c76-825b-52b69a1d7ddf
--boundary
Content-Disposition: form-data; name="details[0].isiPerKemasan"

1
--boundary
Content-Disposition: form-data; name="details[0].jenisProduksiHt"

SKT - III
--boundary
Content-Disposition: form-data; name="details[0].jumlahKemasan"

100
--boundary
Content-Disposition: form-data; name="details[0].jumlahKemasanDilekatiPita"

300
--boundary
Content-Disposition: form-data; name="details[0].jumlahProduksi"

100
--boundary
Content-Disposition: form-data; name="details[0].nomorProduksi"

545454
--boundary
Content-Disposition: form-data; name="details[0].tanggalProduksi"

2024-08-14

Validation Rules
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

Last updated 9 months ago

📄
```