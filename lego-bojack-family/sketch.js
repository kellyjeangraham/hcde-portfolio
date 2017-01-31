// Created by: Kelly Graham
// Last edited 1/28/17
// Bojack Horseman characters that start at corners and meet in the middle

// VARIABLES
var speed = 4; // variable to adjust speed of character movement

var bojX = 10; // set X position variable to start Bojack
var bojY = 10; // set Y position variable to start Bojack
var bojEndX = 300; // end position for bojack
var bojEndY = 200; // end y-position for bojack

var toddX = 10; //set X positions for Todd to use in movement
var toddY = 430; // set Y position variable to use in Todd movement
var toddEndX = 420; //end x-pos for todd
var toddEndY = 220; //end y-pos for todd

var pcX = 1090; // set variable for PC's start x-location
var pcY = 40; // set variable for PC's start y-location 
var pcEndX = 540; // end x-pos for Princess Carolyn
var pcEndY = 250; // end y-pos for Princess Carolyn

var pbX = 980; // set movement variable for Mr. PB
var pbY = 430; // set vertical movement variable for Mr. PB
var pbEndX = 660; // ending position for MrPB
var pbEndY = 220; // ending y-pos for MrPB

var dianeX = 1090; // x-position variable to move Diane
var dianeY = 460; // y-position variable to move Diane
var dianeEndX = 780; // ending position for Diane
var dianeEndY = 250; // ending y-position for Diane

function setup() {
  createCanvas(1200, 800); // build the canvas size
  noStroke(); // remove outlines from objects
}

function draw() {
  background(255, 245, 245); // redraw light pink background every draw loop

  bojack(); // call bojack function to place on canvas
  todd(); // call todd function to place on canvas
  princessCarolyn(); // call princess carolyn function to place on canvas
  diane(); // call diane function to place on canvas
  mrPeanutButter(); // call mr. peanutbutter function to place on canvas
  
  bojX = min(bojX + speed, bojEndX); // min function moves bojack by adding speed value until reaching bojEndX value
  bojY = min(bojY + speed, bojEndY); // min function to move bojack vertically until he reaches bojEndY value
  
  toddX = min(toddX + speed, toddEndX); // min to move Todd towards the center
  toddY = max(toddY - speed, toddEndY); // Todd's start is higher than his finish, so we use max and minus speed to reverse it
  
  pcX = max(pcX - speed, pcEndX); // PC starts further over so we use max and -speed
  pcY = min(pcY + speed, pcEndY); // moves PC downward until pcEndY
  
  pbX = max(pbX - speed, pbEndX); // Move Mr. PB left
  pbY = max(pbY - speed, pbEndY); // Moves Mr. PB upward using max
  
  dianeX = max(dianeX - speed, dianeEndX); // Move Diane left horizontally
  dianeY = max(dianeY - speed, dianeEndY); // Move Diane upward
}

// CHARACTERS

//Bojack function draws rectangles of Bojack's body and clothes
function bojack() { 
  var bojW = 100; // define Bojack's body width to easily tweak it
  var bojH = 380; // define variable to change Bojack height
  
  fill(190, 88, 26); // main color for Bojack's body
  rect(bojX, bojY, bojW, bojH); // draw rectangle for Bojack's entire body
  
  fill(255); // white fill color for Bojack's blaze
  rect(bojX + 42, bojY + 30, 15, 70); // draw rectangle for Bojack's white blaze
  
  fill(116); // fill color for grey jacket
  rect(bojX, bojY + 150, bojW - 70, bojH - 280); // draw left side of grey jacket
  rect(bojX + 70, bojY +150, bojW - 70, bojH - 280); // draw right side of grey jacket
  
  fill(40, 102, 190); // switch color to blue for sweater
  rect(bojX + 30, bojY + 150, bojW - 60, bojH - 180); // draw rectangle for sweater
  
  fill(35, 150, 180); // change color to teal for Bojack's pants
  rect(bojX, bojY + 250, bojW, bojH - 250); // draw Bojack's pants rectangle
}

