// Contiene la informacion de la Clase ToDo
export class ToDo {

    // Solucion del uso de elementos almacenados en el LocalStorage
    // Uso de la desestructuracion de argumentos
    static fromJSON( { tarea, id, completado, creado } ){

        const temToDo = new ToDo ( tarea )

        temToDo.id         = id;
        temToDo.completado = completado;
        temToDo.creado     = creado;

        return temToDo;

    }

    constructor ( tarea ) {
        this.tarea      = tarea;
        // Regresa la representacion del tiempo actual (147284223) que puede servir como un id
        this.id         = new Date ().getTime();
        this.completado = false;
        this.creado     = new Date();
    }



    
}