const P1 = {x: 0, y: 0};//arriba-izquierda
const P2 = {x: 0, y: 0};//abajo-derecha
const P3 = {x: 0, y: 0};//ariba-derecha
const P4 = {x: 0, y: 0};//abajo-izquierda
const P5 = {x: 0, y: 0};//arriba-centro
const P6 = {x: 0, y: 0};//abajo-centro
const P7 = {x: 0, y: 0};//centro-izquierda
const P8 = {x: 0, y: 0};//centro-derecha



function setup() {
    createCanvas(windowWidth, windowHeight)
    const w = windowWidth;
    P2.x=windowWidth;
    P4.x=windowWidth;
    P5.x=Math.floor(windowWidth/2);
    P6.x=Math.floor(windowWidth/2);
    P8.x=windowWidth;

    P2.y=windowHeight;
    P3.y=windowHeight;
    P6.y=windowHeight;
    P7.y=Math.floor(windowHeight/2);
    P8.y=Math.floor(windowHeight/2);

}

/*Dibujar entidades */
function draw(){
    ecuapp(P1, P2);
    ecuapp(P3, P4);
    ecuapp(P5, P6);
    ecuapp(P7, P8);
    
}

function ecuapp(p1, p2){
    const dx = p2.x-p1.x;
    const dy = p2.y-p1.y;
    let x = p1.x;
    let y = p1.y;
    let stop=0;
    let stepX=0;
    let stepY=0;

    if(dx>dy){
        stop = dx;
    }else if(dx<dy){
        stop = dy;
    }
    stepX = dx/stop;
    stepY = dy/stop;

    for(i=1;i<=stop;i++)
      {
        point(x,y);
         x+=stepX;
         y+=stepY;
         
      }
        
}