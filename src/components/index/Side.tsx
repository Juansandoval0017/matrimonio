import { component$} from '@builder.io/qwik';


interface SideProps {
    name: string;
    section: string;
    alias: string;
    description: string;
    href: string;
    img: string;
    button: string;
    imgClass: string;

}





export const Side = component$(({section,name,alias,description,img,href,button,imgClass} : SideProps ) => {




    return (
        <section class={section}>
          
            
            <img src={img} alt="foto" class={imgClass} />
            <article class="w-3/5 border-2 border-orange-100 p-4 h-2/5 flex flex-col rounded-sm gap-4">
                <h3 class="text-xl text-orange-100" >{name} alias: {alias}</h3>
                <p class=" font-thin text-justify text-white" >{description}</p>

                <a href={`game/${href}`} class="mt-2" >
                <button class={button}>Team {name.split(" ",1)}</button>
                </a>
            </article>
            
        </section>
    )
})