//The API key has to been given by the last.fm website
let apiKey = "064d7a3343bcac094e73276fe067a52b"; //API Key

let music; //This variable stores the data from the API
let i; //Variable used for random song generator
let input; //Variable used for user inputs text box
let button; //Button variable
let artist = 'eagles'; //Default artist so screen is not blank on opening

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
  input.position(560, 350); //Positions field on screen

  button = createButton('Submit'); //Creates the submit button
  button.position(620, 370); //Positions the submit button
  button.mousePressed(query); //Calls the query function
  noLoop(); //Tells the setup not to loop
}

function query() {
  artist = input.value();
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
