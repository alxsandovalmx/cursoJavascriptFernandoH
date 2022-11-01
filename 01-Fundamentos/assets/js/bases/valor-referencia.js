// Cuando modificamos primitivos o los enviamos como argumentos siempre es por valor, no se modifica el espacio en memoria.
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// ► {a: 30, b: 10}

// En JS todos los objetos son pasados por referencia
// Este tipo de asignaciones generan problemas de referencia
let juan = { nombre: 'Juan' };
let ana = juan;
ana.nombre = 'Ana';

console.log({ juan, ana });

/*
  ► {juan: {…}, ana: {…}}
    ana: {nombre: 'Ana'}
    juan: {nombre: 'Ana'}
*/

// Otro ejemplo de errores de referencia
const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log(peter, tony);
/*
  ► {nombre: 'Tony'}
    {nombre: 'Tony'}
*/

// Para evitarlos al hacer una copia de un objeto se utiliza el operador operador spread { ...objeto }
// Esto rompe la relacion entre los objetos y hace que apunten a espacios de memoria diferentes
let juan2 = { nombre: 'Juan' };
let ana2 = { ...juan };
ana2.nombre = 'Ana';

console.log({ juan2, ana2 });

/*
  ► {juan2: {…}, ana2: {…}}
    ana2: nombre: "Ana"
    juan2: nombre: "Juan"
*/

// Correccion usando el operador spread { ...objeto }
// Con el operador spread se crea una copia independiente
const cambiaNombre2 = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter2 = { nombre: 'Peter' };
let tony2 = cambiaNombre2(peter2);

console.log(peter2, tony2);
/*
  ► {nombre: 'Peter'}
    nombre: "Peter"
    {nombre: 'Tony'}
    nombre: "Tony"
*/

// Arreglos
const frutas = ['Manzana', 'Pera', 'Pina'];
const otrasFrutas = frutas;

otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });

// Usando el operador Spread
const frutas2 = ['Manzana', 'Pera', 'Pina'];
const otrasFrutas2 = [...frutas2];

otrasFrutas2.push('Sandia');

// Otra manera es utilizando el metodo slice que corta un arreglo pero si no se especifica un valor envia el mismo arreglo rompiendo la relacion de referencia
const otrasFrutas3 = otrasFrutas.slice();
otrasFrutas3.push('Uva');

console.table({ frutas2, otrasFrutas2, otrasFrutas3 });

// Validar el tiempo de la operacion
console.time('slice');
const otrasFrutas4 = otrasFrutas.slice();
// Fin de la validacion del tiempo de operacion
console.timeEnd('slice');

console.time('spread');
const otrasFrutas5 = [...otrasFrutas];
// Fin de la validacion del tiempo de operacion
console.timeEnd('spread');

// En conclusion, el operador spread {... } es mas rapido que el metodo slice()




