var sigla;
var button;
var amp;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  sigla = loadSound("TG1_new.mp3", loaded);

  button = createButton("Play");
  button.mousePressed(loaded);
  button.position(width / 2 - 17, height - 100);

  amp = new p5.Amplitude();

}

function loaded() {
  sigla.play();
}

function draw() {

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.7, 10, 200);

  ellipseMode(CENTER),
  fill(255, 0, 255);
  ellipse(width / 2, height / 2, diam);
  sigla.setVolume(0.7);
}
