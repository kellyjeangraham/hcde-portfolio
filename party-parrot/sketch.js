/* 
  Created by Kelly Graham
  Last edited 2/11/17
  Typing P on the keyboard loads a grid of dancing parrot gifs using P5.gif.js library, letting go returns to normal
  Library from: https://github.com/antiboredom/p5.gif.js
*/

var parrot; // set up gif variable

function setup() {
  createCanvas(800, 600); // draw canvas
  parrot = loadGif('partyparrot.gif'); // use P5.gif.js library to import partyparrot gif
}

function draw() {
  background(245, 200, 200); // draws background each draw() cycle
  fill(255, 245, 245); // fill color for text
  textSize(72); // set text size
  textAlign(CENTER); // align text to center of page
  text("press p to party", width/2, height/2); // draw guide text
  
  if (key == "p") { // check if p key is currently pressed
    background(255, 220, 220); // redraw background on press
    for (i = 0; i < 35; i++) { // for loop to draw rows of gifs
      for (j = 0; j < 25; j++) { // nested loop to draw columns of gifs
        image(parrot, i*35, j*25); // draw gifs along the for loop iterations
      }
    }
  }
}
