let filas = parseInt(prompt('Ingrese un numero de filas'));
let columnas = parseInt(prompt('Ingrese un numero de columnas'));
// numero que quiero ir decrementando
let numero = filas * columnas;

console.log(numero);

document.write('<table border>');
// document.write('<tr>');
// document.write('<td>prueba');
// document.write('</td>');
// document.write('</tr>');
for(let indiceFila = 0; indiceFila < filas ; indiceFila++){
    // dibujar la fila
    document.write('<tr>');
    // dibujar las columnas o celdas
    for(let indiceColumna=0; indiceColumna < columnas; indiceColumna++){
        document.write('<td>'+numero);
        document.write('</td>');
        // decremento el valor del numero de cada celda
        numero--;
    }

    document.write('</tr>');
}

document.write('</table>');


