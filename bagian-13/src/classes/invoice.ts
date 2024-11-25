// read-onlye
// private
// public

// deklarasi class diberi nama Invoice 
export class Invoice {
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