mengenai bagian 14 yaitu Interface


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
Interface adalah sebuah blueprint dari suatu objek. 
Dalam Typescript Interface digunakan untuk menetapkan tipe data yang harus diikuti oleh
class, object atau function tanpa menyediakan implementasi detailnya 

menggunakan Interface sebagai bentuk dalam object
memiliki object yaitu IsPerson {
    name: string
    age: number
    speak(a: string): void; 
    time(a: number): number; 
}

dengan adanya Interface, object harus menyesuaikan dengan properti di dalam object.
Contoh di bawah ini adalah contoh penggunaan Interface dalam object

const me: IsPerson = {
    name: "ipul",
    age: 20,
    speak(text: string): void{ 
        console.log(text); 
    },
    time(amount: number): number{ 
        console.log(`gua menghabiskan waktu`, amount); 
        return amount; 
    }
};

memanggil sesuai apa object dan properti di dalamnya, tidak bisa tambah atau kurang dan itu sudah mutlak
harus menyesuaikan berapa banyak properti di dalam object IsPerson

Kesimpulan
Interface membantu memastikan konsistensi kode dan mempermudah pengembangan, 
karena memberikan panduan tentang apa yang harus diterapkan.


-- REFERENSI -- 
YOUTUBE : https://www.youtube.com/watch?v=VbW6vWTaHOY&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=15