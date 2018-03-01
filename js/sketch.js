var canvasSize = 200;
var globalAngle =0;
var globalSpeed = 0.01;
var ballAngle = 0;
var ballSpeed = 0.1;

function setup() {
  var canvas = createCanvas(canvasSize, canvasSize, WEBGL);

  canvas.parent('sketch-holder');
}

function draw() {
  var torusRadius = width/4;


  background(0,0,0,0);
  ambientLight(255, 255, 255);
  var lightDirection = createVector(-1, 1, 0);
  directionalLight(255,255,255, lightDirection);
  noStroke();
  ortho(-width/2, width/2, -height/2, height/2, -2*width, 2*width);
  orbitControl();
  rotateX(globalAngle);
  rotateY(globalAngle*0.4);
  rotateZ(globalAngle*0.2);


  push();
  specularMaterial(119,119,119, 235);
  torus(torusRadius, width/15);
  pop();

  push();
  specularMaterial(200,100,100);
  translate(torusRadius*cos(ballAngle),torusRadius*sin(ballAngle),0);
  sphere(width/15);
  ballAngle += ballSpeed;
  pop();


  globalAngle+= globalSpeed;
}
