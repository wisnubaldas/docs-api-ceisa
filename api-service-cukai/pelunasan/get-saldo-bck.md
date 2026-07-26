# Get Saldo BCK

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi saldo BCK berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/getSaldoBck?nppbkc={nppbkc}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `Identifikasi unik untuk NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0014539407415000150312 |

`GET` `{API_URL}/getSaldoBck?nppbkc=0014539407415000150312`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": [
    {
      "kodeKantor": "070600",
      "idMerk": "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
      "namaMerk": "Merk B",
      "jumlahKemasan": 50,
      "isiMililiter": 500,
      "jumlahMililiter": 25000,
      "jumlahCukai": 40000,
      "idJenisKemasan": 2,
      "namaJenisKemasan": "Jenis Kemasan B",
      "isiLiter": 0,
      "jumlahLiter": 25,
      "tarifCukai": 800,
      "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
      "nppbkc": "0014539407415000150312",
      "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
      "tanggalPermohonan": "2023-08-25",
      "caraBayar": "K",
      "flagBatal": "N",
      "nomorCk1c": "000021",
      "tanggalCk1c": "2023-08-25",
      "tanggalJatuhTempo": "2023-09-28",
      "tanggalLunas": "2023-09-28",
      "namaPejabat": "Pejabat B",
      "nipPemeriksa": "198706062008121004",
      "namaPemeriksa": "GAMPANG JUNIARTO",
      "catatanPemeriksaan": "Catatan",
      "nomorTolak": null,
      "tanggalTolak": null,
      "kodeBilling": null,
      "idCk1cHeader": "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
      "namaKantor": "KPPBC Tangerang",
      "nipPejabat": "234567890123456789",
      "namaPemohon": "Pemohon B",
      "npwp": "014539407415000",
      "namaPerusahaan": "PANJANG JIWO PT",
      "idProses": "5a1d3bc2-0306-4a49-b77d-77430acc3f8a",
      "jumlahCukaiDibayar": "250500",
      "jumlahCukaiPembulatan": "251000",
      "saldoLiter": 25,
      "saldoKemasan": 50,
      "status": "Lunas",
      "ppn": 10000,
      "idSaldoCk1cHeader": "a7e2b5d1-ef36-42a2-9d7a-235e5d2f4c8a",
      "idCk1cDetail": "23d55be3-ccec-4812-a7e1-9039b00dad58",
      "waktuUpdate": "2023-10-18"
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

Last updated 9 months ago

📄
```