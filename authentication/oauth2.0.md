# OAuth 2.0

menjelaskan cara otorisasi menggunakan OAuth 2.0 dengan request token, access token, dan refresh token

Last updated 6 months ago

API CEISA 4.0 menggunakan _framework_ otorisasi OAuth 2.0 untuk selanjutnya Pengguna API Sekaligus (Pengguna Jasa) / _Client_ dapat melakukan kredensial / autentikasi. Dalam menghasilkan otorisasi, OAuth 2.0 mendefinisikan beberapa cara, salah satunya dengan **Client Credentials Grant.** Cara ini memungkinkan Pengguna API Sekaligus (Pengguna Jasa) / _Client_ melalui sistem perusahaan secara _host-to-host,_ dapat melakukan otorisasi dengan meminta token (_**request token**_), mengakses token (_**access token**_), dan memuat kembali token (_**refresh token**_).

Sesuai gambar di atas, dapat diketahui Pengguna API Sekaligus (Pengguna Jasa) / _Client_ melalui sistemnya melakukan **Request Token** ke Authorization Server dengan memasukkan _username_ dan _password_ yang telah terdaftar pada _._ Apabila permintaan token tersebut valid dan sah, maka Authorization Server menerbitkan **Access Token**. 

`AccessToken`harus disimpan secara aman. Karena ketika sudah diterbitkan`AccessToken` yang sah dan valid maka pihak manapun dapat melakukan permintaan pada API Server.

**Refresh Token** dapat digunakan apabila **Access Token** yang telah terbit sudah tidak berlaku. Hal ini dapat dilakukan dalam kurun waktu **24 jam** sejak Access Token tersebut terbit. Perlu diingat bahwa **Access Token** yang telah terbit berlaku **5 menit**.

Access Token

`POST` `{URL_API}/nle-oauth/v1/user/login`

 _Endpoint_ untuk mengirim permintaan Access Token

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `username*` | `username` | Username pada portal pengguna jasa Beacukai |
| `password*` | `password` | Password dari username yang digunakan |

