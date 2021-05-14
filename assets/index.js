departments = ['SANTANDER', 'ARAUCA'];

const validatePlaces = (d, valid) => {
    if (d === "") {
        return false;
    }
    if (valid.includes(d)) {
        return true;
    } else {
        alert('valor no valido');
        return false;
    }
}
const createAlert = (txt, options) => {
    let valid = false;
    let d = "";
    while (valid === false) {

        d = String(prompt(`${txt}: ${options}`)).toUpperCase();
        valid = validatePlaces(d, options);
    }
    return d

}
const cities = {
    'SANTANDER': ["BUCARMANGA", "GIRON"],
    'ARAUCA': ["TAME",
        "SARAVENA"
    ]
}
const foods = {
    "BUCARMANGA": ["MUTE", "HORMIGA CULONA"],
    "GIRON": ["MARACUMANGO", "HELADO"],
    "TAME": ["MAZORCAS DULCES", "BONES"],
    "SARAVENA": ["ORO AZUL", "CIELITO"],
}
const recipes = {
    "MUTE": "Magia y dedicacion",
    "HORMIGA CULONA": "Belleza de la tierra",
    "MARACUMANGO": "Flora",
    "HELADO": "Procesamiento",
    "MAZORCAS DULCES": "Magia",
    "BONES": "Bellos azules ojos",
    "ORO AZUL ": "    Alfajoles ",
    "CIELITO": "Magia"
}
const department = createAlert('Ey bro ingresa el departamento que quieres:', departments);
const city = createAlert('Ey bro ingresa la ciudad que quieres:', cities[department]);
const food = createAlert('Ey bro ingresa la comida que quieres:', foods[city]);
const recipe = createAlert('Ey bro aqui tienes:', recipes[food]);
console.log(recipe);