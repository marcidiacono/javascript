// Pasar un evento a un detector de eventos

document.addEventListener("keydown", event => {
    const element = document.querySelector("p");

    // Establecer variables para el código keydown
    const a = "KeyA";
    const s = "KeyS";
    const d = "KeyD";
    const w = "KeyW";

    // Establecer la dirección para cda código
    switch (event.code) {
        case a:
            element.textContent = "Izquierda";
            break;
        case s:
            element.textContent = "Abajo";
            break;    
        case d:
            element.textContent = "Derecha";
            break;
        case w:
            element.textContent = "Arriba";
            break;
    }
})