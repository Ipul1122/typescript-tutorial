import {Invoice} from './classes/invoice.js'

// Membuat instansi baru dari class Invoice
const invPertama = new Invoice(
    "syaiful", 
    "bekerja dalam tekanan", 
    250
);

const invKedua = new Invoice(
    "Ipul", 
    "bekerja santuy", 
    1000
);

const invKetiga = new Invoice(
    "Ipul", 
    "bekerja santuy + tekanan", 
    1500
);
// output class Invoice tanpa array
// console.log(invPertama, invKedua, invKetiga);

// menggunakan array untuk mengumpulkan data Invoice
// variabel invoice memanggil class Invoice
let invoice: Invoice[] = [];
// menggunakan method push untuk memasukkan Properti Invoice
invoice.push(invPertama); 
invoice.push(invKedua);
invoice.push(invKetiga);

// memanggil variabel invoice array
invoice.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})