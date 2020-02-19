function mostrar()
// mientras el numero no este entre 0  y 9 
// mientras el numero sea menor a 0 o mayor a 9 es
{
    
        var sexo = prompt("ingrese f ó m .");
    
    // ! es un not logico, es un operador unario(a una operacion afecta)
        //while (!(numero >=  0 && numero < 9 || isNaN(numero)){ isnan devuelve la condicion si es  V O F
while (sexo !="f" && sexo != "m"){ // (!= es distinto)
      alert ("es incorrecto");
//con promp pido la caja de texto

       sexo = prompt("ingrese f ó m .");
    }
        document.getElementById('Sexo').value=sexo;
    
}//FIN DE LA FUNCIÓN