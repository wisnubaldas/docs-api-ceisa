# Rekam Draft CK-5

### Introduction

  * Purpose: API ini digunakan untuk rekam draft CK-5

  * Overview: Proses rekam draft CK-5 mensyaratkan 2 object data dalam bentuk form yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck5/rekam-draft`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Endpoint ini menerima parameter berikut dalam form data:` | Header Section |
| `Parameter Name` | `Type` | Description |
| `Example Value` | `idJenisPemberitahuan` | Integer |
| `Identifikasi unik untuk jenis pemberitahuan.` | `21` | idNppbkcAsal |
| `String` | `Identifikasi unik untuk NPPBKC asal` | fe3c9198-1af7-05e6-e054-0021f60abd54 |
| `nppbkcAsal` | `String` | NPPBKC asal |
| `0669986374654000070613` | `caraPelunasan` | String |
| `Metode pelunasan cukai` | `Pelekatan Pita Cukai` | nomorIdentitasAsal |
| `String` | `Nomor identitas dari asal` | 0669986374654000070613 |
| `idJenisBkc` | `Integer` | Identifikasi unik untuk jenis barang kena cukai (BKC). |
| `3` | `kantorAju` | String |
| `Nama kantor yang mengajukan pemberitahuan.` | `KPPBC TMC MALANG` | kodeKantor |
| `String` | `Kode dari kantor` | 70600 |
| `nomorAju` | `String` | Nomor pengajuan |
| `32` | `tanggalAju` | Date |
| `Tanggal pengajuan` | `2024-08-15` | tanggalCk5 |
| `Date` | `Tanggal CK-5` | 2024-08-15 |
| `namaJenisBkc` | `String` | Nama jenis barang kena cukai |
| `HT` | `flagImpor` | String |
| `Indikator apakah barang impor atau bukan (Y untuk ya, N untuk tidak).` | `N` | idCaraPelunasan |
| `Integer` | `Identifikasi unik untuk cara pelunasan cukai` | 2 |
| `statusCukai` | `String` | Status pelunasan cukai |
| `Belum Dilunasi` | `idStatusCukai` | Integer |
| `Identifikasi unik untuk status pelunasan cukai` | `1` | jenisPemberitahuan |
| `String` | `Jenis pemberitahuan terkait barang kena cukai.` | 2.1. Tidak Dipungut - Diekspor |
| `statusAsal` | `String` | Status asal barang |
| `Pabrik` | `kodeKantorAsal` | String |
| `Kode kantor dari asal` | `70600` | namaKantorAsal |
| `String` | `Nama kantor dari asal` | KPPBC TMC MALANG |
| `idStatusAsal` | `Integer` | Identifikasi unik untuk status asal barang |
| `1` | `jenisIdentitasAsal` | String |
| `Jenis identitas dari asal barang` | `NPPBKC` | idJenisIdentitasAsal |
| `Integer` | `Identifikasi unik untuk jenis identitas dari asal barang` | 1 |
| `namaPerusahaanAsal` | `String` | Nama perusahaan asal |
| `DEMANG JAYA PR` | `alamatPerusahaanAsal` | String |
| `Alamat perusahaan asal` | `Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang` | flagTransaksi |
| `String` | `Indikator apakah transaksi terjadi atau tidak (Y untuk ya, N untuk tidak).` | N |
| `nomorSuratJalan` | `String` | Nomor surat jalan |
| `121` | `tanggalSuratJalan` | Date |
| `Tanggal surat jalan` | `2024-08-15` | namaPemberitahu |
| `String` | `Nama orang yang memberikan pemberitahuan` | Yudyud |
| `nomorIdentitasPemberitahu` | `String` | Nomor identitas orang yang memberikan pemberitahuan |
| `123` | `flagJenisEkspor` | Integer |
| `Indikator jenis ekspor` | `1` | kodeNegaraTujuan |
| `String` | `Kode negara tujuan` | MA |
| `namaNegaraTujuan` | `String` | Nama negara tujuan |
| `MOROCCO` | `kodeKantorMuat` | String |
| `Kode kantor muat` | `11500` | namaKantorMuat |
| `String` | `Nama kantor muat` | KPPBC TELUK BAYUR |
| `Detail Section` | `Parameter Name` | Type |
| `Description` | `Example Value` | details[0].idCk5DetailRincian |
| `String` | `Identifikasi unik untuk detail CK-5.` | 38d0d80c-5762-45de-8cfd-42e7d470a786 |
| `details[0].idMerk` | `String` | Identifikasi unik untuk merk barang. |
| `ce4ef86b-257a-4cc4-b513-b1411913aab3` | `details[0].jumlahKoli` | Integer |
| `Jumlah koli` | `10` | details[0].jenisKoli |
| `String` | `Jenis kemasan besar` | Bulk |
| `details[0].namaMerk` | `String` | Nama merk barang |
| `HOKI BOLD >>> 12 KRETEK FILTER` | `details[0].uraianJenisBarang` | String |
| `Uraian jenis barang` | `SKM; HOKI BOLD >>> 12 KRETEK FILTER; Isi 12 ml` | details[0].tarifCukai |
| `Integer` | `Tarif cukai` | 139000 |
| `details[0].isiPerKemasan` | `Integer` | Isi per kemasan dalam |
| `12` | `details[0].jumlahKemasan` | Integer |
| `Jumlah kemasan` | `19` | details[0].idJenisKemasan |
| `Integer` | `ID jenis kemasan` | 9 |
| `details[0].jumlahBarang` | `Integer` | Jumlah total barang |
| `228` | `details[0].jenisSatuanBarang` | String |
| `Jenis satuan barang` | `ml` | details[0].jumlahCukai |
| `Integer` | `Jumlah total cukai yang harus dibayar` | 31692000 |
| `details[0].namaJenisKemasan` | `String` | Nama jenis kemasan |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam Draft CK-5",
  "properties": {
    "idJenisPemberitahuan": {
      "type": "string",
      "description": "ID jenis pemberitahuan"
    },
    "idNppbkcAsal": {
      "type": "string",
      "format": "uuid",
      "description": "ID NPPBKC asal"
    },
    "nppbkcAsal": {
      "type": "string",
      "description": "Nomor NPPBKC asal"
    },
    "caraPelunasan": {
      "type": "string",
      "description": "Cara pelunasan"
    },
    "nomorIdentitasAsal": {
      "type": "string",
      "description": "Nomor identitas asal"
    },
    "idJenisBkc": {
      "type": "string",
      "description": "ID jenis BKC"
    },
    "kantorAju": {
      "type": "string",
      "description": "Nama kantor pengajuan"
    },
    "kodeKantor": {
      "type": "string",
      "description": "Kode kantor pengajuan"
    },
    "nomorAju": {
      "type": "string",
      "description": "Nomor pengajuan"
    },
    "tanggalAju": {
      "type": "string",
      "format": "date",
      "description": "Tanggal pengajuan"
    },
    "tanggalCk5": {
      "type": "string",
      "format": "date",
      "description": "Tanggal CK5"
    },
    "namaJenisBkc": {
      "type": "string",
      "description": "Nama jenis BKC"
    },
    "flagImpor": {
      "type": "string",
      "description": "Flag impor"
    },
    "idCaraPelunasan": {
      "type": "string",
      "description": "ID cara pelunasan"
    },
    "statusCukai": {
      "type": "string",
      "description": "Status cukai"
    },
    "idStatusCukai": {
      "type": "string",
      "description": "ID status cukai"
    },
    "jenisPemberitahuan": {
      "type": "string",
      "description": "Jenis pemberitahuan"
    },
    "statusAsal": {
      "type": "string",
      "description": "Status asal"
    },
    "kodeKantorAsal": {
      "type": "string",
      "description": "Kode kantor asal"
    },
    "namaKantorAsal": {
      "type": "string",
      "description": "Nama kantor asal"
    },
    "idStatusAsal": {
      "type": "string",
      "description": "ID status asal"
    },
    "jenisIdentitasAsal": {
      "type": "string",
      "description": "Jenis identitas asal"
    },
    "idJenisIdentitasAsal": {
      "type": "string",
      "description": "ID jenis identitas asal"
    },
    "namaPerusahaanAsal": {
      "type": "string",
      "description": "Nama perusahaan asal"
    },
    "alamatPerusahaanAsal": {
      "type": "string",
      "description": "Alamat perusahaan asal"
    },
    "flagTransaksi": {
      "type": "string",
      "description": "Flag transaksi"
    },
    "nomorSuratJalan": {
      "type": "string",
      "description": "Nomor surat jalan"
    },
    "tanggalSuratJalan": {
      "type": "string",
      "format": "date",
      "description": "Tanggal surat jalan"
    },
    "namaPemberitahu": {
      "type": "string",
      "description": "Nama pemberitahu"
    },
    "nomorIdentitasPemberitahu": {
      "type": "string",
      "description": "Nomor identitas pemberitahu"
    },
    "flagJenisEkspor": {
      "type": "string",
      "description": "Flag jenis ekspor"
    },
    "kodeNegaraTujuan": {
      "type": "string",
      "description": "Kode negara tujuan"
    },
    "namaNegaraTujuan": {
      "type": "string",
      "description": "Nama negara tujuan"
    },
    "kodeKantorMuat": {
      "type": "string",
      "description": "Kode kantor muat"
    },
    "namaKantorMuat": {
      "type": "string",
      "description": "Nama kantor muat"
    },
    "details": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "idCk5DetailRincian": {
            "type": "string",
            "format": "uuid",
            "description": "ID rincian CK5"
          },
          "idMerk": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk"
          },
          "jumlahKoli": {
            "type": "integer",
            "description": "Jumlah koli"
          },
          "jenisKoli": {
            "type": "string",
            "description": "Jenis koli"
          },
          "namaMerk": {
            "type": "string",
            "description": "Nama merk"
          },
          "uraianJenisBarang": {
            "type": "string",
            "description": "Uraian jenis barang"
          },
          "tarifCukai": {
            "type": "integer",
            "description": "Tarif cukai"
          },
          "isiPerKemasan": {
            "type": "integer",
            "description": "Isi per kemasan"
          },
          "jumlahKemasan": {
            "type": "integer",
            "description": "Jumlah kemasan"
          },
          "idJenisKemasan": {
            "type": "integer",
            "description": "ID jenis kemasan"
          },
          "jumlahBarang": {
            "type": "integer",
            "description": "Jumlah barang"
          },
          "jenisSatuanBarang": {
            "type": "string",
            "description": "Jenis satuan barang"
          },
          "jumlahCukai": {
            "type": "integer",
            "description": "Jumlah cukai"
          },
          "namaJenisKemasan": {
            "type": "string",
            "description": "Nama jenis kemasan"
          }
        },
        "required": [
          "idCk5DetailRincian", 
          "idMerk", 
          "jumlahKoli", 
          "jenisKoli", 
          "namaMerk", 
          "uraianJenisBarang", 
          "tarifCukai", 
          "isiPerKemasan", 
          "jumlahKemasan", 
          "idJenisKemasan", 
          "jumlahBarang", 
          "jenisSatuanBarang", 
          "jumlahCukai", 
          "namaJenisKemasan"
        ]
      }
    }
  },
  "required": [
    "idJenisPemberitahuan", 
    "idNppbkcAsal", 
    "nppbkcAsal", 
    "caraPelunasan", 
    "nomorIdentitasAsal", 
    "idJenisBkc", 
    "kantorAju", 
    "kodeKantor", 
    "nomorAju", 
    "tanggalAju", 
    "tanggalCk5", 
    "namaJenisBkc", 
    "flagImpor", 
    "idCaraPelunasan", 
    "statusCukai", 
    "idStatusCukai", 
    "jenisPemberitahuan", 
    "statusAsal", 
    "kodeKantorAsal", 
    "namaKantorAsal", 
    "idStatusAsal", 
    "jenisIdentitasAsal", 
    "idJenisIdentitasAsal", 
    "namaPerusahaanAsal", 
    "alamatPerusahaanAsal", 
    "flagTransaksi", 
    "nomorSuratJalan", 
    "tanggalSuratJalan", 
    "namaPemberitahu", 
    "nomorIdentitasPemberitahu", 
    "flagJenisEkspor", 
    "kodeNegaraTujuan", 
    "namaNegaraTujuan", 
    "kodeKantorMuat", 
    "namaKantorMuat", 
    "details"
  ]
}

