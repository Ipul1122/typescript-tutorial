const character = 'lucas';

console.log(character);

//memanggil semua element input di HTML
const inputs = document.querySelectorAll('input');

// melakukan perulangan terhadap element input ketika user menginput data
inputs.forEach((input) => {
  console.log(input);
});
