# REST Response Codes

Daftar respon REST API yang dapat diterima dalam tiap request.

Last updated 2 months ago

Respon REST API dalam tiap request mengacu pada kode respon HTTP standar (). Berikut daftar kode respon beserta informasi yang didapat dari setiap respon:

Kode Respon

Deskripsi (Indonesia)

Description (English)

200 OK

Request diterima

The request has succeeded

201 CREATED

Request telah dipenuhi dan telah dibuat resource yang baru

The request has been fulfilled and resulted in a new resource being created

204 NO CONTENT

Server menerima request namun tidak ada yang bisa dikembalikan

The server has fulfilled the request but that there was nothing to return

400 BAD REQUEST

Parameter input tidak valid

Invalid input parameter

401 UNAUTHORIZED

Request membutuhkan otentikasi pengguna

The request requires user authentication

403 FORBIDDEN

Server memahami request namun menolak untuk menindaklanjuti

The server understood the request but is refusing to fulfill it

404 NOT FOUND

Server tidak menemukan apapun sesuai Request-URI yang mengindikasikan resource telah dihapus

The server has not found anything according to the Request-URI indicating the resource was deleted

405 METHOD ALLOWED

Resource yang ditargetkan tidak mendukung request pada method HTTP

The targeted resource does not support requests for HTTP methods

406 NOT ACCEPTABLE

Karakteristik konten dari client tidak dapat diterima sesuai request yang dikirim pada penerimaan Header

The content characteristics of the client are not acceptable according to the accept header sent in the request

409 CONFLICT

Adanya konflik perubahan yang terdeteksi ketika memodifikasi resource

Indicates that conflicting changes have been detected when modifying resources

415 UNSUPPORTED MEDIA TYPE

Server menolak request karena format tidak didukung oleh resource yang ditargetkan

The server is refusing the service because the format unsupported by the targeted resource

500 INTERNAL SERVER ERROR

Error internal muncul pada server

An internal error occurred in the server

🔼

[RFC 2616](https://web.archive.org/web/20250523055554/https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1)