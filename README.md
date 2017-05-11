# TRON

## Description

Tron is a game with 2 players that move along a game board and create a trail of their previous positions.  A player will lose if they run into the edge of the game board or into a trail of their own or another players'. This game is meant to be playable in a browser and is based on the classic arcade version except being 2 player instead of against an AI.

## Goals

* Build a game that is playable in the browser
* Use design patterns to drive both the design and implementation of code
* Separate business-logic code from view-related code
* Use test-driven design to build a client-side application

## Design Approach

* Our style was inspired by classic arcade games.
* We used a pixel/digital font that resembles a classic game.
* The color palette was based on the Tron Legacy movie.
* We added some game features to further explore what was possible with the Tron game concept.

## Technical Approach

* We used ES6, and webpack to bundle our files.
* We created different files that contain the game's object classes.
* Our game logic is in a separate file.
* We programmed our movement in such a way that the speed of the bike could be independent of framerate, which allowed for more flexibility with features, but caused the collision detection to be more complicated.

## Difficulties

* You can change the speed and difficulty of the game environment each round.
* Getting images and having them correctly display was challenging and would require a lot of extra code because the canvas always sets the origin to be the upper left hand corner of the image, this lead to offset issues when moving right, or when moving down.

### Difficulty Environments

* **Easy:** Grid size is 80% of the canvas
* **Normal:** Grid size is 70% of the canvas
* **Hard:** Grid size is 60% of the canvas
* **Legendary:** Grid size is 30% of the canvas

### Speed
* **Slow**
* **Normal**
* **Fast**

## Screenshots

### Tron Easy Level

![Tron Easy level](./screenshots/tron_easy.png)

### Tron Legendary Level

![Tron Legendary level](./screenshots/tron_legendary.png)
