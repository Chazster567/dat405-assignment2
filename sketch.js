var r = 127; // r value variable
var g = 127; // g value variable
var b = 127; // b value variable
var time = 0; // time variable
var button; // button variable

function setup() { // sets up the work area
  createCanvas(841, 594); // sets canvas to specified dimensions
  noStroke();

  button = createButton('Random Colour'); // button creation for random colour
  button.position(20, 550); // positioning button
  button.mousePressed(recolour); // calls function

  button = createButton('Red'); // button creation for red
  button.position(127, 550); // positioning button
  button.mousePressed(recolourRed); // calls function

  button = createButton('Green'); // button creation for green
  button.position(173, 550); // positioning button
  button.mousePressed(recolourGreen); // calls function

  button = createButton('Blue'); // button creation for blue
  button.position(231, 550); // positioning button
  button.mousePressed(recolourBlue); // calls function
}

function draw() { // function to produce the objects involved
  background(0, 10); // creates a black background woth low opacity to leave trails

  // creates ellipse mesh along with the waves
  for (var y = 0; y <= width; y = y + 100) {
    for (var x = 0; x <= width; x = x + 10) {
      // the waves starting point varies on mouse location
      var angleX = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      var angleY = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also based on the location of the particle
      var angle = angleX * (x / width) + angleY * (y / height);

      // each particle moves in an oscillation
      var movementX = x + 10 * cos(2 * PI * time + angle);
      var movementY = y + 10 * sin(2 * PI * time + angle);

      var size = 3 // size variable
      fill(r, g, b); // fills particle
      ellipse(movementX, movementY, size, size); // draws particle
      fill(r, g, b); // fills particle
      ellipse(movementY, movementX, size, size); // draws particle
    }
  }
  time = time + 0.01; // updates time
}

function recolour() { // recolours randomly
  r = random(255); // random r value
  g = random(255); // random g value
  b = random(255); // random b value
}

function recolourRed() { // recolours red
  r = 255; // set to max
  g = 0; // set to min
  b = 0; // set to min
}

function recolourGreen() { // recolours green
  r = 0; // set to min
  g = 255; // set to max
  b = 0; // set to min
}

function recolourBlue() { // recolours blue
  r = 0; // set to min
  g = 0; // set to min
  b = 255; // set to max
}
