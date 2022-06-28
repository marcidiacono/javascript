console.log("Clase 28/06 - generators");

function* generatorFunction1() {

}

const generatorFunction2 = function* () {

}

const generatorObject = {
    *generatorMethod() {

    },
}

class GeneratorClass {
    constructor() {

    }

    *generatorMethod() {

    }
}

// Esta es una función tradicional de JS.
function sum(a, b) {
    return a + b;
}

const suma = sum(5, 6);

// Esta es una función generadora... ¿Qué devuelve?
function* greetFunction() {
    return "Hola Mundo Generador";
}

let generator = greetFunction();

function* colorGenerator() {
    yield "Rojo"
    yield "Azul"
    yield "Amarillo"
    yield "Blanco"
}

generator = colorGenerator();

// for (const value of generator) {
//     console.log(value);
// }

// const valuesGenerator = [...generator]; 

function* numberGenerator() {
    try {
        yield 1
        yield 2
        yield 3
    } catch (error) {
        console.log(error);
    }
}

generator = numberGenerator();

function* delegate() {
    yield 4
    yield 5
}

function* main() {
    yield 1
    yield 2
    yield 3
    yield* delegate()
}

generator = main();

function* increment() {
    let i = 0;
    while (true) {
        yield i++
    }
}

generator = increment();

function* consoleGenerator(value) {
    /*
    console.log(yield)
    console.log(yield)
    return "Fin"
    */
   while (true) {
        value = yield value * 10
   }

}

const gen = consoleGenerator(0);

for (let i = 0; i < 5; i++) {
    console.log(gen.next(i).value);
} 


