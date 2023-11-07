/* 
Crea un objeto TUTOR, el cual tendrá los campos: nombre, edad, DNI y titulo universitario.
*/

let tutor = {
    nombre: 'Evelyn',
    edad: 25,
    dni: '24242424A',
    titulo: 'Ingenieria Informatica'
};

/*
Crea un objeto ASIGNATURA. De cada asignatura necesitamos saber su nombre, el curso al que pertenece (un número entero) y el número de horas totales. 
A continuación crea una lista de, al menos, 4 objetos asignaturas diferentes.
*/

let entornoCliente = {
    nombre: 'Desarrollo web en entorno Cliente',
    curso: 2,
    horas: 4
};
let entornoServidor = {
    nombre: 'Desarrollo web en entorno Servidor',
    curso: 2,
    horas: 4
};
let diseñoWeb = {
    nombre: 'Diseño de interfaces Web',
    curso: 2,
    horas: 4
};
let despliegueWeb = {
    nombre: 'Despliegue de aplicaciones Web',
    curso: 2,
    horas: 4
};

let asignaturas = {
    entornoCliente,
    entornoServidor,
    diseñoWeb,
    despliegueWeb
};

/* 
Haciendo uso del objeto TUTOR creado en el ejercicio 1 y de la lista de objetos ASIGNATURA creada en el
ejercicio 2, define un objeto ALUMNO.
Un alumno tendrá un nombre, una edad, el ciclo que estudia, el curso en el que está (un número entero), un
tutor, una lista de asignaturas y una lista de nota media de cada asignatura. 
*/

let notasMedias = {
    notaEntornoCliente: 10,
    notaEntornoServidor: 10,
    notaDiseñoWeb: 10,
    notaDespliegueWeb: 10
};

let alumnoJ = {
    nombre: 'Jorge',
    edad:32,
    ciclo:'DAW',
    curso:2,
    tutor:tutor,
    asignaturas:asignaturas,
    notasMedias:notasMedias
};
let alumnoM = {
    nombre: 'Manuel',
    edad:21,
    ciclo:'DAW',
    curso:2,
    tutor:tutor,
    asignaturas:asignaturas,
    notasMedias:notasMedias
};

function mostrarInformacionAlumno(alumno, divId) {
    let divAlumno = document.getElementById(divId);
    divAlumno.innerHTML = `
    <table border="1">
    <tr>
        <th colspan="2">Información del Alumno</th>
    </tr>
    <tr>
        <th>Nombre:</th>
        <td>${alumno.nombre}</td>
    </tr>
    <tr>
        <th>Edad:</th>
        <td>${alumno.edad}</td>
    </tr>
    <tr>
        <th>Ciclo:</th>
        <td>${alumno.ciclo}</td>
    </tr>
    <tr>
        <th>Curso:</th>
        <td>${alumno.curso}</td>
    </tr>
    <tr>
        <th>Tutor:</th>
        <td>${alumno.tutor.nombre}</td>
    </tr>
    <tr>
        <th>Asignatura</th><th>Nota Media</th>
    </tr>
    <tr>
        <td>${alumno.asignaturas.entornoCliente.nombre}</td>
        <td>${alumno.notasMedias.notaEntornoCliente}</td>
    </tr>
    <tr>
        <td>${alumno.asignaturas.entornoServidor.nombre}</td>
        <td>${alumno.notasMedias.notaEntornoServidor}</td>
    </tr>
    <tr>
        <td>${alumno.asignaturas.diseñoWeb.nombre}</td>
        <td>${alumno.notasMedias.notaDiseñoWeb}</td>
    </tr>
    <tr>
        <td>${alumno.asignaturas.despliegueWeb.nombre}</td>
        <td>${alumno.notasMedias.notaDespliegueWeb}</td>
    </tr>
</table>
`;
}