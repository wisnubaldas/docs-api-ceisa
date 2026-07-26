# Kirim Dokumen FTZ

Last updated 7 months ago

Kirim Dokumen

`POST` `{API_URL}/openapi/document`

 _Endpoint_ digunakan untuk mengirim dokumen pabean

### Query Parameters

| Field | Type | Description |
| --- | --- | --- |
| `isFinal` | `boolean` | true=data langsung dikirim; false=data menjadi draft; default=false |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `string` | Bearer Token yang didapatkan hasil otentikasi |

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `Data Pabean*` | `string` | JSONSchema Dokumen Pabean |

```json
{
    "status": "OK",
    "message": "Sukses, Data Berhasil Ditambahkan",
    "idHeader": {idHeader}
}

📄

[Kirim Dokumen FTZ01-1](web/20250523051917/https://ceisa40.gitbook.io/pia-ceisa40/api-services-pabean/kirim-dokumen-ftz/kirim-dokumen-ftz01-1.md)

[Kirim Dokumen FTZ01-2](web/20250523051917/https://ceisa40.gitbook.io/pia-ceisa40/api-services-pabean/kirim-dokumen-ftz/kirim-dokumen-ftz01-2.md)

[Kirim Dokumen FTZ01-3](web/20250523051917/https://ceisa40.gitbook.io/pia-ceisa40/api-services-pabean/kirim-dokumen-ftz/kirim-dokumen-ftz01-3.md)
```