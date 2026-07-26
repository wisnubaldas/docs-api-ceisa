# Tarik Respon E-Catalogue

Used by Marketplaces to get response for E-Catalogue data

  * **Development**

URL Dev: [https://apisdev-gw.beacukai.go.id/respon-ekatalog-barkir-public/tarik-respon-ekatalog-barkir](http://web.archive.org/web/20251011225613/https://apisdev-gw.beacukai.go.id/respon-ekatalog-barkir-public/tarik-respon-ekatalog-barkir/e-catalogue/getResponse)

  * **Production**

URL Prod : [https://apis-gw.beacukai.go.id/respon-ekatalog-barkir-public/tarik-respon-ekatalog-barkir/e-catalogue/getResponse](http://web.archive.org/web/20251011225613/https://apis-gw.beacukai.go.id/respon-ekatalog-barkir-public/tarik-respon-ekatalog-barkir/e-catalogue/getResponse)

Tarik Respon E-Catalogue

`GET` `{API_URL}/e-catalogue/getResponse`

API _Endpoint_ to get response for E-Catalogue data. It shows response for all ECatalogues which is not already downloaded or taken before, if you want to get the same data again, you can use identityQualifierCode as a parameter.

### Query Parameters

| Field | Type | Description |
| --- | --- | --- |
| `identityQualifierCode` | `String` | SKU Number / Identity Qualifier Code |
| `page*` | `Integer` | default = 1 |
| `limit*` | `Integer` | default = 10, max = 100 |

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

Sample Using Param: [https://apisdev-gw.beacukai.go.id/respon-ekatalog-barkir-public/tarik-respon-ekatalog-barkir/e-catalogue/getResponse?identityQualifierCode=CATALOG-ICAN-2-0612&limit=10&page=1](http://web.archive.org/web/20251011225613/https://apisdev-gw.beacukai.go.id/respon-ekatalog-barkir-public/tarik-respon-ekatalog-barkir/e-catalogue/getResponse?identityQualifierCode=CATALOG-ICAN-2-0612&limit=10&page=1)

Sample Response : 

{
  "totalData": 30,
  "data": [
    {
      "no": 1,
      "identityQualifierCode": "CATALOG-ICAN-2-0612",
      "statusDescription": "Redundant E-Catalogue Data",
      "statusCode": "900",
      "receivedTime": "2023-09-14 10:07:34.049"
    },
    {
      "no": 2,
      "identityQualifierCode": "CATALOG-ICAN-2-0612",
      "statusDescription": "Redundant E-Catalogue Data",
      "statusCode": "900",
      "receivedTime": "2023-08-16 12:23:35.31"
    },
    {
      "no": 3,
      "identityQualifierCode": "CATALOG-ICAN-2-0612",
      "statusDescription": "Redundant E-Catalogue Data",
      "statusCode": "900",
      "receivedTime": "2023-08-15 09:33:42.754"
    },
    {
      "no": 4,
      "identityQualifierCode": "CATALOG-ICAN-2-0612",
      "statusDescription": "Redundant E-Catalogue Data",
      "statusCode": "900",
      "receivedTime": "2023-09-14 10:04:55.205"
    },
    {
      "no": 5,
      "identityQualifierCode": "CATALOG-ICAN-2-0612",
      "statusDescription": "Redundant E-Catalogue Data",
      "statusCode": "900",
      "receivedTime": "2023-08-15 14:31:48.147"
    },
    {
      "no": 6,
      "identityQualifierCode": "CATALOG-ICAN-2-0612",
      "statusDescription": "Redundant E-Catalogue Data",
      "statusCode": "900",
      "receivedTime": "2023-08-16 12:22:28.15"
    },
    {
      "no": 7,
      "identityQualifierCode": "CATALOG-ICAN-2-0612",
      "statusDescription": "E-Catalogue Sent Successfully",
      "statusCode": "200",
      "startingDate": "2023-09-27",
      "currencyTypeCode": "USD",
      "valueAmount": "14",
      "measurementUnit": "PCE",
      "itemDescription": "CAR TOYS 2",
      "sellerId": "-",
      "receivedTime": "2023-09-14 10:07:51.916"
    },
    {
      "no": 8,
      "identityQualifierCode": "CATALOG-ICAN-2-0612",
      "statusDescription": "E-Catalogue Sent Successfully",
      "statusCode": "200",
      "startingDate": "2023-09-27",
      "currencyTypeCode": "USD",
      "valueAmount": "16",
      "measurementUnit": "PCE",
      "itemDescription": "CAR TOYS 2",
      "sellerId": "-",
      "receivedTime": "2023-09-14 10:08:02.036"
    },
    {
      "no": 9,
      "identityQualifierCode": "CATALOG-ICAN-2-0612",
      "statusDescription": "E-Catalogue Sent Successfully",
      "statusCode": "200",
      "startingDate": "2023-09-27",
      "currencyTypeCode": "USD",
      "valueAmount": "15",
      "measurementUnit": "PCE",
      "itemDescription": "CAR TOYS 2",
      "sellerId": "-",
      "receivedTime": "2023-09-14 10:07:55.269"
    },
    {
      "no": 10,
      "identityQualifierCode": "CATALOG-ICAN-2-0612",
      "statusDescription": "E-Catalogue Sent Successfully",
      "statusCode": "200",
      "startingDate": "2023-09-26",
      "currencyTypeCode": "USD",
      "valueAmount": "10",
      "measurementUnit": "PCE",
      "itemDescription": "CAR TOYS 2",
      "sellerId": "-",
      "receivedTime": "2023-09-14 09:59:09.308"
    }
  ],
  "totalPage": 3,
  "message": "Success",
  "status": true
}

Last updated 10 months ago
```