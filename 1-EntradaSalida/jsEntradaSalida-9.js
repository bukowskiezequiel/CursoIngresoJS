/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 let sueldo;
 let aumento;
 let nuevoSueldo;

 sueldo= parseFloat(document.getElementById("sueldo").value);

 //regla de 3     sueldo*10 (sobre 100 es decir dividido)

 aumento = sueldo + 10 / 100;

 nuevoSueldo = sueldo + aumento;

document.getElementById("resultado").value= nuevoSueldo;
}
