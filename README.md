# The Last Knight of the Last Kingdom

This is a javascript game in the vein of the original Legend of Zelda.

## Technologies used

1. Vanilla Javascript - for game logic
2. HTML5 Canvas - for visual components
3. [Universal LPC Spritesheet Character Generator](http://gaurav.munjal.us/Universal-LPC-Spritesheet-Character-Generator/) - for character art assets

## MVP Features:

1) Character animation and movement. I am using a sprite generator on github, and will
animate walking and swinging a sword.
2) Movement - When walking, the character should move across the map, which should
make the background scroll as the player is moving. Collision detection should prevent
the player from walking through walls, objects, or enemies.
3) Enemies - enemies should walk in simple patterns and/or move to attack the player.
4) Combat - Player should be able to kill enemies with his sword, and be hurt by bumping
into enemies. Enemies and/or player should be either killed, thrown back, and/or have
temporary invincibility after being hit.
