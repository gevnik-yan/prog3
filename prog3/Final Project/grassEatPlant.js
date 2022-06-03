class GrassEaterPlanter extends LivingCreature{


    plant() {
        if(grassEaterArr.length <= 15) {
            var emptyCells = this.chooseCell(0);
            var newCell = random(emptyCells);
    
            if(newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 2;
    
                var grassEater1 = new GrassEater(newX,newY);
                grassEaterArr.push(grassEater1);
            }
        }
    }
}