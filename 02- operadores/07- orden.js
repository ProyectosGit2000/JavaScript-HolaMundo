let resultado = 8 / (2 * (2 + 2))
console.log(resultado);

let resultado2 = 4 + 8 + (8 / 2 + (100 + 40)) - 10;
console.log(resultado2);

function multiplicacionOrdenada (num1, num2) {
    let operacion = 8 + num1 *(num1 - num2) / 4 + (num2 * (7 * 2));
    return operacion;
}
let solucion = multiplicacionOrdenada(4, 2);
console.log(solucion, 'Esto es el resultado de mi funcion multiplicacion');

