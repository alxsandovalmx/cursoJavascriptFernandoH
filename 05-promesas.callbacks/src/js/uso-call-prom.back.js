// index.js

// Importacion de modulos
import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'; // Creacion de un alias
import { buscarHeroe } from './js/promesas';

const idHeroe1 = 'Capi';
const idHeroe2 = 'Spider';
const idHeroe3 = 'Iron';

// // Cuando se ejecuta un callback como resultado de acciones de otro callback se empieza a anidarse hasta volverse dificil su comprension y mantenimiento... esto es el Callback Hell
// buscarHeroe ( idHeroe1, ( err, heroe1 ) => { // 1er Callback

//     if ( err ) { return console.error ( err ); }

//     buscarHeroe ( idHeroe2, ( err2, heroe2 ) => { // 2do Callback

//         if ( err2 ) { return console.error ( err2 ); }

//             console.log( `Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la mision` );

//         buscarHeroe ( idHeroe3, ( err3, heroe3 ) => { //3er Calbacck

//             if ( err3 ) { return console.error ( err3 ); }
    
//                 console.log( `Enviando a ${heroe1.nombre}, a ${heroe2.nombre} y a ${heroe3.nombre} a la mision` );
        
//         });
//     });
// });

// Para tratar de resolver este asunto algunos crean una funcion independiente del resultado de un Callback, pero en cierta forma al final continua siendo lo mismo.
// Por esto, en el ES6 se decidio la creacion de un mecanismo y el resultado fueron las Promesas.


// buscarHeroe( idHeroe1 ).then( heroe1 => {
//     console.log( `Enviando a ${ heroe1.nombre } a la mision` );
//     buscarHeroe( idHeroe2 ).then( heroe2 => {
//         console.log( `Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la mision` );
//     });    
// });

// Envia un arreglo de objetos y con el then recibe un arreglo con la respuestas de cada objeto
// El then se ejecutara hasta que todo lo anterior se resuelva
Promise.all( [ buscarHeroe( idHeroe1 ), buscarHeroe( idHeroe2 ) ] )
    .then( ([heroe1, heroe2]) => {
    
        console.log( `Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la mision` );

    })
    .catch( err => {

        alert(err);

    })
    .finally ( ( ) => {
       
        console.log( 'Se termino el Promise.all ');

    });

console.log( 'Fin del programa' );