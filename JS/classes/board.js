

export default class Board {
    constructor() {
        this.player1GlobalScore = document.getElementById('player1GlobalScore')
        this.player2GlobalScore = document.getElementById('player2GlobalScore')
        this.player1CurrentScore = document.getElementById('player1CurrentScore')
        this.player2CurrentScore = document.getElementById('player2CurrentScore')
        this.dice = document.getElementById('dice')
    }

    updateScoresView(player1, player2) {
        this.player1CurrentScore.innerHTML = player1.currentScore
        this.player2CurrentScore.innerHTML = player2.currentScore
        this.player1GlobalScore.innerHTML = player1.globalScore
        this.player2GlobalScore.innerHTML = player2.globalScore
    }

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

    updateTurnView(player1Turn) {
        console.log('updateturnview' + player1Turn)
        const board = document.getElementById('board')
        const label1 = document.getElementById('label1')
        const label2 = document.getElementById('label2')

        if (player1Turn) {
            board.classList.add('player1-turn')
            board.classList.remove('player2-turn')
            label1.style.setProperty('--color-1', '#dc143c')
            label2.style.setProperty('--color-2', '#f8f9fa')
        } 
        else {
            board.classList.add('player2-turn')
            board.classList.remove('player1-turn')
            label2.style.setProperty('--color-2', '#dc143c')
            label1.style.setProperty('--color-1', '#f8f9fa')
        }
        console.log(board.classList)
    }
}