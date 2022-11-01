// Logica Booleana

const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log(!true); // Negacion // false
console.log(!false); // Negacion // true
console.log(!!false); // Doble negacion // false

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false

console.log('=================');
console.log(regresaFalse() && regresaTrue()); // Cuando hay una doble validacion y la primera condicion no se cumple, JS no ejecuta la segunda validacion en el caso del &&
console.log(regresaTrue() && regresaFalse());

// Operador OR || (Tuberia o pipe)
console.warn('OR'); // true si algunio de los valores son verdaderos
console.log(true || false); // true
console.log(false || false); // false
console.log(regresaTrue() || regresaFalse()); // Cuando hay una doble validacion y la primera condicion se cumple, JS no ejecuta la segunda validacion en el caso del ||

console.log('4 condiciones: ', true || true || true || false); // true

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// Al crear una variable con operadores &&, toma el ultimo valor cuando todo es true y si algun valor es falso entonces toma el valor de false.
const a1 = true && 'Hola mundo' && 150;
console.log({ a1 });
// a1: 150

// En el caso del OR toma el primer valor verdadero que encuentre y no ejecuta lo demas
const a2 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true;
console.log( a2 );






