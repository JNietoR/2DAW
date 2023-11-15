function comprobarNombre() {
    var nombreInput = document.getElementById('name');
    var nombre = nombreInput.value;
    var regex = /^[a-zA-Z\s]+$/;

        if (!regex.test(nombre)) {
            alert('El nombre solo debe contener letras y espacios.');
            // Reinicia el valor del campo name al introducir algo que no esta en la expresión regular
            nombreInput.value = '';
        }
}

function comprobarEdad() {
    var edadInput = document.getElementById('age');
    var edad = edadInput.value;

    var regex = /^[1-9]\d*$/;

        if (!regex.test(edad)) {
            alert('La edad debe ser un numero positivo');
            // Reinicia el valor del campo age al introducir algo que no esta en la expresión regular
            nombreInput.value = '';
        }
}

function procesarEjercicio1(event){
    event.preventDefault();
    comprobarNombre();
    comprobarEdad();
}

function agregarTarea(task) {
    // Crear un elemento li
    var listItem = document.createElement('span');
    listItem.textContent = task;

    // Crear un botón para eliminar la tarea
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = function() {
        // Eliminar la tarea al hacer clic en el botón
        listItem.remove();
    };

    // Agregar el botón de eliminar a la lista
    listItem.appendChild(deleteButton);

    // Obtener la lista de tareas y agregar la nueva tarea
    tastkList = document.querySelector('.listaTareas');
    tastkList.appendChild(listItem);
}

function procesarEjercicio2(event){
    event.preventDefault();
    var taskInput = document.getElementById('task');
    var task = taskInput.value;
    agregarTarea(task);
}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        alert('No se puede dividir por cero.');
        return undefined;
    }
}

function procesarEjercicio3(event) {
    event.preventDefault();

    var operacion = event.submitter.value; // Obtener el valor del botón que fue presionado

    var num1Input = document.getElementById('num1');
    var num1 = parseFloat(num1Input.value);
    var num2Input = document.getElementById('num2');
    var num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Ingresa números válidos.');
        return;
    }

    var resultado;

    switch (operacion) {
        case 'sumar':
            resultado = sumar(num1, num2);
            break;
        case 'restar':
            resultado = restar(num1, num2);
            break;
        case 'multiplicar':
            resultado = multiplicar(num1, num2);
            break;
        case 'dividir':
            resultado = dividir(num1, num2);
            break;
        default:
            alert('Operador no válido.');
            return;
    }

    if (resultado !== undefined) {
        // Mostrar el resultado en el div con id "resultadoEj3"
        var resultadoDiv = document.getElementById('resultadoEj3');
        resultadoDiv.innerHTML = 'Resultado operación: ' + resultado;
    }
}


