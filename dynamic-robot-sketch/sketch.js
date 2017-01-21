//The background() function inside of draw() makes the background be redrawn each time draw() runs, so it covers up all the previous robots that were drawn. Without background() at the top, every single iteration of draw() is shown together

function setup() {
  createCanvas(720, 480); //sizes drawing canvas
  smooth(); //smooth out the lines
  strokeWeight(2); //outline thickness
}

function draw() {
  background(205);
  translate(mouseX, mouseY);
  
  //Neck 
  stroke(122, 120, 78); //set stroke color
  line(266, 257, 266, 162); //draws first vertical line for neck
  line(276, 257, 276, 162); //second neck line
  line(286, 257, 286, 162); //third neck line
  
  //Antennae
  line(276, 155, 246, 112); //angled line for antennae
  line(276, 155, 306, 56); //another line
  line(276, 155, 342, 170); //last antennae line
  
  //Body
  noStroke(); //remove stroke outlines from next drawings
  fill(122, 120, 78); //change fill color
  ellipse(264, 377, 66, 66); //draw circle for foot
  fill(226, 224, 147); //change fill, to black
  rect(219, 257, 90, 120); //draw body rectangle
  fill(122, 120, 78); //change fill back to grey
  rect(219, 274, 90, 6); //another body rectangle
  
  //Head
  fill(209, 204, 85); //black fill
  ellipse(276, 155, 90, 90); //draw head
  fill(255); //white fill
  ellipse(288, 150, 28,28); //draw eye
  fill(0); //fill back to black
  ellipse(288, 150, 6, 6); //draw eye pupil
  fill(122, 120, 78); //change fill to grey
  ellipse(263, 148, 10, 10); //draw accent circle
  ellipse(296, 130, 8, 8); //draw accent circle
  ellipse(305, 162, 6, 6); //draw accent circle
}