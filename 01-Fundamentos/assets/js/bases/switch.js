// Uso del Switch
const dia = 4; // 0: Domingo

// En un switch siempre debe haber un break en cada caso y la ventaja el uso del caso por defecto
// Aqui tambien se debe considerar el valor a evaluar en el switch
switch (dia) {
    case 0:
        console.log( 'Domingo' );
        break;
    case 1:
        console.log( 'Lunes' );
        break;
    case 2:
        console.log( 'Martes' );
        break;
    default:
        console.log( 'No es un dia valido' );
}





