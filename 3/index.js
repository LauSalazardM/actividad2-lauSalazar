const variable="Hola mundo"

function mostrar(){
    document.getElementById("hola").innerHTML = (variable + ' en el html!!!')
    console.log(variable);
    setTimeout( function to() {window.location.href = window.location} , 2000 );
}