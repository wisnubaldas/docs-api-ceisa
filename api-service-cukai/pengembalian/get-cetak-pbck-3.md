# Get Cetak PBCK-3

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi cetak PBCK-3 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/hostToHostCetakCk2/cetakPbck3?idDokPelengkapCk2Header={idDokPelengkapCk2Header}&nomorPbck3={nomorPbck3}&nppbkc={nppbkc}&tanggalPbck3={tanggalPbck3}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idDokPelengkapCk2Header |
| `String` | `Identifikasi unik untuk dokumen pelengkap header CK-2` | e6eda05c-eb4b-4366-b89f-6744e4d808b4 |
| `nomorPbck3` | `String` | Nomor dokumen PBCK-3 |
| `PBCK30003` | `nppbkc` | String |
| `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | `1112223334445556667778` | tanggalPbck3 |
| `Date` | `Tanggal penerbitan dokumen PBCK-3` | 2023-09-07 |

`GET` `{API_URL}/hostToHostCetakCk2/cetakPbck3?idDokPelengkapCk2Header=e6eda05c-eb4b-4366-b89f-6744e4d808b4&nomorPbck3=PBCK30003&nppbkc=1112223334445556667778&tanggalPbck3=2023-09-07`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "header": {
      "idDokPelengkapCk2Header": "e6eda05c-eb4b-4366-b89f-6744e4d808b4",
      "kodeKantor": "K34567",
      "namaKantor": "Kantor C",
      "idNppbkc": "ed532d7a-1e36-4d74-993c-a96d9a6a919a",
      "nppbkc": "1112223334445556667778",
      "npwp": "123-456-789",
      "namaPerusahaan": "Random Company Ltd",
      "alamatPerusahaan": "1234 Random Street",
      "idJenisBkc": 3,
      "namaJenisBkc": "HT",
      "asalDokumenCk2": "CK-5",
      "nomorPbck7": "PBCK70003",
      "tanggalPbck7": "2023-09-02T00:00:00",
      "idCk5Header": "42dc1e02-f59c-4c9a-b7aa-83a4ea24f881",
      "nomorCk5": "CK50003",
      "tanggalCk5": "2023-09-03T00:00:00",
      "nomorBack1": "Back3-789",
      "tanggalBack1": "2023-09-04T00:00:00",
      "nomorBaPenyegelan": "BA789",
      "tanggalBaPenyegelan": "2023-09-05T00:00:00",
      "tanggalPemeriksaan": "2023-09-06T00:00:00",
      "kesimpulanBack1": "Kesimpulan3",
      "nipPejabatBack1": "345678901234567890",
      "namaPejabatBack1": "Pejabat C",
      "nomorPbck3": "PBCK30003",
      "tanggalPbck3": "2023-09-07T00:00:00",
      "nomorBaBukaSegel": "BA890",
      "tanggalBaBukaSegel": "2023-09-08T00:00:00",
      "nomorTandaTerima": "Tanda3",
      "tanggalTandaTerima": "2023-09-09T00:00:00",
      "nipTandaTerimaBack3": "345678901234567890",
      "namaTandaTerimaBack3": "Tanda C",
      "nomorKepPengawas": "KepPengawas3",
      "tanggalKepPengawas": "2023-09-10T00:00:00",
      "nomorSuratTugas": "Surat3",
      "tanggalSuratTugas": "2023-09-11T00:00:00",
      "nomorSuratPersetujuan": "SuratPersetujuan3",
      "tanggalSuratPersetujuan": "2023-09-12T00:00:00",
      "tanggalPemusnahan": "2023-09-13T00:00:00",
      "lokasiPemusnahan": "Lokasi3",
      "nomorTolak": "Tolak5",
      "tanggalTolak": "2023-08-27T00:00:00",
      "keterangan": "Keterangan3",
      "flagBatal": "Y",
      "idProses": "2540d702-47ca-43a3-9fd4-252b57ccafdf",
      "waktuRekam": "2023-09-02T12:34:56",
      "status": "Status3",
      "nipUpdate": "345678901234567890",
      "waktuUpdate": "2023-09-03T23:45:01",
      "nomorBack3": "Back3-789",
      "tanggalBack3": "2023-09-15T00:00:00",
      "lokasiBaBukaSegel": null
    },
    "detail": [
      {
        "idDokPelengkapCk2Detail": "e8a21203-86b4-4bf6-82f1-d2f34d993cf3",
        "idDokPelengkapCk2Header": "e6eda05c-eb4b-4366-b89f-6744e4d808b4",
        "idTarifMerkDetail": "b2a3dbf0-3a1b-496a-93db-06f2929c220e",
        "idMerk": "a6a42e74-9e7e-4b5e-bb4c-481b488ed1b7",
        "namaMerk": "GEMILANG",
        "idJenisProduksiBkc": 1,
        "kodeJenisProduksiBkc": "PROD-001",
        "isiVolume": 12,
        "hje": 780,
        "tarif": 313,
        "idSeripita": 1,
        "namaSeripita": "1",
        "idGolonganBkc": 1,
        "namaGolonganBkc": "Random Golongan",
        "tahunPita": 2023,
        "idCk1Detail": "57ee7d6c-7e5a-41bf-8e72-d2e743a7f74c",
        "idCk5Detail": "c13665a7-2e64-45d1-9750-13be9f4a67a1",
        "jumlahKepingDiberitahukan": 10,
        "cukaiDiberitahukan": 1000,
        "jumlahBack1": 5,
        "cukaiBack1": 500,
        "jumlahBack3": 3,
        "cukaiBack3": 300
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

Last updated 8 months ago

📄
```