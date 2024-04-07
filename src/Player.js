const gb = require("./Gameboard");

class Player {
    constructor(){
        this.Board = new gb();
        this.turn = true;
    }
}

let  Player1 = new Player();
module.exports = Player1;