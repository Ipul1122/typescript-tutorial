// memanggil file Invoice yang ada di dalam file invoice.js
import {Invoice} from './classes/invoice.js';
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


// deklarasi variabel form untuk memanggil class form di HTML
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// deklarasi variabel type untuk memanggil id select di HTML
const type = document.querySelector("#type") as HTMLSelectElement;
// deklarasi toFrom type untuk memanggil id input di HTML
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
// deklarasi details type untuk memanggil id input di HTML
const details = document.querySelector("#details") as HTMLInputElement;
// deklarasi amount type untuk memanggil id input di HTML
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
    console.log(doc);
});