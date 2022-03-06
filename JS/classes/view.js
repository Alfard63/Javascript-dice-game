export default class View {
    constructor() {        
        this.player1CurrentScore = document.getElementById('player1CurrentScore')
        this.player2CurrentScore = document.getElementById('player2CurrentScore')
        this.player1GlobalScore = document.getElementById('player1GlobalScore')
        this.player2GlobalScore = document.getElementById('player2GlobalScore')
        this.volumeBtn = document.getElementById('volumeBtn') 
        this.helpBtn = document.getElementById('helpBtn')       
        this.label1 = document.getElementById('label1')
        this.label2 = document.getElementById('label2')
        this.board = document.getElementById('board')
        this.dice = document.getElementById('dice')          
    }

/* Update the view of Current Score and Global Score for each player */
    updateScoresView(player1, player2) {
        this.player1CurrentScore.innerHTML = player1.currentScore
        this.player2CurrentScore.innerHTML = player2.currentScore
        this.player1GlobalScore.innerHTML = player1.globalScore
        this.player2GlobalScore.innerHTML = player2.globalScore
    }

/* Update the view of the dice */
    updateDiceview(int) {
        switch (int) {
            case 1:
                this.dice.innerHTML = `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-1.svg" alt="">` 
                break;               
            case 2:
                this.dice.innerHTML = `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-2.svg" alt="">`  
                break;              
            case 3:
                this.dice.innerHTML = `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-3.svg" alt="">` 
                break;               
            case 4:
                this.dice.innerHTML = `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-4.svg" alt="">` 
                break;               
            case 5:
                this.dice.innerHTML = `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-5.svg" alt="">` 
                break;               
            case 6:
                this.dice.innerHTML = `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-6.svg" alt="">`                       
            default:
                break;
        }
    }

/* Change the colors of the background, the dot and the volume button when the turn change */
    updateTurnView(player1Turn) {

        if (player1Turn) {
            this.board.classList.add('player1-turn')
            this.board.classList.remove('player2-turn')
            this.label1.style.setProperty('--label-color-1', '#dc143c')
            this.label2.style.setProperty('--label-color-2', '#f8f9fa')
            this.volumeBtn.style.setProperty('--btn-color', '#f8f9fa')
            this.helpBtn.style.setProperty('--btn-color', '#f8f9fa')
        } 
        else {
            this.board.classList.add('player2-turn')
            this.board.classList.remove('player1-turn')
            this.label2.style.setProperty('--label-color-2', '#dc143c')
            this.label1.style.setProperty('--label-color-1', '#f8f9fa')
            this.volumeBtn.style.setProperty('--btn-color', '#d8d8d8')
            this.helpBtn.style.setProperty('--btn-color', '#d8d8d8')
        }
    }
/* Change the symbol of the volume button when is clicked */
    updateVolumeView(songsMuted) {
        !songsMuted ? this.volumeBtn.innerHTML = '<i class="bi bi-volume-up text-dark"></i>' : this.volumeBtn.innerHTML = '<i class="bi bi-volume-mute"></i>'
    }

/* add an effect when the button is clicked */
    btnClickEffect(element, event) {
        if (event.type === 'mouseup' || event.type === 'mouseout' ) {
            element.classList.add('shadow')
            element.classList.replace('fs-3', 'fs-2')
        }
        if (event.type === 'mousedown'){
            element.classList.remove('shadow')
            element.classList.replace('fs-2', 'fs-3')
        }
        event.stopPropagation()
    }

/* Change the colors of the background and lock buttons when a player win */
    victory(player, rollDiceBtn, holdBtn) {
        this.board.classList.remove('player1-turn')
        this.board.classList.remove('player2-turn')
        this.board.classList.add(`${player}-victory`)
        if (player === 'player1') {
            this.label1.style.setProperty('--label-color-1', '--victory-color')
            this.label2.style.setProperty('--label-color-2', '--loose-color')
        } else {
            this.label1.style.setProperty('--label-color-1', '--loose-color')
            this.label2.style.setProperty('--label-color-2', '--victory-color')
        }

        rollDiceBtn.classList.add(`disabled`)
        holdBtn.classList.add(`disabled`)
    }
}