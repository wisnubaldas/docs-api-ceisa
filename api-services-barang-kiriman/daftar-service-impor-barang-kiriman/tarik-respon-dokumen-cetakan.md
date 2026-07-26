# Tarik Respon Dokumen Cetakan

  * **Development**

URL Dev: [https://apisdev-gw.beacukai.go.id](http://web.archive.org/web/20251011220822/https://apisdev-gw.beacukai.go.id/)

  * **Production**

URL Prod : [https://apis-gw.beacukai.go.id](http://web.archive.org/web/20251011220822/https://apis-gw.beacukai.go.id/)

Download Respon PDF

`GET` `{API_URL}/openapi/download-respon?path={path}`

_Endpoint_ digunakan untuk mendapatkan Respon PDF

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `path*` | `String` | url path pdf |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Token yang didapatkan hasil autentikasi. |
| `200: OK` | `401: Unauthorized` | 400: Bad Request |

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

Last updated 10 months ago
```