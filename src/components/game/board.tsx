import { component$, useStore,useClientEffect$,useWatch$ ,$ } from "@builder.io/qwik";
import { UpdatePosition } from "~/controller/game/events";
import { Snake} from "../../interfaces/game/interface"

interface Dir {
    [key: string]: "up" | "down" | "left" | "right" | "";
}



export const Board = component$(() => {
    const FindPos = (snake:Snake,i:number,j:number) =>{
        for (let key in snake){
            if (snake[key].x === i && snake[key].y === j){
                return true
            }
        }
        return false
    }
    const numOfCols = 80;
    const numOfRows = 40;
    const emptyRows = () => [...Array(numOfRows)].map(() => Array(numOfCols).fill(0));

    const game = useStore({
        snake: {
            0 : { x: 0, y: 10 },
            1 : { x: 0, y: 11 },
            2 : { x: 0, y: 12 },
        },
        food: { x: 10, y: 10 },
        direction: "up",
        score: 0,
        seconds: 0,
        
    })

        const grid = emptyRows();

    return (
        <div key={game.seconds}  class="w-4/6 bg-slate-400 h-1/4  ">
            <button onClick$={()=>{ game.snake[0].x++; game.snake[1].y--; game.snake[2].y-- ; game.seconds += 1 } }>este es un boton</button>
            <div class="grid grid-cols-board grid-rows-board w-full">

                {grid.map((rows, i) => rows.map((col, j) => {
                const stat = FindPos(game.snake,i,j);
                if(stat){}
                const isSnake = stat ? true : false;
                const isFood = game.food.x === j && game.food.y === i;

                const color = isSnake ? "bg-green-500" : isFood ? "bg-red-500" : "";

                return <div class={`  ${color} `}></div>
                
                }))}


            </div>
            
        </div>
        )
})