import { component$ , $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import {Side} from '../components/index/Side';

interface StylesProps {
  [key: string]: {
      section: string;
      button: string;
  }
}

export const styles : StylesProps= {
  David: {
      section: "w-1/2 min-h-screen flex bg-blue-200 items-center justify-center p-4",
      button: "w-2/5 place-self-center border-2 hover:bg-inherit hover:text-white transition duration-500 ease-in-out border-white bg-white text-blue-200 rounded-md"
  },
  Milena: {
      section: "w-1/2 min-h-screen flex bg-red-200 items-center justify-center p-4",
      button: "w-2/5 place-self-center border-2 hover:bg-inherit hover:text-white transition duration-500 ease-in-out border-white bg-white text-red-200 rounded-md"
  }
}


export default component$(() => {
  const msm = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto accusantium saepe, animi, perferendis nemo blanditiis omnis mollitia quis molestiae fugit rerum sequi tempora accusamus distinctio libero, quam eligendi ullam illum?'
  return (
    <div class='min-w-full bg-slate-50  absolute flex' >
        <h1 class=' text-white absolute text-center min-w-full mt-6 text-2xl font-semibold'>¿Quien eligira el lugar de la luna de miel? 🤔</h1>
        
        <Side section={styles.David.section} img="/man.png" name="David Fajardo" alias="Jefito" description={msm} href="David"/>
        <Side section={styles.Milena.section} img="/woman.png" name="Milena Nose" alias="Jefita" description={msm} href="Milena"/>
        
        

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
