import React,{useContext} from 'react';
import {SearchContext,SearchProvider} from '../store/SearchContext';


function Button(props) {

  const [searchText,setSearchText] = useContext(SearchContext);

  const changeContext = e =>{
    e.preventDefault();
    console.log(props.text);
    setSearchText(props.text);
  }
  return (
    <div>
      <form onSubmit={changeContext}>
        <button>
            Search
        </button>
      </form>
    </div>
  );
}

export default Button;