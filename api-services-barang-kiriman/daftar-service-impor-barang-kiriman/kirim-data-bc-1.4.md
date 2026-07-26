# Kirim Data BC 1.4

untuk PT.POS Indonesia mengirim data BC 1.4

  * **Development**

URL Dev: [https://apisdev-gw.beacukai.go.id/barkir-public-service/public-barkir](http://web.archive.org/web/20251119063837/https://apisdev-gw.beacukai.go.id/barkir-public-service/public-barkir)

  * **Production**

URL Prod : [https://apis-gw.beacukai.go.id/openapi/cnpibk](http://web.archive.org/web/20251119063837/https://apis-gw.beacukai.go.id/openapi/cnpibk)

Kirim Dokumen

`POST` `{API_URL}/bc14/kirim-data`

 _Endpoint_ digunakan untuk mengirim data BC 1.4

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Bearer Token yang didapatkan hasil otorisasi |

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `Data BC 1.4*` | `String` | JSONSchema Kirim Data BC 1.4 Barang Kiriman |
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

**Notes: Jika dari awal belum terdapat detail barang, gunakan array kosong [] untuk pengisian payload barang**

JSONSchema Kirim Data BC 1.4

{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": [
    {
      "type": "object",
      "properties": {
        "bruto": {
          "type": "string"
        },
        "flightName": {
          "type": "string"
        },
        "flightNo": {
          "type": "string"
        },
        "jamDatang": {
          "type": "string"
        },
        "jamBerangkat": {
          "type": "string"
        },
        "kantong": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "barang": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "alamatPenerima": {
                          "type": "string"
                        },
                        "alamatPengirim": {
                          "type": "string"
                        },
                        "brutoBarang": {
                          "type": "string"
                        },
                        "hargaBarang": {
                          "type": "string"
                        },
                        "jumlahSatuan": {
                          "type": "string"
                        },
                        "namaPenerima": {
                          "type": "string"
                        },
                        "namaPengirim": {
                          "type": "string"
                        },
                        "noBarang": {
                          "type": "string"
                        },
                        "posBarang": {
                          "type": "string"
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
                        "subPosBarang",
                        "subSubPosBarang",
                        "subSubSubPosBarang",
                        "uraianBarang"
                      ]
                    },
                    {
                      "type": "object",
                      "properties": {
                        "alamatPenerima": {
                          "type": "string"
                        },
                        "alamatPengirim": {
                          "type": "string"
                        },
                        "brutoBarang": {
                          "type": "string"
                        },
                        "hargaBarang": {
                          "type": "string"
                        },
                        "jumlahSatuan": {
                          "type": "string"
                        },
                        "namaPenerima": {
                          "type": "string"
                        },
                        "namaPengirim": {
                          "type": "string"
                        },
                        "noBarang": {
                          "type": "string"
                        },
                        "posBarang": {
                          "type": "string"
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
                        "subPosBarang",
                        "subSubPosBarang",
                        "subSubSubPosBarang",
                        "uraianBarang"
                      ]
                    }
                  ]
                },
                "brutoKantong": {
                  "type": "string"
                },
                "jnsDokAsal": {
                  "type": "string"
                },
                "noAju": {
                  "type": "string"
                },
                "noDokAsal": {
                  "type": "string"
                },
                "noKantong": {
                  "type": "string"
                },
                "noSegel": {
                  "type": "string"
                },
                "posBarang": {
                  "type": "string"
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
                "tglDokAsal": {
                  "type": "string"
                }
              },
              "required": [
                "barang",
                "brutoKantong",
                "jnsDokAsal",
                "noAju",
                "noDokAsal",
                "noKantong",
                "noSegel",
                "posBarang",
                "subPosBarang",
                "subSubPosBarang",
                "subSubSubPosBarang",
                "tglDokAsal"
              ]
            }
          ]
        },
        "kodeKantorBcAsal": {
          "type": "string"
        },
        "kodeKantorBcTujuan": {
          "type": "string"
        },
        "kodeKantorPosAsal": {
          "type": "string"
        },
        "kodeKantorPosTujuan": {
          "type": "string"
        },
        "kodeTpsAsal": {
          "type": "string"
        },
        "kodeTpsTujuan": {
          "type": "string"
        },
        "namaPengelolaTpsAsal": {
          "type": "string"
        },
        "namaPengelolaTpsTujuan": {
          "type": "string"
        },
        "noAju": {
          "type": "string"
        },
        "tglBrgkt": {
          "type": "string"
        },
        "tglDatang": {
          "type": "string"
        }
      },
      "required": [
        "bruto",
        "flightName",
        "flightNo",
        "jamDatang",
        "jamBerangkat",
        "kantong",
        "kodeKantorBcAsal",
        "kodeKantorBcTujuan",
        "kodeKantorPosAsal",
        "kodeKantorPosTujuan",
        "kodeTpsAsal",
        "kodeTpsTujuan",
        "namaPengelolaTpsAsal",
        "namaPengelolaTpsTujuan",
        "noAju",
        "tglBrgkt",
        "tglDatang"
      ]
    }
  ]
}

