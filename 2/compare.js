var resultado

function compara(){
    // capturo, declaro y convierto las variables
    let n1 = parseFloat (document.getElementsByName("n1")[0].value);
    let n2 = parseFloat (document.getElementsByName("n2")[0].value);
    let n3 = parseFloat (document.getElementsByName("n3")[0].value);

    //Si todas las variables son iguales
    if (n1==n2 && n1==n3 && n2==n3) {
        document.getElementById("resultado").innerHTML=`Todos los números ingresados son ${n1}`;
    }

    //si un numero es distinto
    else{
    //Caso 1 = n1 distinto
        if (n1!==n2 && n2==n3 && n1!==n3) {
            if(n1>n2){
            document.getElementById("resultado").innerHTML=`Todos los números son ${n2} excepto el valor 1= ${n1}. Este es MAYOR`;
            }else{
                document.getElementById("resultado").innerHTML=`Todos los números son ${n2} excepto el valor 1= ${n1}. Este es MENOR`;
            }
        }
    //Caso 2 = n2 distinto
        if (n1!==n2 && n1==n3 && n2!==n3) {
            if(n1>n2){
            document.getElementById("resultado").innerHTML=`Todos los números son ${n1} excepto el valor 2= ${n2}. Este es el MENOR`;
            }else{
                document.getElementById("resultado").innerHTML=`Todos los números son ${n1} excepto el valor 2= ${n2}. Este es MAYOR`;
            }
        }
    //Caso 3 = n3 distinto
        if (n1==n2 && n1!==n3 && n2!==n3) {
            if(n1>n3){
                document.getElementById("resultado").innerHTML=`Todos los números son ${n1} excepto el valor 3= ${n3}. Este es MENOR.`;
            }else{
                document.getElementById("resultado").innerHTML=`Todos los números son ${n1} excepto el valor 3= ${n3}. Este es MAYOR.`;
            }
        }
    }

//condiciones si ninguno es igual
    if (n1>n2 && n1>n3 && n2!==n3) {
        if (n2>n3) {
            document.getElementById("resultado").innerHTML=`El orden correcto es:<br>Mayor: ${n1}<br>Medio: ${n2}<br>Menor: ${n3}`;
        }else{
            document.getElementById("resultado").innerHTML=`El orden correcto es:<br>Mayor: ${n1}<br>Medio: ${n3}<br>Menor: ${n2}`;
        }
    }
    if (n2>n1 && n2>n3 && n1!==n3) {
        if (n1>n3) {
            document.getElementById("resultado").innerHTML=`El orden correcto es:<br>Mayor: ${n2}<br>Medio: ${n1}<br>Menor: ${n3}`;
        }
        else{
            document.getElementById("resultado").innerHTML=`El orden correcto es:<br>Mayor: ${n2}<br>Medio: ${n3}<br>Menor: ${n1}`;
        }
    }
    if (n3>n1 && n3>n2 && n1!==n2) {
        if (n1>n2) {
            document.getElementById("resultado").innerHTML=`El orden correcto es:<br>Mayor: ${n3}<br>Medio: ${n1}<br>Menor: ${n2}`;
        }else{
            document.getElementById("resultado").innerHTML=`El orden correcto es:<br>Mayor: ${n3}<br>Medio: ${n2}<br>Menor: ${n1}`;
        }
    }
}


    // document.getElementById("resultado").innerHTML=`El orden correcto es: ${resultado}`;