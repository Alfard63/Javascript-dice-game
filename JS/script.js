import Player from './classes/player.js'
import Dice from './classes/dice.js'

function newGame(player1, player2, dice) {
    console.log('new game')
    const player1GlobalScore = document.getElementById('player1GlobalScore')
    const player2GlobalScore = document.getElementById('player2GlobalScore')
    const player1CurrentScore = document.getElementById('player1CurrentScore')
    const player2CurrentScore = document.getElementById('player2CurrentScore')

    player1.initPlayer(player1GlobalScore, player1CurrentScore)
    player2.initPlayer(player2GlobalScore, player2CurrentScore)

    document.getElementById('dice').innerHTML = dice.changeFace(1)
}

document.addEventListener("DOMContentLoaded", () => {
    const newGameBtn = document.getElementById('newGameBtn')    
    const rollDiceBtn = document.getElementById('rollDiceBtn')
    const holdBtn = document.getElementById('holdBtn')
    const player1 = new Player
    const player2 = new Player
    const dice = new Dice
  
    let player1Turn = true

    newGame(player1, player2, dice)

    newGameBtn.addEventListener('click', (event) => {
        player1Turn = true
        newGame(player1, player2, dice)
        event.stopPropagation()
    })

    rollDiceBtn.addEventListener('click', (event) => {
        console.log('roll dice')
        const diceValue = dice.roll()
        console.log(diceValue)
        document.getElementById('dice').innerHTML = dice.changeFace(diceValue)
        if (diceValue === 1) {
            player1.currentScore = 0
            player1CurrentScore.innerHTML = player1.currentScore
            player2.currentScore = 0
            player2CurrentScore.innerHTML = player2.currentScore
            player1Turn = player1Turn ? false : true
        }
        else {
            
            if (player1Turn) {
                player1.currentScore += diceValue
                player1CurrentScore.innerHTML = player1.currentScore
            }
            else {
                player2.currentScore += diceValue
                player2CurrentScore.innerHTML = player2.currentScore
            }
        }

        event.stopPropagation()
    })

    holdBtn.addEventListener('click', (event) => {
        console.log('hold')
        if (player1Turn) {
            player1.globalScore += player1.currentScore
            player1.currentScore = 0
            player1GlobalScore.innerHTML = player1.globalScore
            player1CurrentScore.innerHTML = player1.currentScore
        }
        else {
            player2.globalScore += player2.currentScore
            player2.currentScore = 0
            player2GlobalScore.innerHTML = player2.globalScore
            player2CurrentScore.innerHTML = player2.currentScore
        }
        player1Turn = player1Turn ? false : true
        console.log(player1Turn)
        event.stopPropagation()

    })
})
