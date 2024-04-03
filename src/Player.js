const gb = require("./Gameboard");

class Player {
    constructor(){
        this.Board = new gb();
    }
}

module.exports = Player;