# Perbaikan LACK-11

### Introduction

  * Purpose: API ini digunakan untuk perbaikan data LACK-11

  * Overview: Proses perbaikan LACK-11 mensyaratkan 2 object data dalam bentuk form yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/lack11/perbaikan`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Endpoint ini menerima parameter berikut dalam form data:` | Header Section |
| `Parameter Name` | `Type` | Description |
| `Example Value` | `idLack11Header` | String |
| `ID unik untuk header` | `4216f948-76f6-4a17-ba59-f6cfa508a412` | periodeEdit |
| `Number` | `Periode laporan yang telah diedit` | 3 |
| `kodeKantor` | `String` | Kode kantor pelaporan |
| `150300` | `namaPerusahaan` | String |
| `Nama perusahaan yang melaporkan` | `PANJANG JIWO PT` | namaPengusahaEdit |
| `String` | `Nama pengusaha yang telah diedit` | ANI |
| `noIdentitasEdit` | `String` | Nomor identitas yang telah diedit |
| `0014539407415000150312` | `tanggalLaporanEdit` | Date |
| `Tanggal laporan yang telah diedit` | `2023-12-26` | alasanPerbaikan |
| `String` | `Alasan perbaikan` | salah data |
| `dokumenDasarPerbaikan` | `Binary` | Dokumen dasar perbaikan dalam format binary |
| `(binary)` | `Detail Section` | Parameter Name |
| `Type` | `Description` | Example Value |
| `details[0].namaMerkEdit` | `String` | Nama merk yang telah diedit |
| `JAMESON Irish Whiskey` | `details[0].isiEdit` | Number |
| `Isi per kemasan yang telah diedit` | `20` | details[0].hjeEdit |
| `Number` | `Harga Jual Eceran yang telah diedit` | 300000 |
| `details[0].tarifSpesifikEdit` | `Number` | Tarif spesifik yang telah diedit |
| `15000` | `details[0].kadarEaEdit` | String |
| `Kadar Etil Alkohol yang telah diedit` | `70` | details[0].seriPitaEdit |
| `String` | `Seri pita yang telah diedit` | 3 |
| `details[0].jenisProduksiBkcEdit` | `String` | Jenis produksi BKC yang telah diedit |
| `MMEA GOLONGAN C` | `details[0].idLack11Detail` | String |
| `ID unik untuk detail` | `46a5d72d-ea00-4cc5-a046-b8944c0a88f8` | details[0].idMerkEdit |
| `String` | `ID merk yang telah diedit` | d778c883-98b9-445c-9565-abbb740654fa |
| `details[0].pemasukanEdit` | `Number` | Jumlah pemasukan yang telah diedit |
| `11000` | `details[0].saldoAwalEdit` | Number |
| `Saldo awal yang telah diedit` | `0` | details[0].pengeluaranEdit |
| `Number` | `Jumlah pengeluaran yang telah diedit` | 9000 |
| `details[0].bkcMusnahEdit` | `Number` | Jumlah BKC yang dimusnahkan |
| `8000` | `details[0].saldoAkhirEdit` | Number |
| `Saldo akhir setelah perhitungan` | `-20000` | details[0].keteranganEdit |
| `String` | `Keterangan tambahan` | keterangan |
| `details[0].sudahDilekatiEdit` | `Number` | Jumlah kemasan yang sudah dilekati pita |
| `0` | `details[0].belumDilekatiEdit` | Number |
| `Jumlah kemasan yang belum dilekati pita` | `0` | details[0].uuidEdit |
| `String` | `UUID unik untuk detail` | fbf33e2d-2ac2-46ce-b8c4-a6dd6a2a4200 |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Perbaikan LACK-11",
  "properties": {
    "idLack11Header": {
      "type": "string",
      "format": "uuid",
      "description": "ID LACK-11 Header."
    },
    "periodeEdit": {
      "type": "string",
      "enum": ["1", "2", "3", "4"],
      "description": "Periode laporan dalam kuartal (1, 2, 3, atau 4)."
    },
    "kodeKantor": {
      "type": "string",
      "description": "Kode kantor dengan 6 digit angka."
    },
    "namaPerusahaan": {
      "type": "string",
      "description": "Nama perusahaan."
    },
    "namaPengusahaEdit": {
      "type": "string",
      "description": "Nama pengusaha yang diperbaiki."
    },
    "noIdentitasEdit": {
      "type": "string",
      "description": "Nomor identitas pengusaha dengan 22 digit angka."
    },
    "tanggalLaporanEdit": {
      "type": "string",
      "format": "date",
      "description": "Tanggal laporan yang diperbaiki dalam format YYYY-MM-DD."
    },
    "alasanPerbaikan": {
      "type": "string",
      "description": "Alasan perbaikan data."
    },
    "dokumenDasarPerbaikan": {
      "type": "string",
      "format": "binary",
      "description": "Dokumen dasar perbaikan."
    },
    "details": {
      "type": "array",
      "description": "Detail dari laporan yang diperbaiki.",
      "items": {
        "type": "object",
        "properties": {
          "namaMerkEdit": {
            "type": "string",
            "description": "Nama merk produk yang diperbaiki."
          },
          "isiEdit": {
            "type": "string",
            "description": "Isi produk yang diperbaiki (volume atau berat)."
          },
          "hjeEdit": {
            "type": "string",
            "description": "Harga jual eceran yang diperbaiki."
          },
          "tarifSpesifikEdit": {
            "type": "number",
            "description": "Tarif spesifik untuk produk yang diperbaiki."
          },
          "kadarEaEdit": {
            "type": "string",
            "description": "Kadar alkohol dalam produk yang diperbaiki."
          },
          "seriPitaEdit": {
            "type": "string",
            "description": "Seri pita cukai yang diperbaiki."
          },
          "jenisProduksiBkcEdit": {
            "type": "string",
            "description": "Jenis produksi BKC yang diperbaiki."
          },
          "idLack11Detail": {
            "type": "string",
            "format": "uuid",
            "description": "ID LACK-11 Detail."
          },
          "idMerkEdit": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk yang diperbaiki."
          },
          "pemasukanEdit": {
            "type": "integer",
            "description": "Jumlah pemasukan produk yang diperbaiki."
          },
          "saldoAwalEdit": {
            "type": "integer",
            "description": "Saldo awal produk yang diperbaiki."
          },
          "pengeluaranEdit": {
            "type": "integer",
            "description": "Jumlah pengeluaran produk yang diperbaiki."
          },
          "bkcMusnahEdit": {
            "type": "integer",
            "description": "Jumlah BKC yang musnah yang diperbaiki."
          },
          "saldoAkhirEdit": {
            "type": "integer",
            "description": "Saldo akhir produk yang diperbaiki."
          },
          "keteranganEdit": {
            "type": "string",
            "description": "Keterangan tambahan untuk perbaikan laporan."
          },
          "sudahDilekatiEdit": {
            "type": "integer",
            "description": "Jumlah produk yang sudah dilekati pita cukai yang diperbaiki."
          },
          "belumDilekatiEdit": {
            "type": "integer",
            "description": "Jumlah produk yang belum dilekati pita cukai yang diperbaiki."
          },
          "uuidEdit": {
            "type": "string",
            "format": "uuid",
            "description": "UUID unik untuk detail laporan yang diperbaiki."
          }
        },
        "required": [
          "namaMerkEdit",
          "idLack11Detail",
          "idMerkEdit",
          "uuidEdit"
        ]
      }
    }
  },
  "required": [
    "idLack11Header",
    "periodeEdit",
    "kodeKantor",
    "namaPerusahaan",
    "namaPengusahaEdit",
    "noIdentitasEdit",
    "tanggalLaporanEdit",
    "alasanPerbaikan",
    "details"
  ]
}

