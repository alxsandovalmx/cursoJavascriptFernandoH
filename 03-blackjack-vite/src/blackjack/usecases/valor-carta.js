/**
 * Obtiene el valor de la carta
 * @param {String} carta Recibe una carta
 * @returns Retorna el valor númerico correspondiente a la carta recibida
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}