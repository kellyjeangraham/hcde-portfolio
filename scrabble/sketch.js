/* 
  Scrabble Data Visualization
  Created by Kelly Graham
  Last updated 2/25/17
  Visual representations of each letter in the U.S. version of Scrabble. 
  Click a letter or type it on the keyboard to see its unique representation in the game. 
  Data from https://github.com/dariusk/corpora/blob/master/data/games/scrabble.json#L18
*/

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Blank"]
var type = ["vowel", "consonant", "consonant", "consonant", "vowel", "consonant", "consonant", "consonant", "vowel", "consonant", "consonant", "consonant", "consonant", "consonant", "vowel", "consonant", "consonant", "consonant", "consonant", "consonant", "vowel", "consonant", "consonant", "consonant", "consonant", "consonant", "N/A"];
var points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10, 1];
var tiles = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1, 2];
var order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
var frequency = [8.1, 1.4, 2.7, 4.2, 12.7, 2.2, 2.0, 6.1, 6.9, 0.1, 0.7, 4.0, 2.4, 6.7, 7.5, 1.9, 0.1, 5.9, 6.3, 9.0, 2.7, 0.9, 2.3, 0.15, 1.9, 0.07, 0];
var count = 27;
var xMargin = 50;
var yMargin = 150;
var spacing = 42;

function setup() {
  createCanvas(1200, 720); // draw the canvas
  textAlign(CENTER); // align all text to be centered
  noStroke(); // remove stroke from shapes
}

function draw() {
  background(235, 245, 255); // redraw light blue background every draw cycle
  
  fill(0); // text fill black
  textSize(24); // set text size
  text("Scrabble Language", width/2, 50); // title of visualization
  textSize(14); // subtitle text size
  text("Roll over letters to learn about Scrabble letter distributions", width/2, 70); // instructions to view
  text("Press any key to view all letters", width/2, 90); // instructions to view
  text("Larger sizes mean there are more Scrabble tiles of this letter", width/2, 660); // key for interpretation
  text("More green means a higher point value when played", width/2, 680); // key for interpretation
  text("Brightness of inner ring denotes letter's actual frequency in words", width/2, 700); // key for interpretation
  
  list(); // call list function to draw list
  
  if (keyIsPressed) { // draw whole alphabet of graphics whenever a key is held down
    for(i = 0; i < alphabet.length; i++) { // start loop
      graphic(xMargin + 42*i, height/2, map(points[i], 1, 10, 100, 255), map(tiles[i], 1, 12, 10, 60), map(frequency[i], 1, 10, 100, 255), map(frequency[i], 0, 12.7, 5, 50), alphabet[i], 40*(map(tiles[i], 1, 12, 0.5, 2))); // draw graphic function for each letter
    }
  }
}
// function to draw each individual graphic with sizes and colors in parameters to take array data
function graphic (x, y, f1, w1, f2, w2, alph) {
  fill(100, f1, 100);
  ellipse(x, y, w1, w1);
  fill(f2, 100, 100);
  ellipse(x, y, w2, w2);
  fill(255);
  text(alph, x, y + 10);
}

// function to draw top level list of letters and reveal graphics on rollover
function list() {
  for (i = 0; i < alphabet.length; i++) {
    if (yMargin + 12 > mouseY && yMargin - 12 < mouseY && xMargin + (42*(i-1)) + 24 < mouseX && xMargin + (42*i) + 24 > mouseX) { // check if current mouse position is over one of the letters
      fill(200);
      text(alphabet[i], xMargin + spacing*i, yMargin); // redraw highlighted text
      graphic(width/2, height/2 + 4*tiles[i] + 20, map(points[i], 1, 10, 100, 255), map(tiles[i], 1, 12, 50, 400), map(frequency[i], 1, 10, 100, 255), map(frequency[i], 0, 12.7, 20, 200), alphabet[i], 40*(map(tiles[i], 1, 12, 0.5, 2)));
      fill(0);
    } else {
      text(alphabet[i], xMargin + spacing*i, yMargin);
      fill(50);
    }

  }
}