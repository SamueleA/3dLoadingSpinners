var angle =0;
var canvasSize = 200;

function setup() {
  var canvas = createCanvas(canvasSize, canvasSize, WEBGL);
  canvas.parent('sketch-holder');
}

function draw() {
  background(0,0,0,0);
  ambientLight(255);

  noStroke();
  rotateX(angle);
  rotateY(angle*0.2);

  push();
  specularMaterial(255, 100, 100,125);
  torus(width/4, width/15);
  pop();

  push();
  specularMaterial('#93948C');
  sphere(width/15 );
  pop();

  angle+= 0.01;
}
