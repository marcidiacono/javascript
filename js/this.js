console.log("Clase 28/06");

// console.log(this);

function printThis() {
    console.log(this);
}

// printThis();

// const argentina = {
//     name: "Argentina",
//     independenceYear: 1816,
//     details: {
//         language: 'español',
//         currency: 'peso',
//         printDetails() {
//             console.log(`El idioma es ${this.language} y la moneda es ${this.currency}`);
//             console.log('Contexto details: ' + this);
//         }
//     },

//     describe() {
//         console.log(`${this.name} se independizó en ${this.independenceYear}`);
//         console.log('Contexto argentina: ' + this);
//     }

// }

// argentina.describe();

// argentina.details.printDetails();

// function Country(name, independenceYear) {
//     this.name = name,
//     this.independenceYear = independenceYear,
//     this.describe = function() {
//         console.log(`${this.name} se independizó en ${this.independenceYear}`);
//     }
// }

class Country {
    constructor(name, independenceYear) {
        this.name = name
        this.independenceYear = independenceYear
    }

    describe() {
        console.log(`${this.name} se independizó en ${this.independenceYear}`);
    }
}

const argentina = new Country("Argentina", 1816);

// argentina.describe();

// const button = document.createElement("button");
// button.textContent = "Click me";
// document.body.append(button);
// button.addEventListener('click', function(event) {
//     console.log(this);
// });


// Contexto explícito...



const book1 = {
    title: "El Aleph",
    author: "Jorge Luis Borges",
}

const book2 = {
    title: "Análisis Numérico para Ingenieros",
    author: "Chapra",
}

function summary() {
    console.log(`${this.title} fue escrito por ${this.author}`);
}

function addSummary(genre, year) {
    console.log(`${this.title} fue escrito por ${this.author}. Es ${genre} en el año ${year}`);
}

const alephSummary = summary.bind(book1);

const anSummary = summary.bind(book2);

// summary.call(book1);

// summary.apply(book1);

// printThis.call(book1);

// printThis.apply(book1);

// addSummary.call(book1, "ficción literaria", 1949);

// addSummary.apply(book1, ["ficción literaria", 1949]);

// alephSummary();

// anSummary();

// Funciones flecha ...

const whoAmI = {
    name: "Homero Simpson",

    regularFunction: function() {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
}

whoAmI.regularFunction();

whoAmI.arrowFunction();

const button = document.createElement("button");
button.textContent = "Click me";
document.body.append(button);

class Display {
    constructor() {
        this.buttonText = "Texto Nuevo"

        button.addEventListener('click', event => {
            event.target.textContent = this.buttonText;
        });
    }
    
}

new Display()

