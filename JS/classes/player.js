export default class Player {
    constructor(globalScore = 0, currentScore = 0) {
        this.globalScore = globalScore
        this.currentScore = currentScore
    }
    
    initPlayer (global, current) {
        global.innerHTML = 0
        current.innerHTML = 0
        this.globalScore = 0
        this.currentScore = 0
    }
}