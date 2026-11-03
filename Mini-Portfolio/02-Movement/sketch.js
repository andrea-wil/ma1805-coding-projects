let drops = []; 

function setup() {
  createCanvas(400, 400);

  // 2. CREATE RAINDROPS 
  for (let i = 0; i < 500; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  background(10, 10, 90);

  // MOON 
  fill(255, 255, 255);
  circle(350, 50, 80);
  noStroke();
  
  fill(10, 10, 90);
  circle(330, 50, 80);
  noStroke();

  // ANIMATE RAINDROPS :D
  for (let drop of drops) {
    drop.fall();
    drop.show();
  }

  // text from 'i saw the tv glow'
  let phrase = "There is still time.";
  let repetitions = 5;

  textSize(15);
  textAlign(CENTER, CENTER);

  let startX = width / 2;
  let startY = height / 2;

  for (let i = 0; i < repetitions; i++) {
    // Diagonal iteration
    let x = startX + i * 4;
    let y = startY + i * -4;

    // Solid to transparent
    let alpha = map(i, 0, repetitions, 255, 0);
    fill(255, alpha);
    text(phrase, x, y);
  }
} 

// RAINDROP CLASS 
class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -60);
    this.z = random(0, 20);

    // Width and length of drops for perspective
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 4, 10);
    this.weight = map(this.z, 0, 20, 1, 3);
  }
  
  fall() {
    this.y += this.yspeed;
    this.yspeed += 0.05;

    // Where the drops reset
    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  show() {
    stroke(138, 43, 226, 150);
    strokeWeight(this.weight);
    line(this.x, this.y, this.x, this.y + this.len);
  }
}