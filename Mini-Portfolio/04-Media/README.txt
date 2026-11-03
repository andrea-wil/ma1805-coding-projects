MA1805 Mini-Portfolio
04 - Media
Andrea Wilkinson 101103377

For my media project I wanted to make an interactive code by using the photos I took of my parrot. For the "You died" text alongside the iconic sound and screen fading to black, I was inspired by the 'DarkSouls' games. I thought to play around with how I can make this project interactive and unique. So I used photos of my parrot, while including familiar references from DarkSouls to make it seem like getting chomped by my parrot leads to a "You Died" screen like in the games when the player dies.

The visual elements of my project is:

The background: Two images of my parrot, first one being him facing the front, second him biting the camera.
The typography: Text saying "Boop the Parrot!", which disappears to become a bold red "You died" notification post-interaction.
The overlays: A full frame black rectangle that builds up opacity to simulate a fading blackout over the graphics.

How the code works & what I learned:

By linking assets with Booleans, I managed to create an interactive program. I learnt that using the preload() function is important for safely loading bulky image and audio files into program arrays before the sketch itself starts.

1. The global setup & draw loops
  'photos = []': An array used to store external image assets so they can be switched quickly via an index counter.
 'preload()': Runs before anything else to asset-track and guarantee external picture and sound files are completely cached in memory.
 'setup()': Configures a wide 750x600 canvas coordinate frame and centers the image alignment calculations.
 'draw()': Refreshes constantly at 60fps to display the active picture state, evaluate system boolean flags, and blend text layering layers.

2. State Management & Triggers

	Game state flags: Binary conditional tracks like hasStarted and isDead supervise what graphic layer displays. If hasStarted equals false, title sequences prompt execution, if isDead scales to true, alternative logic triggers the collapse sequences. 
	Interactive index shifting: Inside mousePressed(), the calculation (currentIdx + 1) % photos.length) causes the image indexes to advance cleanly. It cycles elements from normal state to the jumping 'chomp' state.
	Sound Sync: Upon a mouse press event, audio systems perform assessments like (isLoaded()) before overlapping audio files to execute the 'chomp' sound effect.

3. Alpha fades
	The gradual visibility transition is controlled by increments of math within loop intervals.
	For example: if (blackAlpha <255) { blackAlpha += 2; } fill(0, 0, 0, blackAlpha);
By step-incrementing integer alpha tracks during runtime frames, masking nodes slowly transforms properties from hidden to solid fills. The system connects these variables so that once the index crosses a threshold, secondary textual colours fade in.

How to run the code (in VScode)

1. Copy the code from 'sketch.js'
2. Open VSCode and ensure the plugins 'p5.vscode' and 'Live Server' are installed.
3. Create a new folder or select any. 
4. Extract the Zip file into that folder.
5. In VSCode, click File > Open Folder > Select the folder where the ZIP file was extracted into. 
6. Press 'Go Live' bottom right of the VScode window.
7. Boop the Parrot at your own risk!