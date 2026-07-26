# Kirim Data E-Invoice

Used by Marketplaces to send E-Invoice data

Last updated 1 month ago

  * **Development**

URL Dev: 

  * **Production**

URL Prod : 

Kirim Data E-Invoice

`POST` `{API_URL}/e-invoice/send-data`

API _Endpoint_ to send E-Invoice data from Marketplace

Discount refer to Discount Type and Discount Provider References

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Bearer Token from Authorization API |

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `Data Einvoice*` | `String` | JSONSchema E-Invoice Data |
| `200: OK Ok` | `401: Unauthorized Unauthorized` | 403: Forbidden Forbidden |

```json
[
    {
        "status": "100",
        "data": "Invoice Number: INVOICETEST-2 Date: 2024-11-18",
        "messages": [
            "Data Received, waiting for CEISA validation"
        ]
    }
]

{
    // Response
}

{
    // Response
}

{
    // Response
}

JSONSchema Kirim Data E-Invoice

{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": [
    {
      "type": "object",
      "properties": {
        "buyerName": {
          "type": "string"
        },
        "buyerPhoneNumber": {
          "type": "string"
        },
        "commodity": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "countQuantity": {
                  "type": "string"
                },
                "discountProvider": {
                  "type": "string"
                },
                "discountType": {
                  "type": "string"
                },
                "discountValue": {
                  "type": "string"
                },
                "exitToEntryChargeAmount": {
                  "type": "string"
                },
                "identityQualifierCode": {
                  "type": "string"
                },
                "measurementUnit": {
                  "type": "string"
                },
                "orderUrl": {
                  "type": "string"
                }
              },
              "required": [
                "countQuantity",
                "discountProvider",
                "discountType",
                "discountValue",
                "exitToEntryChargeAmount",
                "identityQualifierCode",
                "measurementUnit",
                "orderUrl"
              ]
            }
          ]
        },
        "currencyTypeCode": {
          "type": "string"
        },
        "exchangeRate": {
          "type": "string"
        },
        "invoiceDate": {
          "type": "string"
        },
        "invoiceNumber": {
          "type": "string"
        },
        "invoiceURL": {
          "type": "string"
        },
        "marketplaceName": {
          "type": "string"
        }
      },
      "required": [
        "buyerName",
        "buyerPhoneNumber",
        "commodity",
        "currencyTypeCode",
        "exchangeRate",
        "invoiceDate",
        "invoiceNumber",
        "invoiceURL",
        "marketplaceName"
      ]
    }
  ]
}

Contoh Data E-Invoice

[
  {
    "buyerName": "PENERIMA-1",
    "buyerPhoneNumber": "081233334444",
    "commodity": [
      {
        "countQuantity": "1",
        "discountProvider": "",
        "discountType": "",
        "discountValue": "",
        "exitToEntryChargeAmount": "4.5",
        "identityQualifierCode": "SKU_ABC10",
        "measurementUnit": "PCE",
        "orderUrl": "-"
      }
    ],
    "currencyTypeCode": "USD",
    "exchangeRate": "15759",
    "invoiceDate": "2024-11-18",
    "invoiceNumber": "INVOICETEST-2",
    "invoiceURL": "-",
    "marketplaceName": "DEMO BEACUKAI"
  }
]

Sample Response :

[
    {
        "status": "100",
        "data": "Invoice Number: INVOICETEST-2 Date: 2024-11-18",
        "messages": [
            "Data Received, waiting for CEISA validation"
        ]
    }
]

📄

[https://apisdev-gw.beacukai.go.id/kirim-einvoice-barkir-public/kirim-data-einvoice-barkir](https://web.archive.org/web/20250523061032/https://apisdev-gw.beacukai.go.id/kirim-einvoice-barkir-public/kirim-data-einvoice-barkir/e-invoice/sendData)

[https://apis-gw.beacukai.go.id/kirim-einvoice-barkir-public/kirim-data-einvoice-barkir](https://web.archive.org/web/20250523061032/https://apis-gw.beacukai.go.id/kirim-einvoice-barkir-public/kirim-data-einvoice-barkir/e-invoice/sendData)
```