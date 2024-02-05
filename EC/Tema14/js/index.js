// Verificar si la clave "libros" no existe en el localStorage
if (!localStorage.getItem("libros")) {
    // Inicializar el localStorage con un array vacío
    localStorage.setItem("libros", JSON.stringify([]));
}

const setBook = (event) => {
    event.preventDefault();

    // Obtener la lista actual de libros del localStorage o inicializarla como un array vacío
    var libros = JSON.parse(localStorage.getItem("libros"));

    var contenidoInput = document.getElementById('book').value;

    // Agregar el nuevo libro a la lista
    libros.push(contenidoInput);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem("libros", JSON.stringify(libros));
    showBookList(event);
}

const showBookList = (event) => {
    event.preventDefault();
    // Obtener la lista actual de libros del localStorage
    var libros = JSON.parse(localStorage.getItem("libros"));

    // Obtener el elemento donde se mostrará la lista
    var renderElement = document.getElementById('render');
    renderElement.innerHTML="";

    libros.forEach(libro => {
        renderElement.innerHTML += '<li>' + libro + '</li>';
    });
}

const deleteBook = (event) => {
    event.preventDefault();

    // Obtener el valor del input que contiene el nombre del libro a eliminar
    var targetBook = document.getElementById('targetBook').value;

    // Obtener la lista actual de libros del localStorage
    var libros = JSON.parse(localStorage.getItem("libros"));

    // Crear un nuevo array sin el elemento indicado
    var nuevosLibros = [];
    for (var i = 0; i < libros.length; i++) {
        if (libros[i] !== targetBook) {
            nuevosLibros.push(libros[i]);
        }
    }

    // Actualizar la lista en localStorage con el nuevo array
    localStorage.setItem("libros", JSON.stringify(nuevosLibros));

    //Actualiza la lista
    showBookList(event);
}

const clearBookList = (event) => {
    event.preventDefault();
    localStorage.clear();
    localStorage.setItem("libros", JSON.stringify([]));
    showBookList(event);
}
