var x = 250;
var dir = 5;

function setup() {
  createCanvas(500, 300);
  background(255, 245, 255);
  noStroke();
}

function draw() {
  background(255, 245, 255);
  fill(200, 150, 200);
  ellipse(x, 150, 50, 50);
  
  // min
  // x = min(x +1, 475);
  
  x = x + dir;
  if (x < 25 || x > 475) {
    //change directions
    dir = dir * -1;
  }
  
}