// explicit types => type yang mau diharapkan atau tidak tahu value variabel yang diisikan 
var karakter;
var umur;
var dewasa;
// umur = "ipul"; => umur harus bertipe string
umur = 22;
// dewasa = 22 => dewasa harus bertipe number
dewasa = true;
// arrays
var tim7 = [];
tim7 = ["kakashi", "sakura", "sasuke"];
tim7.push("naruto"); //naruto akan diletakkan setelah string sasuke
// tim7 = [20,30]; => tim7 harus bertipe string
// union types
var anime = []; //properti anime bertipe string dan number
anime.push("Jujutsu Kaisen");
anime.push(20);
var film; // film bertipe string dan number
film = "555";
film = 555;
// object
var villain;
villain = { name: "Dr.Octopus", umur: 40 };
var antiHero;
antiHero = { name: "deadpool", umur: 40, pahlawan: false };
