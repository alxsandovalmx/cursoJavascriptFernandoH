// Para el manejo del HTML

import { subirImagen } from './http-provider';

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHTML = ( ) => {

    // accept="image/png, image/jpeg" es para especificar que tipo de archivos son selecionables
    const html = `
        <h1 class="mt-5">Subir archivos</h1>
        <hr>
        <label>Selecciona una fotografia: </label>
        <input type="file" accept="image/png, image/jpeg"/>
        <br>
        <img id="foto" class="img-thumbnail" src="">
    `;

    // Crea un <div> que contendra el HTML anterior
    const div = document.createElement('div');

    // Se agrega el codigo HTML al <div>
    div.innerHTML = html;

    // Se agrega al body el <div> como un hijo
    body.append( div );

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto'); //Tambien puede ser ('img')

};

const eventos = () => {

    inputFile.addEventListener('change', ( evento )=>{

        // Dentro del target del evento existe la llave files
        // Si usara un selector multiple, tendria que usar un for, forEach para recorrer cada elemento
        const file = evento.target.files[0];

        // Hace la peticion para subir una imagen
        subirImagen(file).then( urlImgCloud => imgFoto.src = urlImgCloud )
    });
};



export const init = () => {

    crearInputFileHTML();
    eventos();

}