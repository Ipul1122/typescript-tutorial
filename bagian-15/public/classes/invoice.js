// menggunakan export untuk bisa di panggil file lain dan 
// implementasikan bersama file HasFormatter
export class Invoice {
    // menggunakan metode class constructor
    // consturctor memiliki 3 parameter dan bertipe string dan number
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // metode format mengembalikan value client,detail, amount
    format() {
        return `Invoice for ${this.client} - ${this.details} - $${this.amount}`;
    }
}
