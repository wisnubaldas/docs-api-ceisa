# Get Detail HT

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail data HT berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/ck4/detail-ht?idCk4={idCk4}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idCk4 |
| `String` | `Identifikasi unik untuk CK-4` | f9ae018d-77b8-429a-a99f-c07acb813bc3 |

`GET` `{API_URL}/portal/ck4/detail-ht?idCk4=f9ae018d-77b8-429a-a99f-c07acb813bc3`

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": {
        "namaPemrakarsa": null,
        "idProsesPemrakarsa": null,
        "jabatanPemrakarsa": null,
        "nipPemrakarsa": null,
        "idNppbkc": "9ac72c62-70fb-4664-9f58-00712cf708f8",
        "namaPerusahaan": "BENTOEL PRIMA, PT",
        "nppbkc": "0706130029",
        "alamatPerusahaan": "JL. RAYA KARANGLO, KEC. SINGOSARI, MALANG",
        "jenisLaporan": null,
        "nomorPemberitahuan": "050/PROD-BTG/III/2023",
        "tanggalPemberitahuan": "2023-07-12T00:00:00.000+07:00",
        "periodeBulan": null,
        "periodeTahun": null,
        "tanggalProduksiAwal": "2023-07-12",
        "tanggalProduksiAkhir": "2023-07-12",
        "totalJumlahKemasan": null,
        "totalJumlahKemasanDilekatiPita": null,
        "totalJumlahProduksiHtBtg": 27888.00,
        "totalJumlahProduksiHtGr": 14479040,
        "totalJumlahProduksiHtMl": 0,
        "namaKota": "Kabupaten Tangerang",
        "namaPengusaha": "SISKA SETIAWATI",
        "npwp": "015866924651000",
        "jenisBarangKenaCukai": "EA",
        "tanggalDiterima": "2023-02-07T00:00:00.000+07:00",
        "nomorSurat": null,
        "tanggalSurat": null,
        "nipPenjabatBc": null,
        "keteranganPerbaikan": null,
        "namaPejabat": null,
        "kodeUploadPerbaikan": null,
        "isStck": null,
        "kodeKantor": "070600",
        "namaKantor": "KPPBC TMC MALANG",
        "status": "Selesai",
        "idProses": "63ffc879-5b56-4ceb-926d-8b87eb793e33",
        "idSpl": null,
        "tanggalPermohonanPerbaikan": null,
        "nomorPermohonanPerbaikan": null,
        "tanggalPembatalan": null,
        "nomorPembatalan": null,
        "details": [
            {
                "idCk4Detail": "16bd9b53-591c-49b2-aebd-b8c66d75512d",
                "idMerkHt": "f9ae018d-77b8-429a-a99f-c07acb813bc3",
                "nomorProduksi": "MRK-01/2/BA-03/040323",
                "keterangan": "BA-04",
                "tanggalProduksi": "2023-07-12",
                "jumlahKemasan": 0,
                "jumlahProduksi": 0,
                "jumlahKemasanDilekatiPita": 0,
                "namaMerkHt": "VELO POLAR JP",
                "jenisProduksiHt": "HTL",
                "hje": 2450.00,
                "tarif": 120.00,
                "bahanKemasan": "Lainnya",
                "isiPerKemasan": 25.00,
                "satuanHt": "gr",
                "seriPita": "null",
                "idJenisKemasan": null,
                "idJenisProduksiBkc": null
            }
        ]
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