class Ship {
    constructor(l, name ){
        this.name = name;
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
        if (this.position == true) {
            this.position = false;
        }else{
            this.position = true;
        }
    }
}

module.exports = Ship;