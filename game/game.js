// const HORIZENTAL_AREAS=35;
// const VERTICAL_AREAS=25;
// class Snake{
//     lenght=2;
//     direction="RIGHT";
//     position=[[14,13],[15,13],[16,13]]


//     run(){
//         let lastPosition=position[position.length-1]; 
//         let newposition;
//         switch(direction){
//             case "Left":
//                 newposition=[x-1,y];
//               break;
//               case "RIGHT":
//                 newposition=[x+1,y];
//               break;
//               case "UP":
//                 newposition=[x,y-1];
//               break;
//               case "BOTTOM":
//                 newposition=[x,y+1];
//               break;
//               default:
//                 throw new Error("Direction is invalvid ");
//         } 

//     }

//     position=position.slice[1].concat([(x,y)]);
// }

const HORIZONTAL_AREAS = 35;
const VERTICAL_AREAS = 25;
const board = document.getElementById('board');
const snake = document.getElementById('snakePart1');
let length = 2;
let direction = "right";
let position = [[14, 13], [15, 13], [16, 13]];
let isGameOver = false;

document.getElementById("right").addEventListener("click", (event) => getNewposition(event));
document.getElementById("left").addEventListener("click", (event) => getNewposition(event));
document.getElementById("up").addEventListener("click", (event) => getNewposition(event));
document.getElementById("down").addEventListener("click", (event) => getNewposition(event));


function paint([x, y]) {
    const child = document.createElement("div");
    child.id = partIdGenerator(x, y);
    child.classList.add("snake");
    child.style.left = `${x * 10}px`;
    child.style.top = `${y * 10}px`;
    document.body.appendChild(child);

    board.appendChild(child);
}


function remove([x, y]) {
    const elementId = partIdGenerator(x, y);
    const element = document.getElementById("elementId");
    element.remove();

}

// onClickKey 
// switch case key
// run with diraction



function run() {
    if (isGameOver) return;
    const newPosition = getNewposition();

    // Update position
    position = position.slice(1).concat([newPosition]);
    const [newX, newY] = newPosition;
    const horizentalAccident = newX < 0 || newX >= HORIZONTAL_AREAS
    const verticalAccident = newY < 0 || newY >= VERTICAL_AREAS
    const isPositionDuplicated = position.some(([x, y]) => (newX === x && newY === y));
    if (horizentalAccident || VERTICAL_AREAS || isPositionDuplicated) {
        isGameOver = true;
        alert("Game Over");
    } else {
        position = position.slice(1).concat([newPosition]);
    }
    console.log(verticalAccident);

}


function getNewposition(event) {
    changeDirection(event.target.id)
    // let lastPosition = position[position.length - 1];
    // const [x, y] = position[position.length - 1]
    // let x = lastPosition[0];
    // let y = lastPosition[1];
    let newPosition;


    switch (direction) {
        case "left":
            console.log('style before: ', snake.style.right);
            snake.style.left = (parseInt(getComputedStyle(snake).left) - 5) + "px"
            // newPosition = [x - 1, y];
            break;
        case "right":
            // newPosition = [x + 1, y];
            console.log('style before: ', snake.style.right);
            snake.style.left = ((parseInt(getComputedStyle(snake).left)) + 5) + "px"
            console.log('style after: ', snake.style.right);
            break; 
        case "up":
            // newPosition = [x, y - 1];
            snake.style.top = (parseInt(getComputedStyle(snake).top) -5) + "px"
            break;
        case "down":
            // newPosition = [x, y + 1];
            snake.style.top = (parseInt(getComputedStyle(snake).top) +5) + "px"
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
    const newPosition = getNewposition()
    position = position.concat(newPosition);
}





// const btnUpOne = document.getElementById('btn-up-one')     
// const btnLeftOne = document.getElementById('btn-left-one')     
// const btnRightOne = document.getElementById('btn-right-one')     
// const btnDownOne = document.getElementById('btn-down-one')

// btnUpOne.addEventListener('click', goingUp)    
// btnRightOne.addEventListener('click', goingRight)    
// btnLeftOne.addEventListener('click', goingLeft)    
// btnDownOne.addEventListener('click', goingDown)

// //BUTTON MOVEMENTS
// //UP
// function goingUp(e){

//   if(lastInputDirection.y !== 0)
//   return;

//   inputDirection = { x: 0, y: -1 }
//   console.log('up');
// }

// //DOWN
// function goingDown(e){

//   if(lastInputDirection.y !== 0)
//   return;

//   inputDirection = { x: 0, y: 1 }
//   console.log('down');

// }

// //RIGHT
// function goingRight(e){

//   if(lastInputDirection.x !== 0)
//   return;

//   inputDirection = { x: 1, y: 0 }
//   console.log('right');   
// }

// //left
// function goingLeft(e){

//   if(lastInputDirection.x !== 0)
//   return;

//   inputDirection = { x: -1, y: 0 }
//   console.log('left');
// }

