let matrix = [];
let grassArray = [];
let grassEaterArr = [];
let predatorArr = [];
let grassPlanterArr = [];
let grassEaterPlanterArr = [];
let bombArr = [];

let side = 20;
let grassCount = 700;
let grassEaterCount = 100;
let predatorCount = 50;
let grassPlanterCount = 15;
let grassEaterPlanterCount = 15;
let bombCount = 40;



function createMatrix(width,height) {
    for(let i = 0; i < height; i++) {
        matrix.push([]);
        for(let j = 0; j < width; j++) {
            matrix[i].push(0);
        }
    }

    for(let m = 0; m < grassCount; m++) {
        let randX = Math.floor(Math.random() * matrix[0].length);
        let randY = Math.floor(Math.random() * matrix.length);

        matrix[randX][randY] = 1;
    }

    for(let m = 0; m < grassEaterCount; m++) {
        let randX = Math.floor(Math.random() * matrix[0].length);
        let randY = Math.floor(Math.random() * matrix.length);

        matrix[randX][randY] = 2;
    }
    for(let m = 0; m < predatorCount; m++) {
        let randX = Math.floor(Math.random() * matrix[0].length);
        let randY = Math.floor(Math.random() * matrix.length);

        matrix[randX][randY] = 3;
    }
    for(let m = 0; m < grassPlanterCount; m++) {
        let randX = Math.floor(Math.random() * matrix[0].length);
        let randY = Math.floor(Math.random() * matrix.length);

        matrix[randX][randY] = 4;
    }
    for(let m = 0; m < grassEaterPlanterCount; m++) {
        let randX = Math.floor(Math.random() * matrix[0].length);
        let randY = Math.floor(Math.random() * matrix.length);

        matrix[randX][randY] = 5;
    }
    for(let m = 0; m < bombCount; m++) {
        let randX = Math.floor(Math.random() * matrix[0].length);
        let randY = Math.floor(Math.random() * matrix.length);

        matrix[randX][randY] = 6;
    }
}


function setup() {
    createMatrix(50,50);
    createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
    background('white');

    for(let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 1) {
                let grass1 = new Grass(x,y);
                grassArray.push(grass1);

            }else if(matrix[y][x] == 2) {
                let grassEater = new GrassEater(x,y);
                grassEaterArr.push(grassEater);

            } else if(matrix[y][x] == 3) {
                let predator1 = new Predator(x,y);
                predatorArr.push(predator1);

            } else if(matrix[y][x] == 4) {
                let grassPlanter1 = new GrassPlanter(x,y);
                grassPlanterArr.push(grassPlanter1);
            }
            else if(matrix[y][x] == 5) {
                let grassEaterPlanter1 = new GrassEaterPlanter(x,y);
                grassEaterPlanterArr.push(grassEaterPlanter1);
                
            } else if(matrix[y][x] == 6) {
                let bomb1 = new Bomb(x,y);
                bombArr.push(bomb1);
                
            } 
        }
    }    
}
    


function draw() {
    for(let m = 0; m < matrix.length; m++) {
        for(let n = 0; n < matrix[m].length; n++) {
            if(matrix[m][n] == 0) {
                noStroke();
                fill('#CBC8CC');
                rect (n * side, m * side, side, side);
            }
            if(matrix[m][n] == 1) {
                fill('#008013');
                rect (n * side, m * side, side, side);
            }
            if(matrix[m][n] == 2) {
                fill('#FAF61B');
                rect (n * side, m * side, side, side);
            }
            if(matrix[m][n] == 3) {
                fill('#8834B3');
                rect (n * side, m * side, side, side);
            }
            if(matrix[m][n] == 4) {
                fill('#19543E');
                rect (n * side, m * side, side, side);
            }
            if(matrix[m][n] == 5) {
                fill('#D6A100');
                rect (n * side, m * side, side, side);
            }
            if(matrix[m][n] == 6) {
                fill('#000000');
                rect (n * side, m * side, side, side);
            }          
        }
    }

    for(let i in grassArray) {
        grassArray[i].mul(); 
    }
    for(let i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for(let i in predatorArr) {
        predatorArr[i].eat();
    }
    for(let i in grassPlanterArr) {
        grassPlanterArr[i].plant();
    }
    for(let i in grassEaterPlanterArr) {
        grassEaterPlanterArr[i].plant();
    }
    for(let i in bombArr) {
        bombArr[i].detonate();
    }
}

