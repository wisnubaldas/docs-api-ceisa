# Kirim Dokumen Impor

Last updated 5 months ago

Kirim Dokumen

`POST` `{API_URL}/openapi/document`

 _Endpoint_ digunakan untuk mengirim dokumen pabean

### Query Parameters

| Field | Type | Description |
| --- | --- | --- |
| `isFinal` | `boolean` | true=data langsung dikirim; false=data menjadi draft; default=false |

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Authorization` | `string` | Bearer Token yang didapatkan dari hasil otorisasi |

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `Data Pabean*` | `string` | JSONSchema Dokumen Pabean |

200 Data berhasil ditambahkan

```json
{
    "status": "OK",
    "message": "Sukses, Data Berhasil Ditambahkan",
    "idHeader": {idHeader}
}

JSON Schema Kirim Dokumen Impor

    {
      "Declaration" : 
 {
    "$schema": "http://json-schema.org/draft-07/schema",
    "type": "object",
    "title": "Schema Kirim Dokumen BC 20",
    "description": "JSON Schema untuk Kirim Dokumen Pabean v.0.5.7.18. Terdiri atas data header dan data barang. Data header merupakan data umum dokumen pabean sedangkan data barang merupakan data detil atas barang pada dokumen pabean",
    "properties": {
        "asalData": {
            "type": "string",
            "description": "set value [S]",
            "const": "S",
            "message": "Asal pengiriman data secara Host to Host: S"
        },
        "asuransi": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.0 - D.24 Asuransi LN/DN",
            "maxlength": 24,
            "multipleOf": 0.01,
            "message": "Nilai asuransi maksimal 24 digit dengan dua angka dibelakang koma"
        },
        "bruto": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.0 - D.29 Berat Kotor (kg)",
            "maxlength": 24,
            "multipleOf": 0.0001,
            "message": "Nilai bruto maksimal 24 digit dengan empat angka dibelakang koma"
        },
        "cif": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.0 - D.26 Nilai Pabean",
            "maxlength": 24,
            "multipleOf": 0.01,
            "message": "Nilai cif maksimal 24 digit dengan dua angka dibelakang koma"
        },
        "disclaimer": {
            "type": "string",
            "description": "Persetujuan pengguna dalam kirim dokumen pabean: [1] Ya atau [0] Tidak",
            "enum": [
                "0",
                "1"
            ],
            "message": "Persetujuan pengguna dalam kirim dokumen pabean: 1 untuk Ya atau 0 untuk Tidak"
        },
        "kodeJenisProsedur": {
            "type": "string",
            "description": "Lihat Referensi Jenis Prosedur",
            "message": "Format kode sesuai Referensi Jenis Prosedur"
        },
        "kodeJenisImpor": {
            "type": "string",
            "description": "Lihat Referensi Jenis Impor",
            "message": "Format kode sesuai Referensi Jenis Impor"
        },
        "kodeJenisEkspor": {
            "type": "string",
            "description": "Lihat Referensi Jenis Ekspor",
            "message": "Format kode sesuai Referensi Jenis Ekspor"
        },
        "flagVd": {
            "type": "string",
            "description": "flag Voluntary declaration: [Y] Ya atau [T] Tidak",
            "enum": [
                "Y",
                "T"
            ],
            "message": "flag Voluntary declaration: Y untuk Ya atau T untuk Tidak"
        },
        "fob": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.0 - D.23 Nilai",
            "maxlength": 24,
            "multipleOf": 0.01,
            "message": "Nilai fob maksimal 24 digit dengan dua angka dibelakang koma"
        },
        "freight": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.0 - D.25 Freight",
            "maxlength": 24,
            "multipleOf": 0.01,
            "message": "Nilai freight maksimal 24 digit dengan dua angka dibelakang koma"
        },
        "hargaPenyerahan": {
            "type": "number",
            "description": "Nilai Harga Penyerahan",
            "maxlength": 24,
            "multipleOf": 0.0001,
            "message": "Nilai harga penyerahan maksimal 24 digit dengan empat angka dibelakang koma"
        },
        "idPengguna": {
            "type": "string",
            "description": "Identitas pengguna",
            "message": "Identitas pengguna"
        },
        "jabatanTtd": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - F Jabatan pengguna yang mengajukan dokumen impor",
            "message": "Jabatan pengguna yang mengajukan dokumen impor"
        },
        "jumlahKontainer": {
            "type": "integer",
            "description": "jumlah peti kemas yang digunakan untuk mengangkut barang",
            "message": "Jumlah kontainer atau peti kemas"
        },
        "jumlahTandaPengaman": {
            "type": "integer",
            "description": "Jumlah Tanda Pengaman FTZ 03",
            "message": "Jumlah tanda pengaman pada FTZ 03"
        },
        "kodeAsuransi": {
            "type": "string",
            "description": "kode asuransi yang dibayar di [LN] luar negeri atau [DN] dalam negeri",
            "enum": [
                "LN",
                "DN"
            ],
            "message": "Kode asuransi yang dibayar: LN untuk luar negeri atau DN untuk dalam negeri"
        },
        "kodeCaraBayar": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - C. Cara Pembayaran. Lihat Referensi Cara Bayar",
            "message": "Format kode sesuai Referensi Cara Bayar"
        },
        "kodeDokumen": {
            "type": "string",
            "description": "set value [20]",
            "const": "20",
            "message": "Format kode sesuai Referensi Dokumen Impor BC 2.0: 20"
        },
        "kodeIncoterm": {
            "type": "string",
            "description": "Lihat Referensi Incoterm",
            "message": "Format kode sesuai Referensi Incoterm"
        },
        "kodeJenisNilai": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - D.16 Transaksi. Lihat Referensi Jenis Transaksi Perdagangan",
            "message": "Format kode sesuai Referensi Jenis Transaksi Perdagangan"
        },
        "kodeKantor": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - Kantor Pabean. Lihat Referensi Kantor",
            "message": "Format kode sesuai Referensi Kantor"
        },
        "kodePelMuat": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - D.12 Pelabuhan Muat. Lihat Referensi Pelabuhan",
            "message": "Format kode pelabuhan muat sesuai Referensi Pelabuhan"
        },
        "kodePelTujuan": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - D.14 Pelabuhan Tujuan. Lihat Referensi Pelabuhan",
            "message": "Format kode pelabuhan tujuan sesuai Referensi Pelabuhan"
        },
        "kodeTps": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - D.20 Tempat Penimbunan. Kode tps sesuai dengan yang dibuat oleh Kantor Pabean masing-masing",
            "message": "Format kode tps sesuai dengan yang dibuat oleh Kantor Pabean masing-masing "
        },
        "kodeTutupPu": {
            "type": "string",
            "description": "Referensi TutupPu: [11] BC 1.1, [12] BC 1.2, [14] BC 1.4",
            "enum": [
                "11",
                "12",
                "14"
            ],
            "message": "Format kode sesuai Referensi TutupPu"
        },
        "kodeValuta": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - D.21 Valuta. Lihat Referensi Valuta",
            "message": "Format kode sesuai Referensi Valuta"
        },
        "kotaTtd": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - F Kota tempat pengguna membuat dokumen impor",
            "message": "Kota tempat pengguna membuat dokumen impor"
        },
        "namaTtd": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - F Nama pengguna yang membuat dokumen impor",
            "message": "Nama pengguna yang membuat dokumen impor"
        },
        "ndpbm": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.0 - D.22 NDPBM",
            "maxlength": 24,
            "multipleOf": 0.0001,
            "message": "Ndpbm maksimal 24 digit dengan empat angka dibelakang koma"
        },
        "netto": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.0 - D.30 Berat Bersih (Kg)",
            "maxlength": 24,
            "multipleOf": 0.0001,
            "message": "Nilai netto/berat bersih maksimal 24 digit dengan empat angka dibelakang koma"
        },
        "nilaiBarang": {
            "type": "number",
            "description": "nilai barang impor dalam mata uang sesuai kode valuta yang dimasukkan",
            "maxlength": 38,
            "multipleOf": 0.01,
            "message": "Nilai barang maksimal 24 digit dengan dua angka dibelakang koma"
        },
        "nilaiIncoterm": {
            "type": "number",
            "description": "nilai barang impor sesuai kode incoterm yang dimasukkan",
            "maxlength": 24,
            "multipleOf": 0.01,
            "message": "Nilai incoterm maksimal 24 digit dengan dua angka dibelakang koma"
        },
        "nilaiMaklon": {
            "type": "number",
            "description": "nilai jasa subkon",
            "maxlength": 24,
            "multipleOf": 0.01,
            "message": "Nilai maklon maksimal 24 digit dengan dua angka dibelakang koma"
        },
        "nomorAju": {
            "type": "string",
            "description": "nomor pengajuan dokumen pabean 26 digit dengan format 4 digit kode kantor, 2 digit kode dokumen pabean, 6 digit unik perusahaan, 8 digit tanggal pengajuan dengan format YYYYMMDD, 6 digit sequence/nomor urut pengajuan dokumen pabean",
            "pattern": "^[A-Za-z0-9]{26}$",
            "message": "Sesuaikan format nomor pengajuan dokumen impor terdiri 26 digit: 4 digit kode kantor, 2 digit kode dokumen pabean, 6 digit unik perusahaan, 8 digit tanggal pengajuan dengan format YYYYMMDD, 6 digit sequence/nomor urut pengajuan dokumen impor"
        },
        "nomorBc11": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - D.18 BC 1.1",
            "message": "Nomor BC 1.1 terdiri dari 6 digit"
        },
        "posBc11": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - D.18 BC 1.1",
            "message": "Pos BC 1.1 terdiri dari 4 digit"
        },
        "seri": {
            "type": "integer",
            "description": "seri dokumen impor",
            "message": "seri dokumen impor"
        },
        "subposBc11": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.0 - D.18 BC 1.1",
            "message": "Pos BC 1.1 terdiri dari 8 digit"
        },
        "tanggalAju": {
            "type": "string",
            "format": "date",
            "description": "tanggal pengajuan dokumen impor dengan format YYYY-MM-DD",
            "message": "Sesuaikan format tanggal pengajuan dokumen: YYYY-MM-DD"
        },
        "tanggalBc11": {
            "type": "string",
            "format": "date",
            "description": "Sesuai kolom formulir BC 2.0 - D.18 Tanggal BC 1.1 dengan format YYYY-MM-DD",
            "message": "Sesuaikan format tanggal BC 1.1: YYYY-MM-DD"
        },
        "tanggalTiba": {
            "type": "string",
            "format": "date",
            "description": "Sesuai kolom formulir BC 2.0 - D.11 Perkiraan Tanggal Tiba dengan format YYYY-MM-DD",
            "message": "Sesuaikan format tanggal perkiraan tiba: YYYY-MM-DD"
        },
        "tanggalTtd": {
            "type": "string",
            "format": "date",
            "description": "Sesuai kolom formulir BC 2.0 - F Tanggal penandatanganan dokumen pabean dengan format YYYY-MM-DD",
            "message": "Sesuaikan format tanggal penandatanganan dokumen: YYYY-MM-DD"
        },
        "totalDanaSawit": {
            "type": "number",
            "description": "total dana sawit",
            "maxlength": 24,
            "multipleOf": 0.01,
            "message": "Total dana sawit maksimal 24 digit dengan dua angka dibelakang koma"
        },
        "volume": {
            "type": "number",
            "description": "total volume",
            "maxlength": 24,
            "multipleOf": 0.0001,
            "message": "Total volume maksimal 24 digit dengan empat angka dibelakang koma"
        },
        "vd": {
            "type": "number",
            "description": "Total nilai voluntary declaration",
            "maxlength": 24,
            "multipleOf": 0.0001,
            "message": "Total nilai barang voluntary declaration maksimal 24 digit dengan empat angka dibelakang koma"
        },
        "biayaTambahan": {
            "type": "number",
            "description": "biaya tambahan yang dikenakan",
            "maxlength": 24,
            "multipleOf": 0.01,
            "message": "Biaya tambahan maksimal 24 digit dengan dua angka dibelakang koma"
        },
        "biayaPengurang": {
            "type": "number",
            "description": "biaya pengurang yang dikenakan",
            "maxlength": 24,
            "multipleOf": 0.01,
            "message": "Biaya pengurang maksimal 24 digit dengan dua angka dibelakang koma"
        },
        "barang": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "description": "detil data barang dalam satu pengajuan dokumen impor",
                    "properties": {
                        "asuransi": {
                            "type": "number",
                            "description": "nilai asuransi"
                        },
                        "bruto": {
                            "type": "number",
                            "maxlength": 24,
                            "multipleOf": 0.0001,
                            "description": "berat kotor/bruto dalam kilogram"
                        },
                        "cif": {
                            "type": "number",
                            "description": "harga cif"
                        },
                        "cifRupiah": {
                            "type": "number",
                            "description": "harga cif rupiah"
                        },
                        "diskon": {
                            "type": "number",
                            "description": "diskon"
                        },
                        "fob": {
                            "type": "number",
                            "description": "free on board"
                        },
                        "freight": {
                            "type": "number",
                            "description": "freight"
                        },
                        "hargaEkspor": {
                            "type": "number",
                            "description": "harga ekspor"
                        },
                        "hargaPatokan": {
                            "type": "number",
                            "description": "harga patokan barang"
                        },
                        "hargaPenyerahan": {
                            "type": "number",
                            "description": "harga penyerahan barang"
                        },
                        "hargaPerolehan": {
                            "type": "number",
                            "description": "harga perolehan barang"
                        },
                        "hargaSatuan": {
                            "type": "number",
                            "description": "harga satuan barang"
                        },
                        "hjeCukai": {
                            "type": "number",
                            "description": "harga jual eceran"
                        },
                        "isiPerKemasan": {
                            "type": "number",
                            "description": "isi per kemasan",
                            "multipleOf": 0.01
                        },
                        "jumlahBahanBaku": {
                            "type": "integer",
                            "description": "jumlah bahan baku"
                        },
                        "jumlahDilekatkan": {
                            "type": "integer",
                            "description": "jumlah yang dilekatkan"
                        },
                        "jumlahKemasan": {
                            "type": "number",
                            "description": "Sesuai kolom formulir BC 2.0 - D.35 Jumlah Kemasan",
                            "maxlength": 24,
                            "multipleOf": 0.01
                        },
                        "jumlahPitaCukai": {
                            "type": "integer",
                            "description": "jumlah pita cukai"
                        },
                        "jumlahRealisasi": {
                            "type": "number",
                            "description": "jumlah realisasi"
                        },
                        "jumlahSatuan": {
                            "type": "number",
                            "description": "Sesuai kolom formulir BC 2.0 - D.35 Jumlah Satuan Barang",
                            "maxlength": 24,
                            "multipleOf": 0.0001
                        },
                        "kapasitasSilinder": {
                            "type": "integer",
                            "description": "kapasitas silinder"
                        },
                        "kodeJenisKemasan": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.35 Jenis Kemasan. Lihat Referensi Jenis Kemasan"
                        },
                        "kodeKondisiBarang": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.32 Spesifikasi Wajib. Referensi Kondisi Barang: [1] Baik, [2] Baru, [3] Bekas, [4] Segar, [5] Beku, [6] Baik/Baru, [7] Baik/Baru, [8] Baik/Bekas",
                            "enum": [
                                "1",
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8"
                            ]
                        },
                        "kodeNegaraAsal": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.32 Negara Asal Barang. Lihat Referensi Negara",
                            "pattern": "^[A-Z]{2}$"
                        },
                        "kodeSatuanBarang": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.35 Jenis Satuan Barang. Lihat Referensi Satuan Barang"
                        },
                        "merk": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.32 Merek Barang"
                        },
                        "ndpbm": {
                            "type": "number",
                            "description": "nilai dasar penghitungan bea masuk"
                        },
                        "netto": {
                            "type": "number",
                            "description": "Sesuai kolom formulir BC 2.0 - D.35 Berat Bersih (kg)",
                            "maxlength": 24,
                            "multipleOf": 0.0001
                        },
                        "nilaiBarang": {
                            "type": "number",
                            "description": "nilai barang"
                        },
                        "nilaiDanaSawit": {
                            "type": "number",
                            "description": "nilai dana sawit"
                        },
                        "nilaiDevisa": {
                            "type": "number",
                            "description": "nilai devisa"
                        },
                        "nilaiTambah": {
                            "type": "number",
                            "description": "nilai tambah"
                        },
                        "pernyataanLartas": {
                            "type": "string",
                            "description": "pernyataan barang lartas: [Y] Ya atau [T] Tidak",
                            "enum": [
                                "Y",
                                "T"
                            ]
                        },
                        "persentaseImpor": {
                            "type": "number",
                            "description": "persentase impor"
                        },
                        "posTarif": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.32 Pos Tarif HS"
                        },
                        "saldoAkhir": {
                            "type": "number",
                            "description": "saldo akhir"
                        },
                        "saldoAwal": {
                            "type": "number",
                            "description": "saldo awal"
                        },
                        "seriBarang": {
                            "type": "integer",
                            "description": "Sesuai kolom formulir BC 2.0 - D.31 No. Seri data barang"
                        },
                        "seriBarangDokAsal": {
                            "type": "integer",
                            "description": "seri barang dokumen asal"
                        },
                        "seriIjin": {
                            "type": "integer",
                            "description": "seri ijin barang"
                        },
                        "tahunPembuatan": {
                            "type": "integer",
                            "description": "tahun pembuatan barang"
                        },
                        "tarifCukai": {
                            "type": "number",
                            "description": "tarif cukai"
                        },
                        "tipe": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.32 Tipe Barang"
                        },
                        "uraian": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.32 Uraian Barang"
                        },
                        "volume": {
                            "type": "number",
                            "description": "volume barang",
                            "maxlength": 24,
                            "multipleOf": 0.0001
                        },
                        "barangTarif": {
                            "type": "array",
                            "description": "data barang tarif per barang",
                            "items": [
                                {
                                    "type": "object",
                                    "description": "data barang tarif BM",
                                    "properties": {
                                        "kodeJenisTarif": {
                                            "type": "string",
                                            "description": "Sesuai kolom formulir BC 2.0 - D.34 Jenis Tarif/Pembebanan. Referensi Jenis Tarif: [1] Advalorum atau [2] Spesifik",
                                            "enum": [
                                                "1",
                                                "2"
                                            ]
                                        },
                                        "jumlahSatuan": {
                                            "type": "number",
                                            "description": "jumlah satuan barang tarif BM",
                                            "maxlength": 24,
                                            "multipleOf": 0.0001
                                        },
                                        "kodeFasilitasTarif": {
                                            "type": "string",
                                            "description": "Kode fasilitas tarif BM. Sesuai kolom formulir BC 2.0 - D.34 Kode Fasilitas. Lihat Referensi Fasilitas Tarif"
                                        },
                                        "kodeJenisPungutan": {
                                            "type": "string",
                                            "description": "Set kode jenis pungutan Bea Masuk (BM) atau Bea Masuk Kemudahan Impor Tujuan Ekspor (BMKITE)",
                                            "enum": [
                                                "BM",
                                                "BMKITE"
                                            ]
                                        },
                                        "nilaiBayar": {
                                            "type": "number",
                                            "description": "nilai bayar barang tarif BM",
                                            "maxlength": 24,
                                            "multipleOf": 0.01
                                        },
                                        "seriBarang": {
                                            "type": "integer",
                                            "description": "seri barang"
                                        },
                                        "tarif": {
                                            "type": "number",
                                            "description": "Tarif BM. Sesuai kolom formulir BC 2.0 - D.34 Tarif",
                                            "maxlength": 24,
                                            "multipleOf": 0.01
                                        },
                                        "tarifFasilitas": {
                                            "type": "number",
                                            "description": "Sesuai kolom formulir BC 2.0 - D.34 Tarif dan Fasilitas",
                                            "maxlength": 5,
                                            "multipleOf": 0.01
                                        },
                                        "nilaiFasilitas": {
                                            "type": "number",
                                            "description": "Sesuai kolom formulir BC 2.0 - D.34 Tarif dan Fasilitas. Dapat diisi apabila Kode Fasilitas Tarif selain dibayar [1]",
                                            "maxlength": 24,
                                            "multipleOf": 0.01
                                        }
                                    },
                                    "required": [
                                        "kodeJenisTarif",
                                        "kodeFasilitasTarif",
                                        "kodeJenisPungutan",
                                        "tarifFasilitas",
                                        "nilaiBayar",
                                        "tarif",
                                        "nilaiFasilitas"
                                    ],
                                    "message": {
                                        "required": "Wajib mengisi kodeJenisTarif, kodeFasilitasTarif, kodeJenisPungutan, tarifFasilitas, nilaiBayar, tarif, dan nilaiFasilitas BM"
                                    }
                                },
                                {
                                    "type": "object",
                                    "properties": {
                                        "kodeJenisTarif": {
                                            "type": "string",
                                            "description": "Sesuai kolom formulir BC 2.0 - D.34 Jenis Tarif/Pembebanan. Referensi Jenis Tarif: [1] Advalorum atau [2] Spesifik",
                                            "enum": [
                                                "1",
                                                "2"
                                            ]
                                        },
                                        "jumlahSatuan": {
                                            "type": "number",
                                            "description": "jumlah satuan barang tarif",
                                            "maxlength": 24,
                                            "multipleOf": 0.0001
                                        },
                                        "kodeFasilitasTarif": {
                                            "type": "string",
                                            "description": "Sesuai kolom formulir BC 2.0 - D.34 Kode Fasilitas. Lihat Referensi Fasilitas Tarif"
                                        },
                                        "kodeJenisPungutan": {
                                            "type": "string",
                                            "description": "Sesuai kolom formulir BC 2.0 - D.34 Tarif dan Fasilitas. Lihat Referensi Jenis Pungutan"
                                        },
                                        "nilaiBayar": {
                                            "type": "number",
                                            "description": "nilai bayar barang tarif",
                                            "maxlength": 24,
                                            "multipleOf": 0.01
                                        },
                                        "seriBarang": {
                                            "type": "integer",
                                            "description": "seri barang"
                                        },
                                        "tarif": {
                                            "type": "number",
                                            "description": "Sesuai kolom formulir BC 2.0 - D.34 Tarif",
                                            "maxlength": 24,
                                            "multipleOf": 0.01
                                        },
                                        "tarifFasilitas": {
                                            "type": "number",
                                            "description": "Sesuai kolom formulir BC 2.0 - D.34 Tarif dan Fasilitas",
                                            "maxlength": 5,
                                            "multipleOf": 0.01
                                        },
                                        "nilaiFasilitas": {
                                            "type": "number",
                                            "description": "Sesuai kolom formulir BC 2.0 - D.34 Tarif dan Fasilitas. Dapat diisi apabila Kode Fasilitas Tarif selain dibayar [1]",
                                            "maxlength": 24,
                                            "multipleOf": 0.01
                                        }
                                    },
                                    "dependencies": {
                                        "kodeJenisPungutan": [
                                            "kodeFasilitasTarif",
                                            "tarifFasilitas",
                                            "nilaiBayar",
                                            "tarif",
                                            "nilaiFasilitas"
                                        ]
                                    },
                                    "message": {
                                        "required": "Wajib mengisi kodeJenisTarif, kodeFasilitasTarif, kodeJenisPungutan, tarifFasilitas, nilaiBayar, tarif, dan nilaiFasilitas"
                                    }
                                }
                            ]
                        },
                        "barangDokumen": {
                            "type": "array",
                            "description": "Sesuai kolom formulir BC 2.0 - D.33 Keterangan Fasilitas/Persyaratan dan Nomor Urut",
                            "items": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "seriDokumen": {
                                            "type": "string",
                                            "description": "seri dokumen"
                                        }
                                    }
                                }
                            ]
                        },
                        "barangSpekKhusus": {
                            "type": "array",
                            "description": "data barang dengan spesifikasi khusus",
                            "items": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "seriBarangSpekKhusus": {
                                            "type": "integer",
                                            "description": "seri barang spesifikasi khusus"
                                        },
                                        "kodeSpekKhusus": {
                                            "type": "integer",
                                            "description": "Lihat Referensi Spesifikasi Khusus: [1] NOMOR MESIN; [2] NOMOR RANGKA; [3] SILINDER; [4] TAHUN PEMBUATAN; [5] JENIS KENDARAAN; [6] MERK; [7] MODEL; [8] NOMOR BPKB; [9] TANGGAL BPKB;  [10] NOMOR FORM A; [11] TANGGAL FORM A; [12] NOMOR STNK; [13] TANGGAL STNK; [14] TIPE; [15] NOMOR CASI; [16] MUTU; [17] DAYA; [18] KUALITAS WARNA GULA; [19] JENIS SPEK KHUSUS",
                                            "enum": [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                                6,
                                                7,
                                                8,
                                                9,
                                                10,
                                                11,
                                                12,
                                                13,
                                                14,
                                                15,
                                                16,
                                                17,
                                                18,
                                                19
                                            ]
                                        },
                                        "uraianBarangSpekKhusus": {
                                            "type": "string",
                                            "description": "uraian barang spesifikasi khusus"
                                        }
                                    }
                                }
                            ]
                        },
                        "barangVd": {
                            "type": "array",
                            "description": "data barang voluntary declaration",
                            "items": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "kodeJenisVd": {
                                            "type": "string",
                                            "description": "Lihat Referensi Jenis VD"
                                        },
                                        "nilaiBarangVd": {
                                            "type": "number",
                                            "maxlength": 24,
                                            "multipleOf": 0.0001,
                                            "description": "nilai barang voluntary declaration"
                                        }
                                    },
                                    "required": [
                                        "kodeJenisVd",
                                        "nilaiBarangVd"
                                    ],
                                    "message": {
                                        "required": "Wajib mengisi kodeJenisVd dan nilaiBarangVd"
                                    }
                                }
                            ]
                        },
                        "barangPemilik": {
                            "type": "array",
                            "description": "data barang entitas pemilik",
                            "items": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "seriBarang": {
                                            "type": "integer",
                                            "description": "seri barang"
                                        },
                                        "seriBarangPemilik": {
                                            "type": "integer",
                                            "description": "seri barang entitas pemilik"
                                        },
                                        "seriEntitas": {
                                            "type": "integer",
                                            "description": "seri entitas pemilik"
                                        }
                                    },
                                    "required": [
                                        "seriBarang",
                                        "seriBarangPemilik",
                                        "seriEntitas"
                                    ],
                                    "message": {
                                        "required": "Wajib mengisi seriBarang, seriBarangPemiliki, dan seriEntitas"
                                    }
                                }
                            ]
                        }
                    },
                    "required": [
                        "asuransi",
                        "cif",
                        "fob",
                        "freight",
                        "hargaSatuan",
                        "jumlahKemasan",
                        "jumlahSatuan",
                        "kodeJenisKemasan",
                        "kodeSatuanBarang",
                        "merk",
                        "posTarif",
                        "saldoAkhir",
                        "saldoAwal",
                        "seriBarang",
                        "tipe",
                        "uraian",
                        "barangTarif",
                        "barangVd"
                    ],
                    "message": {
                        "required": "Wajib mengisi asuransi, cif, fob, freight, hargaSatuan, jumlahKemasan, jumlahSatuan, kodeJenisKemasan, kodeSatuanBarang, merk, posTarif, saldoAkhir, saldoAwal, seriBarang, tipe, uraian, metodePenentuanNilai, statementPerbedaanHarga, barangTarif dan barangVd"
                    }
                }
            ]
        },
        "entitas": {
            "type": "array",
            "description": "data entitas dalam pengajuan dokumen pabean",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "alamatEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.3 Alamat Importir"
                        },
                        "kodeEntitas": {
                            "type": "string",
                            "description": "Set kode entitas importir (1). Mengacu pada Referensi Entitas",
                            "const": "1"
                        },
                        "kodeJenisApi": {
                            "type": "string",
                            "description": "Referensi Jenis Api entitas: [01] APIU atau [02] APIP",
                            "enum": [
                                "01",
                                "02"
                            ]
                        },
                        "kodeJenisIdentitas": {
                            "type": "string",
                            "description": "Referensi Jenis Identitas: [2] Paspor, [3] KTP, [4] Lainnya, [5] NPWP 15 Digit, [6] NPWP 16 Digit",
                "enum": [
                    "2",
                    "3",
                    "4",
                    "5",
                    "6"
                ]
                        },
                        "kodeStatus": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.4 Status. Status importir"
                        },
                        "namaEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.3 Nama Importir"
                        },
                        "nibEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.5 NIB. Nomor Induk Berusaha"
                        },
                        "nomorIdentitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.2 Identitas Importir"
                        },
                        "seriEntitas": {
                            "type": "integer",
                            "description": "seri entitas"
                        }
                    },
                    "required": [
                        "alamatEntitas",
                        "kodeEntitas",
                        "kodeJenisApi",
                        "kodeJenisIdentitas",
                        "kodeStatus",
                        "namaEntitas",
                        "nibEntitas",
                        "nomorIdentitas",
                        "seriEntitas"
                    ],
                    "message": {
                        "required": "Wajib mengisi alamatEntitas, kodeEntitas, kodeJenisApi, kodeJenisIdentitas, kodeStatus, namaEntitas, nibEntitas, nomorIdentitas, dan seriEntitas Importir"
                    }
                },
                {
                    "type": "object",
                    "properties": {
                        "alamatEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.3a Alamat Pemilik Barang"
                        },
                        "kodeEntitas": {
                            "type": "string",
                            "description": "Set kode entitas pemilik barang (7). Mengacu pada Referensi Entitas",
                            "const": "7"
                        },
                        "kodeJenisIdentitas": {
                            "type": "string",
                            "description": "Referensi Jenis Identitas: [2] Paspor, [3] KTP, [4] Lainnya, [5] NPWP 15 Digit, [6] NPWP 16 Digit",
                "enum": [
                    "2",
                    "3",
                    "4",
                    "5",
                    "6"
                ]  "5"
                            ]
                        },
                        "namaEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.3a Nama Pemilik Barang"
                        },
                        "nomorIdentitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.2a Identitas Pemilik Barang"
                        },
                        "seriEntitas": {
                            "type": "integer",
                            "description": "seri entitas"
                        }
                    },
                    "required": [
                        "alamatEntitas",
                        "kodeEntitas",
                        "kodeJenisIdentitas",
                        "namaEntitas",
                        "nomorIdentitas",
                        "seriEntitas"
                    ],
                    "message": {
                        "required": "Wajib mengisi alamatEntitas, kodeEntitas, kodeJenisIdentitas, namaEntitas, nomorIdentitas, dan seriEntitas Pemilik Barang"
                    }
                },
                {
                    "type": "object",
                    "properties": {
                        "alamatEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.1 Alamat Pengirim"
                        },
                        "kodeEntitas": {
                            "type": "string",
                            "description": "Set kode entitas pengirim (9). Mengacu pada Referensi Entitas",
                            "const": "9"
                        },
                        "kodeNegara": {
                            "type": "string",
                            "description": "Lihat Referensi Negara",
                            "pattern": "^[A-Za-z]{2}$"
                        },
                        "namaEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.1 Nama Pengirim"
                        },
                        "seriEntitas": {
                            "type": "integer",
                            "description": "seri entitas"
                        }
                    },
                    "required": [
                        "alamatEntitas",
                        "kodeEntitas",
                        "kodeNegara",
                        "namaEntitas",
                        "seriEntitas"
                    ],
                    "message": {
                        "required": "Wajib mengisi alamatEntitas, kodeEntitas, kodeNegara, namaEntitas, dan seriEntitas Pengirim"
                    }
                },
                {
                    "type": "object",
                    "properties": {
                        "alamatEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.1a Alamat Penjual"
                        },
                        "kodeEntitas": {
                            "type": "string",
                            "description": "Set kode entitas penjual (10). Mengacu pada Referensi Entitas",
                            "const": "10"
                        },
                        "kodeNegara": {
                            "type": "string",
                            "description": "Lihat Referensi Negara",
                            "pattern": "^[A-Za-z]{2}$"
                        },
                        "namaEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.1a Nama Penjual"
                        },
                        "seriEntitas": {
                            "type": "integer",
                            "description": "seri entitas"
                        }
                    },
                    "required": [
                        "alamatEntitas",
                        "kodeEntitas",
                        "kodeNegara",
                        "namaEntitas",
                        "seriEntitas"
                    ],
                    "message": {
                        "required": "Wajib mengisi alamatEntitas, kodeEntitas, kodeNegara, namaEntitas, dan seriEntitas Penjual"
                    }
                },
                {
                    "type": "object",
                    "properties": {
                        "alamatEntitas": {
                            "type": "string",
                            "description": "Alamat Pemusatan"
                        },
                        "kodeEntitas": {
                            "type": "string",
                            "description": "Set kode entitas pemusatan (11). Mengacu pada Referensi Entitas",
                            "const": "11"
                        },
                        "kodeJenisIdentitas": {
                            "type": "string",
                            "description": "Referensi Jenis Identitas: [2] Paspor, [3] KTP, [4] Lainnya, [5] NPWP 15 Digit, [6] NPWP 16 Digit",
                "enum": [
                    "2",
                    "3",
                    "4",
                    "5",
                    "6"
                ]
                        },
                        "namaEntitas": {
                            "type": "string",
                            "description": "Nama Pemusatan"
                        },
                        "nomorIdentitas": {
                            "type": "string",
                            "description": "Nomor identitas pemusatan"
                        },
                        "seriEntitas": {
                            "type": "integer",
                            "description": "seri entitas"
                        }
                    },
                    "required": [
                        "alamatEntitas",
                        "kodeEntitas",
                        "kodeJenisIdentitas",
                        "namaEntitas",
                        "nomorIdentitas",
                        "seriEntitas"
                    ],
                    "message": {
                        "required": "Wajib mengisi alamatEntitas, kodeEntitas, kodeJenisApi, kodeJenisIdentitas, namaEntitas, nibEntitas, nomorIdentitas, dan seriEntitas Pemusatan"
                    }
                },
                {
                    "type": "object",
                    "properties": {
                        "alamatEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.7 Alamat PPJK"
                        },
                        "kodeEntitas": {
                            "type": "string",
                            "description": "Set kode entitas PPJK (4). Mengacu pada Referensi Entitas",
                            "const": "4"
                        },
                        "kodeJenisIdentitas": {
                            "type": "string",
                            "description": "Set kode jenis identitas NPWP 15 Digit (5). Mengacu Referensi Jenis Identitas",
                            "const": "5"
                        },
                        "namaEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.7 Nama PPJK"
                        },
                        "nomorIdentitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.6 NPWP"
                        },
                        "seriEntitas": {
                            "type": "integer",
                            "description": "seri entitas"
                        }
                    }
                }
            ]
        },
        "kemasan": {
            "type": "array",
            "description": "data kemasan dalam pengajuan dokumen pabean",
            "items": [
                {
                    "type": "object",
                    "description": "data kemasan yang digunakan untuk mengemas barang impor",
                    "properties": {
                        "jumlahKemasan": {
                            "type": "integer",
                            "description": "Sesuai kolom formulir BC 2.0 - D.28 Jumlah Kemasan"
                        },
                        "kodeJenisKemasan": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.28 Jenis Kemasan. Lihat Referensi Jenis Kemasan"
                        },
                        "merkKemasan": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.28 Merek Kemasan"
                        },
                        "seriKemasan": {
                            "type": "integer",
                            "description": "seri data kemasan berdasarkan data yang dimasukkan"
                        }
                    },
                    "required": [
                        "jumlahKemasan",
                        "kodeJenisKemasan",
                        "merkKemasan",
                        "seriKemasan"
                    ],
                    "message": {
                        "required": "Wajib mengisi jumlahKemasan, kodeJenisKemasan, merkKemasan, dan seriKemasan"
                    }
                }
            ]
        },
        "kontainer": {
            "type": "array",
            "description": "data kontainer dalam pengajuan dokumen pabean",
            "items": [
                {
                    "type": "object",
                    "description": "data peti kemas/kontainer yang digunakan untuk mengangkut barang impor, apabila pengangkutan menggunakan peti kemas/kontainer",
                    "properties": {
                        "kodeJenisKontainer": {
                            "type": "string",
                            "description": "Referensi Jenis Kontainer: [4] Empty, [7] LCL, [8] FCL",
                            "enum": [
                                "4",
                                "7",
                                "8"
                            ]
                        },
                        "kodeTipeKontainer": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.27 Tipe Peti Kemas. Referensi Tipe Kontainer: [1] General/Dry Cargo, [2] Tunne Type, [3] Open Top Steel, [4] Flat Rack, [5] Reefer/Refregete, [6] Barge Container, [7] Bulk Container, [8] Isotank, [99] Lain-lain ",
                            "enum": [
                                "1",
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "99"
                            ]
                        },
                        "kodeUkuranKontainer": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.27 Ukuran Peti Kemas. Referensi Ukuran Kontainer: [20] 20 feet, [40] 40 feet, [45] 45 feet, [60] 60 feet",
                            "enum": [
                                "20",
                                "40",
                                "45",
                                "60"
                            ]
                        },
                        "nomorKontainer": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.27 Nomor Peti Kemas"
                        },
                        "seriKontainer": {
                            "type": "integer",
                            "description": "seri data kontainer berdasarkan data yang dimasukkan"
                        }
                    },
                    "dependencies": {
                        "seriKontainer": [
                            "kodeTipeKontainer",
                            "kodeUkuranKontainer",
                            "nomorKontainer"
                        ]
                    },
                    "message": {
                        "required": "Wajib mengisi kodeTipeKontainer, kodeUkuranKontainer, nomorKontainer, dan seriKontainer"
                    }
                }
            ]
        },
        "dokumen": {
            "type": "array",
            "description": "data dokumen pelengkap dalam pengajuan dokumen pabean",
            "items": [
                {
                    "type": "object",
                    "description": "data invoice sebagai dokumen pelengkap",
                    "properties": {
                        "idDokumen": {
                            "type": "string",
                            "description": "ID Dokumen"
                        },
                        "kodeDokumen": {
                            "type": "string",
                            "description": "Set kode dokumen invoice (380)",
                            "const": "380"
                        },
                        "kodeFasilitas": {
                            "type": "string",
                            "description": "Lihat Referensi Fasilitas"
                        },
                        "kodeIjin": {
                            "type": "string",
                            "description": "Lihat Referensi Ijin"
                        },
                        "nomorDokumen": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.15 Nomor Invoice"
                        },
                        "seriDokumen": {
                            "type": "integer",
                            "description": "seri dokumen pelengkap pabean"
                        },
                        "tanggalDokumen": {
                            "type": "string",
                            "format": "date",
                            "description": "Sesuai kolom formulir BC 2.0 - D.15 Tanggal Invoice dengan format YYYY-MM-DD"
                        },
                        "urlDokumen": {
                            "type": "string",
                            "description": "url dokumen invoice"
                        }
                    },
                    "required": [
                        "kodeDokumen",
                        "nomorDokumen",
                        "seriDokumen",
                        "tanggalDokumen"
                    ],
                    "message": {
                        "required": "Wajib mengisi kodeDokumen, nomorDokumen, seriDokumen, dan tanggalDokumen Invoice"
                    }
                },
                {
                    "type": "object",
                    "description": "data house-bl/awb sebagai dokumen pelengkap",
                    "properties": {
                        "idDokumen": {
                            "type": "string",
                            "description": "ID Dokumen"
                        },
                        "kodeDokumen": {
                            "type": "string",
                            "description": "Set kode dokumen House-BL/AWB (705 / 740)",
                            "enum": [
                                "705",
                                "740"
                            ]
                        },
                        "kodeFasilitas": {
                            "type": "string",
                            "description": "Lihat Referensi Fasilitas"
                        },
                        "kodeIjin": {
                            "type": "string",
                            "description": "Lihat Referensi Ijin"
                        },
                        "nomorDokumen": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.17 Nomor House-BL/AWB"
                        },
                        "seriDokumen": {
                            "type": "integer",
                            "description": "seri dokumen pelengkap pabean"
                        },
                        "tanggalDokumen": {
                            "type": "string",
                            "format": "date",
                            "description": "Sesuai kolom formulir BC 3.0 - D.17 Tanggal House-BL/AWB dengan format YYYY-MM-DD"
                        },
                        "urlDokumen": {
                            "type": "string",
                            "description": "url dokumen Nomor House-BL/AWB"
                        }
                    },
                    "dependencies": {
                        "seriDokumen": [
                            "kodeDokumen",
                            "nomorDokumen",
                            "tanggalDokumen"
                        ]
                    },
                    "message": {
                        "dependencies": "Jika terdapat seriDokumen House-BL/AWB, maka wajib mengisi kodeDokumen, nomorDokumen, dan tanggalDokumen House-BL/AWB"
                    }
                },
                {
                    "type": "object",
                    "description": "data dokumen persyaratan impor dan/atau surat keputusan fasilitas impor dalam pengajuan dokumen pabean",
                    "properties": {
                        "idDokumen": {
                            "type": "string",
                            "description": "ID Dokumen"
                        },
                        "kodeDokumen": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.19 Pemenuhan Persyaratan/Fasilitas Impor. Lihat Referensi Dokumen"
                        },
                        "kodeFasilitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.19 Pemenuhan Persyaratan/Fasilitas Impor. Lihat Referensi Fasilitas"
                        },
                        "kodeIjin": {
                            "type": "string",
                            "description": "Lihat Referensi Ijin"
                        },
                        "namaFasilitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.19 Pemenuhan Persyaratan/Fasilitas Impor"
                        },
                        "nomorDokumen": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.19 Nomor Pemenuhan Persyaratan/Fasilitas Impor"
                        },
                        "seriDokumen": {
                            "type": "integer",
                            "description": "seri dokumen pelengkap pabean"
                        },
                        "tanggalDokumen": {
                            "type": "string",
                            "format": "date",
                            "description": "Sesuai kolom formulir BC 2.0 - D.19 Tanggal Pemenuhan Persyaratan/Fasilitas Impor dengan format YYYY-MM-DD"
                        },
                        "urlDokumen": {
                            "type": "string",
                            "description": "url dokumen pelengkap pabean"
                        }
                    },
                    "dependencies": {
                        "seriDokumen": [
                            "kodeDokumen",
                            "nomorDokumen",
                            "tanggalDokumen"
                        ]
                    },
                    "message": {
                        "dependencies": "Jika terdapat seriDokumen Pemenuhan Persyaratan/Fasilitas Impor, maka wajib mengisi kodeDokumen, nomorDokumen, dan tanggalDokumen Pemenuhan Persyaratan/Fasilitas Impor"
                    }
                }
            ]
        },
        "pengangkut": {
            "type": "array",
            "description": "data pengangkut dalam pengajuan dokumen pabean",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "kodeBendera": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.10 Bendera. Lihat Referensi Bendera"
                        },
                        "namaPengangkut": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.10 Nama Sarana Pengangkutan"
                        },
                        "nomorPengangkut": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.10 No. Voy/Flight"
                        },
                        "kodeCaraAngkut": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.0 - D.9 Cara Pengangkutan. Referensi Cara Angkut: [1] Laut, [2] Kereta Api, [3] Darat, [4] Udara, [5] Pos, [6] Multimoda, [7] Instalasi/Pipa, [8] Perairan, [9] Lainnya",
                            "enum": [
                                "1",
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "9"
                            ]
                        },
                        "seriPengangkut": {
                            "type": "integer",
                            "description": "seri data pengangkut"
                        }
                    },
                    "required": [
                        "kodeBendera",
                        "namaPengangkut",
                        "nomorPengangkut",
                        "kodeCaraAngkut",
                        "seriPengangkut"
                    ],
                    "message": {
                        "required": "Wajib mengisi kodeBendera, namaPengangkut, nomorPengangkut, kodeCaraAngkut, dan seriPengangkut"
                    }
                }
            ]
        }
    },
    "required": [
        "asuransi",
        "bruto",
        "cif",
        "kodeJenisImpor",
        "freight",
        "jabatanTtd",
        "jumlahKontainer",
        "kodeCaraBayar",
        "kodeKantor",
        "kodePelMuat",
        "kodePelTujuan",
        "kodeTps",
        "kodeTutupPu",
        "kodeValuta",
        "kotaTtd",
        "namaTtd",
        "ndpbm",
        "netto",
        "nomorAju",
        "tanggalTtd",
        "tanggalTiba",
        "biayaTambahan",
        "biayaPengurang",
        "barang",
        "entitas",
        "kemasan",
        "dokumen",
        "pengangkut"
    ],
    "message": {
        "required": "Wajib mengisi asuransi, bruto, cif, kodeJenisImpor, freight, jabatanTtd, jumlahKontainer, kodeCaraBayar, kodeKantor, kodePelMuat, kodePelTujuan, kodeTps, kodeTutupPu, kodeValuta, kotaTtd, namaTtd, ndpbm, netto, nomorAju, tanggalTiba, tanggalTtd, biayaTambahan, biayaPengurang, barang, entitas, kemasan, dokumen, dan pengangkut"
    }
  }

