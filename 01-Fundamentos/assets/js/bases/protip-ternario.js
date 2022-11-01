// Protips del Operador Ternario

// Puede usarse sin parentesis pero es buena practica dejarlos
const elMayor = ( a, b ) => ( a>b ) ? a : b; 

console.log( elMayor(20,15) );

// Cuando un operador ternario no tiene una evaluacion algunos omiten los ()
const tieneMembresia = ( miembro ) => (miembro) ? '2 dolares' : '10 dolares';
console.log( tieneMembresia(true) );

// El operador ternario tambien es muy util al generar arreglos u objetos
const amigo = false;
const amigosarr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(20,15)
];

console.log( amigosarr );

// Ejemplo del uso del operador ternario en un arreglo de calificaciones
const nota = 82.5;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C': 'F';

console.log( {nota, grado} );


