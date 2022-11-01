/*
Como las cartas estan en ingles, asi se deben manejar internamente
    * 2C = Two of Clubs (Treboles)
    * 2D = Two of Diamonds (Diamantes)
    * 2H = Two of Hearts (Corazones)
    * 2S = Two of Spades (Espadas)
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;


// Rerefencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

// console.log ( btnPedir );
let puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

btnDetener.disabled = true;

// Esta funcion crea un nuevo deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    // console.log( deck );
    deck = _.shuffle(deck);
    // console.log(deck);
    return deck;
}

crearDeck();

// Esta funcion permite tomar una carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }

    const carta = deck.pop();
    //console.log(deck);
    //console.log(carta); // Debe ser de la baraja
    return carta;
}

// Este ciclo es para pedir una carta hasta agotarlas
/*
for (let i=0; i<=51; i++){
    pedirCarta ();
}
*/

// pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    /*
        let puntos = 0;
        console.log( valor );
    
        if ( isNaN( valor ) ){
            // console.log( 'No es un numero' );
            puntos = ( valor === 'A') ? 11 : 10;
        }
        else {
            // console.log( 'Es un numero' );
            puntos = valor * 1; // Multiplicar por 1 convierte a numero
        }
        console.log( puntos );
    */
    return (isNaN(valor)) ?
        (valor === 'A' ? 11 : 10)
        : valor * 1;
}

//const valor = valorCarta ( pedirCarta() );
// console.log( valor );

// En JS un color morado es un numero y gris es un string

// Eventos
// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do{

        const carta = pedirCarta();
        //console.log(  carta );
        puntosComputadora = puntosComputadora + valorCarta(carta);
        // console.log(puntosComputadora);
        puntosHTML[1].innerText = puntosComputadora;

        // console.log(puntosHTML);

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta')
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <=21) );

    setTimeout( ()=> {
        if ( puntosComputadora === puntosMinimos ){
            alert('Empate.... nadie gana :( ... otra vez!');
        } else if ( puntosMinimos > 21){
            alert ('La computadora gana!');
        } else if (puntosComputadora > 21){
            alert ('Felicidades, haz ganado!');
        } else if ( puntosMinimos === 21 && puntosComputadora !== 21 ){
            alert ('BlackJack!... Felicidades, haz ganado');
        }
        else{
            alert ('La computadora gana!');
        }
    }, 300); 

}


// Para escuchar un evento
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    //console.log(  carta );
    puntosJugador = puntosJugador + valorCarta(carta);
    // console.log(puntosJugador);
    puntosHTML[0].innerText = puntosJugador;

    // console.log(puntosHTML);

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta')
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        btnDetener.disabled = true;
        console.warn('Haz perdido!')
        btnPedir.disabled = true; // Desactiva el boton
        turnoComputadora (puntosJugador); // Estan de manera global
    } else if (puntosJugador === 21) {
        btnDetener.disabled = true;
        // console.warn ('Buen trabajo!')
        btnPedir.disabled = true;
        turnoComputadora (puntosJugador); // Estan de manera global

        if (puntosComputadora !== 21){
        }
    }


})

// Escucha cuando hace click en detener
btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora (puntosJugador);
}) 

// Escucha cuando hace click en Nuevo Juego
btnNuevo.addEventListener('click', () => {
    console.clear( );
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
}) 


// TODO Borrar
// turnoComputadora (21);