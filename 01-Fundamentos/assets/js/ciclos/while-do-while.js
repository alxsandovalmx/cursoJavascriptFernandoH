// Para la ejecucion multiple de un codigo

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// Para que un while se ejecute la validacion debe ser verdadera
// undefined, null, false -> Son condiciones consideradas falsas que harian que el codigo nunca se ejecute
while ( i< carros.length) {
    console.log( carros[i] );
    //i = i + 1;
    i++;
}

i = 0;

// Una mejoria, cuando el valor es undefined rompe el ciclo
while ( carros[i] ) {
    if ( i === 1 ){
        // break;
        i++; // Como suma 1, no aparece 'Mazda'
        continue;
    } 
    console.log( carros[i] );
    i++;
}

// Do While: la unica diferencia con el while es que este se ejecuta al menos la 1a vez
let j = 10;

do {
    console.log( carros[j] ); // Imprime Undefined porque el indice no existe
    j++;
} while ( carros[j] );




