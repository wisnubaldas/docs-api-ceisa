# Browse Tarif Merk HT

### Introduction

  * Purpose : API ini digunakan untuk mendapatkan informasi tarif merk MMEA berdasarkan parameter yang diberikan

  * Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET

### Path API

`GET` `{API_URL}/portal/tarif-merk/browse-ht?nppbkc={nppbkc}&page=}page}`

Authorization

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` | Type |
| `Description` | `Example Value` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` | 0669986374654000070613 |

`GET` `{API_URL}/portal/tarif-merk/browse-ht?nppbkc=0669986374654000070613&page=1`

### Response

200

```json
{
    "message": "Success",
    "status": true,
    "data": {
        "currentPage": 1,
        "totalData": 226,
        "totalPages": 23,
        "limit": 10,
        "listData": [
            {
                "idTarifMerkHeader": "29d475ad-8b06-4fb6-b3b9-72a4172cda42",
                "nomorSkep": null,
                "tanggalSkep": "2024-08-09",
                "idProses": null,
                "hje": 3000.0,
                "hjePerKemasan": null,
                "hjePerBatang": 3000.0,
                "tujuan": "Dalam Negeri",
                "idMerk": "a97e8fa8-e667-4641-bf8f-f54d67f17b09",
                "namaMerk": "Tembakau02",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "SKT - III",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0669986374654000070613",
                "namaKantor": "KPPBC TMC MALANG",
                "namaPerusahaan": "DEMANG JAYA PR",
                "isi": 15.00,
                "isiRel": null,
                "tarif": 122,
                "statusMerk": "TIDAK AKTIF",
                "kodeDokumenPelengkap": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/0cRK9uvb4OsiNXsUbOhVubj3tmEaQxZqoEJwTfOci_aP_k44PQT2OAJbxGyFOW8kWG6OLVZ0uRg9Y6fVQJ4Anw==",
                "kodeDokumenKep": null
            },
            {
                "idTarifMerkHeader": "0af8c374-ddb7-4886-aaa9-5ec14c7ed20f",
                "nomorSkep": "TEST",
                "tanggalSkep": "2024-08-09",
                "idProses": null,
                "hje": 8000.0,
                "hjePerKemasan": null,
                "hjePerBatang": 533.33,
                "tujuan": "Dalam Negeri",
                "idMerk": "f5d956aa-b5f5-4e85-9062-db4c595d7494",
                "namaMerk": "DEMJAYPR00_15_8000_DN_3TP_636",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "REL - TANPA GOLONGAN",
                "awalBerlaku": "2024-08-16",
                "akhirBerlaku": "2024-08-16",
                "status": "Selesai",
                "nppbkc": "0669986374654000070613",
                "namaKantor": "KPPBC TMC MALANG",
                "namaPerusahaan": "DEMANG JAYA PR",
                "isi": 15.00,
                "isiRel": null,
                "tarif": 636,
                "statusMerk": "AKTIF",
                "kodeDokumenPelengkap": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/0cRK9uvb4OsiNXsUbOhVubj3tmEaQxZqoEJwTfOci_aP_k44PQT2OAJbxGyFOW8kWG6OLVZ0uRg9Y6fVQJ4Anw==",
                "kodeDokumenKep": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/cVa0Nacgoo2EIRlpfuz1-1pjqF8QTV5uzlEgf_A2eypsy4YqO-SnEaGJYowIqXK_WG6OLVZ0uRg9Y6fVQJ4Anw=="
            },
            {
                "idTarifMerkHeader": "231e0c65-4073-4b2b-ac24-399eb39ad2a9",
                "nomorSkep": null,
                "tanggalSkep": "2024-08-14",
                "idProses": null,
                "hje": 8000.0,
                "hjePerKemasan": null,
                "hjePerBatang": 533.33,
                "tujuan": "Dalam Negeri",
                "idMerk": "c8c56fcd-a74c-4a8d-9356-1feb109c096d",
                "namaMerk": "DEMJAYPR00_15_8000_DN_3TP_636",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "REL - TANPA GOLONGAN",
                "awalBerlaku": "2024-08-14",
                "akhirBerlaku": "2024-08-14",
                "status": "Selesai",
                "nppbkc": "0669986374654000070613",
                "namaKantor": "KPPBC TMC MALANG",
                "namaPerusahaan": "DEMANG JAYA PR",
                "isi": 15.00,
                "isiRel": null,
                "tarif": 636,
                "statusMerk": "AKTIF",
                "kodeDokumenPelengkap": "dQQ6lgWDU-bo7kLj-Q9-eg==/3jS3JChaXVxrZptIeeNfgmmJnp1nDps3yTefgwyELgKQfYBzs3G_eaaTeXxKvDCjWG6OLVZ0uRg9Y6fVQJ4Anw==",
                "kodeDokumenKep": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/38C7EwRvNHPq2i7vcES8wYpvLEHp1tZTgHgBK_9s074TI7XwTf0tZBrNjGHAVxSXWG6OLVZ0uRg9Y6fVQJ4Anw=="
            },
            {
                "idTarifMerkHeader": "6da37618-77d6-4ab2-bfdb-9b41e4eb33d2",
                "nomorSkep": "KEP/20/06/2024",
                "tanggalSkep": "2024-08-14",
                "idProses": null,
                "hje": 3000.0,
                "hjePerKemasan": null,
                "hjePerBatang": 3000.0,
                "tujuan": "Dalam Negeri",
                "idMerk": "341e59fe-e9af-4b2b-9a46-9f7b2bf5326f",
                "namaMerk": "Kretek776776",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "SKT - III",
                "awalBerlaku": "2024-08-14",
                "akhirBerlaku": null,
                "status": "Selesai",
                "nppbkc": "0669986374654000070613",
                "namaKantor": "KPPBC TMC MALANG",
                "namaPerusahaan": "DEMANG JAYA PR",
                "isi": 1.00,
                "isiRel": null,
                "tarif": 122,
                "statusMerk": "AKTIF",
                "kodeDokumenPelengkap": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/IulmyMQjOjffTtXnHFVxr3nUlH8YGMAfVb9CDffbxb92RTurE9kfIavGiW86qfr_WG6OLVZ0uRg9Y6fVQJ4Anw==",
                "kodeDokumenKep": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/OzXAITT1xd22E4WkHMwe4g1JBSBNtbiVC3ly13ysbI8as4JKGRLAgGKtE3JbAARRWG6OLVZ0uRg9Y6fVQJ4Anw=="
            },
            {
                "idTarifMerkHeader": "12ef84a9-d16f-4fa4-b581-fc5dff4b4a4e",
                "nomorSkep": "KEP/20/06/2024",
                "tanggalSkep": "2024-08-14",
                "idProses": null,
                "hje": 3000.0,
                "hjePerKemasan": null,
                "hjePerBatang": 3000.0,
                "tujuan": "Dalam Negeri",
                "idMerk": "51e196c3-5e72-4c76-825b-52b69a1d7ddf",
                "namaMerk": "Kretek0909",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "SKT - III",
                "awalBerlaku": "2024-08-14",
                "akhirBerlaku": null,
                "status": "Penetapan Tarif Perbaikan",
                "nppbkc": "0669986374654000070613",
                "namaKantor": "KPPBC TMC MALANG",
                "namaPerusahaan": "DEMANG JAYA PR",
                "isi": 1.00,
                "isiRel": null,
                "tarif": 122,
                "statusMerk": "AKTIF",
                "kodeDokumenPelengkap": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/A2htRolEmG-mUBUL8av-HXqXaqc7BOEFH9QxE5HSQslb_07uwj83Pu9GtNbh5HMlWG6OLVZ0uRg9Y6fVQJ4Anw==",
                "kodeDokumenKep": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/DdZ7_LpPyJfiBWEmKhWx5eS_1i3_bJ7v_YjdMGgGLizqRkVLCEbx1NEwsjLulyR4WG6OLVZ0uRg9Y6fVQJ4Anw=="
            },
            {
                "idTarifMerkHeader": "bc25ea9b-4a26-4dd4-882f-b3c8ae8ffe26",
                "nomorSkep": null,
                "tanggalSkep": "2024-08-14",
                "idProses": null,
                "hje": 3000.0,
                "hjePerKemasan": null,
                "hjePerBatang": 3000.0,
                "tujuan": "Dalam Negeri",
                "idMerk": "c6b80132-d0dd-417b-a3d2-1319fb0bb5ab",
                "namaMerk": "Kretek7676",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "SKT - III",
                "awalBerlaku": "2024-08-14",
                "akhirBerlaku": "2024-08-14",
                "status": "Selesai",
                "nppbkc": "0669986374654000070613",
                "namaKantor": "KPPBC TMC MALANG",
                "namaPerusahaan": "DEMANG JAYA PR",
                "isi": 1.00,
                "isiRel": null,
                "tarif": 122,
                "statusMerk": "AKTIF",
                "kodeDokumenPelengkap": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/T26cEKr6y4inpo6OgIlFD_67RqAhFve9O6offLc7tAWrfH-lnmuCg24qPeQ5o4ShWG6OLVZ0uRg9Y6fVQJ4Anw==",
                "kodeDokumenKep": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/TTxoUUEFUo9ABnZ6F9_mAI_bDE5NiVY6hZ7x2K8bj8JMXsjx3qfa0BolG7Yk8P2nWG6OLVZ0uRg9Y6fVQJ4Anw=="
            },
            {
                "idTarifMerkHeader": "8517339a-603e-4073-a810-24e6be110dde",
                "nomorSkep": null,
                "tanggalSkep": "2024-08-14",
                "idProses": null,
                "hje": 3000.0,
                "hjePerKemasan": null,
                "hjePerBatang": 3000.0,
                "tujuan": "Dalam Negeri",
                "idMerk": "991286f9-7aa3-4a64-a496-f5f3e9d67390",
                "namaMerk": "Kretek9090",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "SKT - III",
                "awalBerlaku": "2024-08-14",
                "akhirBerlaku": "2024-08-14",
                "status": "Selesai",
                "nppbkc": "0669986374654000070613",
                "namaKantor": "KPPBC TMC MALANG",
                "namaPerusahaan": "DEMANG JAYA PR",
                "isi": 1.00,
                "isiRel": null,
                "tarif": 122,
                "statusMerk": "AKTIF",
                "kodeDokumenPelengkap": "dQQ6lgWDU-bo7kLj-Q9-eg==/v7dSZqQHLsht27SdUKJB03Jt4zkxlgVMo9mIpaRR3OzrkdLjyiYuzs9zeUktZNwoWG6OLVZ0uRg9Y6fVQJ4Anw==",
                "kodeDokumenKep": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/MllsNLFPHO-91FsDgbi_WhGlsiE3qJiCQko_OVHJu2nWSeM10x_r3HykBtTZLGZdWG6OLVZ0uRg9Y6fVQJ4Anw=="
            },
            {
                "idTarifMerkHeader": "cab5e3b9-7f2d-4554-9d37-aa2686ac1059",
                "nomorSkep": "TEST",
                "tanggalSkep": "2024-08-14",
                "idProses": null,
                "hje": 3000.0,
                "hjePerKemasan": null,
                "hjePerBatang": 3000.0,
                "tujuan": "Dalam Negeri",
                "idMerk": "298157d7-4958-42c1-ad59-b83a3101794e",
                "namaMerk": "Kretek7777",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "SKT - III",
                "awalBerlaku": "2024-08-14",
                "akhirBerlaku": null,
                "status": "Penetapan Tarif Perbaikan",
                "nppbkc": "0669986374654000070613",
                "namaKantor": "KPPBC TMC MALANG",
                "namaPerusahaan": "DEMANG JAYA PR",
                "isi": 1.00,
                "isiRel": null,
                "tarif": 122,
                "statusMerk": "AKTIF",
                "kodeDokumenPelengkap": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/r-g8zSqd8rhfsjlWNbvjHta9xl5nyFMQs0o7SSBXxgS65Rj-38H6YCjZql-dJu6aWG6OLVZ0uRg9Y6fVQJ4Anw==",
                "kodeDokumenKep": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/gqqI0tBfaPv6OXYQsCY7Ca3aiBjPazwDAbnrNU82RdZzu8778wsA__GqsmYWaOy2WG6OLVZ0uRg9Y6fVQJ4Anw=="
            },
            {
                "idTarifMerkHeader": "e1270ee6-17fd-4542-9fb9-d3c582f0dd5b",
                "nomorSkep": "TEST",
                "tanggalSkep": "2024-08-14",
                "idProses": null,
                "hje": 3000.0,
                "hjePerKemasan": null,
                "hjePerBatang": 3000.0,
                "tujuan": "Dalam Negeri",
                "idMerk": "3885177b-04bc-4fbf-9afa-ea2d0c5a0465",
                "namaMerk": "Kretek",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "SKT - III",
                "awalBerlaku": "2024-08-14",
                "akhirBerlaku": null,
                "status": "Penetapan Tarif Perbaikan",
                "nppbkc": "0669986374654000070613",
                "namaKantor": "KPPBC TMC MALANG",
                "namaPerusahaan": "DEMANG JAYA PR",
                "isi": 1.00,
                "isiRel": null,
                "tarif": 122,
                "statusMerk": "AKTIF",
                "kodeDokumenPelengkap": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/_bDZdi129o7WEH0zGmcb5T2P-isIdhOj6Mur5zrUHL5e_5u3qpfz8ShRCR6u0RiAWG6OLVZ0uRg9Y6fVQJ4Anw==",
                "kodeDokumenKep": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/xcHKtWu0dck2N25EtamXx19MbzKAov_sK5a8Q9AtevxPyJFnMEJfjkuQnnOlzZSuWG6OLVZ0uRg9Y6fVQJ4Anw=="
            },
            {
                "idTarifMerkHeader": "3ba67000-8f5c-48a2-86b6-c525840e4f26",
                "nomorSkep": "TEST",
                "tanggalSkep": "2024-08-07",
                "idProses": null,
                "hje": 3000.0,
                "hjePerKemasan": null,
                "hjePerBatang": 3000.0,
                "tujuan": "Dalam Negeri",
                "idMerk": "8adb9def-7b80-42a0-b274-c24eda9efff5",
                "namaMerk": "Tembakau02",
                "idJenisProduksiBkc": null,
                "jenisProduksiBkc": "SKT - III",
                "awalBerlaku": "2024-08-14",
                "akhirBerlaku": null,
                "status": "Penetapan Tarif Perbaikan",
                "nppbkc": "0669986374654000070613",
                "namaKantor": "KPPBC TMC MALANG",
                "namaPerusahaan": "DEMANG JAYA PR",
                "isi": 1.00,
                "isiRel": null,
                "tarif": 122,
                "statusMerk": "AKTIF",
                "kodeDokumenPelengkap": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/yv9c4ogycCFIXM0aXncsmtI3q0ups-Nog7lh5Rw8bPPzRPDOeTeu5p6LRsWBasssWG6OLVZ0uRg9Y6fVQJ4Anw==",
                "kodeDokumenKep": "X5ipGCS2OoMg1v7kYZH1TQ==/cuQHp8--6_YY0OhogE6pSA==/u5DWUuBqJDzTCyB3RSisuleV3ArAIpXwyUcKfbRKWx107g1HPCHmDmX3iJiOHRrlWG6OLVZ0uRg9Y6fVQJ4Anw=="
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