// Componentes
import '../css/componentes.css';

// Las imagenes pueden tratadas como una importacion normal
// import webpacklogo from '../assets/img/webpack-logo.png';

// Para poder exportar una funcion debe escribir export
export const saludar = ( nombre ) => {

    console.log( 'Creando etiqueta h1' );

    const h1 = document.createElement ('h1');
    h1.innerText = `Hola ${ nombre }!!`;

    document.body.append( h1 );

    // // Uso de la imagen
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);
}

