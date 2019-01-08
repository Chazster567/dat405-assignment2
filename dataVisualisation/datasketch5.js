var posX;
var posY;
var radiusX, radiusY;
var speed;
var dir;
//The API key has to been given by the last.fm website
let apiKey = "064d7a3343bcac094e73276fe067a52b"; //API Key
let pCount = 0;
let music; //This variable stores the data from the API
let i = []; //Variable used for random song generator
let input; //Variable used for user inputs text box
let button; //Button variable
let artist = 'beatles'; //Default artist so screen is not blank on opening

//The preload function is executed before initializing the code in setup
function preload() { //Loads any related data or media files
  //The URL is formatted according to the documentation provided by the developers
  //The text/string object is formatted with the artist we want to use, and our own API key
  let url = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+artist+"&api_key=064d7a3343bcac094e73276fe067a52b&format=json";
  //The URL is sent to the loadJSON that returns the data to the music variable
  music = loadJSON(url);
}

function setup() {
  console.log(music); //Return all JSON data
    createCanvas(1280,720);
    background(0);
    noStroke();
    posX = 0;
    posY = 0;
    radiusX = radiusY = 700;
    speed=0;
    dir=0;
    for (var g = 0; g<5; g++){
    i[g] = round(random(40))
}
}

function draw() {
    background(0);
    stroke(255);
    fill(0);
     //Generates random song number
    // orbiting
    speed += dir*0.05;
    posX = radiusX * cos(speed);
    posY = radiusY * sin(speed);
    translate(-200,height/2);
    fill(255);
    rectMode(CENTER);

    for (var n = 0; n < 5; n++){
      let planetSize = music.toptracks.track[i[n]].listeners/10000 + 10; //Variable to define planet size
      //ellipse(posX,posY,planetSize,planetSize);
      fill(255)
      ellipse(posX, posY, planetSize, planetSize);
      textSize(12); //Sets size of text
      textAlign(CENTER); //Aligns text to center of object
      text(music.toptracks.track[i[n]].name, 200, 375 + planetSize/2); //Places track name just below planet
      text(music.toptracks.track[i[n]].listeners + ' plays', 200, 390 + planetSize/2); //Places play count just below track name
      dir = -1
    }
}
