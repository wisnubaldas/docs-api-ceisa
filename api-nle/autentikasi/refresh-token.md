> For the complete documentation index, see [llms.txt](https://nleapi.gitbook.io/product-docs/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://nleapi.gitbook.io/product-docs/autentikasi/refresh-token.md).

# Refresh Token

Sebelum habis masa penggunaan token (expired time), Pengguna dapat melakukan refresh token untuk mendapatkan access\_token yang terbaru.

| Method   | : POST                            |
| -------- | --------------------------------- |
| Endpoint | : /nle-oauth/v1/user/update-token |

**Contoh Penggunaan**

```
curl --location \
--request POST 'https://nlehub.kemenkeu.go.id/nle-oauth/v1/user/update-token' \
--header 'Authorization: Bearer {refresh_token}'
```

**Response**

```
{
    "status": "success",
    "message": "Berhasil memperbarui token",
    "item": {
        "access_token": "{access_token}",
        "expires_in": 900,
        "refresh_expires_in": 0,
        "refresh_token": "{refresh_token}",
        "token_type": "bearer",
        "id_token": "{id_token}",
        "not-before-policy": 1638007763,
        "session_state": "ca65d40c-e11a-4bda-aace-6b4f58eec166",
        "scope": "openid profile email offline_access"
    }
}
```
