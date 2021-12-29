import React, { useReducer } from 'react';
import { State } from './State';
import { reducer } from './stateMachine';
import { ThingSearchReactor } from './ThingSearchReactor';
import { ThingSearch } from "./ThingSearch";

export const ThingSearchUI: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { tag: "Loading" });

  return (
    <>
      <ThingSearch {...{ state, dispatch }} />
      <ThingSearchReactor {...{ state, dispatch }} />
    </>
  );
};
