// chistes.page.js
// Archivo para manejar los chistes

import { obtenerChiste } from './http-provider';

// Se obtiene el body completo
const body = document.body;
let btnOtro, olList, contadorChiste = 1;

const crearChistesHtml = ( ) => {

    // Se define el codigo HTML que sera insertado en el <div>
    const html = `

        <h1 class="mt-5">Chistes</h1>
        <hr>
        <button class="btn btn-primary">Otro chiste</button>
        <ol class="mt-2 list-group">
            <!-- Aqui se creara dinamicamente un <li>  -->
        </ol>
    `;

    // Se crea un <div> que contendra el codigo html
    const divChistes = document.createElement('div');
    
    // Se agrega el codigo html al <div>
    divChistes.innerHTML = html;
    
    // Se agrega el <div> al body
    body.append(divChistes); 

};

// Eventos
const eventos = () => {

    // Se llama al elemento <ol>
    olList = document.querySelector('ol');
    
    // Se llama al elemento <button>
    btnOtro = document.querySelector('button');

    // Se crea un evento de 'click' para el boton
    btnOtro.addEventListener('click', async ()=> {

        btnOtro.disabled = true;

        // const chiste = await obtenerChiste();
        dibujarChiste( await obtenerChiste() );

        btnOtro.disabled = false;

    });
};

// Chiste {icon_url, id, value }
const dibujarChiste = ( chiste, ) => {

    // Se crea un elemento <li>
    const olItem = document.createElement('li');

    // Se agrega un <b> con el contenido recibido de dibujarChiste()
    olItem.innerHTML = `<b>${contadorChiste++}. ${ chiste.id }</b>: ${ chiste.value } `;

    // Se agrega la clase del Boostrap al <li>
    olItem.classList.add('list-group-item');
    
    // Se inserta el <li> creado en el <ol> llamado
    olList.append(olItem);

};

// Funcion que se debe ejecutar cuando se va a renderizar la pagina
// Normalmente se llama init
export const init = () => {

    // El orden de la ejecucion importa
    crearChistesHtml();
    eventos();

};
