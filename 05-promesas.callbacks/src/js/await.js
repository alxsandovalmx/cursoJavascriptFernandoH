// await.js
import { buscarHeroeAsync, buscarHeroe } from './promesas';

const heroesIds = ['Capi', 'Iron', 'Spider'];
// const heroesPromesas = heroesIds.map( id => buscarHeroe (id) );
const heroesPromesas = heroesIds.map( buscarHeroe ); // Es lo mismo que lo anterior

export const obtenerHeroesArr = async () => {

    // Map recorre un arreglo y regresa un nuevo arreglo con sus valores tranformados
    // return heroesIds.map( heroesIds, buscarHeroe( heroesIds ) );
    return await Promise.all(heroesIds.map( buscarHeroe )); // Es lo mismo que lo anterior

};

export const obtenerHeroeAwait = async ( id ) => {

    // Para manejar el error en la deficion de la funcion con await se usa el 'try' y en 'catch'    
    
    try {
        
        const heroe = await buscarHeroeAsync (id);
        return heroe;

    } catch (error) {
        console.log(`CATCH!`);
        // console.log( error );
        
        // Si no podemos el throw enviaria un 'Undefined' que no podra ser tratato por el 'catch'
        // throw error;

        // Si deseo que no se termine mi proceso puedo enviar un objeto literal si no lo encuentra
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };

    }
    
};

// Uso del for await
export const heroesCiclo = async () => {

    console.time('HeroesCiclo');

    // const heroes = await Promise.all ( heroesPromesas  );
    // heroes.forEach( heroe => console.log( heroe ) )

    // Es lo mismo que lo anterior pero usando el for await
    // El await siempre debe estar dentro de una funcion async
    // Este hilo de ejecucion continua de manera secuencial
    for await  (const heroe of heroesPromesas ){

        console.log( heroe );

    }

    // Esta forma crea otro hilo de ejecucion y el programa continua
    // heroesPromesas.forEach( async p => console.log( await p ) )

    // console.log( heroes );
    console.timeEnd( 'HeroesCiclo' );
};

// Uso del if await

export const heroeIfAwait = async (id) => {

    // Sin el await Regresa una promesa y compararia contra un string
    if ( ( await buscarHeroeAsync(id) ).nombre === 'Ironman' ) { 
        console.log( 'Es el mejor de todos' );
    } else {
        console.log( 'Naaaa' );
    }

};