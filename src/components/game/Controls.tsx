import { component$,PropFunction ,$ } from "@builder.io/qwik";
interface Props {
  changeDirection$ : PropFunction<(direcion: "up" | "down" | "left" | "right" | "") => void>,
   direction : "up" | "down" | "left" | "right" | "",
   goodbye$: PropFunction<() => void>
}
export const Controls = component$((props: Props) => {


    const Up = $( async ()=>{
        
        await props.changeDirection$("up");
    } )

    const Down = $( async ()=>{
          
          await props.changeDirection$("down");
    } )

    const Left = $( async ()=>{
            
            await props.changeDirection$("left");
    })

    const Right = $( async ()=>{
                
                await props.changeDirection$("right");
    } )


  return(
    <div  class="w-full lg:w-2/6 flex justify-center" >

      <section class=" w-2/6 grid grid-cols-3 grid-rows-3 border-collapse">
          <span></span>
          <div onClick$={Up} class=" cursor-pointer bg-gray-400 shadow-2xl shadow-black drop-shadow-xl text-center text-4xl rounded-full flex justify-center items-center">▲</div>
          <span></span>

          <div onClick$={Left} class=" cursor-pointer bg-gray-400 shadow-2xl shadow-black drop-shadow-xl text-right text-4xl pr-2 rounded-full flex justify-center items-center">◀</div>
          <span></span>
          <div onClick$={Right} class="cursor-pointer bg-gray-400 shadow-2xl shadow-black drop-shadow-xl  text-4xl pl-2 rounded-full  flex justify-center items-center">▶</div>

          <span></span>
          <div onClick$={Down} class="cursor-pointer bg-gray-400 shadow-2xl shadow-black drop-shadow-xl text-center text-4xl rounded-full  flex justify-center items-center">▼</div>
          <span></span>
      </section>

      

    </div>
  )
  });