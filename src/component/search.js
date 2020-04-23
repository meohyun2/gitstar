import React,{useContext,useState} from 'react';
import {SearchContext,SearchProvider} from '../store/SearchContext';

function Search() {

  const [inputString,setInputString] = useState('');
  const [searchText,setSearchText] = useContext(SearchContext);

  const _inputTextEvent = (input) => {
    setInputString(input.target.value);
    console.log(inputString);
  }

  const changeContext = e =>{
    e.preventDefault();
    console.log(inputString);
    setSearchText(inputString);
  }
  return (
    <div>
      <form onSubmit={changeContext}>
        <input type = "text" onChange={_inputTextEvent}/>
        <button>
            Search
        </button>
      </form>
    </div>
  );
}

export default Search;