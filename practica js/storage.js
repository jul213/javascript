localStorage.setItem("nombre", "juan");
localStorage.setItem("nombre1", "pepe");
localStorage.setItem("nombre2", "carlos");

localStorage.getItem("nombre");



function session (key, value){
    sessionStorage.setItem(key, value)
}

function obtenerSession (key){
    sessionStorage.getItem(key);
}