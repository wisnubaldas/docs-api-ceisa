# Update BC 1.1

**Development**

URL Dev: [https://apisdev-gw.beacukai.go.id/barkir-public-service/public-barkir](http://web.archive.org/web/20251206095757/https://apisdev-gw.beacukai.go.id/barkir-public-service/public-barkir) **Production**

URL Prod : [https://apis-gw.beacukai.go.id/openapi/cnpibk](http://web.archive.org/web/20251206095757/https://apis-gw.beacukai.go.id/openapi/cnpibk)

Update BC 1.1

`POST` `{API_URL}/bc11/update-bc11`

 _Endpoint_ digunakan untuk mengirim data update BC 1.1

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Bearer Token yang didapatkan hasil otorisasi |

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `Data Update BC 1.1.` | `String` | Notes \- posBc11 (**12 digit** gabungan pos, subpos, subsubpos) \- Khusus PPYD (**PT.POS**): field **nomorBc11** = **nomorBc14** & field **tanggalBc11** = **tanggalBc14** |

```json
{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "$ref": "#/definitions/Welcome5",
    "definitions": {
        "Welcome5": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "noBarang": {
                    "type": "string"
                },
                "tglHouse": {
                    "type": "string",
                    "format": "date"
                },
                "noBc11": {
                    "type": "string"
                },
                "nomorAju": {
                    "type": "string"
                },
                "tglBc11": {
                    "type": "string",
                    "format": "date"
                },
                "posBc11": {
                    "type": "string"
                },
                "kdGudang": {
                    "type": "string"
                }
            },
            "required": [
                "kdGudang",
                "noBarang",
                "noBc11",
                "posBc11",
                "tglBc11",
                "tglHouse",
                "nomoraju"
            ],
            "title": "Welcome5"
        }
    }
}

Contoh Data Update BC 1.1

{
    "noBarang": "1234",
    "tglHouse": "2022-01-01",
    "noBc11": "1234",
    "tglBc11": "2022-01-01",
    "posBc11": "123412341234",
    "kdGudang": "TES",
    "nomorAju": "12345678901234520240717TESTICAN22071CN1"
}

Last updated 1 year ago
```