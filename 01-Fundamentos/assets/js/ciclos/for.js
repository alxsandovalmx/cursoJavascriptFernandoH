// Ciclo for: 3 tipos diferentes

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('Forma Tradicional');

// Aqui tambien se tiene que validar los errores de logica
for (let i = 0 ; i < heroes.length ; i++){
    console.log( heroes[i] );
}

// For in
// Barre el ciclo avanzando por el indice el elemento del arreglo
console.warn('For in');

// La variable let i en el for in solo existe dentro del scope del for
for (let i in heroes ) {
    console.log( heroes[i] );
}

// For of
// Barre el arreglo asignando cada valor a la variable hasta terminar
console.warn('For of');
for (let heroe of heroes){
    console.log( heroe );
}

// Muchos utilizan la variable i y luejo j
