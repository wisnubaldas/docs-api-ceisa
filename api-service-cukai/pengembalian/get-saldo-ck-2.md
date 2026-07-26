# Get Saldo CK-2

## 

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail saldo CK-2 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

## 

### Path API

`GET` `{API_URL}/host-to-host/getViewSaldoCk2H2h?nppbkc=={nppbkc}`

## 

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

## 

Parameter

| Field | Type | Description |
| --- | --- | --- |
| `Example Value` | `nppbkc` | String |

## 

Parameter Example

`GET` `{API_URL}/host-to-host/getViewSaldoCk2H2h?nppbkc=0014539407415000150312`

## 

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": [
    {
      "header": {
        "idCk2Header": "f5f497eb-01d0-4612-b387-30e2453e8f64",
        "idDokPelengkapCk2Header": "ee898978-f723-4b10-84af-fd3db2d0ffec",
        "kodeKantor": "K0003",
        "namaKantor": "Company ABC",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "8765432109876543",
        "namaPerusahaan": "ABC Corporation",
        "alamatPerusahaan": "789 Oak St, City",
        "idJenisBkc": 3,
        "namaJenisBkc": "HT",
        "asalDokumenCk2": "Dokumen3",
        "nomorCk2": "CK2-20230003",
        "tanggalCk2": "2023-09-16T00:00:00",
        "tanggalLunas": "2023-10-31",
        "biayaPenggantiSeri1": 8000,
        "biayaPenggantiSeri2": 16000,
        "biayaPenggantiSeri3": 24000,
        "biayaPenggantiSeri4": 32000,
        "biayaPenggantiPembulatan": 4000,
        "totalCukai": 120000,
        "saldo": 40000,
        "nipPejabat": "987654321098765432",
        "namaPejabat": "Jane Smith",
        "idProses": "3df86bea-7d7a-44db-9b82-16cdaa369aed",
        "flagBatal": "Y",
        "status": "Pembatalan",
        "kodeBilling": "540231011007508",
        "nipUpdate": "987654321098765432",
        "waktuUpdate": "2023-09-12T14:43:39"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "6ad987d6-541d-4e5b-b253-faf6a976b3d2",
        "idDokumen": "f5f497eb-01d0-4612-b387-30e2453e8f64",
        "idNppbkc": "fe3c9198-1065-05e6-e054-0021f60abd54",
        "idJenisDokumen": 7,
        "namaJenisDokumen": "CK-3",
        "nomorDokumen": "INV987699",
        "tanggalDokumen": "2023-09-13T00:00:00",
        "saldo": 7000000,
        "flagAktif": "Y"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "4483eee4-8aec-4cdf-95d8-d4d675bf749f",
          "idSaldoPengurangCukaiHeader": "6ad987d6-541d-4e5b-b253-faf6a976b3d2",
          "kodeTransaksi": "D",
          "idJenisDokumen": 7,
          "namaJenisDokumen": "CK-3",
          "nomorDokumen": "INV987654",
          "tanggalDokumen": "2023-09-13T00:00:00",
          "cukaiTransaksi": 10000000,
          "cukaiSaldo": 10000000,
          "waktuTransaksi": "2023-09-14T08:07:32"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "66de3a73-90b5-480a-9faf-60c2da9e8f06",
        "idDokPelengkapCk2Header": "b304ce90-18e4-471f-87e6-1293a3937e66",
        "kodeKantor": "150300",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "0014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "CK-5",
        "nomorCk2": "CK2-1212",
        "tanggalCk2": "2023-12-12T00:00:00",
        "tanggalLunas": null,
        "biayaPenggantiSeri1": 51000,
        "biayaPenggantiSeri2": 0,
        "biayaPenggantiSeri3": 0,
        "biayaPenggantiSeri4": 0,
        "biayaPenggantiPembulatan": 51000,
        "totalCukai": 3060000,
        "saldo": 3060000,
        "nipPejabat": "197910101999031001",
        "namaPejabat": "ACHMAD ARMIN MUTTAQIN MAHULETTE",
        "idProses": "78ac094e-02ba-409f-a862-d6b63091f1ac",
        "flagBatal": "Y",
        "status": "Create Billing",
        "kodeBilling": null,
        "nipUpdate": null,
        "waktuUpdate": "2023-12-12T10:41:28"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "a49b99aa-67b7-416d-bf65-b56b23d7c480",
        "idDokumen": "66de3a73-90b5-480a-9faf-60c2da9e8f06",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 6,
        "namaJenisDokumen": "CK-2",
        "nomorDokumen": "CK2-1212",
        "tanggalDokumen": "2023-12-12T00:00:00",
        "saldo": 3060000,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "9d5a0f92-6fa3-4243-ad95-3b85e65047a6",
          "idSaldoPengurangCukaiHeader": "a49b99aa-67b7-416d-bf65-b56b23d7c480",
          "kodeTransaksi": "D",
          "idJenisDokumen": 6,
          "namaJenisDokumen": "CK-2",
          "nomorDokumen": "CK2-1212",
          "tanggalDokumen": "2023-12-12T00:00:00",
          "cukaiTransaksi": 3060000,
          "cukaiSaldo": 3060000,
          "waktuTransaksi": "2023-12-12T10:41:24"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "b54ea6c3-93f5-4ad5-9cf6-c3351232c9f1",
        "idDokPelengkapCk2Header": "21192512-25b9-4cf4-bf72-eee578d72049",
        "kodeKantor": "150300",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "0014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "PBCK-7",
        "nomorCk2": "Test-110",
        "tanggalCk2": "2023-12-26T00:00:00",
        "tanggalLunas": null,
        "biayaPenggantiSeri1": 30000,
        "biayaPenggantiSeri2": 0,
        "biayaPenggantiSeri3": 0,
        "biayaPenggantiSeri4": 0,
        "biayaPenggantiPembulatan": 30000,
        "totalCukai": 3168000,
        "saldo": 3168000,
        "nipPejabat": "199807152018011002",
        "namaPejabat": "'AMMAR AULIA AHMAD",
        "idProses": "d0220efc-a61b-4297-9f47-c5d297e92974",
        "flagBatal": "N",
        "status": "Create Billing",
        "kodeBilling": "540240216916679",
        "nipUpdate": null,
        "waktuUpdate": "2023-12-26T20:59:35"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "d7484cae-6a6a-43f2-ae8c-383d46415aaa",
        "idDokumen": "b54ea6c3-93f5-4ad5-9cf6-c3351232c9f1",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 6,
        "namaJenisDokumen": "CK-2",
        "nomorDokumen": "Test-110",
        "tanggalDokumen": "2023-12-26T00:00:00",
        "saldo": 3168000,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "86d5e83f-d1ec-4a79-b802-2b9f07d5ba07",
          "idSaldoPengurangCukaiHeader": "d7484cae-6a6a-43f2-ae8c-383d46415aaa",
          "kodeTransaksi": "D",
          "idJenisDokumen": 6,
          "namaJenisDokumen": "CK-2",
          "nomorDokumen": "Test-110",
          "tanggalDokumen": "2023-12-26T00:00:00",
          "cukaiTransaksi": 3168000,
          "cukaiSaldo": 3168000,
          "waktuTransaksi": "2023-12-26T20:49:53"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "1036eeb6-11c7-4ff3-9760-1d5d7da7f9d5",
        "idDokPelengkapCk2Header": "065f7831-39fa-4495-aad4-5aa25f878d3e",
        "kodeKantor": "150300",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "0014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "PBCK-7",
        "nomorCk2": "655432/KBC.0702/CK2/2024",
        "tanggalCk2": "2024-02-27T00:00:00",
        "tanggalLunas": null,
        "biayaPenggantiSeri1": 2700,
        "biayaPenggantiSeri2": 0,
        "biayaPenggantiSeri3": 0,
        "biayaPenggantiSeri4": 0,
        "biayaPenggantiPembulatan": 3000,
        "totalCukai": 3240,
        "saldo": 3240,
        "nipPejabat": "197910101999031001",
        "namaPejabat": "ACHMAD ARMIN MUTTAQIN MAHULETTE",
        "idProses": "9f573787-5d65-4b92-bc23-5f2659ccae99",
        "flagBatal": "N",
        "status": "Create Billing",
        "kodeBilling": null,
        "nipUpdate": null,
        "waktuUpdate": "2024-02-27T16:49:03"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "7b69ee3d-6f50-4f78-8ed0-587fc12c6e73",
        "idDokumen": "1036eeb6-11c7-4ff3-9760-1d5d7da7f9d5",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 6,
        "namaJenisDokumen": "CK-2",
        "nomorDokumen": "655432",
        "tanggalDokumen": "2024-02-27T00:00:00",
        "saldo": 3240,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "4cfbfaaf-788c-4ce3-8cce-fa866cdf18b8",
          "idSaldoPengurangCukaiHeader": "7b69ee3d-6f50-4f78-8ed0-587fc12c6e73",
          "kodeTransaksi": "D",
          "idJenisDokumen": 6,
          "namaJenisDokumen": "CK-2",
          "nomorDokumen": "655432",
          "tanggalDokumen": "2024-02-27T00:00:00",
          "cukaiTransaksi": 3240,
          "cukaiSaldo": 3240,
          "waktuTransaksi": "2024-02-27T16:49:02"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "cac91ff0-f34b-48c2-9add-c2ffedc14309",
        "idDokPelengkapCk2Header": "8cbd20f1-779b-4e44-bcc4-f532c5a286f3",
        "kodeKantor": "KNT456",
        "namaKantor": "DEF Corporation",
        "idNppbkc": "635133df-9df0-4c79-9e5e-97c88085a5f9",
        "nppbkc": "0014539407415000150312",
        "npwp": "014539407415000",
        "namaPerusahaan": "ABC Exporters",
        "alamatPerusahaan": "123 Elm Street",
        "idJenisBkc": 2,
        "namaJenisBkc": "Type-B",
        "asalDokumenCk2": "Export",
        "nomorCk2": "CK2-0888",
        "tanggalCk2": "2023-09-13T00:00:00",
        "tanggalLunas": "2023-09-15",
        "biayaPenggantiSeri1": 87654321,
        "biayaPenggantiSeri2": 98765432,
        "biayaPenggantiSeri3": 23456789,
        "biayaPenggantiSeri4": 34567890,
        "biayaPenggantiPembulatan": 12345678,
        "totalCukai": 5432109876,
        "saldo": 9876543210,
        "nipPejabat": "876543210123456789",
        "namaPejabat": "Alice Johnson",
        "idProses": "5597b5ad-59a8-4181-9760-ab79dda80a9c",
        "flagBatal": "N",
        "status": "Approved",
        "kodeBilling": "540231016756065",
        "nipUpdate": "876543210987654321",
        "waktuUpdate": "2023-09-13T06:40:44"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "012aa275-1db3-4bfa-adb8-17942d747db4",
        "idDokumen": "cac91ff0-f34b-48c2-9add-c2ffedc14309",
        "idNppbkc": "fe3c9198-1065-05e6-e054-0021f60abd54",
        "idJenisDokumen": 7,
        "namaJenisDokumen": "CK-3",
        "nomorDokumen": "INV987699",
        "tanggalDokumen": "2023-09-13T00:00:00",
        "saldo": 7000000,
        "flagAktif": "Y"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "ad6e818e-2f5c-4ab1-98c0-ca6998a30c64",
          "idSaldoPengurangCukaiHeader": "012aa275-1db3-4bfa-adb8-17942d747db4",
          "kodeTransaksi": "D",
          "idJenisDokumen": 7,
          "namaJenisDokumen": "CK-3",
          "nomorDokumen": "INV987654",
          "tanggalDokumen": "2023-09-13T00:00:00",
          "cukaiTransaksi": 10000000,
          "cukaiSaldo": 10000000,
          "waktuTransaksi": "2023-09-14T08:07:32"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "e42520ea-e6d8-49c8-9dfc-9d1713c875ad",
        "idDokPelengkapCk2Header": "9abf185d-f304-4dea-9069-7c852127ef5e",
        "kodeKantor": "150300",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "0014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "CK-5",
        "nomorCk2": "CK2-test1212",
        "tanggalCk2": "2023-12-12T00:00:00",
        "tanggalLunas": null,
        "biayaPenggantiSeri1": 34500,
        "biayaPenggantiSeri2": 0,
        "biayaPenggantiSeri3": 0,
        "biayaPenggantiSeri4": 0,
        "biayaPenggantiPembulatan": 35000,
        "totalCukai": 2070000,
        "saldo": 2070000,
        "nipPejabat": "196906091989121001",
        "namaPejabat": "ABDUL KARIM",
        "idProses": "538d54c1-57f8-4a5b-9f1d-5d43d4319cc7",
        "flagBatal": "N",
        "status": "Create Billing",
        "kodeBilling": null,
        "nipUpdate": null,
        "waktuUpdate": "2023-12-12T11:26:45"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "c6aec502-0d9f-4c9b-a560-69fa808d6973",
        "idDokumen": "e42520ea-e6d8-49c8-9dfc-9d1713c875ad",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 6,
        "namaJenisDokumen": "CK-2",
        "nomorDokumen": "CK2-test1212",
        "tanggalDokumen": "2023-12-12T00:00:00",
        "saldo": 2070000,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "82d2daec-c73a-4349-acad-ba3960946673",
          "idSaldoPengurangCukaiHeader": "c6aec502-0d9f-4c9b-a560-69fa808d6973",
          "kodeTransaksi": "D",
          "idJenisDokumen": 6,
          "namaJenisDokumen": "CK-2",
          "nomorDokumen": "CK2-test1212",
          "tanggalDokumen": "2023-12-12T00:00:00",
          "cukaiTransaksi": 2070000,
          "cukaiSaldo": 2070000,
          "waktuTransaksi": "2023-12-12T11:26:42"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "79c9227c-dac7-4316-bfbf-4dee45b381a9",
        "idDokPelengkapCk2Header": "c00e8468-ed0a-45da-a79e-e715fd8ecff7",
        "kodeKantor": "050600",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "CK-2",
        "nomorCk2": "000001",
        "tanggalCk2": "2023-09-13T00:00:00",
        "tanggalLunas": "2023-09-15",
        "biayaPenggantiSeri1": 1000000,
        "biayaPenggantiSeri2": 1000000,
        "biayaPenggantiSeri3": 1000000,
        "biayaPenggantiSeri4": 1000000,
        "biayaPenggantiPembulatan": 1000000,
        "totalCukai": 2000000,
        "saldo": 10000000,
        "nipPejabat": "123123123\n",
        "namaPejabat": "Rizki",
        "idProses": "5597b5ad-59a8-4181-9760-ab79dda80a9c",
        "flagBatal": "N",
        "status": "Approved",
        "kodeBilling": "540231016756065",
        "nipUpdate": "3242434534535",
        "waktuUpdate": "2023-11-01T09:34:09"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "7c4c6394-211c-43e0-a708-b8c24ea59a51",
        "idDokumen": "79c9227c-dac7-4316-bfbf-4dee45b381a9",
        "idNppbkc": "fe3c9198-1065-05e6-e054-0021f60abd54",
        "idJenisDokumen": 7,
        "namaJenisDokumen": "CK-3",
        "nomorDokumen": "INV987699",
        "tanggalDokumen": "2023-09-13T00:00:00",
        "saldo": 7000000,
        "flagAktif": "Y"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "da66f22c-19af-402d-9284-0d420a2ebbb6",
          "idSaldoPengurangCukaiHeader": "7c4c6394-211c-43e0-a708-b8c24ea59a51",
          "kodeTransaksi": "D",
          "idJenisDokumen": 7,
          "namaJenisDokumen": "CK-3",
          "nomorDokumen": "INV987654",
          "tanggalDokumen": "2023-09-13T00:00:00",
          "cukaiTransaksi": 10000000,
          "cukaiSaldo": 10000000,
          "waktuTransaksi": "2023-09-14T08:07:32"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "a7080ce0-f7e3-4ac5-8454-2ab7dbbde3d6",
        "idDokPelengkapCk2Header": "ba4a9bbc-5990-4afa-acb7-f273140757ad",
        "kodeKantor": "050600",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "CK-2",
        "nomorCk2": "000001",
        "tanggalCk2": "2023-09-13T00:00:00",
        "tanggalLunas": "2023-09-15",
        "biayaPenggantiSeri1": 1000000,
        "biayaPenggantiSeri2": 1000000,
        "biayaPenggantiSeri3": 1000000,
        "biayaPenggantiSeri4": 1000000,
        "biayaPenggantiPembulatan": 1000000,
        "totalCukai": 2000000,
        "saldo": 10000000,
        "nipPejabat": "123123",
        "namaPejabat": "Furqon",
        "idProses": "5597b5ad-59a8-4181-9760-ab79dda80a9c",
        "flagBatal": "N",
        "status": "Approved",
        "kodeBilling": "540231016756065",
        "nipUpdate": "3242434534535",
        "waktuUpdate": "2023-11-01T09:34:09"
      },
      "saldoHeader": null,
      "saldoDetail": null
    },
    {
      "header": {
        "idCk2Header": "d32613b8-6f73-421d-b520-df9cb35515ca",
        "idDokPelengkapCk2Header": "4eae7eca-9382-4ab1-bec1-6cfa74c6a893",
        "kodeKantor": "150300",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "0014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "CK-5",
        "nomorCk2": "Test",
        "tanggalCk2": "2023-12-26T00:00:00",
        "tanggalLunas": null,
        "biayaPenggantiSeri1": 300000,
        "biayaPenggantiSeri2": 0,
        "biayaPenggantiSeri3": 0,
        "biayaPenggantiSeri4": 0,
        "biayaPenggantiPembulatan": 300000,
        "totalCukai": 36000000,
        "saldo": 36000000,
        "nipPejabat": "199807152018011002",
        "namaPejabat": "'AMMAR AULIA AHMAD",
        "idProses": "32bb34fe-dca8-4067-82c2-b8ee75865897",
        "flagBatal": "N",
        "status": "Create Billing",
        "kodeBilling": null,
        "nipUpdate": null,
        "waktuUpdate": "2023-12-26T22:34:50"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "12a269ca-de6d-4b43-911e-c1a0bf7e8ef0",
        "idDokumen": "d32613b8-6f73-421d-b520-df9cb35515ca",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 6,
        "namaJenisDokumen": "CK-2",
        "nomorDokumen": "Test",
        "tanggalDokumen": "2023-12-26T00:00:00",
        "saldo": 36000000,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "490b3720-be56-40ef-a24e-073fefec46e8",
          "idSaldoPengurangCukaiHeader": "12a269ca-de6d-4b43-911e-c1a0bf7e8ef0",
          "kodeTransaksi": "D",
          "idJenisDokumen": 6,
          "namaJenisDokumen": "CK-2",
          "nomorDokumen": "Test",
          "tanggalDokumen": "2023-12-26T00:00:00",
          "cukaiTransaksi": 36000000,
          "cukaiSaldo": 36000000,
          "waktuTransaksi": "2023-12-26T22:25:00"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "35482571-affd-4cc6-931a-287eefba8898",
        "idDokPelengkapCk2Header": "9f28f506-cfc3-4143-8bbe-2964df7c399a",
        "kodeKantor": "050600",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "CK-2",
        "nomorCk2": "000001",
        "tanggalCk2": "2023-09-13T00:00:00",
        "tanggalLunas": "2023-09-15",
        "biayaPenggantiSeri1": 1000000,
        "biayaPenggantiSeri2": 2000000,
        "biayaPenggantiSeri3": 2000000,
        "biayaPenggantiSeri4": 2000000,
        "biayaPenggantiPembulatan": 2000000,
        "totalCukai": 3000000,
        "saldo": 10000000,
        "nipPejabat": "34324324324",
        "namaPejabat": "34324324324",
        "idProses": "5597b5ad-59a8-4181-9760-ab79dda80a9c",
        "flagBatal": "N",
        "status": "Approved",
        "kodeBilling": "534524353515",
        "nipUpdate": "3242434534535",
        "waktuUpdate": "2023-11-01T11:39:49"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "8b279e68-e830-49e7-b01b-9baa17758999",
        "idDokumen": "35482571-affd-4cc6-931a-287eefba8898",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 1,
        "namaJenisDokumen": "DOC004",
        "nomorDokumen": "000003",
        "tanggalDokumen": "2023-09-15T00:00:00",
        "saldo": 0,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "fa64dbc6-5b7c-4326-9ee0-861383f23b82",
          "idSaldoPengurangCukaiHeader": "8b279e68-e830-49e7-b01b-9baa17758999",
          "kodeTransaksi": "D",
          "idJenisDokumen": 7,
          "namaJenisDokumen": "CK-3",
          "nomorDokumen": "INV987654",
          "tanggalDokumen": "2023-09-13T00:00:00",
          "cukaiTransaksi": 10000000,
          "cukaiSaldo": 10000000,
          "waktuTransaksi": "2023-09-14T08:07:32"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "d2356394-5f9a-435d-b89f-d657f8910db3",
        "idDokPelengkapCk2Header": "6c13b0ab-596b-4bf0-bdc6-3f0254f39ede",
        "kodeKantor": "050600",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "CK-2",
        "nomorCk2": "000001",
        "tanggalCk2": "2023-09-13T00:00:00",
        "tanggalLunas": "2023-09-15",
        "biayaPenggantiSeri1": 1000000,
        "biayaPenggantiSeri2": 2000000,
        "biayaPenggantiSeri3": 2000000,
        "biayaPenggantiSeri4": 2000000,
        "biayaPenggantiPembulatan": 2000000,
        "totalCukai": 3000000,
        "saldo": 10000000,
        "nipPejabat": "34324324324",
        "namaPejabat": "34324324324",
        "idProses": "5597b5ad-59a8-4181-9760-ab79dda80a9c",
        "flagBatal": "N",
        "status": "Approved",
        "kodeBilling": "534524353515",
        "nipUpdate": "3242434534535",
        "waktuUpdate": "2023-11-01T10:09:57"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "b157ce17-762e-4ec6-9cd3-f52bd883e398",
        "idDokumen": "d2356394-5f9a-435d-b89f-d657f8910db3",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 1,
        "namaJenisDokumen": "DOC004",
        "nomorDokumen": "000003",
        "tanggalDokumen": "2023-09-15T00:00:00",
        "saldo": 0,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "71fbf66f-90fb-43c8-a7d7-39c06da80dc4",
          "idSaldoPengurangCukaiHeader": "b157ce17-762e-4ec6-9cd3-f52bd883e398",
          "kodeTransaksi": "D",
          "idJenisDokumen": 7,
          "namaJenisDokumen": "CK-3",
          "nomorDokumen": "INV987654",
          "tanggalDokumen": "2023-09-13T00:00:00",
          "cukaiTransaksi": 10000000,
          "cukaiSaldo": 10000000,
          "waktuTransaksi": "2023-09-14T08:07:32"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "eba96c5d-6681-46f9-ae8f-01a7e4c7ebfe",
        "idDokPelengkapCk2Header": "26065a9e-3205-42b9-acbb-f5b6f673c5c6",
        "kodeKantor": "050600",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 3,
        "namaJenisBkc": "HT",
        "asalDokumenCk2": "CK-2",
        "nomorCk2": "000001",
        "tanggalCk2": "2023-09-13T00:00:00",
        "tanggalLunas": "2023-09-15",
        "biayaPenggantiSeri1": 1000000,
        "biayaPenggantiSeri2": 1000000,
        "biayaPenggantiSeri3": 1000000,
        "biayaPenggantiSeri4": 1000000,
        "biayaPenggantiPembulatan": 1000000,
        "totalCukai": 2000000,
        "saldo": 10000000,
        "nipPejabat": "1234567890",
        "namaPejabat": "1234567890",
        "idProses": "5597b5ad-59a8-4181-9760-ab79dda80a9c",
        "flagBatal": "N",
        "status": "Approved",
        "kodeBilling": "540231016756065",
        "nipUpdate": "3242434534535",
        "waktuUpdate": "2023-11-01T09:34:09"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "4634abb0-acd5-4147-84f8-c64d67c45a63",
        "idDokumen": "eba96c5d-6681-46f9-ae8f-01a7e4c7ebfe",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 1,
        "namaJenisDokumen": "DOC004",
        "nomorDokumen": "000003",
        "tanggalDokumen": "2023-09-15T00:00:00",
        "saldo": 0,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "0072a35b-9ed4-437b-b5f0-6c9e0b9d005e",
          "idSaldoPengurangCukaiHeader": "4634abb0-acd5-4147-84f8-c64d67c45a63",
          "kodeTransaksi": "D",
          "idJenisDokumen": 7,
          "namaJenisDokumen": "CK-3",
          "nomorDokumen": "INV987654",
          "tanggalDokumen": "2023-09-13T00:00:00",
          "cukaiTransaksi": 10000000,
          "cukaiSaldo": 10000000,
          "waktuTransaksi": "2023-09-14T08:07:32"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "57177f39-5784-449d-a1d0-584494f34ce4",
        "idDokPelengkapCk2Header": "dfe857a3-0e92-47c3-a519-665eb060a38f",
        "kodeKantor": "150300",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "0014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "CK-5",
        "nomorCk2": "CK2-1312",
        "tanggalCk2": "2023-12-13T00:00:00",
        "tanggalLunas": null,
        "biayaPenggantiSeri1": 36000,
        "biayaPenggantiSeri2": 0,
        "biayaPenggantiSeri3": 0,
        "biayaPenggantiSeri4": 0,
        "biayaPenggantiPembulatan": 36000,
        "totalCukai": 2160000,
        "saldo": 2160000,
        "nipPejabat": "198306202004121001",
        "namaPejabat": "FACHRIZAL",
        "idProses": "748055fc-90c4-4bd9-b426-32dbe900cc64",
        "flagBatal": "N",
        "status": "Create Billing",
        "kodeBilling": null,
        "nipUpdate": null,
        "waktuUpdate": "2023-12-13T09:17:23"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "67ea442a-c5a8-4be4-99d5-8010a02ab736",
        "idDokumen": "57177f39-5784-449d-a1d0-584494f34ce4",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 6,
        "namaJenisDokumen": "CK-2",
        "nomorDokumen": "CK2-1312",
        "tanggalDokumen": "2023-12-13T00:00:00",
        "saldo": 2160000,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "9bdb0ccd-17db-4abd-987e-b11d003a262b",
          "idSaldoPengurangCukaiHeader": "67ea442a-c5a8-4be4-99d5-8010a02ab736",
          "kodeTransaksi": "D",
          "idJenisDokumen": 6,
          "namaJenisDokumen": "CK-2",
          "nomorDokumen": "CK2-1312",
          "tanggalDokumen": "2023-12-13T00:00:00",
          "cukaiTransaksi": 2160000,
          "cukaiSaldo": 2160000,
          "waktuTransaksi": "2023-12-13T09:17:20"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "93ecdcd9-52e6-425f-b30a-daf312a95d3a",
        "idDokPelengkapCk2Header": "f4acb6c5-a11d-49c3-a9ea-881d0728344b",
        "kodeKantor": "150300",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "0014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "PBCK-7",
        "nomorCk2": "k-2",
        "tanggalCk2": "2023-12-08T00:00:00",
        "tanggalLunas": null,
        "biayaPenggantiSeri1": 300,
        "biayaPenggantiSeri2": 0,
        "biayaPenggantiSeri3": 0,
        "biayaPenggantiSeri4": 0,
        "biayaPenggantiPembulatan": 1000,
        "totalCukai": 2,
        "saldo": 2,
        "nipPejabat": "197801042003121003",
        "namaPejabat": "BUDIONO",
        "idProses": "0f3c13dc-08ac-4ffc-a9e1-c4ffe0d1ca14",
        "flagBatal": "N",
        "status": "Create Billing",
        "kodeBilling": null,
        "nipUpdate": null,
        "waktuUpdate": "2023-12-08T14:53:44"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "0a198b2b-7aa5-413f-b724-f27399a80462",
        "idDokumen": "93ecdcd9-52e6-425f-b30a-daf312a95d3a",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 6,
        "namaJenisDokumen": "CK-2",
        "nomorDokumen": "k-2",
        "tanggalDokumen": "2023-12-08T00:00:00",
        "saldo": 2,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "5850b1d9-c757-428e-901a-57e154ee5c86",
          "idSaldoPengurangCukaiHeader": "0a198b2b-7aa5-413f-b724-f27399a80462",
          "kodeTransaksi": "D",
          "idJenisDokumen": 6,
          "namaJenisDokumen": "CK-2",
          "nomorDokumen": "k-2",
          "tanggalDokumen": "2023-12-08T00:00:00",
          "cukaiTransaksi": 2,
          "cukaiSaldo": 2,
          "waktuTransaksi": "2023-12-08T14:53:43"
        }
      ]
    },
    {
      "header": {
        "idCk2Header": "3e977fa6-5569-495d-95df-be6eb84a65d0",
        "idDokPelengkapCk2Header": "cf3d0408-7732-4745-ab16-d5f1d7cff9b3",
        "kodeKantor": "150300",
        "namaKantor": "KPPBC TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "0014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "asalDokumenCk2": "CK-5",
        "nomorCk2": "CK2-1112",
        "tanggalCk2": "2023-12-11T00:00:00",
        "tanggalLunas": null,
        "biayaPenggantiSeri1": 40500,
        "biayaPenggantiSeri2": 0,
        "biayaPenggantiSeri3": 0,
        "biayaPenggantiSeri4": 0,
        "biayaPenggantiPembulatan": 41000,
        "totalCukai": 2530764,
        "saldo": 2530764,
        "nipPejabat": "199602182015121004",
        "namaPejabat": "ARDHI FEBRI FERDYAN",
        "idProses": "4dbce21b-8540-42bd-8bcb-245ddcb98b82",
        "flagBatal": "Y",
        "status": "Create Billing",
        "kodeBilling": null,
        "nipUpdate": null,
        "waktuUpdate": "2023-12-11T21:09:38"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "88e096fd-d461-44df-b55e-634194ae4c2a",
        "idDokumen": "3e977fa6-5569-495d-95df-be6eb84a65d0",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 6,
        "namaJenisDokumen": "CK-2",
        "nomorDokumen": "CK2-1112",
        "tanggalDokumen": "2023-12-11T00:00:00",
        "saldo": 2530764,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "b8b2fce9-7a03-41ab-be87-47104ba50775",
          "idSaldoPengurangCukaiHeader": "88e096fd-d461-44df-b55e-634194ae4c2a",
          "kodeTransaksi": "D",
          "idJenisDokumen": 6,
          "namaJenisDokumen": "CK-2",
          "nomorDokumen": "CK2-1112",
          "tanggalDokumen": "2023-12-11T00:00:00",
          "cukaiTransaksi": 2530764,
          "cukaiSaldo": 2530764,
          "waktuTransaksi": "2023-12-11T21:09:36"
        }
      ]
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

[PreviousGet Pengurang Cukai](api-service-cukai/pengembalian/get-pengurang-cukai.md)[NextGet Saldo CK-3](api-service-cukai/pengembalian/get-saldo-ck-3.md)

Last updated 9 months ago
```