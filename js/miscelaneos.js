console.log("29/06/2022 - Miscelaneos");

function square(x = 0) {
    // if (typeof x === "undefined") {
    //     x = 0;
    // }
    return x * x;
}

function manyParams(number = 10, string = "Hola", boolean = true, object = {id : 1,}, array = [3, 4, 6,], nullValue = null) {
    console.log(number, string, boolean, object, array, nullValue);
}

function setting(options = {}) {
    const { brightness, contrast } = options;
}

function createUser(name, age, userObj = { name, age }) {
    return userObj;
}

function sum(a, b = 1) {
    return a + b;
}

function getRandom() {
    return Math.floor(Math.random() * 10);
}

function cube(x = getRandom()) {
    return x * x * x;
}

function equal(x = getRandom(), y = Math.pow(x, 2)) {
    return x === y;
}

function excecuteFunction(
    func = function inner() {
        return 100;
    }) {

    return func();
}

function testParam(x = []) {
    return x.sort();
}

// ********************************************
// DESESTRUCTURACIÓN

// Desestructuración de Objetos

const note = {
    id: 1,
    title: "Mi nota",
    date: "29/06/2022",
    author: {
        firstName: "Homero",
        lastName: "Simpson",
    },
    tags: ["apunte", "resumen", "parcial"],
}

// const id = note.id;
// const title = note.title;
// const date = note.date;

const { id: idNote, title, date, author, author: { firstName, lastName }, } = note;

// Esto desestructura utilizando propiedades del objeto
let string = "Una cadena";
const { length } = string;
string = "Otra cadena";

const { largo } = "Una cadena";

// Desestructuración de Arreglos o Matrices

const numbers = [ 25, 30, 12, ];

// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];

const [ first, second, third, ] = numbers;

const [ primero,, tercero, ] = numbers;

const nestedNumbers = [ 1, 2, [ 3, 4, ], 5, ];

const [ uno, dos, [ tres, cuatro ], cinco ] = nestedNumbers;

// Object.entries(note).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });

// for (let [ key, value ] of Object.entries(note)) {
//     console.log(`${key}: ${value}`);
// }

// Desestructuración combinada
// No es que DEBA agregar las etiquetas... es que les estoy
// cambiando el nombre a la variable...
const {
    id: id1,
    title: title1,
    date: date1,
    author : {
        firstName: firstName1,
        lastName: lastName1,
    },
    tags: [fTag, sTag, tTag],
} = note;

// console.log(id1, title1, date1, firstName1, lastName1, fTag, sTag, tTag);

// ********************************************
// SINTAXIS EXTENDIDA o SPREAD -> (...) 

// Con matrices

const primaryColors = [ "rojo", "amarillo", "azul", ];

const secondaryColors = [ "naranja", "violeta", "verde", ];

//const colors = primaryColors.concat(secondaryColors);

const colors = [ ...primaryColors, ...secondaryColors ];

const users = [
    { id: 1, name: "Homero", },
    { id: 2, name: "Bart", },
];

const newUser = { 
    id: 3, 
    name: "Lisa", 
    location: {
        lat: 40.4567,
        long: 23.4567,
    }
};

//users.push(newUser);

const updatedUsers = [ ...users, newUser ];

const copyArr = [ ...primaryColors ];

function popArr([ ...arr ]) {
    arr.pop();
    console.log(arr);
}

// const lisa = Object.assign({}, newUser);

const lisa = { ...newUser, location: { ...newUser.location, name: "Sringfiled",},  isActive: true };

function addProp({ ...obj }) {
    obj.newProp = "hola";
    console.log(obj);
}


// Parámetros REST

function restTest(...args) {
    console.log(args);
}

function func(one, two, ...args) {
    console.log(one, two, args);
}

const arrowF = (...args) => {
    console.log(args);
}

const { id: idNuevo, ...rest } = note;