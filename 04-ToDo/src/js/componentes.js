// Componentes
// Import de las Clases
import { ToDo } from '../classes'; // Por defecto buscara el archivo index.js
import { toDoList } from '../index'; // Por defecto buscara el archivo index.js

// Referencias en el HTML
const divToDoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

// Para la creacion de un nuevo elemento de la lista de tareas
export const crearToDoHTML = ( toDo ) => {

    // Aqui se maneja la creacion de un nuevo elemento <li> de <ul class="todo-list">
    const htmlToDo = `
        <li class=" ${ (toDo.completado ? "completed": "" )  } " data-id="${ toDo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ toDo.completado ? "checked": "" }>
            <label>${ toDo.tarea } </label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlToDo;
    // Dentro de un <ul> no deberia insertar un <div>, por eso debo insertar el primer hijo nadamas
    divToDoList.append( div.firstElementChild );
    return div.firstElementChild;

}

// Eventos
// En el 'keyup' los eventos importantes son target->value y el keyCode que contiene la informacion de la tecla presionada
// Evento de la captura del teclado
txtInput.addEventListener('keyup', ( evento ) => {
    
    if ( evento.keyCode === 13 && txtInput.value.length > 0 ){ // 13 = Enter
        
        // console.log( txtInput.value ); // value tiene el contenido
        const nuevoToDo = new ToDo( txtInput.value );
        
        // Se agrega la nueva tarea al arreglo de tareas
        toDoList.nuevoToDo( nuevoToDo );
        console.log( 'Evento de Escribir' );
        console.log( toDoList );

        // Se crea un nuevo <li> de la lista de tareas
        crearToDoHTML( nuevoToDo );
        
        // Se limpia el textinput de ingreso de tareas
        txtInput.value = "";

    }
});

// Evento del click en el check de completado
divToDoList.addEventListener('click', (evento) => {

    // console.log( 'click' );
    // console.log( evento.target.localName );

    const nombreElemento = evento.target.localName; // Recibe input, label o button
    const toDoElemento = evento.target.parentElement.parentElement; // Obtiene elemento Padre

    const idToDoElemento = toDoElemento.getAttribute('data-id');

    // console.log( idToDoElemento );
    // console.log( toDoElemento );

    if( nombreElemento.includes('input') ){ //Click en el check

        toDoList.marcarEstadoToDo( idToDoElemento );

        // classList obtiene todas las clases del elemento y toggle activa/desactiva
        toDoElemento.classList.toggle('completed');

    } else if ( nombreElemento.includes('button')){ // Click en el boton
        toDoList.eliminarToDo( idToDoElemento );

        divToDoList.removeChild( toDoElemento ); // Elimina el Hijo de divToDoList = toDoElemento
    }

    console.log( 'Evento de completar' );
    console.log(  toDoList );

} );

// No se necesita capturar datos del evento sino solo realizar la accion
btnBorrar.addEventListener('click', () => {
            
    toDoList.eliminarCompletados();

    // Para obtener el todal de hijos de un Elemento HTML
    for(let i = divToDoList.children.length-1; i >= 0; i-- ){   
        
        const elementoToDo = divToDoList.children[i];

        // Para comprobar si un elemento tiene la clase 'completed'
        if ( elementoToDo.classList.contains('completed')){

            divToDoList.removeChild( elementoToDo ); // Elimina el Hijo de divToDoList = toDoElemento

        }
        console.log( 'Evento de borrar' );
        console.log( elementoToDo );

    }

});

// Evento 
ulFiltros.addEventListener('click', ( evento ) => {

    // console.log( evento.target.text );

    const filtro = evento.target.text;

    // !Undefined = true... !!Undefined = false
    if ( !filtro ) { return; }

    // Borra la clase selected que todos los elementos con la clase filtro 
    anchorFiltros.forEach( elem => elem.classList.remove('selected') );

    // Agrega la clase selected al elemento donde se hace click
    evento.target.classList.add('selected');

    for( const elementoToDo of divToDoList.children ){
        
        // Por defecto se establecio que remueva todos los elementos hidden
        elementoToDo.classList.remove('hidden');

        // classList.contains('completed') regresa true o false si tiene o no el elemento 'completed'
        const completadoToDo = elementoToDo.classList.contains('completed');

        // Los casos son 'Pendientes' y 'Completados'
        // El caso de Todos esta por defecto porque se quita inicialmente la clase '.hidden'
        switch( filtro ){

            // Si el ToDo esta completado es true entonces debe ocultarse al pedir Pendientes
            case 'Pendientes':
                if ( completadoToDo ) {
                    elementoToDo.classList.add('hidden');
                }
            break;

            // Si el ToDo no esta completado es false entonces al negarse se vuelve verdadero y debe ocultarse porque se piden los completados
            case 'Completados':
                if ( !completadoToDo ) {
                    elementoToDo.classList.add('hidden');
                }
            break;
        }

    }

} );