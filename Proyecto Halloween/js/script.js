window.addEventListener('DOMContentLoaded', event => {

    //Boton con imagen modal venta de entrtadas
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    var img = document.getElementById("img01");

btn.onclick = function() {
    modal.style.display = "block";
    img.src = './assets/img/entrada1.jpg';
}

span.onclick = function() { 
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

});