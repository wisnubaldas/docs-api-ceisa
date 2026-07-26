> For the complete documentation index, see [llms.txt](https://nleapi.gitbook.io/product-docs/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://nleapi.gitbook.io/product-docs/api-kepabeanan/get-kode-pelabuhan-by-kode-kantor.md).

# Get Kode Pelabuhan by Kode Kantor

Untuk mengambil data Pelabuhan berdasarkan kode Kantor Bea dan Cukai.

<table data-header-hidden><thead><tr><th width="330"></th><th></th></tr></thead><tbody><tr><td>Method</td><td>: GET</td></tr><tr><td>Endpoint</td><td>: /openapi/pelabuhan/kodeKantor/{kodeKantor}</td></tr><tr><td>Authorization</td><td>: Bearer {access_token}</td></tr></tbody></table>

**Parameters**

| Parameter   | Jenis | Penjelasan                                                                        |
| ----------- | ----- | --------------------------------------------------------------------------------- |
| kode kantor | path  | dalam bentuk string, lihat Referensi Kode Kantor untuk melihat daftar kode kantor |

**Contoh Penggunaan**

```
curl --location \
--request GET 'https://nlehub.kemenkeu.go.id/openapi/pelabuhan/kodeKantor/040300' \
--header 'Authorization: Bearer {access_token}'
```

**Response**

```
{
    "status": true,
    "message": "success",
    "data": [
        {
            "kodePelabuhan": "IDJKT",
            "namaPelabuhan": "Jakarta / Pasar Ikan",
            "kodeKantor": "040300",
            "namaKantor": null
        },
        {
            "kodePelabuhan": "IDTPP",
            "namaPelabuhan": "Tanjung Priok",
            "kodeKantor": "040300",
            "namaKantor": null
        }
    ]
}
```
