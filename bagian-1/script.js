var character = 'lucas';
console.log(character);
//memanggil semua element input di HTML
var inputs = document.querySelectorAll('input');
// melakukan perulangan terhadap element input ketika user menginput data
inputs.forEach(function (input) {
    console.log(input);
});
