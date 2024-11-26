// Interface
// Interface isPerson mendefinisikan bagaimana bentuk objek.
interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void; // menerima parameter string dan tidak mengembalikan nilai
    time(a: number): number; // menerima parameter number dan mengembalikan nilai number
}

// Implementasi interface
// deklarasi variabel "me" untuk mengisi objec dari IsPerson
const me: IsPerson = {
    name: "ipul",
    age: 20,
    speak(text: string): void{ // parameter text string dan tidak mengembalikan nilai
        console.log(text); // menampilkan parameter text
    },
    time(amount: number): number{ //parameter amount number dan mengembalikan nilai number
        console.log(`gua menghabiskan waktu`, amount); //menampilkan text dan parameter amount
        return amount; //mengembalikan nilai amount
    }
};

// penggunaan interface
// deklarasi function greetPerson
const greetPerson = (person: IsPerson ) => { // parameter person memanggil interface IsPerson
    console.log("halo", person.name) // menampilkan pesan halo dan nama
}

greetPerson(me); // memanggil fungction greetPerson untuk mencetak hasil nilai

console.log(me) // mencetak isi object dan properti IsPerson




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