Example Request : Rekam Draft CK-5

--boundary
Content-Disposition: form-data; name="idJenisPemberitahuan"

21
--boundary
Content-Disposition: form-data; name="idNppbkcAsal"

fe3c9198-1af7-05e6-e054-0021f60abd54
--boundary
Content-Disposition: form-data; name="nppbkcAsal"

0669986374654000070613
--boundary
Content-Disposition: form-data; name="caraPelunasan"

Pelekatan Pita Cukai
--boundary
Content-Disposition: form-data; name="nomorIdentitasAsal"

0669986374654000070613
--boundary
Content-Disposition: form-data; name="idJenisBkc"

3
--boundary
Content-Disposition: form-data; name="kantorAju"

KPPBC TMC MALANG
--boundary
Content-Disposition: form-data; name="kodeKantor"

070600
--boundary
Content-Disposition: form-data; name="nomorAju"

32
--boundary
Content-Disposition: form-data; name="tanggalAju"

2024-08-15
--boundary
Content-Disposition: form-data; name="tanggalCk5"

2024-08-15
--boundary
Content-Disposition: form-data; name="namaJenisBkc"

HT
--boundary
Content-Disposition: form-data; name="flagImpor"

N
--boundary
Content-Disposition: form-data; name="idCaraPelunasan"

