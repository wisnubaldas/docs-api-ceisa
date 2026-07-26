# Kirim Data E-Catalogue

Used by Marketplaces to send E-Catalogue Data to Customs

  * **Development**

URL Dev: [https://apisdev-gw.beacukai.go.id/kirim-ekatalog-barkir-public/kirim-data-ekatalog-barkir](http://web.archive.org/web/20250911180315/https://apisdev-gw.beacukai.go.id/kirim-ekatalog-barkir-public/kirim-data-ekatalog-barkir/e-catalogue/sendData)

  * **Production**

URL Prod : [https://apis-gw.beacukai.go.id/kirim-ekatalog-barkir-public/kirim-data-ekatalog-barkir](http://web.archive.org/web/20250911180315/https://apis-gw.beacukai.go.id/kirim-ekatalog-barkir-public/kirim-data-ekatalog-barkir)

Kirim Data E-Catalogue

`POST` `{API_URL}/e-catalogue/send-data`

API _Endpoint_ to send E-Catalogue data from Marketplace

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Bearer Token from Authorization API |

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `Data E-Catalogue*` | `String` | JSONSchema E-Catalogue |
| `200: OK Ok` | `401: Unauthorized Unauthorized` | 403: Forbidden Forbidden |

```json
{
  "body": {},
  "statusCode": "ACCEPTED",
  "statusCodeValue": 0
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

JSONSchema Kirim Data E-Catalogue

{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "type": "array",
    "items": {
        "$ref": "#/definitions/Welcome4Element"
    },
    "definitions": {
        "Welcome4Element": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "categoryCode": {
                    "type": "string"
                },
                "countryCode": {
                    "type": "string"
                },
                "currencyTypeCode": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "elementDescription": {
                    "type": "string"
                },
                "identityQualifierCode": {
                    "type": "string"
                },
                "marketplaceName": {
                    "type": "string"
                },
                "measurementUnit": {
                    "type": "string",
                    "format": "integer"
                },
                "sellerId": {
                    "type": "string"
                },
                "startingDate": {
                    "type": "string",
                    "format": "date"
                },
                "valueAmount": {
                    "type": "string",
                    "format": "integer"
                }
            },
            "required": [
                "categoryCode",
                "countryCode",
                "currencyTypeCode",
                "description",
                "elementDescription",
                "identityQualifierCode",
                "marketplaceName",
                "measurementUnit",
                "sellerId",
                "startingDate",
                "valueAmount"
            ],
            "title": "Welcome4Element"
        }
    }
}

Contoh Data Kirim E-Catalogue

[
  {
    "categoryCode": "ELECTRONIC",
    "countryCode": "CN",
    "currencyTypeCode": "USD",
    "description": "SETRIKA IRON 1",
    "elementDescription": "Setrika Miyako Iron",
    "identityQualifierCode": "SKU_BARANG_IKC_1",
    "marketplaceName": "PT DEMO BEACUKAI",
    "measurementUnit": "PCE",
    "sellerId": "ABCD123445",
    "startingDate": "2024-11-18",
    "valueAmount": "10"
  },
  {
    "categoryCode": "TOYS",
    "countryCode": "CN",
    "currencyTypeCode": "USD",
    "description": "CAR TOYS",
    "elementDescription": "Car toys toyota",
    "identityQualifierCode": "SKU_BARANG_IKC_2",
    "marketplaceName": "PT DEMO BEACUKAI",
    "measurementUnit": "PCE",
    "sellerId": "ABCD123445",
    "startingDate": "2024-11-18",
    "valueAmount": "20"
  }
]

Sample Response :

[
  {
    "status": "100",
    "data": "Catalogue identityQualifierCode SKU_BARANG_IKC_1 starting date 2024-11-18",
    "catalogue": {
      "marketplaceName": "PT DEMO BEACUKAI",
      "identityQualifierCode": "SKU_BARANG_IKC_1",
      "categoryCode": "ELECTRONIC",
      "description": "SETRIKA IRON 1",
      "elementDescription": "Setrika Miyako Iron",
      "currencyTypeCode": "USD",
      "valueAmount": "10",
      "measurementUnit": "PCE",
      "sellerId": "ABCD123445",
      "countryCode": "CN",
      "startingDate": "2024-11-18"
    },
    "messages": [
      "Data Received, waiting for CEISA validation"
    ]
  },
  {
    "status": "100",
    "data": "Catalogue identityQualifierCode SKU_BARANG_IKC_2 starting date 2024-11-18",
    "catalogue": {
      "marketplaceName": "PT DEMO BEACUKAI",
      "identityQualifierCode": "SKU_BARANG_IKC_2",
      "categoryCode": "TOYS",
      "description": "CAR TOYS",
      "elementDescription": "Car toys toyota",
      "currencyTypeCode": "USD",
      "valueAmount": "20",
      "measurementUnit": "PCE",
      "sellerId": "ABCD123445",
      "countryCode": "CN",
      "startingDate": "2024-11-18"
    },
    "messages": [
      "Data Received, waiting for CEISA validation"
    ]
  }
]

Last updated 9 months ago
```