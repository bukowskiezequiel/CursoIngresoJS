function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (numero < 0 || numero > 9 || isNaN(numero)){
	   alert ("numero incorrecto");
	numero = parseInt(prompt("ingrese un número entre 0 y 9."));
}
	document.getElementById("numero").value = numero;

}//FIN DE LA FUNCIÓN