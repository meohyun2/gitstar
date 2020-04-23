import React,{useState, createContext} from 'react';

export const SearchContext = createContext();

export const SearchProvider = props =>{

  const [searchText,setSearchText] = useState('meohyun2');
  return(
    <SearchContext.Provider value ={[searchText,setSearchText]}>
      {props.children}
    </SearchContext.Provider>
  );
}