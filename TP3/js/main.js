let canvas = document.getElementById('miCanvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let fichasJuego = [];
let lastClickedFigure = null;
let isMouseDown=false;



function nuevoJuego() {
    juego = new gameController(6, 6);
    juego.matrizTablero();
    juego.dibujarTablero();
    const ficha = new Ficha(70, 70, 50);
    fichasJuego.push(ficha)
    ficha.dibujar(ctx);
}

function onMouseMove(e){
    if(isMouseDown && lastClickedFigure != null){
        lastClickedFigure.setPosition(e.offsetX, e.offsetY)
        clearCanvas();
        juego.dibujarTablero();
        dibujarFigura();
    }
}

function onMouseDown(e) {
    isMouseDown = true;
        let clickFig = figuraClickeada(e.offsetX, e.offsetY);
        if (clickFig != null) {
            lastClickedFigure = clickFig;
            console.log(lastClickedFigure)
          
        
    }
}

function onMouseUp(e){
    isMouseDown=false;
    lastClickedFigure=null;
}

function clearCanvas() {
    console.log("clearcanvas")
    ctx.fillStyle = 'F8F8FF';
    ctx.clearRect(0, 0, width, height);
}
function dibujarFigura() {
    for (let i = 0; i < fichasJuego.length; i++) {
        fichasJuego[i].dibujar(ctx);
    }
}
function figuraClickeada(x, y) {
    for (let i = 0; i < fichasJuego.length; i++) {
        const elemento = fichasJuego[i];
        if (elemento.isPointInside(x, y)) {
            return elemento;
        }
    }
}
console.log(figuraClickeada);
canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mouseup', onMouseUp)





