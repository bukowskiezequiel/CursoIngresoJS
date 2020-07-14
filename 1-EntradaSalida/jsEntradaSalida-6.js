/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    let numero1;
    let numero2;
    let resultado;

   
    numero1 = parseInt(document.getElementById("numeroUno").value);  

    numero2 = parseInt(document.getElementById("numeroDos").value);

    resultado = numero1 + numero2;


    alert(`la suma es` + resultado);

}

