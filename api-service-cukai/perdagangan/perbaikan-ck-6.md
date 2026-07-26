# Perbaikan CK-6

### Introduction

  * Purpose: API ini digunakan untuk perbaikan data CK-6

  * Overview: Proses perbaikan CK-6 mensyaratkan 2 object data dalam bentuk form yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck6/perbaikan`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Endpoint ini menerima parameter berikut dalam form data:` | Header Section |
| `Parameter Name` | `Type` | Description |
| `Example Value` | `idCk6Header` | String |
| `Identifikasi unik untuk CK6 Header` | `eeb568b2-24ec-40e8-8b25-848cd786378f` | nomorAju |
| `String` | `Nomor pengajuan` | asaas |
| `tanggalAju` | `Date` | Tanggal pengajuan |
| `2024-08-20` | `flagImpor` | String |
| `Indikator impor` | `Y` | idCaraPelunasan |
| `NaN (null)` | `ID dari cara pelunasan` | NaN |
| `idStatusCukai` | `Integer` | ID status cukai |
| `2` | `statusCukai` | String |
| `Status cukai` | `Sudah Dilunasi` | idJenisIdentitasPemasok |
| `Integer` | `ID jenis identitas pemasok` | 1 |
| `jenisIdentitasPemasok` | `String` | Jenis identitas pemasok |
| `NPPBKC` | `idStatusPemasok` | Integer |
| `ID status pemasok` | `5` | statusPemasok |
| `String` | `Status pemasok` | Penyalur |
| `nomorIdentitasPemasok` | `String` | Nomor identitas pemasok |
| `0024143463056000150352` | `namaPemasok` | String |
| `Nama perusahaan pemasok` | `MULTI BINTANG INDONESIA NIAGA, PT` | kodeKantorPemasok |
| `String` | `Kode kantor pemasok` | 150300 |
| `namaKantorPemasok` | `String` | Nama kantor pemasok |
| `KPPBC TANGERANG` | `alamatPemasok` | String |
| `Alamat lengkap pemasok` | `JL. MARGA WARTA NO.3, RT.003 RW.03...` | idJenisIdentitasTujuan |
| `Integer` | `ID jenis identitas tujuan` | 1 |
| `jenisIdentitasTujuan` | `String` | Jenis identitas tujuan |
| `NPPBKC` | `idStatusTujuan` | Integer |
| `ID status tujuan` | `5` | statusTujuan |
| `String` | `Status tujuan` | Penyalur |
| `nomorIdentitasTujuan` | `String` | Nomor identitas tujuan |
| `0705844892654000070652` | `namaTujuan` | String |
| `Nama tujuan` | `UD SUMBER MAKMUR` | kodeKantorTujuan |
| `String` | `Kode kantor tujuan` | 70600 |
| `namaKantorTujuan` | `String` | Nama kantor tujuan |
| `KPPBC TMC MALANG` | `alamatTujuan` | String |
| `Alamat tujuan` | `DESA TUMPANGREJO RT. 003 RW. 005` | flagTransaksi |
| `String` | `Indikator transaksi` | N |
| `nilaiTransaksi` | `Integer` | Nilai transaksi dalam rupiah |
| `0` | `tanggalInvoice` | Date |
| `Tanggal invoice` | `2024-08-21` | nomorInvoice |
| `String` | `Nomor invoice` | - |
| `lainnya` | `String` | Informasi lainnya |
| `-` | `rencanaTanggalPengangkutan` | Date |
| `Tanggal rencana pengangkutan` | `2024-08-20` | nomorSuratJalan |
| `String` | `Nomor surat jalan` | 12 |
| `tanggalSuratJalan` | `Date` | Tanggal surat jalan |
| `2024-08-20` | `namaPemberitahu` | String |
| `Nama pemberitahu` | `asa` | noIdentitasPemberitahu |
| `String` | `Nomor identitas pemberitahu` | saa |
| `tanggalPemberitahuan` | `Date` | Tanggal pemberitahuan |
| `2024-08-21` | `alamatPemberitahu` | String |
| `Alamat lengkap pemberitahu` | `saas` | komentar |
| `String` | `Komentar tambahan` | - |
| `dokumenDasarPerbaikan` | `Binary (File)` | Dokumen dasar perbaikan |
| `(binary)` | `nomorPermohonanPerbaikan` | String |
| `Nomor permohonan perbaikan` | `asa` | tanggalPermohonanPerbaikan |
| `DateTime` | `Tanggal permohonan perbaikan` | Wed Aug 21 2024 16:4:1 GMT+0700 |
| `alasanPerbaikan` | `String` | Alasan perbaikan |
| `asa` | `Detail Section` | Parameter Name |
| `Type` | `Description` | Example Value |
| `details[0].idCk6Detail` | `String` | Identifikasi unik untuk mengidentifikasi CK6 Detail |
| `2a865dba-abaa-460f-890d-217385d5ff85` | `details[0].idJenisKoli` | Integer |
| `ID jenis koli` | `5` | details[0].namaJenisKoli |
| `String` | `Nama jenis koli` | Bulk |
| `details[0].jumlahKoli` | `Integer` | Jumlah koli |
| `10` | `details[0].idMerk` | String |
| `Identifikasi unik untuk mengidentifikasi merk` | `69554847-9a8f-43e7-8e20-12e9d87e5f56` | details[0].namaMerk |
| `String` | `Nama merk` | Merek(3) |
| `details[0].satuanBarang` | `String` | Satuan barang |
| `liter` | `details[0].tarifCukai` | Integer |
| `Tarif cukai per satuan barang dalam rupiah` | `8000000` | details[0].uraian |
| `String` | `Uraian barang` | Merek(3); 200 ml; Gol MMEA GOLONGAN A |
| `details[0].jumlahKemasan` | `Integer` | Jumlah kemasan |
| `10` | `details[0].idJenisKemasan` | Integer |
| `ID jenis kemasan` | `2` | details[0].namaJenisKemasan |
| `String` | `Nama jenis kemasan` | Botol |
| `details[0].jumlahBarang` | `Integer` | Jumlah barang |
| `2` | `details[0].jumlahCukai` | Integer |
| `Jumlah cukai dalam rupiah` | `16000000` | details[0].keterangan |
| `String` | `Keterangan tambahan` | 12 |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Perbaikan CK-6",
  "properties": {
    "idCk6Header": {
      "type": "string",
      "format": "uuid",
      "description": "UUID untuk ID CK6 Header."
    },
    "nomorAju": {
      "type": "string",
      "description": "Nomor aju."
    },
    "tanggalAju": {
      "type": "string",
      "format": "date",
      "description": "Tanggal aju dalam format YYYY-MM-DD."
    },
    "flagImpor": {
      "type": "string",
      "description": "Flag impor."
    },
    "idCaraPelunasan": {
      "type": "string",
      "description": "ID cara pelunasan."
    },
    "idStatusCukai": {
      "type": "integer",
      "description": "ID status cukai."
    },
    "statusCukai": {
      "type": "string",
      "description": "Status cukai."
    },
    "idJenisIdentitasPemasok": {
      "type": "integer",
      "description": "ID jenis identitas pemasok."
    },
    "jenisIdentitasPemasok": {
      "type": "string",
      "description": "Jenis identitas pemasok."
    },
    "idStatusPemasok": {
      "type": "integer",
      "description": "ID status pemasok."
    },
    "statusPemasok": {
      "type": "string",
      "description": "Status pemasok."
    },
    "nomorIdentitasPemasok": {
      "type": "string",
      "description": "Nomor identitas pemasok."
    },
    "namaPemasok": {
      "type": "string",
      "description": "Nama pemasok."
    },
    "kodeKantorPemasok": {
      "type": "string",
      "description": "Kode kantor pemasok."
    },
    "namaKantorPemasok": {
      "type": "string",
      "description": "Nama kantor pemasok."
    },
    "alamatPemasok": {
      "type": "string",
      "description": "Alamat pemasok."
    },
    "idJenisIdentitasTujuan": {
      "type": "integer",
      "description": "ID jenis identitas tujuan."
    },
    "jenisIdentitasTujuan": {
      "type": "string",
      "description": "Jenis identitas tujuan."
    },
    "idStatusTujuan": {
      "type": "integer",
      "description": "ID status tujuan."
    },
    "statusTujuan": {
      "type": "string",
      "description": "Status tujuan."
    },
    "nomorIdentitasTujuan": {
      "type": "string",
      "description": "Nomor identitas tujuan."
    },
    "namaTujuan": {
      "type": "string",
      "description": "Nama tujuan."
    },
    "kodeKantorTujuan": {
      "type": "string",
      "description": "Kode kantor tujuan."
    },
    "namaKantorTujuan": {
      "type": "string",
      "description": "Nama kantor tujuan."
    },
    "alamatTujuan": {
      "type": "string",
      "description": "Alamat tujuan."
    },
    "flagTransaksi": {
      "type": "string",
      "description": "Flag transaksi."
    },
    "nilaiTransaksi": {
      "type": "integer",
      "description": "Nilai transaksi."
    },
    "tanggalInvoice": {
      "type": "string",
      "format": "date",
      "description": "Tanggal invoice dalam format YYYY-MM-DD."
    },
    "nomorInvoice": {
      "type": "string",
      "description": "Nomor invoice."
    },
    "lainnya": {
      "type": "string",
      "description": "Informasi lainnya."
    },
    "rencanaTanggalPengangkutan": {
      "type": "string",
      "format": "date",
      "description": "Rencana tanggal pengangkutan dalam format YYYY-MM-DD."
    },
    "nomorSuratJalan": {
      "type": "string",
      "description": "Nomor surat jalan."
    },
    "tanggalSuratJalan": {
      "type": "string",
      "format": "date",
      "description": "Tanggal surat jalan dalam format YYYY-MM-DD."
    },
    "namaPemberitahu": {
      "type": "string",
      "description": "Nama pemberitahu."
    },
    "noIdentitasPemberitahu": {
      "type": "string",
      "description": "Nomor identitas pemberitahu."
    },
    "tanggalPemberitahuan": {
      "type": "string",
      "format": "date",
      "description": "Tanggal pemberitahuan dalam format YYYY-MM-DD."
    },
    "alamatPemberitahu": {
      "type": "string",
      "description": "Alamat pemberitahu."
    },
    "komentar": {
      "type": "string",
      "description": "Komentar tambahan."
    },
    "dokumenDasarPerbaikan": {
      "type": "string",
      "contentEncoding": "base64",
      "description": "Dokumen dasar perbaikan."
    },
    "nomorPermohonanPerbaikan": {
      "type": "string",
      "description": "Nomor permohonan perbaikan."
    },
    "tanggalPermohonanPerbaikan": {
      "type": "string",
      "format": "date-time",
      "description": "Tanggal permohonan perbaikan."
    },
    "alasanPerbaikan": {
      "type": "string",
      "description": "Alasan perbaikan."
    },
    "details": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "idCk6Detail": {
            "type": "string",
            "format": "uuid",
            "description": "ID CK6 Detail."
          },
          "idJenisKoli": {
            "type": "integer",
            "description": "ID jenis koli."
          },
          "namaJenisKoli": {
            "type": "string",
            "description": "Nama jenis koli."
          },
          "jumlahKoli": {
            "type": "integer",
            "description": "Jumlah koli."
          },
          "idMerk": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk."
          },
          "namaMerk": {
            "type": "string",
            "description": "Nama merk."
          },
          "satuanBarang": {
            "type": "string",
            "description": "Satuan barang."
          },
          "tarifCukai": {
            "type": "integer",
            "description": "Tarif cukai."
          },
          "uraian": {
            "type": "string",
            "description": "Uraian detail barang."
          },
          "jumlahKemasan": {
            "type": "integer",
            "description": "Jumlah kemasan."
          },
          "idJenisKemasan": {
            "type": "integer",
            "description": "ID jenis kemasan."
          },
          "namaJenisKemasan": {
            "type": "string",
            "description": "Nama jenis kemasan."
          },
          "jumlahBarang": {
            "type": "integer",
            "description": "Jumlah barang."
          },
          "jumlahCukai": {
            "type": "integer",
            "description": "Jumlah cukai."
          },
          "keterangan": {
            "type": "string",
            "description": "Keterangan tambahan."
          }
        },
        "required": [
          "idCk6Detail",
          "idJenisKoli",
          "namaJenisKoli",
          "jumlahKoli",
          "idMerk",
          "namaMerk",
          "satuanBarang",
          "tarifCukai",
          "uraian",
          "jumlahKemasan",
          "idJenisKemasan",
          "namaJenisKemasan",
          "jumlahBarang",
          "jumlahCukai"
        ]
      }
    }
  },
  "required": [
    "idCk6Header",
    "nomorAju",
    "tanggalAju",
    "flagImpor",
    "idCaraPelunasan",
    "idStatusCukai",
    "statusCukai",
    "idJenisIdentitasPemasok",
    "jenisIdentitasPemasok",
    "idStatusPemasok",
    "statusPemasok",
    "nomorIdentitasPemasok",
    "namaPemasok",
    "kodeKantorPemasok",
    "namaKantorPemasok",
    "alamatPemasok",
    "idJenisIdentitasTujuan",
    "jenisIdentitasTujuan",
    "idStatusTujuan",
    "statusTujuan",
    "nomorIdentitasTujuan",
    "namaTujuan",
    "kodeKantorTujuan",
    "namaKantorTujuan",
    "alamatTujuan",
    "flagTransaksi",
    "nilaiTransaksi",
    "tanggalInvoice",
    "nomorInvoice",
    "rencanaTanggalPengangkutan",
    "nomorSuratJalan",
    "tanggalSuratJalan"
    "namaPemberitahu",
    "noIdentitasPemberitahu",
    "tanggalPemberitahuan",
    "alamatPemberitahu"
    "dokumenDasarPerbaikan",
    "nomorPermohonanPerbaikan",
    "tanggalPermohonanPerbaikan"
    ]
  }
}

