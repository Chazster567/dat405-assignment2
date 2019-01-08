//http://api.openweathermap.org

//The API key has to be given by the openweathermap.org website (for free / per account)
let apiKey = "064d7a3343bcac094e73276fe067a52b";
//This variable will store the JSON weather data
let music;
let music2;
let music3;
let i;
let input;
let button;
let artist = 'eagles';
var angle = 0;

//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //http://api.openweathermap.org
  //The text/string object is formatted with the location we want to use, and our own API key
  let url = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+'eagles'+"&api_key=064d7a3343bcac094e73276fe067a52b&format=json";
  let url2 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+'oasis'+"&api_key=064d7a3343bcac094e73276fe067a52b&format=json";
  let url3 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+'beatles'+"&api_key=064d7a3343bcac094e73276fe067a52b&format=json";
  //The URL is sent to the loadJSON that returns the data to the weather variable
  music = loadJSON(url);
  music2 = loadJSON(url2);
  music3 = loadJSON(url3);
}

function setup() {
  console.log(music); //Return all JSON data
  //Display temperature information on the screen
  createCanvas(1280, 720);
  background(0);
  input = createInput();
  input.position(560, 350);

  button = createButton('Eagles');
  button.position(10, 500);
  button.mousePressed(query);

  button = createButton('Beatles');
  button.position(10, 520);
  button.mousePressed(query2);

  button = createButton('Oasis');
  button.position(10, 540);
  button.mousePressed(query3);
  noLoop();
}

function query() {
  music = url2
  console.log(artist);
}

function draw() {
  console.log(music.toptracks.track[0].listeners);
  console.log(music.toptracks.track[0].name);
  //Sun
  fill(255, 255, 0);
  ellipse(640, 360, 200, 200);

  for (let x = 800; x <= width;) {
    i = round(random(40))
    let planetSize = music.toptracks.track[i].listeners/10000;
    fill(random(120,255), random(120,255), random(120,255));
    ellipse(x, 360, planetSize, planetSize);
    textSize(12);
    textAlign(CENTER);
    text(music.toptracks.track[i].name, x, 375 + planetSize/2);
    text(music.toptracks.track[i].listeners + ' plays', x, 390 + planetSize/2);
    x = x + 100
  }
}
