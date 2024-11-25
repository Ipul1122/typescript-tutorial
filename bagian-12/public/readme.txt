mengenai bagian 12 yaitu public, private, and readonly


-- STUDI KASUS --
workflow & tsconfig

cara struktur file dengan rapih 
1. buat folder baru folder
2. buat folder src
1.1 folder public digunakan untuk menyimpan file html,css,js dan menampilkan ui
2.1 folder src untuk ts, digunakan untuk memprogram data
3. buka terminal di vscode
4. ketik tsc src/namaFile.tsc
4.1 mengarahkan tsc ke file src
5. ketik tsc --init
5.1 membuat file tsconfig.json
5.2 biarkan tsconfig.json berada di luar folder public dan src
6 buka tsconfig.json cari "rootDir"
6.1 ubah "rootDir" menjadi "rootDir": "./src",   
6.2 mengarahkan rootDir ke file src
7. cari outDir
7.1 ubah outDir menjadi "outDir": "./public",
7.2 mengarahkan outDir ke file public
8. ketika kalian ingin membuat file ts diluar folder public, src dan tidak mengikuti ke folder public dan src
8.1 buka tsconfig, scroll ke paling bawah
8.2 pada bagian tutup kurawal } }
8.3 tambahkan }, "include": ["src", "public/script.js"] }
8.4 mengarahkan tsconfig untuk mengambil file ts dari folder src saja
8.5 jika membuat file diluar folder public dan src tidak mengarahkan ke folder public atau lainnya. hanya bagian tertentu
9 untuk memulai ketik tsc di terminal
9.1 file js akan mengikuti code file ts saat proses code

-- STUDI KASUS -- 
Apa itu readonly, private, public?

readonly = Modifier yang membuat properti hanya dapat diatur nilainya sekali (biasanya saat deklarasi atau di dalam constructor)
private =  Modifier yang membatasi akses hanya di dalam class tempat properti atau metode tersebut didefinisikan.
public = Modifier yang memungkinkan akses dari mana saja, baik dari dalam maupun luar

studi kasus melanjutkan bagian 11 pada pembuatan class Invoice, hanya membedekan cara pemakaian dalam constructor




-- REFERENSI -- 
YOUTUBE : https://youtu.be/aYmnwDlPB8s?si=g2JuMxRpdiRdbdRz