export default class Player {
    constructor(globalScore, currentScore) {
        this.globalScore = globalScore
        this.currentScore = currentScore
    }
/* initialising player scores */
    initPlayer (global, current) {
        this.globalScore = global
        this.currentScore = current
    }
/* return true if globalScore is upper or equal than 100 */
    isWin() {
        return this.globalScore >= 100 ? true : false
    }
/* add score to currentScore */
    current(score) {
        this.currentScore += score
    }
/* add currentScore to globalScore and set currentScore to 0 */
    hold() {
        this.globalScore += this.currentScore
        this.currentScore = 0
    }
}