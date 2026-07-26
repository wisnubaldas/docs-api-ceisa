# Delete Drafting Dokumen

Endpoint digunakan untuk menghapus draft dokumen Manifes

Delete hanya untuk status **draft** dan **ready**

` DELETE` `{API_URL}/nvocc/hapus/{nomor_aju}`

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authentication` | `string` | Token yang didapatkan hasil autentikasi |

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `nomorAju` | `string` | Nomor Aju Draft Dokumen Manifes |

```json
{
    "status": "OK",
    "message": "Sukses, data berhasil dihapus"
}

Last updated 4 months ago

📄
```