2
--boundary
Content-Disposition: form-data; name="statusCukai"

Belum Dilunasi
--boundary
Content-Disposition: form-data; name="idStatusCukai"

1
--boundary
Content-Disposition: form-data; name="jenisPemberitahuan"

2.1. Tidak Dipungut - Diekspor
--boundary
Content-Disposition: form-data; name="statusAsal"

Pabrik
--boundary
Content-Disposition: form-data; name="kodeKantorAsal"

070600
--boundary
Content-Disposition: form-data; name="namaKantorAsal"

KPPBC TMC MALANG
--boundary
Content-Disposition: form-data; name="idStatusAsal"

1
--boundary
Content-Disposition: form-data; name="jenisIdentitasAsal"

NPPBKC
--boundary
Content-Disposition: form-data; name="idJenisIdentitasAsal"

1
--boundary
Content-Disposition: form-data; name="namaPerusahaanAsal"

DEMANG JAYA PR
--boundary
Content-Disposition: form-data; name="alamatPerusahaanAsal"

Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang
--boundary
Content-Disposition: form-data; name="flagTransaksi"

N
--boundary
Content-Disposition: form-data; name="nomorSuratJalan"

121
--boundary
Content-Disposition: form-data; name="tanggalSuratJalan"

2024-08-15
--boundary
Content-Disposition: form-data; name="namaPemberitahu"

