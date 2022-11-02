// Singleton... Es una instancia unica de la clase

class Singleton {
    // Parametros estaticos
    static instancia; //undefined
    nombre = '';

    // Constructor
    constructor(nombre = '') {
        // console.log( Singleton.instancia );

        // Es mejor evaluar booleanos
        if ( !!Singleton.instancia ){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

    }
}

// Aunque haga varias instancias, siempre van a apuntar a la clase unica
const instancia1 = new Singleton('Ironman');
const instancia2= new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log( `Nombre en la instancia1 es: ${ instancia1.nombre } `);
console.log( `Nombre en la instancia2 es: ${ instancia2.nombre } `);
console.log( `Nombre en la instancia3 es: ${ instancia3.nombre } `);


