# Status Drafting Dokumen

Endpoint digunakan untuk mengecek status drafting dokumen Manifes ke Ceisa 4.0

`GET` `{API_URL}/v1/temp/{nomorAju}`

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `nomorAju` | `string` | Nomor Aju Draft Dokumen Manifes |

```json
{
    "status": "Ok",
    "data : ": [
        {
            "nomorAju": "nomorAju",
            "idJenisManifes": "kodeJenisManifes",
            "namaSaranaAngkut": "namaSaranaAngkut",
            "imoNumber": "imoNumber",
            "tanggalTiba": "dd-mm-yyyy HH:mm:ss",
            "status": "kodeStatus",
            "waktuRekam": "dd-mm-yyyy HH:mm:ss",
            "idPerusahaan": "idPerusahaan",
            "nomorDaftar": nomorDaftar,
            "tanggalDaftar": tanggalDaftar,
            "tanggalBerangkat": tanggalBerangkat,
            "kodeKantor": "kodeKantor",
            "nomorVoyage": "nomorVoyage",
            "modePengangkut": "modePengangkut"
        }
    ]
}

Last updated 10 months ago

📄
```