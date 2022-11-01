// Funciones basicas y de flecha

// Definicion: Debe realizarse al principio
function saludar() {
    console.log('Hola mundo');
}
// Llamado de la funcion
saludar();

// Funcion anonima: no especifica su nombre
// Al asignar la funcion a una constante evita modificaciones
const saludar2 = function() {
    console.log('Hola Mundo');
}

saludar2();

// Argumentos de una funcion (nombre)
function saludar3( nombre ) {
    console.log( arguments );
    console.log('Hola ' + nombre);
}

// Argumentos de la funcion
saludar3( 'Alexis', 40, true, 'Costa rica' );

// Lambda Functions o funciones de flecha
// Cuando se envia 1 argumento a la funcion los () son opcionales
// const saludarFlecha = nombre => {
const saludarFlecha = ( nombre ) => {
    console.log('Hola Flecha con ', nombre );
    // return 1;
}

// Todas las funciones retornan undefined si no se especifica un valor
let retorno = saludarFlecha('Alexis');
console.log( {retorno} );

// Las funciones deben ser creadas para realizar 1 operacion y retornar un resultado
function sumar( a, b, ) {
    return a + b;
}

console.log( sumar(1,2) );

// Misma funcion como lambda y con una sola linea (return)
const sumar2 = ( a, b ) => {
    return a + b;
}
const sumar3 = ( a, b ) => a + b;

console.log( sumar2(1,3) );
console.log( sumar3(1,3) );

// Cuando se llama a una funcion lambda siempre va con ()

function getAleatorio(){
    return Math.random();
}
console.log( getAleatorio() );

const aleatorio = () => Math.random();
console.log( aleatorio() );




