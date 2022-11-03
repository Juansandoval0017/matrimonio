import { component$, useStore,useClientEffect$,useWatch$ ,$ } from "@builder.io/qwik";

export const Controls = component$(() => {
    const store = useStore({ count: 0 });
  
    return <button onClick$={() => store.count++}>{store.count}</button>;
  });