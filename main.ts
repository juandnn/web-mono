import {data} from './dataMonos.js';
import {SantoMono} from './santoMono.js';

let monosTable : HTMLElement = document.getElementById("monos-table")!;
let divAverage : HTMLElement = document.getElementById("average")!;
let cardMonos : HTMLElement = document.getElementById("card-monos")!;

mostrarDatosMonos(data);
mostrarAverage(data);

function mostrarDatosMonos(monos : SantoMono[]):void{
    for(let mono of monos){
        let row = document.createElement("tr");
        row.onclick = () => CrearCard(mono);
        row.innerHTML = `<td><b>${mono.getId()}</b></td>
        <td>${mono.getName()}</a></td>
        <td>${mono.getBirthdate()}</td>
        <td>${mono.getPowerLever()}</td>`;
        monosTable.appendChild(row);
    }
}

function mostrarAverage(monor : SantoMono[]){
    let average = 0;
    for(let mono of monor){
        average += mono.getPowerLever();
    }
    average = average/monor.length;
    divAverage.innerHTML = `<p><b>Nivel de poder promedio de la manada de Mukamba: </b>${average}</p>`;
}

function CrearCard(mono : SantoMono){
    cardMonos.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${mono.getImage()}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${mono.getName()}</h5>
            <p class="card-text">${mono.getDescription()}</p>
            <a href="${mono.getMeme()}">mono meme</a>
        </div>
    </div>`;
}
