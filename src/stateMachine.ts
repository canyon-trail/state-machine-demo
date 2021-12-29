import { Action, SearchCriteriaChanged } from "./Action";
import { SearchCriteria } from "./BaseTypes";
import { Loaded, Loading, LoadingMore, Reloading, State } from "./State";

export function reducer(state: State, action: Action): State {
  console.log("reducing", state, action);
  if(state.tag === "Loaded") {
    return reduceLoaded(state, action);
  } else if(state.tag === "Loading") {
    return reduceLoading(state, action);
  } else if(state.tag === "LoadingMore") {
    return reduceLoadingMore(state, action);
  } else if(state.tag === "Reloading") {
    return reduceLoading(state, action);
  }

  return state;
}

function areCriteriaUnchanged(action: SearchCriteriaChanged, state: Loaded): boolean {
  const keys: (keyof SearchCriteria)[] = ["option1", "option2", "option3", "searchText"];

  return keys.every(k => action[k] === state[k]);
}

function reduceLoaded(state: Loaded, action: Action): State {
  if(action.tag === "ScrolledToBottom") {
    return {
      ...state,
      tag: "LoadingMore",
    }
  } else if(action.tag === "SearchCriteriaChanged") {
    // a convenience to prevent reloading if SearchCriteriaChanged is dispatched without a real change
    if(areCriteriaUnchanged(action, state)) {
      return state;
    }
    return {
      ...state,
      tag: "Reloading",
    }
  }

  return state;
}

function reduceLoading(state: Loading | Reloading, action: Action): State {
  if(action.tag === "DataLoaded") {
    return {
      ...action,
      tag: "Loaded",
    }
  }

  return state;
}

function reduceLoadingMore(state: LoadingMore, action: Action): State {
  if(action.tag === "AddlDataLoaded") {
    return {
      ...state,
      tag: "Loaded",
      things: [
        ...state.things,
        ...action.things,
      ]
    }
  }
  return state;
}