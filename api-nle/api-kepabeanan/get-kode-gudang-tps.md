> For the complete documentation index, see [llms.txt](https://nleapi.gitbook.io/product-docs/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://nleapi.gitbook.io/product-docs/api-kepabeanan/get-kode-gudang-tps.md).

# Get Kode Gudang / TPS

Untuk mengambil data Gudang Timbun barang berdasarkan kode Kantor Bea dan Cukai.

<table data-header-hidden><thead><tr><th width="330"></th><th></th></tr></thead><tbody><tr><td>Method</td><td>: GET</td></tr><tr><td>Endpoint</td><td>: /openapi/gudangTPS/kodeKantor/{kode kantor}</td></tr><tr><td>Authorization</td><td>: Bearer {access_token}</td></tr></tbody></table>

**Parameters**

| Parameter   | Jenis | Penjelasan                                                                        |
| ----------- | ----- | --------------------------------------------------------------------------------- |
| kode kantor | path  | dalam bentuk string, lihat Referensi Kode Kantor untuk melihat daftar kode kantor |

**Contoh Penggunaan**

```
curl --location \
--request GET 'https://nlehub.kemenkeu.go.id/openapi/gudangTPS/kodeKantor/030500' \
--header 'Authorization: Bearer {access_token}'
```

**Response**

```
{
    "status": true,
    "message": "sucess",
    "data": [
        {
            "kodeGudang": "GLK",
            "namaGudang": "Gudang Luar Kawasan Pabean",
            "kodeKantor": "030500"
        },
        {
            "kodeGudang": "KPTJQ",
            "namaGudang": "Kawasan Pabean Pelabuhan Tanjungpandan",
            "kodeKantor": "030500"
        },
        {
            "kodeGudang": "PTP1",
            "namaGudang": "Lapangan Penimbunan PTP",
            "kodeKantor": "030500"
        },
        {
            "kodeGudang": "PTP2",
            "namaGudang": "Lapangan Penimbunan Peti Kemas PTP",
            "kodeKantor": "030500"
        },
        {
            "kodeGudang": "PTP3",
            "namaGudang": "Gudang Penimbunan PTP",
            "kodeKantor": "030500"
        },
        {
            "kodeGudang": "PTPD",
            "namaGudang": "PELABUHAN TANJUNG PANDAN",
            "kodeKantor": "030500"
        },
        {
            "kodeGudang": "RJ",
            "namaGudang": "Gudang PT Rebinmas",
            "kodeKantor": "030500"
        },
        {
            "kodeGudang": "UTPK",
            "namaGudang": "Terminal Peti Kemas",
            "kodeKantor": "030500"
        }
    ],
    "total": 8
}
```
