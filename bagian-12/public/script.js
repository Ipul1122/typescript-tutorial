// read-onlye
// private
// public
// deklarasi class diberi nama Invoice 
var Invoice = /** @class */ (function () {
    // menggunakan metode class constructor
    // consturctor memiliki 3 parameter dan bertipe string dan number
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
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
// variabel invoice memanggil class Invoice
var invoice = [];
// menggunakan method push untuk memasukkan Properti Invoice
invoice.push(invPertama);
invoice.push(invKedua);
invoice.push(invKetiga);
// memanggil variabel invoice array
invoice.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
