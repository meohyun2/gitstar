import React,{useState, createContext} from 'react';

const initialValue = {
  code:'',
  json:{
    resCode:'',
    success:'',
    resMessage:{
      userName:'',
      repo_list:[],
      star_count_ALL:0,
      repo_count_ALL:0,
    },
    message:''
  }
}

export const SearchContext = createContext();

export const SearchProvider = props =>{

  const [searchText,setSearchText] = useState(initialValue);
  return(
    <SearchContext.Provider value ={[searchText,setSearchText]}>
      {props.children}
    </SearchContext.Provider>
  );
}