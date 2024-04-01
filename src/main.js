import './style.css';
const field = require("./field.js");



const gb = require("../src/Gameboard.js");
const ship = require("../src/Ship.js")

let myGameBoard = new gb();
let myship = new ship(4);

myGameBoard.placeShips(myship, 0, 0)

myGameBoard.receiveAttack(0, 0);

//console.log(myGameBoard);

field(".field");

//field(".field1");

const field1 = document.querySelector(".field1");


    
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const newDiv = document.createElement("div");
                newDiv.id = `p${i}-${j}`;
                field1.appendChild(newDiv);
            }
        }  
    