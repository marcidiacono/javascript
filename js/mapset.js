console.log("Clase 28/06");

const map1 = new Map();

map1.set("name", "Luke");
map1.set("planet", "Tatooine");

const map2 = new Map([
    ["name", "Luke"],
    ["planet", "Tatooine"],
]);

const luke = {
    firstName: "Luke",
    lastName: "Skywalker",
    planet: "Tattoine",
}

const map3 = new Map();

map3.set("1", "Uno en texto");
map3.set(1, "Esto podríamos sobreescribir");
map3.set(1, "Número 1 numérico");
map3.set(true, "Esto es un boolean");

const obj1 = {obj: "obj"};

const obj2 = {
    [obj1]: "¿Qué pasa acá?"
}

// Pero en el caso de un map

const map4 = new Map();

map4.set(obj1, "¿Qué pasa acá?");
map4.set({}, "Uno más");
map4.set({}, "otro");
map4.set(obj1, "¿Y este otro?");

// map4.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// })

// for (const [key, value] of map4) {
//     console.log(`${key}: ${value}`);
// }

const set1 = new Set();

set1.add("Rojo");
set1.add("Amarillo");
set1.add("Verde");
set1.add("Rojo");
set1.add("ROJO");

// set1.forEach(value => console.log(value));

// for (const value of set1) {
//     console.log(value);
// }

const uniqueArray = [...new Set(
    [1, 2, 3, 3, 5, 5, 5, 2, 6, 3]
)];