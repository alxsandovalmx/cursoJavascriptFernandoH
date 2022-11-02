// Uso de propiedades privadas

class Rectantgulo {
    #area = 0;

    constructor (base =0, altura=0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea (){
        console.log(  this.#area * 2 );
    }

}

const rectangulo = new Rectantgulo (10,15);
// Esto deberia ser una propiedad privada
// rectangulo.#area = 100;
rectangulo.calcularArea ();

// No existen metodos privados aun
console.log( rectangulo );


