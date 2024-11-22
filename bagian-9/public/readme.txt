mengenai bagian 7 yaitu workflow & tsconfig


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
8.3 tambahkan }, "include": ["src"] }
8.4 mengarahkan tsconfig untuk mengambil file ts dari folder src saja
8.5 jika membuat file diluar folder public dan src tidak mengarahkan ke folder public atau lainnya. hanya bagian tertentu

-- STUDI KASUS -- 
Function Signature

pada code ini memiliki 3 contoh
1. Function memiliki 2 parameter dan 2 argument
2. Function memiliki 3 parameter dan 3 argument
3. Function memiliki object 1 parameter, 2 properti dan 1 argument
menggunakan metode "type" di contoh ke-3 untuk mempersingkat code

apa gunanya function Signature?
Function signature memastikan bahwa fungsi hanya bekerja sesuai dengan desainnya, 
menjaga integritas data, dan meningkatkan kualitas kode secara keseluruhan.



-- REFERENSI -- 
YOUTUBE : https://www.youtube.com/watch?v=TZNbzyY6hMU&t=1s