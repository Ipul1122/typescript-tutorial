// CLASSES

// deklarasi class diberi Invoice object
// Object Invoice memiliki 3 properti
class Invoice {
    client: string;
    details: string;
    amount: number;

    // menggunakan metode class constructor
    // consturctor memiliki 3 parameter dan bertipe string dan number
    constructor(c: string, d: string, a: number){
        // Inisialisasi properti 'client,details,amount' dengan nilai parameter 'c,d,a'
        this.client = c,
        this.details = d,
        this.amount = a
    }
    
    // metode format mengembalikan value client,detail, amount
    format() {
        return `Invoice for ${this.client} - ${this.details} - $${this.amount}`
    }
}

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
let invoice: Invoice[] = [];
// menggunakan method push untuk memasukkan Properti Invoice
invoice.push(invPertama); 
invoice.push(invKedua);
invoice.push(invKetiga);
// output data invoice memakai array
console.log(invoice);


