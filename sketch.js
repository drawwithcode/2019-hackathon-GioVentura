var sigla;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sigla = loadSound("TG1_new.mp3", mousePressed);
}

function mousePressed(){
  sigla.play();
}

function draw() {
    background(0);
  ellipseMode(CENTER),
    ellipse(width / 2, height / 2, 20);
    sigla.setVolume(0.7);
}
