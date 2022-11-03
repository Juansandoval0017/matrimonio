import { Snake } from "~/interfaces/game/interface"

const Up = (snake: Snake) => {

    for(let key in snake){
            snake[key].y -= 1;
    }
}

export const  UpdatePosition = (snake: Snake,direction : "up" | "down" | "left" | "right" | "" ) => {

    console.log(direction)
    
    switch (direction) {
        case "up":
            Up(snake)
            break;
        default:
            break;

    }
    
}

export const FindPos = (snake:Snake,i:number,j:number) =>{
    for (let key in snake){
        if (snake[key].x === i && snake[key].y === j){
            return true
        }
    }
    return false
}