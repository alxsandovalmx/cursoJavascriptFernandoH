/*
Como las cartas estan en ingles, asi se deben manejar internamente
    * 2C = Two of Clubs (Treboles)
    * 2D = Two of Diamonds (Diamantes)
    * 2H = Two of Hearts (Corazones)
    * 2S = Two of Spades (Espadas)
*/

// Sintaxis del Patron Modulo
const miJuegoModulo = ( () => {
    // Validad el codigo 
    'use strict'
    
    // const personajes = ['Ana', 'Mercy', 'Mia'];
    // console.log( personajes );
    let     deck = [];
    const   tipos = ['C', 'D', 'H', 'S'],
            especiales = ['A', 'J', 'Q', 'K'];
    
    // let puntosJugador = 0,
    //     puntosComputadora = 0;

    let puntosJugadores = [];
    
    // Rerefencias del HTML
    const   btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');
    
    // console.log ( btnPedir );
    let     puntosHTML = document.querySelectorAll('small');

    const divCartasJugadores = document.querySelectorAll ('.divCartas');
    
    // const   divCartasJugador = document.querySelector('#jugador-cartas'),
    // divCartasComputadora = document.querySelector('#computadora-cartas');
    
    btnDetener.disabled = true;
    
    // Esta funcion inicia el juego con el # de jugadores
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck ();
        puntosJugadores = [];

        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
            puntosHTML[i].innerText = 0;
            divCartasJugadores[i].innerHTML = '';
        }

        console.clear( );
        
        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

    // Esta funcion crea un nuevo deck
    const crearDeck = () => {

        // Reiniciamos el deck
        deck = [];

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
    
        // Revuelve los elementos del deck
        return _.shuffle(deck);
    }
    
    // Esta funcion permite tomar una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck'
        }

        //console.log(deck);
        //console.log(carta); // Debe ser de la baraja
        return deck.pop();
    }
    
    // Este ciclo es para pedir una carta hasta agotarlas
    /*
    for (let i=0; i<=51; i++){
        pedirCarta ();
    }
    */
    
    // pedirCarta();
    
    // Esta funcion sirve para obtener una carte del Deck
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
    
    const acumularPuntos = (carta,turno) => {

        // Turno:0 = Primer Jugador y el ultimo sera la PC
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta (carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno)=> {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta')

        divCartasJugadores[turno].append(imgCarta);

    }

    const determinarGanador = () => {
        // Destructuracion de arreglos solo para 2 jugadores
        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

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

    // Eventos
    // Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;

        do{
    
            const carta = pedirCarta();
            // console.log(puntosHTML);
            puntosComputadora = acumularPuntos ( carta, puntosJugadores.length-1 );
            crearCarta (carta,puntosJugadores.length-1);
    
    
        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <=21) );
    

    
    }
    
    
    // Para escuchar un evento
    btnPedir.addEventListener('click', () => {
    
        const carta = pedirCarta();
        //console.log(  carta );

        const puntosJugador = acumularPuntos ( carta, 0);
        crearCarta (carta,0);
    
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
        turnoComputadora (puntosJugadores[0]);
    }) 
    
    // Escucha cuando hace click en Nuevo Juego
    btnNuevo.addEventListener('click', () => {

        inicializarJuego();

    }) 
    
    // TODO Borrar
    // turnoComputadora (21);

    return {
        nuevoJuego: inicializarJuego
    };

})();

