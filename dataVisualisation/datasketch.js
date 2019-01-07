//http://api.openweathermap.org

//The API key has to be given by the openweathermap.org website (for free / per account)
let apiKey = "064d7a3343bcac094e73276fe067a52b";
//This variable will store the JSON weather data
let music;
let i;
let input;
let button;
let artist = 'oasis';
var angle = 0;

//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //http://api.openweathermap.org
  //The text/string object is formatted with the location we want to use, and our own API key
  let url = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+artist+"&api_key=064d7a3343bcac094e73276fe067a52b&format=json";
  //The URL is sent to the loadJSON that returns the data to the weather variable
  music = loadJSON(url);
}

function setup() {
  console.log(music); //Return all JSON data
  //Display temperature information on the screen
  createCanvas(1280, 720);
  background(0);
  input = createInput();
  input.position(560, 350);

  button = createButton('Submit');
  button.position(620, 370);
  button.mousePressed(query);
  noLoop();
}

function query() {
  artist = input.value();
  console.log(artist);
}

function draw() {
  // Sun
  fill(255, 255, 0);
  ellipse(640, 360, 200, 200);

  for (let x = 800; x <= width;) {
    i = round(random(40))
    let planetSize = music.toptracks.track[i].listeners/10000
    fill(random(120,255), random(120,255), random(120,255));
    ellipse(x, 360, planetSize, planetSize);
    textSize(12);
    textAlign(CENTER);
    text(music.toptracks.track[i].name, x, 375 + planetSize/2);
    text(music.toptracks.track[i].listeners + ' plays', x, 390 + planetSize/2);
  }
  // Venus
  //fill(255, 130, 0);
  //ellipse(860, 360, music.toptracks.track[i].listeners/3000, music.toptracks.track[i].listeners/3000);

  // Earth
  //fill(18, 154, 221);
  //ellipse(900, 360, music.toptracks.track[i].listeners/3000, music.toptracks.track[i].listeners/3000);

  // Mars
  //fill(255, 57, 4);
  //ellipse(1040, 360, music.toptracks.track[i].listeners/3000, music.toptracks.track[i].listeners/3000);
}
