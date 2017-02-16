function setup() {
  createCanvas(500, 500);
  noFill();
  
  
  for (i = 10; i < width; i = i + 10) {
      ellipse(width/2, height/2, i, i);
  }
}

function draw() {
  
}