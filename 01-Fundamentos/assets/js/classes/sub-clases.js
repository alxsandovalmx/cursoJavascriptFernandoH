// Definicion e inicializacion de una clase

class Persona {

    // Propiedades estaticas van abajo de la deficion de la clase
    static _conteo = 0;

    static get getConteo (){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        // console.log(  this.nombre ); // Undefined
        console.log( 'Soy un metodo estatico' );
    }

    // Las propiedades pueden declararse aqui o en el constructor y si se declaran fuera sera undefined
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // Solo el constructor retorna una instancia de un objeto y no un undefined
    constructor (nombre = 'No name', codigo = 'No code', frase = 'No phrase'){
        console.log( 'Hola!' );
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }
    
    // El Set solo deberia recibir un solo argumento
    // El Set no puede tener el mismo nombre que la propiedad porque crearia un ciclo infinito
    // Por eso algunos usan la propiedad con _ y el set sin _
    set setComidaFavorita ( comida ){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita (){
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
    }

    // Metodos = Funciones
    quienSoy (){
        console.log( `Soy ${this.nombre} y mi identidad es ${this.codigo}` );
    }

    miFrase (){
        this.quienSoy();
        console.log( `${this.codigo} dice: ${this.frase} ` );
    }
    
}

// Uso del extends
class Heroe extends Persona {
    clan = 'Sin clan';

    // Cuando no se define un constructor toma el de la clase padre
    constructor(nombre, codigo, frase){
        // Llamada al constructor del Padre, va primero
        super (nombre, codigo, frase);
        
        this.clan = 'Avengers'
    }

    quienSoy (){
        console.log( `Soy ${this.nombre}, ${this.clan}` );
        super.quienSoy();
    }
}

// const spiderman = new Heroe ();
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');

console.log( spiderman );
spiderman.quienSoy();


