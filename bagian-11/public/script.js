// CLASSES
// deklarasi class diberi Invoice object
// Object Invoice memiliki 3 properti
var Invoice = /** @class */ (function () {
    // menggunakan metode class constructor
    // consturctor memiliki 3 parameter dan bertipe string dan number
    function Invoice(c, d, a) {
        // Inisialisasi properti 'client,details,amount' dengan nilai parameter 'c,d,a'
        this.client = c,
            this.details = d,
            this.amount = a;
    }
    // metode format mengembalikan value client,detail, amount
    Invoice.prototype.format = function () {
        return "Invoice for ".concat(this.client, " - ").concat(this.details, " - $").concat(this.amount);
    };
    return Invoice;
}());
// Membuat instansi baru dari class Invoice
var invPertama = new Invoice("syaiful", "bekerja dalam tekanan", 250);
var invKedua = new Invoice("Ipul", "bekerja santuy", 1000);
var invKetiga = new Invoice("Ipul", "bekerja santuy + tekanan", 1500);
// output class Invoice tanpa array
// console.log(invPertama, invKedua, invKetiga);
// menggunakan array untuk mengumpulkan data Invoice
var invoice = [];
// menggunakan method push untuk memasukkan Properti Invoice
invoice.push(invPertama);
invoice.push(invKedua);
invoice.push(invKetiga);
// output data invoice memakai array
console.log(invoice);
