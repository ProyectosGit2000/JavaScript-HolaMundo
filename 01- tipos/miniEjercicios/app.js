const numero = 12;
const numero2 = 20; 
console.log(numero2);

const datos = {
    nombre : 'Jose',
    apellido: 'Chavez',
    edad : 24,
}
console.log(datos);
console.log(datos.nombre);
console.log(datos['apellido']);
delete datos.edad; //para borrar un dato
console.log(datos);

const llave = 'nombre';
console.log(datos[llave]);

const cuaderno = {
    marca : 'norma',
    color : 'rojo',
    tipo : 'cuadriculado',
    precio : 4.50,
    fechaFabricacion : '27 de febrero del 1910',
}
console.log(cuaderno);
cuaderno.marca = 'Loro';
console.log(cuaderno.marca);//acabo de cambiar el valor

//?arrays
const planetas = ['saturno','tierra','jupiter','urano','marte'];
console.log(planetas);
console.log(planetas[2]);
planetas[2] = 'pluton';
console.log(planetas);

//todo: funciones
function saludo () {
    return 'Hola a todos mis amigos';
}
const saludando = saludo();
console.log(saludando);

function multiplicacion (numero1, numero2) {
    console.log('Imprimiendo una multiplicacion, jejeje');
    console.log(arguments)
    return numero1 * Math.sqrt(numero2);
}
let operacion = multiplicacion(2,9);
let operacion2 = multiplicacion(10,100);
let operacion3 = multiplicacion(4,16);
console.log(operacion);