```json
{
  "status": "success",
  "message": "Berhasil masuk ke SSO BeaCukai",
  "item": {
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJySDN6VVB6ZGFqT2E4WEdQeVlsNVloaWRFblpFZ1hSVlVJc3BaSEthY0xVIn0.eyJleHAiOjE2NDI2NTUwNjcsImlhdCI6MTY0MjY1MTQ2NywianRpIjoiMzE2MDlhYzAtMjZhNy00NmM5LTkwMWItYzczZmJjZTM2M2VlIiwiaXNzIjoiaHR0cDovL2FjY291bnQuYmVhY3VrYWkuZ28uaWQvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjRlMzdlYWU2LTU3MmEtNDRmNS04YWQwLWI5MzAyNDEyZDRmMSIsInR5cCI6IkJlYXJlciIsImF6cCI6InNtYXJ0X2N1c3RvbSIsInNlc3Npb25fc3RhdGUiOiIwMzJhMjk0Mi1lZTYxLTQwYTUtYWUzMy1mMDJmNjcwMWU2OWYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG9mZmxpbmVfYWNjZXNzIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpZGVudGl0YXMiOiI3MTg3NzQyMjc0MTcwMDAiLCJuYW1lIjoiUFQuIE1BSEtPVEEgS0FSWUEgU0FXQVJHSSIsInByZWZlcnJlZF91c2VybmFtZSI6Im1haGtvdGExMjM0IiwiZ2l2ZW5fbmFtZSI6IlBULiBNQUhLT1RBIEtBUllBIFNBV0FSR0kiLCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoibWtzLmZvcndhcmRlckBnbWFpbC5jb20ifQ.Mo9gAAk4HO5lYwtdtxghzzkMOvkQBtgUSfKf5Jd5JGb4i95-L-g1TUWn32ogqB80MNOm3jNl077AalksD192Txa0Z4xBLqqqVOPSw2GE4yjuk2SxM5LtsugScm0u3DoiqNT8vvvtm551kmdMXSQ0x0R21AsCzHQTni4GVpt-h87yM2YB80CR9MDE6xXhP6rYUKJT0W29XOcOftYOhBBBLPnqFr832IQFP-H5JN-pS5e6316Ndz2PWr-GQ4mau9nrzht9WfvMYHsuFyN0yI1Uj-CoFkOW_Xxuly8g5frFulIGeZtKSMku5iKIq5aQf5W_coHZWHH5nYzOme1URE--uA",
    "expires_in": 3600,
    "refresh_expires_in": 0,
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmZTYxY2E1MS1iNGI0LTQ2NzMtYjYyYi04MGYxMTFkMWRiMzIifQ.eyJpYXQiOjE2NDI2NTE0NjcsImp0aSI6IjNkZTY5ODdhLTM4MWEtNDVlYi1iYTQ0LWZjMTE1YTFiZTcyYiIsImlzcyI6Imh0dHA6Ly9hY2NvdW50LmJlYWN1a2FpLmdvLmlkL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6Imh0dHA6Ly9hY2NvdW50LmJlYWN1a2FpLmdvLmlkL2F1dGgvcmVhbG1zL21hc3RlciIsInN1YiI6IjRlMzdlYWU2LTU3MmEtNDRmNS04YWQwLWI5MzAyNDEyZDRmMSIsInR5cCI6Ik9mZmxpbmUiLCJhenAiOiJzbWFydF9jdXN0b20iLCJzZXNzaW9uX3N0YXRlIjoiMDMyYTI5NDItZWU2MS00MGE1LWFlMzMtZjAyZjY3MDFlNjlmIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBvZmZsaW5lX2FjY2VzcyJ9.zJCTeHfdd2wpfKg4zkWrcgr_fvdnWPmFo1Nltb35zPU",
    "token_type": "bearer",
    "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJySDN6VVB6ZGFqT2E4WEdQeVlsNVloaWRFblpFZ1hSVlVJc3BaSEthY0xVIn0.eyJleHAiOjE2NDI2NTUwNjcsImlhdCI6MTY0MjY1MTQ2NywiYXV0aF90aW1lIjowLCJqdGkiOiJmNmE3ODRiNC01ZmQyLTQ3NTAtYTQ0NS1kMzc3OTI0ODNiMWIiLCJpc3MiOiJodHRwOi8vYWNjb3VudC5iZWFjdWthaS5nby5pZC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJhdWQiOiJzbWFydF9jdXN0b20iLCJzdWIiOiI0ZTM3ZWFlNi01NzJhLTQ0ZjUtOGFkMC1iOTMwMjQxMmQ0ZjEiLCJ0eXAiOiJJRCIsImF6cCI6InNtYXJ0X2N1c3RvbSIsInNlc3Npb25fc3RhdGUiOiIwMzJhMjk0Mi1lZTYxLTQwYTUtYWUzMy1mMDJmNjcwMWU2OWYiLCJhY3IiOiIxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpZGVudGl0YXMiOiI3MTg3NzQyMjc0MTcwMDAiLCJuYW1lIjoiUFQuIE1BSEtPVEEgS0FSWUEgU0FXQVJHSSIsInByZWZlcnJlZF91c2VybmFtZSI6Im1haGtvdGExMjM0IiwiZ2l2ZW5fbmFtZSI6IlBULiBNQUhLT1RBIEtBUllBIFNBV0FSR0kiLCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoibWtzLmZvcndhcmRlckBnbWFpbC5jb20ifQ.bi9HWpzKGiQHSKsSTexZ_nR1kT1R-ZN0vGIfsycx-iHKHOzWAv3MFFLLUeuWe7ckNFvOslgyQhKFr8diWTvHPyMC3LcbZatj9RBrqoJBK4VtfVXlqkQgf2QgN_VWFwwhBz1MM53rFzBUwnTW2QzBTikYJrNtU0GnV4nbAjiVIZc6patvTyKt678u3W-7PGYxsHUKCza8nbGll4JT40XJZJIwaXYHw9SlQqJ3zh1V4OY2i_UNPuM6qpzKASG8EKs5DHw8jZZcRynR0VU2h6LwnLwBVdTSufwGsyrdJ28cBrqNEjW_d4k2A1Sp1X1Nlx-Afwt2wxKCIqCZ-PQltHqWNw",
    "not-before-policy": 1638007763,
    "session_state": "032a2942-ee61-40a5-ae33-f02f6701e69f",
    "scope": "openid profile email offline_access"
  }
}

Contoh

POST  HTTP/1.1
Host: https://apis-gw.beacukai.go.id/nle-oauth/v1/user/login
Content-Type: application/json

{"username":"username","password":"password"}

Refresh Token

`POST` {API_URL}`/nle-oauth/v1/user/update-token`

 _Endpoint_ untuk mengupdate Access Token
```

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization*` | `String Refresh Token` | update url Refresh Token per 05-11-2024 |
| `update url Refresh Token per 05-11-2024` | `⚠️` | [RFC6749 Documentation](https://web.archive.org/web/20250523055814/https://tools.ietf.org/html/rfc6749) |
| `[Portal CEISA 4.0](https://web.archive.org/web/20250523055814/https://portal.beacukai.go.id/portal/login)` | `OAuth 2.0 Authorization Code Flow` | [ (detil)](web/20250523055814/https://ceisa40.gitbook.io/pia-ceisa40/change-log#id-1.0.72-2024-10-31.md) |