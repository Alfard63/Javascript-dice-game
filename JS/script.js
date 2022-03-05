/*******************************************************************/
/* import some classes:                                             /
/* View manage all view changes                                     /
/* Player manage the players scores and actions                     /
/* Dice return a random value between 1 and 6                       /
/* Song manage song and play it if mute button is not activate    /
 *******************************************************************/
import View from './classes/view.js'
import Player from './classes/player.js'
import Dice from './classes/dice.js'
import Song from './classes/song.js'

document.addEventListener("DOMContentLoaded", () => {

/* Instanciating all buttons and the board of the game */   
    const newGameBtn = document.getElementById('newGameBtn')
    const rollDiceBtn = document.getElementById('rollDiceBtn')
    const holdBtn = document.getElementById('holdBtn')
    const volumeBtn = document.getElementById('volumeBtn')

    const board = document.getElementById('board')

/* Create all game songs */
    const clickSound = new Song ('../songs/click.mp3')
    const wrongSound = new Song ('../songs/wrong.mp3')
    const winSound = new Song ('../songs/win.mp3')
    const holdSound = new Song ('../songs/correct.mp3')
    const rollgSound = new Song('../songs/dice-roll.mp3')

/* Create a new View, 2 Player and Dice */
    const view = new View
    const player1 = new Player (0, 0)
    const player2 = new Player (0, 0)
    const dice = new Dice
/* Initialising some variables */
    let player1Turn = true
    let songsMuted = false

    function newGame() {
        player1.initPlayer(0, 0)
        player2.initPlayer(0, 0)
        view.updateScoresView(player1, player2)
        view.updateDiceview(1)
        view.updateTurnView(player1Turn)
        rollDiceBtn.classList.remove(`disabled`)
        holdBtn.classList.remove(`disabled`)
        for (let i = 1; i < 3; i++) {
            board.classList.remove(`player${i}-victory`)
        }
    }

   
    newGameBtn.addEventListener('click', (event) => {
        clickSound.playSong(songsMuted)
        player1Turn = true
        newGame(player1, player2, view, player1Turn)
        event.stopPropagation()
    })

    rollDiceBtn.addEventListener('click', (event) => {
        if (!holdBtn.classList.contains('disabled')) {
            const diceValue = dice.roll()
            rollgSound.playSong(songsMuted)
            view.updateDiceview(diceValue)
            setTimeout(() => {
                if (diceValue === 1) {
                    player1.currentScore = 0
                    player2.currentScore = 0
                    wrongSound.playSong(songsMuted)
                    player1Turn = player1Turn ? false : true
                }
                else {
                    player1Turn ? player1.current(diceValue) : player2.current(diceValue)
                }
                view.updateScoresView(player1, player2)
                view.updateTurnView(player1Turn)
            }, 500)

            event.stopPropagation()
        }
    })

    holdBtn.addEventListener('click', (event) => {
        if (!holdBtn.classList.contains('disabled')) {
            if (player1Turn) {
                player1.hold()
            }
            else {
                player2.hold()
            }
            holdSound.playSong(songsMuted)
            view.updateScoresView(player1, player2)
            player1Turn = player1Turn ? false : true
            view.updateTurnView(player1Turn)
            if (player1.isWin() === true ) {
                winSound.playSong(songsMuted) 
                view.victory('player1', rollDiceBtn, holdBtn) 
            }
            if (player2.isWin() === true ) { 
                winSound.playSong(songsMuted) 
                view.victory('player2', rollDiceBtn, holdBtn)
            }
            event.stopPropagation()
        }
    })

    volumeBtn.addEventListener('click', (event) => {
        songsMuted ? volumeBtn.innerHTML = '<i class="bi bi-volume-up text-dark"></i>' : volumeBtn.innerHTML = '<i class="bi bi-volume-mute"></i>'
        songsMuted = !songsMuted ? true : false
        event.stopPropagation()
    })
    volumeBtn.addEventListener('mousedown', (event) => {
        clickSound.playSong(songsMuted)
        volumeBtn.classList.remove('shadow')
        volumeBtn.classList.replace('fs-2', 'fs-3')
        event.stopPropagation()
    })
    volumeBtn.addEventListener('mouseup', (event) => {
        volumeBtn.classList.add('shadow')
        volumeBtn.classList.replace('fs-3', 'fs-2')
        event.stopPropagation()
    })
    volumeBtn.addEventListener('mouseout', (event) => {
        volumeBtn.classList.add('shadow')
        volumeBtn.classList.replace('fs-3', 'fs-2')
        event.stopPropagation()
    }) 
 /* Initialising a new game  */   
    newGame()
})
