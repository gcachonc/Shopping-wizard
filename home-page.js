var IMAGENES = [
    'https://i.ibb.co/1rRPtMR/blanca-Derecha.jpg',
    'https://i.ibb.co/zS5xDy1/blanca-Delantera.jpg',
    'https://i.ibb.co/yRcrtgn/blanca-Izquierda.jpg',
    'https://i.ibb.co/86W7bX1/blanca-Trasera.jpg'
];
var img1 = document.getElementById("img_1");
var img2 = document.getElementById("img_2");
var img3 = document.getElementById("img_3");
var img4 = document.getElementById("img_4");
let posicionActual = 0;
let $imagen = document.querySelector('#imagen');
window.onload = function inicio() {
    // Variables
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    
    
    // Funciones
    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }
    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    // Iniciar
    renderizarImagen();
}

function fotosBlancas(){
    IMAGENES = [
        'https://i.ibb.co/1rRPtMR/blanca-Derecha.jpg',
        'https://i.ibb.co/zS5xDy1/blanca-Delantera.jpg',
        'https://i.ibb.co/yRcrtgn/blanca-Izquierda.jpg',
        'https://i.ibb.co/86W7bX1/blanca-Trasera.jpg'
    ];
    posicionActual = 0;
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    img1.src = 'https://i.ibb.co/1rRPtMR/blanca-Derecha.jpg';
    img2.src = 'https://i.ibb.co/zS5xDy1/blanca-Delantera.jpg';
    img3.src = 'https://i.ibb.co/yRcrtgn/blanca-Izquierda.jpg';
    img4.src = 'https://i.ibb.co/86W7bX1/blanca-Trasera.jpg';

    color = "blanca";
}
function fotosNegras(){
    IMAGENES = [
        'https://i.ibb.co/JqqSYnv/negro-Derecha.jpg',
        'https://i.ibb.co/9NKJtjc/negra-Delantera.jpg',
        'https://i.ibb.co/nDc2pnP/negra-Izquierda.jpg',
        'https://i.ibb.co/vLR1PQJ/negra-Trasera.jpg'
    ];
    posicionActual = 0;
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    img1.src = 'https://i.ibb.co/JqqSYnv/negro-Derecha.jpg';
    img2.src = 'https://i.ibb.co/9NKJtjc/negra-Delantera.jpg';
    img3.src = 'https://i.ibb.co/nDc2pnP/negra-Izquierda.jpg';
    img4.src = 'https://i.ibb.co/vLR1PQJ/negra-Trasera.jpg';
    color = "negra";
}
function fotosRojas(){
    IMAGENES = [
        'https://i.ibb.co/3mtXyc1/roja-Derecha.jpg',
        'https://i.ibb.co/Wz5DQ2H/rojo-Frente.jpg',
        'https://i.ibb.co/kJYmkrY/roja-Izquierda.jpg',
        'https://i.ibb.co/4W0P5td/roja-Trasera.jpg'
    ];
    posicionActual = 0;
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    img1.src = 'https://i.ibb.co/3mtXyc1/roja-Derecha.jpg';
    img2.src = 'https://i.ibb.co/Wz5DQ2H/rojo-Frente.jpg';
    img3.src = 'https://i.ibb.co/kJYmkrY/roja-Izquierda.jpg';
    img4.src = 'https://i.ibb.co/4W0P5td/roja-Trasera.jpg';

    color = "roja";
}

/* funciones para el hover de las imagenes pequeñas */

function hoverImage1(){
    var i;
    i = posicionActual;
    posicionActual = 0;
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    posicionActual = i;
}
function finisHover1(){
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}
function hoverImage2(){
    var i;
    i = posicionActual;
    posicionActual = 1;
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    posicionActual = i;
}
function finisHover2(){
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}
function hoverImage3(){
    var i;
    i = posicionActual;
    posicionActual = 2;
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    posicionActual = i;
}
function finisHover3(){
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}
function hoverImage4(){
    var i;
    i = posicionActual;
    posicionActual = 3;
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    posicionActual = i;
}
function finisHover4(){
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}