Yudyud
--boundary
Content-Disposition: form-data; name="nomorIdentitasPemberitahu"

123
--boundary
Content-Disposition: form-data; name="flagJenisEkspor"

1
--boundary
Content-Disposition: form-data; name="kodeNegaraTujuan"

MA
--boundary
Content-Disposition: form-data; name="namaNegaraTujuan"

MOROCCO
--boundary
Content-Disposition: form-data; name="kodeKantorMuat"

011500
--boundary
Content-Disposition: form-data; name="namaKantorMuat"

KPPBC TELUK BAYUR
--boundary
Content-Disposition: form-data; name="details[0].idCk5DetailRincian"

38d0d80c-5762-45de-8cfd-42e7d470a786
--boundary
Content-Disposition: form-data; name="details[0].idMerk"

ce4ef86b-257a-4cc4-b513-b1411913aab3
--boundary
Content-Disposition: form-data; name="details[0].jumlahKoli"

10
--boundary
Content-Disposition: form-data; name="details[0].jenisKoli"

Bulk
--boundary
Content-Disposition: form-data; name="details[0].namaMerk"

HOKI BOLD >>> 12 KRETEK FILTER
--boundary
Content-Disposition: form-data; name="details[0].uraianJenisBarang"

SKM; HOKI BOLD >>> 12 KRETEK FILTER; Isi 12 ml
--boundary
Content-Disposition: form-data; name="details[0].tarifCukai"

139000
--boundary
Content-Disposition: form-data; name="details[0].isiPerKemasan"

12
--boundary
Content-Disposition: form-data; name="details[0].jumlahKemasan"

19
--boundary
Content-Disposition: form-data; name="details[0].idJenisKemasan"

9
--boundary
Content-Disposition: form-data; name="details[0].jumlahBarang"

228
--boundary
Content-Disposition: form-data; name="details[0].jenisSatuanBarang"

ml
--boundary
Content-Disposition: form-data; name="details[0].jumlahCukai"

31692000
--boundary
Content-Disposition: form-data; name="details[0].namaJenisKemasan"

Pack
--boundary

Validation Rules

Field

Rules

idNppbkcAsal

Harus merupakan UUID yang valid.

tanggalAju

Harus dalam format YYYY-MM-DD

tanggalCk5

Harus dalam format YYYY-MM-DD

tanggalSuratJalan

Harus dalam format YYYY-MM-DD

details[0].idCk5DetailRincian

Harus merupakan UUID yang valid.

details[0].idMerk

Harus merupakan UUID yang valid.

details[0].jumlahKoli

Harus berupa angka positif

details[0].tarifCukai

Harus berupa angka positif

details[0].isiPerKemasan

Harus berupa angka positif

details[0].jumlahKemasan

Harus berupa angka positif

details[0].idJenisKemasan

Harus berupa angka positif

details[0].jumlahBarang

Harus berupa angka positif

details[0].jumlahCukai

