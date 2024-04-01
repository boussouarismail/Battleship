const gb = require("./Gameboard");


class AI {
    constructor(){
        this.board = new gb();
    }

    bomb (){

    }

    randomBomb (Gameboard) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);

        if (!Gameboard[x][y].hit) {
            Gameboard.receiveAttack (x, y);
            return;
        }

        this.randomBomb (Gameboard);
    }
}