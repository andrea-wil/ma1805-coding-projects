MA1805 Coding Projects
02-Movement
Andrea Wilkinson 101103377 

For the following project I made an atmospheric piece featuring a dark purple background, rainfall, a crescent moon, and a blurry, mirage-like text.

The visual elements of my project is:

The background: A dark purple background for the midnight sky, with a crescent moon on the top right corner of the screen. I made the moon by layering another circle slightly ontop of the white circle to create the crescent shape.
The text: The phrase I used "There is still time", is repeated diagonally five times, I created the fading effect by using transparency or 'alpha' mapping. 
The rainfall: I attempted to make the rainfall seem 3D by simulating depth through the speed and thickness of each drop.

--------------------------------

How the code works:

Before starting this project I've gone through p5.js's reference pages and looked through the "Object Orianted Programming(OOP)" in order to understand better how to manage a large particle system without lagging.

1. The global setup & draw loops
    'drops = []': An array acting as storage or a box for all individual particles.
    'setup()': Runs once to build the 400x400 canvas and fills the array with 500 instances of the 'Drop' class, creating the rainfall particles.
    'draw()': Runs constantly at roughly 60fps. It handles drawing the moon, renders the individual raindrops, and layers the blurry text.

2. The 'Drop' class
//Instead of treating rain as just simple lines, each raindrop is treated as an individual object with a 3D perspective.

    The 'z' factor: The z factor is used for the depth perception, every drop is assigned a random 'z' value between '0' (which is far away) and '20' (closer to the viewer = larger)
    Property mapping: Using the p5.js 'map()' function, the depth ('z') calculates the behaviour of the drops.
        For example,
        Far away drops (low z): Falls slowly, very thin and has shorter length
        Close drops (high z): Falls quicker, thicker weight, and longer in length
    Gravity: Inside 'fall()', theres 'this.yspeed += 0.05' acts as a tiny gravitational pull downwards, increasing the raindrops in speed as they drop.
    Recycling & looping: To avoid using unnecessary memory and prevent the project from causing me issues as I would go along, I coded it so that the drops aren't really deleted. When a drop crosses the bottom border (this.y > height'), it teleports back above the canvas (hence the 'random(-200, -100))

3. Text Iteration(Cascading)
//The cascading effect is achieved by a compact mathematical 'for' loop:
    for (let i = 0; i <repetitions; i++) {
        let x = startX +i*4;
        let y = startY + i*-4;
        let alpha = map(1, 0, repetitions, 255, 0);
    }
As 'i' counts up from 0 to 4, it slightly shifts to the right and upward while scaling down the transparency ('alpha') from solid white ('255') to transparent ('0').

------------------------------------

How to run the code(in p5.js):

    1. Copy the code from 'sketch.js'
    2. Open the p5.js web editor (https://p5js.org).
    3. Remove the default code, paste the code into the editor that was copied out of 'sketch.js'
    4. Click the play button
