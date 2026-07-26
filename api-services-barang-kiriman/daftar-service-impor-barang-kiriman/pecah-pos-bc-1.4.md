# Pecah Pos BC 1.4

untuk PT.POS Indonesia melakukan pecah pos BC 1.4

Last updated 2 months ago

**Development**

URL Dev: 

**Production**

URL Prod : 

Pecah Pos

`GET` `{API_URL}/bc14/pecah-pos`

 _Endpoint_ digunakan untuk pecah pos BC 1.4

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Bearer Token yang didapatkan hasil otorisasi |

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `Data Pecah Pos*` | `String` | JSONSchema Pecah Pos BC 1.4 Barang Kiriman |
| `200: OK` | `401: Unauthorized` | 403: Forbidden |

```json
{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "$ref": "#/definitions/Welcome1",
    "definitions": {
        "Welcome1": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "detail": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Detail"
                    }
                },
                "noBc14": {
                    "type": "string"
                },
                "noKantong": {
                    "type": "string"
                },
                "tglBc14": {
                    "type": "string",
                    "format": "date"
                }
            },
            "required": [
                "detail",
                "noBc14",
                "noKantong",
                "tglBc14"
            ],
            "title": "Welcome1"
        },
        "Detail": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "alamatPenerima": {
                    "type": "string"
                },
                "alamatPengirim": {
                    "type": "string"
                },
                "brutoBarang": {
                    "type": "string",
                    "format": "integer"
                },
                "hargaBarang": {
                    "type": "string",
                    "format": "integer"
                },
                "jumlahSatuan": {
                    "type": "string",
                    "format": "integer"
                },
                "namaPenerima": {
                    "type": "string"
                },
                "namaPengirim": {
                    "type": "string"
                },
                "noBarang": {
                    "type": "string",
                    "format": "integer"
                },
                "posBarang": {
                    "type": "string"
                },
                "seriBarang": {
                    "type": "string",
                    "format": "integer"
                },
                "subPosBarang": {
                    "type": "string"
                },
                "subSubPosBarang": {
                    "type": "string"
                },
                "subSubSubPosBarang": {
                    "type": "string"
                },
                "uraianBarang": {
                    "type": "string"
                }
            },
            "required": [
                "alamatPenerima",
                "alamatPengirim",
                "brutoBarang",
                "hargaBarang",
                "jumlahSatuan",
                "namaPenerima",
                "namaPengirim",
                "noBarang",
                "posBarang",
                "seriBarang",
                "subPosBarang",
                "subSubPosBarang",
                "subSubSubPosBarang",
                "uraianBarang"
            ],
            "title": "Detail"
        }
    }
}

Contoh Data Pecah Pos BC 1.4

{
  "detail": [
    {
      "alamatPenerima": "Jalan Pahlawan No. 10",
      "alamatPengirim": "Jalan Merdeka No. 15",
      "hargaBarang": "500",
      "brutoBarang":"10",
      "jumlahSatuan": "50",
      "namaPenerima": "Ari",
      "namaPengirim": "Rival",
      "noBarang": "09876",
      "posBarang": "0001",
      "seriBarang": "1",
      "subPosBarang": "0000",
      "subSubPosBarang": "0000",
      "subSubSubPosBarang": "0000",
      "uraianBarang": "Buku"
    },
{
      "alamatPenerima": "Jalan Pahlawan No. 10",
      "alamatPengirim": "Jalan Merdeka No. 15",
      "hargaBarang": "500",
      "brutoBarang":"10",
      "jumlahSatuan": "50",
      "namaPenerima": "Ari",
      "namaPengirim": "Rival",
      "noBarang": "8765",
      "posBarang": "0001",
      "seriBarang": "1",
      "subPosBarang": "0000",
      "subSubPosBarang": "0000",
      "subSubSubPosBarang": "0000",
      "uraianBarang": "Buku"
    }
  ],
  "noBc14": "000055",
  "noKantong": "K0008",
  "tglBc14": "2023-08-16"
}

📄

[https://apisdev-gw.beacukai.go.id/barkir-public-service/public-barkir](https://web.archive.org/web/20250523060259/https://apisdev-gw.beacukai.go.id/barkir-public-service/public-barkir)

[https://apis-gw.beacukai.go.id/openapi/cnpibk](https://web.archive.org/web/20250523060259/https://apis-gw.beacukai.go.id/openapi/cnpibk)
```