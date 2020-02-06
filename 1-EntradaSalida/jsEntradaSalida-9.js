/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 var sueldo;
 var aumento;
 var SueldoFinal;

 sueldo= parseInt(document.getElementById("sueldo").value);

 aumento= sueldo*10/100;

SueldoFinal= aumento+sueldo;

document.getElementById("resultado").value=SueldoFinal;
}
