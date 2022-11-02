// Explicacion del problema

const fer = {
    nombre: 'Fernando',
    edad: 30,
    imprimir (){
        // console.log( `Nombre ${fer.nombre}` );
        console.log( `Nombre: ${this.nombre} - edad: ${ this.edad }` );
    }
}

const Pedro = {
    nombre: 'Pedro',
    edad: 20,
    imprimir (){
        // console.log( `Nombre ${fer.nombre}` );
        console.log( `Nombre: ${this.nombre} - edad: ${ this.edad }` );
    }
}

fer.imprimir();

// Nueva implementacion de Javascript
// Esto es una funcion para crear Instancias 'P'
// Si no se tiene una documentacion de que deben crear una instancia usando la palabra NEW habra un problema
function Persona (nombre, edad){
    console.log( 'Se ejecuto esta linea' );
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log( `Nombre: ${this.nombre} - edad: ${ this.edad }` );
    }
}

// La palabra reservada new significa que crea una instancia de tipo Persona
const maria = new Persona('Maria',18);
const Diego = new Persona('Diego',25);
console.log( maria );
maria.imprimir();
Diego.imprimir();

// Algunos siguen programando de esta manera pero no esta actualizado

