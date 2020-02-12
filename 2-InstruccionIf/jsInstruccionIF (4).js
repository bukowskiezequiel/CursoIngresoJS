function mostrar()
{
//tomo la edad ej:1 
 
var edad ;

edad= parseInt(document.getElementById("edad").value);

 if (edad >= 13 && edad <= 17) {

    alert ("es adolescente");


}

//ej 2:si la edad esta dentro del rango
/* if (edad >= 13 && edad <= 17) {
    alert ("es adolescente");
    }*/


    // si la edad no esta fuera del rango
 
if (!(edad < 13 || edad > 17)){
    alert ("es adolescente");
}
}
//FIN DE LA FUNCIÓN