// crud-provider.js

// Endpoint
const urlCRUD   = 'https://reqres.in/api/users';  

// Manejo de las peticiones con la url: '/api/users/2'
// Get: '/api/users/2', Update: '/api/users/2', Delete: '/api/users/2' 
const getUsuario = async ( idUsuario ) => {

    // Peticion HTTP
    const resp = await fetch(`${ urlCRUD}/${ idUsuario }`);

    // Con el json() extraemos la informacion contenida body: ReadableStream
    // Como regresa un objeto puedo usar la desestructuracion y obtener la data
    const { data } = await resp.json();

    return data;
 
};

// Peticion POST para crear un Usuario
const crearUsuario = async ( usuario ) => {

    // Peticion HTTP
    const resp = await fetch( urlCRUD, { // Envio de datos a la peticion

        // El protocolo de comunicacion es POST
        method: 'POST',
        // La forma de la data depende del backed
        body: JSON.stringify( usuario ), // Transformamos un objeron en un JSON
        // A veces se necesita especificar los headers (data adicional)
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Podia ser return true
    return await resp.json() ;

};

// Peticion PUT para actualizar un usuario (Asi se llaman tambien los servicios REST)
const actualizarUsuario = async ( idUsuario, usuario ) => {

    // Peticion HTTP
    const resp = await fetch( `${ urlCRUD}/${ idUsuario }`, { // Envio de datos a la peticion

        // El protocolo de comunicacion es POST
        method: 'PUT',
        // La forma de la data depende del backed
        body: JSON.stringify( usuario ), // Transformamos un objeron en un JSON
        // A veces se necesita especificar los headers (data adicional)
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Podia ser return true
    return await resp.json() ;

};

// Peticion para eliminar un usuario
const eliminarUsuario = async ( idUsuario ) => {

    // Peticion HTTP
    const resp = await fetch(`${ urlCRUD}/${ idUsuario }`, { // Envio de datos a la peticion

        // El protocolo de comunicacion es DELETE
        method: 'DELETE'

    });

    // La data contiene un parametro llamado ok que tiene true/false
    return ( resp.ok ) ? 'Eliminado!' : 'No se pudo eliminar!'; // Se puede regresar un throw error
 
};

// Exportacion de funciones
export {

    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario

}

