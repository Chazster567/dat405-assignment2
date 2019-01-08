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
  input.position(570, 350); //Positions field on screen

  button = createButton('Submit'); //Creates the submit button
  button.position(620, 370); //Positions the submit button
  button.mousePressed(query); //Calls the query function
  noLoop(); //Tells the setup not to loop
}

function query() { //Calls query function
  artist = input.value(); //Changes value of artist to value of input
  console.log(artist); //logs value of artist
}

function draw() { //Calls draw function
  console.log(music.toptracks.track[0].listeners); //logs listening data of most popular track
  console.log(music.toptracks.track[0].name); //logs name of most popular track

  fill(255, 255, 0); //Sun colouring
  ellipse(640, 360, 200, 200); //Sun object creation

  for (let x = 800; x <= width;) { //For loop which stops generating when x > width
    i = round(random(40)) //Generates random song number
    let planetSize = music.toptracks.track[i].listeners/10000 + 10; //Variable to define planet size
    fill(random(120,255), random(120,255), random(120,255)); //Fills planet a random colour
    ellipse(x, 360, planetSize, planetSize); //Planet object creation
    textSize(12); //Sets size of text
    textAlign(CENTER); //Aligns text to center of object
    text(music.toptracks.track[i].name, x, 375 + planetSize/2); //Places track name just below planet
    text(music.toptracks.track[i].listeners + ' plays', x, 390 + planetSize/2); //Places play count just below track name
    x = x + 100 //x co-ordinate is increased by 100
  }
}
