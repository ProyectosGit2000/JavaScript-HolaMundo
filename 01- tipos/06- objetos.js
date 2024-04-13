//Personaje de tv
let nombre1 = "Tanjiro";
let anime1 = "Demon Slayer";
let edad1 = 16;

let personaje = {
    nombre : 'Tanjiro',
    anime : 'Demon Slayer',
    edad : 16,
}
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

let llave = 'edad'
personaje[llave] = 16;

delete personaje.anime;
console.log(personaje);  

let datosPersonales = {
    nombre : 'Jordi Brando',
    apellido : 'Chavarry De La Cruz',
    edad : 24,
    nacionalidad : 'Peruano',
}
console.log(datosPersonales);
console.log(datosPersonales.nombre);
console.log(datosPersonales['nacionalidad']);

datosPersonales.nacionalidad = 'Argentino';
console.log(datosPersonales);
delete datosPersonales.apellido;
console.log(datosPersonales);

let imprimir = 'nacionalidad';
datosPersonales[imprimir] = 'Chileno';
console.log(datosPersonales);