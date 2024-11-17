"use strict";
let sapa;
// sapa = "hello";
sapa = () => {
    console.log("hello world");
};
// fungsi tambah memiliki 3 parameter
// a menambahkan nomor
// b menambahkan nomor
// c tipe number atau string dan nilai default adalah 20
// void tidak akan return/mengembalikan nilai
const tambah = (a, b, c = 20) => {
    console.log(a + b);
    console.log(c);
};
tambah(5, 20);
const kurang = (a, b) => {
    return a - b;
};
let result = kurang(50, 20);
console.log(kurang(50, 20)); // Output: 30
