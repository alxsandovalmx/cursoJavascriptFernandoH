/*
 * En los dias de la semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9 am
 */

// Entra a un sitio web, para consultar si esta abierto hoy....
const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, esta cerrado, hoy abrimos a las XX

// Existen errores de sintaxis y errores de logica
// if (dia === 0 || dia === 6) {
if ([0, 6].includes(dia)) { // Una forma mas corta
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Dia de la semana');
    horaApertura = 11;
}

if (horaActual >= horaApertura) {
    mensaje = 'Esta abierto';
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({ horaApertura, mensaje });

// Uso de los operadores ternarios
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });



