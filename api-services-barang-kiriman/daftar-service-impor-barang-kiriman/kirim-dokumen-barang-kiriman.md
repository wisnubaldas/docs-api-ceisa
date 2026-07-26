# Kirim Dokumen Barang Kiriman

"title": "Schema Kirim Dokumen Barang Kiriman",
      "description": "JSON Schema untuk Kirim Dokumen Pabean v.0.2. Terdiri atas data header dan data barang. Data header merupakan data umum dokumen pabean sedangkan data barang merupakan data detil atas barang pada dokumen pabean",
      "properties": {
          "alamatPenerima": {
            "type": "string",
            "description": "Alamat Penerima Barang"
          },
          "alamatPengirim": {
            "type": "string",
            "description": "Alamat Pengirim Barang"
          },
          "asalData": {
            "type": "string",
            "description": "set value [S]",
            "const": "S",
            "message": "Asal pengiriman data secara Host to Host: S"
          },
          "asuransiTotal": {
            "type": "string",
            "description": "Total Asuransi",
            "message": "Nilai asuransi (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "badanUsahaPenerima": {
            "type": "string",
            "description": "sesuai referensi badan usaha penerima: [1] Badan Usaha; [2] Non Badan Usaha",
            "enum": [
              "1",
              "2"
            ]
          },
          "barang": {
            "type": "array",
            "items": [
              {
                "type": "object",
                "description": "detil data barang dalam satu pengajuan dokumen barang kiriman",
                "properties": {
                  "asuransiBarang": {
                    "type": "string",
                    "description": "nilai asuransi barang (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "cifBarang": {
                    "type": "string",
                    "description": "nilai CIF barang (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "flagBebas": {
                    "type": "string",
                    "description": "flag bebas"
                  },
                  "fobBarang": {
                    "type": "string",
                    "description": "nilai free on board/fob barang (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "freightBarang": {
                    "type": "string",
                    "description": "nilai freight barang (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "hargaSatuan": {
                    "type": "string",
                    "description": "harga satuan (dalam string) maksimal 20 digit dengan dua angka dibelakang koma" 
                  },
                  "hsCode": {
                    "type": "string",
                    "description": "hscode"
                  },
                  "jenisKemasan": {
                    "type": "string",
                    "description": "sesuai referensi jenis kemasan"
                  },
                  "jenisTarifBm": {
                    "type": "string",
                    "description": "sesuai referensi jenis tarif"
                  },
                  "jenisTarifBmad": {
                    "type": "string",
                    "description": "sesuai referensi jenis tarif"
                  },
                  "jenisTarifBmtp": {
                    "type": "string",
                    "description": "sesuai referensi jenis tarif"
                  },
                  "jumlahKemasan": {
                    "type": "string",
                    "description": "jumlah kemasan"
                  },
                  "jumlahSatuan": {
                    "type": "string",
                    "description": "jumlah satuan barang"
                  },
                  "kodeNegaraAsal": {
                    "type": "string",
                    "description": "sesuai referensi negara"
                  },
                  "kodeSatuan": {
                    "type": "string",
                    "description": "sesuai referensi satuan barang"
                  },
                  "nettoBarang": {
                    "type": "string",
                    "description": "nilai netto/berat bersih"
                  },
                  "nilaiBm": {
                    "type": "string",
                    "description": "nilai bea masuk/bm (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "nilaiBmad": {
                    "type": "string",
                    "description": "nilai bmad (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "nilaiBmtp": {
                    "type": "string",
                    "description": "nilai bmtp (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "nilaiCea": {
                    "type": "string",
                    "description": "nilai cukai ea (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "nilaiCmea": {
                    "type": "string",
                    "description": "nilai cukai mmea (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "nilaiCtem": {
                    "type": "string",
                    "description": "nilai cukai tembakau (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "nilaiPph": {
                    "type": "string",
                    "description": "nilai pph (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "nilaiPpn": {
                    "type": "string",
                    "description": "nilai ppn (dalam string) maksimal 20 digit"
                  },
                  "nilaiPpnbm": {
                    "type": "string",
                    "description": "nilai ppnbm (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
                  },
                  "nomorImei1": {
                    "type": "string",
                    "description": "nomor imei1"
                  },
                  "nomorImei2": {
                    "type": "string",
                    "description": "nomor imei2"
                  },
                  "nomorSkep": {
                    "type": "string",
                    "description": "nomor skep"
                  },
                  "seriBarang": {
                    "type": "string",
                    "description": "seri barang"
                  },
                  "tarifBm": {
                    "type": "string",
                    "description": "tarif bea masuk/bm"
                  },
                  "tarifBmad": {
                    "type": "string",
                    "description": "tarif bmad"
                  },
                  "tarifBmtp": {
                    "type": "string",
                    "description": "tarif bmtp"
                  },
                  "tarifCea": {
                    "type": "string",
                    "description": "tarif cukai ea"
                  },
                  "tarifCmea": {
                    "type": "string",
                    "description": "tarif cukai mmea"
                  },
                  "tarifCtem": {
                    "type": "string",
                    "description": "tarif cukai tembakau"
                  },
                  "tarifPph": {
                    "type": "string",
                    "description": "tarif pph"
                  },
                  "tarifPpn": {
                    "type": "string",
                    "description": "tarif ppn"
                  },
                  "tarifPpnbm": {
                    "type": "string",
                    "description": "tarif ppnbm"
                  },
                  "tglSkep": {
                    "type": "string",
                    "description": "tanggal skep dengan format: YYYY-MM-DD dalam string"
                  },
                  "uraianBarang": {
                    "type": "string",
                    "description": "uraian barang"
                  },
                  "kondisiBarang": {
                    "type": "string",
                    "description": "sesuai referensi kondisi barang: [1] Baru; [2] Bekas",
                    "enum": [
                      "1",
                      "2"
                    ]
                  }
                },
                "required": [
                  "asuransiBarang",
                  "cifBarang",
                  "flagBebas",
                  "fobBarang",
                  "freightBarang",
                  "hargaSatuan",
                  "hsCode",
                  "jenisKemasan",
                  "jenisTarifBm",
                  "jenisTarifBmad",
                  "jenisTarifBmtp",
                  "jumlahKemasan",
                  "jumlahSatuan",
                  "kodeNegaraAsal",
                  "kodeSatuan",
                  "nettoBarang",
                  "nilaiBm",
                  "nilaiBmad",
                  "nilaiBmtp",
                  "nilaiCea",
                  "nilaiCmea",
                  "nilaiCtem",
                  "nilaiPph",
                  "nilaiPpn",
                  "nilaiPpnbm",
                  "nomorImei1",
                  "nomorImei2",
                  "nomorSkep",
                  "seriBarang",
                  "tarifBm",
                  "tarifBmad",
                  "tarifBmtp",
                  "tarifCea",
                  "tarifCmea",
                  "tarifCtem",
                  "tarifPph",
                  "tarifPpn",
                  "tarifPpnbm",
                  "tglSkep",
                  "uraianBarang",
                  "kondisiBarang"
                ]
              }
            ]
          },
          "bruto": {
            "type": "string",
            "description": "Berat Kotor (kg)",
            "message": "Nilai bruto (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "cifTotal": {
            "type": "string",
            "description": "Nilai Pabean",
            "message": "Nilai cif (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "fobTotal": {
            "type": "string",
            "description": "Nilai Total Free on Board/FOB",
            "message": "Nilai fob (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "freightTotal": {
            "type": "string",
            "description": "Nilai Total Freight",
            "message": "Nilai freight (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "jenisAju": {
            "type": "string",
            "description": "sesuai referensi jenis aju: [1] CN; [2] PIBK; [3] CN Marketplace E-Commerce; [4] CN Marketplace E-Commerce Khusus Penyelenggara Pos yang ditunjuk; [5] CN PMI; [6] CN HAJI; [15] CN HADIAH PERLOMBAAN / PENGHARGAAN INTERNASIONAL",
            "enum": [
              "1",
              "2",
              "3",
              "4",
              "5",
    		  "6",
    		  "15"
            ]
          },
          "kategoriBarangKiriman": {
            "type": "string",
            "description": "sesuai referensi kategori barang kiriman: [1] perdagangan; [2] non perdagangan",
            "enum": [
              "1",
              "2"
            ]
          },
          "kodeGudang": {
            "type": "string",
            "description": "kode gudang"
          },
          "kodeJenisAngkut": {
            "type": "string",
            "description": "sesuai referensi cara angkut"
          },
          "kodeJenisIdentitasPenerima": {
            "type": "string",
            "description": "sesuai referensi jenis identitas"
          },
          "kodeJenisIdentitasPengirim": {
            "type": "string",
            "description": "sesuai referensi jenis identitas"
          },
          "kodeJenisPibk": {
            "type": "string",
            "description": "sesuai referensi kode jenis pibk"
          },
          "kodeKantor": {
            "type": "string",
            "description": "sesuai referensi kantor"
          },
          "kodeMarketplace": {
            "type": "string",
            "description": "kode marketplace: no_id_ppmse. Atau dikosongkan"
          },
          "kodeNegaraAsal": {
            "type": "string",
            "description": "sesuai referensi negara"
          },
          "kodeNegaraPengirim": {
            "type": "string",
            "description": "sesuai referensi negara"
          },
          "kodeNegaraTujuan": {
            "type": "string",
            "description": "sesuai referensi negara. Default diisi: ID. Atau dikosongkan"
          },
          "kodePelBongkar": {
            "type": "string",
            "description": "sesuai referensi pelabuhan"
          },
          "kodePelMuat": {
            "type": "string",
            "description": "sesuai referensi pelabuhan"
          },
          "kodeValuta": {
            "type": "string",
            "description": "sesuai referensi valuta"
          },
          "namaMarketplace": {
            "type": "string",
            "description": "nama marketplace: nm_ppmse. Atau dikosongkan"
          },
          "namaPenerima": {
            "type": "string",
            "description": "nama penerima"
          },
          "namaPengangkut": {
            "type": "string",
            "description": "nama pengangkut"
          },
          "namaPengirim": {
            "type": "string",
            "description": "nama pengirim"
          },
          "ndpbm": {
            "type": "string",
            "description": "Nilai ndpbm (dalam string) maksimal 20 digit"
          },
          "netto": {
            "type": "string",
            "description": "Nilai netto/berat bersih (dalam string) maksimal 20 digit dua angka dibelakang koma"
          },
          "nomorBarang": {
            "type": "string",
            "description": "nomor barang"
          },
          "nomorBC11": {
            "type": "string",
            "description": "nomor BC 11"
          },
          "nomorFlight": {
            "type": "string",
            "description": "nomor flight"
          },
          "nomorHouse": {
            "type": "string",
            "description": "nomor house"
          },
          "nomorIdentitasPenerima": {
            "type": "string",
            "description": "nomor identitas penerima"
          },
          "nomorIdentitasPengirim": {
            "type": "string",
            "description": "nomor identitas pengirima"
          },
          "nomorInvoice": {
            "type": "string",
            "description": "nomor invoice"
          },
          "nomorKantong": {
            "type": "string",
            "description": "nomor kantong jika ada. dapat diisi '-' apabila kosong"
          },
          "nomorMaster": {
            "type": "string",
            "description": "nomor master"
          },
          "nomorTelpPenerima": {
            "type": "string",
            "description": "nomor telpon penerima"
          },
          "npwpBilling": {
            "type": "string",
            "description": "npwp dari wajib pajak jika memiliki. Dapat diisi '000000000000000' jika tidak memiliki npwp"
          },
          "npwpPemberitahu": {
            "type": "string",
            "description": "identitas npwp sesuai yang didaftarkan dari portal pengguna jasa"
          },
          "posBC11": {
            "type": "string",
            "description": "pos bc 11: 12 digit gabungan pos, subpos, subsubpos"
          },
          "tanggalBC11": {
            "type": "string",
            "description": "tanggal bc 11 dengan format: YYYY-MM-DD dalam string"
          },
          "tanggalHouse": {
            "type": "string",
            "description": "tanggal house dengan format: YYYY-MM-DD dalam string"
          },
          "tanggalInvoice": {
            "type": "string",
            "description": "tanggal invoice dengan format: YYYY-MM-DD dalam string"
          },
          "tanggalMaster": {
            "type": "string",
            "description": "tanggal master dengan format: YYYY-MM-DD dalam string"
          },
          "totalBm": {
            "type": "string",
            "description": "total bea masuk/bm (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "totalBmad": {
            "type": "string",
            "description": "total bmad (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "totalBmtp": {
            "type": "string",
            "description": "total bmtp (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "totalCea": {
            "type": "string",
            "description": "total cukai EA (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "totalCmea": {
            "type": "string",
            "description": "total cukai mmea (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "totalCtem": {
            "type": "string",
            "description": "total cukai tembakau (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "totalPph": {
            "type": "string",
            "description": "total pph (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "totalPpn": {
            "type": "string",
            "description": "total ppn (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "totalPpnbm": {
            "type": "string",
            "description": "total ppnbm (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          },
          "totalTagihan": {
            "type": "string",
            "description": "total tagihan (dalam string) maksimal 20 digit dengan dua angka dibelakang koma"
          }
        },
        "required": [
          "alamatPenerima",
          "alamatPengirim",
          "asalData",
          "asuransiTotal",
          "badanUsahaPenerima",
          "barang",
          "bruto",
          "cifTotal",
          "fobTotal",
          "freightTotal",
          "jenisAju",
          "kategoriBarangKiriman",
          "kodeGudang",
          "kodeJenisAngkut",
          "kodeJenisIdentitasPenerima",
          "kodeJenisIdentitasPengirim",
          "kodeJenisPibk",
          "kodeKantor",
          "kodeMarketplace",
          "kodeNegaraAsal",
          "kodeNegaraPengirim",
          "kodeNegaraTujuan",
          "kodePelBongkar",
          "kodePelMuat",
          "kodeValuta",
          "namaMarketplace",
          "namaPenerima",
          "namaPengangkut",
          "namaPengirim",
          "ndpbm",
          "netto",
          "nomorBarang",
          "nomorBC11",
          "nomorFlight",
          "nomorHouse",
          "nomorIdentitasPenerima",
          "nomorIdentitasPengirim",
          "nomorInvoice",
          "nomorKantong",
          "nomorMaster",
          "nomorTelpPenerima",
          "npwpBilling",
          "npwpPemberitahu",
          "posBC11",
          "tanggalBC11",
          "tanggalHouse",
          "tanggalInvoice",
          "tanggalMaster",
          "totalBm",
          "totalBmad",
          "totalBmtp",
          "totalCea",
          "totalCmea",
          "totalCtem",
          "totalPph",
          "totalPpn",
          "totalPpnbm",
          "totalTagihan"
        ]
    }

```json
[
  {
    "alamatPenerima": "KEBON MANGGIS III NO.9 RT 10 RW02",
    "alamatPengirim": "NO.1677A, HUMIN ROAD, ZHUANQIAO TO",
    "asalData": "S",
    "asuransiTotal": "0.40",
    "badanUsahaPenerima": "2",
    "barang": [
      {
        "asuransiBarang": "0.40",
        "cifBarang": "50.40",
        "flagBebas": "-",
        "fobBarang": "50.00",
        "freightBarang": "0.00",
        "hargaSatuan": "50.00",
        "hsCode": "32100091",
        "jenisKemasan": "PK",
        "jenisTarifBm": "1",
        "jenisTarifBmad": "1",
        "jenisTarifBmtp": "1",
        "jumlahKemasan": "0",
        "jumlahSatuan": "1",
        "kodeNegaraAsal": "CN",
        "kodeSatuan": "PCE",
        "nettoBarang": "0",
        "nilaiBm": "59096.52",
        "nilaiBmad": "0.00",
        "nilaiBmtp": "0.00",
        "nilaiCea": "0.00",
        "nilaiCmea": "0.00",
        "nilaiCtem": "0.00",
        "nilaiPph": "0.00",
        "nilaiPpn": "93175",
        "nilaiPpnbm": "0.00",
        "nomorImei1": "-",
        "nomorImei2": "-",
        "nomorSkep": "-",
        "seriBarang": "1",
        "tarifBm": "7.50",
        "tarifBmad": "0.00",
        "tarifBmtp": "0.00",
        "tarifCea": "0.00",
        "tarifCmea": "0.00",
        "tarifCtem": "0.00",
        "tarifPph": "0.00",
        "tarifPpn": "11.00",
        "tarifPpnbm": "0.00",
        "tglSkep": "-",
        "uraianBarang": "(INCOTERM: CFR) WATER SOLUBLE PIGMENT",
        "kondisiBarang": "1"
      }
    ],
    "bruto": "1.50",
    "cifTotal": "50.40",
    "fobTotal": "50.00",
    "freightTotal": "0.00",
    "jenisAju": "1",
    "kategoriBarangKiriman": "1",
    "kodeGudang": "IKC1",
    "kodeJenisAngkut": "4",
    "kodeJenisIdentitasPenerima": "5",
    "kodeJenisIdentitasPengirim": "2",
    "kodeJenisPibk": "2",
    "kodeKantor": "009000",
    "kodeMarketplace": "",
    "kodeNegaraAsal": "CN",
    "kodeNegaraPengirim": "CN",
    "kodeNegaraTujuan": "ID",
    "kodePelBongkar": "IDCGK",
    "kodePelMuat": "CNSHA",
    "kodeValuta": "USD",
    "namaMarketplace": "",
    "namaPenerima": "MIL MILAH",
    "namaPengangkut": "SF AIRLINE",
    "namaPengirim": "SHANGHAI YIQING INDUSTRIAL LIMITED",
    "ndpbm": "15634",
    "netto": "0.00",
    "nomorBarang": "CAN04032024-5",
    "nomorBC11": "01234",
    "nomorFlight": "SF019",
    "nomorHouse": "CAN04032024-5",
    "nomorIdentitasPenerima": "010016202093000",
    "nomorIdentitasPengirim": "C0170938",
    "nomorInvoice": "",
    "nomorKantong": "-",
    "nomorMaster": "CAN01032024-5",
    "nomorTelpPenerima": "096431507018000",
    "npwpBilling": "000000000000000",
    "npwpPemberitahu": "123456789012345",
    "posBC11": "000100050000",
    "tanggalBC11": "2024-02-28",
    "tanggalHouse": "2024-02-28",
    "tanggalInvoice": "",
    "tanggalMaster": "2024-02-28",
    "totalBm": "60000.00",
    "totalBmad": "0.00",
    "totalBmtp": "0.00",
    "totalCea": "0.00",
    "totalCmea": "0.00",
    "totalCtem": "0.00",
    "totalPph": "0.00",
    "totalPpn": "93175.00",
    "totalPpnbm": "0.00",
    "totalTagihan": "153175.00"
  }
]

```