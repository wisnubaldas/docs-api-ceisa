# Tarik Respon Data Barang Tertentu

untuk PT. POS Indonesia kirim data barang tertentu

**Development**

URL Dev: [https://apisdev-gw.beacukai.go.id/barkir-public-service/public-barkir](http://web.archive.org/web/20250911174941/https://apisdev-gw.beacukai.go.id/barkir-public-service/public-barkir)

**Production**

URL Prod : [https://apis-gw.beacukai.go.id/barkir-public-service/public-barkir](http://web.archive.org/web/20250911174941/https://apis-gw.beacukai.go.id/barkir-public-service/public-barkir)

Url Tarik Dokumen Barang Tertentu

`POST` `{API_URL}/daftar-tertentu/request-respon`

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Bearer Token yang didapatkan hasil otorisasi |
| `Request Param` | `Name` | Type |
| `Description` | `nomorDaftar` | String |

```json
https://apisdev-gw.beacukai.go.id/barkir-public-service/public-barkir/request-respon?nomorDaftar=TESTIKC1211-1

200: OK Ok

401: Unauthorized Unauthorized

403: Forbidden Forbidden

404: Not Found Not Found

{
  "message": "Success",
  "status": true,
  "data": [
    {
      "nomorDaftar": "TESTIKC1211-1",
      "tanggalDaftar": "2024-11-12",
      "kodeStatus": "100",
      "uraianStatus": "DOKUMEN DITERIMA UNTUK DIPROSES BEA CUKAI ",
      "waktuRekam": "2024-11-12 15:32:18",
      "keterangan": null,
      "diterima": "YA"
    }
  ]
}

{
    // Response
}

{
    // Response
}

{
    // Response
}

Last updated 10 months ago
```