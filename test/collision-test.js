import { expect } from 'chai';
import GameState from '../lib/game/classes/GameState.js';


// Collision Border
describe('Collision Border Bottom', () => {
  const canvas = { width: 550, height: 550 }
  const context = '';
  const game = new GameState(canvas, context, 'easy', 3, {p1: 0, p2: 0});

  game.setupEnvironment();

  it('Should end round if the player crosses border', () => {
    game.player1.yPos = 500;
    game.player1.xPos = 200;

    // Redefine victoryText to avoid DOM undefined error
    game.player1.victoryText = function(player) {
      return player;
    }

    game.player1.collisionBorder(game, game.player1);
    expect(game.roundOver).to.equal(true);
  })
})

describe('Collision Border Top', () => {
  const canvas = { width: 550, height: 550 }
  const context = '';
  const game = new GameState(canvas, context, 'easy', 3, {p1: 0, p2: 0});

  game.setupEnvironment();

  it('Should end round if the player crosses border', () => {
    game.player1.yPos = 0;
    game.player1.xPos = 200;

    // Redefine victoryText to avoid DOM undefined error
    game.player1.victoryText = function(player) {
      return player;
    }

    game.player1.collisionBorder(game, game.player1);
    expect(game.roundOver).to.equal(true);
  })
})

describe('Collision Border Right', () => {
  const canvas = { width: 550, height: 550 }
  const context = '';
  const game = new GameState(canvas, context, 'easy', 3, {p1: 0, p2: 0});

  game.setupEnvironment();

  it('Should end round if the player crosses border', () => {
    game.player1.yPos = 200;
    game.player1.xPos = 500;

    // Redefine victoryText to avoid DOM undefined error
    game.player1.victoryText = function(player) {
      return player;
    }

    game.player1.collisionBorder(game, game.player1);
    expect(game.roundOver).to.equal(true);
  })
})

describe('Collision Border Left', () => {
  const canvas = { width: 550, height: 550 }
  const context = '';
  const game = new GameState(canvas, context, 'easy', 3, {p1: 0, p2: 0});

  game.setupEnvironment();

  it('Should end round if the player crosses border', () => {
    game.player1.yPos = 200;
    game.player1.xPos = 0;

    // Redefine victoryText to avoid DOM undefined error
    game.player1.victoryText = function(player) {
      return player;
    }

    game.player1.collisionBorder(game, game.player1);
    expect(game.roundOver).to.equal(true);
  })
})

// Collision Self
describe('Collision Self', () => {
  const canvas = { width: 550, height: 550 }
  const context = '';
  const game = new GameState(canvas, context, 'easy', 8, {p1: 0, p2: 0});

  game.setupEnvironment();

  it('Should end round if the player head overlaps trail', () => {
    for (let i = 0; i < 4; i++) {
      game.player1.moveTrail();
      game.player1.moveHead();
    }

    game.player1.yPos = 407;
    game.player1.xPos = 135;

    // Redefine victoryText to avoid DOM undefined error
    game.player1.victoryText = function(player) {
      return player;
    }

    game.player1.collisionSelf(game, game.player1);
    expect(game.roundOver).to.equal(true);
  })

  it('Should end round if any part of player head hits trail', () => {
    // Reset round for testing
    game.roundOver = false;
    game.player1.yPos = 410;
    game.player1.xPos = 130;

    // Redefine victoryText to avoid DOM undefined error
    game.player1.victoryText = function(player) {
      return player;
    }

    game.player1.collisionSelf(game, game.player1);
    expect(game.roundOver).to.equal(true);
  })

  it('Should not end round if no overlap', () => {
    // Reset round for testing
    game.roundOver = false;
    game.player1.yPos = 416;
    game.player1.xPos = 135;

    // Redefine victoryText to avoid DOM undefined error
    game.player1.victoryText = function(player) {
      return player;
    }

    game.player1.collisionSelf(game, game.player1);
    expect(game.roundOver).to.equal(false);
  })
})

describe('Collision other Player', () => {
  const canvas = { width: 550, height: 550 }
  const context = '';
  const game = new GameState(canvas, context, 'easy', 8, {p1: 0, p2: 0});

  game.setupEnvironment();

  it("Should collide if player head overlaps other player's trail", () => {
    for (let i = 0; i < 4; i++) {
      game.player1.moveTrail();
      game.player1.moveHead();
    }

    game.player2.yPos = 407;
    game.player2.xPos = 135;

    // Redefine victoryText to avoid DOM undefined error
    game.player1.victoryText = function(player) {
      return player;
    }

    game.player2.collisionPlayer(game, game.player1);
    expect(game.score.p1).to.equal(1);
  })
})
