import {hexArray} from './hexArray.js'

export const Game = {
  setup: () => (
    {
      hexes: hexArray, //game board
      venomSnake: { //character hex to be placed
        life: 3,
        power: 3,
        defense: 1
      }
    }
  ),

  turn: {
    moveLimit: 1
  },

  moves: {
    placeHex: (G, ctx, index, newHex) => { //update game board
      let flag = -1
      G.hexes = G.hexes.map((hex) => {
        flag++
        if (flag == index) { //index is a string, so use ==
          return (newHex)
        }
        return hex
       })
    } //end placeHex
  } //end moves

} //end Game object
