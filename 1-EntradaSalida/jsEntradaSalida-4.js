/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

	let nombre; //me reservo un espacio en memoria 

	//la variable donde quiero guardar el dato

	nombre= prompt ("ingrese su nombre");

	document.getElementById("elNombre").value = nombre;

}

