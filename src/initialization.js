const field = require("./field.js");
const hovering = require("./hovering.js");
const player = require("./Player.js");
const ship = require("./Ship.js");

let carrieer = new ship(5); 
let battleship = new ship(4);
let cruiser = new ship(3);
let submarine = new ship(3);
let destroyer = new ship (2);

let currentShip = carrieer;

let player1 = new player();
let hov = new hovering(".field1 > div", 5, true);

const div = document.querySelector(".positionsboard");

function init() {
    field(".field");
    field(".field1");

    const btn = document.querySelector("button");
    const cells = document.querySelectorAll(".field1 > div");

    hov.hovering();


    btn.addEventListener("click", () => {
        currentShip.reposition();
        console.log(currentShip.position);
        hov.turn(!currentShip.position);
        console.log(hov.h);
        hov.num = currentShip.length;
        hov.hovering();
    });
    
    console.log(cells)

    cells.forEach(cell=>{
        
        cell.addEventListener("click", () => {
            if (hov.place) {
                player1.Board.placeShips(currentShip, cell.id.substring(1,2), cell.id.substring(2,3))  
                display(player1.Board.board, cells);
                switchShip();
                hov.turn(!currentShip.position);
                hov.h = currentShip.position;
                hov.num = currentShip.length;
            } 
        });
    });
    
    
};

function switchShip () {

    switch (currentShip) {
        case carrieer:
            currentShip = battleship;
            break;
        case battleship:
            currentShip = cruiser;
            break;
        case cruiser:
            currentShip = submarine;
            break;
        case submarine:
            currentShip = destroyer;
            break;
        default:
            div.style.display = "none";
            break;
    }
    
};

function display(board, cells) {

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (board[i][j].ship) {
                cells[i*10+j].style.backgroundColor = "black";
            }else{
                cells[i*10+j].style.backgroundColor = "";
            }
        }
    }
};



module.exports = init;


//display(player1.Board.board, cells);
