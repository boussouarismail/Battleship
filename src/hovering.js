class plasing {
    constructor(div, num = 5, h = true){
        this.div = div;
        this.num = num;
        this.h = h;
        this.hv = this.h?1:10;
        this.place = true;
    }

    turn() {
        if (this.h) {
            this.h = false
            this.hv = 10;  
        }else{
            this.h = true
            this.hv = 1;  
        }
    }

    hovering() {
        
        const hov = document.querySelectorAll(this.div);
        hov.forEach(box => {
            //box.removeEventListener("mouseover");
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "greenyellow";
                for (let i = 0; i < this.num; i++) {
                    if (hov[+box.id.substring(1,3)+i*this.hv] &&
                        (((+box.id.substring(1,3)+i) < ((box.id.substring(1,2)*10+10))) || !this.h)) {
                        hov[+box.id.substring(1,3)+i*this.hv].style.backgroundColor = "greenyellow";
                        this.place = true;   
                    }else{
                        if (hov[+box.id.substring(1,3)+i*this.hv]) {
                            for (let i = 0; i < this.num; i++) {
                                if (hov[+box.id.substring(1,3)+i*this.hv] &&
                                    +box.id.substring(1,3)+i < (box.id.substring(1,2)*10+10)) {
                                    hov[+box.id.substring(1,3)+i].style.backgroundColor = "red"; 
                                    this.place = false;  
                                }
                            }
                        }else{
                            for (let i = 0; i < this.num; i++) {
                                if (hov[+box.id.substring(1,3)+i*this.hv]) {
                                    hov[+box.id.substring(1,3)+i*this.hv].style.backgroundColor = "red"; 
                                    this.place = false;  
                                }
                            }
                        }
                    }
                }
            },true)
        }
            
          )
        
          hov.forEach(box => 
            box.addEventListener("mouseout", () => {
                box.style.backgroundColor = "blueviolet";
                for (let i = 0; i < 5; i++) {
                    if (hov[+box.id.substring(1,3)+i*this.hv] &&
                        (((+box.id.substring(1,3)+i) < ((box.id.substring(1,2)*10+10))) || !this.h)) {
                        hov[+box.id.substring(1,3)+i*this.hv].style.backgroundColor = "blueviolet";   
                    }
                }
            })    
          )  
    }

    
}

module.exports = plasing;