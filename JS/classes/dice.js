export default class Dice {
    constructor() {}
/* return a number between 1 and 6 */
    roll() {
        return Math.floor((Math.random() * 6) + 1)
    }
}