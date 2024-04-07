const gb = require("./Gameboard");
const ship = require("./Ship.js")

let carrieer   = new ship(5, "carrieer"); 
let battleship = new ship(4, "battleship");
let cruiser    = new ship(3, "cruiser");
let submarine  = new ship(3, "submarine");
let destroyer  = new ship(2, "destroyer");

class AI {
    constructor(){
        this.board = new gb();
    }

    bomb (){

    }

    randomBomb (player) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);

        if (!player.Board.board[x][y].hit) {
            player.Board.receiveAttack (x, y);
            player.turn  = true;
            return;
        }

        this.randomBomb (player);
    }

    placeShip (ship){
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);  
        if (Math.floor(Math.random()*10) > 5) {
            ship.position = true;  
        }else{
            ship.position = false;  
        }
        let x1 = x;
        let y1 = y;
        let bool = true;
        /*
        console.log(ship.name);
        console.log(ship.position);
        console.log(x+"----------------"+y)
        */
        for (let i = 0; i < ship.length; i++) {
            if (x1 > 9 || y1 > 9 || this.board.board[x1][y1].ship) {
                bool = false;
                break;
            }else{
                if (ship.position) {
                    y1++;
                }else{
                    x1++;
                }
            }
        }

        if (bool) {
            this.board.placeShips(ship, x, y);
        }else{
            this.placeShip(ship);
        }



    }
}

const ai = new AI();
ai.placeShip(carrieer);
ai.placeShip(battleship);
ai.placeShip(cruiser);
ai.placeShip(submarine);
ai.placeShip(destroyer);

module.exports = ai;