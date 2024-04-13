let a = 0;
while (a < 10) {
    if (a % 2 == 0) {
        console.log('El numero '+ a + ' es par con while');
    }
    a++;
}
console.log('=====================')
for (let a = 0 ; a <= 10 ; a++ ) {
    if (a % 2 == 0) {
        console.log('El numero '+ a + ' es par con for');
    } else if(a % 2 !== 0) {
        console.log('El numero '+ a + ' es impar con for');
    }
}
// console.log('=====================')
// let user = 0;
// let persona = 'Jordi'
// do {
//     let usuario = prompt('Ingrese su usuario');
//     if ( usuario !== persona ) {
//         alert('Vuelva a ingresar el usuario')
//     }
//     user++;
// } while (user === persona )


