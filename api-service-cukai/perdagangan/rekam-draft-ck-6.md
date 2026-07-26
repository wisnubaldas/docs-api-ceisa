# Rekam Draft CK-6

### Introduction

  * Purpose: API ini digunakan untuk rekam draft CK-6

  * Overview: Proses rekam draft CK-6 mensyaratkan 2 object data dalam bentuk form yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck6/rekam-draft-dokumen`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Endpoint ini menerima parameter berikut dalam form data:` | Header Section |
| `Parameter Name` | `Type` | Description |
| `Example Value` | `kodeKantor` | String |
| `Kode kantor` | `150300` | nomorAju |
| `String` | `Nomor aju` | 1212 |
| `tanggalAju` | `Date` | Tanggal aju |
| `2024-08-15` | `nomorCk6` | String |
| `Nomor CK6` | `XS-90` | tanggalCk6 |
| `Date` | `Tanggal CK6` | 2024-08-15 |
| `idJenisBkc` | `Integer` | ID jenis BKC |
| `2` | `namaJenisBkc` | String |
| `Nama jenis BKC` | `MMEA` | idStatusCukai |
| `Integer` | `ID status cukai` | 2 |
| `statusCukai` | `String` | Status cukai |
| `Sudah Dilunasi` | `idJenisIdentitasPemasok` | Integer |
| `ID jenis identitas pemasok` | `1` | jenisIdentitasPemasok |
| `String` | `Jenis identitas pemasok` | NPPBKC |
| `idStatusPemasok` | `Integer` | ID status pemasok |
| `5` | `statusPemasok` | String |
| `Status pemasok` | `Penyalur` | nomorIdentitasPemasok |
| `String` | `Nomor identitas pemasok` | 0024143463056000150352 |
| `namaPemasok` | `String` | Nama pemasok |
| `MULTI BINTANG INDONESIA NIAGA, PT` | `kodeKantorPemasok` | String |
| `Kode kantor pemasok` | `150300` | namaKantorPemasok |
| `String` | `Nama kantor pemasok` | KPPBC TANGERANG |
| `alamatPemasok` | `String` | Alamat pemasok |
| `JL. MARGA WARTA NO.3, RT.003 RW.03, KEL. BATUCEPER, KEC. BATUCEPER, TANGERANG, BANTEN` | `idJenisIdentitasTujuan` | Integer |
| `ID jenis identitas tujuan` | `1` | jenisIdentitasTujuan |
| `String` | `Jenis identitas tujuan` | NPPBKC |
| `idStatusTujuan` | `Integer` | ID status tujuan |
| `5` | `statusTujuan` | String |
| `Status tujuan` | `Penyalur` | nomorIdentitasTujuan |
| `String` | `Nomor identitas tujuan` | 0705844892654000070652 |
| `namaTujuan` | `String` | Nama tujuan |
| `UD SUMBER MAKMUR` | `kodeKantorTujuan` | String |
| `Kode kantor tujuan` | `70600` | namaKantorTujuan |
| `String` | `Nama kantor tujuan` | KPPBC TMC MALANG |
| `alamatTujuan` | `String` | Alamat tujuan |
| `DESA TUMPANGREJO RT. 003 RW. 005 KEL. KEBOBANG, KEC. WONOSARI, KABUPATEN MALANG` | `flagTransaksi` | String |
| `Flag transaksi` | `N` | nilaiTransaksi |
| `Integer` | `Nilai transaksi` | 0 |
| `rencanaTanggalPengangkutan` | `Date` | Rencana tanggal pengangkutan |
| `2024-08-15` | `namaPemberitahu` | String |
| `Nama pemberitahu` | `saaas` | noIdentitasPemberitahu |
| `String` | `Nomor identitas pemberitahu` | 121 |
| `tanggalPemberitahuan` | `Date` | Tanggal pemberitahuan |
| `2024-08-15` | `alamatPemberitahu` | String |
| `Alamat pemberitahu` | `ssasaa` | tanggalSuratJalan |
| `Date` | `Tanggal surat jalan` | 2024-08-15 |
| `nomorSuratJalan` | `String` | Nomor surat jalan |
| `12` | `Detail Section` | Parameter Name |
| `Type` | `Description` | Example Value |
| `details[0].idJenisKoli` | `Integer` | ID jenis koli |
| `1` | `details[0].namaJenisKoli` | String |
| `Nama jenis koli` | `Drum` | details[0].jumlahKoli |
| `Integer` | `Jumlah koli` | 10 |
| `details[0].idMerk` | `String` | ID merk |
| `69554847-9a8f-43e7-8e20-12e9d87e5f56` | `details[0].namaMerk` | String |
| `Nama merk` | `Merek(3)` | details[0].satuanBarang |
| `String` | `Satuan barang` | liter |
| `details[0].tarifCukai` | `Integer` | Tarif cukai |
| `8000000` | `details[0].uraian` | String |
| `Uraian barang` | `Merek(3); 200 ml; Gol MMEA GOLONGAN A` | details[0].jumlahKemasan |
| `Integer` | `Jumlah kemasan` | 10 |
| `details[0].idJenisKemasan` | `Integer` | ID jenis kemasan |
| `2` | `details[0].namaJenisKemasan` | String |
| `Nama jenis kemasan` | `Botol` | details[0].jumlahBarang |
| `Integer` | `Jumlah barang` | 2 |
| `details[0].jumlahCukai` | `Integer` | Jumlah cukai |
| `16000000` | `details[0].keterangan` | String |
| `Keterangan tambahan` | `121` | JSONSchema Rekam Draft CK-6 |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam Draft CK-6",
  "properties": {
    "kodeKantor": {
      "type": "string",
      "description": "Kode kantor"
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
    "nomorCk6": {
      "type": "string",
      "description": "Nomor CK6"
    },
    "tanggalCk6": {
      "type": "string",
      "format": "date",
      "description": "Tanggal CK6"
    },
    "idJenisBkc": {
      "type": "string",
      "description": "ID jenis BKC"
    },
    "namaJenisBkc": {
      "type": "string",
      "description": "Nama jenis BKC"
    },
    "idStatusCukai": {
      "type": "string",
      "description": "ID status cukai"
    },
    "statusCukai": {
      "type": "string",
      "description": "Status cukai"
    },
    "idJenisIdentitasPemasok": {
      "type": "string",
      "description": "ID jenis identitas pemasok"
    },
    "jenisIdentitasPemasok": {
      "type": "string",
      "description": "Jenis identitas pemasok"
    },
    "idStatusPemasok": {
      "type": "string",
      "description": "ID status pemasok"
    },
    "statusPemasok": {
      "type": "string",
      "description": "Status pemasok"
    },
    "nomorIdentitasPemasok": {
      "type": "string",
      "description": "Nomor identitas pemasok"
    },
    "namaPemasok": {
      "type": "string",
      "description": "Nama pemasok"
    },
    "kodeKantorPemasok": {
      "type": "string",
      "description": "Kode kantor pemasok"
    },
    "namaKantorPemasok": {
      "type": "string",
      "description": "Nama kantor pemasok"
    },
    "alamatPemasok": {
      "type": "string",
      "description": "Alamat pemasok"
    },
    "idJenisIdentitasTujuan": {
      "type": "string",
      "description": "ID jenis identitas tujuan"
    },
    "jenisIdentitasTujuan": {
      "type": "string",
      "description": "Jenis identitas tujuan"
    },
    "idStatusTujuan": {
      "type": "string",
      "description": "ID status tujuan"
    },
    "statusTujuan": {
      "type": "string",
      "description": "Status tujuan"
    },
    "nomorIdentitasTujuan": {
      "type": "string",
      "description": "Nomor identitas tujuan"
    },
    "namaTujuan": {
      "type": "string",
      "description": "Nama tujuan"
    },
    "kodeKantorTujuan": {
      "type": "string",
      "description": "Kode kantor tujuan"
    },
    "namaKantorTujuan": {
      "type": "string",
      "description": "Nama kantor tujuan"
    },
    "alamatTujuan": {
      "type": "string",
      "description": "Alamat tujuan"
    },
    "flagTransaksi": {
      "type": "string",
      "description": "Flag transaksi"
    },
    "nilaiTransaksi": {
      "type": "number",
      "description": "Nilai transaksi"
    },
    "rencanaTanggalPengangkutan": {
      "type": "string",
      "format": "date",
      "description": "Rencana tanggal pengangkutan"
    },
    "namaPemberitahu": {
      "type": "string",
      "description": "Nama pemberitahu"
    },
    "noIdentitasPemberitahu": {
      "type": "string",
      "description": "Nomor identitas pemberitahu"
    },
    "tanggalPemberitahuan": {
      "type": "string",
      "format": "date",
      "description": "Tanggal pemberitahuan"
    },
    "alamatPemberitahu": {
      "type": "string",
      "description": "Alamat pemberitahu"
    },
    "tanggalSuratJalan": {
      "type": "string",
      "format": "date",
      "description": "Tanggal surat jalan"
    },
    "nomorSuratJalan": {
      "type": "string",
      "description": "Nomor surat jalan"
    },
    "details": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "idJenisKoli": {
            "type": "string",
            "description": "ID jenis koli"
          },
          "namaJenisKoli": {
            "type": "string",
            "description": "Nama jenis koli"
          },
          "jumlahKoli": {
            "type": "number",
            "description": "Jumlah koli"
          },
          "idMerk": {
            "type": "string",
            "format": "uuid",
            "description": "UUID merk"
          },
          "namaMerk": {
            "type": "string",
            "description": "Nama merk"
          },
          "satuanBarang": {
            "type": "string",
            "description": "Satuan barang"
          },
          "tarifCukai": {
            "type": "number",
            "description": "Tarif cukai"
          },
          "uraian": {
            "type": "string",
            "description": "Uraian barang"
          },
          "jumlahKemasan": {
            "type": "number",
            "description": "Jumlah kemasan"
          },
          "idJenisKemasan": {
            "type": "string",
            "description": "ID jenis kemasan"
          },
          "namaJenisKemasan": {
            "type": "string",
            "description": "Nama jenis kemasan"
          },
          "jumlahBarang": {
            "type": "number",
            "description": "Jumlah barang"
          },
          "jumlahCukai": {
            "type": "number",
            "description": "Jumlah cukai"
          },
          "keterangan": {
            "type": "string",
            "description": "Keterangan"
          }
        },
        "required": [
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
          "jumlahCukai", 
          "keterangan"
        ]
      }
    }
  },
  "required": [
    "kodeKantor", 
    "nomorAju", 
    "tanggalAju", 
    "nomorCk6", 
    "tanggalCk6", 
    "idJenisBkc", 
    "namaJenisBkc", 
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
    "rencanaTanggalPengangkutan", 
    "namaPemberitahu", 
    "noIdentitasPemberitahu", 
    "tanggalPemberitahuan", 
    "alamatPemberitahu", 
    "tanggalSuratJalan", 
    "nomorSuratJalan", 
    "details"
  ]
}

