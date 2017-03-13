var thumbs = [];

function preload() {
  img1 = loadImage('ziggyThumb.jpg'); // photo to put in object
}

function setup() {
  createCanvas(1000, 720);
  background(245, 245, 245);
  
  for (i = 0; i < 6; i++) {
    thumbs[i] = new Thumb();
  }
}

function draw() {
  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].display();
    thumbs[i].hover();
    thumbs[i].click();
  }
}

/* 

function Thumb () {
  
}


{
  x : 150, // x position
  y : 50, // y position
  w : 100, // width
  h : 100, // height
  display : function() { // draws the actual image
    image(img1, this.x, this.y + 110*i, this.w, this.h);
  },
  hover : function() { // hover behavior to check if mouse is over
    if(mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      tint(150);  // Tint
    } else {
      noTint();
    }
  },
  click : function() {
    if(mouseIsPressed && mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      tint(100);
    }
  },
};

*/