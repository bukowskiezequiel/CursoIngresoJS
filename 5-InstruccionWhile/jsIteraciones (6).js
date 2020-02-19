function mostrar()
{
	//a una variable se la puede escribir o leer,
//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
	var contador=0;  // se le tiene que poner un valor porque sino al declararla es undefined, siempre hay que inicializarlo
	var acumulador=0;
	var numero;
	var promedio;

	while (contador < 5 ){
		numero = parseInt(promp("ingrese un numero: "));
		acumulador = acumulador + numero; // se ejecuta lo que esta a la derecha para asignar lo de la izquierda
		contador = contador + 1; // esta para que la condicion cuando sea falsa se pueda escapar
	} // acumulador= es variable   contador= es acumulador

	promedio = acumulador / 5;
	
	document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN