function setup() {
  createCanvas(500,500);
}

function draw() {
  strokeWeight(5);
  background(200);
  
  for (i = 10; i < mouseY; i = i + 10) {
     line(0, i, width, i); 
  }
}