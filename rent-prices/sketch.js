var years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014];
var medianRent = [960, 993, 1010, 1096, 1096, 1076, 1061, 1087, 1132, 1179];
var vacancyRate = [6.04, 5.98, 4.64, 4.43, 5.13, 5.58, 5.00, 4.49, 4.19, 3.25];
var incomeFraction = [17.71, 16.89, 17.05, 17.64, 19.02, 19.34, 19.42, 19.71, 20.18, 19.85];
var renterPercentage = [37.41, 36.64, 35.58, 36.54, 38.23, 39.38, 40.05, 40.47, 40.87, 40.70];

var minWidth = 100;
var maxWidth = 400;

var numColors = 10;
var row = 0;

function setup() {
  createCanvas(1400, 720);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(235, 245, 255);
  fill(0);
  textSize(24);
  text("Seattle Rent", width/2, 50);
  textSize(14);
  text("2005 - 2014", width/2, 70);
  
  for (i = 0; i < 5; i++) {
    graphic(140 + 280*i, 220, 150);
    labels(years[i], 140 + 280*i, 320);
  }
  for (j = 5; j < 11; j++) {
    graphic(140 + 280*j, 400, 150);
    labels(years[j], 140 + 280*j, 440);
  }
}

function graphic(x, y, w) {
  fill(255, 205, 205);
  ellipse(x, y, w, w);
  fill(205, 255, 205);
  ellipse(x, y, w/2, w/2);
}


function labels(input, x, y) {
  fill(0);
  text(input, x, y);
}
