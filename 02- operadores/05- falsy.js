//short-circuit
/**
**Falso
**false
**0
**''
**null
**undefined
**NaN
*/
let nombre = 'chanchito feliz';
let username = nombre || 'anonimo';
console.log(username)

function fn1() {
    console.log('Soy la funcion uno');
    return true;
}
function fn2() {
    console.log('Soy la funcion dos');
    return false;
}
let x = fn1() && fn2();