# Get Saldo CK-3

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi detail saldo CK-3 berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/host-to-host/getViewSaldoCk3H2h?nppbkc={nppbkc}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0014539407415000150312 |

`GET` `{API_URL}/host-to-host/getViewSaldoCk3H2h?nppbkc=0014539407415000150312`

### Response

200

```json
{
  "message": "Success",
  "status": true,
  "data": [
    {
      "header": {
        "idCk3Header": "4d5fe85b-1406-4a71-a4b9-10f431647ce4",
        "idDokPelengkapCk3Header": "21f536a5-31b1-4ee1-a5d3-61e2c864331e",
        "kodeKantor": "150300",
        "namaKantor": "KPPBC TMP A TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "0014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "nomorCk3": "ck-003/BC.43/2024",
        "tanggalCk3": "2024-03-08T00:00:00",
        "tanggalLunas": null,
        "biayaPenggantiSeri1": 0,
        "biayaPenggantiSeri2": 0,
        "biayaPenggantiSeri3": 0,
        "biayaPenggantiSeri4": 0,
        "biayaPenggantiPembulatan": 0,
        "totalCukai": 1800,
        "saldo": 1800,
        "nipPejabat": "199204012013101003",
        "namaPejabat": "AHLAN HANIF BAIHAKI",
        "idProses": "c96944b5-066e-4e63-8133-45b043f81823",
        "status": "Selesai",
        "kodeBilling": null,
        "nipUpdate": "111111111111111009",
        "waktuUpdate": "2024-03-08T14:12:59",
        "flagBatal": "N"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "06a7d12b-7424-403f-ad7d-27d2f11da654",
        "idDokumen": "4d5fe85b-1406-4a71-a4b9-10f431647ce4",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 7,
        "namaJenisDokumen": "CK-3",
        "nomorDokumen": "ck-003/BC.43/2024",
        "tanggalDokumen": "2024-03-08T00:00:00",
        "saldo": 1800,
        "flagAktif": "Y"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "d0d9799d-5ab4-40ed-b499-4d4c1ed8140b",
          "idSaldoPengurangCukaiHeader": "06a7d12b-7424-403f-ad7d-27d2f11da654",
          "kodeTransaksi": "D",
          "idJenisDokumen": 7,
          "namaJenisDokumen": "CK-3",
          "nomorDokumen": "ck-003/BC.43/2024",
          "tanggalDokumen": "2024-03-08T00:00:00",
          "cukaiTransaksi": 1800,
          "cukaiSaldo": 1800,
          "waktuTransaksi": "2024-03-08T07:12:59"
        }
      ]
    },
    {
      "header": {
        "idCk3Header": "8eb43eee-16af-4c77-99da-5d8044e89469",
        "idDokPelengkapCk3Header": "23ebd42c-b109-44dd-bb6e-18196e6cd075",
        "kodeKantor": "150300",
        "namaKantor": "KPPBC TMP A TANGERANG",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "0014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "nomorCk3": "ck-10/BC.43/2024",
        "tanggalCk3": "2024-02-28T00:00:00",
        "tanggalLunas": null,
        "biayaPenggantiSeri1": 0,
        "biayaPenggantiSeri2": 0,
        "biayaPenggantiSeri3": 0,
        "biayaPenggantiSeri4": 0,
        "biayaPenggantiPembulatan": 0,
        "totalCukai": 1800,
        "saldo": 1800,
        "nipPejabat": "197006131989121001",
        "namaPejabat": "DIDIT RUDY SETYAWAN",
        "idProses": "fa210307-ef61-4590-988e-46aaed6f8e7b",
        "status": "Selesai",
        "kodeBilling": null,
        "nipUpdate": "111111111111111009",
        "waktuUpdate": "2024-02-28T16:38:17",
        "flagBatal": "N"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "b9159421-cda3-4d03-8d88-f48610bea6c6",
        "idDokumen": "8eb43eee-16af-4c77-99da-5d8044e89469",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "idJenisDokumen": 7,
        "namaJenisDokumen": "CK-3",
        "nomorDokumen": "ck-10/BC.43/2024",
        "tanggalDokumen": "2024-02-28T00:00:00",
        "saldo": 1800,
        "flagAktif": "Y"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "81ec69d5-cc5f-4afa-b402-b18f63916ef7",
          "idSaldoPengurangCukaiHeader": "b9159421-cda3-4d03-8d88-f48610bea6c6",
          "kodeTransaksi": "D",
          "idJenisDokumen": 7,
          "namaJenisDokumen": "CK-3",
          "nomorDokumen": "ck-10/BC.43/2024",
          "tanggalDokumen": "2024-02-28T00:00:00",
          "cukaiTransaksi": 1800,
          "cukaiSaldo": 1800,
          "waktuTransaksi": "2024-02-28T09:38:17"
        }
      ]
    },
    {
      "header": {
        "idCk3Header": "398ec57d-9206-4069-abc8-fb68568df91c",
        "idDokPelengkapCk3Header": "bc53ed03-53d2-44bc-8518-0ecc085ae561",
        "kodeKantor": "070600",
        "namaKantor": "KPPBC TMC MALANG",
        "idNppbkc": "5acbed1d-031a-495d-9757-0249b459e912",
        "nppbkc": "0014539407415000150312",
        "npwp": "npwp01",
        "namaPerusahaan": "BENTOEL PRIMA, PT",
        "alamatPerusahaan": "alamat coba",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "nomorCk3": "0911CK3",
        "tanggalCk3": "2023-11-12T00:00:00",
        "tanggalLunas": "2023-12-11T00:00:00",
        "biayaPenggantiSeri1": 200,
        "biayaPenggantiSeri2": 300,
        "biayaPenggantiSeri3": 400,
        "biayaPenggantiSeri4": 500,
        "biayaPenggantiPembulatan": 600,
        "totalCukai": 300,
        "saldo": 200,
        "nipPejabat": "084755",
        "namaPejabat": "Romlii",
        "idProses": "323e4567-e89b-12d3-a456-426655440003",
        "status": "Pembatalan",
        "kodeBilling": "",
        "nipUpdate": "6485685",
        "waktuUpdate": "2023-11-01T00:00:00",
        "flagBatal": "Y"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "401faf78-7bf3-4b57-84ac-387f65246549",
        "idDokumen": "398ec57d-9206-4069-abc8-fb68568df91c",
        "idNppbkc": "5acbed1d-031a-495d-9757-0249b459e912",
        "idJenisDokumen": 2,
        "namaJenisDokumen": "CK-3",
        "nomorDokumen": "DOC001",
        "tanggalDokumen": "2023-11-02T00:00:00",
        "saldo": 10000,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "e6b939e7-01b2-4d80-abf5-b6b9840c7261",
          "idSaldoPengurangCukaiHeader": "401faf78-7bf3-4b57-84ac-387f65246549",
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
        "idCk3Header": "dcbd8ac6-8647-423c-9503-deb82bd535d4",
        "idDokPelengkapCk3Header": "af109e2d-ddd2-49e4-ac86-3e1ab4d64339",
        "kodeKantor": "070600",
        "namaKantor": "KPPBC TMC MALANG",
        "idNppbkc": "5acbed1d-031a-495d-9757-0249b459e912",
        "nppbkc": "0014539407415000150312",
        "npwp": "Np6600",
        "namaPerusahaan": "BENTOEL PRIMA, PT",
        "alamatPerusahaan": "alamatMerger",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "nomorCk3": "noCk3",
        "tanggalCk3": "2023-11-01T00:00:00",
        "tanggalLunas": "2023-12-01T00:00:00",
        "biayaPenggantiSeri1": 100,
        "biayaPenggantiSeri2": 200,
        "biayaPenggantiSeri3": 300,
        "biayaPenggantiSeri4": 400,
        "biayaPenggantiPembulatan": 500,
        "totalCukai": 200,
        "saldo": 100,
        "nipPejabat": "084755",
        "namaPejabat": "hasrullll",
        "idProses": "323e4567-e89b-12d3-a456-426655440003",
        "status": "menunggu",
        "kodeBilling": "",
        "nipUpdate": "6485685",
        "waktuUpdate": "2023-11-02T13:10:17",
        "flagBatal": "N"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "11d4ba22-c808-4769-99f6-735b4977c33d",
        "idDokumen": "dcbd8ac6-8647-423c-9503-deb82bd535d4",
        "idNppbkc": "5acbed1d-031a-495d-9757-0249b459e912",
        "idJenisDokumen": 1,
        "namaJenisDokumen": "Ck-3",
        "nomorDokumen": "000004",
        "tanggalDokumen": "2023-11-02T00:00:00",
        "saldo": 10000,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "176ae29e-20c9-453d-b0de-f44a5ee35ff4",
          "idSaldoPengurangCukaiHeader": "11d4ba22-c808-4769-99f6-735b4977c33d",
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
        "idCk3Header": "98ee0838-fbbd-4908-be43-ce0a3bb018c8",
        "idDokPelengkapCk3Header": "bc985c79-cbca-40af-b5a3-ec193be2e620",
        "kodeKantor": "07000",
        "namaKantor": "KPPBC TMC MALANG",
        "idNppbkc": "5acbed1d-031a-495d-9757-0249b459e912",
        "nppbkc": "0014539407415000150312",
        "npwp": "Np6600",
        "namaPerusahaan": "BENTOEL PRIMA, PT",
        "alamatPerusahaan": "alamatMerger",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "nomorCk3": "noCk3",
        "tanggalCk3": "2023-11-01T00:00:00",
        "tanggalLunas": "2023-12-01T00:00:00",
        "biayaPenggantiSeri1": 100,
        "biayaPenggantiSeri2": 200,
        "biayaPenggantiSeri3": 300,
        "biayaPenggantiSeri4": 400,
        "biayaPenggantiPembulatan": 500,
        "totalCukai": 200,
        "saldo": 100,
        "nipPejabat": "084755",
        "namaPejabat": "hasrullll",
        "idProses": "323e4567-e89b-12d3-a456-426655440003",
        "status": "menunggu",
        "kodeBilling": "",
        "nipUpdate": "6485685",
        "waktuUpdate": "2023-11-02T09:43:52",
        "flagBatal": "Y"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "4aa96042-d7ce-4dd9-9485-7570e76b1077",
        "idDokumen": "98ee0838-fbbd-4908-be43-ce0a3bb018c8",
        "idNppbkc": "5acbed1d-031a-495d-9757-0249b459e912",
        "idJenisDokumen": 1,
        "namaJenisDokumen": "Ck-3",
        "nomorDokumen": "000004",
        "tanggalDokumen": "2023-11-02T00:00:00",
        "saldo": 10000,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "5c4f8d6c-7c9c-4367-ad81-a1e923348e0e",
          "idSaldoPengurangCukaiHeader": "4aa96042-d7ce-4dd9-9485-7570e76b1077",
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
        "idCk3Header": "faa4fc0c-bfab-419f-a2b0-9bb19616e551",
        "idDokPelengkapCk3Header": "bc985c79-cbca-40af-b5a3-ec193be2e620",
        "kodeKantor": "070600",
        "namaKantor": "KPPBC TMC MALANG",
        "idNppbkc": "5acbed1d-031a-495d-9757-0249b459e912",
        "nppbkc": "0014539407415000150312",
        "npwp": "Np6600",
        "namaPerusahaan": "BENTOEL PRIMA, PT",
        "alamatPerusahaan": "alamatMerger",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "nomorCk3": "noCk3",
        "tanggalCk3": "2023-11-01T00:00:00",
        "tanggalLunas": "2023-12-01T00:00:00",
        "biayaPenggantiSeri1": 100,
        "biayaPenggantiSeri2": 200,
        "biayaPenggantiSeri3": 300,
        "biayaPenggantiSeri4": 400,
        "biayaPenggantiPembulatan": 500,
        "totalCukai": 200,
        "saldo": 100,
        "nipPejabat": "084755",
        "namaPejabat": "hasrullll",
        "idProses": "323e4567-e89b-12d3-a456-426655440003",
        "status": "menunggu",
        "kodeBilling": "",
        "nipUpdate": "6485685",
        "waktuUpdate": "2023-11-06T10:37:30",
        "flagBatal": "Y"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "6da4cd09-2bfb-4207-b1be-17af09c0309d",
        "idDokumen": "faa4fc0c-bfab-419f-a2b0-9bb19616e551",
        "idNppbkc": "5acbed1d-031a-495d-9757-0249b459e912",
        "idJenisDokumen": 1,
        "namaJenisDokumen": "Ck-3",
        "nomorDokumen": "000004",
        "tanggalDokumen": "2023-11-02T00:00:00",
        "saldo": 10000,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "5b805429-599a-4626-91d1-34787f42a5f1",
          "idSaldoPengurangCukaiHeader": "6da4cd09-2bfb-4207-b1be-17af09c0309d",
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
        "idCk3Header": "85a3e930-8d03-414e-91ab-0a1044221058",
        "idDokPelengkapCk3Header": "96bea4f1-7faa-401f-af53-eaa66d16a363",
        "kodeKantor": "150300",
        "namaKantor": "KPPBC Tangerang",
        "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76",
        "nppbkc": "0014539407415000150312",
        "npwp": "014539407415000",
        "namaPerusahaan": "PANJANG JIWO PT",
        "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten",
        "idJenisBkc": 2,
        "namaJenisBkc": "MMEA",
        "nomorCk3": "noCk3",
        "tanggalCk3": "2023-11-01T00:00:00",
        "tanggalLunas": "2023-12-01T00:00:00",
        "biayaPenggantiSeri1": 100,
        "biayaPenggantiSeri2": 200,
        "biayaPenggantiSeri3": 300,
        "biayaPenggantiSeri4": 400,
        "biayaPenggantiPembulatan": 500,
        "totalCukai": 31680000,
        "saldo": 100,
        "nipPejabat": "084755",
        "namaPejabat": "hasrullll",
        "idProses": "323e4567-e89b-12d3-a456-426655440003",
        "status": "Pembatalan",
        "kodeBilling": "",
        "nipUpdate": "6485685",
        "waktuUpdate": "2023-11-02T10:16:10",
        "flagBatal": "N"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "1de20e96-ed6b-4fa3-98b6-43ab0c868d2b",
        "idDokumen": "85a3e930-8d03-414e-91ab-0a1044221058",
        "idNppbkc": "5acbed1d-031a-495d-9757-0249b459e912",
        "idJenisDokumen": 1,
        "namaJenisDokumen": "Ck-3",
        "nomorDokumen": "000004",
        "tanggalDokumen": "2023-11-02T00:00:00",
        "saldo": 10000,
        "flagAktif": "N"
      },
      "saldoDetail": [
        {
          "idSaldoPengurangCukaiDetail": "be7cb472-add4-45a1-b6c6-84dab8906192",
          "idSaldoPengurangCukaiHeader": "1de20e96-ed6b-4fa3-98b6-43ab0c868d2b",
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
        "idCk3Header": "c59f85a6-7f01-4cc4-ab82-7b1b0efc7cb4",
        "idDokPelengkapCk3Header": "9652aaae-0bd2-41ef-bfc9-2990eaf9f3a7",
        "kodeKantor": "060800",
        "namaKantor": "Sample Kantor",
        "idNppbkc": "fe3c9197-fab8-05e6-e054-0021f60abd54",
        "nppbkc": "0014539407415000150312",
        "npwp": "1234567890123456",
        "namaPerusahaan": "Sample Company",
        "alamatPerusahaan": "123 Sample Street",
        "idJenisBkc": 3,
        "namaJenisBkc": "HT",
        "nomorCk3": "CK3-20230001",
        "tanggalCk3": "2023-09-20T00:00:00",
        "tanggalLunas": "2023-09-15T00:00:00",
        "biayaPenggantiSeri1": 5000,
        "biayaPenggantiSeri2": 10000,
        "biayaPenggantiSeri3": 20000,
        "biayaPenggantiSeri4": 100000,
        "biayaPenggantiPembulatan": 1000000,
        "totalCukai": 10500000000,
        "saldo": 9500000000,
        "nipPejabat": "123456789012345678",
        "namaPejabat": "John Doe",
        "idProses": "423e4567-e89b-12d3-a456-426655440003",
        "status": "Pending",
        "kodeBilling": "540231019492653",
        "nipUpdate": "987654321098765432",
        "waktuUpdate": "2023-09-29T14:30:00",
        "flagBatal": "N"
      },
      "saldoHeader": {
        "idSaldoPengurangCukaiHeader": "de3274de-ce2a-46ec-8814-77b694ae1bfb",
        "idDokumen": "c59f85a6-7f01-4cc4-ab82-7b1b0efc7cb4",
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
          "idSaldoPengurangCukaiDetail": "c867aa33-659a-4352-b15f-e769ef2aead6",
          "idSaldoPengurangCukaiHeader": "de3274de-ce2a-46ec-8814-77b694ae1bfb",
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

Last updated 8 months ago

📄
```