import Ship from './Ship.js';
import './style.css';
const field = require("./field.js");
const hovering = require("./hovering.js");
const player = require("./Player.js");
const ship = require("./Ship.js")



/*
let myGameBoard = new gb();
let myship = new ship(4);

myGameBoard.placeShips(myship, 0, 0)

myGameBoard.receiveAttack(0, 0);
*/
//console.log(myGameBoard);

field(".field");

field(".field1");
let myship = new ship();
let player1 = new player();
let hov = new hovering(".field1 > div", 5, true);

hov.hovering();


const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    
    hov.turn();
    hov.hovering();
    display(player1.Board.board, cells)

})



const cells = document.querySelectorAll(".field1 > div");

/*cells.forEach(cell=>{
    cell.addEventListener("mouseover", () => {
    
        display(player1.Board.board, cells);
    
    })
})*/

function display(board, cells) {

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (board[i][j].ship) {
                console.log("black");
                cells[i*10+j].style.backgroundColor = "black";
            }else{
                cells[i*10+j].style.backgroundColor = "";
            }
        }
    }
}

//display(player1.Board.board, cells);



