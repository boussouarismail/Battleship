const gb = require("./Gameboard");

class Player {
    constructor(){
        this.board = new gb();
    }
}

module.exports = Player;