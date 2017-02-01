// Created by Kelly Graham
// Last edited 1/31/17
// A monster drawing that either follows the mouse with its eyes or jumps up and down based on mouse click

var page = 0; // variable to flip between jumping and looking
var eyeDirection = 0;

var w = 240; // variable for body width

function setup() {
  createCanvas(1200, 760); // draw the working canvas
  noStroke(); // remove stroke outlines
  rectMode(CENTER); // draw rectangles from center point
}

function draw() {
  background(245, 230, 245); // light pink background in draw to keep it refreshing
  monster(600, 250);
  
  if (page == 0) {
    if(mouseX < width/2 - 50) {
      eyeDirection = eyeDirection - 0.5;
    } else if (mouseX > width/2 + 50) {
      eyeDirection = max(eyeDirection + 0.5);
    }
  } else {
    // add code here as you complete step 5
  }
}

function monster(x, y) { // don't forget to include some parameters, this is the larger monster function that will call smaller body part functions
  legs(x, y);
  body(x, y);
  eyes(x, y);
  
}

function legs(x, y) { // this draws the legs and feet of the monster
  fill(80, 0, 80); // dark purple for legs
  rect(x - 50, y + 220, w / 12, w); // left leg
  rect(x + 50, y + 220, w / 12, w); // right leg
  
  fill(255); // white for socks
  rect(x - 50, y + 320, w / 12, 40); // left sock
  rect(x + 50, y + 320, w / 12, 40); // right sock
  
  fill(200, 0, 0);
  rect(x - 50, y + 310, w / 12, 5); // left top stripe
  rect(x - 50, y + 320, w / 12, 5); // left bottom stripe
  rect (x + 50, y + 310, w / 12, 5); // right top stripe
  rect (x + 50, y + 320, w / 12, 5); // right bottom stripe
  
  fill(150); // black fill for shoes
  rect(x - 60, y + 350, w / 6, 20); // left shoe rectangle
  rect(x - 50, y + 337, w / 12, 8); // left shoe tongue
  rect(x + 60, y + 350, w / 6, 20); // right shoe rectangle
  rect(x + 50, y + 337, w / 12, 8); // right shoe tongue
}

function body(x, y) { // this draws the major shapes of the monster body
  fill(205, 215, 255); // lavender ghost fill
  ellipse(x, y, w, w); // draw head top curve
  rect(x, y + 120, w, w); // draw body fill going down from curve
  triangle(x - 120, y + 240, x - 90, y + 240, x - 120, y + 280); // draw ridged bottom of body (left)
  triangle(x - 90, y + 240, x - 30, y + 240, x - 60 , y + 280); // draw ridged bottom of body (center left)
  triangle(x - 30, y + 240, x + 30, y + 240, x, y + 280); // draw ridged bottom of body (center)
  triangle(x + 30, y + 240, x + 90, y + 240, x + 60, y + 280); // draw ridged bottom of body (center right)
  triangle(x + 90, y + 240, x + 120, y + 240, x + 120, y + 280); // draw ridged bottom of body (right)
  
  fill (80, 0, 80); 
  ellipse(x, y + 60, 20, 20); // draw mouth circle
}

function eyes(x, y) { //eyes go here to be called into monster
  fill(255); // whites of eyes
  ellipse(x - 50, y, 60, 60); // left eye
  ellipse(x + 50, y, 60, 60); // right eye
  
  fill(80, 0, 80); // dark purple for pupils
  ellipse(x - 50 + eyeDirection, y, 30, 30); // left pupil
  ellipse(x + 50 + eyeDirection, y, 30, 30); // right pupil
}

function mousePressed() {
  page = 1 - page;
  fill(0);
  ellipse(mouseX, mouseY, 20, 20);
}
