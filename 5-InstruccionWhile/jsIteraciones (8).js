function mostrar()
{
//la diferencia de color es porque 1-4 no se usaron
	
	var flag=0;
	var positivo=0;
	var negativo=1;  
	var respuesta='s';
	var numero;
	//is nan devuelve que es verdadero

	do {
		 numero = parseInt(prompt("ingrese un numero: "));

		 while (isNaN(numero)) {
			 numero = parseInt(prompt("eso no es un numero. Ingrese un numero: "));
		 }

		 if(numero >= 0){
			 positivo = positivo + numero;

		 }else {
			 negativo = negativo * numero;
			 flag = 1;
		 }
		
		respuesta = prompt(" quiere continuar ingresando numeros?")
	} while (respuesta == "s");

	if (flag == 0 ) {
		negativo = 0
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN