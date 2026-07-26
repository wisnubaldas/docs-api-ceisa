# Drafting Dokumen

Endpoint digunakan untuk melakukan drafting dokumen Manifes Pengangkut ke Ceisa 4.0

`POST` `{API_URL}/v1/temp`

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Beacukai-API-Key` | `string` | Beacukai API Key (Development/Production) |
| `Authentication` | `string` | Token yang didapatkan hasil autentikasi |

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `ManifesHeaders` | `string` | JSONSchema Draft Manifes [RKSP](web/20250714151403/https://ceisa40.gitbook.io/pia-ceisa40/api-service-manifes/drafting-dokumen#json-schema-drafting-dokumen-rksp.md) atau [Inward](web/20250714151403/https://ceisa40.gitbook.io/pia-ceisa40/api-service-manifes/drafting-dokumen#json-schema-drafting-dokumen-inward.md) |

```json
{
    "status": "OK",
    "message": "Sukses, Data Berhasil Ditambahkan"
}

JSON Schema Drafting Dokumen RKSP

data :
 {
    "Declaration":{
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "title": "Schema Kirim Dokumen Manifes BC 1.0/ BC 1.1 untuk pengangkut atau RKSP",
        "description" : "JSON Schema untuk Kirim Dokumen Pengangkut, terdiri data header dan data pengangkut.",
        "properties": {
            "kodeKantor": {
                "type": "string",
                "minlength": 6,
                "maxlength": 6,
                "description": "Kode Kantor beacukai tujuan kirim dokumen manifes, LIHAT REFERENSI KODE KANTOR PABEAN"
            },
            "nomorAju": {
                "type": "string",
                "description": "nomor pengajuan dokumen pabean 26 digit dengan format 4 digit kode kantor, 2 digit kode dokumen pabean, 6 digit unik perusahaan, 8 digit tanggal pengajuan dengan format YYYYMMDD, 6 digit sequence/nomor urut pengajuan dokumen manifest",
                "pattern": "^[A-Za-z0-9]{26}$",
                "message": "Sesuaikan format nomor pengajuan dokumen impor terdiri 26 digit: 4 digit kode kantor, 2 digit kode dokumen pabean, 6 digit unik perusahaan, 8 digit tanggal pengajuan dengan format YYYYMMDD, 6 digit sequence/nomor urut pengajuan dokumen manifest"
            },
            "nomorVoyage": {
                "type": "string",
                "description": "nomor voyage"
            },
            "tanggalBerangkat": {
                "type": "string",
                "format": "date",
                "customDateTimePattern": "yyyy-MM-dd HH:mm:ss",
                "description": "Untuk outward, tanggal jam keberangkatan sarkut"
            },
            "tanggalDaftar": {
                "type": "string",
                "format": "date",
                "customDateTimePattern": "yyyy-MM-dd",
                "description": "Respon tanggal BC11 dari sistem beacukai"
            },
            "tanggalTiba": {
                "type": "string",
                "format": "date",
                "customDateTimePattern": "yyyy-MM-dd HH:mm:ss",
                "description": "Untuk rksp dam inward, ETA tanggal jam kedatangan sarkut"
            },
            "tanggalVoyage": {
                "type": "string",
                "format": "date",
                "customDateTimePattern": "yyyy-MM-dd HH:mm:ss",
                "description": ""
            },
            "modePengangkut": {
                "type": "string",
                "maxlength": 1,
                "description": "lihat kode moda pengangkut darat laut udara"
            },
            "namaSaranaPengangkut": {
                "type": "string",
                "maxlength": 30,
                "description": "Nama kapal/pesawat/truck pengangkut wajib manifes"
            },
            "npwpShipper": {
                "type": "string",
                "maxlength": 16,
                "description": "NPWP perusahaan/agen pengangkut yang mengirimkan data manifes"
            },
            "namaShipper": {
                "type": "string",
                "maxlength": 30,
                "description": "Nama perusahaan pengangkut/agen pengangkut yang mengajukan manifes"
            },
            "alamatShipper": {
                "type": "string",
                "maxlength": 100,
                "description": "Alamat perusahaan pengangkut/agen pengangkut yang mengajukan manifes"
            },
            "nahkoda": {
                "type": "string",
                "maxlength": 30,
                "description": "Nahkoda/pilot/supir pembawa sarana pengangkut"
            },
            "kodeNegara": {
                "type": "string",
                "maxlength": 2,
                "description": "Bendara kode negara kapal"
            },
            "jumlahPos": {
                "type": "integer"
            },
            "jumlahContainer": {
                "type": "integer"
            },
            "jumlahKemasanCurah": {
                "type": "integer"
            },
            "berat": {
                "type": "number", 
                "multipleOf": 0.01 
            },
            "volume": {
                "type": "number", 
                "multipleOf": 0.01
            },
            "asalData": {
                "type": "string",
                "description": "Host to host default asal data S"
            },            
            "idJenisManifes": {
                "type": "string",
                "format": "integer",
                "description": "lihat referensi jenis manifes"
            },
            "kodePelabuhanAsal": {
                "type": "string",
                "minlength": 5,
                "maxlength": 5,
                "description": "Kode pelabuan asal sesuai unlocode"
            },
            "kodePelabuhanTransit": {
                "type": "string",
                "minlength": 5,
                "maxlength": 5,
                "description": "Kode pelabuan rute transit sebelumnya sesuai unlocode"
            },
            "kodePelabuhanBongkar": {
                "type": "string",
                "minlength": 5,
                "maxlength": 5,
                "description": "Kode pelabuan rute bongkar sesuai unlocode"
            },
            "kade": {
                "type": "string",
                "maxlength": 6,
                "description": "kode dermaga"
            },
            "nomorRegistrasi": {
                "type": "string",
                "maxlength": 11,
                "description": "nomor register/platnomor"
            },
            "callSign": {
                "type": "string",
                "maxlength": 11,
                "description": "Call sign"
            },
            "imoNumber": {
                "type": "string",
                "maxlength": 10,
                "description": "imo number"
            },
            "mmsi": {
                "type": "string",
                "maxlength": 20,
                "description": "mmsi number untuk kapal laut"
            },
            "waktuAktualKedatangan": {
                "type": "string",
                "customDateTimePattern": "yyyy-MM-dd HH:mm:ss",
                "description": "Tanggal jam aktual kedatangan sarkut (KHUSUS INWARD BC11 wajib diisi)"

            },
            "waktuPembongkaran": {
                "type": "string",
                "customDateTimePattern": "yyyy-MM-dd HH:mm:ss",
                "description": "Tanggal jam aktual kedatangan sarkut (KHUSUS INWARD BC11 wajib diisi)"

            },
            "waktuPemuatan": {
                "type": "string",
                "customDateTimePattern": "yyyy-MM-dd HH:mm:ss",
                "description": "Tanggal jam aktual kedatangan sarkut (KHUSUS INWARD BC11 wajib diisi)"
            },
            "flwaktuTempuh": {
                "type": "string",
                "maxlength": 2,
                "description": "waktu tempuh lebih dari 24(laut),8(udara)jam/kurang dari 24(laut),8(udara)jam"

            },
            "dataKelompokPos": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/DataKelompokPos"
                }
            },
            "petikemas": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Petikemas"
                }
            },
            "bl": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Bl"
                }
            },
            "lampirans": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Lampiran"
                }
            }
        },
        "required": [
            "alamatShipper",
            "asalData",
            "berat",
            "callSign",
            "dataKelompokPos",
            "flwaktuTempuh",
            "idJenisManifes",
            "imoNumber",
            "jumlahContainer",
            "jumlahKemasanCurah",
            "jumlahPos",
            "kade",
            "kodeKantor",
            "kodeNegara",
            "kodePelabuhanAsal",
            "kodePelabuhanBongkar",
            "kodePelabuhanTransit",
            "lampirans",
            "mmsi",
            "modePengangkut",
            "nahkoda",
            "namaSaranaPengangkut",
            "namaShipper",
            "nomorAju",
            "nomorRegistrasi",
            "nomorVoyage",
            "npwpShipper",
            "tanggalBerangkat",
            "tanggalTiba",
            "tanggalVoyage",
            "volume"
        ]
    },
    "Bl": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "kodeKelompokPos": {
                "type": "string",
                "minlength": 2,
                "maxlength": 2,
                "description": "Kode jenis kelompok pos BL manifes"
            },
            "nomorPos": {
                "type": "string",
                "minlength": 12,
                "maxlength": 12,
                "description": "Nomor urut bl dalam 12 digit pos manifes"

            },
            "nomorBl": {
                "type": "string",
                "maxlength": 30,
                "description": "Nomor direct/master BL/AWB"
            },
            "tanggalBl": {
                "type": "string",
                "customDateTimePattern": "yyyy-MM-dd"
            },
            "nomorHostBl": {
                "type": "string",
                "maxlength": 30,
                "description": "Nomor  HBL/AWB"
            },
            "tanggalHostBl": {
                "type": "string",
                "customDateTimePattern": "yyyy-MM-dd"
            },
            "marking": {
                "type": "string",
                "maxlength": 500,
                "description": "Keterangan / marking dalam dokumen BL"
            },

            "npwpPengirim": {
                "type": "string",
                "maxlength": 16,
                "description": "NPWP/identitas shipper atau pengirim jika ada"
            },
            "namaPengirim": {
                "type": "string",
                "maxlength": 200
            },
            "alamatPengirim": {
                "type": "string",
                "maxlength": 255
            },

            "npwpPenerima": {
                "type": "string",
                "maxlength": 16,
                "description": "NPWP/identitas shipper atau penerima jika ada"
            },
            "namaPenerima": {
                "type": "string",
                "maxlength": 200
            },
            "alamatPenerima": {
                "type": "string",
                "maxlength": 255
            },

            "npwpNotify": {
                "type": "string",
                "maxlength": 16,
                "description": "NPWP/identitas shipper atau notify jika ada"
            },
            "namaNotify": {
                "type": "string",
                "maxlength": 200
            },
            "alamatNotify": {
                "type": "string",
                "maxlength": 255
            },

            "berat": {
                "type": "number", 
                "multipleOf": 0.01 
            },
            "dimensi": {
                "type": "number", 
                "multipleOf": 0.01 
            },
            "jumlahContainer": {
                "type": "integer"
            },
            "jenisKemasan": {
                "type": "string",
                "maxlength": 2,
                "description": "kode jenis kemasan"
            },
            "jumlahKemasan": {
                "type": "integer"
            },
            "motherVessel": {
                "type": "string",
                "maxlength": 50,
                "description": "nama sarana pengangkut sebelumnya sesuai BL dikeluarkan jika ada"
            },
            "kodePelabuhanAsal": {
                "type": "string",
                "minlength": 5,
                "maxlength": 5,
                "description": "Kode pelabuan lokasi asal barang sesuai unlocode sesuai BL"
            },
            "kodePelabuhanBongkar": {
                "type": "string",
                "minlength": 5,
                "maxlength": 5,
                "description": "Kode pelabuan lokasi bongkar barang sesuai unlocode sesuai BL"
            },
            "kodePelabuhanTransit": {
                "type": "string",
                "minlength": 5,
                "maxlength": 5,
                "description": "Kode pelabuan lokasi transit barang sesuai unlocode sesuai BL"
            },
            "kodePelabuhanAkhir": {
                "type": "string",
                "minlength": 5,
                "maxlength": 5,
                "description": "Kode pelabuan lokasi tujuan akhir barang sesuai unlocode sesuai BL"
            },
            "jumlahContainerTertinggal": {
                "type": "integer"
            },
            "jumlahKemasanTertinggal": {
                "type": "integer"
            },          

            "flagKonsolidasi": {
                "type": "string",
                "maxlength": 1
            },
            "flagParsial": {
                "type": "string",
                "maxlength": 1
            },
            "flagPartof": {
                "type": "string",
                "maxlength": 1
            },
            "blHs": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/BlHs"
                }
            },
            "blPetikemasTerangkut": {
                "anyOf": [
                    {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/Petikemas"
                        }
                    },
                    {
                        "type": "null"
                    }
                ]
            },
            "blPetikemasTertinggals": {
                "anyOf": [
                    {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/Petikemas"
                        }
                    },
                    {
                        "type": "null"
                    }
                ]
            },
            "blDokumen": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/BlDokuman"
                }
            }
        },
        "required": [
            "alamatNotify",
            "alamatPenerima",
            "alamatPengirim",
            "berat",
            "blHs",
            "dimensi",
            "jenisKemasan",
            "jumlahContainer",
            "jumlahContainerTertinggal",
            "jumlahKemasan",
            "jumlahKemasanTertinggal",
            "kodeKelompokPos",
            "kodePelabuhanAkhir",
            "kodePelabuhanAsal",
            "kodePelabuhanBongkar",
            "kodePelabuhanTransit",
            "namaNotify",
            "namaPenerima",
            "namaPengirim",
            "nomorBl",
            "nomorHostBl",
            "nomorPos",
            "npwpNotify",
            "npwpPenerima",
            "npwpPengirim",
            "tanggalBl",
            "tanggalHostBl"
        ],
        "title": "Bl"
    },
    "BlDokuman": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "kodeDokumenAsal": {
                "type": "string",
                "minlength": 3,
                "maxlength": 3,
                "description": "Kode dokumen BC lampiran BL"
            },
            "tanggalDokumenAsal": {
                "type": "string",
                "customDateTimePattern": "yyyy-MM-dd"
            },
            "nomorDokumenAsal": {
                "type": "string",
                "maxlength": 6,
                "description": "nomor dokumen BC lampiran BL"
            },
            "kodeKantor": {
                "type": "string",
                "maxlength": 6,
                "description": "kode kantor BC tempat dokumen diterbitkan"
            }
        },
        "required": [
            "kodeKantor",
            "kodeDokumenAsal",
            "nomorDokumenAsal",
            "tanggalDokumenAsal"
        ],
        "title": "BlDokuman"
    },
    "BlHs": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "seriHs": {
                "type": "integer",
                "description": "nomor urut barang default 0 jika tidak ada seri"
            },
            "kodeHs": {
                "type": "string",
                "minlength": 4,
                "maxlength": 8,
                "description": "HS Code minimal 4 digit"
            },
            "uraianBarang": {
                "type": "string",
                "maxlength": 1000,
                "description": "Uraian barang yang tercantum dalam BL"
            }
        },
        "required": [
            "seriHs",
            "kodeHs",
            "uraianBarang"
        ],
        "title": "BlHs"
    },
    "Petikemas": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "seriContainer": {
                "type": "integer",
                "description": "nomor urut container default 0 jika tidak ada seri"
            },
            "nomorContainer": {
                "type": "string",
                "minlength": 11,
                "maxlength": 11,
                "description": "nomor container sesuai dengan standar penomoran container"
            },
            "jenisMuat": {
                "type": "string",
                "maxlength": 1,
                "description": "jenis muat lihat referensi"
            },
            "ukuranContainer": {
                "type": "string",
                "maxlength": 2,
                "description": "ukuran kontainer lihat referensi"
            },
            "status": {
                "type": "string",
                "maxlength": 2,
                "description": "status terangkut tertinggal"
            },
            "nomorSegel": {
                "type": "string"
            },
            "typeContainer": {
                "type": "string",
                "maxlength": 2,
                "description": "tipe kontainer lihat referensi"
            },

            "nomorPolisi": {
                "type": "string"
            },
            "driver": {
                "type": "string"
            },
            "flB3": {
                "type": "string",
                "maxlength": 2,
                "description": "tipe kontainer lihat referensi"
            },
            "jenisContainer": {
                "type": "string",
                "maxlength": 2,
                "description": "jenis kontainer lihat referensi"
            }
        },
        "required": [            
            "jenisContainer",
            "jenisMuat",
            "nomorContainer",
            "seriContainer",
            "typeContainer",
            "ukuranContainer"
        ],
        "title": "Petikemas"
    },
    "DataKelompokPos": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "kodeKelompokPos": {
                "type": "string"
            },
            "jumlah": {
                "type": "integer"
            }
        },
        "required": [
            "jumlah",
            "kodeKelompokPos"
        ],
        "title": "DataKelompokPos"
    },
    "Lampiran": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "kodeDokLampiran": {
                "type": "string"
            },
            "namaLampiran": {
                "type": "string"
            },
            "nomorDokumen": {
                "type": "string"
            },
            "seriDokumen": {
                "type": "integer"
            },
            "urlDokumen": {
                "type": "string",
                "format": "uri",
                "qt-uri-protocols": [
                    "https"
                ]
            }
        },
        "required": [
            "kodeDokLampiran",
            "namaLampiran",
            "nomorDokumen",
            "seriDokumen",
            "urlDokumen"
        ],
        "title": "Lampiran"
    }
}

