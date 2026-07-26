> For the complete documentation index, see [llms.txt](https://nleapi.gitbook.io/product-docs/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://nleapi.gitbook.io/product-docs/autentikasi/login-api-nle.md).

# Login API NLE

Untuk mengakses API yang ada di NLE diperlukan otentikasi berupa JWT (JSON Web Token) yang didapatkan setelah melakukan login via API.

| Method   | : POST                     |
| -------- | -------------------------- |
| Endpoint | : /nle-oauth/v1/user/login |

**Request Body (JSON)**

```
{
    "username":"user_name",
    "password":"password_user"
}
```

| Elemen Data | Penjelasan        |
| ----------- | ----------------- |
| username    | username user NLE |
| password    | password user NLE |

**Contoh Penggunaan**

```
curl --location \
--request POST 'https://nlehub.kemenkeu.go.id/nle-oauth/v1/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{"username":"user_name","password":"password_user"}'
```

**Response**

```
{
    "status": "success",
    "message": "Berhasil masuk ke SSO BeaCukai",
    "item": {
        "access_token": "{access_token}",
        "expires_in": 900,
        "refresh_expires_in": 0,
        "refresh_token": "{refresh_token}",
        "token_type": "bearer",
        "id_token": "{id_token}",
        "not-before-policy": 1638007763,
        "session_state": "46e41154-ee8a-40aa-ae84-1c0941d790c1",
        "scope": "openid profile email offline_access"
    }
}
```
