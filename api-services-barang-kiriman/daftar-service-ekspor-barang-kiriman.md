# Daftar Service Ekspor Barang Kiriman

Memuat list service modul Ekspor Barang Kiriman

Anda dapat mengakses API Service pada link berikut:

  * **Development**

> URL Dev: [https://apisdev-gw.beacukai.go.id/h2h-ebk-parser-service/openapi](http://web.archive.org/web/20251119081159/https://apisdev-gw.beacukai.go.id/h2h-ebk-parser-service/openapi)

  * **Production**

> URL Prod: [https://apis-gw.beacukai.go.id/h2h-ebk-parser-service/openapi](http://web.archive.org/web/20251119081159/https://apisdev-gw.beacukai.go.id/h2h-ebk-parser-service/openapi)

Kirim Data CN Ekspor

`POST` `{API_URL}/cn`

 _Endpoint_ yang digunakan untuk mengirim dokumen CN Ekspor

**Contoh JSON Kirim :**

```json
 [
  {
    "jenisAju": "11",
    "jenisEkspor": "1",
    "nomorBarangKiriman": "050320250001",
    "tanggalBarangKiriman": "2024-06-04",
    "kantor": "050100",
    "tps": "GRHA",
    "negaraTujuan": "MY",
    "incoterm": "CIF",
    "valuta": "USD",
    "biayaAngkut": 10000000,
    "npwpPemberitahu": "123456789012345",
    "namaPemberitahu": "BERKAT JAYA BERSAUDARA",
    "namaPengirim": "Pengirim",
    "alamatPengirim": "alamat Pengirim",
    "jenisIdentitasPengirim": "3",
    "nomorIdentitasPengirim": "020664868085000",
    "teleponPegirim": "0812231XX",
    "daerahAsalBarang": "1173",
    "namaPenerima": "nama penerima",
    "alamatPenerima": "alamat penerima",
    "namaMarketplace": "nama marketplace",
    "identitasMarketPlace": "nomor identitas marketplace",
    "namaSaranaPengangkut": "Harapan Jaya",
    "nomorVoyFlight": "001-047CC",
    "caraAngkut": "2",
    "fob": 10000,
    "nilaiBk": 0,
    "kodeKategoriEkspor": "41",
    "cnBarangList": [
      {
        "seri": 1,
        "kodeHs": "01022910",
        "fob": 58500,
        "jumlahSatuan": 90,
        "jumlahKemasan": 12,
        "satuanBarang": "MBR",
        "kemasanBarag": "HG",
        "bruto": 5,
        "uraian": "uraian barang 1"
      },
      {
        "seri": 2,
        "kodeHs": "01022910",
        "fob": 58500,
        "jumlahSatuan": 85,
        "jumlahKemasan": 2,
        "satuanBarang": "MBR",
        "kemasanBarag": "HG",
        "bruto": 10,
        "uraian": "uraian barang 2"
      }
    ],
    "cnDokumenList": [
      {
        "seri": 2,
        "dokumen": "920",
        "nomor": "120/KME.09/2024",
        "tanggal": "2024-06-04",
        "kantor": "040300"
      },
      {
        "seri": 1,
        "dokumen": "960",
        "nomor": "VC/KME.09/2024",
        "tanggal": "2024-06-04",
        "kantor": "040300"
      }
    ],
    "cnBarangDokumenList": [
      {
        "seriBarang": 1,
        "seriDokumen": 2
      },
      {
        "seriBarang": 2,
        "seriDokumen": 1
      }
    ],
    "cnBarangTarifList": [
      {
        "seriBarang": 1,
        "kodeHs": "33073000",
        "jenisTarif": "1",
        "tarif": 7.5,
        "jenisPungutan": "BK",
        "hargaEkspor": 2000,
        "nilai": 55000500
      }
    ],
    "cnSuratList": [
      {
        "jumlahSurat": 1,
        "bruto": 10,
        "nomorBarang": "test",
        "negaraTujuan": "MY",
        "namaPengirim": "test",
        "alamatPengirim": "test",
        "namaPenerima": "test",
        "alamatPenerima": "test",
        "jenisSurat": 1
      }
    ]
  }
]

Kirim Data PKBK Ekspor

`POST` `{API_URL}/pkbk`

 _Endpoint_ yang digunakan untuk mengirim dokumen PKBK Ekspor

**Contoh JSON Kirim :**

[
  {
    "nomorAju": "20250305000P1",
    "npwpKonsol": "123456789012345",
    "namaKonsol": "PT MONANG SIANIPAR ABADI",
    "alamatKonsol": "ALAMAT KONSOLIDATOR",
    "kantor": "040300",
    "negaraTujuan": "MY",
    "nomorVoyFlight": "012-174D",
    "namaSaranaPengangkut": "BERKAT MAKMUR INDONESIA",
    "nomorPetiKemas": "AAAA1234",
    "jumlahPengemas": 1,
    "jumlahKemasan": 10,
    "cnList": [
      {
        "nomorBarangKiriman": "CNE-EXCEL-110720241604",
        "tanggalBarangKiriman": "2024-06-04",
        "nomorCn": "ACY152",
        "tanggalCn": "2024-06-27",
        "nomorNpe": "npe",
        "tanggalNpe": "2024-06-27"
      }
    ]
  }
]

Kirim Data Excel CN-PKBK

`POST` `{API_URL}/excel`

 _Endpoint_ yang digunakan untuk mengirim dokumen CN / PKBK dalam format excel

Get Respon berdasarkan Tanggal

`GET` `{API_URL}/respon-per-tanggal?tanggal=`

_Endpoint_ yang digunakan untuk mendapatkan respon pada tanggal tertentu atas 1 entitas PPYD/PJT (dilengkapi dengan cetakan npe dalam format base64)

Get Respon berdasarkan Tanggal Barang

`GET` `{API_URL}/respon-tanggal-barang?tanggal=`

_Endpoint_ yang digunakan untuk mendapatkan respon, status, dan reject pada tanggal tertentu atas 1 entitas PPYD/PJT (tanpa cetakan npe)

{
  "respon": [
    {
      "nomorAju": "CNE01150020240808005125310",
      "nomorBarang": "324234",
      "tanggalBarang": "2024-08-14T00:00:00.000+07:00",
      "npwpPemberitahu": "123456789012345",
      "pengirim": "1231231231 - ADAWD",
      "nomorDaftar": null,
      "tanggalDaftar": null,
      "listReject": [
        {
          "waktu": "2024-08-14T11:05:17.809+07:00",
          "uraian": "BERAT BRUTO TIDAK BOLEH LEBIH DARI 30KG"
        }
      ],
      "listRespon": [],
      "listStatus": [
        {
          "status": "100 - DOKUMEN DITERIMA UNTUK DIPROSES BEA CUKAI ",
          "waktu": "2024-08-08T00:51:25.238+07:00"
        },
        {
          "status": "202 - PROSES VALIDASI SISTEM BEA CUKAI",
          "waktu": "2024-08-08T00:51:25.238+07:00"
        },
        {
          "status": "900 - REJECT VALIDASI",
          "waktu": "2024-08-14T11:05:17.813+07:00"
        }
      ]
    },
    {
      "nomorAju": "CNE00900020240823160500492",
      "nomorBarang": "CNE-202408230003",
      "tanggalBarang": "2024-08-14T00:00:00.000+07:00",
      "npwpPemberitahu": "123456789012345",
      "pengirim": "13246546 - Pengirim",
      "nomorDaftar": "XXBRHF",
      "tanggalDaftar": "2024-08-23T00:00:00.000+07:00",
      "listReject": [],
      "listRespon": [
        {
          "tanggalRespon": "2024-08-23T16:09:11.711+07:00",
          "nomorRespon": "TCZME2null2024",
          "respon": "3015 - RESPON NOTA PELAYANAN EKSPOR"
        }
      ],
      "listStatus": [
        {
          "status": "202 - PROSES VALIDASI SISTEM BEA CUKAI",
          "waktu": "2024-08-23T16:05:00.182+07:00"
        },
        {
          "status": "100 - DOKUMEN DITERIMA UNTUK DIPROSES BEA CUKAI ",
          "waktu": "2024-08-23T16:05:00.182+07:00"
        },
        {
          "status": "203 - SELESAI VALIDASI SISTEM BEA CUKAI ",
          "waktu": "2024-08-23T16:05:01.960+07:00"
        },
        {
          "status": "314 - PENJALURAN",
          "waktu": "2024-08-23T16:05:01.964+07:00"
        },
        {
          "status": "316 - PENERBITAN NPE",
          "waktu": "2024-08-23T16:09:11.695+07:00"
        },
        {
          "status": "931 - PENELITIAN PERMOHONAN PEMBATALAN",
          "waktu": "2024-08-27T12:21:19.555+07:00"
        },
        {
          "status": "415 - GATE - IN",
          "waktu": "2024-09-15T00:00:13.212+07:00"
        }
      ]
    },
    {
      "nomorAju": "CNE00900020240823160500394",
      "nomorBarang": "CNE-202408230002",
      "tanggalBarang": "2024-08-14T00:00:00.000+07:00",
      "npwpPemberitahu": "123456789012345",
      "pengirim": "13246546 - Pengirim",
      "nomorDaftar": "UGGNHP",
      "tanggalDaftar": "2024-08-23T00:00:00.000+07:00",
      "listReject": [],
      "listRespon": [
        {
          "tanggalRespon": "2024-08-23T16:09:25.170+07:00",
          "nomorRespon": "ED8OJRnull2024",
          "respon": "3015 - RESPON NOTA PELAYANAN EKSPOR"
        }
      ],
      "listStatus": [
        {
          "status": "100 - DOKUMEN DITERIMA UNTUK DIPROSES BEA CUKAI ",
          "waktu": "2024-08-23T16:05:00.182+07:00"
        },
        {
          "status": "202 - PROSES VALIDASI SISTEM BEA CUKAI",
          "waktu": "2024-08-23T16:05:00.182+07:00"
        },
        {
          "status": "203 - SELESAI VALIDASI SISTEM BEA CUKAI ",
          "waktu": "2024-08-23T16:05:01.386+07:00"
        },
        {
          "status": "314 - PENJALURAN",
          "waktu": "2024-08-23T16:05:01.389+07:00"
        },
        {
          "status": "316 - PENERBITAN NPE",
          "waktu": "2024-08-23T16:09:25.154+07:00"
        },
        {
          "status": "415 - GATE - IN",
          "waktu": "2024-09-15T00:00:13.242+07:00"
        }
      ]
    },
    {
      "nomorAju": "CNE00900020240823160500229",
      "nomorBarang": "CNE-202408230001",
      "tanggalBarang": "2024-08-14T00:00:00.000+07:00",
      "npwpPemberitahu": "123456789012345",
      "pengirim": "13246546 - Pengirim",
      "nomorDaftar": "DFWBAI",
      "tanggalDaftar": "2024-08-23T00:00:00.000+07:00",
      "listReject": [],
      "listRespon": [
        {
          "tanggalRespon": "2024-08-23T16:09:34.474+07:00",
          "nomorRespon": "QUSETEnull2024",
          "respon": "3015 - RESPON NOTA PELAYANAN EKSPOR"
        }
      ],
      "listStatus": [
        {
          "status": "202 - PROSES VALIDASI SISTEM BEA CUKAI",
          "waktu": "2024-08-23T16:05:00.182+07:00"
        },
        {
          "status": "100 - DOKUMEN DITERIMA UNTUK DIPROSES BEA CUKAI ",
          "waktu": "2024-08-23T16:05:00.182+07:00"
        },
        {
          "status": "203 - SELESAI VALIDASI SISTEM BEA CUKAI ",
          "waktu": "2024-08-23T16:05:00.802+07:00"
        },
        {
          "status": "314 - PENJALURAN",
          "waktu": "2024-08-23T16:05:00.810+07:00"
        },
        {
          "status": "316 - PENERBITAN NPE",
          "waktu": "2024-08-23T16:09:34.442+07:00"
        },
        {
          "status": "415 - GATE - IN",
          "waktu": "2024-09-13T13:20:58.593+07:00"
        },
        {
          "status": "415 - GATE - IN",
          "waktu": "2024-09-15T00:00:13.317+07:00"
        }
      ]
    }
  ]
}

Get Respon berdasarkan Nomor Aju atau Nomor Barang

`GET` `{API_URL}/respon-per-dokumen?nomorAju=`

_Endpoint_ yang digunakan untuk mendapatkan respon, status, dan reject pada tanggal tertentu atas 1 nomor aju atau nomor barang

Last updated 5 months ago
```