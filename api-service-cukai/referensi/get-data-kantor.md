# Get Data Kantor

| ### Introduction | Purpose : API ini digunakan untuk mendapatkan informasi data kantor berdasarkan parameter yang diberikan (untuk modul Perdagangan) |
| --- | --- |
| Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET | ### Path API |
| `GET` `{API_URL}/kode-kantor/by-nppbkc?nppbkc={nppbkc}` | Authorization |
| Field | Type |
| Description | `Authorization` |
| `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` |
| Type | `Description` |
| `Example Value` | nppbkc |
| `String` | `NPPBKC (Nomor Pokok Pengusaha Barang Kena Cukai)` |
| 0014539407415000150312 | `GET` `{API_URL}/kode-kantor/by-nppbkc?nppbkc=0014539407415000150312` |
| ### Response | 200 |
| ```json | { |
| "message": "Success", | "status": true, |
| "data": { | "namaKantor": "KPPBC TANGERANG", |
| "kodeKantor": "150300" | } |
| } | Potential Error |
| Status Code | Description |
| Reason | 400 Bad Request |
| Permintaan tidak valid | Parameter tidak lengkap atau format tidak sesuai |
| 401 Unauthorized | Otentikasi gagal |
| Bearer Token tidak valid atau tidak disertakan dalam header permintaan | 404 Not Found |
| Dokumen tidak ditemukan | Data tidak ditemukan berdasarkan parameter yang diberikan |
| ``` |  |
