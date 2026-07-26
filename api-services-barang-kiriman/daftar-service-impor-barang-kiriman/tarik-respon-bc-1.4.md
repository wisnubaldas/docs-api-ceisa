# Tarik Respon BC 1.4

untuk PT.POS Indonesia menarik respon data BC 1.4

  * **Development**

URL Dev: [https://apisdev-gw.beacukai.go.id/barkir-public-service/public-barkir](http://web.archive.org/web/20250812050528/https://apisdev-gw.beacukai.go.id/barkir-public-service/public-barkir)

  * **Production**

URL Prod : [https://apis-gw.beacukai.go.id/openapi/cnpibk](http://web.archive.org/web/20250812050528/https://apis-gw.beacukai.go.id/openapi/cnpibk)

Endpoint digunakan untuk mendapatkan status respon BC 1.4

`GET` `bc14/cek-status-bc14`

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `noAju` | `String` | Nomor Aju atas Bc 1.4 |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Bearer Token yang didapatkan hasil otorisasi |
| `200: OK` | `401: Unauthorized` | 500: Internal Server Error |

```json
{
  "message": "Success Get data",
  "status": true,
  "data": {
    "noAju": "NOMOR_AJU03047",
    "noBc14": "000015",
    "tglBc14": "2023-04-03",
    "detailStatus": [
      {
        "kodeStatus": "203",
        "uraianStatus": "CLEAR VALIDASI",
        "waktuRekam": "2023-04-03 14:39:44.584"
      }
    ]
  }
}

Last updated 8 months ago
```