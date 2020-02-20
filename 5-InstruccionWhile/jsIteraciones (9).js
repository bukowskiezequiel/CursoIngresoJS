function mostrar()

//Al presionar el botón pedir números hasta que el usuario quiera, 
//mostrar el número máximo y el número mínimo ingresado.
{

	var flag=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta;

	do {//pido numero al usuario
		numero = parseInt(prompt(" Ingrese un numero"));
		//valido para que sea un numero
		while (isNaN(numero)){
			numero = parseInt(prompt("eso no es un numero. Ingrese un numero: "));
		}
		//me fijo si es maximo o minimo
        if (flag == 0 ){
			maximo = numero;
			minimo = numero;
			flag = 1;
		}else{
			if (numero > maximo){
				maximo = numero;
			}
			if (numero < minimo){
				minimo = numero;
			}
		}
		//pregunto si quiere continuar
		respuesta = prompt("quiere ingresar otro numero?")
	}while(respuesta!='n')
	//muestro la informacion
document.getElementById("maximo").value = maximo
document.getElementById("minimo").value = minimo



}//FIN DE LA FUNCIÓN