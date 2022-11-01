// Objeto literal: Objeto con pares de valores
// Los valores se muestran en la consola de forma alfabetica
let personaje = {
    // llave = valor;
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.7
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': "Infinity war", // No se puede usar notacion de .
};


console.log({ personaje });
// Acceder a un elemento del objeto literal
console.log( 'Nombre:', personaje.nombre );
console.log( 'Nombre:', personaje['nombre'] );

console.log( 'Edad:', personaje.edad );
console.log( 'Latitud:', personaje.coords.lat );
console.log( '# de trajes:', personaje.trajes.length );
console.log( 'Ultimo traje: ', personaje.trajes[personaje.trajes.length-1] );

console.log('Ultima pelicula: ', personaje['ultima-pelicula'] );

// Borrar una propiedad de un objeto
delete personaje.edad;
console.log({ personaje });

// Agregar una propiedad en tiempo de ejecucion 
personaje.casado = true;

// Hacer que un objeto sea utilizado como un arreglo
// Como arreglo si se muestra como se crearon los elementos
const entriesPares = Object.entries ( personaje );
console.log( entriesPares );

// Al hacer constante a un objeto literal se bloquea su asignacion 
// pero se pueden seguir modificando sus propiedades directas
// Para congelar sus propiedades es asi
Object.freeze( personaje );

// De esta manera no pueden agredarse propiedades directas o modificarse
personaje.dinero = 100;
personaje.casado = false;

// Pero si se pueden modificar los elementos dentro de los objetos
personaje.direccion.ubicacion = 'Costa Rica';
// Para congelar tambien esa propiedad debe realizarse otro freeze sobre ella
Object.freeze( personaje.direccion)
personaje.direccion.ubicacion = 'Mexico'; // Esto no se realizaria

console.log( personaje );

// Para conocer las propiedades de un objeto
const propiedades = Object.getOwnPropertyNames( personaje );
console.log( {propiedades} );

// Conocer los valores de las propiedades
const valores = Object.values( personaje );
console.log( {propiedades, valores} );




