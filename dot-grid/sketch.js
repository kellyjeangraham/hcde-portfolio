function setup() {
  createCanvas(500,500);
  
  for (i = 20; i < width - 20; i = i + 10) {
    fill(10 + i, 0, 0);
    for (j = 20; j < height - 20; j = j + 10) {
      stroke(0, 10 + j, 0);
      rect(i, j, 4, 4);
    }
  }
}

function draw() {
  
}