var orbitCenterX = 300;
var orbitCenterY = 300;
var orbitRadius = 200;
var angle = 0;
var speed = 0.01;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  var x = orbitCenterX + orbitRadius * cos(angle);
  var y = orbitCenterY + orbitRadius * sin(angle);

  ellipse(orbitCenterX, orbitCenterY, 50, 50);
  ellipse(x, y, 100, 100);

  angle += speed;
}
