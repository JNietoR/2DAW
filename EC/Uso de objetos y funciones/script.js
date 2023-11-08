/* 
Crea un objeto TUTOR, el cual tendrá los campos: nombre, edad, DNI y titulo universitario.
*/

let tutor = {
    nombre: 'Evelyn',
    edad: 25,
    dni: '24242424A',
    titulo: 'Ingenieria Informatica',
    mostrar: function () {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}, Título: ${this.titulo}`;
    },
    cambiarNombre: function (nuevoNombre) {
        this.nombre = nuevoNombre;
    }
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
    despliegueWeb,
    mostrar: function () {
        let asignaturasInfo = [];
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] === 'object') {
                const asignatura = this[key];
                asignaturasInfo.push(`Nombre: ${asignatura.nombre}, Curso: ${asignatura.curso}, Horas: ${asignatura.horas}`);
            }
        }
        return asignaturasInfo.join('\n');
    },
    cambiarHoras: function (asignaturaNombre, nuevasHoras) {
        this[asignaturaNombre].horas = nuevasHoras;
    },

    /*
    mostrar: function (asignaturaNombre) {
        const asignatura = this[asignaturaNombre];
        return `Nombre: ${asignatura.nombre}, Curso: ${asignatura.curso}, Horas: ${asignatura.horas}`;
    },
    cambiarHoras: function (asignaturaNombre, nuevasHoras) {
        this[asignaturaNombre].horas = nuevasHoras;
    },
    */
};

/* 
Haciendo uso del objeto TUTOR creado en el ejercicio 1 y de la lista de objetos ASIGNATURA creada en el
ejercicio 2, define un objeto ALUMNO.
Un alumno tendrá un nombre, una edad, el ciclo que estudia, el curso en el que está (un número entero), un
tutor, una lista de asignaturas y una lista de nota media de cada asignatura. 
*/

let notasMedias = {
    entornoCliente: 10,
    entornoServidor: 9,
    diseñoWeb: 9,
    despliegueWeb: 10
};

let alumnoM = {
    nombre: 'Manuel',
    edad: 20,
    ciclo: 'DAW',
    curso: 2,
    tutor: tutor,
    asignaturas: asignaturas,
    notasMedias: notasMedias,
    calcularMedia: function () {
        let notas = Object.values(this.notasMedias);
        let sum = 0;
        for (let nota of notas) {
            sum += nota;
        }
        return sum / notas.length;
    },
    
    mediaAsignatura: function () {
        let tablaNotas = document.createElement('table');
        tablaNotas.innerHTML = `
            <tr>
                <th>Asignatura</th>
                <th>Nota Media</th>
            </tr>
        `;
        for (const asignatura in this.notasMedias) {
            if (this.notasMedias.hasOwnProperty(asignatura)) {
                const nota = this.notasMedias[asignatura];
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${this.asignaturas[asignatura].nombre}</td>
                    <td class="text-center">${nota}</td>
                `;
                tablaNotas.appendChild(fila);
            }
        }
        
        const contenedorTabla = document.getElementById('tablaNotas');
        contenedorTabla.appendChild(tablaNotas);
    },
    mostrar: function () {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Ciclo: ${this.ciclo}`);
        console.log(`Curso: ${this.curso}`);
        console.log(`Tutor: ${this.tutor.nombre}`);

        console.log('Asignaturas:');
        for (let asignaturaKey in this.asignaturas) {
            if (this.asignaturas.hasOwnProperty(asignaturaKey)) {
                let asignatura = this.asignaturas[asignaturaKey];
                console.log(`  - ${asignatura.nombre} (Curso ${asignatura.curso}, Horas: ${asignatura.horas})`);
            }
        }

        console.log('Notas Medias:');
        for (let notaKey in this.notasMedias) {
            if (this.notasMedias.hasOwnProperty(notaKey)) {
                let nota = this.notasMedias[notaKey];
                console.log(`  - ${notaKey}: ${nota}`);
            }
        }

        console.log(`Media: ${this.calcularMedia()}`);
    },
};

let alumnoJ = {
    nombre: 'Jorge',
    edad: 32,
    ciclo: 'DAW',
    curso: 2,
    tutor: tutor,
    asignaturas: asignaturas,
    notasMedias: notasMedias,
    calcularMedia: function () {
        let notas = Object.values(this.notasMedias);
        let sum = 0;
        for (let nota of notas) {
            sum += nota;
        }
        return sum / notas.length;
    },
    mediaAsignatura: function () {
        let tablaNotas = document.createElement('table');
        tablaNotas.innerHTML = `
            <tr>
                <th>Asignatura</th>
                <th>Nota Media</th>
            </tr>
        `;
        for (const asignatura in this.notasMedias) {
            if (this.notasMedias.hasOwnProperty(asignatura)) {
                const nota = this.notasMedias[asignatura];
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${this.asignaturas[asignatura].nombre}</td>
                    <td class="text-center">${nota}</td>
                `;
                tablaNotas.appendChild(fila);
            }
        }
        
        const contenedorTabla = document.getElementById('tablaNotas');
        contenedorTabla.appendChild(tablaNotas);
    },
    
    mostrar: function () {
        let tablaInfoAlumno = document.getElementById('tablaInfoAlumno');
        let tablaContent = `
            <tr>
                <th colspan="2" class="text-center">Información del Alumno</th>
            </tr>
            <tr>
                <th>Nombre:</th>
                <td class="text-center">${this.nombre}</td>
            </tr>
            <tr>
                <th>Edad:</th>
                <td class="text-center">${this.edad}</td>
            </tr>
            <tr>
                <th>Ciclo:</th>
                <td class="text-center">${this.ciclo}</td>
            </tr>
            <tr>
                <th>Curso:</th>
                <td class="text-center">${this.curso}</td>
            </tr>
            <tr>
                <th>Tutor:</th>
                <td class="text-center">${this.tutor.nombre}</td>
            </tr>
            <tr>
                <th class="text-center">Asignaturas</th>
                <th>Nota Media</th>
            </tr>
        `;
    
        for (const asignatura in this.notasMedias) {
            if (this.notasMedias.hasOwnProperty(asignatura)) {
                tablaContent += `
                    <tr>
                        <td>${this.asignaturas[asignatura].nombre}</td>
                        <td class="text-center">${this.notasMedias[asignatura]}</td>
                    </tr>
                `;
            }
        }
    
        tablaContent += `
            <tr>
                <th>Media:</th>
                <td class="text-center">${this.calcularMedia()}</td>
            </tr>
        `;
    
        tablaInfoAlumno.innerHTML = tablaContent;
    }
    
};


