# Get Jenis Produksi (by kode jenis produksi)

| ### Introduction | Purpose : API ini digunakan untuk mendapatkan informasi jenis produksi berdasarkan parameter yang diberikan (untuk modul Pelunasan) |
| --- | --- |
| Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET | ### Path API |
| `GET` `{API_URL}/jenis-produksi/portal/getJenisProduksiByKodeJenisProduksi?kodeJenisProduksi={kodeJenisProduksi}` | Authorization |
| Field | Type |
| Description | `Authorization` |
| `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` |
| Type | `Description` |
| `Example Value` | kodeJenisProduksi |
| `String` | `Kode dari suatu jenis produksi` |
| A | `GET` `{API_URL}/jenis-produksi/portal/getJenisProduksiByKodeJenisProduksi?kodeJenisProduksi=A` |
| ### Response | 200 |
| ```json | { |
| "message": "Success", | "status": true, |
| "data": { | "idJenisProduksi": 13, |
| "satuan": "mililiter", | "kodeJenisProduksi": "A", |
| "namaJenisProduksi": "MMEA GOLONGAN A", | "idJenisBkc": 2 |
| } | } |
| Potential Error | Status Code |
| Description | Reason |
| 400 Bad Request | Permintaan tidak valid |
| Parameter tidak lengkap atau format tidak sesuai | 401 Unauthorized |
| Otentikasi gagal | Bearer Token tidak valid atau tidak disertakan dalam header permintaan |
| 404 Not Found | Dokumen tidak ditemukan |
| Data tidak ditemukan berdasarkan parameter yang diberikan | ``` |
