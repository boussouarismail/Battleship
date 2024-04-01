class Ship {
    constructor(l){
        this.length = l;
        this.hits = 0;
        this.sunk = false;
        this.position = true; //true is horisontal false is vertical
    }

    hit(){
        this.hits++;
        if (this.length == this.hits) {
            this.isSunk();
        }
    }

    isSunk(){
        this.sunk = true;
    }

    reposition(){
        if (this.position) {
            this.position = false;
        }
        this.position = true;
    }
}

module.exports = Ship;