Harus berupa angka positif
```

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": {
        "idCk5Header": "7abbe8bf-0127-40b0-ad6f-12def91a8b90",
        "namaJenisBkc": "HT",
        "jenisPemberitahuan": "2.1. Tidak Dipungut - Diekspor",
        "flagImpor": "N",
        "caraPelunasan": "Pelekatan Pita Cukai",
        "statusCukai": "Belum Dilunasi",
        "kodeKantorAju": null,
        "npwpPerusahaanAsal": null,
        "namaPerusahaanAsal": "DEMANG JAYA PR",
        "alamatPerusahaanAsal": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
        "nomorIdentitasAsal": "0669986374654000070613",
        "jenisIdentitasAsal": "NPPBKC",
        "kodeKantorAsal": "070600",
        "namaKantorAsal": "KPPBC TMC MALANG",
        "nomorIdentitasTujuan": null,
        "namaKantorTujuan": null,
        "idJenisIdentitasTujuan": null,
        "jenisIdentitasTujuan": null,
        "alamatTujuan": null,
        "kodeKantorTujuan": null,
        "nomorSkepFasilitas": null,
        "tanggalSkepFasilitas": null,
        "nomorInvoice": null,
        "tanggalInvoice": null,
        "caraAngkut": null,
        "jumlahKemasan": null,
        "idJenisIdentitasPenimbun": null,
        "nomorIdentitasPenimbunan": null,
        "idJenisKemasan": null,
        "jangkaWaktuMohon": null,
        "namaPenimbunan": null,
        "alamatPenimbunan": null,
        "namaPemberitahu": "Yudyud",
        "alamatPemberitahu": null,
        "kodeKantorPenimbunan": null,
        "namaKantorPenimbunan": null,
        "nomorAju": "32",
        "nomorCk5": null,
        "namaTujuan": null,
        "namaJenisKemasan": null,
        "tanggalAju": "2024-08-15",
        "tanggalCk5": "2024-08-15",
        "kodeNegaraTujuan": "MA",
        "namaNegaraTujuan": "MOROCCO",
        "namaKantorMuat": "KPPBC TELUK BAYUR",
        "nomorIdentitasPemberitahu": "123",
        "pelabuhanMuat": null,
        "kodeKantorMuat": "011500",
        "jenisIdentitasPenimbun": null,
        "idJenisPemberitahuan": 21,
        "nomorPeb": null,
        "tanggalPeb": null,
        "idCaraAngkut": null,
        "idStatusCukai": 1,
        "idCaraPelunasan": 2,
        "idJenisBkc": 3,
        "kodeKantorSinggah": null,
        "namaKantorSinggah": null,
        "pelabuhanSinggah": null,
        "idJenisIdentitasAsal": 1,
        "nppbkcAsal": "0669986374654000070613",
        "idNppbkcAsal": "fe3c9198-1af7-05e6-e054-0021f60abd54",
        "idNppbkcTujuan": null,
        "flagTransaksi": "N",
        "nilaiTransaksi": null,
        "nomorSuratJalan": "121",
        "tanggalSuratJalan": "2024-08-15",
        "idStatusAsal": 1,
        "statusAsal": "Pabrik",
        "idStatusTujuan": null,
        "statusTujuan": null,
        "kategori": null,
        "flagJenisEkspor": "1",
        "lainnya": null,
        "tanggalLainnya": null,
        "periodeBulan": null,
        "periodeTahun": null,
        "tanggalPengeluaranAwal": null,
        "tanggalPengeluaranAkhir": null,
        "details": [
            {
                "idCk5Detail": "0959d5a3-e8e4-46b5-9601-3c593b5a832e",
                "noKoli": null,
                "jumlahKoli": 10,
                "jenisKoli": "Bulk",
                "idMerk": "ce4ef86b-257a-4cc4-b513-b1411913aab3",
                "namaMerk": "HOKI BOLD >>> 12 KRETEK FILTER",
                "isiPerKemasan": 12,
                "hje": null,
                "tarifCukai": 139000,
                "uraianJenisBarang": "SKM; HOKI BOLD >>> 12 KRETEK FILTER; Isi 12 ml",
                "jumlahKemasan": 19,
                "jumlahBarang": 228,
                "jumlahCukai": 31692000,
                "jumlahDevisa": null,
                "flagTransaksi": null,
                "keterangan": null,
                "seri": null,
                "jenisSatuanBarang": "ml",
                "nilaiTransaksi": null,
                "tahunPita": null,
                "idJenisKemasan": 9,
                "namaJenisKemasan": "Pack"
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