Example Request : Rekam Draft CK-6

--boundary
Content-Disposition: form-data; name="kodeKantor"

150300
--boundary
Content-Disposition: form-data; name="nomorAju"

1212
--boundary
Content-Disposition: form-data; name="tanggalAju"

2024-08-15
--boundary
Content-Disposition: form-data; name="nomorCk6"

XS-90
--boundary
Content-Disposition: form-data; name="tanggalCk6"

2024-08-15
--boundary
Content-Disposition: form-data; name="idJenisBkc"

2
--boundary
Content-Disposition: form-data; name="namaJenisBkc"

MMEA
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
Content-Disposition: form-data; name="rencanaTanggalPengangkutan"

2024-08-15
--boundary
Content-Disposition: form-data; name="namaPemberitahu"

saaas
--boundary
Content-Disposition: form-data; name="noIdentitasPemberitahu"

121
--boundary
Content-Disposition: form-data; name="tanggalPemberitahuan"

2024-08-15
--boundary
Content-Disposition: form-data; name="alamatPemberitahu"

ssasaa
--boundary
Content-Disposition: form-data; name="tanggalSuratJalan"

2024-08-15
--boundary
Content-Disposition: form-data; name="nomorSuratJalan"

12
--boundary
Content-Disposition: form-data; name="details[0].idJenisKoli"

