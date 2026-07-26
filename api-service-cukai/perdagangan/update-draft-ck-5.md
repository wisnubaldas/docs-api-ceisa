# Update Draft CK-5

### Introduction

  * Purpose: API ini digunakan untuk rubah draft CK-5

  * Overview: Proses rubah draft CK-5 mensyaratkan 2 object data dalam bentuk form yaitu Header dan Detail

### Path API

`POST` `{API_URL}/portal/ck5/update-draft`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Endpoint ini menerima parameter berikut dalam form data:` | Header Section |
| `Parameter Name` | `Type` | Description |
| `Example Value` | `idJenisPemberitahuan` | Integer |
| `ID dari jenis pemberitahuan` | `11` | idCk5Header |
| `String` | `ID header CK5` | 12b754ce-7a4f-4048-b51b-680b055869a3 |
| `idNppbkcAsal` | `String` | ID NPPBKC asal |
| `0499af9b-f53b-40c7-b1f8-9b16c9f89b76` | `idNppbkcTujuan` | String |
| `ID NPPBKC tujuan` | `fe3c9198-1af7-05e6-e054-0021f60abd54` | nppbkcAsal |
| `String` | `Nomor NPPBKC asal` | 0014539407415000150312 |
| `caraPelunasan` | `String` | Cara pelunasan cukai |
| `Pelekatan Pita Cukai` | `nomorIdentitasAsal` | String |
| `Nomor identitas asal` | `0014539407415000150312` | nomorIdentitasTujuan |
| `String` | `Nomor identitas tujuan` | 0669986374654000070613 |
| `idJenisBkc` | `Integer` | ID jenis BKC |
| `2` | `kantorAju` | String |
| `Nama kantor ajukan` | `KPPBC TANGERANG` | kodeKantor |
| `String` | `Kode kantor` | 150300 |
| `nomorAju` | `String` | Nomor aju |
| `123` | `tanggalAju` | Date |
| `Tanggal aju` | `2024-08-20` | tanggalCk5 |
| `Date` | `Tanggal CK5` | 2024-08-20 |
| `namaJenisBkc` | `String` | Nama jenis BKC |
| `MMEA` | `flagImpor` | String |
| `Penanda impor (Y/N)` | `N` | idCaraPelunasan |
| `Integer` | `ID cara pelunasan cukai` | 2 |
| `statusCukai` | `String` | Status cukai |
| `Sudah Dilunasi` | `idStatusCukai` | Integer |
| `ID status cukai` | `2` | jenisPemberitahuan |
| `String` | `Jenis pemberitahuan` | 1.1. Dibayar - Tunai |
| `statusAsal` | `String` | Status asal |
| `Pabrik` | `kodeKantorAsal` | String |
| `Kode kantor asal` | `150300` | namaKantorAsal |
| `String` | `Nama kantor asal` | KPPBC TANGERANG |
| `idStatusAsal` | `Integer` | ID status asal |
| `1` | `jenisIdentitasAsal` | String |
| `Jenis identitas asal` | `NPPBKC` | idJenisIdentitasAsal |
| `Integer` | `ID jenis identitas asal` | 1 |
| `idJenisIdentitasTujuan` | `Integer` | ID jenis identitas tujuan |
| `1` | `namaPerusahaanAsal` | String |
| `Nama perusahaan asal` | `PANJANG JIWO PT` | alamatPerusahaanAsal |
| `String` | `Alamat perusahaan asal` | Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten |
| `kodeKantorTujuan` | `String` | Kode kantor tujuan |
| `70600` | `namaKantorTujuan` | String |
| `Nama kantor tujuan` | `KPPBC TMC MALANG` | statusTujuan |
| `String` | `Status tujuan` | Pabrik |
| `idStatusTujuan` | `Integer` | ID status tujuan |
| `1` | `jenisIdentitasTujuan` | String |
| `Jenis identitas tujuan` | `NPPBKC` | namaTujuan |
| `String` | `Nama tujuan` | DEMANG JAYA PR |
| `alamatTujuan` | `String` | Alamat tujuan |
| `Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang` | `flagTransaksi` | String |
| `Penanda transaksi (Y/N)` | `N` | nomorSuratJalan |
| `String` | `Nomor surat jalan` | laksda12312 |
| `tanggalSuratJalan` | `Date` | Tanggal surat jalan |
| `2024-05-21` | `namaPemberitahu` | String |
| `Nama pemberitahu` | `REZHA` | nomorIdentitasPemberitahu |
| `String` | `Nomor identitas pemberitahu` | 1374024808880004 |
| `Detail Section` | `Parameter Name` | Type |
| `Description` | `Example Value` | details[0].idCk5Detail |
| `String` | `ID detail CK5` | cca87b00-f74a-4cee-a046-44b430312491 |
| `details[0].idCk5Header` | `String` | ID header CK5 detail |
| `12b754ce-7a4f-4048-b51b-680b055869a3` | `details[0].tarifCukai` | Integer |
| `Tarif cukai per unit` | `2` | details[0].hje |
| `Integer` | `Harga jual eceran` | 0 |
| `details[0].idMerk` | `String` | ID merk |
| `10e9cd71-8177-4274-8223-954ef4f2115e` | `details[0].namaMerk` | String |
| `Nama merk` | `HOKI BOLD >>> 12 KRETEK FILTER 1` | details[0].isiPerKemasan |
| `Integer` | `Isi per kemasan (volume atau unit per kemasan)` | 12 |
| `details[0].jenisKoli` | `String` | Jenis kemasan |
| `Jerigen` | `details[0].jumlahBarangLhpAsal` | Integer |
| `Jumlah barang LHP asal` | `0` | details[0].jumlahBarangLhpTujuan |
| `Integer` | `Jumlah barang LHP tujuan` | 0 |
| `details[0].seri` | `Integer` | Seri barang |
| `0` | `details[0].jumlahBarang` | Float |
| `Jumlah barang` | `0.01` | details[0].uraianJenisBarang |
| `String` | `Uraian jenis barang` | 0 |
| `details[0].jenisSatuanBarang` | `String` | Jenis satuan barang |
| `liter` | `details[0].keterangan` | String |
| `Keterangan tambahan` | `TEST` | details[0].jumlahKemasan |
| `Integer` | `Jumlah kemasan` | 1 |
| `details[0].jumlahCukai` | `Float` | Jumlah cukai yang harus dibayar |
| `0.02` | `details[0].nilaiTransaksi` | Integer |
| `Nilai transaksi` | `0` | details[0].flagTransaksi |
| `Integer` | `Penanda transaksi (Y/N)` | 0 |
| `details[0].namaJenisKemasan` | `String` | Nama jenis kemasan |
| `Botol` | `details[0].idJenisKemasan` | Integer |
| `ID jenis kemasan` | `2` | details[0].idCk5DetailRincian |
| `String` | `ID rincian detail CK5` | eecbfc97-6204-4b31-94a8-1f5a608a9fa0 |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Schema Update Draft CK-5",
  "properties": {
    "idJenisPemberitahuan": {
      "type": "string",
      "description": "ID jenis pemberitahuan"
    },
    "idCk5Header": {
      "type": "string",
      "format": "uuid",
      "description": "ID header CK5"
    },
    "idNppbkcAsal": {
      "type": "string",
      "format": "uuid",
      "description": "ID NPPBKC asal"
    },
    "idNppbkcTujuan": {
      "type": "string",
      "format": "uuid",
      "description": "ID NPPBKC tujuan"
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
    "nomorIdentitasTujuan": {
      "type": "string",
      "description": "Nomor identitas tujuan"
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
    "idJenisIdentitasTujuan": {
      "type": "string",
      "description": "ID jenis identitas tujuan"
    },
    "namaPerusahaanAsal": {
      "type": "string",
      "description": "Nama perusahaan asal"
    },
    "alamatPerusahaanAsal": {
      "type": "string",
      "description": "Alamat perusahaan asal"
    },
    "kodeKantorTujuan": {
      "type": "string",
      "description": "Kode kantor tujuan"
    },
    "namaKantorTujuan": {
      "type": "string",
      "description": "Nama kantor tujuan"
    },
    "statusTujuan": {
      "type": "string",
      "description": "Status tujuan"
    },
    "idStatusTujuan": {
      "type": "string",
      "description": "ID status tujuan"
    },
    "jenisIdentitasTujuan": {
      "type": "string",
      "description": "Jenis identitas tujuan"
    },
    "namaTujuan": {
      "type": "string",
      "description": "Nama tujuan"
    },
    "alamatTujuan": {
      "type": "string",
      "description": "Alamat tujuan"
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
    "details": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "idCk5Detail": {
            "type": "string",
            "format": "uuid",
            "description": "ID detail CK5"
          },
          "idCk5Header": {
            "type": "string",
            "format": "uuid",
            "description": "UUID header CK5"
          },
          "tarifCukai": {
            "type": "number",
            "description": "Tarif cukai"
          },
          "hje": {
            "type": "number",
            "description": "Harga jual eceran"
          },
          "idMerk": {
            "type": "string",
            "format": "uuid",
            "description": "ID merk"
          },
          "namaMerk": {
            "type": "string",
            "description": "Nama merk"
          },
          "isiPerKemasan": {
            "type": "number",
            "description": "Isi per kemasan"
          },
          "jenisKoli": {
            "type": "string",
            "description": "Jenis koli"
          },
          "jumlahBarangLhpAsal": {
            "type": "number",
            "description": "Jumlah barang LHP asal"
          },
          "jumlahBarangLhpTujuan": {
            "type": "number",
            "description": "Jumlah barang LHP tujuan"
          },
          "seri": {
            "type": "string",
            "description": "Seri barang"
          },
          "jumlahBarang": {
            "type": "number",
            "description": "Jumlah barang"
          },
          "uraianJenisBarang": {
            "type": "string",
            "description": "Uraian jenis barang"
          },
          "jenisSatuanBarang": {
            "type": "string",
            "description": "Jenis satuan barang"
          },
          "keterangan": {
            "type": "string",
            "description": "Keterangan barang"
          },
          "jumlahKemasan": {
            "type": "number",
            "description": "Jumlah kemasan"
          },
          "jumlahCukai": {
            "type": "number",
            "description": "Jumlah cukai"
          },
          "nilaiTransaksi": {
            "type": "number",
            "description": "Nilai transaksi"
          },
          "flagTransaksi": {
            "type": "string",
            "description": "Flag transaksi"
          },
          "namaJenisKemasan": {
            "type": "string",
            "description": "Nama jenis kemasan"
          },
          "idJenisKemasan": {
            "type": "number",
            "description": "ID jenis kemasan"
          },
          "idCk5DetailRincian": {
            "type": "string",
            "format": "uuid",
            "description": "ID detail rincian CK5"
          }
        },
        "required": [
          "idCk5Detail", 
          "idCk5Header", 
          "tarifCukai", 
          "hje", "idMerk", 
          "namaMerk", 
          "isiPerKemasan", 
          "jenisKoli", 
          "jumlahBarangLhpAsal", 
          "jumlahBarangLhpTujuan", 
          "seri", 
          "jumlahBarang", 
          "uraianJenisBarang", 
          "jenisSatuanBarang", 
          "keterangan", 
          "jumlahKemasan", 
          "jumlahCukai", 
          "nilaiTransaksi", 
          "flagTransaksi", 
          "namaJenisKemasan", 
          "idJenisKemasan", 
          "idCk5DetailRincian"
        ]
      }
    }
  },
  "required": [
    "idJenisPemberitahuan", 
    "idCk5Header", 
    "idNppbkcAsal", 
    "idNppbkcTujuan",
    "idNppbkcTujuan",
    "nppbkcAsal",
    "caraPelunasan",
    "nomorIdentitasAsal",
    "nomorIdentitasTujuan",
    "idJenisBkc",
    "kantorAju",
    "kodeKantor",
    "nomorAju",
    "tanggalAju",
    "tanggalCk5",
    "namaJenisBkc",
    "flagImpor",
    "idCaraPelunasan",
    "idStatusCukai",
    "jenisPemberitahuan",
    "statusAsal",
    "kodeKantorAsal",
    "namaKantorAsal",
    "idStatusAsal",
    "jenisIdentitasAsal",
    "idJenisIdentitasAsal",
    "idJenisIdentitasTujuan",
    "namaPerusahaanAsal",
    "alamatPerusahaanAsal",
    "kodeKantorTujuan",
    "namaKantorTujuan",
    "statusTujuan",
    "idStatusTujuan",
    "jenisIdentitasTujuan",
    "namaTujuan",
    "alamatTujuan",
    "flagTransaksi",
    "nomorSuratJalan",
    "tanggalSuratJalan",
    "namaPemberitahu",
    "nomorIdentitasPemberitahu"
    ]
  }
}

Example Request : Update Draft CK-5

--boundary
Content-Disposition: form-data; name="idJenisPemberitahuan"

11
--boundary
Content-Disposition: form-data; name="idCk5Header"

12b754ce-7a4f-4048-b51b-680b055869a3
--boundary
Content-Disposition: form-data; name="idNppbkcAsal"

0499af9b-f53b-40c7-b1f8-9b16c9f89b76
--boundary
Content-Disposition: form-data; name="idNppbkcTujuan"

fe3c9198-1af7-05e6-e054-0021f60abd54
--boundary
Content-Disposition: form-data; name="nppbkcAsal"

0014539407415000150312
--boundary
Content-Disposition: form-data; name="caraPelunasan"

Pelekatan Pita Cukai
--boundary
Content-Disposition: form-data; name="nomorIdentitasAsal"

0014539407415000150312
--boundary
Content-Disposition: form-data; name="nomorIdentitasTujuan"

0669986374654000070613
--boundary
Content-Disposition: form-data; name="idJenisBkc"

2
--boundary
Content-Disposition: form-data; name="kantorAju"

KPPBC TANGERANG
--boundary
Content-Disposition: form-data; name="kodeKantor"

150300
--boundary
Content-Disposition: form-data; name="nomorAju"

123
--boundary
Content-Disposition: form-data; name="tanggalAju"

2024-08-20
--boundary
Content-Disposition: form-data; name="tanggalCk5"

2024-08-20
--boundary
Content-Disposition: form-data; name="namaJenisBkc"

MMEA
--boundary
Content-Disposition: form-data; name="flagImpor"

N
--boundary
Content-Disposition: form-data; name="idCaraPelunasan"

2
--boundary
Content-Disposition: form-data; name="statusCukai"

Sudah Dilunasi
--boundary
Content-Disposition: form-data; name="idStatusCukai"

2
--boundary
Content-Disposition: form-data; name="jenisPemberitahuan"

1.1. Dibayar - Tunai
--boundary
Content-Disposition: form-data; name="statusAsal"

Pabrik
--boundary
Content-Disposition: form-data; name="kodeKantorAsal"

150300
--boundary
Content-Disposition: form-data; name="namaKantorAsal"

KPPBC TANGERANG
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
Content-Disposition: form-data; name="idJenisIdentitasTujuan"

1
--boundary
Content-Disposition: form-data; name="namaPerusahaanAsal"

PANJANG JIWO PT
--boundary
Content-Disposition: form-data; name="alamatPerusahaanAsal"

Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten
--boundary
Content-Disposition: form-data; name="kodeKantorTujuan"

070600
--boundary
Content-Disposition: form-data; name="namaKantorTujuan"

KPPBC TMC MALANG
--boundary
Content-Disposition: form-data; name="statusTujuan"

Pabrik
--boundary
Content-Disposition: form-data; name="idStatusTujuan"

1
--boundary
Content-Disposition: form-data; name="jenisIdentitasTujuan"

NPPBKC
--boundary
Content-Disposition: form-data; name="namaTujuan"

DEMANG JAYA PR
--boundary
Content-Disposition: form-data; name="alamatTujuan"

Dusun Gumuk Mojo RT 46 RW 09 Kelurahan Wonokerto Kecamatan Bantur Kabupaten Malang
--boundary
Content-Disposition: form-data; name="flagTransaksi"

N
--boundary
Content-Disposition: form-data; name="nomorSuratJalan"

laksda12312
--boundary
Content-Disposition: form-data; name="tanggalSuratJalan"

2024-05-21
--boundary
Content-Disposition: form-data; name="namaPemberitahu"

REZHA
--boundary
Content-Disposition: form-data; name="nomorIdentitasPemberitahu"

1374024808880004
--boundary
Content-Disposition: form-data; name="details[0].idCk5Detail"

cca87b00-f74a-4cee-a046-44b430312491
--boundary
Content-Disposition: form-data; name="details[0].idCk5Header"

12b754ce-7a4f-4048-b51b-680b055869a3
--boundary
Content-Disposition: form-data; name="details[0].tarifCukai"

2
--boundary
Content-Disposition: form-data; name="details[0].hje"

0
--boundary
Content-Disposition: form-data; name="details[0].idMerk"

10e9cd71-8177-4274-8223-954ef4f2115e
--boundary
Content-Disposition: form-data; name="details[0].namaMerk"

HOKI BOLD >>> 12 KRETEK FILTER 1
--boundary
Content-Disposition: form-data; name="details[0].isiPerKemasan"

12
--boundary
Content-Disposition: form-data; name="details[0].jenisKoli"

Jerigen
--boundary
Content-Disposition: form-data; name="details[0].jumlahBarangLhpAsal"

0
--boundary
Content-Disposition: form-data; name="details[0].jumlahBarangLhpTujuan"

0
--boundary
Content-Disposition: form-data; name="details[0].seri"

0
--boundary
Content-Disposition: form-data; name="details[0].jumlahBarang"

0.01
--boundary
Content-Disposition: form-data; name="details[0].uraianJenisBarang"

0
--boundary
Content-Disposition: form-data; name="details[0].jenisSatuanBarang"

liter
--boundary
Content-Disposition: form-data; name="details[0].keterangan"

TEST
--boundary
Content-Disposition: form-data; name="details[0].jumlahKemasan"

1
--boundary
Content-Disposition: form-data; name="details[0].jumlahCukai"

0.02
--boundary
Content-Disposition: form-data; name="details[0].nilaiTransaksi"

0
--boundary
Content-Disposition: form-data; name="details[0].flagTransaksi"

0
--boundary
Content-Disposition: form-data; name="details[0].namaJenisKemasan"

Botol
--boundary
Content-Disposition: form-data; name="details[0].idJenisKemasan"

2
--boundary
Content-Disposition: form-data; name="details[0].idCk5DetailRincian"

eecbfc97-6204-4b31-94a8-1f5a608a9fa0
--boundary--

Validation Rules

idCk5Header

Harus merupakan UUID yang valid.

idNppbkcAsal

Harus merupakan UUID yang valid.

idNppbkcTujuan

Harus merupakan UUID yang valid.

tanggalAju

Harus dalam format YYYY-MM-DD

tanggalCk5

Harus dalam format YYYY-MM-DD

details[0].idCk5Detail

Harus merupakan UUID yang valid.

details[0].idCk5Header

Harus merupakan UUID yang valid.

details[0].idMerk

Harus merupakan UUID yang valid.

details[0].jumlahBarangLhpAsal

Harus berupa angka positif

details[0].jumlahBarangLhpTujuan

Harus berupa angka positif

details[0].seri

Harus berupa angka positif

details[0].jumlahBarang

Harus berupa angka positif

details[0].jumlahKemasan

Harus berupa angka positif

details[0].jumlahCukai

Harus berupa angka positif

details[0].nilaiTransaksi

Harus berupa angka positif

details[0].idCk5DetailRincian

Harus merupakan UUID yang valid.
```

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": ""
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