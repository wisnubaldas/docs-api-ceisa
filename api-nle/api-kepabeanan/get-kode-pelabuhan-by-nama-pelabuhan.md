> For the complete documentation index, see [llms.txt](https://nleapi.gitbook.io/product-docs/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://nleapi.gitbook.io/product-docs/api-kepabeanan/get-kode-pelabuhan-by-nama-pelabuhan.md).

# Get Kode Pelabuhan by Nama Pelabuhan

Untuk mengambil data Pelabuhan berdasarkan uraian nama pelabuhan.

<table data-header-hidden><thead><tr><th width="330"></th><th></th></tr></thead><tbody><tr><td>Method</td><td>: GET</td></tr><tr><td>Endpoint</td><td>: /openapi/pelabuhan/kata/{kata}</td></tr><tr><td>Authorization</td><td>: Bearer {access_token}</td></tr></tbody></table>

**Parameters**

| Parameter | Jenis | Penjelasan                       |
| --------- | ----- | -------------------------------- |
| kata      | path  | dalam bentuk string, misal "SAO" |

**Contoh Penggunaan**

```
curl --location \
--request GET 'https://nlehub.kemenkeu.go.id/openapi/pelabuhan/kata/SAO' \
--header 'Authorization: Bearer {access_token}'
```

**Response**

```
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
```
