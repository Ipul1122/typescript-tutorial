mengenai bagian 18 yaitu Enums 


cara struktur file dengan rapih 
1. di dalam folder src membuat folder baru yaitu classes
2. di dalam folder classes membuat file baru bernama Invoice.ts 
3. ke file tsconfig.json
3.1 cari target lalu ubah menjadi ES6
3.1 Cari module lalu ubah menjadi ES2015
4. Ke file index.html lalu tambahkan di bagian script type="module"
5. Jika terjadi error saat dibuka memakai chrome atau browser lainnya
5.1 seperti berikut error = Access to Script at 'file:///home/../.../JavaScript/src/index.js' from origin 'null' has been blocked by CORS policy: Invalid response. Origin 'null' is therefore not allowed access.
5.2 Karena browser tersebut memakai CORS policy
5.3 bagaimana cara mengatasinya?
5.4 memakai live-server yang ada di extension vscode
5.5 install live-server kemudian open with live server
5.6 maka akan terbuka di browser dengan tidak ada error CORS policy lagi


-- STUDI KASUS -- 
Tuple

STUDI KASUS ada di baris 24 dan 47

biasanya jika membuat array dan membuat array yang sama namun value berbeda. maka output yang dihasilkan bagian kedua
contoh array tanpa Tuple
let arr = ["ipul", 20, false];
arr[0] = false;
arr[1] = "ipul";
arr[2] = 30;

arr = [30, false, "ipul"]; //output bagian ini
console.log(arr)

pada code diatas, output yang ditampilkan yaitu arr akhir bukan pertama
namun dengan tuple kita bisa menampilkan bagian pertama dan isi array tidak akan berubah

contoh array dengan Tuple
// Arrau dengan Tuple

let tup: [string, number, boolean] = ["ipul", 22, true];
tup[0] = "false" //benar
// tup[1] = "ipul" //salah

let student: [string, number];
student = ["syaiful", 23]; //benar
// student = [23, "syaiful"] //salah 

kita bisa lihat, di tup[0] meskipun false dia tetap akan benar karna bertipe string bukan boolean
kita bisa lihat, di student = [23, "syaiful"] akan terjadi salah, karna number dahulu bukan string


Kesimpulan
Tuple digunakan untuk mendefinisikan isi array dengan jumlah tetap 
dan tipe data spesifik untuk tiap element

-- REFERENSI -- 
YOUTUBE :https://www.youtube.com/watch?v=r8G7-hQG07o&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=19