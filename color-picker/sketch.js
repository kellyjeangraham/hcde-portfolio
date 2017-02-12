/* 
  Created by Kelly Graham
  Last edited 2/11/17
  "Bloom" click to draw a circle of the color of the image behind it
*/

function preload() {
  bg = loadImage("rainbowflower.jpg");
}

function setup() {
  createCanvas(720, 720);
  noStroke();
  frameRate(10);
  image(bg, 0, 0, 720, 720);
}

function draw() {
 if (mouseIsPressed) {
   var c = get(mouseX, mouseY);
  var f = color(c, 100);
  fill(f);
  ellipse(mouseX, mouseY, 50, 50);
  }
}

