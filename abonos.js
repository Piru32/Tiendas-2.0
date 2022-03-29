let envBoton = document.getElementById("boton");

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    let tribunas = document.getElementById("tribunas").value;
    let cantidad = document.getElementById("cantidad").value;
    let identificacion = document.getElementById("Identidad").value;
    let nombre = document.getElementById("Nombres").value;
    let apellidos = document.getElementById("Apellidos").value;
    let correo = document.getElementById("correo").value;
    let precio = 0

    if (tribunas == "Sur" || tribunas == "Norte") {
        precio = 30000
    } else if (tribunas == "Oriental") {
        precio = 40000
    } else if (tribunas == "Occidental") {
        precio = 50000
    }

    let canTotal = precio * cantidad

    console.log("La tribuna que escogio fue la tribuna " + tribunas);
    console.log("la cantidad de boletas es de " + cantidad);
    console.log("el nombre del comprador es " + nombre);
    console.log("El numero de identificacion es " + identificacion);
    console.log("El apellido del comprador es " + apellidos);
    console.log("el correo electronico es " + correo);
    alert("El precio total es de " + canTotal)
};
