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

//variables juego
const gameContainer = document.querySelector(".juego"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// bucle de cada imagen
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "./assets/img/rock.png";
    result.textContent = "Espera...";

    // vuelve a hacer el loop en cada imagen
    optionImages.forEach((image2, index2) => {
      // ilumina la opcion elegida
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // hace un delay para que calcule el resultado
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // coge la imgane que has clickado abajo
      let imageSrc = e.target.querySelector("img").src;
      // Cambia la imagen jugador a la que has clickado abajo
      userResult.src = imageSrc;

      // Genera la tirada de la cpu
      let randomNumber = Math.floor(Math.random() * 3);
      // array de imagenes de la cpu
      let cpuImages = ["./assets/img/rock.png", "./assets/img/paper.png", "./assets/img/scissors.png"];
      // cambia la imagen del cpu al resultado aleatorio generado
      cpuResult.src = cpuImages[randomNumber];

      // Asigna una letra al resultado de la cpu (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Asigna una letra a la opcion elegida del jugdor basada en el index
      let userValue = ["R", "P", "S"][index];

      // objeto con todas las posibilidades
      let outcomes = {
        RR: "Empate",
        RP: "Cpu",
        RS: "Jugador",
        PP: "Empate",
        PR: "Jugador",
        PS: "Cpu",
        SS: "Empate",
        SR: "Cpu",
        SP: "Jugador",
      };

      // une las elecciones del jugador y la cpu
      let outComeValue = outcomes[userValue + cpuValue];

      // muestra el resultado
      result.textContent = userValue === cpuValue ? "Empate!" : `${outComeValue} Gana!!`;
    }, 2500);
  });
});

