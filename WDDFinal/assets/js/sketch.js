var canvas;


function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');

}

function draw(){
    background("#D1D1D1");
    circle((mouseX), (mouseY), mouseY/2);

   
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}