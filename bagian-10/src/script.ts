// THE DOM & TYPE CASTING

// const anchor = document.querySelector("a")!;

// if(anchor){
    // console.log(anchor.href);
// }



// 2 meteode cara untuk melakukan DOM jika nilai null
// memberikan tanda !(not) 
// memberikan as menunjukan HTMLElement bagian apa yang akan di DOM

// contoh memakai !(not)
// const form = document.querySelector("form")!;
// console.log(form.children);

// contoh memakai as
// const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// deklarasi variabel form, mecari element class .new-item-form sebagia html form element
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// input
// Elemen dropdown (select) dengan ID type. Elemen ini digunakan untuk memilih jenis data.
const type = document.querySelector("#type") as HTMLSelectElement;
//  Input teks dengan ID toFrom. Elemen ini digunakan untuk memasukkan data penerima atau tujuan.
const toForm = document.querySelector("#toFrom") as HTMLInputElement;
// Input teks dengan ID details. Elemen ini digunakan untuk memasukkan detail tambahan.
const details = document.querySelector("#details") as HTMLInputElement;
// Input angka dengan ID amount. Elemen ini digunakan untuk memasukkan jumlah (angka).
const amount = document.querySelector("#amount") as HTMLInputElement;

// button di klik akan terjadi event 
form.addEventListener("submit", (e: Event) =>{
    // Mencegah perilaku default dari event submit
    e.preventDefault();

    // menampilkan hasil output dan memberikan value 
    console.log(
        type.value,
        toForm.value,
        details.value,
        amount.valueAsNumber
    );
})





