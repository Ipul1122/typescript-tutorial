// any
// any bisa mendeklarasi semua value tipe variabel apa saja
// KESIMPULAN ANY = ANY tidak peduli value yang diberikan dan akan tetap mengeksekusi value yang diberikan

// variabel umur bertipe any memiliki nilai number
let umur: any = 25;

// memanggil variabel umur namun nilai true
umur = true;
console.log(umur); // true
// memanggil variabel umur namun nilai string
umur = "halo semua";
console.log(umur); // halo semua
// object variabel umur dan isi properti umur memiliki nama yang sama
umur = {
    nama: "Rahmad",
    umur: 25
}
console.log(umur); //rahmad dan 25

// variabel mixed bertipe array parameter kosong
let mixed: any[] = [];

// tambahkan number  1
mixed.push(1);
// tambahkan string "halo"
mixed.push("halo");
// tambahkan boolean true
mixed.push(true);

console.log(mixed); // 1, "halo", true

// object anime memiliki 2 param nama dan umur
let anime: {nama: any, umur: any};
    anime = {
        nama: "naruto",
        umur: 18
    }

    // tipe any tidak peduli value, namun menjelaskan apa isi value yang di output
    anime = {
        nama: 18,
        umur: "naruto"
    }

    console.log(anime);

