class Grass extends LivingCreature{

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