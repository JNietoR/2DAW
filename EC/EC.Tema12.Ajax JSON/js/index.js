document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos con la clase "saber-mas-link"
    var saberMasLinks = document.querySelectorAll(".saber-mas-link");

    // Itera sobre los enlaces y agrega un event listener a cada uno
    saberMasLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Evita que el enlace siga el comportamiento predeterminado (navegar a la página)
            event.preventDefault();

            // Obtiene el índice del elemento clicado (extraído del href)
            var index = parseInt(link.getAttribute("item"));

            // Muestra un mensaje de carga en el contenedor
            document.getElementById("info-container").innerHTML = "<div class='d-flex justify-content-center align-items-center text-white mb-4'><img src='https://i.gifer.com/4SHX.gif'/></div>";

            // Realiza la solicitud AJAX con un timeout de 1000 milisegundos
            setTimeout(function () {
                metodoAjax(index);
            }, 3000);
        });
    });

    // Realiza la solicitud AJAX
    function metodoAjax(index) {
        // Carga el archivo JSON
        fetch('./resources/datos.json')
            .then(response => response.json())
            .then(data => {
                // Verifica si el índice existe en el JSON
                if (data[index]) {
                    // Actualiza el contenido en el contenedor
                    document.getElementById("info-container").innerHTML =
                        '<div class="row d-flex justify-content-center align-items-center mb-4">' +
                        '<div class="col-4">' +
                        '<img src="' + data[index].portada + '" class="card-img-top w-75" alt="Portada libro">' +
                        '</div>' +
                        '<div class="col-8 w-50 text-white">' +
                        '<h2>' + data[index].titulo + '</h2>' +
                        '<span>' + data[index].descripcion + '</span>' +
                        '</div>' +
                        '</div>';
                } else {
                    document.getElementById("info-container").innerHTML = "Error: Elemento no encontrado";
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                document.getElementById("info-container").innerHTML = "Error al cargar los datos";
            });
    }
});