// Todd function draws rectangles for Todd's body and clothes with variables for height and width
function todd() {
  var toddW = 100; // set variable to adjust Todd's width
  var toddH = 360; // set variable to adjust Todd's height
  
  fill(255, 200, 200); // set Todd's skin color
  rect(toddX, toddY, toddW, toddH); // draw Todd base body
  
  fill(250, 176, 0); // set color to yellow for Todd's beanie
  rect(toddX, toddY, toddW, toddH-310); // draw Todd's beanie
  
  fill(255, 0, 39); // change color to red for Todd's hoodie
  rect(toddX, toddY + 120, toddW, toddH - 240); // draw Todd's hoodie rectangle
  
  fill(88, 86, 111); // change color for Todd's jeans
  rect(toddX, toddY + 240, toddW, toddH - 240); // draw rectangle for Todd's jeans
}

// Princess Carolyn function draws rectangles for her body and clothes, and triangles for ears
function princessCarolyn() {
  var pcW = 100; // set width of PC to adjust easily
  var pcH = 330; // set height of PC, she's shorter than most of the others
  
  fill(255, 122, 235); // set color to pink for PC's hair
  rect(pcX, pcY, pcW, pcH); // draw PC's body
  triangle(pcX, pcY - 30, pcX + 50, pcY, pcX, pcY); // draw PC's left ear
  triangle(pcX + 50, pcY, pcX + 100, pcY - 30, pcX + 100, pcY); // draw PC's right ear
  
  fill(0, 179, 151); // set teal color for PC's dress, draw underneath cardigan
  rect(pcX, pcY + 110, pcW, pcH -180);
  
  fill(247, 237, 0); // set yellow color for PC's cardigan
  rect(pcX, pcY + 90, pcW - 70, pcH - 240); // draw left side of PC's cardigan
  rect(pcX + 70, pcY + 90, pcW - 70, pcH - 240); // draw right side of PC's cardigan
}

// Mr. Peanut Butter function draws rectangles for Mr. PB shape
function mrPeanutButter() {
   var pbW = 100; // set Mr. PB's width
   var pbH = 360; // set Mr. PB's height, he's not quite as tall as Bojack
  
  fill(252, 202, 0); // set yellow color for Mr. PB's body
  rect(pbX, pbY, pbW, pbH); //draw Mr. PB's body
  
  fill(105); // set color to grey for Mr. PB's shirt
  rect(pbX, pbY + 120, pbW, pbH - 230); // draw Mr. PB's shirt
  
  fill(252, 202, 0); // set color back to yellow for v-neck cutout
  triangle(pbX, pbY + 120, pbX + 100, pbY + 120, pbX + 50, pbY + 140); //triangle for v-neck cutout
  
  fill(160, 225, 240); //light blue for PB's pants
  rect(pbX, pbY + 240, pbW, pbH - 240); // draw PB's track pants
}

// Diane function draws series of rectangles for Diane shape
function diane() {
  var dianeW = 100; // Diane's width variable (ended up keeping them all the same for consistency's sake)
  var dianeH = 330; // Diane's height variable (same as PC)
  
  fill(255, 207, 174); // set Diane's skin color to draw body
  rect(dianeX, dianeY, dianeW, dianeH); // draw Diane's body rectangle
  
  fill(0, 19, 65); // color for Diane's hair
  triangle(dianeX, dianeY, dianeX + 50, dianeY, dianeX, dianeY + 50); // draw left hair bangs
  triangle(dianeX + 50, dianeY, dianeX + 100, dianeY, dianeX + 100, dianeY + 50); // draw right hair
  
  fill(98, 112, 44); // green for Diane's jacket
  rect(dianeX, dianeY + 90, dianeW - 70, dianeH - 220); // rect for left side of Diane's jacket
  rect(dianeX + 70, dianeY + 90, dianeW - 70, dianeH - 220); // rect for right jacket side
  
  fill(255); // white for Diane's shirt
  rect(dianeX + 30, dianeY + 110, dianeW - 60, dianeH - 240); // draw shirt lower cut than jacket
  
  fill(115, 142, 167); // blue color for Diane's jeans
  rect(dianeX, dianeY + 200, dianeW, dianeH - 200); // draw jeans
  
  fill(57); // color for Diane's faded black boots
  rect(dianeX, dianeY + 240, dianeW, dianeH - 240); // draw boots rectangle
}



