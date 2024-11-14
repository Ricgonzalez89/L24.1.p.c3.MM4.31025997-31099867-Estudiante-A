/* 1. ESTUDIANTE-A
|* Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota máxima es 20, 
|* y que los estudiantes aprueban con un mínimo de 10.
|* Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que retorne 
|* los estudiantes de un semestre dado.
|* La estructura de un objeto estudiante es, p.ej.: 
|* {nombre: ‘Luis’, semestre: 5, nota: 14} 
|* Función: estudiantesSemestre.
|* Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
|* Retorno: array de objetos estudiante que pertenecen al semestre indicado.
*/
let estudiantesSemestre = (estudiantes, semestre) => {
    let estud = estudiantes.filter((estudiante) => estudiante.semestre === semestre);
    return estud;
};

let estudiantes = [
    {nombre: "Petra", semestre: 5, nota: 19},
    {nombre: "Carlos", semestre: 1, nota: 18},
    {nombre: "María", semestre: 2, nota: 20},
    {nombre: "Ana", semestre: 3, nota: 15},
    {nombre: "Juan", semestre: 5, nota: 20},
    {nombre: "Alfonso", semestre: 1, nota: 19},
    {nombre: "Clara", semestre: 3, nota: 18}
];

let salida = document.getElementById("salida");
let estud5 = estudiantesSemestre(estudiantes, 5);
let estud1 = estudiantesSemestre(estudiantes, 1);

salida.innerHTML += `<br>Estudiantes del semestre 5: `
estud5.forEach((est5) => {
    salida.innerHTML += `<br>Nombre: ${est5.nombre} - Nota: ${est5.nota}`;
});
salida.innerHTML += `<br><br>Estudiantes del semestre 1: `
estud1.forEach((est1) => {
    salida.innerHTML += `<br>Nombre: ${est1.nombre} - Nota: ${est1.nota}`;
});
