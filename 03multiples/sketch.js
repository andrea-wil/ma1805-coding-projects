let i = 190;
  let d = 190;
  let minSize = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150, 180, 150);
  
  fill(55, 150, 25);
  frameRate(0);
  
  while (d > minSize) {
    circle(290, 100, i);
    d-= (15);
  
  fill(55, 150, 25);
  frameRate(0);
  
  while (i > minSize) {
    circle(100, 100, i);
    i-= (15);
  }
}
}
