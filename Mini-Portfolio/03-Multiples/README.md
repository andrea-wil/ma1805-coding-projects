MA1805 Mini-Portfolio
02-Movement
Andrea Wilkinson 101103377

In this project I wanted to make shooting stars/meteors with a trail of light following behind them. 

The visual element of my project is:

The background: A dark blue background with a transparent fade that allows older frames to linger slightly for the effect of motion blur. 
The meteors: A group of 25 white, circular meteor heads that shoot across the screen.
The trail/tail line: A glowing semi-transparent golden line pulling backwards from each meteor head. The length of the trail scales automatically based on how fast the individual meteor is travelling.

--------------------------------

How the code works:

Throughout this project, I learned how to manage multiple moving meteors without lagging the program by using arrays. Working with arrays taught me how to store a large collection of items under one name, while learning about parallel arrays showed me how to link different properties. I wanted to create an effect where the colour of the meteor's trails leave 'ghost stains' onto the canvas and after searching for a solution I came across a Q&A forum for javascript on Stack Overflow, which suggested to lower the alpha on the background. 

1. The global setup & draw loops
    'circleX = []', 'circleY = []', 'starSpeed =[]': Three separate arrays acting as linked storage boxes to hold the positions and speed for each individual star. 
    'setup()': Runs once to build the 600x600 canvas and randomizes the initial X, Y, and speed properties across all 25 meteors.
    'draw()': Runs constantly at roughly 60fps. It redraws a semi-transparent background, draws the trailing tails, places the white meteor heads, and updates the diagonal math.

2. Tracking motion & Vectors

Diagonals: The code adds the speed value to both X and Y vectors at the same time in the update section, causing the objects to travel at a 45-degree angle down and to the right.
    For example: (circleX[i] += starSpeed[i] and circleY[i] += starSpeed[i])
Variety of speed: Each star rolls a random speed between 4 and 10, meaning some streaks shoot past quicker than the others that drifts away in the distance.
    For example: starSpeed[i] = random(4, 10);
Recycling: To maintain a constant shower without overloading the system's memory, a dual boundary check looks for stars crossing the bottom or right borders. When triggered, it resets the star to a random entry point outside the top edges. 
    For example: (circleY[i] > height || circleX[i] > width.)

3. Trail Tapering
    let tailX = circleX[i] - (starSpeed[i] *3);
    let tailY = circleY[i] - (starSpeed[i] *3);
    line(circleX[i], circleY[i], trailX, trailY);
 By multiplyng the star's unique speed index by 3 and subtracting it from the current position, the rendering creates a line pointing upstream. Faster meteors generate longer, more visible trails.

How to run the code(in p5.js)

1. Copy the code from 'sketch.js'
2. Open the p5.js web editor (https://p5js.org).
3. Remove the default code, paste the code into the editor that was copied out of 'sketch.js'
4. Click the play button!


