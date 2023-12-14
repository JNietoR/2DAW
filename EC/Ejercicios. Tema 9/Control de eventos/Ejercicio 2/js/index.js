let keyPressed = document.querySelector("#keyPressed");
document.addEventListener('keypress', teclapulsada);
function teclapulsada(e){
  var letra = e.key;

key.innerHTML = `La letra es ${letra}`; 

}