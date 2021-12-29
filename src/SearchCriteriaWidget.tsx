import React, { useEffect, useRef, useState } from 'react';
import { Action } from './Action';
import { SearchCriteria, ThingSearchData } from './BaseTypes';
import { useDebounceCallback } from '@react-hook/debounce';

export const SearchCriteriaWidget: React.FC<SearchCriteriaProps> = ({ dispatch, options1, options2, options3 }) => {
  const [state, setState] = useState<SearchCriteria>({
    searchText: "",
    option1: options1[0].key,
    option2: options2[0].key,
    option3: options3[0].key,
  });
  const [searchText, setSearchText] = useState("");

  const debouncedSetState = useDebounceCallback(setState, 500);

  useEffect(() => {
    dispatch({ tag: "SearchCriteriaChanged", ...state })
  }, [state]);

  const setText = (text: string) => {
    debouncedSetState(x => ({ ...x, searchText: text }));
    setSearchText(text);
  }

  return (
    <div className="search-criteria">
      <input type="search" value={searchText} onChange={evt => setText(evt.target.value)} />
      <select value={state.option1} onChange={e => setState(x => ({ ...x, option1: e.target.value }))}>
        {options1.map(({ key, label }) => <option key={key} value={key}>{label}</option>)}
      </select>
      <select value={state.option2} onChange={e => setState(x => ({ ...x, option2: e.target.value }))}>
        {options2.map(({ key, label }) => <option key={key} value={key}>{label}</option>)}
      </select>
      <select value={state.option3} onChange={e => setState(x => ({ ...x, option3: e.target.value }))}>
        {options3.map(({ key, label }) => <option key={key} value={key}>{label}</option>)}
      </select>
    </div>
  );

};
type SearchCriteriaProps = Pick<ThingSearchData, "options1" | "options2" | "options3"> & {
  dispatch: React.Dispatch<Action>;
};
