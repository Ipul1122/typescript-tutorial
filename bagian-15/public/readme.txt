mengenai bagian 14 yaitu Interface dengan classes


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
Interface denga classes
1. Buatlah sebuah folder Interface dan file HasFormatter.ts
2. Buatlah sebuah file payment.ts di dalam folder classes

A. didalam file HasFormatter berisikan
menggunakan export untuk bisa diterapkan ke file lainnya dan memiliki metode format() bertipe string
B. didalam file payment memanggil file HasFormatter
B.A menggunakan export untuk bisa diterapkan ke file lainnya dan juga implementasikan file HasFormatter
C.A didalam file Invoice memanggil file HasFormatter
C.B Menggunakan export untuk bisa diterapkan ke file lainnya dan juga implementasikan file HasFormatter
D. didalam file script.ts memanggil fiel HasFormatter, payment, Invoice
D.A Memakai metode DOM untuk memanipulasi data index.html
D.B memberikan suatu event ketika button di klik 
D.C Jika type.value yaitu invoice maka menjalankan isi invoice
D.D Jika tidak maka menjalankan isi payment


Kesimpulan
Interface membantu memastikan konsistensi kode dan mempermudah pengembangan, 
karena memberikan panduan tentang apa yang harus diterapkan.


-- REFERENSI -- 
YOUTUBE : https://www.youtube.com/watch?v=VbW6vWTaHOY&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=15