# Update Draft CK-6

### Introduction

  * Purpose: API ini digunakan untuk rubah draft CK-6

  * Overview: Proses rubah draft CK-6 mensyaratkan 2 object data dalam bentuk form yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck6/update-draft-dokumen`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Endpoint ini menerima parameter berikut dalam form data:` | Header Section |
| `Parameter Name` | `Type` | Description |
| `Example Value` | `alamatPemasok` | string |
| `Alamat dari pemasok` | `JALAN KELAPA SAWIT XIII BLOK BF NOMOR 1 SEKTOR 1B GADING SERPONG` | alamatPemberitahu |
| `string` | `Alamat dari pemberitahu` | JALAN KELAPA SAWIT XIII BLOK BF NOMOR 1 SEKTOR 1B GADING SERPONG |
| `alamatTujuan` | `string` | Alamat tujuan pengiriman |
| `Jalan Panglima Sudirman Nomor 39 Kelurahan Ngaglik Kecamatan Batu Kota Batu` | `caraPelunasan` | string |
| `Cara pelunasan pembayaran` | `Pembayaran` | flagImpor |
| `string` | `Menandakan apakah ada impor atau tidak` | N |
| `flagTransaksi` | `string` | Menandakan status transaksi |
| `N` | `idCaraPelunasan` | integer |
| `ID untuk cara pelunasan` | `1` | idCk6Header |
| `string` | `ID untuk header Ck6` | 60a34d8f-1a00-4a6a-b592-0f5b0594416a |
| `idJenisBkc` | `integer` | ID untuk jenis BKC |
| `2` | `idJenisIdentitasPemasok` | integer |
| `ID untuk jenis identitas pemasok` | `1` | idJenisIdentitasTujuan |
| `integer` | `ID untuk jenis identitas tujuan` | 1 |
| `idStatusCukai` | `integer` | ID status cukai |
| `2` | `idStatusPemasok` | integer |
| `ID status pemasok` | `4` | idStatusTujuan |
| `integer` | `ID status tujuan` | 3 |
| `jenisIdentitasPemasok` | `string` | Jenis identitas pemasok |
| `NPPBKC` | `jenisIdentitasTujuan` | string |
| `Jenis identitas tujuan` | `NPPBKC` | kodeKantor |
| `string` | `Kode kantor asal` | 150300 |
| `kodeKantorPemasok` | `string` | Kode kantor pemasok |
| `150300` | `kodeKantorTujuan` | string |
| `Kode kantor tujuan` | `70600` | namaJenisBkc |
| `string` | `Nama jenis BKC` | MMEA |
| `namaKantorPemasok` | `string` | Nama kantor pemasok |
| `KPPBC TANGERANG` | `namaKantorTujuan` | string |
| `Nama kantor tujuan` | `KPPBC TMC MALANG` | namaPemasok |
| `string` | `Nama dari pemasok` | WAROENG SENPAI CV |
| `namaPemberitahu` | `string` | Nama dari pemberitahu |
| `YUDI` | `namaTujuan` | string |
| `Nama tujuan pengiriman` | `WARUNG WOW KWB PD` | nilaiTransaksi |
| `integer` | `Nilai dari transaksi` | 0 |
| `noIdentitasPemberitahu` | `string` | Nomor identitas pemberitahu |
| `940310485036000` | `nomorAju` | string |
| `Nomor aju` | `0090/TESJGXZ` | nomorCk6 |
| `string` | `Nomor Ck6` | XS-90 |
| `nomorIdentitasPemasok` | `string` | Nomor identitas pemasok |
| `0940310485036000150342` | `nomorIdentitasTujuan` | string |
| `Nomor identitas tujuan` | `0822103644628000070642` | nomorInvoice |
| `string` | `Nomor invoice` | 98765 |
| `nomorSuratJalan` | `string` | Nomor surat jalan |
| `098/JGC` | `rencanaTanggalPengangkutan` | Date |
| `Tanggal rencana pengangkutan` | `2024-01-08` | statusCukai |
| `string` | `Status cukai` | Sudah Dilunasi |
| `statusPemasok` | `string` | Status pemasok |
| `Tempat Penjualan Eceran` | `statusTujuan` | string |
| `Status tujuan` | `Penyalur` | tanggalAju |
| `Date` | `Tanggal aju` | 2024-01-08 |
| `tanggalCk6` | `Date` | Tanggal Ck6 |
| `2024-01-08` | `tanggalInvoice` | Date |
| `Tanggal invoice` | `2024-01-08` | tanggalSuratJalan |
| `Date` | `Tanggal surat jalan` | 2024-01-08 |
| `lainnya` | `string` | Informasi tambahan |
| `TGHJK` | `Detail Section` | Parameter Name |
| `Type` | `Description` | Example Value |
| `details[0].idCk6Detail` | `string` | ID detail Ck6 |
| `c43ef7f5-27e0-405d-a640-f82a87afde4e` | `details[0].idJenisKemasan` | integer |
| `ID jenis kemasan` | `2` | details[0].idJenisKoli |
| `integer` | `ID jenis koli` | 1 |
| `details[0].idMerk` | `string` | ID merk |
| `10e9cd71-8177-4274-8223-954ef4f2115e` | `details[0].jumlahBarang` | integer |
| `Jumlah barang` | `9000` | details[0].jumlahCukai |
| `integer` | `Jumlah cukai` | 200000 |
| `details[0].jumlahKemasan` | `integer` | Jumlah kemasan |
| `900` | `details[0].jumlahKoli` | integer |
| `Jumlah koli` | `987654` | details[0].keterangan |
| `string` | `Keterangan tambahan` | Perbaikan Draft |
| `details[0].namaJenisKemasan` | `string` | Nama jenis kemasan |
| `Botol` | `details[0].namaJenisKoli` | string |
| `Nama jenis koli` | `Drum` | details[0].namaMerk |
| `string` | `Nama merk` | HOKI BOLD >>> 12 KRETEK FILTER |
| `details[0].satuanBarang` | `string` | Satuan barang |
| `ml` | `details[0].tarifCukai` | integer |
| `Tarif cukai` | `2` | details[0].uraian |
| `string` | `Uraian barang` | HOKI BOLD >>> 12 KRETEK FILTER; 12 ml; Gol SKM |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Update Draft CK-6",
  "description": "JSON Schema untuk Update Draft CK-6.",
  "properties": {
    "alamatPemasok": {
      "type": "string",
      "description": "Alamat pemasok."
    },
    "alamatPemberitahu": {
      "type": "string",
      "description": "Alamat pemberitahu."
    },
    "alamatTujuan": {
      "type": "string",
      "description": "Alamat tujuan."
    },
    "caraPelunasan": {
      "type": "string",
      "description": "Cara pelunasan."
    },
    "flagImpor": {
      "type": "string",
      "description": "Flag impor."
    },
    "flagTransaksi": {
      "type": "string",
      "description": "Flag transaksi."
    },
    "idCaraPelunasan": {
      "type": "integer",
      "description": "ID cara pelunasan."
    },
    "idCk6Header": {
      "type": "string",
      "format": "uuid",
      "description": "ID CK6 Header."
    },
    "idJenisBkc": {
      "type": "integer",
      "description": "ID jenis BKC."
    },
    "idJenisIdentitasPemasok": {
      "type": "integer",
      "description": "ID jenis identitas pemasok."
    },
    "idJenisIdentitasTujuan": {
      "type": "integer",
      "description": "ID jenis identitas tujuan."
    },
    "idStatusCukai": {
      "type": "integer",
      "description": "ID status cukai."
    },
    "idStatusPemasok": {
      "type": "integer",
      "description": "ID status pemasok."
    },
    "idStatusTujuan": {
      "type": "integer",
      "description": "ID status tujuan."
    },
    "jenisIdentitasPemasok": {
      "type": "string",
      "description": "Jenis identitas pemasok."
    },
    "jenisIdentitasTujuan": {
      "type": "string",
      "description": "Jenis identitas tujuan."
    },
    "kodeKantor": {
      "type": "string",
      "description": "Kode kantor."
    },
    "kodeKantorPemasok": {
      "type": "string",
      "description": "Kode kantor pemasok."
    },
    "kodeKantorTujuan": {
      "type": "string",
      "description": "Kode kantor tujuan."
    },
    "lainnya": {
      "type": "string",
      "description": "Lainnya."
    },
    "namaJenisBkc": {
      "type": "string",
      "description": "Nama jenis BKC."
    },
    "namaKantorPemasok": {
      "type": "string",
      "description": "Nama kantor pemasok."
    },
    "namaKantorTujuan": {
      "type": "string",
      "description": "Nama kantor tujuan."
    },
    "namaPemasok": {
      "type": "string",
      "description": "Nama pemasok."
    },
    "namaPemberitahu": {
      "type": "string",
      "description": "Nama pemberitahu."
    },
    "namaTujuan": {
      "type": "string",
      "description": "Nama tujuan."
    },
    "nilaiTransaksi": {
      "type": "number",
      "description": "Nilai transaksi."
    },
    "noIdentitasPemberitahu": {
      "type": "string",
      "description": "Nomor identitas pemberitahu."
    },
    "nomorAju": {
      "type": "string",
      "description": "Nomor aju."
    },
    "nomorCk6": {
      "type": "string",
      "description": "Nomor CK6."
    },
    "nomorIdentitasPemasok": {
      "type": "string",
      "description": "Nomor identitas pemasok."
    },
    "nomorIdentitasTujuan": {
      "type": "string",
      "description": "Nomor identitas tujuan."
    },
    "nomorInvoice": {
      "type": "string",
      "description": "Nomor invoice."
    },
    "nomorSuratJalan": {
      "type": "string",
      "description": "Nomor surat jalan."
    },
    "rencanaTanggalPengangkutan": {
      "type": "string",
      "format": "date",
      "description": "Rencana tanggal pengangkutan."
    },
    "statusCukai": {
      "type": "string",
      "description": "Status cukai."
    },
    "statusPemasok": {
      "type": "string",
      "description": "Status pemasok."
    },
    "statusTujuan": {
      "type": "string",
      "description": "Status tujuan."
    },
    "tanggalAju": {
      "type": "string",
      "format": "date",
      "description": "Tanggal aju."
    },
    "tanggalCk6": {
      "type": "string",
      "format": "date",
      "description": "Tanggal CK6."
    },
    "tanggalInvoice": {
      "type": "string",
      "format": "date",
      "description": "Tanggal invoice."
    },
    "tanggalSuratJalan": {
      "type": "string",
      "format": "date",
      "description": "Tanggal surat jalan."
    },
    "details": {
      "type": "array",
      "description": "Data detail dokumen.",
      "items": {
        "type": "object",
        "properties": {
          "idCk6Detail": {
            "type": "string",
            "format": "uuid",
            "description": "ID CK6 Detail."
          },
          "idJenisKemasan": {
            "type": "integer",
            "description": "ID jenis kemasan."
          },
          "idJenisKoli": {
            "type": "integer",
            "description": "ID jenis koli."
          },
          "idMerk": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk."
          },
          "jumlahBarang": {
            "type": "integer",
            "description": "Jumlah barang."
          },
          "jumlahCukai": {
            "type": "number",
            "description": "Jumlah cukai."
          },
          "jumlahKemasan": {
            "type": "integer",
            "description": "Jumlah kemasan."
          },
          "jumlahKoli": {
            "type": "integer",
            "description": "Jumlah koli."
          },
          "keterangan": {
            "type": "string",
            "description": "Keterangan."
          },
          "namaJenisKemasan": {
            "type": "string",
            "description": "Nama jenis kemasan."
          },
          "namaJenisKoli": {
            "type": "string",
            "description": "Nama jenis koli."
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
            "description": "Uraian."
          }
        },
        "required": [
          "idCk6Detail",
          "idJenisKemasan",
          "idJenisKoli",
          "idMerk",
          "jumlahBarang",
          "jumlahCukai",
          "jumlahKemasan",
          "jumlahKoli",
          "keterangan",
          "namaJenisKemasan",
          "namaJenisKoli",
          "namaMerk",
          "satuanBarang",
          "tarifCukai",
          "uraian"
        ]
      }
    }
  },
  "required": [
    "alamatPemasok",
    "alamatPemberitahu",
    "alamatTujuan",
    "caraPelunasan",
    "flagImpor",
    "flagTransaksi",
    "idCaraPelunasan",
    "idCk6Header",
    "idJenisBkc",
    "idJenisIdentitasPemasok",
    "idJenisIdentitasTujuan",
    "idStatusCukai",
    "idStatusPemasok",
    "idStatusTujuan",
    "jenisIdentitasPemasok",
    "jenisIdentitasTujuan",
    "kodeKantor",
    "kodeKantorPemasok",
    "kodeKantorTujuan",
    "lainnya",
    "namaJenisBkc",
    "namaKantorPemasok",
    "namaKantorTujuan",
    "namaPemasok",
    "namaPemberitahu",
    "namaTujuan",
    "nilaiTransaksi",
    "noIdentitasPemberitahu",
    "nomorAju",
    "nomorCk6",
    "nomorIdentitasPemasok",
    "nomorIdentitasTujuan",
    "nomorInvoice",
    "nomorSuratJalan",
    "rencanaTanggalPengangkutan",
    "statusCukai",
    "statusPemasok",
    "statusTujuan",
    "tanggalAju",
    "tanggalCk6",
    "tanggalInvoice",
    "tanggalSuratJalan"
    ]
}

