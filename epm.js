let envBoton = document.getElementById("boton");

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    console.log("hola");
    let estracto = document.getElementById("estracto").value;
    let identidad = document.getElementById("iden").value;
    let deuda = document.getElementById("deuda").value;
    let correo = document.getElementById("correo").value;
    let precio = 0
    let descuento = 0

    if (estracto == "Estracto 1") {
        precio = 32321321
        descuento = 0.4
    } else if (estracto == "Estracto 2"){
        precio = 300000
        descuento = 0.3
    }
    else if (estracto == "Estracto 3"){
        precio = 300000
        descuento = 0.2
    }else if (estracto == "Estracto 4"){
        precio = 300000
    }else if (estracto == "Estracto 5"){
        precio = 300000
    }else if (estracto == "Estracto 6"){
        precio = 300000
    }

    console.log(estracto);
    console.log(identidad);
    console.log(deuda);
    console.log(correo);
};
