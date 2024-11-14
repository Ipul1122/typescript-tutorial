// ARRAY
var karakter = ["naruto", "sasuke", "sakura"];
karakter.push("kakashi"); // masukkan string kakashi
// karakter.push(20); => number tidak bisa di push, harus berupa string, menyesuaikan value array
// karakter[0] = 3; => posisi array 0 tidak bisa diganti angka 3 karena berupa integer/number
var umur = [10, 20, 30];
umur.push(40); // masukkan umur 40
// umur.push("naruto"); => string tidak bisa di push, harus berupa number, menyesuaikan value array
// umur[0] = "naruto"; => posisi array 0 tidak bisa diganti string
var mixed = ["Naruto", 18, "Sasuke", 16];
mixed.push("sakura"); // masukkan string sakura
mixed.push(15); // masukkan angka 15 
mixed[0] = 3; // posisi array 0 bisa diganti number 3 
// OBJECT
var anime = {
    nama: "Naruto",
    desa: "konoha",
    umur: 18
};
// menambahkan object anime
anime = {
    nama: "Sasuke",
    desa: "Akatsuki",
    umur: 20
    // umur: 18 => jika salah satu properti children berbeda dengan parent maka error
};
anime.nama = "uzumaki"; // mengganti nama naruto => uzumaki
anime.umur = 20; // umur 18 => 20
// anime.umur = "30" // umur harus berupa number
// anime.skill = ["rasengan, rasenShuriken"] // skill tidak ada di dalam object anime
