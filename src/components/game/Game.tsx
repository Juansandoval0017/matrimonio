import { component$, useStore ,useWatch$ , $, useClientEffect$ } from "@builder.io/qwik";
import { Board } from "./board";
import { Controls } from "./Controls";
import { GameData ,Size } from "../../interfaces/game/interface";
import { updatePosition } from "~/controller/game/events";

export const Game = component$(() => {

    const size = useStore<Size>({
        numOfCols: 40,
        numOfRows: 20,
    })

    const game = useStore<GameData>({
        snake: [{x:15,y:15}, {x:16,y:15},{x:17,y:15},{x:18,y:15}  ],
        food: { x: 15, y: 10 },
        score: 0,
        seconds: 0,
        direction: "",
        gameOver: false,
        
    })

    const goodbye$ = $(() => alert('Good Bye!'));


    const changeDirection$ = $((direcion: "up" | "down" | "left" | "right" | "") => {
        game.direction = direcion;
        updatePosition(game,size);
    })


    useClientEffect$(() => {
        console.log(window.screen.width)
        console.log(window.screen.height)

        addEventListener("keydown", (e:any) => {
            switch (e.key) {
                case "ArrowUp":
                    game.direction = "up";
                    break;
                case "ArrowDown":
                    game.direction = "down";
                    break;
                case "ArrowLeft":
                    game.direction = "left";
                    break;
                case "ArrowRight":
                    game.direction = "right";
                    break;
            }
        });
        
    })

    useClientEffect$(() => {
        const interval = setInterval(() => {
            if(!game.gameOver){

                updatePosition(game,size);
            }
            else{
                clearInterval(interval);
            }
            
        }, 100);
        return () => clearInterval(interval);
    })






    return (

        <div key={game.seconds} class="w-10/12 flex flex-col md:flex-row justify-center items-center min-h-screen gap-5">
            <Board  game={game} numOfCols={size.numOfCols} numOfRows={size.numOfRows} />
            <Controls goodbye$={goodbye$} changeDirection$={changeDirection$} direction={game.direction} />
            
        </div>

    )
});