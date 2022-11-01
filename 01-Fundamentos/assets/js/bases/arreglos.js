// Arreglos []
// Tienen relacion entre si
// let arregloCosas = [
//     // Valores
//     true,
//     123,
//     'Alexis',
//     1 + 2,
//     function(){},
//     ()=>{},
//     { a: 1 },
//     ['X', 'Megaman', 'Zero']
// ];

// console.log( arregloCosas[7][2] );

// const arreglo = new Array(5);
// console.log( arreglo );

// const arr = [];
// console.log(arr);

// let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono'];
// console.log( videoJuegos );

// console.log( videoJuegos[0] );

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log( 'Largo: ', juegos.length );

let primero = juegos[ 2 - 2 ];
let ultimo = juegos [ juegos.length - 1 ];

console.log( primero );
console.log( ultimo );

juegos.forEach( ( elemento, indice, arr ) => {
    console.log({ elemento, indice, arr });
})

// Agrega un elemento al final del arreglo
let newLength = juegos.push ( 'F-Zero' );
console.log( {newLength, juegos} );

// Agrega un elemento al principio del arreglo
newLength = juegos.unshift('Fire Emblem');
console.log( {newLength, juegos} );

// Borra el ultimo elemento del arreglo
let juegoBorrado = juegos.pop();
console.log( {juegoBorrado, juegos} );

// Borrar un elemento especifico (indice, #elementos)
let posicion = 1;
let juegosBorrados = juegos.splice( posicion, 2); 
console.log({ juegosBorrados, juegos });

// Conocer en que indice se encuentra un elemento
// -1 no encontro el elemento
// Es case sensitive
let metroidIndex = juegos.indexOf('Metroid');
console.log( metroidIndex );
