import { expect } from 'chai';
import Player from '../lib/game/classes/Player.js'

describe('Tron player functions', () => {
  let player1 = new Player(10, 10, 'yellow', 3, 'Player 1', 'p1', 0, -3)

  it('new player should be an instance of Player', () => {
    expect(player1).to.be.an.instanceOf(Player);
  })

  it('new player should have an x value and a y value', () => {
    expect(player1.xPos).to.equal(10);
    expect(player1.yPos).to.equal(10);
  })
  it('new player should accept a color', () => {
    expect(player1.color).to.equal("yellow");
  })
  it('new player should have a velocity', () => {
    expect(player1.velocity).to.equal(3);
  })
  it('new player should move #pixels in the direction of its velocity', () => {
    player1.moveHead()
    expect(player1.xPos).to.equal(10);
    expect(player1.yPos).to.equal(7);
  })
  it('new player should be able to change directions', () => {
    player1.moveUp()
    expect(player1.speed.x).to.equal(0);
    expect(player1.speed.y).to.equal(-3);
  })
  it('new player should not be able to double back on itself', () => {
    player1.xPos = 10
    player1.yPos = 10
    player1.moveHead()
    player1.moveUp()
    player1.moveLeft()
    player1.moveHead()
    expect(player1.yPos).to.not.equal(10);
  })
})

describe('Tron player functions', () => {
  it('should have a trail that includes all of the former x and y positions', () => {
    let player1 = new Player(10, 10, 'yellow', 3, 'Player 1', 'p1', 0, -3)

    for (let i = 0; i < 4; i++) {
      player1.moveTrail()
      player1.moveHead()
    }
    expect(JSON.stringify(player1.trail)).to.equal('[[10,10,18,18],[10,7,18,15],[10,4,18,12],[10,1,18,9]]')
  })
})
