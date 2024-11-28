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
Enums

melanjutkan dari file sebelumnya yaitu Generic
enums bisa dipakai secara langsung dengan Generic, Interface

Enums digunakan untuk sebuah nilai menjadi tetap tidak bisa diubah seperti status, tipe object, kategori

dalam kasus ini yaitu ResourceType memiliki 5 properti dan index dimulai dari 0
untuk memanggil properti di ResourceType yaitu memanggil properti apa yang harus di index


Kesimpulan
Enums sangat bagus untuk nilai yang tidak dapat diubah

-- REFERENSI -- 
YOUTUBE :https://www.youtube.com/watch?v=r8G7-hQG07o&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=19