mengenai bagian 13 yaitu module


-- STUDI KASUS --
workflow & tsconfig

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
module
1. module adalah sebuah konsep dalam ES6 yang memungkinkan kita untuk mengimport
sebuah file lain ke dalam file yang kita buat
2. module dapat berupa file ts, js, atau bahkan file lainnya
3. module dapat diimport menggunakan keyword import
4. module dapat diexport menggunakan keyword export
5. module dapat diimport menggunakan keyword import { namaModule } from 'namaFile'

melanjutkan materi sebelumny yaitu di bagian 12
1. kita telah membuat sebuah file baru bernama Invoice.ts
2. pada class Invoice.ts memberikan akses export untuk di file script.ts
3. dibagian file script.ts tambahkan import {Invoice} from './classes/invoice.js' => mengarahkan ke file invoice.ts

Kesimpulan
dengan menggunakan module, menjadikan code lebih ringkas karena dibuat dengan file terpisah namun tetap terhubung atau integrasi.




-- REFERENSI -- 
YOUTUBE : https://www.youtube.com/watch?v=jXoSaX_yFh4&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=8