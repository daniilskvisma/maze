let maze = [
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


function coloring(i,j,color){
    var rectangle = document.getElementById("Canvas").getContext("2d");
    rectangle.fillStyle = color;
    rectangle.fillRect(j*50, i*50, 46, 46)
    
}

function createPoligon(maze){
    for (let i = 0; i < maze.length; i++) {
        for(let j = 0; j < maze[i].length; j++) {
            if (maze[i][j]===0) {
                color = "LightSteelBlue";
                coloring(i,j,color);
            } else if (maze[i][j] === 2) {
                color = "HotPink";
                coloring(i,j,color);
            } else if (maze[i][j] === 3) {
                color = "LightGreen";
                coloring(i,j,color);
            }
        }
    }
}

let playerX = 1;
let playerY = 0;

function movePlayer(dx, dy) {

    let newX = playerX + dx;
    let newY = playerY + dy;

    if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10 && maze[newY][newX] !== 0) {
    
        color="White"
        coloring(playerY, playerX, color);

        playerX = newX;
        playerY = newY;

        color = "HotPink";
        coloring(playerY, playerX, color);

        if (maze[playerY][playerX] === 3) {
            alert("Finish!");  
        }
    }
}

function keyPress() {
    document.onkeydown = function(event) {
        switch (event.keyCode) {
            case 37: //left 
                movePlayer(-1, 0);
                break;
            case 38: //up 
                movePlayer(0, -1);
                break;
            case 39: //right 
                movePlayer(1, 0);
                break;
            case 40: //down
                movePlayer(0, 1);
                break;
        }
    };
}

//document.createElement("div");
createPoligon(maze);
keyPress();
