# Kirim Dokumen

digunakan untuk melakukan pengiriman dokumen pengangkut ke Ceisa 4.0

`POST` `{API_URL}/v1/temp/pengangkut/kirim-data`

### Headers

| Field | Type | Description |
| --- | --- | --- |
| `Beacukai-API-Key` | `string` | Beacukai API Key (Development/Production) |
| `Authentication` | `string` | Token yang didapatkan hasil autentikasi |

### Request Body

| Field | Type | Description |
| --- | --- | --- |
| `nomor aju` | `string` | JSONSchema Manifes nomor aju |

```json
{
    "status": "OK",
    "message": "Data berhasil dipindahkan",
    "data": {
        "jenisProses": jenisProses,
        "idHeader": "idHeader",
        "kodeKantor": "kodeKantor",
        "nomorDaftar": "nomorDaftar",
        "tanggalDaftar": "tanggalDaftar",
        "tanggalTiba": "dd-mm-yyyy HH:mm:ss",
        "tanggalBerangkat": tanggalBerangkat,
        "modePengangkut": "modePengangkut",
        "namaSaranaPengangkut": "namaSaranaPengangkut",
        "npwpShipper": "npwpShipper",
        "namaShipper": "namaShipper",
        "alamatShipper": "alamatShipper",
        "nahkoda": "nahkoda",
        "nomorVoyage": "nomorVoyage",
        "tanggalVoyage": "dd-mm-yyyy",
        "kodeNegara": "kodeNegara",
        "jumlahPos": jumlahPos,
        "jumlahContainer": jumlahContainer,
        "jumlahKemasanCurah": jumlahKemasanCurah,
        "berat": berat,
        "volume": volume,
        "asalData": "asalData",
        "nomorAju": "nomorAju",
        "idJenisManifes": "idJenisManifes",
        "kodePelabuhanAsal": "kodePelabuhanAsal",
        "kodePelabuhanTransit": "kodePelabuhanTransit",
        "kodePelabuhanBongkar": "kodePelabuhanBongkar",
        "jenisKemasan": jenisKemasan,
        "nomorEdi": nomorEdi,
        "kade": "kade",
        "nomorRegistrasi": "nomorRegistrasi",
        "flagBatal": flagBatal,
        "nipRekam": nipRekam,
        "waktuRekam": "dd-mm-yyyy HH:mm:ss",
        "callSign": "callSign",
        "imoNumber": "imoNumber",
        "mmsi": "mmsi",
        "versiModul": versiModul,
        "waktuAktualKedatangan": waktuAktualKedatangan,
        "waktuPembongkaran": waktuPembongkaran,
        "waktuRekamAktual": waktuRekamAktual,
        "waktuPemuatan": waktuPemuatan,
        "waktuFinalManifes": waktuFinalManifes,
        "idModul": idModul,
        "idPengirim": idPengirim,
        "flwaktuTempuh": "flwaktuTempuh",
        "flRekonRkspPerbaikan": flRekonRkspPerbaikan,
        "statusKeterlambatan": "statusKeterlambatan",
        "waktuSubmit": "dd-mm-yyyy tt:mm:ss",
        "ttManifesBLList": ttManifesBLList,
        "dataKelompokPos": dataKelompokPos,
        "idBL": idBL,
        "idRedress": idRedress,
        "nomorPolisi": nomorPolisi,
        "ttManifesLampirans": ttManifesLampirans,
        "petikemas": petikemas,
        "info": info,
        "flLama": flLama    
    }
} 

Last updated 9 months ago

📄
```