//http://api.openweathermap.org

//The API key has to be given by the openweathermap.org website (for free / per account)
let apiKey = "064d7a3343bcac094e73276fe067a52b";
//This variable will store the JSON weather data
let music;


//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //http://api.openweathermap.org
  //The text/string object is formatted with the location we want to use, and our own API key
  let size;
  let url = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=beatles&api_key=064d7a3343bcac094e73276fe067a52b&format=json";
  //The URL is sent to the loadJSON that returns the data to the weather variable
  music = loadJSON(url);
}

function setup() {
  console.log(music); //Return all JSON data
  console.log(music.toptracks.track[0].listeners);
  console.log(music.toptracks.track[0].name);
  console.log(music.toptracks.track[1].listeners);
  console.log(music.toptracks.track[0].name);
  //Display temperature information on the screen
  let tcol = random(150,255)
  createCanvas(1280, 720);
  background(0);
  textAlign(CENTER);
  textSize(music.toptracks.track[0].listeners/30000);
  fill(random(50,255));
  text(music.toptracks.track[0].name,random(1000),random(650));
  textSize(music.toptracks.track[1].listeners/30000);
  fill(random(50,255));
  text(music.toptracks.track[1].name,random(1000),random(650));
  textSize(music.toptracks.track[20].listeners/30000);
  fill(random(50,255));
  text(music.toptracks.track[20].name,random(1000),random(650));
  textSize(music.toptracks.track[40].listeners/30000);
  fill(random(50,255));
  text(music.toptracks.track[40].name,random(1000),random(650));
  noLoop();
}

function draw(){
}
