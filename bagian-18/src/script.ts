// memanggil file Invoice yang ada di dalam file invoice.js
import {Invoice} from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
// memanggil file Payment yang ada di dalam file payment.js
import {Payment} from './classes/payment.js';
// memanggil file HasFormatter yang ada di dalam file HasFormatter.js
import {HasFormatter} from './intefaces/HasFormatter.js';

/****************************************************************
    // deklarasi variabel docOne & docTwo 
    // memanggil HasFormatter yang berisikan format(): string 
    let docOne: HasFormatter; 
    let docTwo: HasFormatter;

    // variabel docOne membuat data baru dari Object Invoice dan memiliki 3 properti
    docOne = new Invoice("ipul", "suka ngoding", 22); 
    // variabel docTwo membuat data baru dari Object Payment dan memiliki 3 properti
    docTwo = new Payment("Ipul", "Pembayaran", 20.000);

    // deklarasi docs memanggil HasFormatter format(): string untuk digunakan metode push
    let docs: HasFormatter[] = [];
    docs.push(docOne);
    docs.push(docTwo);

    console.log(docs);
 ***************************************************************/


/****************************************************************
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
            
            output class Invoice tanpa array
            console.log(invPertama, invKedua, invKetiga);
            
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
                ***************************************************************/


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

    // variable doc deklarasikan dengan tipe HasFormatter 
    let doc:HasFormatter;
    // mengecek apakah type value memiliki value invoice
    if(type.value === "invoice"){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else { // jika tidak maka value menjadi payment
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    /*
    // memanggil var list dan menambahkan data yang ada di dalam render
    // list.render memiliki 3 argument
    // doc untuk menambahkan data baru yang berisikan string
    // type.value menampilakn jika li ada invoice atau payment
    // end maka tidak lagi menampilkan
    */ list.render(doc, type.value, 'end'); 
    console.log(doc)
});


/* GENERIC

// function addUID memiliki object dengan name string 
// <ANY extends { name: string }> adalah penulisan generic.  ANY extends harus berupa string, bisa memakai metode array, object 
const addUID = <ANY extends{name:string}>(obj: ANY) => {
    let uid = Math.floor(Math.random() * 100); // uid di deklarasikan untuk mendapatkan angka bulat serta angka acak mulai dari 1 - 100
    //menggunakan spread Operator (...) => untuk menyebarkan properti objek ke dalam objek baru
    return {...obj, uid}; 
}

let docOne = addUID({name:'ipul', age: 22});
// let docTwo = addUID('hello')

console.log(docOne);


menggunakan interface untuk mendefinisikan properti 
dan metode yang harus ada dalam sebuah objek

interface Resource <ANYS> {
    uid: number,
    resourceName: string,
    data: ANYS;
}

// object docThree harus mematuhi data properti di dalam interface resource
const docThree: Resource<object> = { // Resource bertipe object
    uid: 1,
    resourceName: "person",
    data: {name: "ipul"} //data harus berupa object menyesuaikan di properti interface
};

const docFour: Resource<string[]> = { // Resource harus tipe data string dan menggunakan metode array
    uid: 2,
    resourceName: "shoopingList",
    data: ["banana", "apple", "orange"] // data harus berupa array dan arguments adalah string
}

// docThree output => uid: 1, resourceName: person, data: ipul
// docThree output => uid: 2, resourceName: shoopingList, data: banana,apple,orange
console.log(docThree, docFour);
*/



// ENUMS

// object ResourceType ada 5 Properti
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource <ANYS> {
    uid: number,
    resourceType: ResourceType, //menginisialisasi object di ResouceType bisa dipakai
    data: ANYS;
}

const docOne: Resource<object> = { 
    uid: 1,
    resourceType: ResourceType.AUTHOR, //Object memanggil properti Author namun hanya nomor index yang ditampilkan
    data: {name: "ipul"} 
};

const docTwo: Resource<string[]> = { 
    uid: 2,
    resourceType: ResourceType.BOOK,
    data: ["Red", "Cheap", "Quality"] 
}
console.log(docOne, docTwo);


