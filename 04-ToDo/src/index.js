// Importacion de modulos
import './styles.css';

// Tip para realizar una sola importacion
import { ToDo, ToDoList } from './classes'; // Por defecto buscara el archivo index.js
import { crearToDoHTML } from './js/componentes';

export const toDoList = new ToDoList();

console.log( toDoList.toDos );
    
// Uso del forEach
// toDoList.toDos.forEach( toDo => ( crearToDoHTML( toDo ) ));

// Cuando el argumento a enviar es solo uno puede obviarse el argumento y solo llamar la funcion
// El 1er elemento del callback del forEach esta llamando al metodo crearToDoHTML y el argumento que envia es el 1er argumento que regresa el forEach
// Si el forEach regresa mas de un argmento ya no funcionaria
toDoList.toDos.forEach( crearToDoHTML );



// const tarea = new ToDo('Aprender JS!');

// tarea.completado = false;

// toDoList.nuevoToDo ( tarea );

// console.log( toDoList );

// crearToDoHTML( tarea );

// Trabajando con el LocalStorage: Solo funciona con aplicaciones en la web.
// En el caso de node debe usarse Filesystem o una BD
// La diferencia entre el LocalStorage y SessionStorage, es que la informacion en el SessionStorage se perdera al cerrar el navegador web y en el LocalStorage se mantiene hasta un reinicio.
// Segun Mozilla MDN: La informacion almacenada en localStorage no posee tiempo de expiracion.
// Como es visible para el usuario final, no deben almacenarse cosas sensibles como contraseñas.

// Agregar un elemento al LocalStorage
// localStorage.setItem('Key','abc1234');

// Agregar un elemento al SessionStorage
// sessionStorage.setItem('Key','abc1234');

// Borrar un elemento del LocalStorage
// localStorage.removeItem('Key')

// setTimeout( ()=> {
//     sessionStorage.removeItem('Key')
// }, 1500);

