// Archivo que maneja la creacion de elementos usuarios en el HTML
// Peticion HTTP a un endpoint de Usuarios

import { obtenerUsuarios } from './http-provider';

// Obtiene el body del HTML
const body  = document.body;
let tbody;
let contadorUsuario = 1;

// Crea codigo html que sera insertado
const crearHtml = () => {
    
    const html = `
        <h1 class="mt-5">Usuarios</h1>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Avatar</th>
                </tr>
            </thead>
            <tbody>
                <!-- Aqui se insertara la informacion dinamicamente -->
            </tbody>
        </table>
    `;

    // Crea un <div> que contendra el HTML anterior
    const div = document.createElement('div');
    // Se agrega el codigo HTML al <div>
    div.innerHTML = html;
    // Se agrega al body el <div> como un hijo
    body.appendChild( div );

    // Obtiene el tbody
    tbody = document.querySelector('tbody');

};

const crearFilaUsuario = ( usuario ) => {

    // Se define el codigo HTML que sera insertado en el <tbody>
    const html = `
        <td scope="col"> ${ contadorUsuario++ }. </td>
        <td scope="col"> ${ usuario.email } </td>
        <td scope="col"> ${ usuario.first_name } ${ usuario.last_name } </td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;

    // Se crea un <tr> que contendra el codigo html
    const tr = document.createElement('tr');
    // Se agrega el codigo html al <tr>
    tr.innerHTML = html;

    // Se agrega el <div> al tbody
    tbody.appendChild(tr);

};

export const init = async() => {

    crearHtml();
    contadorUsuario = 0;
    
    // Por cada elemento del arreglo llamamos a la funcion de crear <li>
    ( await obtenerUsuarios() ).forEach( crearFilaUsuario );

};

