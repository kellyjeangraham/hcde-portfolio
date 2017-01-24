function setup() {
  // CANVAS
  createCanvas(506,772); // portrait orientation canvas
  background(228, 226, 224); // color-sampled grey background
  
  // BACKGROUND SKETCHES
  strokeWeight(2);
  stroke(186); // grey stroke outlines
  noFill(); // no fill, just light pencil strokes
  
  rect(236, 168, 110, 488); // long skinny sketch rectangle
  rect(306, 378, 131, 145); // square sketch outline on the right side
  ellipse(360, 456, 131, 131); // circular arc
  
  beginShape(); // drawing the non-whole sketch marks in the background
    vertex(206, 606);
    vertex(206, 706);
    vertex(340, 726);
  endShape();
  
  // left side sketch lines
  line(40, 400, 200, 400); // horizontal
  line(80, 380, 200, 380); // horizontal
  line(100, 320, 100, 380); // vertical
  line(100, 400, 100, 440); // vertical
  
  // MAJOR SHAPES
  noStroke();
  
  // left side tan rectangle
  fill(139, 122, 81);
  rect(155, 110, 108, 496);
  
  // white space
  fill(228, 226, 224);
  rect(192, 172, 92, 105);
  
  // right side dark slanted rectangle
  fill(58, 48, 43);
  quad(357, 159, 484, 186, 438, 424, 312, 402);
  
  // central brown slanted rectangle
  fill(129, 89, 52);
  quad(213, 95, 296, 83, 392, 697, 311, 720);
  
  // top beige shape
  stroke(200);
  strokeWeight(1);
  fill(213, 208, 200);
  beginShape();
    vertex(136, 246);
    vertex(298, 246);
    vertex(298, 504);
    vertex(207, 508);
    vertex(209, 441);
    vertex(155, 448);
    vertex(155, 506);
    vertex(136, 504);
  endShape();

  // SKETCH LINES
  noFill();
  
  // on top of dark rect
  line(336, 334, 371, 184);
  line(350, 342, 383, 193);
  line(356, 350, 390, 190);
  line(362, 362, 406, 195);
  line(374, 370, 420, 196);
  ellipse(380, 320, 40, 40);
  
  // on top of beige shape
  stroke(100); // darker bigger line
  strokeWeight(4);
  line(214, 389, 335, 358);
  stroke(170); // lighter thinner lines
  strokeWeight(2);
  line(187, 441, 192, 354);
  line(165, 368, 179, 294);
  arc(158, 297, 40, 40, TWO_PI, PI);
  arc(168, 350, 46, 40, TWO_PI, PI);
}

function draw() {
}