JSON Schema Drafting Dokumen Inward

data :
{
    "Declaration": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "title": "Schema Kirim Dokumen Inward Manifest",
        "properties": {
            "namaSaranaPengangkut": {
                "type": "string",
                "maxlength": 30,
                "description": "Nama kapal/pesawat/truck pengangkut wajib manifes"
            },
            "nahkoda": {
                "type": "string",
                "description": "Nama Nakhoda"
            },
            "nomorVoyage": {
                "type": "string",
                "description": "nomor voyage"
            },
            "callSign": {
                "type": "string",
                "maxlength": 11,
                "description": "Call sign"
            },
            "flwaktuTempuh": {
                "type": "string",
                "maxlength": 2,
                "description": "waktu tempuh lebih dari 24(laut),8(udara)jam/kurang dari 24(laut),8(udara)jam"
            },
            "kade": {
                "type": "string",
                "maxlength": 6,
                "description": "kode dermaga"
            },
            "tanggalTiba": {
                "type": "string",
                "format": "date",
                "customDateTimePattern": "yyyy-MM-dd HH:mm:ss",
                "description": "Untuk rksp dam inward, ETA tanggal jam kedatangan sarkut"
            },
            "imoNumber": {
                "type": "string",
                "maxlength": 10,
                "description": "imo number"
            },
            "mmsi": {
                "type": "string",
                "maxlength": 20,
                "description": "mmsi number untuk kapal laut"
            },
            "waktuAktualKedatangan": {
                "type": "string",
                "customDateTimePattern": "yyyy-MM-dd HH:mm:ss",
                "description": "Tanggal jam aktual kedatangan sarkut (KHUSUS INWARD BC11 wajib diisi)"
            },
            "waktuPembongkaran": {
                "type": "string",
                "customDateTimePattern": "yyyy-MM-dd HH:mm:ss",
                "description": "Tanggal jam aktual kedatangan sarkut (KHUSUS INWARD BC11 wajib diisi)"

            },
            "waktuPemuatan": {
                "type": "string",
                "customDateTimePattern": "yyyy-MM-dd HH:mm:ss",
                "description": "Tanggal jam aktual kedatangan sarkut (KHUSUS INWARD BC11 wajib diisi)"
            },
            "kodePelabuhanAsal": {
                "type": "string",
                "minlength": 5,
                "maxlength": 5,
                "description": "Kode pelabuan asal sesuai unlocode"
            },
            "kodePelabuhanBongkar": {
                "type": "string",
                "minlength": 5,
                "maxlength": 5,
                "description": "Kode pelabuan rute bongkar sesuai unlocode"
            },
            "kodePelabuhanTransit": {
                "type": "string",
                "minlength": 5,
                "maxlength": 5,
                "description": "Kode pelabuan rute transit sebelumnya sesuai unlocode"
            },
            "idJenisManifes": {
                "type": "string",
                "format": "integer",
                "description": "lihat referensi jenis manifes"
            },
            "nomorAju": {
                "type": "string",
                "description": "nomor pengajuan dokumen pabean 26 digit dengan format 4 digit kode kantor, 2 digit kode dokumen pabean, 6 digit unik perusahaan, 8 digit tanggal pengajuan dengan format YYYYMMDD, 6 digit sequence/nomor urut pengajuan dokumen manifest",
                "pattern": "^[A-Za-z0-9]{26}$",
                "message": "Sesuaikan format nomor pengajuan dokumen impor terdiri 26 digit: 4 digit kode kantor, 2 digit kode dokumen pabean, 6 digit unik perusahaan, 8 digit tanggal pengajuan dengan format YYYYMMDD, 6 digit sequence/nomor urut pengajuan dokumen manifest"
            },
            "kodeKantor": {
                "type": "string",
                "minlength": 6,
                "maxlength": 6,
                "description": "Kode Kantor beacukai tujuan kirim dokumen manifes, LIHAT REFERENSI KODE KANTOR PABEAN"
            },
            "kodeNegara": {
                "type": "string",
                "maxlength": 2,
                "description": "Bendara kode negara kapal"
            },
            "modePengangkut": {
                "type": "string",
                "maxlength": 1,
                "description": "lihat kode moda pengangkut darat laut udara"
            },
            "npwpShipper": {
                "type": "string",
                "maxlength": 16,
                "description": "NPWP perusahaan/agen pengangkut yang mengirimkan data manifes"
            },
            "namaShipper": {
                "type": "string",
                "maxlength": 30,
                "description": "Nama perusahaan pengangkut/agen pengangkut yang mengajukan manifes"
            },
            "alamatShipper": {
                "type": "string",
                "maxlength": 100,
                "description": "Alamat perusahaan pengangkut/agen pengangkut yang mengajukan manifes"
            }
        },
        "required": [
            "alamatShipper",
            "callSign",
            "flwaktuTempuh",
            "idJenisManifes",
            "imoNumber",
            "kade",
            "kodeKantor",
            "kodeNegara",
            "kodePelabuhanAsal",
            "kodePelabuhanBongkar",
            "kodePelabuhanTransit",
            "mmsi",
            "modePengangkut",
            "nahkoda",
            "namaSaranaPengangkut",
            "namaShipper",
            "nomorAju",
            "nomorVoyage",
            "npwpShipper",
            "tanggalTiba",
            "waktuAktualKedatangan",
            "waktuPembongkaran",
            "waktuPemuatan"
        ]
    }
}

Last updated 11 months ago
```