var sigla;
var emilio;
var onButton;
var offButton;
var amp;
var logo;

var bubbles = [];


function preload() {
  logo = loadImage("logo.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);


  sigla = loadSound("TG1_new.mp3", loaded);
  emilio = loadSound("cfdm.mp3", emiloaded);

  onButton = createButton("On Air");
  onButton.mousePressed(loaded);
  onButton.position(width / 2 - 60, height - 100);

  offButton = createButton("Off Camera");
  offButton.mousePressed(emiloaded);
  offButton.position(width / 2 + 10, height - 100);

  amp = new p5.Amplitude();


  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(7, 35);
    bubbles[i] = new Bubble(x, y, r);
  }


}



function draw() {
  background('#397091');

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.7, 150, 1400);
  var bubmove = map(vol, 0, 0.7, 0, 40);

  imageMode(CENTER),
    image(logo, width / 2, height / 2, diam, diam, );
  sigla.setVolume(0.8);
  emilio.setVolume(3.5);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move(bubmove);
    bubbles[i].show();
  }
  }

  class Bubble {
    constructor(_x, _y, _r) {
      this.x = _x;
      this.y = _y;
      this.r = _r;
    }
    move(_more) {
      this.x = this.x + random(-_more, _more);
      this.y = this.y + random(-_more, _more);
    }

    show() {
      stroke(255, 20);
      strokeWeight(3.4);
      fill(255, 30); // il secondo valore è l'alpha.
      ellipse(this.x, this.y, this.r * 2);
    }


  }


  function loaded() {
    sigla.play();
    emilio.stop();
  }

  function emiloaded() {
    emilio.play();
  }
