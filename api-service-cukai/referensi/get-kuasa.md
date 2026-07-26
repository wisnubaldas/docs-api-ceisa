# Get Kuasa

| ### Introduction | Purpose : API ini digunakan untuk mendapatkan informasi header CK-1 berdasarkan parameter yang diberikan |
| --- | --- |
| Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET | ### Path API |
| `GET` `{API_URL}/referensi/ck1/getKuasa?nppbkc={nppbkc}` | Authorization |
| Field | Type |
| Description | `Authorization` |
| `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` |
| Type | `Description` |
| `Example Value` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` |
| 0014539407415000150312 | `GET` `{API_URL}/referensi/ck1/getKuasa?nppbkc=0014539407415000150312` |
| ### Response | 200 |
| ```json | { |
| "message": "Success", | "status": true, |
| "data": [ | { |
| "penerimaKuasa": "Rudi Salam", | "identitas": "3233212332131233", |
| "idKuasa": "d703c4d8-929c-4af3-8e9a-2c4c289da685" | }, |
| { | "penerimaKuasa": "Fina Ningrum", |
| "identitas": "1234567890123456", | "idKuasa": "1251f063-fe0b-4c19-b541-8100d22a6e5d" |
| }, | { |
| "penerimaKuasa": "Budi", | "identitas": "3213213123123124", |
| "idKuasa": "1888ad4f-296f-48aa-91ac-b925a2948eff" | } |
| ] | } |
| Potential Error | Status Code |
| Description | Reason |
| 400 Bad Request | Permintaan tidak valid |
| Parameter tidak lengkap atau format tidak sesuai | 401 Unauthorized |
| Otentikasi gagal | Bearer Token tidak valid atau tidak disertakan dalam header permintaan |
| 404 Not Found | Dokumen tidak ditemukan |
| Data tidak ditemukan berdasarkan parameter yang diberikan | ``` |
