console.log("30/06/2022 - asynchrony");

// first();
// second(third);

function first() {
    console.log(1);
}

function second(callback) {
    setTimeout(() =>{
        console.log(2);
        callback();
    }, 0);
} 

function third() {
    console.log(3);
}

function func() {
    console.log("Simplemente una función");
}

function otherFunc(callback) {
    callback();
}

function pyramidOfDomm() {
    setTimeout(() => {
        console.log(1);
        setTimeout(() => {
            console.log(2);
            setTimeout(() => {
                console.log(3);
            }, 500);
        }, 3000);
    }, 1000);
}

// Promesas...

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos devueltos por la API");
    }, 3000);
});

promise
    .then(response1 => {
        return response1 + " - agrego algo.";
    })
    .then(response2 => {
        //console.log(response2);
    })


function getProducts(onSuccess) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (onSuccess) {
                resolve([
                    {id: 1, name: "Samsung Galaxy"},
                    {id: 2, name: "Yerba Hoja Verde"},
                    {id: 3, name: "Caramelos"},
                ]);
            } else {
                reject("Ha ocurrido un error");
            }
        }, 2000);
    })
}   

// getProducts(false)
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("finally");
//     });


// fetch("https://api.github.com/users/octocat")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

async function getUser() {
    try {
        const response = await fetch("https://api.githu.com/users/octocat")
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUser();