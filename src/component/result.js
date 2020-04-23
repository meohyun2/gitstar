import React,{useContext} from 'react';
import {SearchContext} from '../store/SearchContext'

function Result() {
    const [searchText,setSearchText] = useContext(SearchContext);
    console.log(searchText);
    return(
        <div>
            <p>
                결과 : {searchText}
            </p>
        </div>
    )
}

export default Result;