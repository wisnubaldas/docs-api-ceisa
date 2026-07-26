# Get Detail CK-2 dari PBCK-7

## 

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail CK-2 dari host to host PBCK-7 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

## 

### Path API

`GET` `{API_URL}/host-to-host/getDetailCK2dariPBCK7H2h?asalDokumenCk2={asalDokumenCk2}&idCk2Header={idCk2Header}&idDokPelengkapCk2Header={idDokPelengkapCk2Header}`

## 

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

## 

Parameter

| Field | Type | Description |
| --- | --- | --- |
| `Example Value` | `asalDokumenCk2` | String |
| `Dokumen asal CK-2` | `Dokumen 20A` | idCk2Header |
| `String` | `Identifikasi unik untuk header CK-2` | f5f497eb-01d0-4612-b387-30e2453e8f63 |
| `idDokPelengkapCk2Header` | `String` | Identifikasi unik untuk dokumen pelengkap header CK-2 |

## 

Parameter Example

`GET` `{API_URL}/host-to-host/getDetailCK2dariPBCK7H2h?asalDokumenCk2=Dokumen%20A&idCk2Header=f5f497eb-01d0-4612-b387-30e2453e8f63&idDokPelengkapCk2Header=f47ac10b-58cc-4372-a567-0e02b2c3d480`

## 

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": {
    "ck2Header": null,
    "pelengkapCk2Header": {
      "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
      "kodeKantor": "009000",
      "namaKantor": "Kantor A",
      "idNppbkc": "97d170bc-f41f-4d8b-937e-73eac2c1c47b",
      "nppbkc": "NPPBKC124",
      "npwp": "1234567890123457",
      "namaPerusahaan": "Company XYZ",
      "alamatPerusahaan": "123 Main Street, City, Country",
      "idJenisBkc": 2,
      "namaJenisBkc": "MMEA",
      "asalDokumenCk2": "PBCK-7",
      "nomorPbck7": "string",
      "tanggalPbck7": "2023-10-14T00:00:00",
      "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
      "nomorCk5": "001890",
      "tanggalCk5": "2022-02-10T00:00:00",
      "nomorBack1": "string",
      "tanggalBack1": "2023-10-14T00:00:00",
      "nomorBaPenyegelan": "string",
      "tanggalBaPenyegelan": "2023-10-14T00:00:00",
      "tanggalPemeriksaan": "2023-10-14T00:00:00",
      "kesimpulanBack1": "string",
      "nipPejabatBack1": "123456789012345679",
      "namaPejabatBack1": "John Smith",
      "nomorPbck3": "string",
      "tanggalPbck3": "2023-10-14T00:00:00",
      "nomorBaBukaSegel": "string",
      "tanggalBaBukaSegel": "2023-10-14T00:00:00",
      "nomorTandaTerima": "TANDA-TERIMA-001",
      "tanggalTandaTerima": "2023-09-10T00:00:00",
      "nipTandaTerimaBack3": "123456789012345678",
      "namaTandaTerimaBack3": "Alice Johnson",
      "nomorKepPengawas": "string",
      "tanggalKepPengawas": "2023-10-14T00:00:00",
      "nomorSuratTugas": "string",
      "tanggalSuratTugas": "2023-10-14T00:00:00",
      "nomorSuratPersetujuan": "string",
      "tanggalSuratPersetujuan": "2023-10-14T00:00:00",
      "tanggalPemusnahan": "2023-10-14T00:00:00",
      "lokasiPemusnahan": "string",
      "nomorTolak": "1111",
      "tanggalTolak": "2023-10-18T00:00:00",
      "keterangan": "Keterangan A",
      "flagBatal": "Y",
      "idProses": "f47ac10b-58cc-4372-a567-0e02b2c3d482",
      "waktuRekam": "2023-09-03T14:45:00",
      "status": "Status B",
      "nipUpdate": "987654321098765431",
      "waktuUpdate": "2023-09-03T16:30:00",
      "nomorBack3": "string",
      "tanggalBack3": "2023-10-14T00:00:00",
      "lokasiBaBukaSegel": null
    },
    "pelengkapCk2Detail": [
      {
        "idDokPelengkapCk2Detail": "51fd3868-7031-4251-b5fa-a449918e04de",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idTarifMerkDetail": "462c1f87-5f64-41c0-a50d-c721c4ef84f5",
        "idMerk": "fec659a1-3385-4fe3-a902-24c9d17a5b80",
        "namaMerk": "SampleMerk",
        "idJenisProduksiBkc": 1,
        "kodeJenisProduksiBkc": "SampleType",
        "isiVolume": 1000,
        "hje": 1000000,
        "tarif": 2000,
        "idSeripita": 2,
        "namaSeripita": "3",
        "idGolonganBkc": null,
        "namaGolonganBkc": null,
        "tahunPita": 2023,
        "idCk1Detail": null,
        "idCk5Detail": null,
        "jumlahKepingDiberitahukan": 100,
        "cukaiDiberitahukan": 5000000,
        "jumlahBack1": null,
        "cukaiBack1": null,
        "jumlahBack3": null,
        "cukaiBack3": null
      }
    ],
    "detailCk2": []
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

[PreviousGet Detail CK-2 dari CK-5](api-service-cukai/pengembalian/get-detail-ck-2-dari-ck-5.md)[NextRekam CK-2 Asal PBCK-7](api-service-cukai/pengembalian/rekam-ck-2-asal-pbck-7.md)

Last updated 8 months ago

Was this helpful?
```