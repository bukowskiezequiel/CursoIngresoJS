/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()

//declaro las funciones que voy a utilizar
{
    let num1;
    let num2;
    let resultado;  

    // Guardo en memoria los datos de las cajas de texto
    //previamente convierto a number el dato que viene en string
    //levanto el dato, lo paso a parse int y directo a la variable.
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    //realizo la operacion solicitada
    resultado = num1 + num2
    //muestro el resultado 
    alert("la suma es " + resultado);
}

function restar() {
    let num1;
    let num2;
    let resultado;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    resultado = num1 - num2

    alert("la resta es " + resultado);
}

function multiplicar() {
    let num1;
    let num2;
    let resultado;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    resultado = num1 * num2

    alert("la multiplicacion es " + resultado);
}

function dividir() {
    let num1;
    let num2;
    let resultado;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    resultado = num1 / num2

    alert("la division es " + resultado);
}

//falta una validacion, pero se ve mas adelante 14/07

