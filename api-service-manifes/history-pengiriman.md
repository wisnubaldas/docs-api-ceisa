# History Pengiriman

Endpoint untuk melihat history pengiriman dokumen manifes

`GET` `{API_URL}/v1/history/{nomor_aju}`

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `noAju` | `string` | Nomor aju dokumen yang dicari |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authentication` | `string` | Token yang didapatkan hasil autentikasi |

```json
{
    {
  "status": true,
  "message": "success",
  "data": [
    {
      "id_respon": "id_respon",
      "nomor_respon": "nomor_respon",
      "nomor_aju": "nomor_aju",
      "id_jenis_manifes": "id_jenis_manifes",
      "waktu_rekam": "yyyy-mm-ddTHH:mm:ss.324+00:00",
      "nip_rekam": nip_rekam,
      "id_nvocc_header": id_nvocc_header,
      "kode_kantor": "kode_kantor",
      "status": "status",
      "approval": approval,
      "npwp": "npwp",
      "pdf": "pdf"
    },
}

Last updated 9 months ago

📄
```