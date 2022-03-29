let envBoton = document.getElementById("boton");

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    let tipEmpanada = document.getElementById("empanada").value;
    let cantidad = document.getElementById("cantidad").value;
    let nombre = document.getElementById("nombre").value;
    let identificacion = document.getElementById("iden").value;
    let correo = document.getElementById("correo").value;
    let precio = 0;

    if (tipEmpanada == "Empanada de carne") {
        precio = 1400
    } else if (tipEmpanada == "Empanada de pollo") {
        precio = 1800
    } else if (tipEmpanada == "Empanada de papa") {
        precio = 1500
    } else if (tipEmpanada == "Empanada paisa") {
        precio = 1700
    } else if (tipEmpanada == "Empanada ranchera") {
        precio = 2100
    } 

    let canTotal = precio * cantidad;

    console.log("la empanada que escogio fue la " + tipEmpanada);
    console.log("la cantidad de empanadas son " + cantidad);
    console.log("El nombre del comprador es " + nombre);
    console.log("Tu numero de identificación es " + identificacion);
    console.log("Tu correo electronico es " + correo);
    alert("El precio total del pedido es de " + canTotal + " pesos")
};
