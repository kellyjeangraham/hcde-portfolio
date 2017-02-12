/* 
  Created by Kelly Graham
  Last edited 2/11/17
  "Frost", snowflakes build up around mouse movement, larger ones appear on mouseclick.
*/

/* TO DO LIST
  -make each snowflake twinkle after it is drawn (continue changing colors)
  -make each snowflake fade away after a few seconds
  -make each snowflake mildly rotated
  -add background image
*/

var a = 255;

function preload() { // load in background snowflake image
  bg = loadImage("snowflake.jpg");
}

function setup() {
  createCanvas(1200, 720); // draw large canvas
  background(20, 20, 40); // dark blue background color in case image doesn't load
  image(bg, 0, 0, 1200, 720); // load in background image
  frameRate(10); // slow down framerate for more atmospheric snow feeling
}

function draw() {


  snowflake(mouseX + random(-100, 100), mouseY + random(-100, 100), 5, random(5, 50), 1, a); // draw a snowflake near current mouse position

}

// draws a larger snowflake near current mouse location when mouse is pressed
function mousePressed() {
  snowflake(mouseX, mouseY, 5, 100 + random(60), 8, 255);
}

// draws a line star around a given point, with a slightly randomized given color 
function snowflake(x, y, r, w, s, c) { // parameters for x- and y-location, inner radius, width, stroke weight, and brightness
  
  strokeWeight(random(1, s + 2));
  stroke(255, 255, 255, c);
  line(x - r, y - r, x - (.7 * w), y - (.7 * w)); 
  line(x - r, y, x - w, y);
  line(x - r, y + r, x - (.7 * w), y + (.7 * w));
  line(x, y + r, x, y + w);
  line(x + r, y + r, x + (.7 * w), y + (.7 * w));
  line(x + r, y, x + w, y);
  line(x + r, y - r, x + (.7 * w), y - (.7 * w));
  line(x, y - r, x, y - w);
}