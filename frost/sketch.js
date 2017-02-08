/* 
  Created by Kelly Graham
  Last edited 2/7/17
  "Frost", snowflakes build up around mouse movement, larger ones appear on mouseclick. All slowly fade. 
*/

/* TO DO LIST
  -make each snowflake twinkle after it is drawn (continue changing colors)
  -make each snowflake fade away after a few seconds
  -make each snowflake mildly rotated
  -make each snowflake slightly unique in stroke weight and size?
  -make on-click snowflakes vary significantly in stroke weight and size
*/

function setup() {
  createCanvas(1200, 720); // draw large canvas
  background(20, 20, 40); // dark blue background color
  angleMode(degrees);
  frameRate(60);
}

function draw() {
  snowflake(mouseX + random(-100, 100), mouseY + random(-100, 100), 5, random(10, 50), 1, 250);
}

// draws a snowflake near current mouse location when mouse is pressed
function mousePressed() {
  snowflake(mouseX, mouseY, 5, 100, 2, 250);
}

// draws a line star around a given point, with a slightly randomized given color 
function snowflake(x, y, r, w, s, b) { // parameters for x- and y-location, inner radius, width, stroke weight, and brightness
  strokeWeight(random(1, s + 2));
  stroke(random(b - 100, 255)); // varies stroke color slightly to create a "twinkle" effect
  line(x - r, y - r, x - (.7 * w), y - (.7 * w)); 
  line(x - r, y, x - w, y);
  line(x - r, y + r, x - (.7 * w), y + (.7 * w));
  line(x, y + r, x, y + w);
  line(x + r, y + r, x + (.7 * w), y + (.7 * w));
  line(x + r, y, x + w, y);
  line(x + r, y - r, x + (.7 * w), y - (.7 * w));
  line(x, y - r, x, y - w);
}