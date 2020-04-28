const getAPI = require("../api/get");
const resCode = require('../utils/resCode');
const resMessage = require('../utils/resMessage');
const utils = require('../utils/utils');

async function parser(userName) {

  let retData = {
    userName : '',
    repo_list : [],
    star_count_ALL:0,
    repo_count_ALL:0,
  }

  return new Promise((resolve,reject)=>{
    getAPI(userName)
    .then(data=>{
      if(data.message==='Not Found'){
        resolve({
          code : resCode.WRONG_USER,
          json : utils.fail(resCode.WRONG_USER,resMessage.WRONG_USER)
        });
      }else if(data){
        retData.repo_count_ALL = data.length;
        retData.userName = userName;
        data.forEach(element => {
            retData.repo_list.push({name:element.name},{count:element.stargazers_count});
            retData.star_count_ALL+=element.stargazers_count;
          }
        );
        resolve({
          code : resCode.SUCCESS,
          json : utils.success(resCode.SUCCESS,retData,resMessage.SUCCESS)
        });
      }else{
        resolve({
          code : resCode.INTERNAL_SERVER_ERROR,
          json : utils.fail(resCode.INTERNAL_SERVER_ERROR,resMessage.INTERNAL_SERVER_ERROR)
        });
      }
    }) 
  });
}

module.exports = parser;