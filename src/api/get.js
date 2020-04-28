const fetch = require('node-fetch');
const resCode = require('../utils/resCode');
const resMessage = require('../utils/resMessage');
const utils = require('../utils/utils');

async function getAPI(userName) {
  const URL = `https://api.github.com/users/${userName}/repos`
  const result = await fetch(URL)
  if(result ==='Not Found'){
    return ({
      code : resCode.BAD_REQUEST,
      json : utils.success(resCode.BAD_REQUEST,resMessage.BAD_REQUEST)
    })
  }
  let data = await result.json();
  if(data === undefined){
    return ({
      code : resCode.INTERNAL_SERVER_ERROR,
      json : utils.success(resCode.INTERNAL_SERVER_ERROR,resMessage.INTERNAL_SERVER_ERROR)
    })
  }
  return data;
}

module.exports = getAPI;