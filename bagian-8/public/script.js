// Type Aliases
var detailLog = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
// KODE DENGAN TYPE ALIAS
var greet = function (user) {
    console.log("Hello, ".concat(user.name, "! Your uid is ").concat(user.uid));
};
// KODE TANPA TYPE ALIAS
// const greet = (user: {name: string, uid: stringOrNumber}) => {
//     console.log(`Hello, ${user.name}! Your uid is ${user.uid}`);
// }
// Contoh Penggunaan & menampilkan di console
detailLog(123, "Item A"); // memakai number dan string pada uida dan item
detailLog("abc123", "Item B"); // memakai string dan string pada uid dan item
var user = { name: "Alice", uid: 456 }; // memanggil user dengan memberikan value name: alic dan uid 456 number
greet(user); // menampilkan output di console
