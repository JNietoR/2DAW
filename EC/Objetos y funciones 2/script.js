// Definición del objeto TUTOR
let TUTOR = {
    nombre: "Evelyn",
    edad: 26,
    dni: "24242424A",
    titulo: "Ingeniera Informática",
    // Ejercicio 5
    mostrar: function () {
        return `Nombre: ${this.nombre}<br>Edad: ${this.edad}<br>DNI: ${this.dni}<br>Título Universitario: ${this.titulo}`;
    },
    cambiarNombre: function (nuevoNombre) {
        this.nombre = nuevoNombre;
    }
};


let asignaturas = [
    {
        nombre: "Desarrollo web en entorno Cliente",
        curso: 2,
        horasTotales: 80,
        // ejercicio 6 metodos
        mostrar: function () {
            return `Nombre: ${this.nombre}<br>Curso: ${this.curso}<br>Horas Totales: ${this.horasTotales}`;
        },
        cambiarHoras: function (nueva) {
            this.horasTotales = nueva;
        }
    },
    {
        nombre: "Desarrollo web en entorno Servidor",
        curso: 2,
        horasTotales: 70,
        mostrar: function () {
            return `Nombre: ${this.nombre}<br>Curso: ${this.curso}<br>Horas Totales: ${this.horasTotales}`;
        },
        cambiarHoras: function (nueva) {
            this.horasTotales = nueva;
        }
    },
    {
        nombre: "Despliegue de aplicaciones Web",
        curso: 2,
        horasTotales: 90,
        mostrar: function () {
            return `Nombre: ${this.nombre}<br>Curso: ${this.curso}<br>Horas Totales: ${this.horasTotales}`;
        },
        cambiarHoras: function (nueva) {
            this.horasTotales = nueva;
        }
    },
    {
        nombre: "Diseño de interfaces Web",
        curso: 2,
        horasTotales: 80,
        mostrar: function () {
            return `Nombre: ${this.nombre}<br>Curso: ${this.curso}<br>Horas Totales: ${this.horasTotales}`;
        },
        cambiarHoras: function (nueva) {
            this.horasTotales = nueva;
        }
    },
];
let ALUMNO = {
    nombre: "Jose Manuel García Muñoz",
    edad: 20,
    ciclo: "DAM",   
    curso: 1,
    tutor: TUTOR,
    asignaturas: asignaturas,
    notasMedias: [6, 8, 9.5, 8.5], 
    calcularMedia: function () {
        var sum = 0;
        for (var i = 0; i < this.notasMedias.length; i++) {
            sum += this.notasMedias[i];
        }
        return sum / this.notasMedias.length;
    },
    MediaAsignatura: function () {
        var result = "";
        for (var i = 0; i < this.asignaturas.length; i++) {
            result += `${this.asignaturas[i].nombre} - Media: ${this.notasMedias[i]}<br>`;
        }
        return result;
    },
    mostrar: function() {
        // Mostrar información del alumno en un div en html
    var alumnoInfoDiv = document.getElementById("alumno-info");
    alumnoInfoDiv.classList.add("text-gray-700", "text-lg");
    
    alumnoInfoDiv.innerHTML = `
      <h2 class="text-2xl font-semibold mb-4">${this.nombre}</h2>
      <div class="mb-2"><strong>Edad:</strong> ${this.edad} años</div>
      <div class="mb-2"><strong>Ciclo:</strong> ${this.ciclo}</div>
      <div class="mb-2"><strong>Curso:</strong> ${this.curso}</div>
      <div class="mb-2"><strong>Tutor:</strong> ${this.tutor.nombre}</div>
      <div class="mb-2">
        <strong>Asignaturas:</strong><br>
        ${this.MediaAsignatura()}
      </div>
      <div class="mb-2"><strong>Media Total:</strong> ${this.calcularMedia()}</div>
    `;
    }
};
let ALUMNO1 = {
    nombre: "Jorge Nieto Roldán",
    edad: 32,
    ciclo: "DAW",
    curso: 2,
    tutor: TUTOR,
    asignaturas: asignaturas,
    notasMedias: [10, 9, 9.5, 10], 
    // Ejercicio 7 
    calcularMedia: function () {
        var sum = 0;
        for (var i = 0; i < this.notasMedias.length; i++) {
            sum += this.notasMedias[i];
        }
        return sum / this.notasMedias.length;
    },
    MediaAsignatura: function () {
        var result = "";
        for (var i = 0; i < this.asignaturas.length; i++) {
            result += `${this.asignaturas[i].nombre} - Media: ${this.notasMedias[i]}<br>`;
        }
        return result;
    },
    mostrar: function() {
        // Mostrar información del alumno en un div en html
    var alumnoInfoDiv = document.getElementById("alumno-info");
    alumnoInfoDiv.classList.add("text-gray-700", "text-lg");
    
    alumnoInfoDiv.innerHTML = `
      <h2 class="text-2xl font-semibold mb-4">${this.nombre}</h2>
      <div class="mb-2"><strong>Edad:</strong> ${this.edad} años</div>
      <div class="mb-2"><strong>Ciclo:</strong> ${this.ciclo}</div>
      <div class="mb-2"><strong>Curso:</strong> ${this.curso}</div>
      <div class="mb-2"><strong>Tutor:</strong> ${this.tutor.nombre}</div>
      <div class="mb-2">
        <strong>Asignaturas:</strong><br>
        ${this.MediaAsignatura()}
      </div>
      <div class="mb-2"><strong>Media Total:</strong> ${this.calcularMedia()}</div>
    `;
    }
};
// ejercicio 8
function mostrarAlumno(alumno) {
    // Mostrar información del alumno en un div en html
var alumnoInfoDiv = document.getElementById("alumno-info");
alumnoInfoDiv.classList.add("text-gray-700", "text-lg");

alumnoInfoDiv.innerHTML = `
  <h2 class="text-2xl font-semibold mb-4">${alumno.nombre}</h2>
  <div class="mb-2"><strong>Edad:</strong> ${alumno.edad} años</div>
  <div class="mb-2"><strong>Ciclo:</strong> ${alumno.ciclo}</div>
  <div class="mb-2"><strong>Curso:</strong> ${alumno.curso}</div>
  <div class="mb-2"><strong>Tutor:</strong> ${alumno.tutor.nombre}</div>
  <div class="mb-2">
    <strong>Asignaturas:</strong><br>
    ${alumno.MediaAsignatura()}
  </div>
  <div class="mb-2"><strong>Media Total:</strong> ${alumno.calcularMedia()}</div>
`;
}

    // Mostrar información del alumno en un div en html par que muestre siempre uno en pantalla
    var alumnoInfoDiv = document.getElementById("alumno-info");
    alumnoInfoDiv.classList.add("text-gray-700", "text-lg");
    
    alumnoInfoDiv.innerHTML = `
      <h2 class="text-2xl font-semibold mb-4">${ALUMNO.nombre}</h2>
      <div class="mb-2"><strong>Edad:</strong> ${ALUMNO.edad} años</div>
      <div class="mb-2"><strong>Ciclo:</strong> ${ALUMNO.ciclo}</div>
      <div class="mb-2"><strong>Curso:</strong> ${ALUMNO.curso}</div>
      <div class="mb-2"><strong>Tutor:</strong> ${ALUMNO.tutor.nombre}</div>
      <div class="mb-2">
        <strong>Asignaturas:</strong><br>
        ${ALUMNO.MediaAsignatura()}
      </div>
      <div class="mb-2"><strong>Media Total:</strong> ${ALUMNO.calcularMedia()}</div>
    `;