Example Request : Perbaikan CK-6

--boundary
Content-Disposition: form-data; name="idCk6Header"

eeb568b2-24ec-40e8-8b25-848cd786378f
--boundary
Content-Disposition: form-data; name="nomorAju"

asaas
--boundary
Content-Disposition: form-data; name="tanggalAju"

2024-08-20
--boundary
Content-Disposition: form-data; name="flagImpor"

Y
--boundary
Content-Disposition: form-data; name="idCaraPelunasan"

NaN
--boundary
Content-Disposition: form-data; name="idStatusCukai"

2
--boundary
Content-Disposition: form-data; name="statusCukai"

Sudah Dilunasi
--boundary
Content-Disposition: form-data; name="idJenisIdentitasPemasok"

1
--boundary
Content-Disposition: form-data; name="jenisIdentitasPemasok"

NPPBKC
--boundary
Content-Disposition: form-data; name="idStatusPemasok"

5
--boundary
Content-Disposition: form-data; name="statusPemasok"

Penyalur
--boundary
Content-Disposition: form-data; name="nomorIdentitasPemasok"

0024143463056000150352
--boundary
Content-Disposition: form-data; name="namaPemasok"

MULTI BINTANG INDONESIA NIAGA, PT
--boundary
Content-Disposition: form-data; name="kodeKantorPemasok"

