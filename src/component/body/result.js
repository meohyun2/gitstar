import React,{useContext,useState} from 'react';
import Username from './username';
import UserInfo from './userInfo';
import List from './list';
import {SearchContext} from '../../store/SearchContext';

function Result() {

    const [searchText,setSearchText] = useContext(SearchContext);
    console.log(searchText);

    return(
        <div>
            <Username></Username>
            <UserInfo></UserInfo>
            <List></List>
        </div>
    )
}

export default Result;