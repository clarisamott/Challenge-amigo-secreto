let listaNombres = [];
let nombresUsuario = document.getElementById("amigo");
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
        mostrarNombres();
    }
}

function mostrarNombres(){
    ul.innerHTML = "";
    for (let i=0; i<listaNombres.length; i++){
        console.log (listaNombres[i]);
        let li = document.createElement("li");
        li.textContent += listaNombres[i];
        ul.appendChild(li);

    }
}

