let nombre = "tony stark";
let numSerie = "123gsd2";
let precio = 5000;
let version = "end-game";

// crear un objeto con notacion literal
let funkoIronMan = {
  // clave: valor -> son propiedades
  nombre: "Tony Stark",
  numSerie: "123gsd2",
  precio: 5000,
  version: ["end-game",'1','2'],
//   crear un metodo
  sinStock: function (){
      return false;
  },
  tengoStock: () =>{
      return true;
  }
};

// mostrar un objeto
console.log(funkoIronMan);

// mostrar una propiedad del objeto forma 1 nombreobjeto.propiedad
document.write("Articulo Funkopop: " + funkoIronMan.nombre);

// mostrar una propiedad del objeto forma 2
document.write("<br>Precio: $" + funkoIronMan["precio"] + "<br>");

// mostrar todas las propiedades
mostrarObjeto();

// modificar una propiedad de mi objeto
funkoIronMan.precio = 5500;
mostrarObjeto();

// agregar una propiedad nueva a un objeto
funkoIronMan.disponible = true;
mostrarObjeto();

//borrar una propiedad de un objeto
delete funkoIronMan.version;
mostrarObjeto();

// llamar a un metodo del objeto funkoironman
console.log(funkoIronMan.tengoStock());

function mostrarObjeto() {
  // mostrar todas las propiedades de un objeto
  let claves = Object.keys(funkoIronMan); //['nombres', 'numSerie', 'precio', 'version']
  console.log(claves.length);
  document.write("<br>FunkoIronman<br>");
  for (let i = 0; i < claves.length; i++) {
    // obtengo el nombre de una de claves por cada vuelta
        let clave = claves[i];
    document.write(`<br>${clave}: ${funkoIronMan[clave]}`);
  }
}
