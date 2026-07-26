# Browse NPPBKC

| ### Introduction | Purpose : API ini digunakan untuk mendapatkan informasi NPPBKC berdasarkan parameter yang diberikan (untuk modul Pengembalian) |
| --- | --- |
| Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET | ### Path API |
| `GET` `{API_URL}/nppbkc/browseNppbkc?nppbkc={nppbkc}&pageNumber={pageNumber}&pageSize={pageSize}` | Authorization |
| Field | Type |
| Description | `Authorization` |
| `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` |
| Type | `Description` |
| `Example Value` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` |
| 0946806478452000150342 | `pageNumber` |
| `Integer` | Nomor Halaman |
| `0` | `pageSize` |
| Integer | `Jumlah data pada suatu halaman` |
| `10` | Parameter Example |
| `GET` `{API_URL}/nppbkc/browseNppbkc?nppbkc=0946806478452000150342&pageNumber=0&pageSize=10` | ### Response |
| 200 | ```json |
| { | "message": "Success", |
| "status": true, | "data": { |
| "currentPage": 0, | "totalData": 1, |
| "totalPages": 1, | "limit": 10, |
| "listData": [ | { |
| "idNppbkc": "fe3c9198-099f-05e6-e054-0021f60abd54", | "kodeKantor": "150300", |
| "nppbkc": "0946806478452000150342", | "namaPerusahaan": "ANEKA BINTANG GUDANG PT", |
| "pemilik": "EKA SETIA WIJAYA", | "alamatPemilik": "CLUSTER AQUAMARINE SELATAN 1 NO.32 PHG GADING SERPONG RT.001 RW.011 KELURAHAN CURUG SANGERENG", |
| "kota": "Kabupaten Tangerang", | "tanggalNppbkc": "2022-06-24T00:00:00.000+07:00", |
| "kuasa": "", | "npwp": "946806478452000", |
| "telepon": "", | "fax": "", |
| "caraBayar": "T", | "ambilPita": "KC", |
| "blokir": "N", | "flagPpn": "N", |
| "nomorCabut": "", | "tanggalCabut": null, |
| "kodeJenisBkc": "2", | "kodeJenisUsaha": "4", |
| "waktuUpdate": null, | "nipUpdate": "", |
| "waktuRekam": "2023-08-24T00:00:00.000+07:00", | "nipRekam": "MIGRASI", |
| "idPabrik": "", | "nomorKep": "", |
| "nppbkc28": "9468064781503000220008552304", | "nppbkc10": "1503421237", |
| "flagRegis": "", | "transaksiTerakhir": null, |
| "alamatPerusahaan": "", | "akhirBerlaku": "2027-06-24T00:00:00.000+07:00", |
| "kodePerson": "", | "namaKantor": "KPPBC TANGERANG" |
| } | ] |
| } | } |
| Potential Error | Status Code |
| Description | Reason |
| 400 Bad Request | Permintaan tidak valid |
| Parameter tidak lengkap atau format tidak sesuai | 401 Unauthorized |
| Otentikasi gagal | Bearer Token tidak valid atau tidak disertakan dalam header permintaan |
| 404 Not Found | Dokumen tidak ditemukan |
| Data tidak ditemukan berdasarkan parameter yang diberikan | ``` |
