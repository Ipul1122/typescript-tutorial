/*
    1. Register a list container (ul) in the constructor
    2. Create a render method to render a new 'li' to the container
        -- accepts arguments: invoice or payment, a heading, a position
        -- create the html template (li, h4, p )
        -- add the 'li' template to the start/end of the list
*/

// menerima file HasFormatter dari file HasFormatter
import { HasFormatter } from "../intefaces/HasFormatter";

// merespon class ListTemplate dari file lain
export class ListTemplate {
    // properti container hanya dapat diakses didalam listTemplate
    constructor(private container: HTMLUListElement) {}
    // function render memiliki 3 paramater
    // parameter item dideklarasikan sebagai object yang hanya menerima string
    // parameter heading dideklarasikan sebagai tipe data string
    // parameter pos memiliki value start OR end
        render(item: HasFormatter, heading:string, pos: 'start' | 'end'){ 
            const li = document.createElement('li'); // li dideklarasikan untuk membuat sebuah element

            const h4 = document.createElement('h4'); // h4 dideklarasikan untuk membuat sebuah element
            h4.innerText = heading; // memanggil h4 ketika pesan dikirim menjadi string
            li.append(h4) // menambahkan h4 di dalam li

            const p = document.createElement('p') // p dideklarasikan untuk membuat sebuah element
            p.innerText = item.format(); // memanggill p ketika pesan dikirim dan memiliki string
            li.append(p); // menambahkan p di dalam li

            // menamambahkan li ke dalam container
            if( pos === 'start'){
                this.container.prepend(li); // jika pos start maka container li akan ditambahkan di awal
            } else {
                this.container.append(li); // jika pos start maka container li akan ditambahkan di akhir
            }
        }
} 