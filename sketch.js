var sigla;
var button;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sigla = loadSound("TG1_new.mp3", loaded);

  button = createButton("Play", );
  button.mousePressed(loaded);
  button.position(width/2 - 17, height - 100);

}

function loaded() {
  sigla.play();
}

function draw() {
  background(0);
  ellipseMode(CENTER),
  ellipse(width / 2, height / 2, 20);
  sigla.setVolume(0.7);
}
