// memanggil file HasFormatter.js
import { HasFormatter } from '../intefaces/HasFormatter.js';



// menggunakan export untuk bisa di panggil file lain
// implementasikan bersama file HasFormatter
export class Payment implements HasFormatter {
    // menggunakan metode class constructor
    // consturctor memiliki 3 parameter dan bertipe string dan number
    constructor(
        readonly reception: string,
        private details: string,
        public amount: number
    ) {}
    
    // metode format mengembalikan value Reception,detail, amount
    format() {
        return `Invoice for ${this.reception} - ${this.details} - $${this.amount}`
    }
}