Example Request : Update Draft CK-6

--boundary
Content-Disposition: form-data; name="alamatPemasok"

JALAN KELAPA SAWIT XIII BLOK BF NOMOR 1 SEKTOR 1B GADING SERPONG
--boundary
Content-Disposition: form-data; name="alamatPemberitahu"

JALAN KELAPA SAWIT XIII BLOK BF NOMOR 1 SEKTOR 1B GADING SERPONG
--boundary
Content-Disposition: form-data; name="alamatTujuan"

Jalan Panglima Sudirman Nomor 39 Kelurahan Ngaglik Kecamatan Batu Kota Batu
--boundary
Content-Disposition: form-data; name="caraPelunasan"

Pembayaran
--boundary
Content-Disposition: form-data; name="flagImpor"

N
--boundary
Content-Disposition: form-data; name="flagTransaksi"

N
--boundary
Content-Disposition: form-data; name="idCaraPelunasan"

1
--boundary
Content-Disposition: form-data; name="idCk6Header"

60a34d8f-1a00-4a6a-b592-0f5b0594416a
--boundary
Content-Disposition: form-data; name="idJenisBkc"

2
--boundary
Content-Disposition: form-data; name="idJenisIdentitasPemasok"

1
--boundary
Content-Disposition: form-data; name="idJenisIdentitasTujuan"

