let photos = [];
let currentIdx = 0;

let chompSound;
let youdiedSound;

let textAlpha = 0;
let blackAlpha = 0;
let isDead = false;
let hasStarted = false;

function preload() {
  //Load photos
 photos[0] = loadImage('ParrotStart.jpg'), img => img.resize(750, 600);
 photos[1] = loadImage('ParrotChomp.jpg'), img => img.resize(750, 600);

 //Load sounds
  chompSound = loadSound('chompsound.wav');
  youdiedSound = loadSound('youdiedsound.wav');
  }
  
  function setup() {
    createCanvas(750, 600);
    imageMode(CENTER);
  }

  function draw() {
    background(220);

   if (photos[currentIdx]) {
      image(photos[currentIdx], width / 2, height / 2, 750, 600);
    }

    if (!hasStarted) {
      fill(255);
      textSize(24);
      textAlign(CENTER, CENTER);
      textStyle(NORMAL);

      fill(0, 150);
      text("Boop the Parrot!", width / 2, height / 2 + 152);
      fill(255);
      text("Boop the Parrot!", width / 2, height / 2 + 150);
    }

    if (isDead) {
    if (blackAlpha < 255) {
        blackAlpha += 2; // Fade in the black overlay
      }

      fill(0, 0, 0, blackAlpha);
      rect(0, 0, width, height);
    }
  
  if (blackAlpha >= 150) {
  if (textAlpha < 255) {
        textAlpha += 5;
      }

      fill(255, 0, 0, textAlpha);
      textSize(32);
      textAlign(CENTER, CENTER);
      textStyle(BOLD);
      text("YOU DIED", width / 2, height / 2);
      }
    }
    

  function mousePressed() {

    hasStarted = true; // Set the game as started on first click

    if (isDead) return; // Prevent further clicks if already dead
    
    currentIdx = (currentIdx + 1) % photos.length;

    if (chompSound && chompSound.isLoaded()) {
      chompSound.play();
    }

    if (youdiedSound && youdiedSound.isLoaded()) {
      youdiedSound.play();
    }

    isDead = true; // Set the dead state to true
  }

