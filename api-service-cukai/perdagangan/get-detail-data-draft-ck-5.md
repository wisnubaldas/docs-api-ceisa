# Get Detail Data Draft CK-5

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail data draft CK-5 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/ck5/detail-draft?idCk5Header={idCk5Header}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | idCk5Header |
| `String` | `Identifikasi unik untuk header CK-5` | e02423f2-9663-4614-ac13-9324a28f45b4 |

`GET` `{API_URL}/portal/ck5/detail-draft?idCk5Header=e02423f2-9663-4614-ac13-9324a28f45b4`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "idCk5Header": "e02423f2-9663-4614-ac13-9324a28f45b4",
    "namaJenisBkc": "HT",
    "caraPelunasan": "Pelekatan Pita Cukai",
    "statusCukai": "Sudah Dilunasi",
    "jenisPemberitahuan": "1.2. Pengeluaran",
    "flagImpor": "N",
    "kodeKantorAju": null,
    "npwpPerusahaanAsal": null,
    "nomorIdentitasAsal": "0669986374654000070613",
    "jenisIdentitasAsal": "NPPBKC",
    "idJenisIdentitasAsal": 1,
    "namaPerusahaanAsal": "DEMANG JAYA PR",
    "alamatPerusahaanAsal": "Dusun Balewarti RT 07 RW 02 Kelurahan Rejosari Kecamatan Bantur Kabupaten Malang",
    "kodeKantorAsal": "070600",
    "namaKantorAsal": "KPPBC TMC MALANG",
    "idJenisIdentitasTujuan": null,
    "jenisIdentitasTujuan": null,
    "nomorIdentitasTujuan": null,
    "namaKantorTujuan": null,
    "alamatTujuan": null,
    "kodeKantorTujuan": null,
    "nomorInvoice": null,
    "tanggalInvoice": null,
    "nomorSkepFasilitas": null,
    "tanggalSkepFasilitas": null,
    "caraAngkut": null,
    "jumlahKemasan": null,
    "idJenisKemasan": null,
    "jangkaWaktuMohon": null,
    "idJenisIdentitasPenimbun": null,
    "nomorIdentitasPenimbunan": null,
    "namaPenimbunan": null,
    "alamatPenimbunan": null,
    "kodeKantorPenimbunan": null,
    "namaKantorPenimbunan": null,
    "namaPemberitahu": "AMSAL",
    "alamatPemberitahu": null,
    "nomorAju": "12/02/2024",
    "nomorCk5": null,
    "tanggalAju": "2024-07-22",
    "tanggalCk5": null,
    "namaTujuan": null,
    "namaJenisKemasan": null,
    "kodeNegaraTujuan": null,
    "namaNegaraTujuan": null,
    "pelabuhanMuat": null,
    "kodeKantorMuat": null,
    "namaKantorMuat": null,
    "nomorIdentitasPemberitahu": "1374024808880004",
    "jenisIdentitasPenimbun": null,
    "idJenisPemberitahuan": 12,
    "idCaraAngkut": null,
    "idStatusCukai": 2,
    "nomorPeb": null,
    "tanggalPeb": null,
    "idCaraPelunasan": 2,
    "idJenisBkc": 3,
    "totalCukai": 0,
    "totalDevisa": 0,
    "kodeKantorSinggah": null,
    "namaKantorSinggah": null,
    "pelabuhanSinggah": null,
    "nppbkcAsal": "0669986374654000070613",
    "idNppbkcAsal": "fe3c9198-1af7-05e6-e054-0021f60abd54",
    "flagTransaksi": null,
    "nilaiTransaksi": null,
    "nomorSuratJalan": null,
    "tanggalSuratJalan": null,
    "idStatusAsal": 1,
    "statusAsal": "Pabrik",
    "idStatusTujuan": null,
    "kategori": null,
    "statusTujuan": null,
    "flagJenisEkspor": null,
    "idNppbkcTujuan": null,
    "lainnya": null,
    "kodeUploadLainnya": null,
    "periodeBulan": "Invalid date",
    "periodeTahun": null,
    "tanggalPengeluaranAwal": null,
    "tanggalPengeluaranAkhir": null,
    "status": "Draft",
    "details": [
      {
        "idCk5Detail": "a4ac186a-fd64-4e59-b686-086bb1a061b5",
        "idCk5Header": "e02423f2-9663-4614-ac13-9324a28f45b4",
        "tarifCukai": 746,
        "hje": 0,
        "idMerk": "3d138df7-afcc-4f9d-88ba-b8bbe5a5a57c",
        "namaMerk": "Kretek25/06",
        "isiPerKemasan": 1,
        "jenisKoli": "0",
        "jumlahBarangLhpAsal": null,
        "jumlahBarangLhpTujuan": null,
        "seri": 0,
        "jumlahBarang": 1232,
        "uraianJenisBarang": "SKM - II; Kretek25/06; Isi 1 btg",
        "jenisSatuanBarang": "btg",
        "keterangan": "-",
        "jumlahKemasan": 1232,
        "jumlahCukai": 0,
        "nilaiTransaksi": null,
        "flagTransaksi": null,
        "namaJenisKemasan": "Bungkus",
        "idJenisKemasan": 11
      },
      {
        "idCk5Detail": "087e38cb-f3b9-42ba-bb89-302e04249df2",
        "idCk5Header": "e02423f2-9663-4614-ac13-9324a28f45b4",
        "tarifCukai": 0,
        "hje": 0,
        "idMerk": "268673fb-ff90-4760-8d34-02d97fc2d082",
        "namaMerk": "Kretek",
        "isiPerKemasan": 12,
        "jenisKoli": "0",
        "jumlahBarangLhpAsal": null,
        "jumlahBarangLhpTujuan": null,
        "seri": 0,
        "jumlahBarang": 132,
        "uraianJenisBarang": "SPM - II; Kretek; Isi 12 btg",
        "jenisSatuanBarang": "btg",
        "keterangan": "TEST",
        "jumlahKemasan": 11,
        "jumlahCukai": 0,
        "nilaiTransaksi": null,
        "flagTransaksi": null,
        "namaJenisKemasan": "Pack",
        "idJenisKemasan": 9
      },
      {
        "idCk5Detail": "d69a897c-15dd-416a-9745-3ffa0df9911a",
        "idCk5Header": "e02423f2-9663-4614-ac13-9324a28f45b4",
        "tarifCukai": 0,
        "hje": 0,
        "idMerk": "0b5601ca-fb01-4bc9-a93e-a4d0cb73c3ad",
        "namaMerk": "garam jaya",
        "isiPerKemasan": 1,
        "jenisKoli": "0",
        "jumlahBarangLhpAsal": null,
        "jumlahBarangLhpTujuan": null,
        "seri": 0,
        "jumlahBarang": 11,
        "uraianJenisBarang": "SKM - II; garam jaya; Isi 1 btg",
        "jenisSatuanBarang": "btg",
        "keterangan": "TEST",
        "jumlahKemasan": 11,
        "jumlahCukai": 0,
        "nilaiTransaksi": null,
        "flagTransaksi": null,
        "namaJenisKemasan": "Bungkus",
        "idJenisKemasan": 11
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