150300
--boundary
Content-Disposition: form-data; name="namaKantorPemasok"

KPPBC TANGERANG
--boundary
Content-Disposition: form-data; name="alamatPemasok"

JL. MARGA WARTA NO.3, RT.003 RW.03, KEL. BATUCEPER, KEC. BATUCEPER, TANGERANG, BANTEN
--boundary
Content-Disposition: form-data; name="idJenisIdentitasTujuan"

1
--boundary
Content-Disposition: form-data; name="jenisIdentitasTujuan"

NPPBKC
--boundary
Content-Disposition: form-data; name="idStatusTujuan"

5
--boundary
Content-Disposition: form-data; name="statusTujuan"

Penyalur
--boundary
Content-Disposition: form-data; name="nomorIdentitasTujuan"

0705844892654000070652
--boundary
Content-Disposition: form-data; name="namaTujuan"

UD SUMBER MAKMUR
--boundary
Content-Disposition: form-data; name="kodeKantorTujuan"

070600
--boundary
Content-Disposition: form-data; name="namaKantorTujuan"

KPPBC TMC MALANG
--boundary
Content-Disposition: form-data; name="alamatTujuan"

DESA TUMPANGREJO RT. 003 RW. 005 KEL. KEBOBANG, KEC. WONOSARI, KABUPATEN MALANG
--boundary
Content-Disposition: form-data; name="flagTransaksi"

