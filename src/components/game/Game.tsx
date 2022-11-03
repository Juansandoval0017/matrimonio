import { component$ } from "@builder.io/qwik";
import { Board } from "./board";
import { Controls } from "./Controls";
export const Game = component$(() => {
    return (

        <div class="w-10/12 flex justify-center items-center min-h-screen gap-5">
            <Board />
            <Controls />
            
        </div>

    )
});