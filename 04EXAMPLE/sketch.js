let vid;
let playing = false;
let speed = 0.1;
let seasound;

function preload() {
vid = createVideo('06-media_TheSea.mov');
seasound = loadSound('freesound_community-sea-and-seagull-wave-5932.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  vid.loop();
  vid.hide();
}

function draw() {
  background(220);
  speed = map(mouseX, 0, width, 0.1, 3);
  vid.speed(speed);
  image(vid, 0, 0, width, height);
  filter(BLUR, 9);
}

function mouseClicked(){
  seasound.loop();
  seasound.amp(0.5);
  if (playing) {
    vid.pause();
    playing = false;
  } else {
    vid.play();
    playing = true;
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume(); 
    }
  }
}