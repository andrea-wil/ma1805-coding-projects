let circleX = [];
let circleY = [];
let starSpeed = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 25; i++){
    circleX[i] = random(width);
    circleY[i] = random(height);
    starSpeed[i] = random(4, 10);
  }
}

function draw() {
  background(15, 15, 35, 80);

  for (let i = 0; i < circleY.length; i++) {
    stroke(255, 220, 150, 150,);
    strokeWeight(2);

    let trailX = circleX[i] - (starSpeed[i] *3);
    let trailY = circleY[i] - (starSpeed[i] *3);
    line(circleX[i], circleY[i], trailX, trailY);

    noStroke();
    fill(255,255,255);
    circle(circleX[i], circleY[i], 5);

    circleX[i] += starSpeed[i];
    circleY[i] += starSpeed[i];

    if (circleY[i] > height || circleX[i] > width) {
      if (random(1) > 0.5) {
        circleX[i] = random(width);
        circleY[i] = -50
      } else {
        circleX[i] = -50;
        circleY[i] = random(height);
      }
      }
      }
    }
