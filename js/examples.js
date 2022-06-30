// Un ejemplo de función asincrónica
function asynchronousRequest(args, callback) {
    // Lanza un error si no se pasan argumentos
    if (!args) {
        return callback(new Error("Oh oh! Algo salió mal."))
    } else {
        return setTimeout(
            // Agregamos un número aleatorio para que se parezca a una
            // función asincrónica real.
            () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}), 500,
        )
    }
}
  
// Peticiones asincrónicas anidadas
function callbackHell() {
    asynchronousRequest("First", function first(error, response) {
        if (error) {
            console.log(error)
            return
        }
        console.log(response.body)
        asynchronousRequest("Second", function second(error, response) {
            if (error) {
                console.log(error)
                return
            }
            console.log(response.body)
            asynchronousRequest(null, function third(error, response) {
                if (error) {
                    console.log(error)
                    return
                }
                console.log(response.body)
            })
        })
    })
}
  
callbackHell();
  