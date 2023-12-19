document.getElementById("DNIform").addEventListener("submit", function (event) {
    event.preventDefault();

    const dniInput = document.getElementById("dni");
    const dniValue = dniInput.value.trim();

    const regexDNI = /^[0-9]{8}[A-Z]$/;

    if (regexDNI.test(dniValue)) {
        alert("Este DNI es válido");
    } else {
        alert("DNI no válido, por favor vuelva a introducirlo, el DNI consta de 8 digitos terminados en una letra MAYUSCULA");
    }
});
