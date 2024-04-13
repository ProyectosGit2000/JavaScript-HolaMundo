let user = {
    id : 1,
    name : 'Jordi',
    age : 24,
};

for (let prop in user) {
    console.log(prop, user[prop])
}

let cursos = ['Ciencias','Civica','Matematicas','Historia','Comunicacion','Ingles'];
for (let posicionCursos in cursos) {
    console.log('La posicion de los cursos son: '+posicionCursos);
}
console.log('=======')
for ( let valorCurso of cursos ) {
    console.log('El valor del curso es: '+valorCurso);
}