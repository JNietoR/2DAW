document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos con la clase "saber-mas-link"
    var saberMasLinks = document.querySelectorAll(".saber-mas-link");

    // Itera sobre los enlaces y agrega un event listener a cada uno
    saberMasLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Evita que el enlace siga el comportamiento predeterminado (navegar a la página)
            event.preventDefault();

            // Obtiene la URL del enlace
            var url = link.getAttribute("href");
            metodoAjax(url);

            // Realiza la solicitud AJAX
            function metodoAjax(url) {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", url, true);
                xhttp.send();
                procesarEstados();

                function procesarEstados(){
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4) {
                            if(this.status == 200){
                               document.getElementById("info-container").innerHTML = xhttp.responseText; 
                            }else{
                                document.getElementById("info-container").innerHTML = "Error : " + xhttp.status;
                            }
                        }else{
                            document.getElementById("info-container").innerHTML = "Cargando...";
                        }
                    };
                }
            }    
        });
    });
});

