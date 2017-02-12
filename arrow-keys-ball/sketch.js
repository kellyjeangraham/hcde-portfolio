var x = 600;
var y = 360;

function setup() {
  createCanvas(1200, 720);
  background(200);
  noStroke();
}

function draw() {
  background(255, 200, 200);
  fill(200, 15, 15);
  ellipse(x, y, 150, 150);
 
  if (keyIsPressed) {
    if (keyCode == UP_ARROW && y > 75) {
      y = y - 10;
    } else if (keyCode == DOWN_ARROW && y < (720 - 75)) {
      y = y +10;
    } else if (keyCode == LEFT_ARROW && x > 75) {
      x = x - 10;
    } else if (keyCode == RIGHT_ARROW && x < (1200-75)) {
      x = x + 10;
    }
  }
}

function keyPressed() {
}