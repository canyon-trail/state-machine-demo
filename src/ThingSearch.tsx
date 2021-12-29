import React from 'react';
import { Action } from './Action';
import { SearchCriteriaWidget } from './SearchCriteriaWidget';
import { State } from './State';


export const ThingSearch: React.FC<{ dispatch: React.Dispatch<Action>; state: State; }> = ({ state, dispatch }) => {
  const showSpinner = state.tag !== "Loaded";

  return <>
    { showSpinner && <div className="spinner"></div> }

    {/* using typescript narrowing to render based on checking the tag */}
    {state.tag !== "Loading" && <SearchCriteriaWidget {...{ options1: state.options1, options2: state.options2, options3: state.options3 }} dispatch={dispatch} />}
    {state.tag !== "Loading" && state.things.map(x => <div key={x.name}>{x.name}</div>)}

    {/* using a button to fake the infinite scroll */}
    {state.tag !== "Loading" && state.tag !== "LoadingMore" && <button onClick={() => dispatch({ tag: "ScrolledToBottom" })}>(load more)</button>}
  </>;
};