N
--boundary
Content-Disposition: form-data; name="nilaiTransaksi"

0
--boundary
Content-Disposition: form-data; name="tanggalInvoice"

2024-08-21
--boundary
Content-Disposition: form-data; name="nomorInvoice"

-
--boundary
Content-Disposition: form-data; name="lainnya"

-
--boundary
Content-Disposition: form-data; name="rencanaTanggalPengangkutan"

2024-08-20
--boundary
Content-Disposition: form-data; name="nomorSuratJalan"

12
--boundary
Content-Disposition: form-data; name="tanggalSuratJalan"

2024-08-20
--boundary
Content-Disposition: form-data; name="namaPemberitahu"

asa
--boundary
Content-Disposition: form-data; name="noIdentitasPemberitahu"

saa
--boundary
Content-Disposition: form-data; name="tanggalPemberitahuan"

2024-08-21
--boundary
Content-Disposition: form-data; name="alamatPemberitahu"

saas
--boundary
Content-Disposition: form-data; name="komentar"

-
--boundary
Content-Disposition: form-data; name="dokumenDasarPerbaikan"

(binary)
--boundary
Content-Disposition: form-data; name="nomorPermohonanPerbaikan"

asa
--boundary
Content-Disposition: form-data; name="tanggalPermohonanPerbaikan"

