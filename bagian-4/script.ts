// explicit types => type yang mau diharapkan atau tidak tahu value variabel yang diisikan 
let karakter: string;
let umur: number;
let dewasa: boolean;

// umur = "ipul"; => umur harus bertipe string
umur = 22;

// dewasa = 22 => dewasa harus bertipe number
dewasa = true;


// arrays
let tim7: string[] = []; 

tim7 = ["kakashi", "sakura", "sasuke"]
tim7.push("naruto"); //naruto akan diletakkan setelah string sasuke
// tim7 = [20,30]; => tim7 harus bertipe string

// union types
let anime: (string|number) [] = []; //properti anime bertipe string dan number
anime.push("Jujutsu Kaisen");
anime.push(20);

let film: string|number // film bertipe string dan number
film = "555";
film = 555;


// object
let villain: object;

villain = { name: "Dr.Octopus", umur: 40};


let antiHero: {
    name: string,
    umur: number,
    pahlawan: boolean
}

antiHero = {name: "deadpool", umur: 40, pahlawan: false};