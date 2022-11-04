import { component$, useStore,useClientEffect$,useWatch$ ,$ } from "@builder.io/qwik";
import { GameData } from "../../interfaces/game/interface";

interface Dir {
    [key: string]: "up" | "down" | "left" | "right" | "";
}



export const Board = component$((props: {game : GameData,numOfCols: number,numOfRows:number}) => {

    const {game,numOfCols,numOfRows} = props;
    
   
 
    const emptyRows = () => [...Array(numOfRows)].map(() => Array(numOfCols).fill(0));

   

    const grid = emptyRows();

  

    return (
        <div key={game.seconds}  class="w-2/6  h-1/4 overflow-hidden ">
        
            <div class={` bg-gray-500 grid grid-cols-40  grid-rows-20 w-full  bg-board bg-contain  `}>

                {grid.map((rows, i) => rows.map((col, j) => {
                const stat = game.snake.find((snake) => snake.x === j && snake.y === i);
                if(stat){}
                const isSnake = stat ? true : false;
                const isFood = game.food.x === j && game.food.y === i;

                const color = isSnake ? "bg-trasparent" : isFood ? "bg-red-500" : "bg-black";

                return <div class={`  ${color} `}></div>
                
                }))}


            </div>
            <span>{game.gameOver? "game Over": "in Game"}</span>
            
        </div>
        )
})