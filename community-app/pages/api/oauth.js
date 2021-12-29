
const url = require('url');
import axios from 'axios';
import React from 'react';

export default function handler(req, res) {

  const Data = url.parse(req.url, true).query;
  const Code = Data.code;


  const ServerLogin = async function(Code){
    try{
      const response = await axios.get(`http://52.79.199.94:8080/callback/kakao/?code=${Code}`)
      const Token = response.data;
      console.log(response.data);
    } catch(err){
      console.log("error");
    }
  }



  ServerLogin(Code);
  res.redirect('/',200);


}
