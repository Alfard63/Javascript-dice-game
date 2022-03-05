

export default class View {
    constructor() {        
        this.player1CurrentScore = document.getElementById('player1CurrentScore')
        this.player2CurrentScore = document.getElementById('player2CurrentScore')
        this.player1GlobalScore = document.getElementById('player1GlobalScore')
        this.player2GlobalScore = document.getElementById('player2GlobalScore')
        this.volumeBtn = document.getElementById('volumeBtn')        
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
            this.label1.style.setProperty('--color-1', '#dc143c')
            this.label2.style.setProperty('--color-2', '#f8f9fa')
            this.volumeBtn.style.setProperty('--color-3', '#ebe8e8')
        } 
        else {
            this.board.classList.add('player2-turn')
            this.board.classList.remove('player1-turn')
            this.label2.style.setProperty('--color-2', '#dc143c')
            this.label1.style.setProperty('--color-1', '#f8f9fa')
            this.volumeBtn.style.setProperty('--color-3', '#f8f9fa')
        }
    }
/* Change the colors of the background and lock buttons when a player win */
    victory(player, rollDiceBtn, holdBtn) {
        this.board.classList.remove('player1-turn')
        this.board.classList.remove('player2-turn')
        this.board.classList.add(`${player}-victory`)
        rollDiceBtn.classList.add(`disabled`)
        holdBtn.classList.add(`disabled`)
    }
}