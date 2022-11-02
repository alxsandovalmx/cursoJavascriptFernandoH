// Multiples constructores

class Persona {

    // Para poder recibir un objeto persona y utilizando destructuracion de argumentos
    static porObjeto ( { nombre, apellido, pais} ){
        return new Persona ( nombre, apellido, pais );
    }

    constructor ( nombre, apellido, pais ){
        this.nombre     = nombre;
        this.apellido   = apellido;
        this.pais       = pais;
    }

    getInfo (){
        console.log( `info: ${this.nombre}, ${this.apellido}, ${this.pais}` );

    }

}

const nombre1   = 'Alexis',
      apellido1 = 'Sandoval',
      pais1      = 'Mexico';

const fer = {
    nombre:     'Fernando',
    apellido:   'Herrera',
    pais:       'Chile'
}

// En JS no puede existir mas de un constructor 
// Aqui se crea una nueva instancia persona con los parametros
const persona1 = new Persona( nombre1, apellido1, pais1);
persona1.getInfo();

// Llamando a la funcion estatico como otro constructor
// Aqui se envia un objeto de tipo persona
const persona2 = Persona.porObjeto (fer);
persona2.getInfo();


