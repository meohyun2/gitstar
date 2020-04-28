import React,{useContext,useState,useEffect} from 'react';
import {SearchContext} from '../../store/SearchContext';

const Username = () => {

  const [name,setName] =  useState();
  const [searchText,setSearchText] = useContext(SearchContext);

  useEffect(()=>{
    if(searchText!==null){
      setName(searchText.json.resMessage.userName);
    }
  },[searchText]);

  return (
    <div>
      <h1>
        {name}
      </h1>
    </div>
  )
}

export default Username;