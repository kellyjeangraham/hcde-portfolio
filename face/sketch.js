var mic;
var vol;

function setup() {
  createCanvas(800,800);
  noStroke();
  background(255);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255);
  vol = mic.getLevel();
  ears();
  face();
  nose(); // animated
  eyes(); // animated
  mouth(); // animated
}

// FUNCTIONS

function face() {
  fill(235, 233, 199);
  ellipse(400, 400, 500, 400);
}

function nose() {
  var adjustedVol = map(vol, 0, 1, 0, 100);
  fill(0);
  triangle(360 - adjustedVol, 400 - adjustedVol, 440 + adjustedVol, 400 - adjustedVol, 400, 480 - adjustedVol);
}

function eyes() {
  var adjustedVol = map(vol, 0, 1, 0, 100);
  // left eye
  fill(255);
  ellipse(300, 350, 60 + adjustedVol, 60 + adjustedVol);
  fill(0);
  ellipse(300, 350, 30 + adjustedVol, 30 + adjustedVol);
  
  // right eye
  fill(255);
  ellipse(500, 350, 60 + adjustedVol, 60 + adjustedVol);
  fill(0);
  ellipse(500, 350, 30 + adjustedVol, 30 + adjustedVol);
}

function ears() {
  fill(235, 233, 199);
  triangle(250, 100, 300, 300, 200, 300);
  fill(0);
  triangle(240, 150, 320, 330, 180, 380);
  
  fill(235, 233, 199);
  triangle(550, 100, 500, 400, 600, 300);
  fill(0);
  triangle(560, 150, 500, 330, 590, 380);
}

function mouth() {
  var adjustedVol = map(vol, 0, 1, 0, 100);
  fill(0);
  ellipse(400, 540, 100, 80 - adjustedVol);
}