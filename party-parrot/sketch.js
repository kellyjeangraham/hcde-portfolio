/* 
  Created by Kelly Graham
  Last edited 2/11/17
  Typing P on the keyboard loads a grid of dancing parrot gifs using P5.gif.js library, letting go returns to normal
  Library from: https://github.com/antiboredom/p5.gif.js
*/

var parrot;

function setup() {
  createCanvas(800, 600);
  parrot = loadGif('partyparrot.gif');
}

function draw() {
  background(245, 200, 200);
  fill(255, 245, 245);
  textSize(72);
  textAlign(CENTER);
  text("press p to party", width/2, height/2);
  
  if (key == "p") {
    background(255, 220, 220);
    for (i = 0; i < 35; i++) {
      for (j = 0; j < 25; j++) {
        image(parrot, i*35, j*25);
      }
    }
  }
}

function keyTyped() {
  
}