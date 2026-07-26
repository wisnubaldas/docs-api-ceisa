> For the complete documentation index, see [llms.txt](https://nleapi.gitbook.io/product-docs/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://nleapi.gitbook.io/product-docs/api-kepabeanan/get-dokumen-pengeluaran-pemasukan-pabean.md).

# Get Dokumen Pengeluaran / Pemasukan Pabean

Untuk mengambil data dokumen pengeluaran / pemasukan pabean, dari / ke Pelabuhan berdasarkan parameter tertentu.

<table data-header-hidden><thead><tr><th width="330"></th><th></th></tr></thead><tbody><tr><td>Method</td><td>: GET</td></tr><tr><td>Endpoint</td><td>: /openapi/tps/dokumen-pabean</td></tr><tr><td>Authorization</td><td>: Bearer {access_token}</td></tr></tbody></table>

**Parameters**

<table><thead><tr><th width="176">Parameter</th><th width="155.33333333333331">Jenis</th><th>Penjelasan</th></tr></thead><tbody><tr><td>jnsDokumen</td><td>Query String</td><td>Lihat Referensi Kode Dokumen TPS untuk melihat daftar kode kantor</td></tr><tr><td>noDokumen</td><td>Query String</td><td>Nomor dokumen pemasukan / pengeluaran pabean</td></tr><tr><td>tglDokumen</td><td>Query String</td><td>Tanggal dokumen pemasukan / pengeluaran pabean, format : yyyy-mm-dd</td></tr><tr><td>kdKantor</td><td>Query String</td><td>Lihat Referensi Kode Kantor untuk melihat daftar kode kantor</td></tr></tbody></table>

**Contoh Penggunaan**

```
curl --location \
--request GET 'https://nlehub.kemenkeu.go.id/openapi/tps/dokumen-pabean?jnsDokumen=1&noDokumen=XXXXXX/WBC.03/KPP.MP.01/2021&tglDokumen=20210707&kdKantor=021200' \
--header 'Authorization: Bearer {access_token}'
```

**Response**

```
{
    "status": "success",
    "message": "data berhasil diambil",
    "data": {
        "nomor_dokumen_pengeluaran": "XXXXXX/WBC.19/KPP.MP.03/2021",
        "tanggal_dokumen_pengeluaran": "2021-07-09",
        "nomor_daftar": "XXXXXX",
        "tanggal_daftar": "2021-07-09",
        "kode_kantor_pendaftaran": "XXXXXX",
        "npwp_importir": "XXXXXXXXXXXXXXX",
        "nama_importir": "PT. XXXXX",
        "alamat_importir": "XXXXXXXX",
        "npwp_ppjk": "XXXXXXXXXXXXXXX",
        "nama_ppjk": "PT. XXXXXX",
        "alamat_ppjk": "XXXXXXX",
        "nama_sarana_pengangkut": "MV.LUCKY STAR",
        "nomor_voy_flight": "V203",
        "brutto": "100.6",
        "netto": "100.4",
        "detil_dokumen": [
            {
                "jenis_dokumen": "705",
                "nomor_dokumen": "XXXXXXXXXX",
                "tanggal_dokumen": "2021-06-18"
            }
        ],
        "detil_kemasan": [
            {
                "jenis_kemasan": "PK",
                "jumlah_kemasan": "50"
            }
        ],
        "detil_kontainer": [
            {
                "nomor_kontainer": "XXXXXXXXX",
                "ukuran_kontainer": "40",
                "jenis_muat": "F"
            },
            {
                "nomor_kontainer": "XXXXXXXXX",
                "ukuran_kontainer": "40",
                "jenis_muat": "F"
            },
            {
                "nomor_kontainer": "XXXXXXXXXX",
                "ukuran_kontainer": "40",
                "jenis_muat": "F"
            }
        ]
    }
}
```