function mostrarAlumnosEnTabla(alumno1, alumno2) {
    var tablaHTML = `
      <table class="table-auto w-full mb-4">
        <thead>
          <tr>
            <th class="px-4 py-2">Nombre</th>
            <th class="px-4 py-2">Edad</th>
            <th class="px-4 py-2">Ciclo</th>
            <th class="px-4 py-2">Curso</th>
            <th class="px-4 py-2">Tutor</th>
            <th class="px-4 py-2">Media Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">${alumno1.nombre}</td>
            <td class="px-4 py-2">${alumno1.edad} años</td>
            <td class="px-4 py-2">${alumno1.ciclo}</td>
            <td class="px-4 py-2">${alumno1.curso}</td>
            <td class="px-4 py-2">${alumno1.tutor.nombre}</td>
            <td class="px-4 py-2">${alumno1.calcularMedia()}</td>
          </tr>
          <tr>
            <td class="px-4 py-2">${alumno2.nombre}</td>
            <td class="px-4 py-2">${alumno2.edad} años</td>
            <td class="px-4 py-2">${alumno2.ciclo}</td>
            <td class="px-4 py-2">${alumno2.curso}</td>
            <td class="px-4 py-2">${alumno2.tutor.nombre}</td>
            <td class="px-4 py-2">${alumno2.calcularMedia()}</td>
          </tr>
        </tbody>
      </table>
    `;
  
    var alumnoInfoDiv = document.getElementById("alumnos-info-tabla");
    alumnoInfoDiv.innerHTML = tablaHTML;
  }
  mostrarAlumnosEnTabla(ALUMNO, ALUMNO1);

