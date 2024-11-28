// memanggil file Invoice yang ada di dalam file invoice.js
import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
// memanggil file Payment yang ada di dalam file payment.js
import { Payment } from './classes/payment.js';
// list template instance
const ul = document.querySelector("ul"); // variabel ul di deklarasikan untuk mengambil class ul dan ul tidak akan terjadi null
const list = new ListTemplate(ul); // variabel list membuat data baru untuk menampilkan isi listTemplate dan memanggil variabel ul sebagai container
const form = document.querySelector(".new-item-form"); // deklarasi variabel form untuk memanggil class form di HTML
const type = document.querySelector("#type"); // deklarasi variabel type untuk memanggil id select di HTML
const toFrom = document.querySelector("#toFrom"); // variabel toFrom, details and amount di deklarasi untuk memanggil id input di HTML
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// callback function ketika button di sumbit akan terjadi event
form.addEventListener('submit', (e) => {
    e.preventDefault(); //mencegah perilaku default dari form submission (misalnya, refresh halaman).
    // menyederhanakan dengan tuple
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber,];
    // variable doc deklarasikan dengan tipe HasFormatter 
    let doc;
    // mengecek apakah type value memiliki value invoice
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else { // jika tidak maka value menjadi payment
        doc = new Payment(...values);
    }
    /*
    // memanggil    list dan menambahkan data yang ada di dalam render
    // list.render memiliki 3 argument
    // doc untuk menambahkan data baru yang berisikan string
    // type.value menampilakn jika li ada invoice atau payment
    // end maka tidak lagi menampilkan
    */ list.render(doc, type.value, 'end');
    console.log(doc);
});
// TUPLES CONTOH
// Array Tanpa Tuple
let arr = ["ipul", 20, false];
arr[0] = false;
arr[1] = "ipul";
arr[2] = 30;
arr = [30, false, "ipul"]; //output bagian ini
console.log(arr);
// Arrau dengan Tuple
let tup = ["ipul", 22, true];
tup[0] = "false"; //benar
// tup[1] = "ipul" //salah
let student;
student = ["syaiful", 23]; //benar
// student = [23, "syaiful"] //salah 
