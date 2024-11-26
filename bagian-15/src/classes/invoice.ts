// memanggil file HasFormatter.js
import { HasFormatter } from '../intefaces/HasFormatter.js';


// menggunakan export untuk bisa di panggil file lain dan 
// implementasikan bersama file HasFormatter
export class Invoice implements HasFormatter {
    // menggunakan metode class constructor
    // consturctor memiliki 3 parameter dan bertipe string dan number
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}
    
    // metode format mengembalikan value client,detail, amount
    format() {
        return `Invoice for ${this.client} - ${this.details} - $${this.amount}`
    }
}