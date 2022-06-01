class Grass {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    
    }
    chooseCell(char) {
        let found = [];
        for(let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if(x >= 0 && x < matrix[0].length && y>= 0 && y < matrix.length){
                if(matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
        }
        }
        return found;
    }

    mul() {
        let found = this.chooseCell(0);
        let foundRand = random(found);
        
        
        this.multiplay++;
        if(foundRand && this.multiplay > 10) {
            
            let x = foundRand[0];
            let y = foundRand[1];
            matrix[y][x] = 1;
            let  grass1 = new Grass(x,y);
            grassArray.push(grass1);
            this.multiply = 0;
        }
    }

    
}