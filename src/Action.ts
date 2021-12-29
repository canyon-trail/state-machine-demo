import { Tagged, ThingSearchData, Thing, SearchCriteria } from './BaseTypes';

export type SearchCriteriaChanged = Tagged<"SearchCriteriaChanged"> & SearchCriteria;
export type ScrolledToBottom = Tagged<"ScrolledToBottom">;
export type AdditionalDataLoaded = Tagged<"AddlDataLoaded"> & {
  things: Thing[];
};
export type DataLoaded = Tagged<"DataLoaded"> & ThingSearchData & SearchCriteria;
export type Action = SearchCriteriaChanged | ScrolledToBottom | AdditionalDataLoaded | DataLoaded;