1
--boundary
Content-Disposition: form-data; name="idStatusCukai"

2
--boundary
Content-Disposition: form-data; name="idStatusPemasok"

4
--boundary
Content-Disposition: form-data; name="idStatusTujuan"

3
--boundary
Content-Disposition: form-data; name="jenisIdentitasPemasok"

NPPBKC
--boundary
Content-Disposition: form-data; name="jenisIdentitasTujuan"

NPPBKC
--boundary
Content-Disposition: form-data; name="kodeKantor"

150300
--boundary
Content-Disposition: form-data; name="kodeKantorPemasok"

150300
--boundary
Content-Disposition: form-data; name="kodeKantorTujuan"

070600
--boundary
Content-Disposition: form-data; name="lainnya"

TGHJK
--boundary
Content-Disposition: form-data; name="namaJenisBkc"

MMEA
--boundary
Content-Disposition: form-data; name="namaKantorPemasok"

KPPBC TANGERANG
--boundary
Content-Disposition: form-data; name="namaKantorTujuan"

KPPBC TMC MALANG
--boundary
Content-Disposition: form-data; name="namaPemasok"

WAROENG SENPAI CV
--boundary
Content-Disposition: form-data; name="namaPemberitahu"

YUDI
--boundary
Content-Disposition: form-data; name="namaTujuan"

