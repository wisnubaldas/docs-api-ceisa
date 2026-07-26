# Cek Referensi

Kurs

`GET` `{API_URL}/openapi/kurs/{kodeValuta}`

_Endpoint_ digunakan untuk menampilkan nilai kurs terkini

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `kodeValuta` | `string` | Kode valuta berdasarkan Referensi Valuta |
| `tanggal` | `string` | Tanggal nilai kurs yang ingin diketahui. Format: yyyy-mm-dd |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authentication` | `string` | Token yang didapatkan hasil autentikasi |

```json
{
  "body": {},
  "statusCode": "100 CONTINUE",
  "statusCodeValue": 0
}

Lartas

`GET` `{API_URL}/openapi/hs-lartas?kodeHs={kodeHs}`

_Endpoint_ digunakan untuk menampilkan data larangan pembatasan (Lartas) berdasarkan kode HS
```

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `kodeHs` | `string` | Kode HS |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authentication` | `string` | Token yang didapatkan hasil autentikasi |

```json
{
  "body": {},
  "statusCode": "100 CONTINUE",
  "statusCodeValue": 0
}

Tarif

`GET` `{API_URL}/openapi/tarif-hs?kodeHs={kodeHs}&tanggal={tanggal}`

_Endpoint_ digunakan untuk menampilkan data pos tarif berdasarkan kode HS dan tanggal
```

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `kodeHs` | `string` | Kode HS |
| `tanggal` | `string` | Tanggal nilai tarif yang ingin diketahui. Format: yyyy-mm-dd |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authentication` | `string` | Token yang didapatkan hasil autentikasi |

Manifes

`GET` `{API_URL}/openapi/manifes-bc11?noHostBl={nomorBL}&tglHostBl={tanggalBL)&kodeKantor={kodeKantor}&nama={namaImportir}`

_Endpoint_ digunakan untuk menampilkan data manifes berdasarkan BC 1.1

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `kodeKantor` | `string` | Kode Kantor berdasarkan Referensi Kantor |
| `nama` | `string` | Nama Importir |
| `noHostBl` | `string` | Nomor host B/L |
| `tglHostBl` | `string` | Tanggal host B/L dengan format DD-MM-YYYY |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authentication` | `string` | Token yang didapatkan hasil autentikasi |

```json
{
  "bendera": "string",
  "caraPengangkutan": "string",
  "idManifesDetail": "string",
  "kodeGudang": "string",
  "listContainer": [
    {
      "jenisKontainer": "string",
      "noKontainer": "string",
      "tipeKontainer": "string",
      "ukuranKontainer": "string"
    }
  ],
  "namaPemilik": "string",
  "namaPenerima": "string",
  "namaSaranaPengangkut": "string",
  "nilaiSimi": "string",
  "noBc11": "string",
  "noPos": "string",
  "noVoyage": "string",
  "npwpPemilk": "string",
  "npwpPenerima": "string",
  "pelAsal": "string",
  "pelBongkar": "string",
  "pelTransit": "string",
  "respon": "string",
  "tglBc11": "string",
  "tglTiba": "string"
}

Kode Pelabuhan 

`GET` {API URL} /openapi/pelabuhan/kata/{kata}

Digunakan untuk mendapatkan data pelabuhan berdasarkan uraian nama pelabuhan
```

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `kata` | `String` | dalam bentuk string, lihat misal "SAO" |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Token yang didapatkan hasil autentikasi. Bearer {access_token} |

```json
{
    "status": "OK",
    "message": "success",
    "data": [
        {
            "kodePelabuhan": "AORSN",
            "namaPelabuhan": "River Sao Nicolau",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "ARSAO",
            "namaPelabuhan": "San Antonio de Areco",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "ATSAO",
            "namaPelabuhan": "Sankt Peter am Ottersbach",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRAFR",
            "namaPelabuhan": "Barra De Sao Francisco",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRASO",
            "namaPelabuhan": "Aguas de Sao Pedro",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRBJA",
            "namaPelabuhan": "Sao Borja",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRBSM",
            "namaPelabuhan": "Barra de Sao Miguel",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRCFA",
            "namaPelabuhan": "Caninde do Sao Francisco",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRCGH",
            "namaPelabuhan": "Congonhas Apt/Sao Paolo",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRCUK",
            "namaPelabuhan": "SAO PAULO-CUMBICA APT                   ",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRGRU",
            "namaPelabuhan": "Guarulhos Apt/Sao Paolo",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRJRP",
            "namaPelabuhan": "Sao Jose do Rio Pardo",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRLCU",
            "namaPelabuhan": "Lagoa da Confusao",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRMSJ",
            "namaPelabuhan": "Mata de Sao Joao",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRMSP",
            "namaPelabuhan": "Morro de Sao Paulo",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRNSJ",
            "namaPelabuhan": "Novo Sao Joaquim",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRPMO",
            "namaPelabuhan": "Promissao",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRQCX",
            "namaPelabuhan": "Sao Caetano do Sul",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRQFS",
            "namaPelabuhan": "Sao Franciso do Sul",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRQHE",
            "namaPelabuhan": "Sao Bente do Sul",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRQHF",
            "namaPelabuhan": "Sao Sebastiao do Cai",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRQLL",
            "namaPelabuhan": "Sao Leopoldo",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRQSB",
            "namaPelabuhan": "Sao Bernardo do Campo",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRQSC",
            "namaPelabuhan": "Sao Carlos",
            "kodeKantor": null,
            "namaKantor": null
        },
        {
            "kodePelabuhan": "BRQSD",
            "namaPelabuhan": "Sao Goncalo",
            "kodeKantor": null,
            "namaKantor": null
        }
    ],
    "total": 25
}

Kode TPS berdasarkan Kode Kantor

`GET` {API URL} /openapi/gudangTPS/kodeKantor/{kode kantor}

Digunakan untuk mendapatkan data gudang timbun barang, berdasarkan kode kantor bea dan cukai
```

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `kodeKantor` | `String` | dalam bentuk string, lihat Referensi Kode Kantor untuk melihat daftar kode kantor |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Token yang didapatkan hasil autentikasi |

```json
{
    // Response
}

Kode Kantor

`GET` {API URL} /openapi/pelabuhan/kodeKantor/{kodeKantor}

Untuk mengambil data Pelabuhan berdasarkan kode Kantor Bea dan Cukai.
```

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `kodeKantor` | `String` | dalam bentuk string, lihat Referensi Kode Kantor untuk melihat daftar kode kantor |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Token yang didapatkan hasil autentikasi |

```json
{
    // Response
}

Get Dokumen BC 2.3 (eks PJT) atau BC 2.7 Pemasukan

`GET` {API URL} /openapi/document/detail/{jenisDokumen}/{nomorAju}/{kodeKantor}

Digunakan untuk mendapatkan data dari dokumen BC 2.3 milik pengusaha TPB yang dikirim oleh PJT atau BC 2.7 milik pengusaha TPB sebagai penerima barang yang dikirim oleh pengusaha TPB pengirim barang
```

### Path Parameters

| Field | Type | Description |
| --- | --- | --- |
| `jenisDokumen` | `String` | jenis dokumen diisi 23 atau 27 |
| `nomorAju` | `String` | nomor aju 26 digit yang ingin ditarik datanya |
| `kodeKantor` | `String` | kode kantor daftar dari dokumen TPB |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `String` | Token yang didapatkan hasil autentikasi |