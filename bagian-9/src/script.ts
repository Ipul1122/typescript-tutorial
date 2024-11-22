// FUNCTION SIGNATURE

// let sapa: Function;

// contoh 1
// function menyapa memiliki 2 paramater string dan tidak mengembalikan nilai
// function menyapa berfungsi untuk mencetak nama yang dipanggil dan menyapanya dengan halo
let menyapa: (a: string, b: string) => void;

menyapa = (nama: string, menyapanya: string) => {
    console.log(`${nama} halo ${menyapanya}`);
}

// argument pertama nama, argument kedua menyapanya
menyapa("ipul", "selamat malam")

// contoh 2

// function kalkulasi memiliki 3 param yaitu number,number dan string. Fungsi mengembalikan nilai angka/number
let kalkulasi: (a: number, b: number, c:string) => number; 

// fungsi kalkulasi cek, apakah hurufC bernilai add?. Jika iya 
// fungsi A + B akan mengembalikan nilai tambah
// jika tidak A - B akan mengembalikan nilai kurang
kalkulasi = (hurufA: number, hurufB: number, hurufC: string) => {
    if (hurufC === "add"){
        return hurufA + hurufB;
    } else {
        return hurufA - hurufB;
    }
}

// 3 argument hurufA, hurufB, dan hurufC
console.log(kalkulasi(20,5, "add")); 
console.log(kalkulasi(20,5, "kurang"));

// contoh 3

// function detailLogin hanya menerima satu paramater berupa object name dan age. Tidak mengembalikan nilai
let detailLogin: (obj: person) => void;

type person = {nama: string, age: number};

// Function detailLogin mencetak name dan age
// function detailLogin memiliki 1 parameter dan memiliki 2 properti
detailLogin = (obj: person) => {
    console.log(`nama saya ${obj.nama} umur saya ${obj.age} tahun`)
}

// menampilkan 1 argument
detailLogin({nama: "ipul", age: 20});
