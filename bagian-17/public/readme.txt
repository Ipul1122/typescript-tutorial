mengenai bagian 17 yaitu Generic 


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
Generic

Berbeda kasus dengan yang sebelumnya namun masih dalam 1 folder/file

generic ada di halaman script.ts pada barisan 102
Metode yang digunakan menggunakan generic dan generic interface

1. generic tanpa interfac
- generic tanpa interface memiliki <ANY extend{name:string}></ANY>
- kata <ANY></ANY> tidak lah wajib dinamakan ANY, anda bisa ubah sesuai kebutuhan
- yaitu digunakan bisa memakai metode apa saja seperti array, object tapi value harus string
- membuat variabel untuk melakukan tambah data uid dengan menggunakan metode Math.Floor dan Math.Random * 100
- lalu mencoba membuat name: "ipul", age: 22;
- pada tampilan console, output tersebut name:ipul, age: 22, uid: random;

2. generic dengan interface
- generic dengan interface memiliki <ANYS extends InterfaceName></ANYS>
- membuat interface baru bernama Resource
- Object Resource memiliki 3 properti yaitu uid, ResourceName dan data
- properti tersebut memiliki value masing-masing
- Pada docThree, Object Resource diberikan perintah object untuk properti data, maka properti data harus bertipe object
- pada docFour, Object Resource harus menggunakan string dan array, maka value dari properti data harus berupa string dan array

Kesimpulan
Generic sangat flexibel untuk kode yang lebih enak dibaca dan simpel untuk memanggil object dan properti


-- REFERENSI -- 
YOUTUBE : https://www.youtube.com/watch?v=IOzkOXSz9gE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=18