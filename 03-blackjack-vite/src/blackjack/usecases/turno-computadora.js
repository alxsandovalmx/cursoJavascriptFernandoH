import { pedirCarta, valorCarta, crearCartaHTML } from './index';

/**
 * Función que gestiona los puntos obtenidos por la Computadora
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML que muestra los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora Elemento HTML donde se mostraran las cartas
 * @param {Array<String>} deck Recibe el deck
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck=[] ) => {

    if( !puntosMinimos ) throw new Error('Los puntos mínimos son necesarios');
    if( !puntosHTML ) throw new Error('El Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}