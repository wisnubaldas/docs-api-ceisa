# Get Detail CK-1

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail CK-1 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/transform/getCukaiCk1Detail?idCk1Header={idCk1Header}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idCk1Header |
| `String` | `Identifikasi unik untuk header CK-1` | 74985723-7e73-47bf-a465-2d94e099a6ec |

`GET` `{API_URL}/transform/getCukaiCk1Detail?idCk1Header=74985723-7e73-47bf-a465-2d94e099a6ec`

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
          "_index": "cukai_ck1_detail-000001",
          "_type": "_doc",
          "_source": {
            "detail_jumlah_cukai": 50,
            "nama_golongan_bkc": "Group A",
            "nama_jenis_bkc": "HT",
            "kode_jenis_produksi_bkc": "JKL456",
            "nama_siap_pita": null,
            "isi_volume": 10,
            "tanggal_ck1": "0015-03-16T00:00:00.000Z",
            "ambil_pita_cukai": "KP",
            "jumlah_lembar_pending": 5,
            "kode_kantor": "K001",
            "jumlah_cukai_pengurang": 500,
            "tarif": 15,
            "jumlah_cukai_pembulatan": null,
            "jumlah_satuan": 20,
            "tahun_pita": 2022,
            "jumlah_lembar": 5,
            "nppbkc": "NPPBKC124",
            "cara_bayar": "K",
            "id_golongan_bkc": 1,
            "id_kuasa": "111e2222-e89b-12d3-a456-426614174002",
            "header_jumlah_cukai_dibayar": null,
            "warna": "Blue",
            "hje": 123,
            "nama_serah_pita": "Eko",
            "id_p3c_detail": "d1b2b0f9-4d2d-4c1f-9d1f-2e3c4c5d6e7f",
            "id_proses": "987e6543-e89b-12d3-a456-426614174002",
            "nama_kantor": "Customs Office",
            "npwp": "5345435324543",
            "jumlah_hje": 100,
            "flag_batal": "N",
            "nip_siap_pita": null,
            "tanggal_jatuh_tempo": "2023-09-09T22:00:00.086Z",
            "nama_ttd": "Eko",
            "id_seripita": 2,
            "flag_ambil_pita": "Y",
            "id_nppbkc": "111e2222-e89b-12d3-a456-426614174002",
            "kode_billing": null,
            "nama_merk": "Brand X",
            "status": "BELUM LUNAS",
            "nip_serah_pita": "1234567",
            "kode_warna": "ME",
            "header_id": "74985723-7e73-47bf-a465-2d94e099a6ec",
            "nama_perusahaan": "ABC Company",
            "nip_ttd": "12344556",
            "header_jumlah_cukai": null,
            "nama_seripita": "Type Y",
            "tanggal_serah_pita": null,
            "nomor_ck1": "CK1-123",
            "id_ck1_detail": "d6d9cd4a-4e2e-4654-a84f-7ccd827392ae",
            "nama_pemohon": "Eko",
            "alamat_perusahaan": "123 Main St",
            "tanggal_lunas": null,
            "id_jenis_produksi_bkc": null,
            "tanggal_permohonan": "2023-09-09T18:05:37.899Z",
            "nama_kuasa_pita": "John Doe",
            "id_jenis_bkc": 2,
            "ppn": 10,
            "identitas_kuasa": null,
            "id_merk": "d1b2b0f9-4d2d-4c1f-9d1f-2e3c4c5d6e7f",
            "satuan": "pcs",
            "id_tarif_merk_detail": null,
            "personalisasi": "BINTIKANII"
          },
          "_id": "d6d9cd4a-4e2e-4654-a84f-7ccd827392ae",
          "_score": 5.3783603
        }
      ],
      "total": {
        "value": 1,
        "relation": "eq"
      },
      "max_score": 5.3783603
    },
    "took": 4,
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

Last updated 8 months ago

📄
```