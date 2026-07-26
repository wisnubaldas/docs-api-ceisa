> For the complete documentation index, see [llms.txt](https://nleapi.gitbook.io/product-docs/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://nleapi.gitbook.io/product-docs/autentikasi/get-informasi-user.md).

# Get Informasi User

Untuk mengambil data / informasi user NLE berdasarkan access\_token

| Method   | : GET                                   |
| -------- | --------------------------------------- |
| Endpoint | : /nle-oauth/v1/user/user-info-by-email |
| Header   | : Authorization: Bearer {access\_token} |

**Contoh Penggunaan**

```
curl --location \
--request GET 'https://nlehub.kemenkeu.go.id/nle-oauth/v1/user/user-info-by-email' \
--header 'Authorization: Bearer {access_token}'
```

**Response**

```
{
    "status": "success",
    "message": "Berhasil mengambil data dari database",
    "item": {
        "idUser": "{idUser}",
        "jenisUser": "1",
        "kodeIdentitas": null,
        "identitas": "{npwp / identitas user}",
        "kodeLevel": "1",
        "divisi": null,
        "divisiDetail": null,
        "nip": null,
        "nama": "{nama entitas}",
        "alamat": null,
        "handphone": "{nomor telp}",
        "email": "{email}",
        "userName": "{username}",
        "pin": "{pin}",
        "ask": null,
        "answer": null,
        "tanggalExpired": "2023-10-20T00:00:00.000+14:00",
        "flagBlokir": "0",
        "flagAktivasi": "0",
        "waktuAktivasi": "2022-10-20T22:49:42.564+14:00",
        "nipRekam": "{username}",
        "waktuRekam": "2022-10-20T22:47:35.718+14:00",
        "nipUpdate": "{user_name}",
        "waktuUpdate": "2022-10-20T22:47:35.718+14:00"
    }
}
```
