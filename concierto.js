let envBoton = document.getElementById("boton");

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    let ciudades = document.getElementById("ciudades").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;
    let Fecha = 0

    if (ciudades == "Medellin") {
        Fecha = "Agosto/8/2022"
    } else if (ciudades == "Bogota") {
        Fecha = "Agosto/11/2022"
    } else if (ciudades == "Cali") {
        Fecha = "Agosto/15/2022"
    } else {
        Fecha = "En esta ciudad no hay concierto"
    }

    alert("La fecha del concierto es " + Fecha + "\n" + "tu dirección es " + direccion + "\n" + "Tu correo electronico es " + correo);


};
