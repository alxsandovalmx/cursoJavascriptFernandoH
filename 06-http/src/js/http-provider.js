// http-provider.js
// Creacion del archivo http-provider

const jokeUrl       = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios   = 'https://reqres.in/api/users?page=2';  

// Cloudinary
const cloudPreset = 'aapsmx'; 
const cloudURL = 'https://api.cloudinary.com/v1_1/dcxakw6tc/upload';

const obtenerChiste = async ( ) => {

    try {

        // Peticion HTTP con el fetch()
        const respuesta = await fetch( jokeUrl );

        // Manejamos el erroe en el archivo proveedor
        if ( !respuesta.ok ) throw 'No se pudo realizar la peticion HTTP';

        // Con el json() extraemos la informacion contenida body
        // Con el await esperamos hasta que se resuelva la peticion y procesamiento de la data
        const {icon_url, id, value} = await respuesta.json();

        return { icon_url, id, value };

    } catch (error) {

        // Se ejecuta un throw que impide que se ejecute el then donde es llamada la funcion
        throw error;

    }
};

const obtenerUsuarios = async () => {

    try {

        // Peticion HTTP con el fetch()
        const respuesta = await fetch( urlUsuarios );

        // Manejamos el erroe en el archivo proveedor
        if ( !respuesta.ok ) throw 'No se pudo realizar la peticion HTTP';

        // Con el json() extraemos la informacion contenida body
        // Con el await esperamos hasta que se resuelva la peticion y procesamiento de la data
        const {data:usuarios} = await respuesta.json();

        // id, email, first_name, last_name, avatar
        return usuarios;
       
    } catch (error) {

        // Manejo del error
        throw error;
        
    }

};

// ArchivoSubir es de tipo File
const subirImagen = async ( archivoSubir) => {

    // FormData nos crea un formulario para el POST
    const formData = new FormData();
    
    // Cloudinary recibe estos 2 parametros para la peticion de insercion de imagenes
    formData.append('upload_preset', cloudPreset );
    formData.append('file', archivoSubir );

    try {
        
        // Peticion HTTP con el fetch()
        const respuesta = await fetch( cloudURL, { // Envio de datos a la peticion

            // El protocolo de comunicacion es POST
            method: 'POST',
            // La forma de la data depende del backed
            body: formData

        });

        // Manejamos el erroe en el archivo proveedor
        if ( !respuesta.ok ) throw 'No se pudo realizar la peticion HTTP';

        // Con el json() extraemos la informacion contenida body
        // Con el await esperamos hasta que se resuelva la peticion y procesamiento de la data
        const cloudRespuesta = await respuesta.json();
        
        console.log( cloudRespuesta );

        // En la respuesta de la peticion viene un parametro llamado secure_url
        return cloudRespuesta.secure_url;

    } catch (error) {
        throw error;
    }
};

// Exportacion de funciones
export {

    obtenerChiste, 
    obtenerUsuarios,
    subirImagen

}