Contoh Data BC 1.4 (Tanpa Detail)

[
   {
      "bruto":"2",
      "flightName":"Garuda Indonesia",
      "flightNo":"GA123",
      "jamDatang":"12:00:00",
      "jamBerangkat":"01:00:00",
      "kantong":[
         {
            "barang":[],
            "brutoKantong":"100",
            "jnsDokAsal":"CN",
            "noAju":"12345",
            "noDokAsal":"67890",
            "noKantong":"K0001",
            "noSegel":"S0001",
            "posBarang":"0000",
            "subPosBarang":"0000",
            "subSubPosBarang":"0000",
            "subSubSubPosBarang":"0000",
            "tglDokAsal":"2024-03-01"
         }
      ],
      "kodeKantorBcAsal":"050100",
      "kodeKantorBcTujuan":"009000",
      "kodeKantorPosAsal":"12345",
      "kodeKantorPosTujuan":"67890",
      "kodeTpsAsal":"TPS001",
      "kodeTpsTujuan":"TPS002",
      "namaPengelolaTpsAsal":"VANANDA",
      "namaPengelolaTpsTujuan":"RAHADIKA",
      "noAju":"200320242",
      "tglBrgkt":"2024-03-01",
      "tglDatang":"2024-03-02"
   }
]

Contoh Data BC 1.4

[
   {
      "bruto":"2",
      "flightName":"Garuda Indonesia",
      "flightNo":"GA123",
      "jamDatang":"12:00:00",
      "jamBerangkat":"01:00:00",
      "kantong":[
         {
            "barang":[
               {
                  "alamatPenerima":"Jalan Pahlawan No. 10",
                  "alamatPengirim":"Jalan Merdeka No. 15",
                  "brutoBarang":"90",
                  "hargaBarang":"100",
                  "jumlahSatuan":"2",
                  "namaPenerima":"Budi",
                  "namaPengirim":"Andi",
                  "noBarang":"CN200324-1",
                  "posBarang":"0000",
                  "subPosBarang":"0001",
                  "subSubPosBarang":"0001",
                  "subSubSubPosBarang":"0000",
                  "uraianBarang":"Alat Tulis"
               },
               {
                  "alamatPenerima":"Jalan Pahlawan No. 1",
                  "alamatPengirim":"Jalan Merdeka No. 2",
                  "brutoBarang":"10",
                  "hargaBarang":"200",
                  "jumlahSatuan":"3",
                  "namaPenerima":"Dodi",
                  "namaPengirim":"Cici",
                  "noBarang":"CN200324-2",
                  "posBarang":"0000",
                  "subPosBarang":"0002",
                  "subSubPosBarang":"0002",
                  "subSubSubPosBarang":"0000",
                  "uraianBarang":"Alat Mancing"
               }
            ],
            "brutoKantong":"100",
            "jnsDokAsal":"CN",
            "noAju":"12345",
            "noDokAsal":"67890",
            "noKantong":"K0001",
            "noSegel":"S0001",
            "posBarang":"0000",
            "subPosBarang":"0000",
            "subSubPosBarang":"0000",
            "subSubSubPosBarang":"0000",
            "tglDokAsal":"2024-03-01"
         }
      ],
      "kodeKantorBcAsal":"050100",
      "kodeKantorBcTujuan":"009000",
      "kodeKantorPosAsal":"12345",
      "kodeKantorPosTujuan":"67890",
      "kodeTpsAsal":"TPS001",
      "kodeTpsTujuan":"TPS002",
      "namaPengelolaTpsAsal":"VANANDA",
      "namaPengelolaTpsTujuan":"RAHADIKA",
      "noAju":"200320242",
      "tglBrgkt":"2024-03-01",
      "tglDatang":"2024-03-02"
   }
]

Last updated 12 months ago
```