Contoh JSON Kirim Dokumen Impor

{
    "asalData": "S",
    "asuransi": 0,
    "biayaPengurang": 0,
    "biayaTambahan": 0,
    "bruto": 350.71,
    "cif": 1234567.89,
    "disclaimer": "1",
    "flagVd": "Y",
    "fob": 0,
    "freight": 0,
    "hargaPenyerahan": 0,
    "idPengguna": "ABCDE",
    "jabatanTtd": "MANAGER",
    "jumlahKontainer": 1,
    "jumlahTandaPengaman": 0,
    "kodeAsuransi": "LN",
    "kodeCaraBayar": "2",
    "kodeDokumen": "20",
    "kodeIncoterm": "CIF",
    "kodeJenisImpor": "1",
    "kodeJenisNilai": "KMD",
    "kodeJenisProsedur": "1",
    "kodeKantor": "051000",
    "kodePelMuat": "CNHSK",
    "kodePelTransit": "CNHSK",
    "kodePelTujuan": "IDJBK",
    "kodeTps": "TPS1",
    "kodeTutupPu": "11",
    "kodeValuta": "CNY",
    "kotaTtd": "JAKARTA",
    "namaTtd": "AGUS",
    "ndpbm": 1234.56,
    "netto": 342.71,
    "nilaiBarang": 0,
    "nilaiIncoterm": 0,
    "nilaiMaklon": 0,
    "nomorAju": "301017INA9G220220525000025",
    "nomorBc11": "000001",
    "posBc11": "0001",
    "seri": 0,
    "subPosBc11": "00000000",
    "tanggalAju": "2021-12-25",
    "tanggalBc11": "2021-12-24",
    "tanggalTiba": "2021-12-25",
    "tanggalTtd": "2021-12-25",
    "totalDanaSawit": 0,
    "volume": 0,
    "vd": 123,
    "barang": [
      {
        "asuransi": 0,
        "bruto": 12,
        "cif": 1234000.89,
        "cifRupiah": 1234000.89,
        "diskon": 0,
        "fob": 0,
        "freight": 0,
        "hargaEkspor": 0,
        "hargaPatokan": 0,
        "hargaPenyerahan": 0,
        "hargaPerolehan": 0,
        "hargaSatuan": 345.67,
        "hjeCukai": 0,
        "isiPerKemasan": 0,
        "jumlahBahanBaku": 0,
        "jumlahDilekatkan": 0,
        "jumlahKemasan": 1,
        "jumlahPitaCukai": 0,
        "jumlahRealisasi": 0,
        "jumlahSatuan": 30,
        "kapasitasSilinder": 0,
        "kodeJenisKemasan": "CT",
        "kodeKondisiBarang": "8",
        "kodeNegaraAsal": "CN",
        "kodeSatuanBarang": "PCE",
        "merk": "MERK BARANG 1",
        "ndpbm": 1200.56,
        "netto": 340.71,
        "nilaiBarang": 0,
        "nilaiDanaSawit": 0,
        "nilaiDevisa": 0,
        "nilaiTambah": 0,
        "pernyataanLartas": "Y",
        "persentaseImpor": 0,
        "posTarif": "84212990",
        "saldoAkhir": 0.0,
        "saldoAwal": 0.0,
        "seriBarang": 1,
        "seriBarangDokAsal": 0,
        "seriIjin": 0,
        "tahunPembuatan": 0,
        "tarifCukai": 0,
        "tipe": "TIPE BARANG 1",
        "uraian": "BARANG 1",
        "volume": 0,
        "barangDokumen": [
          {
            "seriDokumen": "1"
          }
        ],
        "barangTarif": [
          {
            "jumlahSatuan": 1,
            "kodeFasilitasTarif": "1",
            "kodeJenisPungutan": "BM",
            "kodeJenisTarif": "1",
            "nilaiBayar": 123456.78,
            "nilaiFasilitas": 0.0,
            "seriBarang": 1,
            "tarif": 0.0,
            "tarifFasilitas": 100.0
          },
          {
            "jumlahSatuan": 1,
            "kodeFasilitasTarif": "1",
            "kodeJenisPungutan": "PPN",
            "kodeJenisTarif": "1",
            "nilaiBayar": 123456.78,
            "nilaiFasilitas": 0.0,
            "seriBarang": 1,
            "tarif": 10.0,
            "tarifFasilitas": 100.0
          },
          {
            "jumlahSatuan": 1,
            "kodeFasilitasTarif": "1",
            "kodeJenisPungutan": "PPH",
            "kodeJenisTarif": "1",
            "nilaiBayar": 123456.78,
            "nilaiFasilitas": 0.0,
            "seriBarang": 1,
            "tarif": 2.5,
            "tarifFasilitas": 100.0
          }
        ],
        "barangVd": [
          {
            "kodeJenisVd": "NTR",
            "nilaiBarangVd": 123
          }
        ],
        "barangSpekKhusus": [],
        "barangPemilik": []
      },
      {
        "asuransi": 2.34,
        "bruto": 23,
        "cif": 567,
        "cifRupiah": 567,
        "diskon": 165.84,
        "fob": 0,
        "freight": 0,
        "hargaEkspor": 0,
        "hargaPatokan": 0,
        "hargaPenyerahan": 0,
        "hargaPerolehan": 0,
        "hargaSatuan": 7.89,
        "hjeCukai": 300000,
        "isiPerKemasan": 15,
        "jumlahBahanBaku": 0,
        "jumlahDilekatkan": 0,
        "jumlahKemasan": 1,
        "jumlahPitaCukai": 4,
        "jumlahRealisasi": 0,
        "jumlahSatuan": 60,
        "kapasitasSilinder": 0,
        "kodeJenisKemasan": "PK",
        "kodeKondisiBarang": "1",
        "kodeNegaraAsal": "CU",
        "kodeSatuanBarang": "PCE",
        "merk": "MERK BARANG 2",
        "ndpbm": 14330,
        "netto": 170.25
        "nilaiBarang": 0,
        "nilaiDanaSawit": 0,
        "nilaiDevisa": 0,
        "nilaiTambah": 0,
        "pernyataanLartas": "Y",
        "persentaseImpor": 0,
        "posTarif": "24029010",
        "saldoAkhir": 0.0,
        "saldoAwal": 0.0,
        "seriBarang": 2,
        "seriBarangDokAsal": 0,
        "seriIjin": 0,
        "tahunPembuatan": 0,
        "tarifCukai": 0,
        "tipe": "TIPE BARANG 2",
        "uraian": "BARANG 2",
        "volume": 0,
        "barangTarif": [
          {
            "jumlahSatuan": 60,
            "kodeFasilitasTarif": "1",
            "kodeJenisPungutan": "BM",
            "kodeJenisTarif": "1",
            "nilaiBayar": 87654.32,
            "nilaiFasilitas": 0,
            "seriBarang": 2,
            "tarif": 40,
            "tarifFasilitas": 100
          },
          {
            "jumlahKemasan": 4,
            "jumlahSatuan": 60,
            "kodeFasilitasTarif": "7",
            "kodeJenisPungutan": "CTEM",
            "kodeJenisTarif": "2",
            "kodeKemasan": "BX",
            "kodeKomoditiCukai": "3",
            "kodeSatuanBarang": "PCE",
            "kodeSubKomoditiCukai": "CRT",
            "nilaiBayar": 0,
            "nilaiFasilitas": 0,
            "nilaiSudahDilunasi": 6600000,
            "seriBarang": 2,
            "tarif": 110000
          },
          {
            "jumlahSatuan": 60,
            "kodeFasilitasTarif": "1",
            "kodeJenisPungutan": "PPH",
            "kodeJenisTarif": "1",
            "kodeSatuanBarang": "PCE",
            "nilaiBayar": 534015.41,
            "nilaiFasilitas": 0,
            "seriBarang": 2,
            "tarif": 2.5,
            "tarifFasilitas": 100
          },
          {
            "kodeJenisTarif": "1",
            "jumlahSatuan": 60,
            "kodeFasilitasTarif": "1",
            "kodeSatuanBarang": "PCE",
            "kodeJenisPungutan": "PPN",
            "nilaiBayar": 140000,
            "nilaiFasilitas": 0,
            "seriBarang": 1,
            "tarif": 10,
            "tarifFasilitas": 100
          }
        ],
        "barangVd": [],
        "barangDokumen": [],
        "barangSpekKhusus": [],
        "barangPemilik": []
      }
    ],
    "entitas": [
      {
        "alamatEntitas": "JAKARTA",
        "kodeEntitas": "1",
        "kodeJenisApi": "01",
        "kodeJenisIdentitas": "3",
        "kodeStatus": "AEO",
        "namaEntitas": "IMPORTIR",
        "nibEntitas": "1234567890123",
        "nomorIdentitas": "123456789012345",
        "seriEntitas": 1
      },
      {
        "alamatEntitas": "JAKARTA",
        "kodeEntitas": "7",
        "kodeJenisIdentitas": "2",
        "namaEntitas": "PEMILIK",
        "nomorIdentitas": "123456789012345"
        "seriEntitas": 2
      },
      {
        "alamatEntitas": "SINGAPURA",
        "kodeEntitas": "9",
        "kodeNegara": "SG",
        "namaEntitas": "PENGIRIM",
        "seriEntitas": 3
      },
      {
        "alamatEntitas": "SINGAPURA",
        "kodeEntitas": "10",
        "kodeNegara": "SG",
        "namaEntitas": "PENJUAL",
        "seriEntitas": 4
      },
      {
        "alamatEntitas": "JAKARTA",
        "kodeEntitas": "11",
        "kodeJenisIdentitas": "0",
        "namaEntitas": "ABC",
        "nomorIdentitas": "123456789012",
        "seriEntitas": 5
      },
      {
        "alamatEntitas": "JAKARTA",
        "kodeEntitas": "4",
        "kodeJenisIdentitas": "5",
        "namaEntitas": "ABC",
        "nomorIdentitas": "123456789012345",
        "seriEntitas": 6
      }
    ],
    "kemasan": [
      {
        "jumlahKemasan": 1,
        "kodeJenisKemasan": "PK",
        "merkKemasan": "MERK ABC",
        "seriKemasan": 1
      }
    ],
    "kontainer": [
      {
        "kodeJenisKontainer": "4",
        "kodeTipeKontainer": "99",
        "kodeUkuranKontainer": "40",
        "nomorKontainer": "ABCD1234567",
        "seriKontainer": 1
      }
    ],
    "dokumen": [
      {
        "idDokumen": "1",
        "kodeDokumen": "380",
        "kodeFasilitas": "",
        "nomorDokumen": "INVOICE 01",
        "seriDokumen": 1,
        "tanggalDokumen": "2021-12-25"
      },
      {
        "idDokumen": "3",
        "kodeDokumen": "705",
        "kodeFasilitas": "",
        "nomorDokumen": "HOUSE BL/AWB 01",
        "seriDokumen": 3,
        "tanggalDokumen": "2021-12-25"
      },
      {
        "idDokumen": "4",
        "kodeDokumen": "860",
        "kodeFasilitas": "54",
        "namaFasilitas": "Preferensi Tarif Importasi Asean-China (ACFTA)",
        "nomorDokumen": "ACFTA 01",
        "seriDokumen": 4,
        "tanggalDokumen": "2021-12-25"
      }
    ],
    "pengangkut": [
      {
        "kodeBendera": "CN",
        "namaPengangkut": "PENGANGKUT",
        "nomorPengangkut": "1234",
        "kodeCaraAngkut": "1",
        "seriPengangkut": 1
      }
    ]
  }

Rumus Penghitungan

Bea Masuk (BM)

  * Tarif Advalorum

  * Tarif Spesifik

BM=NilaiPabean∗TarifBMBM = Nilai Pabean * Tarif BMBM=NilaiPabean∗TarifBM

​Nilai Pabean = CIF (Cost/FOB, Insurance, & Freight) x NDPBM ()

Tarif BM = Persentase atau Tarif BM berdasarkan 

📄

[Link rumus penghitungan](https://web.archive.org/web/20250523045533/https://bctemas.beacukai.go.id/yuk-belajar-menghitung-bea-masuk-bm-dan-pajak-dalam-rangka-impor-pdri/)

[Kurs](https://web.archive.org/web/20250523045533/https://www.beacukai.go.id/kurs.html)

[BTKI](https://web.archive.org/web/20250523045533/https://www.beacukai.go.id/btki.html)

[(detil)](web/20250523045533/https://ceisa40.gitbook.io/pia-ceisa40/change-log#id-1.0.58-2024-06-13.md)
```