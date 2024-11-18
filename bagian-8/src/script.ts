// Type Aliases

// memudahkan pengunaan method string | number menggunakan type alias
// meminimalisir code panjang dan menjadikan pendek
type stringOrNumber = string | number;
type objWithName = {name: string, uid: stringOrNumber};

const detailLog = (uid: stringOrNumber, item: string) =>{
    console.log(`${item} has a uid of ${uid}`);
}

// KODE DENGAN TYPE ALIAS
const greet = (user: objWithName) => {
    console.log(`Hello, ${user.name}! Your uid is ${user.uid}`);
}

// KODE TANPA TYPE ALIAS
// const greet = (user: {name: string, uid: stringOrNumber}) => {
//     console.log(`Hello, ${user.name}! Your uid is ${user.uid}`);
// }


// Contoh Penggunaan & menampilkan di console
detailLog(123, "Item A"); // memakai number dan string pada uida dan item
detailLog("abc123", "Item B"); // memakai string dan string pada uid dan item

const user = { name: "Alice", uid: 456 }; // memanggil user dengan memberikan value name: alic dan uid 456 number
greet(user); // menampilkan output di console


