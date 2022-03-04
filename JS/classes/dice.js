export default class Dice {
    constructor() { }

    roll() {
        return Math.floor((Math.random() * 6) + 1)
    }

    changeFace(int) {
        console.log('changeFace executed')
        switch (int) {
            case 1:
                return `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-1.svg" alt="">`                
            case 2:
                return `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-2.svg" alt="">`                
            case 3:
                return `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-3.svg" alt="">`                
            case 4:
                return `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-4.svg" alt="">`                
            case 5:
                return `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-5.svg" alt="">`                
            case 6:
                return `<img id="diceFace" class="mt-md-4" src="/IMG/Dice-6.svg" alt="">`                       
            default:
                break;
        }
    }
}