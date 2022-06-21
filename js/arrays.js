// Asignar los cinco océanos a cinco variables.
const ocean1 = "Pacific";
const ocean2 = "Atlantic";
const ocean3 = "Indian";
const ocean4 = "Arctic";
const ocean5 = "Antarctic";

// Asignar los cinco océanos
let oceans = [
	"Pacific",
	"Atlantic",
	"Indian",
	"Arctic",
	"Antarctic",
];

// Usando el literal de matriz []
let sharksL = [
	"Blanco",
	"Toro",
	"Martillo",
    "Tigre",
];

// Usando new Array()
let sharksO = new Array(
	"Blanco",
	"Toro",
	"Martillo",
    "Tigre",
);

// Inicialización de un arreglo de tipos de datos mezclados
let mixedData = [
	"String",
	null,
	7,
	[
		"another",
		"array",
	],
];

let seaCreatures = [
	"pulpo",
	"calamar",
	"tiburón",
	"caballo de mar",
	"estrella de mar",
];

let nestedArray = [
	[
		"salmón",
		"arenque",
		"pez espada",
	],
	[
		"cangrejo",
		"langosta",
	]
];

let shellfish = [
	"ostra",
	"camarón",
	"almeja",
	"mejillón",
];

// Bucle a través de la longitud de la matriz
for (let i = 0; i < shellfish.length; i++) {
    // console.log(i, shellfish[i]);
}

// Creando una variedad de mamíferos acuáticos.
let mammals = [
	"delfín",
	"ballena",
	"manatí",
];

// Bucle a través de cada mamífero
for (let mammal of mammals) {
	// console.log(mammal);
}


let fish = [ "piraña", "barracuda", "koi", "anguila" ];

function sortNumerically(a, b) {
    return a - b;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 

var example = function() {
	// escribimos el código que se ejecuta.
}

example();

var example = () => {
	// escribimos el código que se ejecuta.
}

example();

var example = parameter => {
	// escribimos el código que se ejecuta.
}

example();

/* 
fish.forEach(individualFish => {
	console.log(individualFish);
});

for (let i = 0; i < fish.length; i++) {
	console.log(fish[i]);
}

*/

let printFish = fish.map(individualFish => {
	return `${individualFish}s`;
});


let filteredList  = seaCreatures.filter(creature => {
	return creature[0] === "c";
});

let numbers = [ 42, 34, 15, 11, 3, 28 ];

let sum = numbers.reduce((a, b) => {
	return a + b;
});

const isCephalopod = cephalopod => {
	return [ "calamar", "pulpo" ].includes(cephalopod);
}

// Objetos

const literalObject = {};

const constructorObject = new Object();

// Inicialización del objeto gimli

const gimli = {
	name: "Gimli",
	race: "enano",
	weapon: "hacha",
	greet: function() {
		return `Hola, mi nombre es ${this.name}`;
	}
}

gimli["age"] = 139; 

gimli.fight = function() {
	//return `Gimli pelea com un ${this.weapon}`
}

/*
for (let key in gimli) {
	console.log(gimli[key]);
}
*/

for (let key in gimli) {
	//console.log(key.toUpperCase() + ":", gimli[key]);
}

for (let individualFish of fish) {
	//console.log(individualFish);
}


// Fecha

 const today = new Date();

 if (today.getDate() === 1 && today.getMonth() === 6) {
	console.log("Es primero de julio");
 } else {
	console.log("No es primero de julio");
 }