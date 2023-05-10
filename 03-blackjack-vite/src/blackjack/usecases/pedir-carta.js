/**
 * Esta función permite tomar una carta del deck
 * @param {Array<String>} deck Recibe un deck como un Array
 * @returns Retorna una carta o undefined si el deck no tiene cartas
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) throw new Error('No hay cartas en el deck');

    const carta = deck.pop();

    return carta;
}