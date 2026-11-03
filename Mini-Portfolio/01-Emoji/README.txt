MA1805 Mini-Portfolio
01 - Emoji
Andrea Wilkinson 101103377

For my emoji creation, I wanted to make a wizard that seems shocked or surprised by something, either by his own creation or whoever is staring back at him through the screen. 

The visual element of my project is: 

The background: A muted teal-blue background
The wizard: A character composed of a light grey-pinkish head, large white eyes with smaller black pupils, a mouth, beard, and a blue pointed hat.

How the code works and what I learned:
I learned how to create a character using only 2D geometry and layering. By mapping the coordinates on the X and Y grid, I discovered how to align shapes, like placing smaller black circles inside larger ones to create focused pupils. I also learned just like artistic programs like Clip Studio Paint or Procreate, code uses layers the same way. The order of the code dictates the depth, while shapes written later in the script are layered on top of older ones, just like the layering systems used in those softwares made for digital art.

1. The global setup & draw loops
	'setup()': Runs once to build a 400x400 canvas.
	'draw()': Runs constantly at around 60fps, refreshing the background canvas colour and drawing the static character elements on top continuously.

2. Coordinate Alignments
	 Symmetrical features: The eyes are balanced along the horizontal center of the head. By shifting one eye 30 pixels to the left and the other 30 pixels to the right, the character gets a symmetrical gaze.

	 Placing shapes: The pupils share the exact same center coordinates as the white outer eyes. By just decreasing the size down creates the illusion of pupils sitting inside the eyeballs.
	 Other objects: The red exclamation point on the left aligns a thin vertical rectangle with a circle directly below it.

3. Depth and layering through order of code.
  The 3D layering effect is controlled by the sequence of the code.
	For example: fill(220, 210, 210); circle(200, 250, 150); // The Head 
	fill(80, 100, 160) triangle(280, 210, 200, 20, 120, 210); // The Hat
  Because the blue triangle hat code is placed after the head circle, it overlaps the top half of the face, acting like a real hat placed on the wizard's head.


1. Copy the code from 'sketch.js'
2. Open the p5.js web editor (p5js.org).
3. Remove the default code, paste the code into the editor that was copied out of 'sketch.js'
4. Click the play button
