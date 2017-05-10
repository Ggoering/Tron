import { expect } from 'chai'
import GameState from '../lib/game/classes/GameState.js'

describe('Check grid environment', () => {
  const canvas = {width: 550, height: 550};
  const context = '';

  it('should have a grid of 20 lines on easy', () => {
    const game = new GameState(canvas, context, 'easy', 3, {p1: 0, p2: 0})

    game.setupEnvironment();
    expect(game.grid.lines).to.equal(20)
  })

  it('grid should be large on easy', () => {
    const game = new GameState(canvas, context, 'easy', 3, {p1: 0, p2: 0})

    game.setupEnvironment();
    expect(game.grid.width).to.equal(440)
  })

  it('should be medium on normal', () => {
    const game = new GameState(canvas, context, 'normal', 3, {p1: 0, p2: 0})

    game.setupEnvironment();
    expect(game.grid.width).to.equal(385)
  })

  it('should be small on hard', () => {
    const game = new GameState(canvas, context, 'hard', 3, {p1: 0, p2: 0})

    game.setupEnvironment();
    expect(game.grid.width).to.equal(330)
  })

  it('should be tiny on legendary', () => {
    const game = new GameState(canvas, context, 'legendary', 3, {p1: 0, p2: 0})

    game.setupEnvironment();
    expect(game.grid.width).to.equal(165)
  })
})
