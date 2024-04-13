let a = 0;
while (a < 10) {
    if (a % 2 == 0) {
        console.log('El numero '+ a + ' es par con while');
    }
    a++;
}
console.log('=========================')
let b = 0
do {
    if (b % 2 == 0) {
        console.log('El numero '+b+' es par con do while')
    }
    b++;
} while( b < 10 )