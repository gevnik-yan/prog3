class GrassEater extends LivingCreature{

    mul() {
        var emptyCells = super.chooseCell(0);
        var newCell = random(emptyCells);

        if(newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newEater = new GrassEater(newX,newY);
            grassEaterArr.push(newEater);
        }
    }

    move() {
        super.energy--;
        var emptyCells = super.chooseCell(0);
        var newCell = random(emptyCells);

        if(newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        } else {
            this.die();
        }

    }

    eat() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);

        if(newCell) {
            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

            for (var i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                    grassArray.splice(i, 1);
                    break;
                }
            }   
            
        } else {
            this.move();
        } 
        if(this.energy > 22) {
            this.mul();
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }

} 