# Get Detail CK-2 dari CK-5

## 

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail CK-2 dari host to host CK-5 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

## 

### Path API

`GET` `{API_URL}/host-to-host/getDetailCK2dariCK5H2h?asalDokumenCk2={asalDokumenCk2}&idCk2Header={idCk2Header}&idDokPelengkapCk2Header={idDokPelengkapCk2Header}`

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

`GET` `{API_URL}/host-to-host/getDetailCK2dariCK5H2h?asalDokumenCk2=Dokumen%20A&idCk2Header=f5f497eb-01d0-4612-b387-30e2453e8f63&idDokPelengkapCk2Header=f47ac10b-58cc-4372-a567-0e02b2c3d480`

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
    "dokPemeriksaanCk2": [
      {
        "idDokPemeriksaanCk2": "0ad977fb-bc9c-42bf-926a-557084e4ffe7",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "189e8258-caab-4c88-9488-ec46f485abd8",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
        "nomorCk5": "001890",
        "tanggalCk5": "2022-02-10T00:00:00",
        "nomorBack1": "BACK1-12345789",
        "tanggalBack1": "2023-09-09T00:00:00",
        "nomorBaPenyegelan": "penyegelan 01",
        "tanggalBaPenyegelan": "2023-09-09T00:00:00",
        "tanggalPemeriksaan": "2023-09-09T00:00:00",
        "kesimpulanBack1": " Kesmpulan Back1",
        "nipPejabatBack1": "123456789012345679",
        "namaPejabatBack1": "John Smith",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "ece11aae-70c0-4c01-a50d-e85df04c1989",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "0baed040-ce8d-4e85-94e3-8fbf17ca93ab",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
        "nomorCk5": "001890",
        "tanggalCk5": "2022-02-10T00:00:00",
        "nomorBack1": "BACK1-12345789",
        "tanggalBack1": "2023-09-09T00:00:00",
        "nomorBaPenyegelan": "penyegelan 01",
        "tanggalBaPenyegelan": "2023-09-09T00:00:00",
        "tanggalPemeriksaan": "2023-09-09T00:00:00",
        "kesimpulanBack1": " Kesmpulan Back1",
        "nipPejabatBack1": "123456789012345679",
        "namaPejabatBack1": "John Smith",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "454e5f36-5a69-4022-a032-d700909863f1",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "54497c36-8da3-46f4-a268-460a15ff6c34",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
        "nomorCk5": "001890",
        "tanggalCk5": "2022-02-10T00:00:00",
        "nomorBack1": "BACK1-12345789",
        "tanggalBack1": "2023-09-09T00:00:00",
        "nomorBaPenyegelan": "penyegelan 01",
        "tanggalBaPenyegelan": "2023-09-09T00:00:00",
        "tanggalPemeriksaan": "2023-09-09T00:00:00",
        "kesimpulanBack1": " Kesmpulan Back1",
        "nipPejabatBack1": "123456789012345679",
        "namaPejabatBack1": "John Smith",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "313ab46b-ed0e-4b54-b9f8-acdc02f2b5e1",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "4a51831a-386c-4226-bc1c-7f2d0c756489",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
        "nomorCk5": "001890",
        "tanggalCk5": "2022-02-10T00:00:00",
        "nomorBack1": "BACK1-12345789",
        "tanggalBack1": "2023-09-09T00:00:00",
        "nomorBaPenyegelan": "penyegelan 01",
        "tanggalBaPenyegelan": "2023-09-09T00:00:00",
        "tanggalPemeriksaan": "2023-09-09T00:00:00",
        "kesimpulanBack1": " Kesmpulan Back1",
        "nipPejabatBack1": "123456789012345679",
        "namaPejabatBack1": "John Smith",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "1096bef4-ce4d-4fb8-a2be-e22cf2a905ec",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "d779b5c7-771b-4910-98aa-26b5967c1f27",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
        "nomorCk5": "001890",
        "tanggalCk5": "2022-02-10T00:00:00",
        "nomorBack1": "BACK1-12345789",
        "tanggalBack1": "2023-09-09T00:00:00",
        "nomorBaPenyegelan": "penyegelan 01",
        "tanggalBaPenyegelan": "2023-09-09T00:00:00",
        "tanggalPemeriksaan": "2023-09-09T00:00:00",
        "kesimpulanBack1": " Kesmpulan Back1",
        "nipPejabatBack1": "123456789012345679",
        "namaPejabatBack1": "John Smith",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "3c1b8501-9b14-422d-8a9e-7248d1c0d6ef",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "379566a0-3ecf-496b-a599-4b2676a1f5b8",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
        "nomorCk5": "001890",
        "tanggalCk5": "2022-02-10T00:00:00",
        "nomorBack1": "BACK1-12345789",
        "tanggalBack1": "2023-09-09T00:00:00",
        "nomorBaPenyegelan": "penyegelan 01",
        "tanggalBaPenyegelan": "2023-09-09T00:00:00",
        "tanggalPemeriksaan": "2023-09-09T00:00:00",
        "kesimpulanBack1": " Kesmpulan Back1",
        "nipPejabatBack1": "123456789012345679",
        "namaPejabatBack1": "John Smith",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "03c95b97-1f12-4e85-9f01-1cd1f8e4afd0",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "42759cdf-ec91-4e1a-b06a-53f859f12020",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
        "nomorCk5": "001890",
        "tanggalCk5": "2022-02-10T00:00:00",
        "nomorBack1": "BACK1-12345789",
        "tanggalBack1": "2023-09-09T00:00:00",
        "nomorBaPenyegelan": "penyegelan 01",
        "tanggalBaPenyegelan": "2023-09-09T00:00:00",
        "tanggalPemeriksaan": "2023-09-09T00:00:00",
        "kesimpulanBack1": " Kesmpulan Back1",
        "nipPejabatBack1": "123456789012345679",
        "namaPejabatBack1": "John Smith",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "331d3ee0-9e14-427a-98ad-005d73236026",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "9901aab6-18df-4bde-869b-e7db1513704e",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
        "nomorCk5": "001890",
        "tanggalCk5": "2022-02-10T00:00:00",
        "nomorBack1": "BACK1-12345789",
        "tanggalBack1": "2023-09-09T00:00:00",
        "nomorBaPenyegelan": "penyegelan 01",
        "tanggalBaPenyegelan": "2023-09-09T00:00:00",
        "tanggalPemeriksaan": "2023-09-09T00:00:00",
        "kesimpulanBack1": " Kesmpulan Back1",
        "nipPejabatBack1": "123456789012345679",
        "namaPejabatBack1": "John Smith",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "1c868453-169c-4bdc-8197-77427f1c4713",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "133707d4-44e0-4f9e-a1ee-2ee83bfc8e47",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
        "nomorCk5": "001890",
        "tanggalCk5": "2022-02-10T00:00:00",
        "nomorBack1": "BACK1-12345789",
        "tanggalBack1": "2023-09-09T00:00:00",
        "nomorBaPenyegelan": "penyegelan 01",
        "tanggalBaPenyegelan": "2023-09-09T00:00:00",
        "tanggalPemeriksaan": "2023-09-09T00:00:00",
        "kesimpulanBack1": " Kesmpulan Back1",
        "nipPejabatBack1": "123456789012345679",
        "namaPejabatBack1": "John Smith",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "cb8fff6d-1a50-411b-b5ce-a01ceaa27042",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "b334bc1e-8fd6-40ed-8fa0-d3e77f50d8ba",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
        "nomorCk5": "001890",
        "tanggalCk5": "2022-02-10T00:00:00",
        "nomorBack1": "BACK1-12345789",
        "tanggalBack1": "2023-09-09T00:00:00",
        "nomorBaPenyegelan": "penyegelan 01",
        "tanggalBaPenyegelan": "2023-09-09T00:00:00",
        "tanggalPemeriksaan": "2023-09-09T00:00:00",
        "kesimpulanBack1": " Kesmpulan Back1",
        "nipPejabatBack1": "123456789012345679",
        "namaPejabatBack1": "John Smith",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "3de62bdc-27e9-4e2a-afd7-68291590d6a4",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "6eb0561a-2461-4658-b5f0-b789bd0e7696",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "aa6c6ba3-18cf-467d-9fc5-baa3817ff005",
        "nomorCk5": "001890",
        "tanggalCk5": "2022-02-10T00:00:00",
        "nomorBack1": "BACK1-12345789",
        "tanggalBack1": "2023-09-09T00:00:00",
        "nomorBaPenyegelan": "penyegelan 01",
        "tanggalBaPenyegelan": "2023-09-09T00:00:00",
        "tanggalPemeriksaan": "2023-09-09T00:00:00",
        "kesimpulanBack1": " Kesmpulan Back1",
        "nipPejabatBack1": "123456789012345679",
        "namaPejabatBack1": "John Smith",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },
      {
        "idDokPemeriksaanCk2": "6dcb2594-366a-49ed-9eeb-3498da2c4758",
        "idDokPelengkapCk2Header": "f47ac10b-58cc-4372-a567-0e02b2c3d480",
        "idCk5Header": "4bd673b1-130a-47cb-bd55-c82e5a1ef02c",
        "nomorCk5": "384930",
        "tanggalCk5": "2023-10-20T00:00:00",
        "nomorBack1": "Back3-789",
        "tanggalBack1": "2023-09-04T00:00:00",
        "nomorBaPenyegelan": "BA789",
        "tanggalBaPenyegelan": "2023-09-05T00:00:00",
        "tanggalPemeriksaan": "2023-09-06T00:00:00",
        "kesimpulanBack1": "Kesimpulan3",
        "nipPejabatBack1": "345678901234567890",
        "namaPejabatBack1": "Pejabat C",
        "nomorSuratPerintah": null,
        "tanggalSuratPerintah": null
      },

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

[PreviousGet Cetak CK-3](api-service-cukai/pengembalian/get-cetak-ck-3.md)[NextGet Detail CK-2 dari PBCK-7](api-service-cukai/pengembalian/get-detail-ck-2-dari-pbck-7.md)

Last updated 9 months ago
```