"use strict";
// Implementasi interface
// deklarasi variabel "me" untuk mengisi objec dari IsPerson
const me = {
    name: "ipul",
    age: 20,
    speak(text) {
        console.log(text); // menampilkan parameter text
    },
    time(amount) {
        console.log(`gua menghabiskan waktu`, amount); //menampilkan text dan parameter amount
        return amount; //mengembalikan nilai amount
    }
};
// penggunaan interface
// deklarasi function greetPerson
const greetPerson = (person) => {
    console.log("halo", person.name); // menampilkan pesan halo dan nama
};
greetPerson(me); // memanggil fungction greetPerson untuk mencetak hasil nilai
console.log(me); // mencetak isi object dan properti IsPerson
// // memanggil file Invoice yang ada di dalam file invoice.js
// import {Invoice} from './classes/invoice.js'
// // Membuat instansi baru dari class Invoice
// const invPertama = new Invoice(
//     "syaiful", 
//     "bekerja dalam tekanan", 
//     250
// );
// const invKedua = new Invoice(
//     "Ipul", 
//     "bekerja santuy", 
//     1000
// );
// const invKetiga = new Invoice(
//     "Ipul", 
//     "bekerja santuy + tekanan", 
//     1500
// );
// // output class Invoice tanpa array
// // console.log(invPertama, invKedua, invKetiga);
// // menggunakan array untuk mengumpulkan data Invoice
// // variabel invoice memanggil class Invoice
// let invoice: Invoice[] = [];
// // menggunakan method push untuk memasukkan Properti Invoice
// invoice.push(invPertama); 
// invoice.push(invKedua);
// invoice.push(invKetiga);
// // memanggil variabel invoice array
// invoice.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
