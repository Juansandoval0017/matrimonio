import { GameData,Size } from "~/interfaces/game/interface"

const validate = (gameData: GameData,dx:number,dy:number,size: Size) => {

    const newPos = {x: gameData.snake[0].x + dx, y: gameData.snake[0].y + dy}

    const stat = gameData.snake.find((snake) => snake.x === newPos.x  && snake.y === newPos.y );
    
    
    if(stat || newPos.x < 0 || newPos.x > size.numOfCols - 1 || newPos.y < 0 || newPos.y > size.numOfRows - 1){
        gameData.gameOver = true
    }
    else{
        if(newPos.x === gameData.food.x && newPos.y === gameData.food.y){
            gameData.snake.push({x: gameData.food.x, y: gameData.food.y})
            gameData.score += 1
            gameData.food = {x: Math.floor(Math.random() * size.numOfCols), y: Math.floor(Math.random() * size.numOfRows)}
        }
    }
  

    

}

const Up = (gameData: GameData,size:Size) => {
    

    let prev = {x: gameData.snake[0].x, y: gameData.snake[0].y}
    let prevX = gameData.snake[0].x
    let prevY = gameData.snake[0].y

    validate(gameData,0,-1,size)
    for(let pos =0 ; pos < gameData.snake.length; pos++){
        if(pos == 0){
            gameData.snake[pos].y -= 1
            
           
        }else{
            prevX = gameData.snake[pos].x
            prevY = gameData.snake[pos].y
            gameData.snake[pos].x = prev.x
            gameData.snake[pos].y = prev.y
            prev = {x: prevX, y: prevY}

            
        }
    }
}

const left = (gameData: GameData,size:Size) => {
    
    let prev = {x: gameData.snake[0].x, y: gameData.snake[0].y}
    let prevX = gameData.snake[0].x
    let prevY = gameData.snake[0].y

    validate(gameData,-1,0,size)
    for(let pos =0 ; pos < gameData.snake.length; pos++){
        if(pos == 0){
            gameData.snake[pos].x -= 1
           
        }else{
            prevX = gameData.snake[pos].x
            prevY = gameData.snake[pos].y
            gameData.snake[pos].x = prev.x
            gameData.snake[pos].y = prev.y
            prev = {x: prevX, y: prevY}

            
        }
    }
}

const right = (gameData: GameData, size:Size) => {
    
    let prev = {x: gameData.snake[0].x, y: gameData.snake[0].y}
    let prevX = gameData.snake[0].x
    let prevY = gameData.snake[0].y

    validate(gameData,1,0,size)

    for(let pos =0 ; pos < gameData.snake.length; pos++){
        if(pos == 0){
            gameData.snake[pos].x += 1
           
        }else{
            prevX = gameData.snake[pos].x
            prevY = gameData.snake[pos].y
            gameData.snake[pos].x = prev.x
            gameData.snake[pos].y = prev.y
            prev = {x: prevX, y: prevY}

            
        }
    }
}

const down = (gameData: GameData,size:Size) => {
    
    let prev = {x: gameData.snake[0].x, y: gameData.snake[0].y}
    let prevX = gameData.snake[0].x
    let prevY = gameData.snake[0].y

    validate(gameData,0,1,size)

    for(let pos =0 ; pos < gameData.snake.length; pos++){
        if(pos == 0){
            gameData.snake[pos].y += 1
           
        }else{
            prevX = gameData.snake[pos].x
            prevY = gameData.snake[pos].y
            gameData.snake[pos].x = prev.x
            gameData.snake[pos].y = prev.y
            prev = {x: prevX, y: prevY}

            
        }
    }
}

export const updatePosition = (gameData: GameData,size: Size) => {
    
    switch (gameData.direction) {
        case "up":
            Up(gameData,size)
            break;
        case "down":
            down(gameData,size)
            break;
        case "left":
            left(gameData,size)
            break;
        case "right":
            right(gameData,size)
            break;
        default:
            break;
    }

    gameData.seconds += 1;
}