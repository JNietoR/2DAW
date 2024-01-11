// Modelo
const model = {
    // Array que almacena las tareas
    tasks: [] 
}

// Vista
const view = {
    // Limpia la lista de tareas en el DOM
    clearList: function () {
        const range = document.createRange()
        range.selectNodeContents(document.getElementById("list"));
        range.deleteContents();
    },
    // Renderiza la lista de tareas en el DOM
    render: function () {
        // Limpia la lista antes de volver a renderizar
        this.clearList();

        if (model.tasks.length !== 0) {
            // Obtén la lista del DOM
            const list = document.getElementById("list");

            // Recorre las tareas y crea elementos para cada una
            for (let i = 0; i < model.tasks.length; i++) {
                const taskElement = document.createElement("li");
                const taskTextElement = document.createElement("span");
                const completeLinkElement = document.createElement("a");
                const deleteLinkElement = document.createElement("a");
                const completeIconElement = document.createElement("i");
                const deleteIconElement = document.createElement("i");

                // Asigna clases a los elementos
                taskElement.className = "item";
                taskTextElement.className = "item-text";
                completeLinkElement.className = "item-complete";
                deleteLinkElement.className = "item-delete";

                // Configura el texto de la tarea y estilos si está completada
                taskTextElement.textContent = model.tasks[i].text;
                if (model.tasks[i].completed) {
                    taskTextElement.setAttribute("style", "text-decoration: line-through; color: #bbb;")
                }

                // Configura los iconos SVG personalizados
                completeIconElement.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>`;
                
                deleteIconElement.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>`;

                // Asigna eventos para completar y eliminar tareas
                completeLinkElement.setAttribute("onclick", "controller.completeTask('" + i + "')");
                deleteLinkElement.setAttribute("onclick", "controller.deleteTask('" + i + "')");

                // Agrega los elementos al DOM
                completeLinkElement.appendChild(completeIconElement);
                deleteLinkElement.appendChild(deleteIconElement);
                taskElement.appendChild(taskTextElement);
                taskElement.appendChild(completeLinkElement);
                taskElement.appendChild(deleteLinkElement);

                list.appendChild(taskElement);
            }
        }
    },
    // Agrega una tarea al presionar Enter
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
    // Inicializa la aplicación
    init: function () {
        view.render();
    },
    // Agrega una nueva tarea
    addTask: function (task) {
        const taskItem = { text: task, completed: false };
        model.tasks.push(taskItem);
        document.getElementById("add-item").value = "";
        view.render();
    },
    // Cambia el estado de completado/no completado de una tarea
    completeTask: function (taskIndex) {
        model.tasks[taskIndex].completed = !model.tasks[taskIndex].completed;
        view.render();
    },
    // Elimina una tarea
    deleteTask: function (taskIndex) {
        model.tasks.splice(taskIndex, 1);
        view.render();
    },
}

// Inicializa el controlador y agrega tareas de ejemplo
controller.init();
controller.addTask("Terminar DAW");
controller.addTask("Salir vivo de DAW");
controller.addTask("Terminar Baldur's Gate 3 con Álvaro y Jorge");
