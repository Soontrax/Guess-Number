$(document).ready(function () {
    $("#enviar").click(Comprobar)
});

function Comprobar() {

    var numeros = [];
    //Aqui lo que hacemos será guardarnos la respuesta y recolectamos todas las opciones de la respuesa1

    if ($("#1").prop("checked")) {
        numeros.push(1);
    }

    if ($("#2").prop("checked")) {
        numeros.push(2);
    }

    if ($("#3").prop("checked")) {
        numeros.push(4);
    }

    if ($("#4").prop("checked")) {
        numeros.push(8);
    }

    if ($("#5").prop("checked")) {
        numeros.push(16);
    }

    if ($("#6").prop("checked")) {
        numeros.push(32);
    }

    var resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado+=numeros[i];
    }

    //Esto sirve para agregar la información de la variable y mover el resultado de la variable al HTML y que lo ponga en el elemento con un id numero 
    $("#numero").html(resultado);
    //Y luego muestro el div que estaba oculto
    $("#mostrar").css("display","block");

    $("#enviar").css("display", "none");

    


}