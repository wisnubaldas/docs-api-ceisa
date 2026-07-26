> For the complete documentation index, see [llms.txt](https://nleapi.gitbook.io/product-docs/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://nleapi.gitbook.io/product-docs/api-kepabeanan/get-respon-plp-pindah-lokasi-penimbunan.md).

# Get Respon PLP (Pindah Lokasi Penimbunan)

Untuk mengambil data respon dari nomor pendaftaran permohonan PLP (Pindah Lokasi Penimbunan) berdasarkan parameter tertentu.

<table data-header-hidden><thead><tr><th width="330"></th><th></th></tr></thead><tbody><tr><td>Method</td><td>: GET</td></tr><tr><td>Endpoint</td><td>: /openapi/respon-plp</td></tr><tr><td>Authorization</td><td>: Bearer {access_token}</td></tr></tbody></table>

**Parameters**

<table><thead><tr><th width="176">Parameter</th><th width="155.33333333333331">Jenis</th><th>Penjelasan</th></tr></thead><tbody><tr><td>nomorPlp</td><td>Query String</td><td>Lihat Referensi Kode Dokumen TPS untuk melihat daftar kode kantor</td></tr><tr><td>tanggalPlp</td><td>Query String</td><td>Tanggal dokumen pemasukan / pengeluaran pabean, format : yyyy-mm-dd</td></tr><tr><td>refNumber</td><td>Query String</td><td>Nomor Referensi berdasarkan data permohonan PLP</td></tr><tr><td>kodeKantor</td><td>Query String</td><td>Lihat Referensi Kode Kantor untuk melihat daftar kode kantor</td></tr></tbody></table>

**Contoh Penggunaan**

```
curl --location \
--request GET 'https://nlehub.kemenkeu.go.id/openapi/respon-plp?nomorPlp=XXXXXX&tanggalPlp=2023-03-03&refNumber=XXXXXXX&kodeKantor=050100' \
--header 'Authorization: Bearer {access_token}'
```

**Response**

```
{
    "status": "success",
    "message": "data berhasil diambil",
    "data": {
        "nomorPlp": "xxxxxx",
        "tanggalPlp": "xxxx-xx-xx",
        "refNumber": "xxxxxxxxxxxxx",
        "kode_tps_asal": "GRD1",
        "gudang_asal": "GIMP",
        "kode_tps_tujuan": "MSA1",
        "gudang_tujuan": "MSA5",
        "nomor_surat": "xxxx/xx/xx/xxxx/xxxx",
        "tanggal_surat": "xxxx-xx-xx",
        "nama_pengangkut": null,
        "nomor_voy_flight": "xxxx",
        "nomor_bc11": "xxxxxx",
        "tanggal_bc11": "xxxx-xx-xx",
        "alasan_reject": null,
        "detil_kemasan": [
            {
                "jenis_kemasan": "PK",
                "jumlah_kemasan": "1",
                "nomor_bl_awb": "xxxxxxxxxx",
                "tanggal_bl_awb": "xxxx-xx-xx",
                "flag_setuju": "Y"
            }
        ]
    }
}
```
