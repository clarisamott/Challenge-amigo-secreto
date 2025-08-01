let listaNombres = [];
let nombresUsuario = document.getElementById("amigo");

/*
let boton = document.querySelector("#agregarAmigo()");
boton.addEventListener ("click", agregarAmigo());
*/

function limpiarCaja(){
    document.querySelector("#amigo").value = " ";
}

function agregarAmigo(){
    if (nombresUsuario = ""){
        alert("Por favor, inserte un nombre");
    } else {
        listaNombres.push(nombresUsuario);
        limpiarCaja();
    }
}