1
--boundary
Content-Disposition: form-data; name="details[0].namaJenisKoli"

Drum
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

121
--boundary

Validation Rules

Field

Rules

tanggalAju

Harus dalam format YYYY-MM-DD

tanggalCk6

Harus dalam format YYYY-MM-DD

rencanaTanggalPengangkutan

Harus dalam format YYYY-MM-DD

tanggalPemberitahuan

Harus dalam format YYYY-MM-DD

tanggalSuratJalan

Harus dalam format YYYY-MM-DD

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
        "idJenisIdentitasPemasok": 1,
        "jenisIdentitasPemasok": "NPPBKC",
        "nomorIdentitasPemasok": "0024143463056000150352",
        "namaPemasok": "MULTI BINTANG INDONESIA NIAGA, PT",
        "idCk6Header": "0e7d47e5-235a-4404-8e44-4a167323927e",
        "alamatPemasok": "JL. MARGA WARTA NO.3, RT.003 RW.03, KEL. BATUCEPER, KEC. BATUCEPER, TANGERANG, BANTEN",
        "kodeKantorPemasok": "150300",
        "namaKantorPemasok": "KPPBC TANGERANG",
        "statusPemasok": "Penyalur",
        "idJenisIdentitasTujuan": 1,
        "jenisIdentitasTujuan": "NPPBKC",
        "nomorIdentitasTujuan": "0705844892654000070652",
        "namaTujuan": "UD SUMBER MAKMUR",
        "alamatTujuan": "DESA TUMPANGREJO RT. 003 RW. 005 KEL. KEBOBANG, KEC. WONOSARI, KABUPATEN MALANG",
        "kodeKantorTujuan": "070600",
        "namaKantorTujuan": "KPPBC TMC MALANG",
        "statusTujuan": "Penyalur",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "nomorInvoice": null,
        "tanggalInvoice": null,
        "idAlatAngkut": null,
        "namaAlatAngkut": null,
        "nomorAlatAngkut": null,
        "tanggalRencanaAngkut": null,
        "jangkaWaktuAngkut": null,
        "namaPemberitahu": "saaas",
        "tanggalPemberitahuan": "2024-08-15",
        "idKotaPemberitahu": null,
        "namaKotaPemberitahu": null,
        "nomorCk6": "XS-90",
        "nomorAju": "1212",
        "flagImpor": null,
        "kodeKantor": "150300",
        "caraPelunasan": null,
        "statusCukai": "Sudah Dilunasi",
        "lainnya": null,
        "noIdentitasPemberitahu": "121",
        "alamatPemberitahu": "ssasaa",
        "tanggalCk6": "2024-08-15",
        "tanggalAju": "2024-08-15",
        "rencanaTanggalPengangkutan": "2024-08-15",
        "idCaraPelunasan": null,
        "idStatusCukai": 2,
        "idStatusPemasok": 5,
        "idStatusTujuan": 5,
        "nilaiTransaksi": 0,
        "flagTransaksi": "N",
        "nomorSuratJalan": "12",
        "tanggalSuratJalan": "2024-08-15",
        "details": [
            {
                "idCk6Detail": "a69d0a86-87cd-4e7b-a6f4-4991d3e57b5e",
                "idMerk": "69554847-9a8f-43e7-8e20-12e9d87e5f56",
                "namaMerk": "Merek(3)",
                "seri": null,
                "idJenisKoli": 1,
                "namaJenisKoli": "Drum",
                "jumlahKoli": 10,
                "nomorKoli": null,
                "jumlahKemasan": 10,
                "jumlahBarang": 2,
                "hjePerKemasan": null,
                "uraian": "Merek(3); 200 ml; Gol MMEA GOLONGAN A",
                "keterangan": "121",
                "idJenisKemasan": 2,
                "namaJenisKemasan": "Botol",
                "satuanBarang": "liter",
                "tarifCukai": 8000000,
                "jumlahCukai": 16000000
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