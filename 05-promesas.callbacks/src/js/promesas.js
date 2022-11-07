// promesas.js 

// Uso de las promesas
const heroes = {
    Capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    Iron: {
        nombre: 'Ironman',
        poder: 'Cantidad de dinero'
    },
    Spider: {
        nombre: 'Spiderman',
        poder: 'Poder de arañas'
    },
};

// Funcion Promesa
export const buscarHeroe = (idHeroe) => {

    const heroe = heroes[idHeroe];

    return new Promise( ( resolve, reject ) => {

        if ( heroe ) {

            // setTimeout(() => {
            //     resolve ( heroe );
            // }, 1000);
            // Es lo mismo que lo anterior
            setTimeout( () => resolve ( heroe ), 1000 );

        } else {

            reject (`No existe un heroe con el id ${ idHeroe }`);

        }
    });
};

// Funcion Promesa con el Async
export const buscarHeroeAsync = async (idHeroe) => {

    const heroe = heroes[idHeroe];

    if ( heroe ) {

        return heroe;
        
    } else {

        // Cuando queremos saber mas detales del error que ocurrio
        // throw Error (`No existe un heroe con el id ${ idHeroe }`); 
        throw `No existe un heroe con el id ${ idHeroe }`;

    }
};

// Uso del Promise.race
const promesaLenta = new Promise ( ( resolve, reject ) => {

    setTimeout ( () => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise ( ( resolve, reject ) => {

    setTimeout ( () => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise ( ( resolve, reject ) => {

    setTimeout ( () => resolve('Promesa Rapida'), 1000);
});

// Para exportar varias funciones al mismo tiempo
export {
    promesaLenta, 
    promesaMedia, 
    promesaRapida
}