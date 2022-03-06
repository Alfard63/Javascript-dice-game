/*******************************************************************/
/* import some classes:                                             /
/* View manage all view changes                                     /
/* Player manage the players scores and actions                     /
/* Dice return a random value between 1 and 6                       /
/* Song manage song and play it if mute button is not activate      /
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
    const helpBtn = document.getElementById('helpBtn')

    const board = document.getElementById('board')

    /* Create all game songs */
    const clickSound = new Song('../songs/click.mp3')
    const wrongSound = new Song('../songs/wrong.mp3')
    const winSound = new Song('../songs/win.mp3')
    const holdSound = new Song('../songs/correct.mp3')
    const rollgSound = new Song('../songs/dice-roll.mp3')

    /* Create a new View, 2 Player and Dice */
    const view = new View
    const player1 = new Player()
    const player2 = new Player()
    const dice = new Dice
    const myModal = new bootstrap.Modal(document.getElementById('myModal'))

    /* Initialising some variables */
    let player1Turn = true
    let songsMuted = false

    /* Function to start a new game */
    const newGame = () => {
        player1Turn = true
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
    /* function to mute all songs */
    const muteSound = (event) => {
        clickSound.playSong(songsMuted)
        songsMuted = !songsMuted ? true : false
        view.updateVolumeView(songsMuted)
        event.stopPropagation()
    }


    /**********************************************************/
    /*          ADD EVENT CLICK ON NEW GAME BUTTON            */
    /**********************************************************/
    newGameBtn.addEventListener('click', (event) => {
        clickSound.playSong(songsMuted)
        newGame()
        event.stopPropagation()
    })


    /**********************************************************/
    /*          ADD EVENT CLICK ON ROLL DICE BUTTON           */
    /**********************************************************/
    rollDiceBtn.addEventListener('click', (event) => {
        if (!holdBtn.classList.contains('disabled')) {
            const diceValue = dice.roll()
            rollgSound.playSong(songsMuted)
            view.updateDiceview(diceValue)
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

            event.stopPropagation()
        }
    })


    /**********************************************************/
    /*             ADD EVENT CLICK ON HOLD BUTTON             */
    /**********************************************************/
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
            if (player1.isWin() === true) {
                winSound.playSong(songsMuted)
                view.victory('player1', rollDiceBtn, holdBtn)
            }
            if (player2.isWin() === true) {
                winSound.playSong(songsMuted)
                view.victory('player2', rollDiceBtn, holdBtn)
            }
            event.stopPropagation()
        }
    })


    /**********************************************************/
    /*         ADD EVENT LISTENERS ON VOLUME BUTTON           */
    /**********************************************************/
    volumeBtn.addEventListener('click', (event) => {
        muteSound(event)
    })
    volumeBtn.addEventListener('mousedown', (event) => {
        view.btnClickEffect(volumeBtn, event)
    })
    volumeBtn.addEventListener('mouseup', (event) => {
        view.btnClickEffect(volumeBtn, event)
    })
    volumeBtn.addEventListener('mouseout', (event) => {
        view.btnClickEffect(volumeBtn, event)
    })


    /**********************************************************/
    /*           ADD EVENT LISTENERS ON HELP BUTTON           */
    /**********************************************************/
    helpBtn.addEventListener('click', (event) => {
    })
    helpBtn.addEventListener('mousedown', (event) => {
        view.btnClickEffect(helpBtn, event)
    })
    helpBtn.addEventListener('mouseup', (event) => {
        view.btnClickEffect(helpBtn, event)
    })
    helpBtn.addEventListener('mouseout', (event) => {
        view.btnClickEffect(helpBtn, event)
    })


    /* Initialising a new game  */
    newGame()
})
