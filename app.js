let listaNombres = [];
let nombresUsuario = document.getElementById("amigo");
let i=0;
let li = document.createElement("li");
let ul = document.getElementById("listaAmigos");

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
        listaNombres.push(nombresUsuario.value);
        limpiarCaja();
        console.log(listaNombres);
        mostrarNombres();
    }
}


function mostrarNombres(){
    for (i; i<listaNombres.length; i++);
    console.log (listaNombres[i]);
    li.textContent = listaNombres[i];
    ul.appendChild(li);
}

