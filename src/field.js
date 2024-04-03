function field(div) {
    const field = document.querySelectorAll(div);
    
    if (field[0]) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const newDiv = document.createElement("div");
                newDiv.id = `p${i}${j}`;
                field[0].appendChild(newDiv);
            }
        }  
    }

    if (field[1]) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const newDiv = document.createElement("div");
                newDiv.id = `a${i}${j}`;
                field[1].appendChild(newDiv);
            }
        }   
    }
}

module.exports = field;