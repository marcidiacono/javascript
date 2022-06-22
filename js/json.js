const homer = { 
    first_name : "Homero",
    last_name : "Simpson",
    location : "Springfield",
    online : true,
    followers : 878,
    full_name : function() {
        return this.first_name + " " + this.last_name;
    }
}

const bart = `{"first_name" : "Bart", "last_name" : "Simpson", "location" : "Springfield", "online" : true, "followers" : 878}`;

const userBart = {
    "first_name" : "Bart",
    "last_name" : "Simpson",
    "location" : "Springfield",
    "parents" : [
        {
            "first_name" : "Homero",
            "last_name" : "Simpson"
        },
        {
            "first_name" : "Marge",
            "last_name" : "Bouvier"
        }
    ],
    "pets" : [
        {
            "breed" : "galgo",
            "name" : "Ayudante de Santa"
        },
        {
            "breed" : "marca gato",
            "name" : "Bola de Nieve"
        }
    ]
};

const str1 = JSON.stringify(homer);
const str2 = JSON.stringify(userBart);

const obj1 = JSON.parse(bart);