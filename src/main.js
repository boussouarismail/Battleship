import './style.css';

const init = require("./initialization.js");
const AI = require("./AI.js")
const player = require("./Player.js")

init();


const cellsPlayer = document.querySelectorAll(".player > .field > div");
const cellsAi = document.querySelectorAll(".AI > .field > div");


cellsPlayer.forEach(cell=>{
    cell.addEventListener("click", ()=>{
        if(player.turn && !AI.board.board[cell.id.substring(1,2)][cell.id.substring(2,3)].hit){
            AI.board.receiveAttack (cell.id.substring(1,2), cell.id.substring(2,3));
            player.turn = false;
            if(AI.board.board[cell.id.substring(1,2)][cell.id.substring(2,3)].ship ){
                cell.style.backgroundColor = "greenyellow"; 
                
            }else{
                cell.style.backgroundColor = "red";
            }
            
        }
        AI.randomBomb(player);
        display(player.Board.board, cellsAi);
        if (AI.board.allSink) {
            console.log("game over you win")  
        }
        if (player.Board.allSink) {
            console.log("game over you lost")  
        }
    })
});

function display(board, cells) {
    
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (board[i][j].ship) {
                if (board[i][j].hit) {
                    cells[i*10+j].style.backgroundColor = "greenyellow"; 
                }else{
                    cells[i*10+j].style.backgroundColor = "black";
                }
            }else{
                if (board[i][j].hit) {
                    cells[i*10+j].style.backgroundColor = "red"; 
                }else{
                    cells[i*10+j].style.backgroundColor = "";
                }
            }
        }
    }
};

//display(AI.board.board, cellsPlayer);
