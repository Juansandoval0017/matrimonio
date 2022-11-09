import { component$,PropFunction ,$ } from "@builder.io/qwik";
interface Props {
  Reset$ : PropFunction<() => void>,
   score: number,
   gameOver: boolean,
   name: string,
}

interface Styles {
    [key: string]: {
        title: string,
        button: string,
    }
}

export const  StylesData : Styles = {
    David: {
        title: "text-3xl text-center text-blue-200",
        button: "",

    },
    Milena:{
        title: "text-3xl text-center text-red-200",
        button: "",
    }
}

export const Modal = component$((props: Props) => {

  if(!props.gameOver){
    return null;
  }


  return(
    <div  class=" absolute w-screen h-screen flex items-center justify-center bg-black bg-opacity-20" >

        
        <div class="bg-white w-3/4 h-3/4 md:w-2/4 md_:h-2/4 rounded-md shadow-lg p-10 drop-shadow-md flex items-center justify-between flex-col">
            
            <h2 class={StylesData[props.name].title} >Apoyaste a {props.name} con {props.score} asi va la cosa 🤗</h2>

            <article class="flex w-full flex-col" >

                <section class="flex w-full justify-between text-right" >

                    <span> <span class="font-semibold text-blue-600" >David:</span>  125</span>
                    <span> <span class="font-semibold text-pink-400" >Milena:</span>  125</span>
                    

                </section>

                <section class="w-full rounded-full h-5 bg-pink-400 flex" >

                    <div class="bg-blue-600 h-5 rounded-full text-center flex items-center justify-center text-white" style="width: 45%">45%</div>
                    <div class=" rounded-full text-center  flex items-center justify-center text-white" style="width: 55%" >55%</div>
                    
                </section>

            </article>
            
            

            <section  class="w-full flex justify-around items-center gap-2" >

            <button class= "w-1/2 md:w-1/4 bg-pink-400 h-8 border-2 border-pink-400 text-white rounded-md hover:bg-inherit hover:text-pink-400 transition-all ease-in-out duration-200" onClick$={async ()=>{ await props.Reset$()  }} >Jugar Otra vez</button>
            <button class= "w-1/2 md:w-1/4 bg-blue-600 h-8 border-2 border-blue-600 text-white rounded-md hover:bg-inherit hover:text-blue-400 transition-all ease-in-out duration-200">Ir al inicio</button>

            </section>
            
        
        </div>
     

      

    </div>
  )
  });