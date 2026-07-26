# Get NPPBKC

| ### Introduction | Purpose : API ini digunakan untuk mendapatkan informasi NPPBKC berdasarkan parameter yang diberikan (untuk modul pengembalian) |
| --- | --- |
| Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET | ### Path API |
| `GET` `{API_URL}/getAllTrNppbkc?idNppbkc={idNppbkc}&nppbkc={nppbkc}` | Authorization |
| Field | Type |
| Description | `Authorization` |
| `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` |
| Type | `Description` |
| `Example Value` | idNppbkc |
| `String` | `Identifikasi unik untuk NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` |
| fe3c9197-fad5-05e6-e054-0021f60abd54 | `nppbkc` |
| `String` | NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai) |
| `GET` `{API_URL}/getAllTrNppbkc?idNppbkc=fe3c9197-fad5-05e6-e054-0021f60abd54&nppbkc=0018632638003000040441` | ### Response |
| 200 | ```json |
| { | "message": "Success", |
| "status": true, | "data": { |
| "idNppbkc": "fe3c9197-fad5-05e6-e054-0021f60abd54", | "kodeKantor": "040400", |
| "nppbkc": "0018632638003000040441", | "namaPerusahaan": "GLOBAL SATRIA AJI, PT", |
| "pemilik": "IR. PUDJI ASTUTI", | "alamatPemilik": "Jl. Bendungan Hilir Raya No.136 RT.012 RW.006, Kel. Bendungan Hilir, Kec. Tanah Abang, Jakarta Pusat", |
| "kota": "JAKARTA", | "tanggalNppbkc": "2015-07-09T00:00:00.000+07:00", |
| "kuasa": "", | "npwp": "018632638003000", |
| "telepon": "", | "fax": "", |
| "caraBayar": "T", | "ambilPita": "KC", |
| "blokir": "Y", | "flagPpn": "N", |
| "nomorCabut": "", | "tanggalCabut": null, |
| "kodeJenisBkc": "1", | "kodeJenisUsaha": "4", |
| "waktuUpdate": "2020-07-10T00:00:00.000+07:00", | "nipUpdate": "-UNKNOWN", |
| "waktuRekam": "2023-08-24T00:00:00.000+07:00", | "nipRekam": "MIGRASI", |
| "idPabrik": "", | "nomorKep": "KEP-311/WBC.07/KPP.MP.01/2015", |
| "nppbkc28": "", | "nppbkc10": "0404411003", |
| "flagRegis": "", | "transaksiTerakhir": null, |
| "alamatPerusahaan": "", | "akhirBerlaku": "2020-07-09T00:00:00.000+07:00", |
| "kodePerson": "", | "namaKantor": "KPPBC JAKARTA" |
| } | } |
| Potential Error | Status Code |
| Description | Reason |
| 400 Bad Request | Permintaan tidak valid |
| Parameter tidak lengkap atau format tidak sesuai | 401 Unauthorized |
| Otentikasi gagal | Bearer Token tidak valid atau tidak disertakan dalam header permintaan |
| 404 Not Found | Dokumen tidak ditemukan |
| Data tidak ditemukan berdasarkan parameter yang diberikan | ``` |
