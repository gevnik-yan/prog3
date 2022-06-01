class GrassPlanter {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.directions = [];  
    }
    getNewCordinates() {
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
        this.getNewCordinates();
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    plant() {
        if(grassArray.length <= 50) {
            let emptyCells = this.chooseCell(0);
            let newCell = random(emptyCells);
    
            if(newCell) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 1;
    
                var grass1 = new Grass(newX,newY);
                grassArray.push(grass1);
            }
        }
    }
}





