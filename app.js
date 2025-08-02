let listaNombres = [];
let nombresUsuario = document.getElementById("amigo");

/*
let boton = document.querySelector("#agregarAmigo()");
boton.addEventListener ("click", agregarAmigo());
*/

function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}

function agregarAmigo(){
    if (nombresUsuario.value === ""){
        alert("Por favor, inserte un nombre");
    } else {
        listaNombres.push(nombresUsuario);
        limpiarCaja();
        console.log(listaNombres);
    }
}


function mostrarNombres(){
    for (let i=0; i<listaNombres.length; i++);
    console.log (listaNombres[i]);
    listaNombres[i]= document.createElement("li");

}

