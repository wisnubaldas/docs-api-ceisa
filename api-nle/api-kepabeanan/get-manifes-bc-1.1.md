> For the complete documentation index, see [llms.txt](https://nleapi.gitbook.io/product-docs/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://nleapi.gitbook.io/product-docs/api-kepabeanan/get-manifes-bc-1.1.md).

# Get Manifes BC 1.1

Untuk mengambil data Pelabuhan berdasarkan kode Kantor Bea dan Cukai.

<table data-header-hidden><thead><tr><th width="330"></th><th></th></tr></thead><tbody><tr><td>Method</td><td>: GET</td></tr><tr><td>Endpoint</td><td>: /openapi/manifes-bc11</td></tr><tr><td>Authorization</td><td>: Bearer {access_token}</td></tr></tbody></table>

**Parameters**

| Parameter  | Jenis        | Penjelasan                                                   |
| ---------- | ------------ | ------------------------------------------------------------ |
| kodeKantor | Query String | Lihat Referensi Kode Kantor untuk melihat daftar kode kantor |
| noHostBl   | Query String | nomor HBL                                                    |
| tglHostBl  | Query String | tanggal HBL dalam format : dd-mm-yyyy                        |

**Contoh Penggunaan**

```
curl --location \
--request GET 'https://nlehub.kemenkeu.go.id/openapi/manifes-bc11?kodeKantor=040300&noHostBl=xxxx&tglHostBl=11-02-2023' \
--header 'Authorization: Bearer {access_token}'
```

**Response**

```
{
    "bendera": "PA",
    "caraPengangkutan": "1",
    "idManifesDetail": "XXXXXX",
    "kodeGudang": "XXXX",
    "namaPemilik": "XXXXXXX",
    "namaPenerima": "XXXXXX",
    "namaSaranaPengangkut": "BAY BRIDGE",
    "nilaiSimi": "0.0,0.0",
    "noBc11": "000000",
    "noPos": "000000000000",
    "noVoyage": "0S",
    "npwpPemilik": "000000000000000",
    "npwpPenerima": null,
    "pelAsal": "SG",
    "pelBongkar": "IDTPP",
    "pelTransit": "IDTPP",
    "respon": "Gagal Ambil Data Similarity Nama Perusahaan dan Nama Consignee",
    "tglBc11": "00-00-0000",
    "tglTiba": "00-00-0000",
    "listContainer": [
        {
            "jenisKontainer": "8",
            "noKontainer": "XXXXXXXXXX",
            "tipeKontainer": null,
            "ukuranKontainer": "20"
        }
    ]
}
```
