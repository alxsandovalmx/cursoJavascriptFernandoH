// En JS6 cuando el retorno tiene el mismo nombre de la variable

function crearPersona ( nombre, apellido ) {
    return {
        // nombre: nombre,
        // apellido: apellido
        nombre,
        apellido
    }
}
const persona = crearPersona ( 'Alexis', 'Sandoval' );
console.log( persona );

// Funcion Lambda.
// Para regresar un objeto con esos argumentos van entre ()
const crearPersona2 = ( nombre, apellido ) => ({ nombre, apellido });

const persona2 = crearPersona2 ( 'Alexis', 'Sandoval' );
console.log( persona2 );

// arguments va en minisculas
function imprimeArgumentos() {
    console.log( arguments );
}

imprimeArgumentos (10, true, false, 'Alexis', 'Hola');

// Una funcion de flecha no crea un objeto de argumentos como las funciones tradicionales
// Despues del parametro rest no puede haber ningun otro argumento
// Si se necesita un elemento anterior debe tener propios argumentos
const imprimeArgumentos2 = ( edad, ...args ) => {
    //console.log( {edad, args} );
    return args;
}

// Crea un arreglo con los valores de los argumentos
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2 (10, true, false, 'Alexis', 'Hola');
console.log( {casado, vivo, nombre, saludo} );

// Para crear una nueva variable a partir el argumento de una funcion
const { apellido: nuevoApellido } = crearPersona ( 'Alexis', 'Perez' );
console.log( {nuevoApellido} );

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// Metodo tradicional de mostrar los argumentos
// const imprimePropiedades = ( personaje ) => { 
//     console.log( 'nombre: ', personaje.nombre );
//     console.log( 'codeName: ', personaje.codeName );
//     console.log( 'vivo: ', personaje.vivo );
//     console.log( 'edad: ', personaje.edad );
//     console.log( 'trajes: ', personaje.trajes );
// }

// Esto es la desestructuracion de argumentos
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log( {nombre} );
    console.log( {codeName} );
    console.log( {vivo} );
    console.log( {edad} ); 
    console.log( {trajes} );
}

imprimePropiedades ( tony );

