var lakiLaki = "ipul";
var umur = 30;
var tampan = false;
// lakiLaki = 30; => memberi tahu jika variabel laki laki adalah string
lakiLaki = "syaiful";
// umur = "ipul"; => memberi tahu jika variabel umur adalah integer
umur = 22;
// tampan = "yes"; => memberi tahu jika tampan adalah boolean
tampan = true;
// diameter lingkaran menggunakan rumus mtk phi
var lkr = function (diameter) {
    return diameter * Math.PI;
};
// console.log (lkr("ipul")); // error karena tidak bisa menghitung string dan diharuskan berupa number
// console.log (lkr(true)); // error karena tidak bisa boolean dan diharuskan berupa number
console.log(lkr(30));
