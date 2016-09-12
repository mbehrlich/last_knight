# The Last Knight of the Last Kingdom

This is a javascript game in the vein of the original Legend of Zelda.

## Technologies used

1. Vanilla Javascript - for game logic
2. HTML5 Canvas - for visual components
3. [Universal LPC Spritesheet Character Generator](http://gaurav.munjal.us/Universal-LPC-Spritesheet-Character-Generator/)

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

## Wireframes

1. [Basic overhead look](/docs/wireframe1.jpg)
2. [Basic combat look](/docs/wireframe2.jpg)


## Timeline:

Day 1: Monday, September 12th,
  [ ] Project Skeleton
  [ ] Developing player character art assets
  [ ] HTML landing page
  [ ] player character movement
  [ ] player character animation

Day 2: Tuesday, September 13th,
  [ ] Map components
  [ ] Map art assets
  [ ] Movement scrolling on map
  [ ] Collisions - player character should not be able to go through certain tiles.

Day 3: Wednesday, September 14th,
  [ ] Enemy components
  [ ] Enemy art assets
  [ ] Enemy movement - patterns, random, move toward character
  [ ] Enemy animation
  [ ] Enemy collisions

Day 4: Thursday, September 15th,
  [ ] Combat
  [ ] Player life bar. Hurts on contact with enemy, eventual death.
  [ ] Temporary invincibility
  [ ] Sword attack hurts or kills enemy
  [ ] Enemy thrown back by sword attack

Day 5: Friday, September 16th,
  [ ] BONUS
  [ ] Sounds
  [ ] Music
  [ ] Additional enemies
  [ ] Additional levels / art assets
  [ ] Rich storyline
  [ ] SUPER BONUS: Procedurally generated levels
