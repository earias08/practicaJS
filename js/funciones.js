// funciones sin parametros

function holaMundo(){
    // todo el codigo que quiero que tenga esta funcion
    document.write('Hola mundo');
}

//funciones con parametros
function saludar(nombre, apellido){
    let edad;
    document.write('<br>Hola mi nombre es: '+nombre+' y mi apellido es '+apellido);
}

//funciones que retornan un valor
function convertirDolaresPesos(dolares){
    let pesos = dolares * 190;
    console.log(pesos)
    // siempre el return es la ultima linea de codigo
    return pesos;
}


// ejecutar o invocar o llamar a una funcion
holaMundo();
// llamar a una funcion con parametros
saludar('Esteban','Marquez');
saludar('Juan','Alaniz');

// let nombreRequerido = prompt('Ingrese un nombre');
// let apellidoRequerido = prompt('Ingrese un apellido');
// saludar(nombreRequerido,apellidoRequerido);
convertirDolaresPesos(100)

let precioIphone = convertirDolaresPesos(599)

document.write('<br>Iphone SE $'+precioIphone);
document.write('<br>Jordan $'+convertirDolaresPesos(200));