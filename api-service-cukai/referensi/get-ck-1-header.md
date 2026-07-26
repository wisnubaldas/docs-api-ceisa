# Get CK-1 Header

| ### Introduction | Purpose : API ini digunakan untuk mendapatkan informasi header CK-1 berdasarkan parameter yang diberikan |
| --- | --- |
| Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET | ### Path API |
| `GET` `{API_URL}/referensi/ck1/getCk1Header?idNppbkc={idNppbkc}` | Authorization |
| Field | Type |
| Description | `Authorization` |
| `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` |
| Type | `Description` |
| `Example Value` | idNppbkc |
| `String` | `Identifikasi unik untuk NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` |
| 0499af9b-f53b-40c7-b1f8-9b16c9f89b76 | `GET` `{API_URL}/referensi/ck1/getCk1Header?idNppbkc=0499af9b-f53b-40c7-b1f8-9b16c9f89b76` |
| ### Response | 200 |
| ```json | { |
| "message": "Success", | "status": true, |
| "data": { | "ambilPita": "KC", |
| "kuasa": null, | "idNppbkc": "0499af9b-f53b-40c7-b1f8-9b16c9f89b76", |
| "namaPerusahaan": "PANJANG JIWO PT", | "nppbkc": "0014539407415000150312", |
| "npwp": "0014539407415000", | "alamatPerusahaan": "Jalan Yos Sudarso No.147 RT 004 RW 002 Kel. Kebon Besar Kec. Batu Ceper Kota Tangerang, Banten", |
| "pemilik": "HENDRY" | } |
| } | Potential Error |
| Status Code | Description |
| Reason | 400 Bad Request |
| Permintaan tidak valid | Parameter tidak lengkap atau format tidak sesuai |
| 401 Unauthorized | Otentikasi gagal |
| Bearer Token tidak valid atau tidak disertakan dalam header permintaan | 404 Not Found |
| Dokumen tidak ditemukan | Data tidak ditemukan berdasarkan parameter yang diberikan |
| ``` |  |
