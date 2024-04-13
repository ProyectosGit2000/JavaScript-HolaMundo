//expresion ? 'si es true' : 'si es false'
let edad = 20;
let acceso = edad > 17 ? 'Permitir el ingreso :D' : 'No puede ingresar :C';
console.log(acceso);

let pagoEntrada = true;
let ingreso = pagoEntrada === true ? 'Puede ingresar sin problema' : 'Usted no pago asi que no puede ingresar';   
console.log(ingreso);

let operacion = 8 + (10 * 9);
let evaluacion = operacion > 20 ? 'La operacion es mayor a 20' : 'La operacion es menor a 20';
console.log(evaluacion);

function promedio (not1,not2,not3) {
    let primeraEvalucion = Math.floor((not1 + not2 + not3) / 3);
    let prom = primeraEvalucion > 13 ? 'Usted esta aprobado con ' + primeraEvalucion : 'Usted esta desaprobado con ' + primeraEvalucion ;
    return prom;
}
let resultado = promedio(14, 10, 20);
console.log(resultado);

