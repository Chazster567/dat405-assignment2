//http://api.openweathermap.org

//The API key has to be given by the openweathermap.org website (for free / per account)
let apiKey = "064d7a3343bcac094e73276fe067a52b";
//This variable will store the JSON weather data
let music;
let i;
let input;
let button;
let artist = 'beatles';

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
  console.log(music.toptracks.track[0].listeners);
  console.log(music.toptracks.track[0].name);
  //Display temperature information on the screen
  let tcol = random(150,255)
  createCanvas(1280, 720);
  background(0);
  input = createInput();
  input.position(570, 350);

  button = createButton('Submit');
  button.position(620, 370);
  button.mousePressed(query);
  noLoop();
}

function query() {
  artist = input.value();
  console.log(artist)
  preload()
}

function draw() {
  i = round(random(40))
  // Sun
  fill(255, 255, 0);
  ellipse(640, 360, 200, 200);

  // Mercury
  fill(200);
  ellipse(1020, 360, music.toptracks.track[i].listeners/10000, music.toptracks.track[i].listeners/10000);

  // Venus
  fill(255, 130, 0);
  ellipse(860, 360, music.toptracks.track[i].listeners/10000, music.toptracks.track[i].listeners/10000);

  // Earth
  fill(18, 154, 221);
  ellipse(900, 360, music.toptracks.track[i].listeners/10000, music.toptracks.track[i].listeners/10000);

  // Mars
  fill(255, 57, 4);
  ellipse(1040, 360, music.toptracks.track[i].listeners/10000, music.toptracks.track[i].listeners/10000);

  // Jupiter
  fill(255, 130, 0);
  ellipse(1180, 360, music.toptracks.track[i].listeners/10000, music.toptracks.track[i].listeners/10000);

  // Saturn
  fill(255, 235, 176);
  ellipse(1200, 360, music.toptracks.track[i].listeners/10000, music.toptracks.track[i].listeners/10000);

  // Uranus
  fill(38, 222, 255);
  ellipse(850, 360, music.toptracks.track[i].listeners/10000, music.toptracks.track[i].listeners/10000);

  // Neptune
  fill(0, 150, 255);
  ellipse(950, 360, music.toptracks.track[i].listeners/10000, music.toptracks.track[i].listeners/10000);
}
