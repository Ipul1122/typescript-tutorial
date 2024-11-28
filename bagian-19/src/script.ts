// memanggil file Invoice yang ada di dalam file invoice.js
import {Invoice} from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
// memanggil file Payment yang ada di dalam file payment.js
import {Payment} from './classes/payment.js';
// memanggil file HasFormatter yang ada di dalam file HasFormatter.js
import {HasFormatter} from './intefaces/HasFormatter.js';

// list template instance
const ul = document.querySelector("ul")!; // variabel ul di deklarasikan untuk mengambil class ul dan ul tidak akan terjadi null
const list = new ListTemplate(ul); // variabel list membuat data baru untuk menampilkan isi listTemplate dan memanggil variabel ul sebagai container


const form = document.querySelector(".new-item-form") as HTMLFormElement; // deklarasi variabel form untuk memanggil class form di HTML
const type = document.querySelector("#type") as HTMLSelectElement; // deklarasi variabel type untuk memanggil id select di HTML
const toFrom = document.querySelector("#toFrom") as HTMLInputElement; // variabel toFrom, details and amount di deklarasi untuk memanggil id input di HTML
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// callback function ketika button di sumbit akan terjadi event
form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); //mencegah perilaku default dari form submission (misalnya, refresh halaman).

    // menyederhanakan dengan tuple
    let values: [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber,]

    // variable doc deklarasikan dengan tipe HasFormatter 
    let doc:HasFormatter;
    // mengecek apakah type value memiliki value invoice
    if(type.value === "invoice"){
        doc = new Invoice(...values);
    } else { // jika tidak maka value menjadi payment
        doc = new Payment(...values)
    }

    /*
    // memanggil    list dan menambahkan data yang ada di dalam render
    // list.render memiliki 3 argument
    // doc untuk menambahkan data baru yang berisikan string
    // type.value menampilakn jika li ada invoice atau payment
    // end maka tidak lagi menampilkan
    */ list.render(doc, type.value, 'end'); 
    console.log(doc)
});


// TUPLES CONTOH

// Array Tanpa Tuple
let arr = ["ipul", 20, false];
arr[0] = false;
arr[1] = "ipul";
arr[2] = 30;

arr = [30, false, "ipul"]; //output bagian ini
console.log(arr)

// Arrau dengan Tuple

let tup: [string, number, boolean] = ["ipul", 22, true];
tup[0] = "false" //benar
// tup[1] = "ipul" //salah

let student: [string, number];
student = ["syaiful", 23]; //benar
// student = [23, "syaiful"] //salah 



