// crear un arreglo con datos
let series = ["Naruto ♥️", "the Good doctor", "juego de tronos", 2, 8, true];

// crear un arreglo vacio
let temporadas = [];

// mostrar un valor de un arreglo
document.write(series[0]);
console.log(series.length);

// funcion para mostrar los elementos del arreglo
let mostrarSeries = () => {
  // recorrer cada elemento de una arreglo
  for (let posicion = 0; posicion < series.length; posicion++) {
    //  document.write('<br> Serie:' + series[posicion] + 'posicion:' + posicion);
    document.write(`<br> Serie: ${series[posicion]} - posicion: ${posicion}`);
  }
  document.write("<br>");
};

// funcion tradicional para mostrar elementos del arreglo
function mostrarSeriesNetflix() {
  // recorrer cada elemento de una arreglo
  document.write("<br><h3>Arreglo de series</h3>");
  for (let posicion = 0; posicion < series.length; posicion++) {
    document.write("<br> Serie: " + series[posicion]);
  }
  document.write("<br>");
}

// agregar un elemento al final del arreglo
series.push("Dr. House");

//contar los elementos que tiene el arreglo
console.log(series.length);
document.write("<br>" + series[6]);

// recorrer cada elemento de una arreglo
mostrarSeriesNetflix();

//agregar un elemento en una posicion particular
series.splice(1, 0, "loki");
mostrarSeriesNetflix();

// eliminar un elemento o varios desde una posicion particular del arreglo
series.splice(4, 2);
mostrarSeriesNetflix();

// modificar un elemento desde una posicion particular del arreglo
series[4] = "vikingos";
mostrarSeries();

// eliminar todos los elementos a continuacion desde una posicion particular
series.splice(2);
mostrarSeries();
