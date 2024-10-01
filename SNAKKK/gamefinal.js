



// const HORIZONTAL_AREAS = 35;
// const VERTICAL_AREAS = 25;
// const DURATION = 500;

// const board = document.getElementById("board");
// let goalPosition = [];

// function partIdGenerator([x, y]) {
//     return `part-${x}-${y}`;
// }

// function paint([x, y]) {
//     const child = document.createElement("div");
//     child.id = partIdGenerator([x, y]);
//     child.classList.add("snake");
//     child.style.left = `${x * 20}px`;
//     child.style.top = `${y * 20}px`;
//     board.appendChild(child);
// }

// function remove([x, y]) {
//     const elementId = partIdGenerator([x, y]);
//     const element = document.getElementById(elementId);
//     if (element) {
//         element.remove();
//     }
// }

// function placeGoal() {
//     const x = Math.floor(Math.random() * HORIZONTAL_AREAS);
//     const y = Math.floor(Math.random() * VERTICAL_AREAS);
//     goalPosition = [x, y];
//     const goalElement = document.getElementById("goal");
//     goalElement.style.left = `${x * 20}px`;
//     goalElement.style.top = `${y * 20}px`;
// }

// class Snake {
//     constructor() {
//         this.position = [[14, 13], [15, 13], [16, 13]];
//         this.direction = "right";
//         this.isGameOver = false;

//         this.position.forEach(paint);
//         placeGoal(); // Place the initial goal
//     }

//     run() {
//         if (this.isGameOver) return;

//         const newPosition = this.getNewPosition();
//         const [newX, newY] = newPosition;
//         const horizontalAccident = newX < 0 || newX >= HORIZONTAL_AREAS;
//         const verticalAccident = newY < 0 || newY >= VERTICAL_AREAS;
//         const isPositionDuplicated = this.position.some(([x, y]) => (newX === x && newY === y));

//         // Check for game over
//         if (horizontalAccident || verticalAccident || isPositionDuplicated) {
//             this.isGameOver = true;
//             alert("Game Over");
//         } else {
//             // Check if the snake eats the goal
//             if (newX === goalPosition[0] && newY === goalPosition[1]) {
//                 this.eat(); // Grow the snake
//                 placeGoal(); // Place a new goal
//             } else {
//                 const removedChild = this.position[0];
//                 remove(removedChild);
//                 this.position = this.position.slice(1).concat([newPosition]);
//                 paint(newPosition);
//             }
//         }
//     }

//     getNewPosition() {
//         const [x, y] = this.position[this.position.length - 1];
//         let newPosition;

//         switch (this.direction) {
//             case "left":
//                 newPosition = [x - 1, y];
//                 break;
//             case "right":
//                 newPosition = [x + 1, y];
//                 break;
//             case "up":
//                 newPosition = [x, y - 1];
//                 break;
//             case "bottom":
//                 newPosition = [x, y + 1];
//                 break;
//             default:
//                 throw new Error("Direction is invalid");
//         }
//         return newPosition;
//     }

//     changeDirection(newDirection) {
//         this.direction = newDirection;
//     }

//     eat() {
//         // Grow the snake by not removing the tail
//         const newPosition = this.getNewPosition();
//         this.position.push(newPosition);
//         paint(newPosition);
//     }
// }

// window.addEventListener("load", function() {
//     const snakeInstance = new Snake();
//     setInterval(function() {
//         snakeInstance.run();
//     }, DURATION);

//     function checkKey(e) {
//         e = e || window.event;

//         if (e.keyCode === 38) {
//             snakeInstance.changeDirection("up");
//         } else if (e.keyCode === 40) {
//             snakeInstance.changeDirection("bottom");
//         } else if (e.keyCode === 37) {
//             snakeInstance.changeDirection("left");
//         } else if (e.keyCode === 39) {
//             snakeInstance.changeDirection("right");
//         }
//     }

//     window.addEventListener("keydown", checkKey);
// });

const HORIZONTAL_AREAS = 35;
const VERTICAL_AREAS = 25;
const DURATION = 500;

const board = document.getElementById("board");
let goalPosition = [];
let position = [[14, 13], [15, 13], [16, 13]];
let direction = "right";
let isGameOver = false;

function partIdGenerator([x, y]) {
    return `part-${x}-${y}`;
}

function paint([x, y]) {
    const child = document.createElement("div");
    child.id = partIdGenerator([x, y]);
    child.classList.add("snake");
    child.style.left = `${x * 20}px`;
    child.style.top = `${y * 20}px`;
    board.appendChild(child);
}

function remove([x, y]) {
    const elementId = partIdGenerator([x, y]);
    const element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }
}

function placeGoal() {
    const x = Math.floor(Math.random() * HORIZONTAL_AREAS);
    const y = Math.floor(Math.random() * VERTICAL_AREAS);
    goalPosition = [x, y];
    const goalElement = document.getElementById("goal");
    goalElement.style.left = `${x * 20}px`;
    goalElement.style.top = `${y * 20}px`;
}

function getNewPosition() {
    const [x, y] = position[position.length - 1];
    let newPosition;

    switch (direction) {
        case "left":
            newPosition = [x - 1, y];
            break;
        case "right":
            newPosition = [x + 1, y];
            break;
        case "up":
            newPosition = [x, y - 1];
            break;
        case "bottom":
            newPosition = [x, y + 1];
            break;
        default:
            throw new Error("Direction is invalid");
    }
    return newPosition;
}

function changeDirection(newDirection) {
    direction = newDirection;
}

function eat() {
    // Grow the snake by not removing the tail
    const newPosition = getNewPosition();
    position.push(newPosition);
    paint(newPosition);
}

function run() {
    if (isGameOver) return;

    const newPosition = getNewPosition();
    const [newX, newY] = newPosition;
    const horizontalAccident = newX < 0 || newX >= HORIZONTAL_AREAS;
    const verticalAccident = newY < 0 || newY >= VERTICAL_AREAS;
    const isPositionDuplicated = position.some(([x, y]) => (newX === x && newY === y));

    // Check for game over
    if (horizontalAccident || verticalAccident || isPositionDuplicated) {
        isGameOver = true;
        alert("Game Over");
    } else {
        // Check if the snake eats the goal
        if (newX === goalPosition[0] && newY === goalPosition[1]) {
            eat(); // Grow the snake
            placeGoal(); // Place a new goal
        } else {
            const removedChild = position[0];
            remove(removedChild);
            position = position.slice(1).concat([newPosition]);
            paint(newPosition);
        }
    }
}

window.addEventListener("load", function() {
    position.forEach(paint);
    placeGoal(); // Place the initial goal

    setInterval(run, DURATION);

    function checkKey(e) {
        e = e || window.event;

        if (e.keyCode === 38) {
            changeDirection("up");
        } else if (e.keyCode === 40) {
            changeDirection("bottom");
        } else if (e.keyCode === 37) {
            changeDirection("left");
        } else if (e.keyCode === 39) {
            changeDirection("right");
        }
    }

    window.addEventListener("keydown", checkKey);
});