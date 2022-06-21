/*
var username = "hsimpson";
var week = 7;
var animals = ["perro", "gato", "mono"];
var nothing = null;
*/

/*
if (username === "hsimpson") {
    console.log(typeof(animals));
    animals = 34;
    console.log(typeof(animals));
    week = "7";
}

if (week === 7) {
    console.log("La semana tiene 7 días");
}

username = "lsimpson";
console.log(username);
*/

/*
var species = "humano";

function transform() {
    var species = "hombre-lobo";
    console.log(species);
}

console.log(species);
transform();
console.log(species);
*/

/*
var fullMoon = true;
let species = "humano";

if (fullMoon) {
    let species = "hombre-lobo"
    console.log(`Hay Luna Llena. Ahora soy ${species}`);
}

console.log(`No hay Luna Llena. Ahora soy ${species}`);

*/

/* Esto es hoisting

console.log(x);

var x = 100;

*/

console.log(y)
var y = 10;


function hoist() {
    console.log(a)
    if (false) {
        var a = 200;
    }
    
}

hoist();