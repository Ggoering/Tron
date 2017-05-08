import { expect } from 'chai';
import GameState from './classes/GameState.js'
import Grid from './classes/Grid.js'
import Player from './classes/Player.js'
require('locus')

describe('TDD with Pokemon cuz its lit', () => {

  const pikachu = new Pokemon('pikachu')

it('should have the ability to do attacks', () => {
  // eval(locus)
  expect(pikachu.doThisAttack('thunder')).to.equal('I dont know that attack')

  pikachu.learnThisAttack('thunder', 100)

  expect(pikachu.attacks).to.deep.equal( {thunder: 100} )

  expect(pikachu.doThisAttack('thunder')).to.equal('pikachu used thunder it dealt 100 damage!')

})
})
