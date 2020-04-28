import React,{useContext,useState,useEffect} from 'react';
import {SearchContext} from '../../store/SearchContext';

const initialValue = [{
  count :0,
  name :'',
}];

const List = () => {

  const [searchText,setSearchText] = useContext(SearchContext);
  const [list,setList] = useState(initialValue);
  
  
  useEffect(()=>{
    setList(searchText.json.resMessage.repo_list);
    console.log(list);
  },[searchText]);
  
const repoList = list.map((list) => (
    <li>{list.name}{list.count}</li>
  )
);
  return(
    <ul>
      {repoList}
    </ul>
  )
}

export default List;