Wed Aug 21 2024 16:4:1 GMT+0700
--boundary
Content-Disposition: form-data; name="alasanPerbaikan"

asa
--boundary
Content-Disposition: form-data; name="details[0].idCk6Detail"

2a865dba-abaa-460f-890d-217385d5ff85
--boundary
Content-Disposition: form-data; name="details[0].idJenisKoli"

5
--boundary
Content-Disposition: form-data; name="details[0].namaJenisKoli"

Bulk
--boundary
Content-Disposition: form-data; name="details[0].jumlahKoli"

10
--boundary
Content-Disposition: form-data; name="details[0].idMerk"

69554847-9a8f-43e7-8e20-12e9d87e5f56
--boundary
Content-Disposition: form-data; name="details[0].namaMerk"

Merek(3)
--boundary
Content-Disposition: form-data; name="details[0].satuanBarang"

liter
--boundary
Content-Disposition: form-data; name="details[0].tarifCukai"

8000000
--boundary
Content-Disposition: form-data; name="details[0].uraian"

Merek(3); 200 ml; Gol MMEA GOLONGAN A
--boundary
Content-Disposition: form-data; name="details[0].jumlahKemasan"

10
--boundary
Content-Disposition: form-data; name="details[0].idJenisKemasan"

2
--boundary
Content-Disposition: form-data; name="details[0].namaJenisKemasan"

Botol
--boundary
Content-Disposition: form-data; name="details[0].jumlahBarang"

2
--boundary
Content-Disposition: form-data; name="details[0].jumlahCukai"

16000000
--boundary
Content-Disposition: form-data; name="details[0].keterangan"

