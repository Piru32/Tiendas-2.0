let envBoton = document.getElementById("boton");

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    let productos = document.getElementById("productos").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;
    let precio = 0

    if (productos == "Postres" || productos == "Tortas") {
        console.log()
        precio = 4500;
    } else {
        precio = 5000
    }

    console.log("El producto que escogiste es " + productos);
    console.log("tu dirección es" + direccion);
    console.log("Tu correo electronico es " + correo);
    alert("¡¡¡Haz escogido un producto con descuento!!! \n" + "Tu valor de compra total es de " + precio + " pesos")
};
