# Get Detail CK-1C

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail CK-1C berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/transform/getCukaiCk1cDetail?idCk1cHeader={idCk1cHeader}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idCk1cHeader |
| `String` | `Identifikasi unik untuk header CK-1C` | 7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b |

`GET` `{API_URL}/transform/getCukaiCk1cDetail?idCk1cHeader=7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b`

### Response

200

```json
{
  "message": "success",
  "status": true,
  "data": {
    "_shards": {
      "total": 1,
      "failed": 0,
      "successful": 1,
      "skipped": 0
    },
    "hits": {
      "hits": [
        {
          "_index": "cukai_ck1c_detail-bkp",
          "_type": "_doc",
          "_source": {
            "isi_mililiter": 500,
            "header_id": "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
            "nip_pejabat": "234567890123456789",
            "jumlah_liter": 25,
            "tanggal_tolak": null,
            "nama_perusahaan": "PANJANG JIWO PT",
            "kode_kantor": "070600",
            "jumlah_kemasan": 50,
            "jumlah_mililiter": 25000,
            "nip_pemeriksa": "198706062008121004",
            "jumlah_cukai_pembulatan": 251000,
            "nama_jenis_kemasan": "Jenis Kemasan B",
            "nppbkc": "0014539407415000150312",
            "cara_bayar": "K",
            "nama_pemohon": "Pemohon B",
            "alamat_perusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
            "isi_liter": 0.5,
            "nama_pemeriksa": "GAMPANG JUNIARTO",
            "tanggal_lunas": "2023-09-28T22:00:00.000Z",
            "tanggal_ck1c": "2023-08-25T11:11:07.659Z",
            "nama_pejabat": "Pejabat B",
            "id_proses": "5a1d3bc2-0306-4a49-b77d-77430acc3f8a",
            "nama_kantor": "KPPBC Tangerang",
            "npwp": "014539407415000",
            "flag_batal": "N",
            "nomor_ck1c": "000021",
            "jumlah_cukai": 40000,
            "tanggal_permohonan": "2023-08-25T11:11:07.659Z",
            "tanggal_jatuh_tempo": "2023-09-28T22:00:00.000Z",
            "id_jenis_kemasan": 2,
            "jumlah_cukai_dibayar": 250500,
            "ppn": 10000,
            "id_ck1c_detail": "23d55be3-ccec-4812-a7e1-9039b00dad58",
            "tarif_cukai": 800,
            "id_merk": "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
            "nomor_tolak": null,
            "id_nppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
            "catatan_pemeriksaan": "Catatan",
            "kode_billing": null,
            "nama_merk": "Merk B",
            "status": "Lunas"
          },
          "_id": "23d55be3-ccec-4812-a7e1-9039b00dad58",
          "_score": 5.5053315
        }
      ],
      "total": {
        "value": 1,
        "relation": "eq"
      },
      "max_score": 5.5053315
    },
    "took": 1,
    "timed_out": false
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