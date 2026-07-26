# Tarik Respon E-Invoice

Used by Marketplaces to get response for E-Invoice data

  * **Development**

URL Dev: [https://apisdev-gw.beacukai.go.id/respon-einvoice-barkir-public/tarik-respon-einvoice-barkir](http://web.archive.org/web/20251011222909/https://apisdev-gw.beacukai.go.id/respon-einvoice-barkir-public/tarik-respon-einvoice-barkir/e-invoice/getResponse)

  * **Production**

URL Prod 

[https://apis-gw.beacukai.go.id/respon-einvoice-barkir-public/tarik-respon-einvoice-barkir](http://web.archive.org/web/20251011222909/https://apis-gw.beacukai.go.id/respon-einvoice-barkir-public/tarik-respon-einvoice-barkir)

Tarik Respon E-Invoice

`GET` `{API_URL}/e-invoice/get-response`

API _Endpoint_ to get response for E-Invoice data. It shows response for all Invoices which is not already downloaded or taken before, if you want to get the same data again, you can use invoiceNumber as a parameter.

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `invoiceNumber` | `String` | Invoice Number |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Bearer Token from Authorization API |
| `200: OK Ok` | `401: Unauthorized Unauthorized` | 403: Forbidden Forbidden |

```json
{
    // Response
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

Sample using param: [https://apisdev-gw.beacukai.go.id/respon-einvoice-barkir-public/tarik-respon-einvoice-barkir/e-invoice/getResponse?invoiceNumber=INVCAN190503](http://web.archive.org/web/20251011222909/https://apisdev-gw.beacukai.go.id/respon-einvoice-barkir-public/tarik-respon-einvoice-barkir/e-invoice/getResponse?invoiceNumber=INVCAN190503)

Sample Response :

{
  "message": "Success",
  "status": true,
  "data": [
    {
      "invoiceNumber": "INVOICETEST-20",
      "statusDescription": "[\"Catalogue SKU Number SKU_ABC10 found in 2024-11-18 for invoice INVOICETEST-20\",\"Catalogue SKU Number SKU_ABC10 price valid for Invoice number INVOICETEST-20 invoice date 2024-11-18\"]",
      "statusCode": "100",
      "currencyTypeCode": "USD",
      "invoiceDate": "2024-11-18",
      "receivedTime": "2024-11-18 16:53:50.222",
      "buyerName": "PENERIMA-1",
      "buyerPhoneNumber": "081233334444",
      "exchangeRate": "15759",
      "invoiceUrl": "-",
      "commodityDetail": [
        {
          "countQuantity": "1",
          "measurementUnit": "PCE",
          "exitToEntryChargeAmount": "4.5",
          "identityQualifierCode": "SKU_ABC10"
        }
      ]
    }
  ]
}

{
  "message": "Success",
  "status": true,
  "data": [
    {
      "invoiceNumber": "INVOICETEST-21",
      "statusDescription": "[\"Catalogue SKU Number SKU_ABC14 not found in 2024-11-18 for invoice INVOICETEST-21\"]",
      "statusCode": "900",
      "receivedTime": "2024-11-18 16:54:37.611",
      "commodityDetail": []
    }
  ]
}

Last updated 10 months ago
```