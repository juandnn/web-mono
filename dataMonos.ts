import { SantoMono } from "./santoMono.js";

export const monos: SantoMono[] = [
    new SantoMono(1, 'Mono Volador', 'Un mono que puede volar a gran velocidad (Hace 5 años lo secuestraron en un helicoptero).', '2015-04-20', '/holyMonos/holymono1.jpg', 75, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCWhDPDZOI67TpJkuRg5gYlw2TogGo-kzw2Y-KekYDA&s'),
    new SantoMono(2, 'Mono Místico', 'Un mono con poderes místicos, capaz de comunicarse con los espíritus (Accidentalmente le dieron un Nokia1100).', '2013-09-15', '/holyMonos/holymono2.jpg', 85, 'https://images3.memedroid.com/images/UPLOADED111/5f0f123346277.jpeg'),
    new SantoMono(3, 'Mono Inmortal', 'Un mono con la capacidad de regenerarse y vivir eternamente (Consume opiodes).', '2000-01-01', '/holyMonos/holymono3.jpg', 95, 'https://i.ytimg.com/vi/Q9IqeS7bqns/maxresdefault.jpg'),
    new SantoMono(4, 'Mono Superfuerte', 'Un mono con fuerza sobrehumana capaz de levantar objetos pesados con la mente (Vive en una zona de huracanes).', '2012-11-23', '/holyMonos/holymonoDEFINITIVO.png', 80, 'https://preview.redd.it/2prhrvit7ai61.jpg?auto=webp&s=ad976893393fbc5164d9e930604489c68432605e'),
    new SantoMono(5, 'Mono Sigiloso', 'Un mono con habilidades de camuflaje y sigilo extraordinarios ("Si no lo veo no me ven" (Sí lo ven)).', '2016-07-04', '/holyMonos/holymono5.jpg', 70, 'https://i.redd.it/s7oun4pvazp51.jpg'),
    new SantoMono(6, 'Mono Lógico', 'Un mono que no procrastina (No tiene tiktok).', '2010-02-14', '/holyMonos/holymono9.jpg', 60, 'https://i.pinimg.com/236x/97/21/62/972162ef1c7e9a19689592656931a826.jpg'),
];

export const data = monos.map(mono => new SantoMono(mono.id, mono.name, mono.description, mono.birthdate, mono.image, mono.powerLever, mono.meme));

