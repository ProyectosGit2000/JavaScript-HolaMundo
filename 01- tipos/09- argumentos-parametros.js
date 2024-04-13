function suma (a, b) {
    console.log(arguments);//? para ver la referencia de mis valores en la funcion suma...
    return a + b ;
}
let resultado = suma(10, 100, 50, 24, 69);//*referencia 
console.log(resultado);
console.log(typeof suma);