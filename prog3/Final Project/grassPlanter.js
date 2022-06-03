class GrassPlanter extends LivingCreature{


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





