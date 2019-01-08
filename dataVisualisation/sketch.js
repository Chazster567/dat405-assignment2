var posX;
var posY;
var radiusX, radiusY;
var speed;
var dir;
let apiKey = "064d7a3343bcac094e73276fe067a52b"; //The API key has to been given by the last.fm website
let pCount = 0;
let music; //This variable stores the data from the API
let i = []; //Variable used for random song generator
let r; //Variable used for random song generator
let g; //Variable used for random song generator
let b; //Variable used for random song generator
let input; //Variable used for user inputs text box
let button; //Button variable
let artist = 'The Beatles'; //Default artist so screen is not blank on opening
let txtX;

//The preload function is executed before initializing the code in setup
function preload() { //Loads any related data or media files
  //The URL is formatted according to the documentation provided by the developers
  //The text/string object is formatted with the artist we want to use, and our own API key
  let url = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+artist+"&api_key=064d7a3343bcac094e73276fe067a52b&format=json";
  //The URL is sent to the loadJSON that returns the data to the music variable
  music = loadJSON(url);
}

function setup() { //Setup function
  console.log(music); //Return all JSON data
  createCanvas(1280, 720); //Creates work area
  background(0); //Black background
  input = createInput(); //Creates user input field
  input.position(10, 360); //Positions field on screen

  button = createButton('Submit'); //Creates the submit button
  button.position(10, 380); //Positions the submit button
  button.mousePressed(query); //Calls the query function
  posX = 0; //Sets the orbits x
  posY = 0; //Sets the orbits y
  radiusX = radiusY = 750; //Sets orbit radius
  speed=0; //Sets default speed
  dir=0; //Sets default direction
    for (let g = 0; g<5; g++){ //for loop for random planet
      i[g] = round(random(40)) //creates random number
    }
  r = random(35); //Random r
  g = random(35); //Random g
  b = random(35); //Random b
}

function query() { //Calls query function
  artist = input.value(); //Changes value of artist to value of input
  console.log(artist); //logs value of artist
}

function draw() { //Calls draw function
  background(0); //Black background
  textSize(12); //12 size text
  fill(255); //Fills white text
  text('Current artist:' + artist, 10, 340); //Displays current artist
  stroke(255); //Black stroke

  speed += dir*0.002;  //Orbiting
  posX = radiusX * cos(speed); //X position
  posY = radiusY * sin(speed); //Y position
  fill(255, 255, 0); //Sun colouring
  ellipse(-300, 360, 950, 950); //Sun object creation
  translate(-200,height/2); //Sun placement

  for (let n = 0; n < 5; n++) { //For loop which stops generating when x > width
    let planetSize = music.toptracks.track[i[n]].listeners/10000 + 10; //Variable to define planet size
    console.log(music.toptracks.track[i[n]].listeners) //logs listen count of random track
      if (planetSize >= 60) { //If statement for max size
        planetSize == 60; //Gives planets a max size
      }
    fill((n + 2) * r,(n + 2) * g,(n + 2) * b) //Fills random colour
    noStroke() //No stroke width
    ellipse(posX - 100, posY, planetSize, planetSize); //Planet placement
    textSize(12); //Sets size of text
    textAlign(CENTER); //Aligns text to center of object
    txtX = posX; //Sets text to x position
    text(music.toptracks.track[i[n]].name, txtX - 100, posY + planetSize/2 + 15); //Places track name just below planet
    text(music.toptracks.track[i[n]].listeners + ' plays', txtX - 100, posY + planetSize/2 + 30); //Places play count just below track name
    dir = -1 //Moves anticlockwise
    posX = posX + 200; //Increases x position
  }
}