Example Request : Perbaikan LACK-11 

--boundary
Content-Disposition: form-data; name="idLack11Header"

4216f948-76f6-4a17-ba59-f6cfa508a412
--boundary
Content-Disposition: form-data; name="periodeEdit"

3
--boundary
Content-Disposition: form-data; name="kodeKantor"

150300
--boundary
Content-Disposition: form-data; name="namaPerusahaan"

PANJANG JIWO PT
--boundary
Content-Disposition: form-data; name="namaPengusahaEdit"

ANI
--boundary
Content-Disposition: form-data; name="noIdentitasEdit"

0014539407415000150312
--boundary
Content-Disposition: form-data; name="tanggalLaporanEdit"

2023-12-26
--boundary
Content-Disposition: form-data; name="alasanPerbaikan"

salah data
--boundary
Content-Disposition: form-data; name="dokumenDasarPerbaikan"

(binary)
--boundary
Content-Disposition: form-data; name="details[0].namaMerkEdit"

JAMESON Irish Whiskey
--boundary
Content-Disposition: form-data; name="details[0].isiEdit"

20
--boundary
Content-Disposition: form-data; name="details[0].hjeEdit"

300000
--boundary
Content-Disposition: form-data; name="details[0].tarifSpesifikEdit"

15000
--boundary
Content-Disposition: form-data; name="details[0].kadarEaEdit"

70
--boundary
Content-Disposition: form-data; name="details[0].seriPitaEdit"

3
--boundary
Content-Disposition: form-data; name="details[0].jenisProduksiBkcEdit"

MMEA GOLONGAN C
--boundary
Content-Disposition: form-data; name="details[0].idLack11Detail"

46a5d72d-ea00-4cc5-a046-b8944c0a88f8
--boundary
Content-Disposition: form-data; name="details[0].idMerkEdit"

d778c883-98b9-445c-9565-abbb740654fa
--boundary
Content-Disposition: form-data; name="details[0].pemasukanEdit"

11000
--boundary
Content-Disposition: form-data; name="details[0].saldoAwalEdit"

0
--boundary
Content-Disposition: form-data; name="details[0].pengeluaranEdit"

9000
--boundary
Content-Disposition: form-data; name="details[0].bkcMusnahEdit"

8000
--boundary
Content-Disposition: form-data; name="details[0].saldoAkhirEdit"

-20000
--boundary
Content-Disposition: form-data; name="details[0].keteranganEdit"

keterangan
--boundary
Content-Disposition: form-data; name="details[0].sudahDilekatiEdit"

0
--boundary
Content-Disposition: form-data; name="details[0].belumDilekatiEdit"

0
--boundary
Content-Disposition: form-data; name="details[0].uuidEdit"

fbf33e2d-2ac2-46ce-b8c4-a6dd6a2a4200
--boundary--

Validation Rules

Field

Rules

idLack11Header

Harus merupakan UUID yang valid.

tanggalLaporanEdit

Harus dalam format YYYY-MM-DD

details[0].isiEdit

Harus berupa angka positif

details[0].hjeEdit

Harus berupa angka positif

details[0].tarifSpesifikEdit

Harus berupa angka positif

details[0].kadarEaEdit

Harus berupa angka positif

details[0].idLack11Detail

Harus merupakan UUID yang valid.

details[0].idMerkEdit

Harus merupakan UUID yang valid.

details[0].pemasukanEdit

Harus berupa angka positif

details[0].saldoAwalEdit

Harus berupa angka positif

details[0].pengeluaranEdit

Harus berupa angka positif

details[0].bkcMusnahEdit

Harus berupa angka positif

details[0].uuidEdit

Harus merupakan UUID yang valid.
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