WARUNG WOW KWB PD
--boundary
Content-Disposition: form-data; name="nilaiTransaksi"

0
--boundary
Content-Disposition: form-data; name="noIdentitasPemberitahu"

0940310485036000
--boundary
Content-Disposition: form-data; name="nomorAju"

0090/TESJGXZ
--boundary
Content-Disposition: form-data; name="nomorCk6"

XS-90
--boundary
Content-Disposition: form-data; name="nomorIdentitasPemasok"

0940310485036000150342
--boundary
Content-Disposition: form-data; name="nomorIdentitasTujuan"

0822103644628000070642
--boundary
Content-Disposition: form-data; name="nomorInvoice"

098765
--boundary
Content-Disposition: form-data; name="nomorSuratJalan"

098/JGC
--boundary
Content-Disposition: form-data; name="rencanaTanggalPengangkutan"

2024-01-08
--boundary
Content-Disposition: form-data; name="statusCukai"

Sudah Dilunasi
--boundary
Content-Disposition: form-data; name="statusPemasok"

Tempat Penjualan Eceran
--boundary
Content-Disposition: form-data; name="statusTujuan"

Penyalur
--boundary
Content-Disposition: form-data; name="tanggalAju"

2024-01-08
--boundary
Content-Disposition: form-data; name="tanggalCk6"

