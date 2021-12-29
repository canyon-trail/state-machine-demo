import React, { useEffect } from 'react';
import { Action } from './Action';
import { State } from './State';

export const ThingSearchReactor: React.FC<{ dispatch: React.Dispatch<Action>; state: State; }> = ({ state, dispatch }) => {
  useEffect(() => {
    reactToState(state, dispatch);
  }, [state]);
  return <React.Fragment />;
};

async function reactToState(state: State, dispatch: React.Dispatch<Action>) {
  const generateThings = (n: number) => Array.from(Array(n).keys()).map(x => ({ name: `Thing ${(Math.random() + '').padEnd(16, '0').slice(0, 8).slice(2)}` }));

  // these two things simulate talking to a "real" backend by delaying for a little bit (so you can see the spinner) and then returning contrived results
  if (state.tag === "Loading" || state.tag === "Reloading") {
    await new Promise(resolve => setTimeout(resolve, 3000));

    dispatch({
      tag: "DataLoaded",
      things: generateThings(10),
      options1: ["1-1", "1-2", "1-3"].map(x => ({ key: x, label: x })),
      options2: ["2-1", "2-2", "2-3"].map(x => ({ key: x, label: x })),
      options3: ["3-1", "3-2", "3-3"].map(x => ({ key: x, label: x })),
      searchText: "",
      option1: "1-1",
      option2: "2-1",
      option3: "3-1",
    });
  }

  if (state.tag === "LoadingMore") {
    await new Promise(resolve => setTimeout(resolve, 1000));

    dispatch({
      tag: "AddlDataLoaded",
      things: generateThings(30)
    });

  }
}
