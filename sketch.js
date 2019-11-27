var sigla;
var video;
var onButton;
var offButton;
var amp;
var logo;


function preload() {
  logo = loadImage("logo.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);


  sigla = loadSound("TG1_new.mp3", loaded);

  onButton = createButton("On Air");
  offButton = createButton("Off Camera");
  onButton.mousePressed(loaded);
  onButton.position(width / 2 - 60, height - 100);
  offButton.position(width / 2 + 10, height - 100);

  amp = new p5.Amplitude();

}

function loaded() {
  sigla.play();
}

function draw() {
    background(0);

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.7, 100, 1000);

  imageMode(CENTER),
  image(logo, width / 2, height / 2, diam, diam,);
  sigla.setVolume(0.7);

}
