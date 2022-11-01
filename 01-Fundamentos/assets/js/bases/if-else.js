// if and if else

let a = 10;

if ( a >= 10 ){
    console.log( 'A es igual o mayor a 10' );
} else {
    console.log( 'A es menor a 10' );
}

console.log( 'Fin del programa' );

// Crear objeto date
const hoy = new Date();
// getDay() obtiene el dia actual
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: Martes, 3: Miercoles, 4: Jueves, etc.

console.log( dia );

// Debe considerarse el tipo de dato a evaluar
if ( dia === 4 ) {
    console.log( 'Domingo' );
} else {
    console.log( 'No es Domingo' );
}

// Es una asignacion =
// Es igual a su contenido ==
// Es igual a su contenido y a su tipo ===
// * Para realizar varias validaciones no es correcto usar if anidados

dia = 4;

const diasLetras = {
    1: 'Lunes',
    0: 'Domingo',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}
console.log( diasLetras[dia] || 'Dia no valido' );

// Misma solucion pero con arreglos, es mas limpia
const diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log( diaLetras[7] || 'Dia no valido' );


