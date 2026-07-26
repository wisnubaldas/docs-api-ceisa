# Kirim Dokumen TPB

Last updated 10 months ago

Kirim Dokumen

`POST` `{API_URL}/openapi/document`

 _Endpoint_ digunakan untuk mengirim dokumen pabean

### Query Parameters

| Field | Type | Description |
| --- | --- | --- |
| `isFinal` | `Boolean` | true=data langsung dikirim; false=data menjadi draft; default=false |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Bearer Token yang didapatkan dari hasil otorisasi |

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `Data Pabean*` | `String` | JSONSchema Dokumen Pabean |

```json
{
    "status": "OK",
    "message": "Sukses, Data Berhasil Ditambahkan",
    "idHeader": {idHeader}
}

📄

[Kirim Dokumen TPB - BC 2.3](web/20250613232515/https://ceisa40.gitbook.io/pia-ceisa40/api-services-pabean/kirim-dokumen-tpb/kirim-dokumen-tpb-bc-2.3.md)

[Kirim Dokumen TPB - BC 2.5](web/20250613232515/https://ceisa40.gitbook.io/pia-ceisa40/api-services-pabean/kirim-dokumen-tpb/kirim-dokumen-tpb-bc-2.5.md)

[Kirim Dokumen TPB - BC 2.6.1](web/20250613232515/https://ceisa40.gitbook.io/pia-ceisa40/api-services-pabean/kirim-dokumen-tpb/kirim-dokumen-tpb-bc-2.6.1.md)

[Kirim Dokumen TPB - BC 2.6.2](web/20250613232515/https://ceisa40.gitbook.io/pia-ceisa40/api-services-pabean/kirim-dokumen-tpb/kirim-dokumen-tpb-bc-2.6.2.md)

[Kirim Dokumen TPB - BC 2.7](web/20250613232515/https://ceisa40.gitbook.io/pia-ceisa40/api-services-pabean/kirim-dokumen-tpb/kirim-dokumen-tpb-bc-2.7.md)

[Kirim Dokumen TPB - BC 4.0](web/20250613232515/https://ceisa40.gitbook.io/pia-ceisa40/api-services-pabean/kirim-dokumen-tpb/kirim-dokumen-tpb-bc-4.0.md)

[Kirim Dokumen TPB - BC 4.1](web/20250613232515/https://ceisa40.gitbook.io/pia-ceisa40/api-services-pabean/kirim-dokumen-tpb/kirim-dokumen-tpb-bc-4.1.md)
```