2024-01-08
--boundary
Content-Disposition: form-data; name="tanggalInvoice"

2024-01-08
--boundary
Content-Disposition: form-data; name="tanggalSuratJalan"

2024-01-08
--boundary
Content-Disposition: form-data; name="details[0].idCk6Detail"

c43ef7f5-27e0-405d-a640-f82a87afde4e
--boundary
Content-Disposition: form-data; name="details[0].idJenisKemasan"

2
--boundary
Content-Disposition: form-data; name="details[0].idJenisKoli"

1
--boundary
Content-Disposition: form-data; name="details[0].idMerk"

10e9cd71-8177-4274-8223-954ef4f2115e
--boundary
Content-Disposition: form-data; name="details[0].jumlahBarang"

9000
--boundary
Content-Disposition: form-data; name="details[0].jumlahCukai"

200000
--boundary
Content-Disposition: form-data; name="details[0].jumlahKemasan"

900
--boundary
Content-Disposition: form-data; name="details[0].jumlahKoli"

0987654
--boundary
Content-Disposition: form-data; name="details[0].keterangan"

Perbaikan Draft
--boundary
Content-Disposition: form-data; name="details[0].namaJenisKemasan"

Botol
--boundary
Content-Disposition: form-data; name="details[0].namaJenisKoli"

Drum
--boundary
Content-Disposition: form-data; name="details[0].namaMerk"

HOKI BOLD >>> 12 KRETEK FILTER
--boundary
Content-Disposition: form-data; name="details[0].satuanBarang"

ml
--boundary
Content-Disposition: form-data; name="details[0].tarifCukai"

2
--boundary
Content-Disposition: form-data; name="details[0].uraian"

HOKI BOLD >>> 12 KRETEK FILTER; 12 ml; Gol SKM
--boundary--

Validation Rules

Field

Rules

idCk6Header

Harus merupakan UUID yang valid.

rencanaTanggalPengangkutan

Harus dalam format YYYY-MM-DD

tanggalAju

Harus dalam format YYYY-MM-DD

tanggalCk6

Harus dalam format YYYY-MM-DD

tanggalInvoice

