# Detail Data Draft CK-6

## 

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail data draft CK-6 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

## 

### Path API

`GET` `{API_URL}/portal/ck6/detail-draft-dokumen?idCk6Header={idCk6Header}`

## 

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

## 

Parameter

| Field | Type | Description |
| --- | --- | --- |
| `Example Value` | `idCk6Header` | String |

## 

Parameter Example

`GET` `{API_URL}/portal/ck6/detail-draft-dokumen?idCk6Header=1694cbed-285a-46cb-85df-b846cae578e2`

## 

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "idCk6Header": "1694cbed-285a-46cb-85df-b846cae578e2",
    "idProses": null,
    "nomorCk6": "254",
    "tanggalCk6": "2023-11-29T00:00:00.000+00:00",
    "nomorAju": "987",
    "tanggalAju": "2023-11-15T00:00:00.000+00:00",
    "idJenisIdentitasPemasok": null,
    "jenisIdentitasPemasok": "NPPBKC",
    "nomorIdentitasPemasok": "0315330522512001060842",
    "namaPemasok": "PT. SEMERU BAKTI SENTOSA (QQ KTV)",
    "alamatPemasok": "JL. PANDANARAN NO. 6",
    "kodeKantorPemasok": "060800",
    "namaKantorPemasok": "KPPBC SEMARANG",
    "idStatusPemasok": 4,
    "statusPemasok": "Tempat Penjualan Eceran",
    "idJenisIdentitasTujuan": 1,
    "jenisIdentitasTujuan": "NPPBKC",
    "nomorIdentitasTujuan": "0014539407415000150312",
    "namaTujuan": "PANJANG JIWO PT",
    "alamatTujuan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
    "kodeKantorTujuan": "150300",
    "namaKantorTujuan": "KPPBC TANGERANG",
    "idStatusTujuan": 10,
    "statusTujuan": "Kawasan Pabean / TPS / TPB",
    "idJenisBkc": 2,
    "namaJenisBkc": "MMEA",
    "nomorInvoice": "985",
    "tanggalInvoice": "2023-11-23T00:00:00.000+00:00",
    "idAlatAngkut": 0,
    "namaAlatAngkut": "string",
    "nomorAlatAngkut": "string",
    "tanggalRencanaAngkut": "2023-10-13T00:00:00.000+00:00",
    "jangkaWaktuAngkut": 0,
    "namaPemberitahu": "Jack The Ripper",
    "noIdentitasPemberitahu": "746",
    "alamatPemberitahu": "Street Alabama, No 87",
    "tanggalPemberitahuan": "2023-11-23T00:00:00.000+00:00",
    "idKotaPemberitahu": 0,
    "namaKotaPemberitahu": "string",
    "idCk6Online": null,
    "waktuRekam": "2023-11-16T23:51:21.265+00:00",
    "flagImpor": "Y",
    "kodeKantor": "060800",
    "idCaraPelunasan": 1,
    "caraPelunasan": "Pembayaran",
    "idStatusCukai": 1,
    "statusCukai": "Belum Dilunasi",
    "flagTransaksi": "N",
    "nilaiTransaksi": 0,
    "lainnya": "Agak Laen",
    "rencanaTanggalPengangkutan": "2023-11-29T17:00:00.000+00:00",
    "nomorPersetujuanPerbaikan": null,
    "tanggalPersetujuanPerbaikan": null,
    "kodeUploadDasarPerbaikan": null,
    "nomorPersetujuanPembatalan": null,
    "tanggalPersetujuanPembatalan": null,
    "kodeUploadDasarPembatalan": null,
    "alasanPembatalan": null,
    "flagDraft": "Y",
    "kodeUploadLainnya": null,
    "nomorSuratJalan": null,
    "tanggalSuratJalan": null,
    "details": [
      {
        "idCk6Detail": "0591d8d8-9952-4e57-b448-68ab20f224d7",
        "idCk6Header": "1694cbed-285a-46cb-85df-b846cae578e2",
        "idMerk": "05390e9b-ca98-6c00-e064-0021f60abd54",
        "namaMerk": "Rokok Elektrik Bentoel Distribusi Utama 4",
        "seri": "-",
        "idJenisKoli": 1,
        "namaJenisKoli": "354",
        "jumlahKoli": 800,
        "nomorKoli": "-",
        "jumlahKemasan": 450,
        "jumlahBarang": 450,
        "uraian": "REL, CAIR SISTEM TERBUKA, Rokok Elektrik Bentoel Distribusi Utama 4, Isi 2 ml",
        "keterangan": "I'm Atomic",
        "idJenisKemasan": 1,
        "namaJenisKemasan": "Kaleng",
        "satuanBarang": "ml",
        "tarifCukai": 6392,
        "jumlahCukai": 345000
      }
    ]
  }
}

## 

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

[PreviousUpdate Draft CK-6](api-service-cukai/perdagangan/update-draft-ck-6.md)[NextProduksi](api-service-cukai/produksi.md)

Last updated 8 months ago

Was this helpful?
```