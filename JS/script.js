import Board from './classes/board.js'
import Player from './classes/player.js'
import Dice from './classes/dice.js'

function newGame(player1, player2, board, player1Turn) {
    player1.initPlayer()
    player2.initPlayer()
    board.updateScoresView(player1, player2)
    board.updateDiceview(1)
    board.updateTurnView(player1Turn)
}

document.addEventListener("DOMContentLoaded", () => {
    const newGameBtn = document.getElementById('newGameBtn')    
    const rollDiceBtn = document.getElementById('rollDiceBtn')
    const holdBtn = document.getElementById('holdBtn')
    const board = new Board
    const player1 = new Player
    const player2 = new Player
    const dice = new Dice
  
    let player1Turn = true

    newGame(player1, player2, board, player1Turn)

    newGameBtn.addEventListener('click', (event) => {
        player1Turn = true
        newGame(player1, player2, board, player1Turn)
        event.stopPropagation()
    })

    rollDiceBtn.addEventListener('click', (event) => {
        const diceValue = dice.roll()

        board.updateDiceview(diceValue)

        if (diceValue === 1) {
            player1.currentScore = 0
            player2.currentScore = 0
            player1Turn = player1Turn ? false : true
        }
        else {            
            if (player1Turn) {
                player1.currentScore += diceValue
            }
            else {
                player2.currentScore += diceValue
            }   
        }
        board.updateScoresView(player1, player2)
        event.stopPropagation()
    })

    holdBtn.addEventListener('click', (event) => {
        if (player1Turn) {
            player1.globalScore += player1.currentScore
            player1.currentScore = 0
        }
        else {
            player2.globalScore += player2.currentScore
            player2.currentScore = 0
        }
        board.updateScoresView(player1, player2)
        player1Turn = player1Turn ? false : true
        board.updateTurnView(player1Turn)
        event.stopPropagation()

    })
})
