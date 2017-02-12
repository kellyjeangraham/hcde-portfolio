/* 
  Created by Kelly Graham
  Last edited 2/11/17
  "Bloom" click to draw a circle of the color of the image behind it, slowly abstract a photograph
*/

function preload() { // preload an image
  bg = loadImage("rainbowflower.jpg"); // put image in variable to call when loaded
}

function setup() {
  createCanvas(720, 720); // draw square canvas
  noStroke(); // remove strokes
  image(bg, 0, 0, 720, 720); // draw image to fill canvas
}

function draw() {
 if (mouseIsPressed) { // check if mouse is clicked or held down
  var c = get(mouseX, mouseY); // fetch color values for position when mouse was held down
  fill(c); // fill with stored color values
  ellipse(mouseX, mouseY, 40, 40); // draw circle at mouse location with image-grabbed color
  }
}

