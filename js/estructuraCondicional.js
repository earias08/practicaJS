let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

document.write("Numero 1= " + numero1);
document.write("<br>Numero 2= " + numero2);

// Estructura if
/* if(condicion logica){
    codigo a ejecutar si la respuesta es verdadero o true
}
*/

if (numero1 > numero2) {
  document.write("<br> El numero 1 es mayor al numero 2");
} else if (numero2 == numero1) {
  // codigo a ejecutar cuando no se cumple la condicion
  document.write("<br>Los numeros ingresados son iguales");
} else {
  document.write("<br>El numero 2 es mayor al numero 1");
}
