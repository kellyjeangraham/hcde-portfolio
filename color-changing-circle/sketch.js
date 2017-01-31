var r = 255;
var g = 255;
var b = 255;

function setup() {
  createCanvas(600, 600);
  background(255, 0, 0); // draw red background
}

function draw() {
  fill(r, g, b);
  ellipse(mouseX, mouseY, 50, 50);
  
//  if(mouseIsPressed) {
//  r = random(255);
//  g = random(255);
//  b = random(255);
//  }
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}