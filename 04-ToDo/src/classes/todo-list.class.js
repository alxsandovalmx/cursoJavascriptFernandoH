import { ToDo } from './todo.class';

// Definicion de la clase para agrupar las ToDo
export class ToDoList {

    constructor () {
        
        // this.toDos = [];
        this.cargarLocalStorage ();

    }

    nuevoToDo( toDo ) {

        this.toDos.push( toDo );
        this.guardarLocalStorage ();

    }

    eliminarToDo( idToDo ){

        // Regresa un nuevo arreglo excluyendo el elemento donde el id sea igual
        this.toDos = this.toDos.filter( toDo => toDo.id != idToDo  );
        this.guardarLocalStorage ();

    }

    marcarEstadoToDo( idToDo ){

        for ( const toDo of this.toDos ){
            
            // console.log( typeof(idToDo) ); // Obtiene el tipo de dato
            // console.log( parseInt(idToDo, 10)  , toDo.id ); //Transforma un String a Numero

            if( toDo.id  ===  parseInt(idToDo, 10) ){ // Iguales en su contenido y tipo de dato

                // console.log( !toDo.completado );
                toDo.completado = !toDo.completado;
                this.guardarLocalStorage ();
                break;

            }
        }
    }

    eliminarCompletados(){
         // Regresa un nuevo arreglo excluyendo el elemento donde la propiedad completado sea != true
         this.toDos = this.toDos.filter( toDo => !toDo.completado  );
         this.guardarLocalStorage ();
    }

    guardarLocalStorage (){

        // Convertimos el objeto toDos en un JSON y lo agregamos como un elemento clave:valor
        localStorage.setItem( 'ToDo', JSON.stringify( this.toDos ) );
    }

    cargarLocalStorage (){

        // // Primero debemos confirmar que existe el elemento 'ToDo'
        // if ( localStorage.getItem('ToDo') ){
            
        //     // Se transforma de un objeto JSON a un arreglo
        //     this.toDos = JSON.parse ( localStorage.getItem( 'ToDo' ) );

        //     // console.log('Cargar LocalStorage: ', this.toDos );
        //     // console.log( typeof (this.toDos));

        // } else {
        //     // Si no existe la llave:valor 'ToDo', inicializa el arreglo vacio
        //     this.toDos = [];
        // }

        this.toDos = localStorage.getItem('ToDo')
                    ? JSON.parse ( localStorage.getItem( 'ToDo' ) )
                    : [];

        // this.toDos = this.toDos.map( obj => ToDo.fromJSON( obj )  );
        this.toDos = this.toDos.map( ToDo.fromJSON );
        

    }

}