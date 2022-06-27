let parameter = 10;
// console.log(typeof(parameter));

function nameOfFunction(parameter) {
    return parameter;
}

parameter = nameOfFunction(true);
// console.log(typeof(parameter));


const sum = function(x, y) {
    return x + y;
}

let suma = sum(10, 5);
// console.log(suma);

const multiply = (x, y) => {
    return x * y;
}

let product = multiply(3, 4);
//Cconsole.log(product);

const atom = [
    "Hidrógeno", 
    "Helio", 
    "Carbono", 
    "Nitrógeno"
];

let atom2 = atom.map(function(a) {return a.length;});

// console.log(atom2);

let atom3 = atom.map(a => a.length);

// console.log(atom3);

/*
function Person() {
    this.age = 0;

    setInterval(function growUp() {
        this.age++;
    }, 1000);

}
*/

// function Person() {
//     this.age = 0;

//     setInterval(() => {
//         this.age++;
//     }, 1000);

// }
// const p = new Person();

// Prototipos en JavaScript.

// const x = {};

// const y = [];

// // console.log(x.toString());

// function Hero(name, level) {
//     this.name = name;
//     this.level = level;
// }

// const hero1 = new Hero('Gandalf', 1);

// Hero.prototype.greet = function () {
//     return `${this.name} dice hola`;
// }

// function Warrior(name, level, weapon) {
//     Hero.call(this, name, level);
//     this.weapon = weapon;
// }

// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

// function Healer(name, level, weapon, spell) {
//     Warrior.call(this, name, level, weapon);
//     this.spell = spell;
// }

// Object.setPrototypeOf(Healer.prototype, Warrior.prototype);

// Warrior.prototype.attack = function() {
//     return `${this.name} lucha con ${this.weapon}`;
// }

// Healer.prototype.heal = function() {
//     return `${this.name} lanza ${this.spell}`;
// }

// Healer.prototype.greet = function() {
//     return `${this.name} dice buena salud.`;
// }

// const hero2 = new Warrior('Gimli', 1, 'hacha');
// const hero3 = new Healer('Elron', 1, 'sword', 'cura');


// // Objetos

// const person = {
//     name: "Homero",
//     location: "Springfield",
//     isAvailable: true,
//     showDetails() {
//         const accepting = this.isAvailable ? "está disponible" : "no está disponible";
//         console.log(`${this.name} ${accepting} en ${this.location}`);
//     }
// }

// const bart = Object.create(person);
// bart.name = "Bart";

// const keys = Object.keys(person);

// Object.keys(person).forEach( key => {
//     let value = person[key];
//     console.log(`${key}: ${value}`);
// })

// const values = Object.values(person);
// console.log(values);

// const entries = Object.entries(person);
// console.log(entries);

// const job = {
//     company: "Planta Nuclear de Springfield",
//     boss: "Montogomery Burns",
// }

// const fusion = Object.assign(hero1, hero3);
// console.log(fusion);

// //Object.seal(person); 
// person.name = "Marge";
// person.active = true;
// console.log(person);

// Clases

const x = function() {

}

const y = class {

}

const x1 = new x();

const y1 = new y();

class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    greet() {
        return `${this.name} dice hola.`;
    }
}

// Hero.prototype.greet =  function() {
//     return `${this.name} dice hola.`;
// }

const hero1 = new Hero("Gimli", 1);

class Mage extends Hero {
    constructor(name, level, spell) {
        super(name, level);
        this.spell = spell;
    }

    run() {
        return `${this.name} está corriendo.`;
    }
}

const hero2 = new Mage("Gandalf", 1, "hechizo");