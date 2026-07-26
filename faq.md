# ❓FAQ

Berupa daftar pertanyaan yang banyak diajukan pengguna beserta jawaban

Saya belum pernah menggunakan API. Langkah apa yang harus saya ambil?

Langkah pertama, pastikan Anda telah mendaftar di [Portal CEISA 4.0 ](http://web.archive.org/web/20251206085456/https://portal.beacukai.go.id/portal/login)dan telah memiliki akun pengguna jasa.

Langkah kedua, lakukan autentikasi dengan mendapatkan token menggunakan _tools development_ API, misalnya Postman ([penjelasan dibawah](web/20251206085456/https://ceisa40.gitbook.io/pia-ceisa40/faq#bagaimana-langkah-mendapatkan-token-di-postman.md)).

Langkah ketiga, hubungkan API Services melalui url development/production ([link](web/20251206085456/https://ceisa40.gitbook.io/pia-ceisa40/api-services-pabean.md)). Kemudian memilih method service apa yang dibutuhkan. Misalnya mengirim dokumen impor, pengguna bisa menginput data sesuai JSONSchema yang ditetapkan ([penjelasan dibawah](web/20251206085456/https://ceisa40.gitbook.io/pia-ceisa40/faq#format-json-seperti-apa-yang-dikirim.md)).

Bagaimana cara mendapatkan Token di Postman?

Buat request GET: URL development/production

Tambahkan di Tab Header:

KEY

VALUE

Accept

application/json

Authorization

Basic .....

Tambahkan di Tab Params:

VALUE

app_id

Format JSON seperti apa yang dikirim?

Format JSON yang dikirim menyesuaikan dengan jenis dokumen yang akan dikirim oleh Pengguna. Berikut daftar JSON Schema per jenis dokumen:

Bagaimana mengetahui kode referensi?

Anda dapat mengetahui kode referensi melalui halaman berikut ([link](web/20251206085456/https://ceisa40.gitbook.io/pia-ceisa40/referensi.md))

Last updated 3 years ago