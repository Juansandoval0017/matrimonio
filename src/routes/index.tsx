import { component$ , $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import {Side} from '../components/index/Side';


export default component$(() => {
  const msm = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto accusantium saepe, animi, perferendis nemo blanditiis omnis mollitia quis molestiae fugit rerum sequi tempora accusamus distinctio libero, quam eligendi ullam illum?'
  return (
    <div class='min-w-full bg-slate-50  absolute flex' >
        <h1 class=' text-white absolute text-center min-w-full mt-6 text-2xl font-semibold'>¿Quien eligira el lugar de la luna de miel? 🤔</h1>
        
        <Side color="blue-200" img="/man.png" name="David Fajardo" alias="Jefito" description={msm} href="/david"/>
        <Side color="red-200" img="/woman.png" name="Milena Nose" alias="Jefita" description={msm} href="/Milena"/>
        
        

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
