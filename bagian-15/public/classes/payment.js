// menggunakan export untuk bisa di panggil file lain
// implementasikan bersama file HasFormatter
export class Payment {
    // menggunakan metode class constructor
    // consturctor memiliki 3 parameter dan bertipe string dan number
    constructor(reception, details, amount) {
        this.reception = reception;
        this.details = details;
        this.amount = amount;
    }
    // metode format mengembalikan value Reception,detail, amount
    format() {
        return `Invoice for ${this.reception} - ${this.details} - $${this.amount}`;
    }
}
