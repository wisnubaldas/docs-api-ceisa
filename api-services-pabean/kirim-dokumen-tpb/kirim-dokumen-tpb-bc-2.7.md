# Kirim Dokumen TPB - BC 2.7

JSON Schema TPB BC 2.7

```json
    {
      "Declaration" :
  {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "title": "Schema Kirim Dokumen BC 2.7",
    "description": "JSON Schema untuk Kirim Dokumen Pabean v.0.9. Terdiri atas data header dan data barang. Data header merupakan data umum dokumen pabean sedangkan data barang merupakan data detil atas barang pada dokumen pabean",
    "properties": {
        "asalData": {
            "type": "string",
            "description": "set value [S]",
            "const": "S",
            "message": "Asal pengiriman data secara Host to Host: S"
        },
        "asuransi": {
            "type": "number",
            "description": "Nilai Asuransi",
            "maxlength": 18,
            "multipleOf": 0.01,
            "message": "Nilai asuransi maksimal 18 digit dengan dua angka dibelakang koma"
        },
        "bruto": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.7 - E.34 Berat Kotor (Kg)",
            "maxlength": 18,
            "multipleOf": 0.0001,
            "message": "Nilai bruto maksimal 18 digit dengan empat angka dibelakang koma"
        },
        "cif": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.7 - E.21 CIF",
            "maxlength": 18,
            "multipleOf": 0.01,
            "message": "Nilai cif maksimal 18 digit dengan dua angka dibelakang koma"
        },
        "dasarPengenaanPajak": {
            "type": "number",
            "description": "Nilai dasar pengenaan pajak",
            "maxlength": 18,
            "multipleOf": 0.01,
            "message": "Nilai dasar pengenaan pajak maksimal 18 digit dengan dua angka dibelakang koma"
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
        "kodeJenisTpb": {
            "type": "string",
            "description": "Referensi jenis TPB: [1] Kawasan Berikat, [2] Gudang Berikat, [3] TPPB, [4] TBB, [5] TLB, [6] KDUB, [7] PLB, [8] Lainnya",
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
        "freight": {
            "type": "number",
            "description": "Freight",
            "maxlength": 18,
            "multipleOf": 0.01,
            "message": "Nilai freight maksimal 18 digit dengan dua angka dibelakang koma"
        },
        "hargaPenyerahan": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.7 - E.23 Harga Penyerahan",
            "maxlength": 18,
            "multipleOf": 0.01,
            "message": "Nilai harga penyerahan maksimal 18 digit dengan dua angka dibelakang koma"
        },
        "jabatanTtd": {
            "type": "string",
            "description": "Jabatan pengusaha TPB"
        },
        "jumlahKontainer": {
            "type": "integer",
            "description": "Sesuai kolom formulir BC 2.7 - E.31 Jumlah Peti kemas",
            "message": "Jumlah kontainer atau peti kemas"
        },
        "kodeDokumen": {
            "type": "string",
            "description": "set value [27]",
            "const": "27",
            "message": "Format kode sesuai Referensi Dokumen TPB BC 2.7: 27"
        },
        "kodeKantor": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.7 - A. Kantor Pabean. Lihat Referensi Kantor",
            "message": "Format kode sesuai Referensi Kantor"
        },
        "kodeKantorTujuan": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.7 - A.2 Kantor Tujuan. Lihat Referensi Kantor",
            "message": "Format kode sesuai Referensi Kantor"
        },
        "kodeTps": {
            "type": "string",
            "description": "Kode tps sesuai dengan yang dibuat oleh Kantor Pabean masing-masing",
            "message": "Format kode tps sesuai dengan yang dibuat oleh Kantor Pabean masing-masing "
        },
        "kodeTujuanPengiriman": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.7 - D. Tujuan Pengiriman. Referensi tujuan pengiriman: [1] PENYERAHAN BKP, [2] PENYERAHAN JKP, [3] RETUR, [4] NON PENYERAHAN, [5] LAINNYA",
            "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        "kodeTujuanTpb": {
            "type": "string",
            "description": "Lihat Referensi Jenis TPB",
            "message": "Format kode sesuai Referensi Jenis TPB"
        },
        "kodeValuta": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.7 - E.20 Jenis Valuta Asing. Lihat Referensi Valuta",
            "message": "Format kode sesuai Referensi Valuta"
        },
        "kotaTtd": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.7 - F Kota tempat pengguna membuat dokumen BC 2.7",
            "message": "Kota tempat pengguna membuat dokumen BC 2.7"
        },
        "namaTtd": {
            "type": "string",
            "description": "Sesuai kolom formulir BC 2.7 - F Nama pengguna yang membuat dokumen BC 2.7",
            "message": "Nama pengguna yang membuat dokumen BC 2.7"
        },
        "ndpbm": {
            "type": "number",
            "description": "Nilai tukar yang dipergunakan sebagai dasar penghitungan bea masuk",
            "maxlength": 10,
            "multipleOf": 0.0001,
            "message": "Ndpbm maksimal 10 digit dengan empat angka dibelakang koma"
        },
        "netto": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.7 - E.35 Berat Bersih (Kg)",
            "maxlength": 20,
            "multipleOf": 0.0001,
            "message": "Nilai netto/berat bersih maksimal 20 digit dengan empat angka dibelakang koma"
        },
        "nik": {
            "type": "string",
            "description": "Nomor Induk Kepabeanan",
            "message": "Nomor Induk Kepabeanan"
        },
        "nilaiBarang": {
            "type": "number",
            "description": "nilai barang impor dalam mata uang sesuai kode valuta yang dimasukkan",
            "maxlength": 38,
            "multipleOf": 0.01,
            "message": "Nilai barang maksimal 38 digit dengan dua angka dibelakang koma"
        },
        "nomorAju": {
            "type": "string",
            "description": "nomor pengajuan dokumen pabean 26 digit dengan format 4 digit kode kantor, 2 digit kode dokumen pabean, 6 digit unik perusahaan, 8 digit tanggal pengajuan dengan format YYYYMMDD, 6 digit sequence/nomor urut pengajuan dokumen pabean",
            "pattern": "^[A-Za-z0-9]{26}$",
            "message": "Sesuaikan format nomor pengajuan dokumen impor terdiri 26 digit: 4 digit kode kantor, 2 digit kode dokumen pabean, 6 digit unik perusahaan, 8 digit tanggal pengajuan dengan format YYYYMMDD, 6 digit sequence/nomor urut pengajuan dokumen impor"
        },
        "seri": {
            "type": "integer",
            "description": "seri dokumen TPB",
            "message": "seri dokumen TPB"
        },
        "tanggalAju": {
            "type": "string",
            "format": "date",
            "description": "Sesuai kolom formulir BC 2.7 - D Tanggal Pendaftaran dengan format YYYY-MM-DD",
            "message": "Sesuaikan format tanggal pendaftaran: YYYY-MM-DD"
        },
        "tanggalTtd": {
            "type": "string",
            "format": "date",
            "description": "Sesuai kolom formulir BC 2.7 - tab Pernyataan - Tanggal penandatanganan dokumen pabean dengan format YYYY-MM-DD",
            "message": "Sesuaikan format tanggal penandatanganan dokumen: YYYY-MM-DD"
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
        "vd": {
            "type": "number",
            "description": "Nilai Voluntary Declaration",
            "maxlength": 24,
            "multipleOf": 0.0001,
            "message": "Nilai VD maksimal 24 digit dengan empat angka dibelakang koma"
        },
        "uangMuka": {
            "type": "number",
            "description": "Nilai Uang Muka",
            "maxlength": 24,
            "multipleOf": 0.0001,
            "message": "Nilai uang muka maksimal 24 digit dengan empat angka dibelakang koma"
        },
        "nilaiJasa": {
            "type": "number",
            "description": "Sesuai kolom formulir BC 2.7 - E.22 Nilai Penggantian/Nilai Jasa",
            "maxlength": 24,
            "multipleOf": 0.0001
        },
        "ppnPajak": {
            "type": "number",
            "description": "Nilai ppn pajak",
            "maxlength": 18,
            "multipleOf": 0.01,
            "message": "Nilai ppn pajak maksimal 18 digit dengan dua angka dibelakang koma"
        },
        "ppnbmPajak": {
            "type": "number",
            "description": "Nilai ppnbm pajak",
            "maxlength": 18,
            "multipleOf": 0.01,
            "message": "Nilai ppnbm pajak maksimal 18 digit dengan dua angka dibelakang koma"
        },
        "tarifPpnPajak": {
            "type": "number",
            "description": "Tarif ppn pajak",
            "maxlength": 18,
            "multipleOf": 0.01,
            "message": "Tarif ppn pajak maksimal 18 digit dengan dua angka dibelakang koma"
        },
        "tarifPpnbmPajak": {
            "type": "number",
            "description": "Tarif ppnbm pajak",
            "maxlength": 18,
            "multipleOf": 0.01,
            "message": "Tarif ppnbm pajak maksimal 18 digit dengan dua angka dibelakang koma"
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
                            "description": "Sesuai kolom formulir BC 2.7 - E.3 Alamat"
                        },
                        "kodeEntitas": {
                            "type": "string",
                            "description": "Set kode entitas pengusaha (3). Mengacu pada Referensi Entitas",
                            "const": "3"
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
                            "description": "Sesuai kolom formulir BC 2.7 - E.2 Nama"
                        },
                        "nibEntitas": {
                            "type": "string",
                            "description": "Nomor Induk Berusaha"
                        },
                        "nomorIdentitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.1 NPWP"
                        },
                        "nomorIjinEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.4 No Izin TPB"
                        },
                        "seriEntitas": {
                            "type": "integer",
                            "description": "seri entitas"
                        },
                        "tanggalIjinEntitas": {
                            "type": "string",
                            "format": "date",
                            "description": "Tanggal ijin entitas"
                        }
                    },
                    "required": [
                        "alamatEntitas",
                        "kodeEntitas",
                        "kodeJenisIdentitas",
                        "namaEntitas",
                        "nomorIdentitas",
                        "nomorIjinEntitas",
                        "seriEntitas",
                        "tanggalIjinEntitas"
                    ],
                    "message": {
                        "required": "Wajib mengisi alamatEntitas, kodeEntitas, kodeJenisIdentitas, namaEntitas, nomorIdentitas, nomorIjin Entitas, tanggalIjinEntitas dan seriEntitas Pengusaha TPB"
                    }
                },
                {
                    "type": "object",
                    "properties": {
                        "alamatEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.11 Alamat"
                        },
                        "kodeEntitas": {
                            "type": "string",
                            "description": "Set kode entitas pemilik (7). Mengacu pada Referensi Entitas",
                            "const": "7"
                        },
                        "kodeJenisApi": {
                            "type": "string",
                            "description": "Kode jenis API. Lihat referensi Jenis API"
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
                            "status": "Lihat referensi status pengusaha"
                        },
                        "namaEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.10 Nama"
                        },
                        "nibEntitas": {
                            "type": "string",
                            "description": "Nomor Induk Berusaha"
                        },
                        "nomorIdentitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.9 NPWP"
                        },
                        "nomorIjinEntitas": {
                            "type": "string",
                            "description": "nomor ijin entitas"
                        },
                        "seriEntitas": {
                            "type": "integer",
                            "description": "seri entitas"
                        },
                        "tanggalIjinEntitas": {
                            "type": "string",
                            "format": "date",
                            "description": "Tanggal ijin entitas"
                        }
                    },
                    "required": [
                        "alamatEntitas",
                        "kodeEntitas",
                        "kodeJenisIdentitas",
                        "namaEntitas",
                        "kodeJenisApi",
                        "kodeStatus",
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
                            "description": "Sesuai kolom formulir BC 2.7 - E.7 Alamat"
                        },
                        "kodeEntitas": {
                            "type": "string",
                            "description": "Set kode entitas penerima (8). Mengacu pada Referensi Entitas",
                            "const": "8"
                        },
                        "kodeJenisApi": {
                            "type": "string",
                            "description": "Kode jenis API. Lihat referensi Jenis API"
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
                            "status": "Lihat referensi status pengusaha"
                        },
                        "namaEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.6 Nama"
                        },
                        "nibEntitas": {
                            "type": "string",
                            "description": "Nomor Induk Berusaha"
                        },
                        "nomorIdentitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.5 NPWP"
                        },
                        "nomorIjinEntitas": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.8 No Izin TPB"
                        },
                        "seriEntitas": {
                            "type": "integer",
                            "description": "seri entitas"
                        },
                        "tanggalIjinEntitas": {
                            "type": "string",
                            "format": "date",
                            "description": "Tanggal ijin entitas"
                        }
                    },
                    "required": [
                        "alamatEntitas",
                        "kodeEntitas",
                        "kodeJenisIdentitas",
                        "namaEntitas",
                        "kodeJenisApi",
                        "kodeStatus",
                        "nomorIdentitas",
                        "nomorIjinEntitas",
                        "seriEntitas",
                        "tanggalIjinEntitas"
                    ],
                    "message": {
                        "required": "Wajib mengisi alamatEntitas, kodeEntitas, kodeJenisIdentitas, namaEntitas, nomorIdentitas, nomorIjin Entitas, tanggalIjinEntitas dan seriEntitas Tujuan Barang"
                    }
                }
            ]
        },
        "dokumen": {
            "type": "array",
            "description": "data dokumen pelengkap dalam pengajuan dokumen pabean",
            "items": {
                "type": "object",
                "properties": {
                    "idDokumen": {
                        "type": "string",
                        "description": "ID Dokumen"
                    },
                    "kodeDokumen": {
                        "type": "string",
                        "description": "Kode dokumen. Lihat Referensi Dokumen"
                    },
                    "nomorDokumen": {
                        "type": "string",
                        "description": "Nomor dokumen pelengkap pabean"
                    },
                    "seriDokumen": {
                        "type": "integer",
                        "description": "seri dokumen pelengkap pabean"
                    },
                    "tanggalDokumen": {
                        "type": "string",
                        "format": "date",
                        "description": "Tanggal dokumen dengan format YYYY-MM-DD"
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
                    "dependencies": "Jika terdapat seriDokumen pelengkap pabean, maka wajib mengisi kodeDokumen, nomorDokumen, dan tanggalDokumen pelengkap pabean"
                }
            }
        },
        "pengangkut": {
            "type": "array",
            "description": "data pengangkut dalam pengajuan dokumen pabean",
            "items": {
                "type": "object",
                "properties": {
                    "namaPengangkut": {
                        "type": "string",
                        "description": "Sesuai kolom formulir BC 2.7 - E.26 Jenis Sarana Pengangkut Darat"
                    },
                    "nomorPengangkut": {
                        "type": "string",
                        "description": "Sesuai kolom formulir BC 2.7 - E.27 No. Polisi"
                    },
                    "seriPengangkut": {
                        "type": "string",
                        "description": "seri data pengangkut"
                    }
                },
                "required": [
                    "namaPengangkut",
                    "nomorPengangkut",
                    "seriPengangkut"
                ]
            }
        },
        "kemasan": {
            "type": "array",
            "description": "data kemasan dalam pengajuan dokumen pabean",
            "items": {
                "type": "object",
                "properties": {
                    "jumlahKemasan": {
                        "type": "integer",
                        "description": "Sesuai kolom formulir BC 2.7 - E.32 Jumlah Kemasan"
                    },
                    "kodeJenisKemasan": {
                        "type": "string",
                        "description": "Sesuai kolom formulir BC 2.7 - E.32 Jenis Kemasan. Lihat Referensi Jenis Kemasan"
                    },
                    "merkKemasan": {
                        "type": "string",
                        "description": "Merek kemasan"
                    },
                    "seriKemasan": {
                        "type": "integer",
                        "description": "seri kemasan"
                    }
                },
                "required": [
                    "jumlahKemasan",
                    "kodeJenisKemasan",
                    "merkKemasan",
                    "seriKemasan"
                ]
            }
        },
        "kontainer": {
            "type": "array",
            "description": "data kontainer dalam pengajuan dokumen pabean",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "seriKontainer": {
                            "type": "integer",
                            "description": "seri data kontainer berdasarkan data yang dimasukkan"
                        },
                        "nomorKontainer": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.31 Nomor Peti Kemas"
                        },
                        "kodeUkuranKontainer": {
                            "type": "string",
                            "description": "Referensi Ukuran Kontainer: [20] 20 feet, [40] 40 feet, [45] 45 feet, [60] 60 feet",
                            "enum": [
                                "20",
                                "40",
                                "45",
                                "60"
                            ]
                        },
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
                            "description": "Referensi Tipe Kontainer: [1] General/Dry Cargo, [2] Tunne Type, [3] Open Top Steel, [4] Flat Rack, [5] Reefer/Refregete, [6] Barge Container, [7] Bulk Container, [8] Isotank, [99] Lain-lain ",
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
                        "dependencies": "Wajib mengisi kodeTipeKontainer, kodeUkuranKontainer, nomorKontainer, dan seriKontainer"
                    }
                }
            ]
        },
        "pungutan": {
            "type": "array",
            "description": "data pungutan dalam pengajuan dokumen pabean",
            "items": {
                "type": "object",
                "properties": {
                    "idPungutan": {
                        "type": "string",
                        "description": "ID Pungutan"
                    },
                    "kodeFasilitasTarif": {
                        "type": "string",
                        "description": "Kode fasilitas tarif. Lihat referensi Fasilitas Tarif"
                    },
                    "kodeJenisPungutan": {
                        "type": "string",
                        "description": "Kode jenis pungutan. Lihat referensi Jenis Pungutan"
                    },
                    "nilaiPungutan": {
                        "type": "number",
                        "description": "Nilai pungutan",
                        "maxlength": 18,
                        "multipleOf": 0.01
                    }
                },
                "required": [
                    "idPungutan",
                    "kodeFasilitasTarif",
                    "kodeJenisPungutan",
                    "nilaiPungutan"
                ]
            }
        },
        "barang": {
            "type": "array",
            "description": "detil data barang dalam satu pengajuan dokumen TPB",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "cif": {
                            "type": "number",
                            "description": "Sesuai kolom formulir BC 2.7 - E.39 Nilai CIF",
                            "maxlength": 18,
                            "multipleOf": 0.01
                        },
                        "cifRupiah": {
                            "type": "number",
                            "description": "Harga CIF rupiah",
                            "maxlength": 18,
                            "multipleOf": 0.01
                        },
                        "hargaEkspor": {
                            "type": "number",
                            "description": "Harga ekspor",
                            "maxlength": 24,
                            "multipleOf": 0.0001
                        },
                        "hargaPenyerahan": {
                            "type": "number",
                            "description": "Sesuai kolom formulir BC 2.7 - E.39 Harga Penyerahan",
                            "maxlength": 18,
                            "multipleOf": 0.01
                        },
                        "isiPerKemasan": {
                            "type": "number",
		                    "description": "Isi per kemasan",
		                    "multipleOf": 0.01
		                },
                        "jumlahSatuan": {
                            "type": "number",
                            "description": "Sesuai kolom formulir BC 2.7 - E.38 Jumlah satuan",
                            "maxlength": 24,
                            "multipleOf": 0.0001
                        },
                        "kodeBarang": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.37 Kode barang"
                        },
                        "kodeDokumen": {
                            "type": "string",
                            "description": "Kode Dokumen. Lihat Referensi Dokumen"
                        },
                        "kodeKategoriBarang": {
                            "type": "string",
                            "description": "Lihat Referensi Kategori Barang"
                        },
                        "kodeSatuanBarang": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.38 Jenis Satuan. Lihat Referensi Satuan Barang"
                        },
                        "merk": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.37 Merk"
                        },
                        "netto": {
                            "type": "number",
                            "description": "Berat Bersih dalam kg",
                            "maxlength": 20,
                            "multipleOf": 0.0001
                        },
                        "nilaiBarang": {
                            "type": "number",
                            "description": "Nilai barang",
                            "maxlength": 18,
                            "multipleOf": 0.01
                        },
                        "posTarif": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.30 Pos Tarif/HS"
                        },
                        "seriBarang": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.29 No. Seri barang"
                        },
                        "spesifikasiLain": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7 - E.37 Spesifikasi lain"
                        },
                        "tipe": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7- E.37 Tipe"
                        },
                        "ukuran": {
                            "type": "string",
                            "description": "Sesuai kolom formulir BC 2.7- E.37 Ukuran"
                        },
                        "uraian": {
                            "type": "string",
                            "description": "Uraian barang"
                        },
                        "hargaPerolehan": {
                            "type": "number",
                            "description": "Sesuai kolom formulir BC 2.7 - E.39 Harga Perolehan",
                            "maxlength": 18,
                            "multipleOf": 0.01
                        },
                        "ndpbm": {
                            "type": "number",
                            "description": "Nilai dasar penghitungan bea masuk"
                        },
                        "uangMuka": {
                            "type": "number",
                            "description": "Nilai uang muka"
                        },
                        "nilaiJasa": {
                            "type": "number",
                            "description": "Nilai jasa"
                        },
                        "bahanBaku": {
                            "type": "array",
                            "description": "data bahan baku",
                            "items": [
                                {
                                    "type": "object",
                                    "additionalProperties": false,
                                    "properties": {
                                        "cif": {
                                            "type": "number",
                                            "description": "harga cif",
                                            "maxlength": 18,
                                            "multipleOf": 0.01
                                        },
                                        "cifRupiah": {
                                            "type": "number",
                                            "description": "harga cif rupiah",
                                            "maxlength": 18,
                                            "multipleOf": 0.01
                                        },
                                        "hargaPenyerahan": {
                                            "type": "number",
                                            "description": "harga penyerahan barang",
                                            "maxlength": 18,
                                            "multipleOf": 0.01
                                        },
                                        "hargaPerolehan": {
                                            "type": "number",
                                            "description": "Sesuai kolom formulir BC 2.7 - E.39 Harga Perolehan",
                                            "maxlength": 18,
                                            "multipleOf": 0.01
                                        },
                                        "jumlahSatuan": {
                                            "type": "number",
                                            "description": "Sesuai kolom formulir BC 2.7 - E.38 Jumlah Satuan",
                                            "maxlength": 24,
                                            "multipleOf": 0.0001
                                        },
                                        "kodeSatuanBarang": {
                                            "type": "string",
                                            "description": "Sesuai kolom formulir BC 2.7 - E.38 Jenis Satuan. Lihat Referensi Satuan Barang"
                                        },
                                        "kodeAsalBahanBaku": {
                                            "type": "string",
                                            "format": "integer",
                                            "description": "kode asal bahan baku: [0] Impor atau [1] Lokal",
                                            "enum": [
                                                "0",
                                                "1"
                                            ]
                                        },
                                        "kodeBarang": {
                                            "type": "string",
                                            "description": "Sesuai kolom formulir BC 2.7 - E.37 Kode barang"
                                        },
                                        "kodeDokAsal": {
                                            "type": "string",
                                            "description": "Kode Dokumen Asal. Lihat referensi Dokumen Asal"
                                        },
                                        "kodeKantor": {
                                            "type": "string",
                                            "description": "Sesuai kolom formulir BC 2.7 - A. Kantor Pabean. Lihat Referensi Kantor",
                                            "message": "Format kode sesuai Referensi Kantor"
                                        },
                                        "merkBarang": {
                                            "type": "string",
                                            "description": "Sesuai kolom formulir BC 2.7 - E.37 Merk"
                                        },
                                        "ndpbm": {
                                            "type": "number",
                                            "description": "nilai dasar penghitungan bea masuk"
                                        },
                                        "netto": {
                                            "type": "number",
                                            "description": "Sesuai kolom formulir BC 2.7 - E.38 Berat Bersih (Kg)",
                                            "maxlength": 18,
                                            "multipleOf": 0.0001
                                        },
                                        "nomorAjuDokAsal": {
                                            "type": "string",
                                            "description": "nomor pengajuan dokumen pabean asal 26 digit dengan format 4 digit kode kantor, 2 digit kode dokumen pabean, 6 digit unik perusahaan, 8 digit tanggal pengajuan dengan format YYYYMMDD, 6 digit sequence/nomor urut pengajuan dokumen pabean",
                                            "pattern": "^[A-Za-z0-9]{26}$",
                                            "message": "Sesuaikan format nomor pengajuan dokumen TPB terdiri 26 digit: 4 digit kode kantor, 2 digit kode dokumen pabean, 6 digit unik perusahaan, 8 digit tanggal pengajuan dengan format YYYYMMDD, 6 digit sequence/nomor urut pengajuan dokumen TPB"
                                        },
                                        "nomorDaftarDokAsal": {
                                            "type": "string",
                                            "description": "Nomor daftar dokumen asal"
                                        },
                                        "posTarif": {
                                            "type": "string",
                                            "description": "Sesuai kolom formulir BC 2.7 - E.37 Pos Tarif/HS"
                                        },
                                        "seriBahanBaku": {
                                            "type": "integer",
                                            "description": "seri bahan baku"
                                        },
                                        "seriBarang": {
                                            "type": "integer",
                                            "description": "seri barang"
                                        },
                                        "seriBarangDokAsal": {
                                            "type": "integer",
                                            "description": "Nomor seri dokumen asal"
                                        },
                                        "seriIjin": {
                                            "type": "integer",
                                            "description": "Nomor seri ijin"
                                        },
                                        "spesifikasiLainBarang": {
                                            "type": "string",
                                            "description": "Sesuai kolom formulir BC 2.7 - E.37 Spesifikasi lain"
                                        },
                                        "tanggalDaftarDokAsal": {
                                            "type": "string",
                                            "format": "date",
                                            "description": "Tanggal daftar dokumen asal dengan format YYYY-MM-DD"
                                        },
                                        "tipeBarang": {
                                            "type": "string",
                                            "description": "Tipe barang"
                                        },
                                        "ukuranBarang": {
                                            "type": "string",
                                            "description": "Ukuran barang"
                                        },
                                        "uraianBarang": {
                                            "type": "string",
                                            "description": "Sesuai kolom formulir BC 2.7 - E.30 Uraian Barang"
                                        },
                                        "nilaiJasa": {
                                            "type": "number",
                                            "description": "Nilai jasa",
                                            "maxlength": 24,
                                            "multipleOf": 0.0001
                                        },
                                        "bahanBakuTarif": {
                                            "type": "array",
                                            "items": [
                                                {
                                                    "type": "object",
                                                    "properties": {
                                                        "seriBahanBaku": {
                                                            "type": "integer",
                                                            "description": "Nomor seri bahan baku"
                                                        },
                                                        "kodeJenisPungutan": {
                                                            "type": "string",
                                                            "description": "Kode jenis pungutan. Lihat referensi Jenis Pungutan"
                                                        },
                                                        "kodeAsalBahanBaku": {
                                                            "type": "string",
                                                            "description": "Referensi kode Asal Bahan Baku: [0] Impor, [1] Lokal"
                                                        },
                                                        "kodeFasilitasTarif": {
                                                            "type": "string",
                                                            "description": "Kode fasilitas tarif. Lihat Referensi Fasilitas Tarif"
                                                        },
                                                        "nilaiBayar": {
                                                            "type": "number",
                                                            "description": "Nilai bayar barang tarif"
                                                        },
                                                        "nilaiFasilitas": {
                                                            "type": "number",
                                                            "description": "Dapat diisi apabila Kode Fasilitas Tarif selain dibayar [1]"
                                                        },
                                                        "nilaiSudahDilunasi": {
                                                            "type": "number",
                                                            "description": "Nilai sudah dilunasi",
                                                            "maxlength": 18,
                                                            "multipleOf": 0.01
                                                        },
                                                        "tarif": {
                                                            "type": "number",
                                                            "description": "Tarif BM",
                                                            "maxlength": 18,
                                                            "multipleOf": 0.01
                                                        },
                                                        "tarifFasilitas": {
                                                            "type": "number",
                                                            "description": "Tarif fasilitas",
                                                            "maxlength": 5,
                                                            "multipleOf": 0.01
                                                        },
                                                        "jumlahSatuan": {
                                                            "type": "number",
                                                            "description": "Jumlah satuan barang tarif",
                                                            "maxlength": 24,
                                                            "multipleOf": 0.0001
                                                        },
                                                        "kodeJenisTarif": {
                                                            "type": "string",
                                                            "description": "Referensi Jenis Tarif: [1] Advalorum atau [2] Spesifik",
                                                            "enum": [
                                                                "1",
                                                                "2"
                                                            ]
                                                        },
                                                        "jumlahKemasan": {
                                                            "type": "integer",
                                                            "description": "Jumlah kemasan"
                                                        }
                                                    },
                                                    "required": [
                                                        "jumlahSatuan",
                                                        "kodeAsalBahanBaku",
                                                        "kodeFasilitasTarif",
                                                        "kodeJenisPungutan",
                                                        "kodeJenisTarif",
                                                        "nilaiBayar",
                                                        "nilaiFasilitas",
                                                        "nilaiSudahDilunasi",
                                                        "seriBahanBaku",
                                                        "tarif",
                                                        "tarifFasilitas"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    "required": [
                                        "cif",
                                        "cifRupiah",
                                        "hargaPenyerahan",
                                        "hargaPerolehan",
                                        "jumlahSatuan",
                                        "kodeAsalBahanBaku",
                                        "kodeBarang",
                                        "kodeDokAsal",
                                        "kodeKantor",
                                        "kodeSatuanBarang",
                                        "merkBarang",
                                        "ndpbm",
                                        "netto",
                                        "nilaiJasa",
                                        "posTarif",
                                        "seriBahanBaku",
                                        "seriBarang",
                                        "seriBarangDokAsal",
                                        "seriIjin",
                                        "spesifikasiLainBarang",
                                        "tanggalDaftarDokAsal",
                                        "tipeBarang",
                                        "ukuranBarang",
                                        "uraianBarang",
                                        "bahanBakuTarif"
                                    ]
                                }
                            ]
                        }
                    },
                    "required": [
                        "cif",
                        "cifRupiah",
                        "hargaEkspor",
                        "hargaPenyerahan",
                        "hargaPerolehan",
                        "isiPerKemasan",
                        "jumlahSatuan",
                        "kodeBarang",
                        "merk",
                        "ndpbm",
                        "netto",
                        "nilaiBarang",
                        "nilaiJasa",
                        "posTarif",
                        "seriBarang",
                        "spesifikasiLain",
                        "tipe",
                        "uangMuka",
                        "ukuran",
                        "uraian",
                        "bahanBaku"
                    ]
                }
            ]
        }
    },
    "required": [
        "asalData",
        "asuransi",
        "biayaPengurang",
        "biayaTambahan",
        "bruto",
        "cif",
        "disclaimer",
        "freight",
        "hargaPenyerahan",
        "jabatanTtd",
        "jumlahKontainer",
        "kodeDokumen",
        "kodeJenisTpb",
        "kodeKantor",
        "kodeKantorTujuan",
        "kodeTps",
        "kodeTujuanPengiriman",
        "kodeTujuanTpb",
        "kodeValuta",
        "kotaTtd",
        "namaTtd",
        "ndpbm",
        "netto",
        "nik",
        "nilaiBarang",
        "nilaiJasa",
        "nomorAju",
        "seri",
        "tanggalAju",
        "tanggalTtd",
        "barang",
        "dokumen",
        "entitas",
        "kemasan",
        "pengangkut",
        "pungutan",
        "uangMuka",
        "vd"
    ]
}
}

Contoh JSON BC 2.7

{
   "asalData":"S",
   "asuransi":0.00,
   "bruto":123.4560,
   "cif":1234567,
   "disclaimer":"1",
   "kodeJenisTpb":"1",
   "freight":0,
   "hargaPenyerahan":1234567,
   "jabatanTtd":"GENERAL MANAGER",
   "jumlahKontainer":0,
   "kodeDokumen":"27",
   "kodeKantor":"050900",
   "kodeKantorTujuan":"050900",
   "kodeTps":"",
   "kodeTujuanPengiriman":"1",
   "kodeTujuanTpb":"1",
   "kodeValuta":"IDR",
   "kotaTtd":"JAKARTA",
   "namaTtd":"BAPAK ABCD",
   "ndpbm":0.00,
   "netto":131,
   "nik":"0",
   "nilaiBarang":0.00,
   "nomorAju":"05091234567820221212000001",
   "seri":0,
   "tanggalAju":"2022-12-12",
   "tanggalTtd":"2022-12-12",
   "biayaTambahan":0,
   "biayaPengurang":0,
   "vd":0,
   "uangMuka":0,
   "nilaiJasa":0,
   "entitas":[
      {
         "alamatEntitas":"KAWASAN INDUSTRI",
         "kodeEntitas":"3",
         "kodeJenisIdentitas":"5",
         "namaEntitas":"PT ABCD",
         "nibEntitas":"1234567890123",
         "nomorIdentitas":"012345678901234",
         "nomorIjinEntitas":"1234/KM.1/2022",
         "seriEntitas":1,
         "tanggalIjinEntitas":"2022-01-01"
      },
      {
         "alamatEntitas":"KAWASAN INDUSTRI",
         "kodeEntitas":"7",
         "kodeJenisApi":"2",
         "kodeJenisIdentitas":"5",
         "kodeStatus":"5",
         "namaEntitas":"PT ABCD",
         "nibEntitas":"1234567890123",
         "nomorIdentitas":"012345678901234",
         "nomorIjinEntitas":"1234/KM.1/2022",
         "seriEntitas":2,
         "tanggalIjinEntitas":"2022-01-01"
      },
      {
         "alamatEntitas":"KAWASAN INDUSTRI",
         "kodeEntitas":"8",
         "kodeJenisApi":"2",
         "kodeJenisIdentitas":"5",
         "kodeStatus":"5",
         "namaEntitas":"PT XYZ",
         "nibEntitas":"1234567890456",
         "nomorIdentitas":"012345678905678",
         "nomorIjinEntitas":"KEP-123/WBC.01/2022",
         "seriEntitas":3,
         "tanggalIjinEntitas":"2012-01-01"
      }
   ],
   "dokumen":[
      {
         "kodeDokumen":"380",
         "nomorDokumen":"INV-001/12/2022",
         "seriDokumen":2,
         "tanggalDokumen":"2022-12-02"
      },
      {
         "kodeDokumen":"217",
         "nomorDokumen":"PL-001/2022/12/03",
         "seriDokumen":3,
         "tanggalDokumen":"2022-12-03"
      },
      {
         "kodeDokumen":"640",
         "nomorDokumen":"DO-001/12/2022",
         "seriDokumen":1,
         "tanggalDokumen":"2022-12-01"
      }
   ],
   "pengangkut":[
      {
         "namaPengangkut":"TRUK",
         "nomorPengangkut":"B1234XYZ",
         "seriPengangkut":"1"
      }
   ],
   "kemasan":[
      {
         "jumlahKemasan":7,
         "kodeJenisKemasan":"RK",
         "merkKemasan":"-",
         "seriKemasan":1
      }
   ],
   "kontainer":[

   ],
   "pungutan":[
      {
         "idPungutan":"",
         "kodeFasilitasTarif":"3",
         "kodeJenisPungutan":"PPN",
         "nilaiPungutan":123456.00
      }
   ],
   "barang":[
      {
         "cif":1234567,
         "cifRupiah":0,
         "hargaEkspor":0,
         "hargaPenyerahan":1234567,
         "isiPerKemasan":0,
         "jumlahSatuan":10.00,
         "kodeBarang":"BRG1234",
         "kodeDokumen":"27",
         "kodeSatuanBarang":"PCE",
         "merk":"",
         "netto":123,
         "nilaiBarang":0,
         "posTarif":"85299099",
         "seriBarang":"1",
         "spesifikasiLain":"RETURN",
         "tipe":"",
         "ukuran":"",
         "uraian":"COVER",
         "hargaPerolehan":0,
         "kodeAsalBahanBaku":"0",
         "ndpbm":0,
         "uangMuka":0,
         "nilaiJasa":0,
         "bahanBaku":[
            {
               "cif":1234567,
               "cifRupiah":0,
               "hargaPenyerahan":1234567,
               "hargaPerolehan":0,
               "jumlahSatuan":10.00,
               "kodeSatuanBarang":"PCE",
               "kodeAsalBahanBaku":"0",
               "kodeBarang":"BRG123",
               "kodeDokAsal":"27",
               "kodeKantor":"050900",
               "merkBarang":"",
               "ndpbm":0,
               "netto":131,
               "nomorAjuDokAsal":"05091234567820221212000001",
               "nomorDaftarDokAsal":"123456",
               "posTarif":"85299099",
               "seriBahanBaku":1,
               "seriBarang":1,
               "seriBarangDokAsal":1,
               "seriIjin":0,
               "spesifikasiLainBarang":"RETURN",
               "tanggalDaftarDokAsal":"2022-01-01",
               "tipeBarang":"",
               "ukuranBarang":"",
               "uraianBarang":"COVER",
               "nilaiJasa":0,
               "bahanBakuTarif":[
                  {
                     "seriBahanBaku":1,
                     "kodeJenisPungutan":"BM",
                     "kodeAsalBahanBaku":"0",
                     "kodeFasilitasTarif":"3",
                     "nilaiBayar":12345,
                     "nilaiFasilitas":0.00,
                     "nilaiSudahDilunasi":0.00,
                     "tarif":2.50,
                     "tarifFasilitas":100.00,
                     "jumlahSatuan":0,
                     "kodeJenisTarif":"1",
                     "jumlahKemasan":0
                  },
                  {
                     "seriBahanBaku":1,
                     "kodeJenisPungutan":"PPH",
                     "kodeAsalBahanBaku":"0",
                     "kodeFasilitasTarif":"3",
                     "nilaiBayar":12345,
                     "nilaiFasilitas":0.00,
                     "nilaiSudahDilunasi":0.00,
                     "tarif":2.50,
                     "tarifFasilitas":100.00,
                     "jumlahSatuan":0,
                     "kodeJenisTarif":"1",
                     "jumlahKemasan":0
                  },
                  {
                     "seriBahanBaku":1,
                     "kodeJenisPungutan":"PPN",
                     "kodeAsalBahanBaku":"0",
                     "kodeFasilitasTarif":"3",
                     "nilaiBayar":12345,
                     "nilaiFasilitas":0.00,
                     "nilaiSudahDilunasi":11.00,
                     "tarif":2.50,
                     "tarifFasilitas":100.00,
                     "jumlahSatuan":0,
                     "kodeJenisTarif":"1",
                     "jumlahKemasan":0
                  }
               ]
            }
         ]
      }
   ]
}

Last updated 2 months ago

📄
```