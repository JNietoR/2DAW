var cuadro = document.getElementById('cuadroRevoltoso');
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
    let style = getComputedStyle(cuadro);
    let top = parseInt(style.top);
    let left = parseInt(style.left);
    var key = e.key;

    switch (key) {
        case 'ArrowUp':
            top = Math.max(0, top - 20); 
            break;
        case 'ArrowDown':
            top = Math.min(window.innerHeight - cuadro.offsetHeight, top + 20); 
            break;
        case 'ArrowLeft':
            left = Math.max(0, left - 20); 
            break;
        case 'ArrowRight':
            left = Math.min(window.innerWidth - cuadro.offsetWidth, left + 20); 
            break;
    }

    cuadro.style.top = top + 'px';
    cuadro.style.left = left + 'px';
}
