import { component$} from '@builder.io/qwik';


interface SideProps {
    name: string;
    section: string;
    alias: string;
    description: string;
    href: string;
    img: string;

}





export const Side = component$(({section,name,alias,description,img,href} : SideProps ) => {




    return (
        <section class={section}>
          
            
            <img src={img} alt="foto" class="w-2/5 h-2/5" />
            <article class="w-3/5 border-2 border-orange-100 p-4 h-2/5 flex flex-col rounded-sm gap-4">
                <h3 class="text-xl text-orange-100" >{name} alias: {alias}</h3>
                <p class=" font-thin text-justify text-white" >{description}</p>

                <a href={`game/${href}`} class="mt-2" >
                <button class="w-2/5 place-self-center border-2 hover:bg-inherit hover:text-white transition duration-500 ease-in-out border-white bg-white text-blue-200 rounded-md">Team {name.split(" ",1)}</button>
                </a>
            </article>
            
        </section>
    )
})