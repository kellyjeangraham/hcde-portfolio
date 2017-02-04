// Created by Kelly Graham
// Last edited 2/03/17
// A monster drawing that either follows the mouse with its eyes or jumps up and down based on mouse click on a button. 

var page = 0; // variable to flip between jumping and looking
var eyeDirection = 0; // variable to change direction of eyes to look left or right based on mouse position
var w = 240; // variable for body width
var jumpValue = 0; // value added to the y-position of monster to make it jump
var jumpDir = 5; // value to switch direction and speed

function setup() {
  createCanvas(1200, 760); // draw the working canvas
  noStroke(); // remove stroke outlines
  rectMode(CENTER); // draw rectangles from center point
}

function draw() {
  background(245, 230, 245); // light pink background in draw to keep it refreshing
  monster(600, 250 + jumpValue); // draws monster at x and y coordinates, y-coord modified by jumping variable
  
  fill(80, 0, 80); // fill for switch button
  rect(200, 100, 200, 60); // draws switch button in top left

  if (page == 0) { // switches to eye movement state
    jumpValue = 0; // resets monster to middle of screen
    if(mouseX < width/2 - 50 && -15 <= eyeDirection) { // if the mouse is left of the monster's eyes and eyeDir hasn't put the pupil outside the eye, run this block
      eyeDirection = eyeDirection - 0.5; // increments eyeDirection negatively to move eyes left
    } else if (mouseX > width/2 + 50 && 15 >= eyeDirection) { // otherwise if the mouse is to the right of the eyes and not outside the right eyeball 
      eyeDirection = eyeDirection + 0.5; // increments eyeDirection positively to move eyes right
    }
  } 
  else { // switches to state for jumping
    eyeDirection = 0; // resets eyes to center
    jumpValue = jumpValue + jumpDir; // jumpValue moves the initial drawing of the monster based on the direction
    if (jumpValue > 150 || jumpValue < -120) { // checks if monster has moved to bottom or top of screen
      jumpDir = jumpDir * -1; // if monster is at top or bottom, reverse direction
    }
  }
}

// this draws the overall monster, with each component located relative to its overarching x/y
function monster(x, y) { 
  legs(x, y + 20 - (0.2 * jumpValue));
  body(x, y);
  eyes(x, y);
}
// draws the monster legs, socks, and shoes
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

// this draws the major shapes of the monster body
function body(x, y) { 
  fill(205, 215, 255); // lavender ghost fill
  ellipse(x, y, w, w); // draw head top curve
  rect(x, y + 120, w, w); // draw body fill going down from curve
  triangle(x - 120, y + 240, x - 90, y + 240, x - 120, y + 280); // draw ridged bottom of body (left)
  triangle(x - 90, y + 240, x - 30, y + 240, x - 60 , y + 280); // draw ridged bottom of body (center left)
  triangle(x - 30, y + 240, x + 30, y + 240, x, y + 280); // draw ridged bottom of body (center)
  triangle(x + 30, y + 240, x + 90, y + 240, x + 60, y + 280); // draw ridged bottom of body (center right)
  triangle(x + 90, y + 240, x + 120, y + 240, x + 120, y + 280); // draw ridged bottom of body (right)
  
  fill (80, 0, 80); 
  if (page == 0) { // check to see if in eye-movement mode
    ellipse(x, y + 60, 20 + abs(eyeDirection), 20); // draw mouth circle that widens when eyes are farther to left or right using absolute value
  } else if (page != 0 && jumpValue <= 5) { // check if in jumping mode and near the top of a jump
    ellipse(x, y + 60, 20 + (0.3 * -jumpValue), 20 + (0.3 * -jumpValue)); // enlarges mouth when jumpValue is low (i.e. close to top of screen) 
  } else if (page != 0) { // otherwise draw normal mouth
    ellipse(x, y + 60, 20, 20);
  }
}

// this draws the eyeballs and pupils that move according to eyeDirection variable
function eyes(x, y) { 
  fill(255); // whites of eyes
  ellipse(x - 50, y, 60, 60); // left eye
  ellipse(x + 50, y, 60, 60); // right eye
  
  fill(80, 0, 80); // dark purple for pupils
  ellipse(x - 50 + eyeDirection, y, 30, 30); // left pupil
  ellipse(x + 50 + eyeDirection, y, 30, 30); // right pupil
}

// switches state from jumping to looking when mouse is pressed
 function mousePressed() { 
  if (mouseX > 100 && mouseX <300 && mouseY > 70 && mouseY < 130) { // checks if mouse is within buttom dimensions
      page = 1 - page; // switches state
  }
}
