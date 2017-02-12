/* 
  Created by Kelly Graham
  Last edited 2/11/17
  "Frost", snowflakes build up around mouse movement, larger ones appear on mouseclick.
*/

var a; // set up transparency varaible

function preload() { // load in background snowflake image
  bg = loadImage("snowflake.jpg"); // establish variable for bg image
}

function setup() {
  createCanvas(1200, 720); // draw large canvas
  background(20, 20, 40); // dark blue background color in case image doesn't load
  image(bg, 0, 0, 1200, 720); // load in background image
  frameRate(14); // slow down framerate for more atmospheric snow feeling
  textAlign(CENTER); // center text
  textSize(18); // set text size
  noStroke(); // remove strokes from text
  fill(255, 255, 255, 150); // set transparent text fill
  text("press c to clear the snow", width/2, 680); // write text on screen
}

function draw() {
  a = random(100, 255); // choose a random alpha value per snowflake
  snowflake(mouseX + random(-50, 50), mouseY + random(-50, 50), 5, random(5, 50), 1, a); // draw a snowflake near current mouse position

  if (key == "c") { // check if "c" key is pressed
    image(bg, 0, 0, 1200, 720); // reload in background image to clear snowflakes
    text("press c to clear the snow", width/2, 680); // redraw text
  }
}

// draws a larger snowflake near current mouse location when mouse is pressed
function mousePressed() {
  snowflake(mouseX, mouseY, 5, 100 + random(60), 8, a);
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