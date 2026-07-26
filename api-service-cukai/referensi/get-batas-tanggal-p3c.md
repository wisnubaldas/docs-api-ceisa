# Get Batas Tanggal P3C

| ### Introduction | Purpose : API ini digunakan untuk mendapatkan informasi batas tanggal P3C berdasarkan parameter yang diberikan |
| --- | --- |
| Overview : Proses ini membutuhkan otentikasi menggunakan Bearer Token dan harus dikirim dengan metode GET | ### Path API |
| `GET` `{API_URL}/cekBatasTanggalP3c?bulanPersediaan={bulanPersediaan}&idJenisBkc={idJenisBkc}&idJenisUsaha={idJenisUsaha}` | Authorization |
| Field | Type |
| Description | `Authorization` |
| `String` | Bearer Token yang didapatkan dari hasil otorisasi |
| `Parameter` | `Name` |
| Type | `Description` |
| `Example Value` | idJenisBkc |
| `String` | `Identifikasi unik untuk jenis BKC` |
| 3 | `idJenisUsaha` |
| `String` | Identifikasi unik untuk jenis usaha |
| `1` | `bulanPersediaan` |
| String | `Bulan Persediaan` |
| `6` | Parameter Example |
| `GET` `{API_URL}/cekBatasTanggalP3c?bulanPersediaan=6&idJenisBkc=3&idJenisUsaha=1` | ### Response |
| 200 | ```json |
| { | "message": "Success", |
| "status": true, | "data": { |
| "statusP3c": "Tidak Boleh P3C" | } |
| } | Potential Error |
| Status Code | Description |
| Reason | 400 Bad Request |
| Permintaan tidak valid | Parameter tidak lengkap atau format tidak sesuai |
| 401 Unauthorized | Otentikasi gagal |
| Bearer Token tidak valid atau tidak disertakan dalam header permintaan | 404 Not Found |
| Dokumen tidak ditemukan | Data tidak ditemukan berdasarkan parameter yang diberikan |
| ``` |  |
