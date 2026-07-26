# Rekam Pencarian CK-5

### Introduction

  * Purpose: API ini digunakan untuk rekam pencarian CK-5

  * Overview: Proses rekam pencarian CK-5 mensyaratkan 2 object data dalam bentuk form yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck5/rekam-pencarian`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Endpoint ini menerima parameter berikut dalam form data:` | Header Section |
| `Parameter Name` | `Type` | Description |
| `Example Value` | `idJenisPemberitahuan` | Integer |
| `Identifikasi unik untuk jenis pemberitahuan` | `21` | idNppbkcAsal |
| `UUID` | `Identifikasi unik untuk NPPBKC asal` | fe3c9198-1af7-05e6-e054-0021f60abd54 |
| `nppbkcAsal` | `String` | NPPBKC asal |
| `0669986374654000070613` | `caraPelunasan` | String |
| `Cara pelunasan cukai` | `Pelekatan Pita Cukai` | nomorIdentitasAsal |
| `String` | `Nomor identitas asal` | 0669986374654000070613 |
| `idJenisBkc` | `Integer` | Identifikasi unik untuk jenis barang kena cukai (BKC) |
| `3` | `kantorAju` | String |
| `Kantor tempat pengajuan CK-5` | `KPPBC TMC MALANG` | kodeKantor |
| `String` | `Kode kantor` | 70600 |
| `nomorAju` | `String` | Nomor pengajuan CK-5 |
| `32` | `tanggalAju` | Date |
| `Tanggal pengajuan CK-5` | `2024-08-15` | tanggalCk5 |
| `Date` | `Tanggal CK-5` | 2024-08-15 |
| `namaJenisBkc` | `String` | Nama jenis barang kena cukai (BKC) |
| `HT` | `flagImpor` | String |
| `Status impor (Y/N)` | `N` | idCaraPelunasan |
| `Integer` | `Identifikasi unik untuk cara pelunasan cukai` | 2 |
| `statusCukai` | `String` | Status pembayaran cukai |
| `Belum Dilunasi` | `idStatusCukai` | Integer |
| `Identifikasi unik untukstatus cukai` | `1` | jenisPemberitahuan |
| `String` | `Jenis pemberitahuan` | 2.1. Tidak Dipungut - Diekspor |
| `statusAsal` | `String` | Status asal barang |
| `Pabrik` | `kodeKantorAsal` | String |
| `Kode kantor asal barang` | `70600` | namaKantorAsal |
| `String` | `Nama kantor asal barang` | KPPBC TMC MALANG |
| `idStatusAsal` | `Integer` | Identifikasi unik untukstatus asal barang |
| `1` | `jenisIdentitasAsal` | String |
| `Jenis identitas asal barang` | `NPPBKC` | idJenisIdentitasAsal |
| `Integer` | `Identifikasi unik untukjenis identitas asal` | 1 |
| `namaPerusahaanAsal` | `String` | Nama perusahaan asal |
| `DEMANG JAYA PR` | `alamatPerusahaanAsal` | String |
| `Alamat perusahaan asal` | `Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang` | flagTransaksi |
| `String` | `Status transaksi (Y/N)` | N |
| `nomorSuratJalan` | `String` | Nomor surat jalan |
| `121` | `tanggalSuratJalan` | Date |
| `Tanggal surat jalan` | `2024-08-15` | namaPemberitahu |
| `String` | `Nama pemberitahu` | Yudyud |
| `nomorIdentitasPemberitahu` | `String` | Nomor identitas pemberitahu |
| `123` | `flagJenisEkspor` | Integer |
| `Status jenis ekspor` | `1` | kodeNegaraTujuan |
| `String` | `Kode negara tujuan` | MA |
| `namaNegaraTujuan` | `String` | Nama negara tujuan |
| `MOROCCO` | `kodeKantorMuat` | String |
| `Kode kantor pemuatan` | `11500` | namaKantorMuat |
| `String` | `Nama kantor pemuatan` | KPPBC TELUK BAYUR |
| `Detail Section` | `Parameter Name` | Type |
| `Description` | `Example Value` | details[0].idCk5DetailRincian |
| `UUID` | `Identifikasi unik untuk rincian CK-5` | 38d0d80c-5762-45de-8cfd-42e7d470a786 |
| `details[0].idMerk` | `UUID` | Identifikasi unik untukmerek barang |
| `ce4ef86b-257a-4cc4-b513-b1411913aab3` | `details[0].jumlahKoli` | Integer |
| `Jumlah koli` | `10` | details[0].jenisKoli |
| `String` | `Jenis koli` | Bulk |
| `details[0].namaMerk` | `String` | Nama merek barang |
| `HOKI BOLD >>> 12 KRETEK FILTER` | `details[0].uraianJenisBarang` | String |
| `Uraian jenis barang` | `SKM; HOKI BOLD >>> 12 KRETEK FILTER; Isi 12 ml` | details[0].tarifCukai |
| `Integer` | `Tarif cukai` | 139000 |
| `details[0].isiPerKemasan` | `Integer` | Isi per kemasan dalam satuan volume |
| `12` | `details[0].jumlahKemasan` | Integer |
| `Jumlah kemasan` | `19` | details[0].idJenisKemasan |
| `Integer` | `Identifikasi unik untukjenis kemasan` | 9 |
| `details[0].jumlahBarang` | `Integer` | Jumlah barang dalam satuan volume |
| `228` | `details[0].jenisSatuanBarang` | String |
| `Jenis satuan barang (misalnya ml, liter)` | `ml` | details[0].jumlahCukai |
| `Integer` | `Jumlah total cukai yang harus dibayar` | 31692000 |
| `details[0].namaJenisKemasan` | `String` | Nama jenis kemasan |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam Pencarian CK-5",
  "properties": {
    "idJenisPemberitahuan": {
      "type": "integer",
      "description": "ID jenis pemberitahuan."
    },
    "idNppbkcAsal": {
      "type": "string",
      "format": "uuid",
      "description": "ID NPPBKC asal, berupa UUID."
    },
    "nppbkcAsal": {
      "type": "string",
      "description": "NPPBKC asal."
    },
    "caraPelunasan": {
      "type": "string",
      "description": "Cara pelunasan."
    },
    "nomorIdentitasAsal": {
      "type": "string",
      "description": "Nomor identitas asal."
    },
    "idJenisBkc": {
      "type": "integer",
      "description": "ID jenis BKC."
    },
    "kantorAju": {
      "type": "string",
      "description": "Nama kantor aju."
    },
    "kodeKantor": {
      "type": "string",
      "description": "Kode kantor."
    },
    "nomorAju": {
      "type": "string",
      "description": "Nomor aju."
    },
    "tanggalAju": {
      "type": "string",
      "format": "date",
      "description": "Tanggal aju, dalam format YYYY-MM-DD."
    },
    "tanggalCk5": {
      "type": "string",
      "format": "date",
      "description": "Tanggal CK5, dalam format YYYY-MM-DD."
    },
    "namaJenisBkc": {
      "type": "string",
      "description": "Nama jenis BKC."
    },
    "flagImpor": {
      "type": "string",
      "description": "Flag impor."
    },
    "idCaraPelunasan": {
      "type": "integer",
      "description": "ID cara pelunasan."
    },
    "statusCukai": {
      "type": "string",
      "description": "Status cukai."
    },
    "idStatusCukai": {
      "type": "integer",
      "description": "ID status cukai."
    },
    "jenisPemberitahuan": {
      "type": "string",
      "description": "Jenis pemberitahuan."
    },
    "statusAsal": {
      "type": "string",
      "description": "Status asal."
    },
    "kodeKantorAsal": {
      "type": "string",
      "description": "Kode kantor asal."
    },
    "namaKantorAsal": {
      "type": "string",
      "description": "Nama kantor asal."
    },
    "idStatusAsal": {
      "type": "integer",
      "description": "ID status asal."
    },
    "jenisIdentitasAsal": {
      "type": "string",
      "description": "Jenis identitas asal."
    },
    "idJenisIdentitasAsal": {
      "type": "integer",
      "description": "ID jenis identitas asal."
    },
    "namaPerusahaanAsal": {
      "type": "string",
      "description": "Nama perusahaan asal."
    },
    "alamatPerusahaanAsal": {
      "type": "string",
      "description": "Alamat perusahaan asal."
    },
    "flagTransaksi": {
      "type": "string",
      "description": "Flag transaksi."
    },
    "nomorSuratJalan": {
      "type": "string",
      "description": "Nomor surat jalan."
    },
    "tanggalSuratJalan": {
      "type": "string",
      "format": "date",
      "description": "Tanggal surat jalan, dalam format YYYY-MM-DD."
    },
    "namaPemberitahu": {
      "type": "string",
      "description": "Nama pemberitahu."
    },
    "nomorIdentitasPemberitahu": {
      "type": "string",
      "description": "Nomor identitas pemberitahu."
    },
    "flagJenisEkspor": {
      "type": "string",
      "description": "Flag jenis ekspor."
    },
    "kodeNegaraTujuan": {
      "type": "string",
      "description": "Kode negara tujuan."
    },
    "namaNegaraTujuan": {
      "type": "string",
      "description": "Nama negara tujuan."
    },
    "kodeKantorMuat": {
      "type": "string",
      "description": "Kode kantor muat."
    },
    "namaKantorMuat": {
      "type": "string",
      "description": "Nama kantor muat."
    },
    "details": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "idCk5DetailRincian": {
            "type": "string",
            "format": "uuid",
            "description": "ID CK5 Detail Rincian, berupa UUID."
          },
          "idMerk": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk, berupa UUID."
          },
          "jumlahKoli": {
            "type": "integer",
            "description": "Jumlah koli."
          },
          "jenisKoli": {
            "type": "string",
            "description": "Jenis koli."
          },
          "namaMerk": {
            "type": "string",
            "description": "Nama merk."
          },
          "uraianJenisBarang": {
            "type": "string",
            "description": "Uraian jenis barang."
          },
          "tarifCukai": {
            "type": "integer",
            "description": "Tarif cukai."
          },
          "isiPerKemasan": {
            "type": "integer",
            "description": "Isi per kemasan."
          },
          "jumlahKemasan": {
            "type": "integer",
            "description": "Jumlah kemasan."
          },
          "idJenisKemasan": {
            "type": "integer",
            "description": "ID jenis kemasan."
          },
          "jumlahBarang": {
            "type": "integer",
            "description": "Jumlah barang."
          },
          "jenisSatuanBarang": {
            "type": "string",
            "description": "Jenis satuan barang."
          },
          "jumlahCukai": {
            "type": "integer",
            "description": "Jumlah cukai."
          },
          "namaJenisKemasan": {
            "type": "string",
            "description": "Nama jenis kemasan."
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

Example Request : Rekam Pencarian CK-5

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
--boundary--

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
        "idCk5Header": "98f764cd-d74c-4caf-8623-88f4e3261976",
        "caraPelunasan": "Pelekatan Pita Cukai",
        "kodeKantor": "070600",
        "namaJenisBkc": "HT",
        "statusCukai": "Belum Dilunasi",
        "flagImpor": "N",
        "jenisPemberitahuan": "2.1. Tidak Dipungut - Diekspor",
        "npwpPerusahaanAsal": null,
        "jenisIdentitasAsal": "NPPBKC",
        "namaPerusahaanAsal": "DEMANG JAYA PR",
        "nomorIdentitasAsal": "0669986374654000070613",
        "idJenisIdentitasAsal": 1,
        "alamatPerusahaanAsal": "Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang",
        "namaKantorAsal": "KPPBC TMC MALANG",
        "kodeKantorAsal": "070600",
        "idJenisIdentitasTujuan": null,
        "nomorIdentitasTujuan": null,
        "jenisIdentitasTujuan": null,
        "namaKantorTujuan": null,
        "kodeKantorTujuan": null,
        "alamatTujuan": null,
        "nomorInvoice": null,
        "tanggalInvoice": null,
        "caraAngkut": null,
        "jangkaWaktuMohon": null,
        "nomorSkepFasilitas": null,
        "tanggalSkepFasilitas": null,
        "idJenisIdentitasPenimbun": null,
        "nomorIdentitasPenimbunan": null,
        "kodeKantorPenimbunan": null,
        "namaPenimbunan": null,
        "alamatPenimbunan": null,
        "namaKantorPenimbunan": null,
        "namaPemberitahu": "Yudyud",
        "nomorCk5": null,
        "alamatPemberitahu": null,
        "nomorAju": "32",
        "tanggalAju": "2024-08-15",
        "kodeNegaraTujuan": "MA",
        "tanggalCk5": "2024-08-15",
        "namaTujuan": null,
        "namaNegaraTujuan": "MOROCCO",
        "pelabuhanMuat": null,
        "jenisIdentitasPenimbun": null,
        "kodeKantorMuat": "011500",
        "namaKantorMuat": "KPPBC TELUK BAYUR",
        "nomorIdentitasPemberitahu": "123",
        "idJenisPemberitahuan": 21,
        "idCaraAngkut": null,
        "tanggalPeb": null,
        "idCaraPelunasan": 2,
        "idStatusCukai": 1,
        "nomorPeb": null,
        "idJenisBkc": 3,
        "pelabuhanSinggah": null,
        "nilaiTransaksi": null,
        "kodeKantorSinggah": null,
        "namaKantorSinggah": null,
        "flagJenisEkspor": "1",
        "idStatusAsal": 1,
        "statusTujuan": null,
        "nomorSuratJalan": "121",
        "statusAsal": "Pabrik",
        "idStatusTujuan": null,
        "flagTransaksi": "N",
        "idNppbkcAsal": "fe3c9198-1af7-05e6-e054-0021f60abd54",
        "nppbkcAsal": "0669986374654000070613",
        "tanggalSuratJalan": "2024-08-15",
        "komentar": null,
        "idNppbkcTujuan": null,
        "lainnya": null,
        "tanggalPengeluaranAwal": null,
        "periodeBulan": null,
        "periodeTahun": null,
        "tanggalPengeluaranAkhir": null,
        "idOrderOnline": null,
        "details": [
            {
                "idCk5Detail": null,
                "jumlahKoli": 10,
                "jenisKoli": "Bulk",
                "idMerk": "ce4ef86b-257a-4cc4-b513-b1411913aab3",
                "namaMerk": "HOKI BOLD >>> 12 KRETEK FILTER",
                "tarifCukai": 139000,
                "uraianJenisBarang": "SKM; HOKI BOLD >>> 12 KRETEK FILTER; Isi 12 ml",
                "jumlahKemasan": 19,
                "jumlahBarang": 228,
                "jumlahCukai": 31692000,
                "flagTransaksi": null,
                "keterangan": null,
                "seri": null,
                "jenisSatuanBarang": "ml",
                "nilaiTransaksi": null,
                "tahunPita": null,
                "idJenisKemasan": 9,
                "namaJenisKemasan": "Pack",
                "isiPerKemasan": 12
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