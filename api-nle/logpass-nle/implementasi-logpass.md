> For the complete documentation index, see [llms.txt](https://nleapi.gitbook.io/product-docs/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://nleapi.gitbook.io/product-docs/logpass-nle/implementasi-logpass.md).

# Implementasi Logpass

## **Request Token Form Logpass NLE**

Third Party Platform akan melakukan request token yang nantinya akan digunakan untuk memanggil form Logpass NLE dengan memanfaatkan API service sebagai berikut:

<table data-header-hidden><thead><tr><th width="156"></th><th></th></tr></thead><tbody><tr><td>Endpoint</td><td>: /nleportal/nleportalsvc/api/v1/auth/requestToken?key={PLATFORM_API_KEY}</td></tr><tr><td>Method</td><td>: GET</td></tr><tr><td>Header</td><td>: Authorization: Bearer {access_token}</td></tr></tbody></table>

**Parameters**

| Parameter            | Jenis        | Penjelasan                                                                           |
| -------------------- | ------------ | ------------------------------------------------------------------------------------ |
| {PLATFORM\_API\_KEY} | Query String | didapatkan setelah mendaftar sebagai Platform di portal <https://nle.kemenkeu.go.id> |

**Contoh Penggunaan**

```powershell
curl --location \
--request GET 'https://nlehub.kemenkeu.go.id/nleportal/nleportalsvc/api/v1/auth/requestToken?key=3068672a-3c61-4cc4-af1e-1e8bc9831a80' \
--header 'Authorization: Bearer {access_token}'
```

**Response**

```json
{
    "data": {
        "domain": "https://nle.kemenkeu.go.id/",
        "namaPerusahaan": "NLE Production",
        "deskripsi": null,
        "namaPlatform": "NLE Production",
        "token": "981985c80442cb02f2c80cd0eb451ec4cea66fe93e15d4f35d00f49e7c77c006"
    },
    "message": "Success",
    "status": 200
}
```

## **Memanggil Form Logpass NLE**

Selanjutnya Third Party Platform memanggil Plugin Logpass NLE dalam bentuk Javascript

```
<script type="text/javascript" src="https://nle.kemenkeu.go.id/seamlesslogin/nlelogin.min.js"></script>
```

Berikut contoh implementasinya dalam bentuk HTML

```
<html>
    <head>
        <script type="text/javascript" src="https://nle.kemenkeu.go.id/seamlesslogin/nlelogin.min.js"></script>
        <script type="text/javascript">
        
            var loginAsNLE = new NLEAuth({
                token: '{token from logpass}',
                platform_domain: '{URL website / aplikasi platform}',
                redirect: true,
                onsuccess: function(data) {
                    this.setCookie('nle_token', data.access_token, data.expires_in);
                    this.setCookie('nle_user', data.username, data.expires_in);
                    this.setCookie('nle_npwp', data.npwp, data.expires_in);
                    document.location = '{URL redirect setelah login}';
                }
            });

            function loginNLE() {
                loginAsNLE.openFormLogin();
            }
        </script>
    </head>
    <body>
        <a href="" onclick='loginNLE()'>Login as NLE</a>   
    </body>
</html>
```
