class Gameboard {

    constructor(){
        this.board = [[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]];
        this.ships = 5;
        this.allSink = false;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                this.board[i][j] = {ship : null,hit : false};
            }
        }
    }

    placeShips (ship, x, y){
        if(x < 0 || x > 10 || y < 0 || y > 10 ){
            console.log("wrong coordinates !");
            return;
        }

        for (let i = 0; i < ship.length; i++) {
          this.board[x][y].ship = ship;
          if (ship.position) {
            y++;
          }else{
            x++;
          }
        }
    }

    receiveAttack (x, y){
        if (this.board[x][y].ship) {
            let ship =  this.board[x][y].ship; 
            ship.hit ;
            this.board[x][y].hit = true; //already boombed 
            if (ship.sunk) {
                this.ships--;   
            }
            if (this.ships == 0) {
                this.allSink == true;
            }
        }else{
            this.board[x][y].hit = true; //already boombed   
        }
    }
}

module.exports = Gameboard;