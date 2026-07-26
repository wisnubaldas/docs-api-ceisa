# Rekam Dokumen CK-6

### Introduction

  * Purpose: API ini digunakan untuk rekam dokumen CK-6

  * Overview: Proses rekam dokumen CK-6 mensyaratkan 2 object data dalam bentuk form yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck6/rekam-dokumen`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Endpoint ini menerima parameter berikut dalam form data:` | Header Section |
| `Parameter Name` | `Type` | Description |
| `Example Value` | `kodeKantor` | String |
| `Kode kantor` | `150300` | nomorAju |
| `String` | `Nomor Aju` | asaas |
| `tanggalAju` | `String` | Tanggal pengajuan dokumen |
| `2024-08-20` | `nomorCk6` | String |
| `Nomor CK-6` | `XS-90` | tanggalCk6 |
| `String` | `Tanggal CK-6 diterbitkan` | 2024-08-20 |
| `idJenisBkc` | `Integer` | ID jenis Barang Kena Cukai (BKC) |
| `2` | `namaJenisBkc` | String |
| `Nama jenis Barang Kena Cukai (BKC)` | `MMEA` | idStatusCukai |
| `Integer` | `ID status cukai barang` | 2 |
| `statusCukai` | `String` | Status pembayaran cukai |
| `Sudah Dilunasi` | `idJenisIdentitasPemasok` | Integer |
| `ID jenis identitas pemasok` | `1` | jenisIdentitasPemasok |
| `String` | `Jenis identitas pemasok` | NPPBKC |
| `idStatusPemasok` | `Integer` | ID status pemasok dalam transaksi |
| `5` | `statusPemasok` | String |
| `Status pemasok` | `Penyalur` | nomorIdentitasPemasok |
| `String` | `Nomor identitas pemasok` | 0024143463056000150352 |
| `namaPemasok` | `String` | Nama perusahaan pemasok |
| `MULTI BINTANG INDONESIA NIAGA, PT` | `kodeKantorPemasok` | String |
| `Kode kantor pemasok` | `150300` | namaKantorPemasok |
| `String` | `Nama kantor pemasok` | KPPBC TANGERANG |
| `alamatPemasok` | `String` | Alamat lengkap pemasok |
| `JL. MARGA WARTA NO.3, RT.003 RW.03, KEL. BATUCEPER, KEC. BATUCEPER, TANGERANG, BANTEN` | `idJenisIdentitasTujuan` | Integer |
| `ID jenis identitas tujuan pengiriman` | `1` | jenisIdentitasTujuan |
| `String` | `Jenis identitas tujuan pengiriman` | NPPBKC |
| `idStatusTujuan` | `Integer` | ID status tujuan dalam transaksi |
| `5` | `statusTujuan` | String |
| `Status tujuan` | `Penyalur` | nomorIdentitasTujuan |
| `String` | `Nomor identitas tujuan pengiriman` | 0705844892654000070652 |
| `namaTujuan` | `String` | Nama tujuan pengiriman |
| `UD SUMBER MAKMUR` | `kodeKantorTujuan` | String |
| `Kode kantor tujuan pengiriman` | `70600` | namaKantorTujuan |
| `String` | `Nama kantor tujuan pengiriman` | KPPBC TMC MALANG |
| `alamatTujuan` | `String` | Alamat lengkap tujuan pengiriman |
| `DESA TUMPANGREJO RT. 003 RW. 005 KEL. KEBOBANG, KEC. WONOSARI, KABUPATEN MALANG` | `flagTransaksi` | String |
| `Indikator apakah transaksi dilakukan` | `N` | nilaiTransaksi |
| `Integer` | `Nilai transaksi yang terlibat` | 0 |
| `rencanaTanggalPengangkutan` | `String` | Tanggal rencana pengangkutan |
| `2024-08-20` | `namaPemberitahu` | String |
| `Nama pihak yang memberitahukan transaksi` | `asa` | noIdentitasPemberitahu |
| `String` | `Nomor identitas pemberitahu` | saa |
| `tanggalPemberitahuan` | `String` | Tanggal pemberitahuan transaksi |
| `2024-08-20` | `alamatPemberitahu` | String |
| `Alamat pihak pemberitahu` | `saas` | tanggalSuratJalan |
| `String` | `Tanggal surat jalan diterbitkan` | 2024-08-20 |
| `nomorSuratJalan` | `String` | Nomor surat jalan yang digunakan |
| `12` | `Detail Section` | Parameter Name |
| `Type` | `Description` | Example Value |
| `details[0].idJenisKoli` | `Integer` | ID jenis koli |
| `5` | `details[0].namaJenisKoli` | String |
| `Nama jenis koli yang digunakan` | `Bulk` | details[0].jumlahKoli |
| `Integer` | `Jumlah koli` | 10 |
| `details[0].idMerk` | `String` | ID merk |
| `69554847-9a8f-43e7-8e20-12e9d87e5f56` | `details[0].namaMerk` | String |
| `Nama merk` | `Merek(3)` | details[0].satuanBarang |
| `String` | `Satuan barang` | liter |
| `details[0].tarifCukai` | `Integer` | Tarif cukai per unit barang |
| `8000000` | `details[0].uraian` | String |
| `Uraian atau deskripsi barang` | `Merek(3); 200 ml; Gol MMEA GOLONGAN A` | details[0].jumlahKemasan |
| `Integer` | `Jumlah kemasan yang dikirim` | 10 |
| `details[0].idJenisKemasan` | `Integer` | ID jenis kemasan yang digunakan |
| `2` | `details[0].namaJenisKemasan` | String |
| `Nama jenis kemasan` | `Botol` | details[0].jumlahBarang |
| `Integer` | `Jumlah barang` | 2 |
| `details[0].jumlahCukai` | `Integer` | Jumlah cukai yang harus dibayar |
| `16000000` | `details[0].keterangan` | String |
| `Keterangan tambahan terkait barang yang dikirim` | `12` | JSONSchema Rekam Dokumen CK-6 |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Rekam Dokumen CK-6",
  "properties": {
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
      "description": "Tanggal aju dalam format YYYY-MM-DD."
    },
    "nomorCk6": {
      "type": "string",
      "description": "Nomor CK6."
    },
    "tanggalCk6": {
      "type": "string",
      "format": "date",
      "description": "Tanggal CK6 dalam format YYYY-MM-DD."
    },
    "idJenisBkc": {
      "type": "integer",
      "description": "ID jenis BKC."
    },
    "namaJenisBkc": {
      "type": "string",
      "description": "Nama jenis BKC."
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
    "rencanaTanggalPengangkutan": {
      "type": "string",
      "format": "date",
      "description": "Rencana tanggal pengangkutan dalam format YYYY-MM-DD."
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
    "tanggalSuratJalan": {
      "type": "string",
      "format": "date",
      "description": "Tanggal surat jalan dalam format YYYY-MM-DD."
    },
    "nomorSuratJalan": {
      "type": "string",
      "description": "Nomor surat jalan."
    },
    "details": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
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

Example Request : Rekam Dokumen CK-6

--boundary
Content-Disposition: form-data; name="kodeKantor"
150300
--boundary
Content-Disposition: form-data; name="nomorAju"
asaas
--boundary
Content-Disposition: form-data; name="tanggalAju"
2024-08-20
--boundary
Content-Disposition: form-data; name="nomorCk6"
XS-90
--boundary
Content-Disposition: form-data; name="tanggalCk6"
2024-08-20
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
2024-08-20
--boundary
Content-Disposition: form-data; name="namaPemberitahu"
asa
--boundary
Content-Disposition: form-data; name="noIdentitasPemberitahu"
saa
--boundary
Content-Disposition: form-data; name="tanggalPemberitahuan"
2024-08-20
--boundary
Content-Disposition: form-data; name="alamatPemberitahu"
saas
--boundary
Content-Disposition: form-data; name="tanggalSuratJalan"
2024-08-20
--boundary
Content-Disposition: form-data; name="nomorSuratJalan"
12
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