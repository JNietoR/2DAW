let screenLog = document.querySelector("#values");
document.addEventListener("mousemove", mousePosition);

function mousePosition(e) {
    values.innerText = `
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}

let mouseButton = document.querySelector("#mouseButton");
document.addEventListener('mousedown', buttonPushed);
function buttonPushed(e){
    let button='';

    switch (e.button) {
        case 0:
            button = 'Izquierda'
            break;
        case 1:
            button = 'Central'
            break;
        case 2:
            button = 'Derecha'
            break;
        default:
            button = 'Raton gamer'
            break;
    }
    botonPulsado.innerText=`Botón pulstado ${button}`;

    document.addEventListener('contextmenu', function (event) {
        //con preventDefault eliminamos o paramos los eventos por defecto pasados por parametros
        event.preventDefault();
    })
}