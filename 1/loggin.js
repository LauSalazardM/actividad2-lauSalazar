let product = null;
let shelf = null;
let status = null;

function sub(){
product = document.getElementsByName("prod")[0].value;
shelf = document.getElementsByName("shelf")[0].value;
alert(product+" "+shelf);
}
var usuario = "Administrador"
var pass=1234

function enviarAlerta(){
    let usr = document.getElementsByName('usr')[0].value;
    let password = document.getElementsByName('password')[0].value;
        if (usr == usuario && pass == password) {
            setTimeout( function() { window.location.href = "./ingreso/home.html"; }, 1000 );
        }else{
            alert ("Usuario o contraseña erroneos")
        }
}