Harus dalam format YYYY-MM-DD

tanggalSuratJalan

Harus dalam format YYYY-MM-DD

details[0].idCk6Detail

Harus merupakan UUID yang valid.

details[0].idMerk

Harus merupakan UUID yang valid.

details[0].jumlahBarang

Harus berupa angka positif

details[0].jumlahCukai

Harus berupa angka positif

details[0].jumlahKemasan

Harus berupa angka positif

details[0].jumlahKoli

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
        "nomorIdentitasPemasok": "0940310485036000150342",
        "namaPemasok": "WAROENG SENPAI CV",
        "idCk6Header": "60a34d8f-1a00-4a6a-b592-0f5b0594416a",
        "alamatPemasok": "JALAN KELAPA SAWIT XIII BLOK BF NOMOR 1 SEKTOR 1B GADING SERPONG",
        "kodeKantorPemasok": "150300",
        "namaKantorPemasok": "KPPBC TANGERANG",
        "statusPemasok": "Tempat Penjualan Eceran",
        "idJenisIdentitasTujuan": 1,
        "jenisIdentitasTujuan": "NPPBKC",
        "nomorIdentitasTujuan": "0822103644628000070642",
        "namaTujuan": "WARUNG WOW KWB PD",
        "alamatTujuan": "Jalan Panglima Sudirman Nomor 39 Kelurahan Ngaglik Kecamatan Batu Kota Batu ",
        "kodeKantorTujuan": "070600",
        "namaKantorTujuan": "KPPBC TMC MALANG",
        "statusTujuan": "Penyalur",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "nomorInvoice": "098765",
        "tanggalInvoice": "2024-01-08",
        "idAlatAngkut": null,
        "namaAlatAngkut": null,
        "nomorAlatAngkut": null,
        "tanggalRencanaAngkut": null,
        "jangkaWaktuAngkut": null,
        "namaPemberitahu": "YUDI",
        "tanggalPemberitahuan": null,
        "idKotaPemberitahu": null,
        "namaKotaPemberitahu": null,
        "nomorCk6": "XS-90",
        "nomorAju": "0090/TESJGXZ",
        "flagImpor": "N",
        "kodeKantor": "150300",
        "caraPelunasan": "Pembayaran",
        "statusCukai": "Sudah Dilunasi",
        "lainnya": "TGHJK",
        "noIdentitasPemberitahu": "0940310485036000",
        "alamatPemberitahu": "JALAN KELAPA SAWIT XIII BLOK BF NOMOR 1 SEKTOR 1B GADING SERPONG",
        "tanggalCk6": "2024-01-08",
        "tanggalAju": "2024-01-08",
        "rencanaTanggalPengangkutan": "2024-01-08",
        "idCaraPelunasan": 1,
        "idStatusCukai": 2,
        "idStatusPemasok": 4,
        "idStatusTujuan": 3,
        "nilaiTransaksi": 0,
        "flagTransaksi": "N",
        "nomorSuratJalan": "098/JGC",
        "tanggalSuratJalan": "2024-01-08",
        "details": [
            {
                "idCk6Detail": "c43ef7f5-27e0-405d-a640-f82a87afde4e",
                "idMerk": "10e9cd71-8177-4274-8223-954ef4f2115e",
                "namaMerk": "HOKI BOLD >>> 12 KRETEK FILTER",
                "seri": null,
                "idJenisKoli": 1,
                "namaJenisKoli": "Drum",
                "jumlahKoli": 987654,
                "nomorKoli": null,
                "jumlahKemasan": 900,
                "jumlahBarang": 9000,
                "hjePerKemasan": null,
                "uraian": "HOKI BOLD >>> 12 KRETEK FILTER; 12 ml; Gol SKM",
                "keterangan": "Perbaikan Draft",
                "idJenisKemasan": 2,
                "namaJenisKemasan": "Botol",
                "satuanBarang": "ml",
                "tarifCukai": 2,
                "jumlahCukai": 200000
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