let alumnos = [
    alumnoM,
    alumnoJ
];



function mostrarAlumno() {
    let tablaalumno = document.getElementById('alumno');
    let tablaContent = ``
    for (const alumno of alumnos) {
        tablaContent += `
        <tr>
       <th colspan="2" class="text-center">Información del Alumno</th>
   </tr>
   <tr>
       <th>Nombre:</th>
       <td class="text-center">${alumno.nombre}</td>
   </tr>
   <tr>
       <th>Edad:</th>
       <td class="text-center">${alumno.edad}</td>
   </tr>
   <tr>
       <th>Ciclo:</th>
       <td class="text-center">${alumno.ciclo}</td>
   </tr>
   <tr>
       <th>Curso:</th>
       <td class="text-center">${alumno.curso}</td>
   </tr>
   <tr>
       <th>Tutor:</th>
       <td class="text-center">${alumno.tutor.nombre}</td>
   </tr>
   <tr>
       <th class="text-center">Asignaturas</th><th>Nota Media</th>
   </tr>
   <tr>
       <td>${alumno.asignaturas.entornoCliente.nombre}</td>
       <td class="text-center">${alumno.notasMedias.entornoCliente}</td>
   </tr>
   <tr>
       <td>${alumno.asignaturas.entornoServidor.nombre}</td>
       <td class="text-center">${alumno.notasMedias.entornoServidor}</td>
   </tr>
   <tr>
       <td>${alumno.asignaturas.diseñoWeb.nombre}</td>
       <td class="text-center">${alumno.notasMedias.diseñoWeb}</td>
   </tr>
   <tr>
       <td>${alumno.asignaturas.despliegueWeb.nombre}</td>
       <td class="text-center">${alumno.notasMedias.despliegueWeb}</td>
   </tr>
        `
    }

    tablaalumno.innerHTML += tablaContent;
};
/*

function mostrarInformacionAlumno(alumno, divId) {

   let divAlumno = document.getElementById(divId);
   divAlumno.innerHTML = `
   <table border="1">
   <tr>
       <th colspan="2" class="text-center">Información del Alumno</th>
   </tr>
   <tr>
       <th>Nombre:</th>
       <td class="text-center">${alumno.nombre}</td>
   </tr>
   <tr>
       <th>Edad:</th>
       <td class="text-center">${alumno.edad}</td>
   </tr>
   <tr>
       <th>Ciclo:</th>
       <td class="text-center">${alumno.ciclo}</td>
   </tr>
   <tr>
       <th>Curso:</th>
       <td class="text-center">${alumno.curso}</td>
   </tr>
   <tr>
       <th>Tutor:</th>
       <td class="text-center">${alumno.tutor.nombre}</td>
   </tr>
   <tr>
       <th class="text-center">Asignatura</th><th>Nota Media</th>
   </tr>
   <tr>
       <td>${alumno.asignaturas.entornoCliente.nombre}</td>
       <td class="text-center">${alumno.notasMedias.entornoCliente}</td>
   </tr>
   <tr>
       <td>${alumno.asignaturas.entornoServidor.nombre}</td>
       <td class="text-center">${alumno.notasMedias.entornoServidor}</td>
   </tr>
   <tr>
       <td>${alumno.asignaturas.diseñoWeb.nombre}</td>
       <td class="text-center">${alumno.notasMedias.diseñoWeb}</td>
   </tr>
   <tr>
       <td>${alumno.asignaturas.despliegueWeb.nombre}</td>
       <td class="text-center">${alumno.notasMedias.despliegueWeb}</td>
   </tr>
</table>
`;
}

*/