12

Validation Rules

Field

Rules

idCk6Header

Harus merupakan UUID yang valid.

tanggalAju

Harus dalam format YYYY-MM-DD

tanggalInvoice

Harus dalam format YYYY-MM-DD

rencanaTanggalPengangkutan

Harus dalam format YYYY-MM-DD

tanggalSuratJalan

Harus dalam format YYYY-MM-DD

tanggalPemberitahuan

Harus dalam format YYYY-MM-DD

tanggalPermohonanPerbaikan

Harus dalam format DDD MMM DD YYYY HH:M:S

details[0].idCk6Detail

Harus merupakan UUID yang valid.

details[0].jumlahKoli

Harus berupa angka positif

details[0].idMerk

Harus merupakan UUID yang valid.

details[0].tarifCukai

Harus berupa angka positif

details[0].jumlahKemasan

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
        "idCk6HeaderEdit": "02ce35c2-4590-48dd-a974-89f217eb26b3",
        "idCk6Header": "eeb568b2-24ec-40e8-8b25-848cd786378f",
        "idJenisIdentitasPemasokEdit": null,
        "jenisIdentitasPemasokEdit": null,
        "nomorIdentitasPemasokEdit": null,
        "namaPemasokEdit": null,
        "alamatPemasokEdit": null,
        "kodeKantorPemasokEdit": null,
        "namaKantorPemasokEdit": null,
        "statusPemasokEdit": null,
        "idJenisIdentitasTujuanEdit": null,
        "jenisIdentitasTujuanEdit": null,
        "nomorIdentitasTujuanEdit": null,
        "namaTujuanEdit": null,
        "alamatTujuanEdit": null,
        "kodeKantorTujuanEdit": null,
        "namaKantorTujuanEdit": null,
        "statusTujuanEdit": null,
        "nomorInvoiceEdit": null,
        "tanggalInvoiceEdit": null,
        "namaPemberitahuEdit": null,
        "tanggalPemberitahuanEdit": null,
        "idKotaPemberitahuEdit": null,
        "namaKotaPemberitahuEdit": null,
        "nomorAjuEdit": null,
        "flagImporEdit": null,
        "caraPelunasanEdit": null,
        "statusCukaiEdit": null,
        "lainnyaEdit": null,
        "noIdentitasPemberitahuEdit": null,
        "alamatPemberitahuEdit": null,
        "tanggalAjuEdit": null,
        "rencanaTanggalPengangkutanEdit": null,
        "idCaraPelunasanEdit": null,
        "idStatusCukaiEdit": null,
        "idStatusPemasokEdit": null,
        "idStatusTujuanEdit": null,
        "nilaiTransaksiEdit": null,
        "flagTransaksiEdit": null,
        "komentar": "-",
        "nomorSuratJalanEdit": null,
        "kodeUploadLainnyaEdit": null,
        "tanggalSuratJalanEdit": null,
        "nomorPermohonanPerbaikan": "asa",
        "tanggalPermohonanPerbaikan": "Wed Aug 21 2024 16:4:1 GMT+0700",
        "alasanPerbaikan": "asa",
        "details": [
            {
                "idCk6DetailEdit": "8b51b9b2-41aa-4b27-8641-4ee95c479833",
                "idCk6Detail": "2a865dba-abaa-460f-890d-217385d5ff85",
                "idMerkEdit": null,
                "namaMerkEdit": null,
                "seriEdit": null,
                "idJenisKoliEdit": null,
                "namaJenisKoliEdit": null,
                "jumlahKoliEdit": null,
                "nomorKoliEdit": null,
                "jumlahKemasanEdit": null,
                "jumlahBarangEdit": null,
                "uraianEdit": null,
                "keteranganEdit": null,
                "idJenisKemasanEdit": null,
                "namaJenisKemasanEdit": null,
                "satuanBarangEdit": null,
                "tarifCukaiEdit": null,
                "jumlahCukaiEdit": null
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

Last updated 1 year ago
```