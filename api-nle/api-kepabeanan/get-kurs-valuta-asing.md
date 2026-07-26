> For the complete documentation index, see [llms.txt](https://nleapi.gitbook.io/product-docs/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://nleapi.gitbook.io/product-docs/api-kepabeanan/get-kurs-valuta-asing.md).

# Get Kurs Valuta Asing

Untuk mengambil data kurs valuta asing.

| Method   | : GET                                   |
| -------- | --------------------------------------- |
| Endpoint | : /openapi/kurs/{kode valuta}           |
| Header   | : Authorization: Bearer {access\_token} |

**Parameters**

| Parameter   | Jenis | Penjelasan                                                                        |
| ----------- | ----- | --------------------------------------------------------------------------------- |
| kode valuta | path  | dalam bentuk string, lihat Referensi Kode Valuta untuk melihat daftar kode valuta |

**Contoh Penggunaan**

```
curl --location \
--request GET 'https://nlehub.kemenkeu.go.id/openapi/kurs/USD' \
--header 'Authorization: Bearer {access_token}'
```

**Response**

```
{
    "status": "true",
    "message": "success",
    "data": [
        {
            "kodeValuta": "USD",
            "nilaiKurs": "15109",
            "tglAwalBerlaku": "2023-01-25",
            "tglAkhirBerlaku": "2023-01-31",
            "namaValuta": null,
            "gambar": null
        }
    ]
}
```
