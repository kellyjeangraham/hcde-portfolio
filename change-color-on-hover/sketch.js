function setup() {
  createCanvas(500, 500);
  background(200);
  noStroke();
}

function draw() {
  rect(100, 300, 100, 100);
  
  if (mouseX > 100 && mouseX < 200 && mouseY < 400 && mouseY > 300) {
    fill(0);
  }
  else {
    fill (255);
  }
}