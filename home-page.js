var IMAGENES = [
    'https://i.ibb.co/1rRPtMR/blanca-Derecha.jpg',
    'https://i.ibb.co/zS5xDy1/blanca-Delantera.jpg',
    'https://i.ibb.co/yRcrtgn/blanca-Izquierda.jpg',
    'https://i.ibb.co/86W7bX1/blanca-Trasera.jpg'
];
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
}



