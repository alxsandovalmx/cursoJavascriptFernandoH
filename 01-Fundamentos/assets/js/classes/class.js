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

// Cuando se crea una instancia sin parametros envia undefined lo cual debe ser tratato
const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
// const ironman = new Persona('Tony Stark', 'Ironman', 'Soy Ironman');


// Uso del Set
spiderman.setComidaFavorita = 'Pastel';

// Esto deberia fallar sin embargo se agrega una propiedad
spiderman.nemesis = 'Duende verde';

// Si hacemos lo mismo con una propiedad existente la reempleza aunque esta dentro de la instancia para esto JS implemento las propiedad privadas que por ahora solo chrome ha implementado
spiderman.comida = 'Duende verde'

console.log( spiderman.getComidaFavorita );

console.log( spiderman );

// Persona._conteo = 2;

console.log( 'Conteo estatico ' + Persona._conteo );
console.log( 'Conteo estatico ' + Persona.getConteo );

Persona.mensaje();


// Creacion de una propiedad externa no queda en el archivo de definicion js
Persona.propiedadExterna = 'Hola externo';
console.log( Persona.propiedadExterna );

console.log( spiderman );