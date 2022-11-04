import { component$} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import {Game} from '../../../components/game/Game';


interface Person {
    [key: string]: {
        color: string;
        emoji: string;

    }
}

export const Person_Data : Person = {
    "David" : {
        color: "min-w-full min-h-screen  flex items-center flex-col bg-blue-200 absolute",
        emoji: "👨🏻‍💻",
    } ,
    "Milena":{
        color: "min-w-full min-h-screen  flex items-center flex-col bg-red-200 absolute",
        emoji:"👩‍⚕️"
    }
}


export default component$(() => {
    const location = useLocation();
    const person = location.params.person;

    

    const {color,emoji} = Person_Data[person];

    return (
        
        <div className={color} >

            <h1 class="text-4xl mt-4 font-semibold text-white absolute justify-self-center text-center" >Bien Vamos  Apoyar a {person} {emoji}</h1>

            <Game />

           
        </div>
    
        )


});