# Tarik Billing Konsolidasi

Last updated 6 months ago

**Development**

URL Dev: 

**Staging**

URL Staging : 

**Production**

URL Prod : 

Tarik Billing Konsolidasi

`GET` `{API_URL}/billing-konsolidasi/tarik-billing`

 _Endpoint_ digunakan untuk mendapatkan respon Billing Konsolidasi. Respon dapat dilakukan untuk keseluruhan billing konsolidasi yang belum pernah dilakukan tarik respon atau respon berdasarkan Kode Billing (dapat dilakukan berkali-kali).

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `kodeBilling` | `String` | Kode Billing yang ingin dicari |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Bearer Token yang didapatkan hasil otorisasi |
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

Berikut ini adalah contoh respon hasil tarikan billing konsol jika menggunakan parameter kodeBilling

{
  "message": "Success",
  "status": true,
  "data": [
    {
      "nomorSppbmcpKonsol": "000003",
      "tanggalSppbmcpKonsol": "2023-07-12 00:00:00.0",
      "npwpPemberitahu": "123456789012345",
      "namaPemberitahu": "PT DEMOBEACUKAI",
      "kodeKantor": "009000",
      "kodeBilling": "640230750749647",
      "totalNilaiBm": "1000",
      "totalNilaiPph": "0",
      "totalNilaiPpn": "236000",
      "totalNilaiPpnbm": "0",
      "totalNilaiBmtp": "0",
      "totalNilaiBmad": "0",
      "totalNilaiTagihan": "237000",
      "tanggalBilling": "2023-07-12 00:00:00.0",
      "tanggalJatuhTempo": "2023-07-14 00:00:00.0",
      "urlReport": "https://apisdev-gw.beacukai.go.id/openapi/download-respon?path=report_barkir/billing/fd2a50c1-027c-4017-85bb-0ea3535f2b1b-640230750749647_303_billing.pdf",
      "detailSppbmcp": [
        {
          "nomorBarang": "HNRO830",
          "tanggalHouse": "2023-06-19 00:00:00.0",
          "nomorSppbmcp": "000008",
          "tanggalSppbmcp": "2023-06-26 00:00:00.0",
          "totalNilaiBm": "0",
          "totalNilaiPph": "0",
          "totalNilaiPpn": "235000",
          "totalNilaiPpnbm": "0",
          "totalNilaiBmtp": "0",
          "totalNilaiBmad": "0",
          "totalNilaiTagihan": "235000"
        },
        {
          "nomorBarang": "BK260623-4",
          "tanggalHouse": "2023-06-26 00:00:00.0",
          "nomorSppbmcp": "000009",
          "tanggalSppbmcp": "2023-06-26 00:00:00.0",
          "totalNilaiBm": "1000",
          "totalNilaiPph": "0",
          "totalNilaiPpn": "1000",
          "totalNilaiPpnbm": "0",
          "totalNilaiBmtp": "0",
          "totalNilaiBmad": "0",
          "totalNilaiTagihan": "2000"
        }
      ]
    }
  ]
}

📄

[https://apisdev-gw.beacukai.go.id/respon-billing-konsolidasi-barkir-public/tarik-billing-konsolidasi-barkir](https://web.archive.org/web/20250613221610/https://apisdev-gw.beacukai.go.id/respon-billing-konsolidasi-barkir-public/tarik-billing-konsolidasi-barkir)

[https://sandbox-gw.beacukai.go.id/respon-billing-konsolidasi-barkir-public/tarik-billing-konsolidasi-barkir](https://web.archive.org/web/20250613221610/https://sandbox-gw.beacukai.go.id/respon-billing-konsolidasi-barkir-public/tarik-billing-konsolidasi-barkir)

[https://apis-gw.beacukai.go.id/openapi/cnpibk](https://web.archive.org/web/20250613221610/https://apis-gw.beacukai.go.id/openapi/cnpibk)
```