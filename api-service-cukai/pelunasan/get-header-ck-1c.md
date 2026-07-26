# Get Header CK-1C

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi header CK-1C berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/transform/getCukaiCk1cHeader?nppbkc={nppbkc}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `Identifikasi unik untuk NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0014539407415000150312 |

`GET` `{API_URL}/transform/getCukaiCk1cHeader?nppbkc=0014539407415000150312`

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
          "_index": "cukai_ck1c_header-000001",
          "_type": "_doc",
          "_source": {
            "nip_pejabat": "",
            "id_ck1c_header": "24a8399a-933b-41b1-8e72-c6e13bc5bb07",
            "tanggal_tolak": null,
            "nama_perusahaan": "PANJANG JIWO PT",
            "kode_kantor": "050600",
            "nip_pemeriksa": null,
            "jumlah_cukai_pembulatan": 0,
            "cara_bayar": "K",
            "nama_pemohon": "HENDRY",
            "nppbkc": "0014539407415000150312",
            "alamat_perusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
            "nama_pemeriksa": null,
            "tanggal_lunas": null,
            "tanggal_ck1c": 1698132782820,
            "nama_pejabat": null,
            "id_proses": "08b2953f-0a4d-4438-afda-a1015e5e56cf",
            "nama_kantor": "KPPBC TANGERANG",
            "npwp": "014539407415000",
            "flag_batal": "N",
            "nomor_ck1c": "0000000",
            "tanggal_jatuh_tempo": null,
            "tanggal_permohonan": 1698132782820,
            "jumlah_cukai_dibayar": 0,
            "ppn": null,
            "nomor_tolak": null,
            "id_nppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
            "catatan_pemeriksaan": null,
            "status": "Pemeriksaan"
          },
          "_id": "-cWTYIsB8x9GnZUn8Iil",
          "_score": 0.45144278
        },
        {
          "_index": "cukai_ck1c_header-000001",
          "_type": "_doc",
          "_source": {
            "nip_pejabat": "",
            "id_ck1c_header": "25e82880-8a4a-4bae-ae2d-a488970c41d3",
            "tanggal_tolak": null,
            "nama_perusahaan": "PANJANG JIWO PT",
            "kode_kantor": "050600",
            "nip_pemeriksa": null,
            "jumlah_cukai_pembulatan": 0,
            "cara_bayar": "T",
            "nama_pemohon": "HENDRY",
            "nppbkc": "0014539407415000150312",
            "alamat_perusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
            "nama_pemeriksa": null,
            "tanggal_lunas": null,
            "tanggal_ck1c": 1698132883263,
            "nama_pejabat": null,
            "id_proses": "4f2a052e-47cb-41a4-8bdc-b5a79920b95d",
            "nama_kantor": "KPPBC TANGERANG",
            "npwp": "014539407415000",
            "flag_batal": "N",
            "nomor_ck1c": "0000000",
            "tanggal_jatuh_tempo": null,
            "tanggal_permohonan": 1698132883263,
            "jumlah_cukai_dibayar": 0,
            "ppn": null,
            "nomor_tolak": null,
            "id_nppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
            "catatan_pemeriksaan": null,
            "status": "Pemeriksaan"
          },
          "_id": "BMWVYIsB8x9GnZUneIkP",
          "_score": 0.45144278
        },
        {
          "_index": "cukai_ck1c_header-000001",
          "_type": "_doc",
          "_source": {
            "nip_pejabat": "",
            "id_ck1c_header": "4b15780e-da94-4c1b-88cc-feff047482f3",
            "tanggal_tolak": null,
            "nama_perusahaan": "PANJANG JIWO PT",
            "kode_kantor": "050600",
            "nip_pemeriksa": null,
            "jumlah_cukai_pembulatan": 0,
            "cara_bayar": "K",
            "nama_pemohon": "HENDRY",
            "nppbkc": "0014539407415000150312",
            "alamat_perusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
            "nama_pemeriksa": null,
            "tanggal_lunas": null,
            "tanggal_ck1c": 1698121378152,
            "nama_pejabat": null,
            "id_proses": "b135c258-c4d6-43e4-83c5-31afbff7e276",
            "nama_kantor": "KPPBC TANGERANG",
            "npwp": "014539407415000",
            "flag_batal": "N",
            "nomor_ck1c": "0000000",
            "tanggal_jatuh_tempo": null,
            "tanggal_permohonan": 1698121378152,
            "jumlah_cukai_dibayar": 0,
            "ppn": null,
            "nomor_tolak": null,
            "id_nppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
            "catatan_pemeriksaan": null,
            "status": "Pemeriksaan"
          },
          "_id": "6IHkX4sBFVmrjV743wlg",
          "_score": 0.45144278
        },
        {
          "_index": "cukai_ck1c_header-000001",
          "_type": "_doc",
          "_source": {
            "nip_pejabat": "",
            "id_ck1c_header": "bcace2fd-d4b8-4f31-938c-a283ab29227e",
            "tanggal_tolak": null,
            "nama_perusahaan": "PANJANG JIWO PT",
            "kode_kantor": "050600",
            "nip_pemeriksa": null,
            "jumlah_cukai_pembulatan": 0,
            "cara_bayar": "T",
            "nama_pemohon": "HENDRY",
            "nppbkc": "0014539407415000150312",
            "alamat_perusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
            "nama_pemeriksa": null,
            "tanggal_lunas": null,
            "tanggal_ck1c": 1698121456821,
            "nama_pejabat": null,
            "id_proses": "610295c9-7baa-47ea-a27e-215adb037fb2",
            "nama_kantor": "KPPBC TANGERANG",
            "npwp": "014539407415000",
            "flag_batal": "N",
            "nomor_ck1c": "0000000",
            "tanggal_jatuh_tempo": null,
            "tanggal_permohonan": 1698121456821,
            "jumlah_cukai_dibayar": 0,
            "ppn": null,
            "nomor_tolak": null,
            "id_nppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
            "catatan_pemeriksaan": null,
            "status": "Pemeriksaan"
          },
          "_id": "AYHmX4sBFVmrjV74EQrI",
          "_score": 0.45144278
        },
        {
          "_index": "cukai_ck1c_header-000001",
          "_type": "_doc",
          "_source": {
            "nip_pejabat": "",
            "id_ck1c_header": "8874f01f-675f-4a1d-881c-2cfc0c0266b8",
            "tanggal_tolak": null,
            "nama_perusahaan": "PANJANG JIWO PT",
            "kode_kantor": "050600",
            "nip_pemeriksa": null,
            "jumlah_cukai_pembulatan": 0,
            "cara_bayar": "K",
            "nama_pemohon": "HENDRY",
            "nppbkc": "0014539407415000150312",
            "alamat_perusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
            "nama_pemeriksa": null,
            "tanggal_lunas": null,
            "tanggal_ck1c": 1698053475649,
            "nama_pejabat": null,
            "id_proses": "0cfe55ab-b230-4db3-96ab-88088ca5c058",
            "nama_kantor": "KPPBC TANGERANG",
            "npwp": "014539407415000",
            "flag_batal": "N",
            "nomor_ck1c": "0000000",
            "tanggal_jatuh_tempo": null,
            "tanggal_permohonan": 1698053475649,
            "jumlah_cukai_dibayar": 0,
            "ppn": null,
            "nomor_tolak": null,
            "id_nppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
            "catatan_pemeriksaan": null,
            "status": "Pemeriksaan"
          },
          "_id": "HcXZW4sB8x9GnZUn0moN",
          "_score": 0.45144278
        },
        {
          "_index": "cukai_ck1c_header-000001",
          "_type": "_doc",
          "_source": {
            "nip_pejabat": "",
            "id_ck1c_header": "aeab0f78-e107-4768-8ef2-113f07b65b0e",
            "tanggal_tolak": null,
            "nama_perusahaan": "PANJANG JIWO PT",
            "kode_kantor": "050600",
            "nip_pemeriksa": null,
            "jumlah_cukai_pembulatan": 0,
            "cara_bayar": "T",
            "nama_pemohon": "HENDRY",
            "nppbkc": "0014539407415000150312",
            "alamat_perusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
            "nama_pemeriksa": null,
            "tanggal_lunas": null,
            "tanggal_ck1c": 1698116875819,
            "nama_pejabat": null,
            "id_proses": "d68f0511-f741-4dc6-9d48-f7085df79031",
            "nama_kantor": "KPPBC TANGERANG",
            "npwp": "014539407415000",
            "flag_batal": "N",
            "nomor_ck1c": "0000000",
            "tanggal_jatuh_tempo": null,
            "tanggal_permohonan": 1698116875819,
            "jumlah_cukai_dibayar": 0,
            "ppn": null,
            "nomor_tolak": null,
            "id_nppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
            "catatan_pemeriksaan": null,
            "status": "Pemeriksaan"
          },
          "_id": "1YCgX4sBFVmrjV74MP5G",
          "_score": 0.45144278
        },

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