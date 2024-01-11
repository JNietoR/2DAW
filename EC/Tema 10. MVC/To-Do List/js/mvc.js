// Modelo
const model = {
    // Inicializar array vacío para la lista de tareas
    tasks: [] 
}

// Vista
const view = {
    // Función para limpiar la lista
    clearList: function () {
        const range = document.createRange()
        range.selectNodeContents(document.getElementById("list"));
        range.deleteContents();
    },
    // Función para renderizar la lista con todos sus cambios
    render: function () {
        // Primero se limpia la lista
        this.clearList();

        if (model.tasks.length !== 0) {
            // For para imprimir la lista y sus iconos
            const list = document.getElementById("list");
            for (let i = 0; i < model.tasks.length; i++) {
                const taskElement = document.createElement("li");
                const taskTextElement = document.createElement("span");
                const completeLinkElement = document.createElement("a");
                const deleteLinkElement = document.createElement("a");
                const completeIconElement = document.createElement("i");
                const deleteIconElement = document.createElement("i");

                // Clases para elemento de la lista
                taskElement.className = "item";
                taskTextElement.className = "item-text";
                completeLinkElement.className = "item-complete";
                deleteLinkElement.className = "item-delete";

                // Cambiar los estilos si se completa la tarea tachándola
                taskTextElement.textContent = model.tasks[i].text;
                if (model.tasks[i].completed) {
                    taskTextElement.setAttribute("style", "text-decoration: line-through; color: #bbb;")
                }

                // Iconos para completar y eliminar tareas
                completeIconElement.setAttribute("class", "icon ion-md-checkmark");
                completeIconElement.setAttribute("data-id", i);
                deleteIconElement.setAttribute("class", "icon ion-md-trash");
                deleteIconElement.setAttribute("data-id", i);

                // Eventos para completar y eliminar tareas
                completeLinkElement.setAttribute("onclick", "controller.completeTask('" + i + "')");
                deleteLinkElement.setAttribute("onclick", "controller.deleteTask('" + i + "')");

                // Agregar todos los elementos de una tarea, es decir, su texto, y los iconos de eliminar y completar
                completeLinkElement.appendChild(completeIconElement);
                deleteLinkElement.appendChild(deleteIconElement);
                taskElement.appendChild(taskTextElement);
                taskElement.appendChild(completeLinkElement);
                taskElement.appendChild(deleteLinkElement);

                list.appendChild(taskElement);
            }
        }
    },
    // Función para agregar una tarea al presionar Enter, ya que no hemos agregado un submit
    addItem: function (event) {
        if ((event.code === "Enter") || (event.code === "NumpadEnter")) {
            if (((document.getElementById("add-item").value !== "") && (document.getElementById("add-item").value !== " "))) {
                const task = document.getElementById("add-item").value;
                controller.addTask(task);
                return false;
            }
        }
    },
}

// Controlador
const controller = {
    // Inicializar el controlador de la aplicación
    init: function () {
        view.render();
    },
    // Agregar una nueva tarea a la lista
    addTask: function (task) {
        const taskItem = { text: task, completed: false };
        model.tasks.push(taskItem);
        document.getElementById("add-item").value = "";
        // Volver a renderizar después de cada cambio
        view.render();
    },
    // Cambiar entre completado y no completado
    completeTask: function (taskIndex) {
        model.tasks[taskIndex].completed = !model.tasks[taskIndex].completed;
        // Volver a renderizar después de cada cambio
        view.render();
    },
    // Eliminar elemento de la lista
    deleteTask: function (taskIndex) {
        model.tasks.splice(taskIndex, 1);
        // Volver a renderizar después de cada cambio
        view.render();
    },
}

// Inicializar el controlador
controller.init();
// Elementos hardcodeados para ejemplo
controller.addTask("Terminar DAW");
controller.addTask("Salir vivo de DAW");
controller.addTask("Terminar Baldur's Gate 3 con Álvaro y Jorge");