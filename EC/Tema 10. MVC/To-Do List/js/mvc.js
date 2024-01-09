// Model
model = {
    //iniciar array vacio para la lista de tareas
    items: [] 
}

// View
view = {
    // Function para limpiar la lista
    clearList: function () {
        var range = document.createRange()
        range.selectNodeContents(document.getElementById("list"));
        range.deleteContents();
    },
    // funcion para renderizar la lista con todos sus cambios
    render: function () {
        //primero se limpia la lista
        this.clearList();

        if (model.items.length != 0) {
            // for para imprimir la lista y sus iconos
            list = document.getElementById("list");
            for (var i = 0; i < model.items.length; i++) {
                item = document.createElement("li");
                span = document.createElement("span");
                check = document.createElement("a");
                cross = document.createElement("a");
                iconCheck = document.createElement("i");
                iconCross = document.createElement("i");

                // clases para elemento de la lista
                item.className = "item";
                span.className = "item-text";
                check.className = "item-complete";
                cross.className = "item-delete";

                // cambiar los estilos si se completa la tarea tachandola
                span.textContent = model.items[i].text;
                if (model.items[i].completed) {
                    span.setAttribute("style", "text-decoration: line-through; color: #bbb;")
                }

                // iconos para completar y eliminar tareas
                iconCheck.setAttribute("class", "icon ion-md-checkmark");
                iconCheck.setAttribute("data-id", i);
                iconCross.setAttribute("class", "icon ion-md-trash");
                iconCross.setAttribute("data-id", i);

                // eventos para completar y eliminar tareas
                check.setAttribute("onclick", "controller.completeItem('" + i + "')");
                cross.setAttribute("onclick", "controller.deleteItem('" + i + "')");

                // Agregar todos los elementos de una tarea, es decir su texto, y los iconos de eliminar y completar
                check.appendChild(iconCheck);
                cross.appendChild(iconCross);
                item.appendChild(span);
                item.appendChild(check);
                item.appendChild(cross);

                list.appendChild(item);
            }
        }
    },
    // Función para agergar una tarea al pulsar enter ya que no hemos agregado un submit
    addItem: function (e) {
        if ((e.code == "Enter") || (e.code == "NumpadEnter")) {
            if (((document.getElementById("add-item").value != "") && (document.getElementById("add-item").value != " "))) {
                item = document.getElementById("add-item").value;
                controller.addItem(item);
                return false;
            }
        }
    },
}

// Controller
controller = {
    // inicializar el controlador de la aplicación
    init: function () {
        view.render();
    },
    // Agregar una nueva tarea a la lista
    addItem: function (item) {
        list_item = { text: item, completed: false };
        model.items.push(list_item);
        document.getElementById("add-item").value = "";
        //volver a renderizar despues de cada cambio
        view.render();
    },
    // cambiar entre completado y no completado
    completeItem: function (item_index) {
        model.items[item_index].completed = !model.items[item_index].completed;
        //volver a renderizar despues de cada cambio
        view.render();
    },
    // Eliminar elemento de la lista
    deleteItem: function (item_index) {
        model.items.splice(item_index, 1);
        //volver a renderizar despues de cada cambio
        view.render();
    },
}

// inicializar el controlador
controller.init();
//elementos hardcodeados para ejemplo
controller.addItem("Terminar DAW")
controller.addItem("Salir vivo de DAW")
controller.addItem("Terminar Baldur's Gate 3 con Álvaro y Jorge")