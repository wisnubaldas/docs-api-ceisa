# Tarik Respon CN PIBK By Status

**Development**

URL Dev: [https://apisdev-gw.beacukai.go.id/respon-cn-pibk-barkir-public/tarik-respon-barkir](http://web.archive.org/web/20250911184447/https://apisdev-gw.beacukai.go.id/respon-cn-pibk-barkir-public/tarik-respon-barkir)

**Staging**

URL Staging : [https://sandbox-gw.beacukai.go.id/respon-cn-pibk-barkir-public/tarik-respon-barkir](http://web.archive.org/web/20250911184447/https://sandbox-gw.beacukai.go.id/respon-cn-pibk-barkir-public/tarik-respon-barkir)

**Production**

URL Prod : [https://apis-gw.beacukai.go.id/openapi/cnpibk](http://web.archive.org/web/20250911184447/https://apis-gw.beacukai.go.id/openapi/cnpibk)

Tarik Respon CN PIBK By Status

`GET` `{API_URL}/respon/tarik-respon-by-status?status=param`

 _Endpoint_ digunakan untuk mendapatkan respon CN PIBK berdasarkan status. Endpoint ini dapat digunakan apabila respon atas status tersebut belum ditarik sama sekali. Jika ingin menarik respon berulang, silahkan gunakan **service tarik respon** yang menggunakan parameter **nomorAju**

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Bearer Token yang didapatkan hasil otorisasi |

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `Data Status*` | `String` | JSONSchema Tarik Respon CN PIBK Barang Kiriman |
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

JSONSchema Tarik Respon CN PIBK

{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "$ref": "#/definitions/Welcome9",
    "definitions": {
        "Welcome9": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "status": {
                    "type": "string"
                }
            },
            "required": [
                "status"
            ],
            "title": "Welcome9"
        }
    }
}

Contoh Data Status

https://apisdev-gw.beacukai.go.id/respon-cn-pibk-barkir-public/tarik-respon-barkir/respon/tarik-respon-by-status?status=CLEAR_VALIDASI

param status diisi dengan status pada tabel referensi

Berikut ini contoh hasil tarik respon menggunakan status CLEAR_VALIDASI

{
    "message": "Success",
    "status": true,
    "data": [
        {
            "nomorAju": "12345678954321202303282828CN",
            "npwpPemberitahu": "12345678954321",
            "nomorBarang": "2828",
            "waktuRekam": "2023-03-28T07:14:39.200+00:00",
            "kodeStatus": "203"
        },
        {
            "nomorAju": "1234567895432120230328BK11CN",
            "npwpPemberitahu": "12345678954321",
            "nomorBarang": "BK11",
            "waktuRekam": "2023-03-28T07:32:53.304+00:00",
            "kodeStatus": "203"
        },
        {
            "nomorAju": "1234567895432120230328BK33CN",
            "npwpPemberitahu": "12345678954321",
            "nomorBarang": "BK33",
            "waktuRekam": "2023-03-28T07:39:45.195+00:00",
            "kodeStatus": "203"
        },
        {
            "nomorAju": "1234567895432120230328TEST123CN",
            "npwpPemberitahu": "12345678954321",
            "nomorBarang": "TEST123",
            "waktuRekam": "2023-03-30T01:36:26.617+00:00",
            "kodeStatus": "203"
        },
        {
            "nomorAju": "1234567895432120230330BK005CN",
            "npwpPemberitahu": "12345678954321",
            "nomorBarang": "BK005",
            "waktuRekam": "2023-03-30T03:44:50.899+00:00",
            "kodeStatus": "203"
        }
    ]
}

Tabel Data Status

Status

Keterangan

REJECT

Status yang digunakan untuk mengambil data CN PIBK yang ditolak (Kode Status 9xx)

XRAY

Status yang digunakan untuk mengambil data CN PIBK yang sudah melewati pengecekan XRAY (Kode Status 102)

CLEAR_VALIDASI

Status yang digunakan untuk mengambil data CN PIBK yang sudah melewati validasi (Kode Status 203)

PENELITIAN

Status yang digunakan untuk mengambil data CN PIBK yang sedang diteliti oleh PDTT (Kode Status 205)

MERAH

Status yang digunakan untuk mengambil data CN PIBK yang sedang diperiksa fisik (Kode Status 307)

LHP

Status yang digunakan untuk mengambil data CN PIBK yang telah direkam laporan pemeriksaan fisiknya (Kode Status 206)

NPD

Status yang digunakan untuk mengambil data CN PIBK yang sedang dalam NPD (Kode Status 305)

CLEAR_NPD

Status yang digunakan untuk mengambil data CN PIBK yang sudah berhasil NPD (Kode Status 211)

SPBL_NPBL

Status yang digunakan untuk mengambil data CN PIBK yang sedang dalam SPBL atau NPBL (Kode Status 304 atau 306)

CLEAR_SPBL_NPBL

Status yang digunakan untuk mengambil data CN PIBK yang sudah berhasil SPBL atau NPBL (Kode Status 212)

PENDING_PERSETUJUAN

Status yang digunakan untuk mengambil data CN PIBK yang sudah penetapan namun belum xray atau belum ada manifes (Kode Status 501, 502, 503, 504)

BILLING

Status yang digunakan untuk mengambil data CN PIBK yang telah terbit billing (Kode Status 303 atau 310)

PK_SPPBMCP

Status yang digunakan untuk mengambil data CN PIBK yang telah terbit SPPBMCP atau Persetujuan Keluar (Kode Status 401 atau 403) 

SPTNP

Status yang digunakan untuk mengambil data CN PIBK yang telah terbit SPTNP (Kode Status 402)

SPPB

Status yang digunakan untuk mengambil data CN PIBK yang telah terbit SPPB (Kode Status 404)

LUNAS

Status yang digunakan untuk mengambil data CN PIBK yang telah lunas billing (Kode Status 405)

EXPIRED

Status yang digunakan untuk mengambil data CN PIBK yang billingnya telah jatuh tempo (Kode Status 406 atau 917)

BELUM_GATE

Status yang digunakan untuk mengambil data CN PIBK yang belum gate (Kode Status 408)

Last updated 9 months ago
```