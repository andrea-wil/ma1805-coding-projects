let i = 0;

// Text obtained from  UK Government website 
const aiText = "AI carries risks of misuse by malicious actors. As AI becomes more sophisticated, it may eventually become cheaper and more efficient than human workers, which could cause technological unemployment and a transition period of economic turmoil.";
const textArray = aiText.split(" "); // Convert the text into an an array (list) of words. 


function setup(){
	createCanvas(500, 500); 
  frameRate(5); // speed of the sketch 
}

function draw(){
  let x = random(width);
  let y = random(height);

  if (i < textArray.length) { // is i less-than the number of words in the text
    fill(0);
    stroke(100);
    console.log(i);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y); 
    i++;
  }else{
    i=0; // reset the counter
    background(255); // clear the background 
  }

}