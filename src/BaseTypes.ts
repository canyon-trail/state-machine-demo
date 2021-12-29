type Option = {
  key: string;
  label: string;
};

export type Thing = {
  name: string;
};

export type ThingSearchData = {
  things: Thing[];
  options1: Option[];
  options2: Option[];
  options3: Option[];
};

export type SearchCriteria = {
  searchText: string;
  option1: string;
  option2: string;
  option3: string;
};

export type Tagged<T extends string> = { tag: T };