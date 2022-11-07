// callbacks.js - Definicion del Callback

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
}

// El callback es la funcion que debe ejecutarse despues de terminar el proceso con el idHeroe
// El manejo del error se realiza del lado del callback
// El estandar es que el primer argumento del callback es el error
export const buscarHeroe = ( idHeroe, callback) => {

        const heroe = heroes[idHeroe];

        if ( heroe ) {

            // Si no hay error se envia un null
            callback(null, heroe);

        } else {

            // Esta es la parte del error
            callback(`No existe un heroe con el id ${ idHeroe }`);

        }
        
}
