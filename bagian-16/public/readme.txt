mengenai bagian 16  yaitu Rendering an HTML Element 


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
Rendering an html Element

melanjutkan materi kemarin yaitu bagian-15 namun bedanya menampilkan di halaman html bukan di console

langkah yang dilakukan
1. membuat listTemplate.ts untuk membuat li berada di halaman html
2. lalu menggunakna metode object constructor untuk html UL Element
3. membuat function render yang berisikan 3 parameter
4. membuat atau createElement menggunakan metode DOM
5. pada halaman script.ts 
5.1 membuat variabel ul dan list
5.2 ul untuk menampung semua list yang ditampilkan
5.3 list untuk menampung data h4 dan paragraph
6. kemudian memanggil list.render yang berisikan 3 argument
6.1 tiga argument tersebut menghasilkan perintah di dalamnya 
6.2 seperti doc, type.value, end


Kesimpulan
Rendering an html Element yaitu untuk menampilkan output di dalam body html 
dan tidak akan muncul di console kecuali di panggil

-- REFERENSI -- 
YOUTUBE : https://www.youtube.com/watch?v=X-mUYxLjqLY&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=17