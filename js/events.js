// Función para modificar el contentido del texto del párrafo

const changeText = () => {
    const p = document.querySelector("p");
    //p.textContent = "Cambié debido a un controlador de eventos en línea.";
    //p.textContent = "Cambié debido a una propiedad del controlador de eventos.";
    p.textContent = "Cambié debido a un detector de eventos.";
}

const alertText = () => {
    alert("¿Cambiaré?");
}

// Agregar controlador de eventos como una propiedad del elemento botón.
const button = document.querySelector("button");

/* Con propiedad del cotrolador de eventos.
button.onclick = changeText;

// Cuidado los eventos se pueden sobreescribir.
button.onclick = alertText;
*/

/*
button.addEventListener("click", changeText);
button.addEventListener("click", alertText);
*/

const p = document.querySelector("p");

button.addEventListener("click", () => {
    p.textContent = "¿Cambiaré?"
})

button.addEventListener("click", alertText);

button.removeEventListener("click", alertText);


// Probando las propiedades de key y code
document.addEventListener("keydown", e => {
    console.log("key: " + e.key);
    console.log("code: " + e.code);
})

