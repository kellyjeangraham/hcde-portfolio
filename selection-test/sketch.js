function setup() {
  createCanvas(1000, 720);
  background(245, 245, 245);
}

function draw() {
  button1();
  button2();
  button3();
  button4();
}

function mousePressed() {
  if (mouseX > 150 && mouseX < 250 && mouseY > 100 && mouseY < 200) {
    bigImg();
    text("Image 1", width/2, height/2);
  } else if (mouseX > 150 && mouseX < 250 && mouseY > 200 && mouseY < 300) {
    bigImg();
    text("Image 2", width/2, height/2);
  } else if (mouseX > 150 && mouseX < 250 && mouseY > 300 && mouseY < 400) {
    bigImg();
    text("Image 3", width/2, height/2);
  } else if (mouseX > 150 && mouseX < 250 && mouseY > 400 && mouseY < 500) {
    bigImg();
    text("Image 4", width/2, height/2);
  }
}

function button1() {
  if (mouseIsPressed && mouseX > 150 && mouseX < 250 && mouseY > 100 && mouseY < 200) {
    fill(150);
  }
  else if (mouseX > 150 && mouseX < 250 && mouseY > 100 && mouseY < 200) {
    fill(200);
  } else {
    fill(255);
  }
    rect(150, 100, 100, 100);
}

function button2() {
  if (mouseIsPressed && mouseX > 150 && mouseX < 250 && mouseY > 200 && mouseY < 300) {
    fill(150);
  }
  else if (mouseX > 150 && mouseX < 250 && mouseY > 200 && mouseY < 300) {
    fill(200);
  } else {
    fill(255);
  }
    rect(150, 200, 100, 100);
}

function button3() {
  if (mouseIsPressed && mouseX > 150 && mouseX < 250 && mouseY > 300 && mouseY < 400) {
    fill(150);
  }
  else if (mouseX > 150 && mouseX < 250 && mouseY > 300 && mouseY < 400) {
    fill(200);
  } else {
    fill(255);
  }
    rect(150, 300, 100, 100);
}

function button4() {
  if (mouseIsPressed && mouseX > 150 && mouseX < 250 && mouseY > 400 && mouseY < 500) {
    fill(150);
  }
  else if (mouseX > 150 && mouseX < 250 && mouseY > 400 && mouseY < 500) {
    fill(200);
  } else {
    fill(255);
  }
    rect(150, 400, 100, 100);
}

function bigImg() {
  background(245, 245, 245);
  fill(255);
  rect(350, 100, 400, 400);
  fill(0);
}