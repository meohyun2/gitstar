import React,{useState,useContext,useEffect} from 'react';
import {SearchContext} from '../../store/SearchContext';

const initialValue = {
  userStarCount:0,
  userRepoCount:0
}

const UserInfo = () => {

  const [searchText,setSearchText] = useContext(SearchContext);
  const [userInfo,setUserInfo] = useState(initialValue);

  useEffect(()=>{
    if(searchText!==null){
      setUserInfo({
        userRepoCount:searchText.json.resMessage.repo_count_ALL,
        userStarCount:searchText.json.resMessage.star_count_ALL
      });
    }
  },[searchText]);
  
  return(
    <div>
      <p>{userInfo.userRepoCount}</p>
      <p>{userInfo.userStarCount}</p>
    </div>
  );
}

export default UserInfo;