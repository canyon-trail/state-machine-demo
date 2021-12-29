import { SearchCriteria, Tagged, ThingSearchData } from './BaseTypes';

export type Loading = Tagged<"Loading">;
export type Loaded = Tagged<"Loaded"> & ThingSearchData & SearchCriteria;
export type Reloading = Tagged<"Reloading"> & ThingSearchData & SearchCriteria;
export type LoadingMore = Tagged<"LoadingMore"> & ThingSearchData & SearchCriteria;
export type State = Loading | Loaded | Reloading | LoadingMore;
