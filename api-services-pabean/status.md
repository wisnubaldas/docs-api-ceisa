# Status & Respon

Mendapatkan Status dan Respon yang belum diambil

`GET` `{API_URL}/openapi/status`

 _Endpoint_ digunakan untuk mendapatkan riwayat status dan respon dari dokumen berdasarkan NPWP yang mengakses.

### Query Parameters

| Field | Type | Description |
| --- | --- | --- |
| `idPerusahaan*` | `String` | ID Perusahaan (NPWP) pengguna sesuai autentikasi |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String` | Token yang didapatkan hasil autentikasi. |

```json
{
    "dataStatus":[{
        "nomorAju":"Nomor Aju",
        "kodeStatus":"Kode Status",
        "nomorDaftar":"Nomor Daftar",
        "tanggalDaftar":"Tanggal Daftar",
        "waktuStatus":"Waktu Status",
        "keterangan":"Keterangan"
    }],
    "dataRespon":[{
        "nomorAju":"Nomor Aju",
        "kodeRespon":"Kode Respon",
        "nomorDaftar":"Nomor Daftar",
        "tanggalDaftar":"Tanggal Daftar",
        "nomorRespon":"Nomor Respon",
        "tanggalRespon":"Tanggal Respon",
        "waktuRespon":"Waktu Respon",
        "waktuStatus":"Waktu Status",
        "keterangan":"Keterangan",
        "pesan":[
            { "uraian1", "uraian2" }
        ],
        "Pdf":"Base64encode PDF file"
    }]
}

{
    "status": "Failed",
    "message": "Data Tidak Ditemukan",
    "dataStatus": [],
    "dataRespon": []
}

{
    "status": "Failed",
    "message": "Data Perusahaan Tidak Sesuai"
}

{
    "Exception": " Unauthorized application request"
}

Status dan Respon Per Nomor Aju

`GET` `{API_URL}/openapi/status/:nomorAju`

 _Endpoint_ digunakan untuk mendapatkan riwayat status dan respon dari dokumen per nomor aju.
```

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `nomorAju*` | `string` | Nomor Aju dokumen yang dicari. Maksimal 25 Nomor Aju |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `string` | Token yang didapatkan hasil autentikasi. |

```json
{
    "dataStatus":[{
        "nomorAju":"Nomor Aju",
        "kodeStatus":"Kode Status",
        "nomorDaftar":"Nomor Daftar",
        "tanggalDaftar":"Tanggal Daftar",
        "waktuStatus":"Waktu Status",
        "keterangan":"Keterangan"
    }],
    "dataRespon":[{
        "nomorAju":"Nomor Aju",
        "kodeRespon":"Kode Respon",
        "nomorDaftar":"Nomor Daftar",
        "tanggalDaftar":"Tanggal Daftar",
        "nomorRespon":"Nomor Respon",
        "tanggalRespon":"Tanggal Respon",
        "waktuRespon":"Waktu Respon",
        "waktuStatus":"Waktu Status",
        "keterangan":"Keterangan",
        "pesan":[
            { "uraian1", "uraian2" }
        ],
        "Pdf":"Base64encode PDF file"
    }]
}

{
    "Exception": " Unauthorized application request"
}

Download Respon PDF

`GET` `{API_URL}/openapi/download-respon?path={path}`

_Endpoint_ digunakan untuk mendapatkan Respon PDF
```

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `path*` | `string` | url path pdf |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `string` | Token yang didapatkan hasil autentikasi. |

```json
{
    // Response
}

{
    // Response
}

Download Respon Billing PDF

`GET` `{API_URL}/openapi/respon/billing`

 _Endpoint_ digunakan untuk mendapatkan Respon PDF

Query String Parameters

| Field | Type | Description |
| --- | --- | --- |
| `kodeBilling` | `string` | kode billing |

```

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `string` | Token yang didapatkan hasil autentikasi. |