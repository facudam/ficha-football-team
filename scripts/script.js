const $seccionDeEquipos = document.querySelector('.secciones__equipos'),
    $nombreEquipo = document.getElementById('nombre-equipo'),
    $logoEquipo = document.querySelector('.logo'),
    $dt = document.querySelector('.coach'),
    $jugadores = document.querySelector('.jugadores'),
    $boton = document.querySelector('.btn'),
    $fragmento = document.createDocumentFragment();


const apiKey = '971aa7c8535609f353f13813698ac2a80be95ad948ce74fcf45137acc415e49b';

let equiposNumeros = [90, 91, 92, 93, 94,95,96,97,98,99];
let num = 0;

function verEquipos () {

    fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${equiposNumeros[num]}&APIkey=${apiKey}`)
        .then(res => res.json()) //transformamos la respuesta de la api a formato json.
        .then(data => {
            console.log(data)
            $nombreEquipo.innerHTML = `${data.result[0].team_name}`;
            $logoEquipo.setAttribute('src', `${data.result[0].team_logo}`);
            $dt.innerHTML = `Director Técnico: ${data.result[0].coaches[0].coach_name}`;

            for ( let i = 0; i < 11; i++){
                const $li = document.createElement('li');
                $li.innerHTML += `${data.result[0].players[i].player_name}`;
                $fragmento.appendChild($li);
            }
            $jugadores.appendChild($fragmento);
            
            
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

