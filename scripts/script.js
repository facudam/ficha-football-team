const $seccionDeEquipos = document.querySelector('.secciones__equipos'),
    $nombreEquipo = document.getElementById('nombre-equipo'),
    $logoEquipo = document.querySelector('.logo'),
    $dt = document.querySelector('.coach'),
    $jugadores = document.querySelector('.jugadores'),
    $boton = document.querySelector('.btn'),
    $fragmento = document.createDocumentFragment();

//Jugadores li:
 const $jugador1 = document.querySelector('.jugador1'),
    $jugador2 = document.querySelector('.jugador2'),
    $jugador3 = document.querySelector('.jugador3'),
    $jugador4 = document.querySelector('.jugador4'),
    $jugador5 = document.querySelector('.jugador5'),
    $jugador6 = document.querySelector('.jugador6'),
    $jugador7 = document.querySelector('.jugador7'),
    $jugador8 = document.querySelector('.jugador8'),
    $jugador9 = document.querySelector('.jugador9'),
    $jugador10 = document.querySelector('.jugador10'),
    $jugador11= document.querySelector('.jugador11');


const apiKey = '971aa7c8535609f353f13813698ac2a80be95ad948ce74fcf45137acc415e49b';

let equiposNumeros = [90, 91, 92, 93, 94,95,96,97,98,99];
let num = 0;

function verEquipos () {

    fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${equiposNumeros[num]}&APIkey=${apiKey}`)
        .then(res => res.json()) 
        .then(data => {
            console.log(data)
            $nombreEquipo.innerHTML = `${data.result[0].team_name}`;
            $logoEquipo.setAttribute('src', `${data.result[0].team_logo}`);
            $dt.innerHTML = `Director Técnico: ${data.result[0].coaches[0].coach_name}`;

            $jugador1.innerHTML = `${data.result[0].players[0].player_name}`;
            $jugador2.innerHTML = `${data.result[0].players[1].player_name}`;
            $jugador3.innerHTML = `${data.result[0].players[2].player_name}`;
            $jugador4.innerHTML = `${data.result[0].players[3].player_name}`;
            $jugador5.innerHTML = `${data.result[0].players[4].player_name}`;
            $jugador6.innerHTML = `${data.result[0].players[5].player_name}`;
            $jugador7.innerHTML = `${data.result[0].players[6].player_name}`;
            $jugador8.innerHTML = `${data.result[0].players[7].player_name}`;
            $jugador9.innerHTML = `${data.result[0].players[8].player_name}`;
            $jugador10.innerHTML = `${data.result[0].players[9].player_name}`;
            $jugador11.innerHTML = `${data.result[0].players[10].player_name}`; 
            
        }) 
}

verEquipos();

function cambiarEquipo(){
    if (num >= 0 && num < 9 ) {
        num++
        console.log(num)
    } else {
        num = 0;
        console.log(num)
    }
    
    verEquipos();

}

$boton.addEventListener('click', cambiarEquipo);

