// Verificar si la clave "libros" no existe en el localStorage
if (!localStorage.getItem("libros")) {
    // Inicializar el localStorage con un array vacío
    localStorage.setItem("libros", JSON.stringify([]));
}

const setBook = () => {
    event.preventDefault();

    // Obtener la lista actual de libros del localStorage o inicializarla como un array vacío
    var libros = JSON.parse(localStorage.getItem("libros"));

    var contenidoInput = document.getElementById('book').value;

    // Agregar el nuevo libro a la lista
    libros.push(contenidoInput);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem("libros", JSON.stringify(libros));
}

const showBookList = () => {
    // Obtener la lista actual de libros del localStorage
    var libros = JSON.parse(localStorage.getItem("libros"));

    // Obtener el elemento donde se mostrará la lista
    var renderElement = document.getElementById('render');
    renderElement.innerHTML="";

    libros.forEach(libro => {
        renderElement.innerHTML += '<li>' + libro + '</li>';
    });
}

const deleteBooks = () => {

}

const clearBookList = () => {

}