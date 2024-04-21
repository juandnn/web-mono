import { data } from './dataMonos.js';
var monosTable = document.getElementById("monos-table");
var divAverage = document.getElementById("average");
var cardMonos = document.getElementById("card-monos");
mostrarDatosMonos(data);
mostrarAverage(data);
function mostrarDatosMonos(monos) {
    var _loop_1 = function (mono) {
        var row = document.createElement("tr");
        row.onclick = function () { return CrearCard(mono); };
        row.innerHTML = "<td><b>".concat(mono.getId(), "</b></td>\n        <td>").concat(mono.getName(), "</a></td>\n        <td>").concat(mono.getBirthdate(), "</td>\n        <td>").concat(mono.getPowerLever(), "</td>");
        monosTable.appendChild(row);
    };
    for (var _i = 0, monos_1 = monos; _i < monos_1.length; _i++) {
        var mono = monos_1[_i];
        _loop_1(mono);
    }
}
function mostrarAverage(monor) {
    var average = 0;
    for (var _i = 0, monor_1 = monor; _i < monor_1.length; _i++) {
        var mono = monor_1[_i];
        average += mono.getPowerLever();
    }
    average = average / monor.length;
    divAverage.innerHTML = "<p><b>Nivel de poder promedio de la manada de Mukamba: </b>".concat(average, "</p>");
}
function CrearCard(mono) {
    cardMonos.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n    <img src=\"".concat(mono.getImage(), "\" class=\"card-img-top\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(mono.getName(), "</h5>\n            <p class=\"card-text\">").concat(mono.getDescription(), "</p>\n            <a href=\"").concat(mono.getMeme(), "\">mono meme</a>\n        </div>\n    </div>");
}
