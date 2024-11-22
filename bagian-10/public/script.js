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
var form = document.querySelector(".new-item-form");
// input
// Elemen dropdown (select) dengan ID type. Elemen ini digunakan untuk memilih jenis data.
var type = document.querySelector("#type");
//  Input teks dengan ID toFrom. Elemen ini digunakan untuk memasukkan data penerima atau tujuan.
var toForm = document.querySelector("#toFrom");
// Input teks dengan ID details. Elemen ini digunakan untuk memasukkan detail tambahan.
var details = document.querySelector("#details");
// Input angka dengan ID amount. Elemen ini digunakan untuk memasukkan jumlah (angka).
var amount = document.querySelector("#amount");
// button di klik akan terjadi event 
form.addEventListener("submit", function (e) {
    // Mencegah perilaku default dari event submit
    e.preventDefault();
    // menampilkan hasil output dan memberikan value 
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
