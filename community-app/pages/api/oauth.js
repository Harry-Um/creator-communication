
const url = require('url');
import axios from 'axios';

export default function handler(req, res) {

  const Data = url.parse(req.url, true).query;
  console.log(Data.code);

  const fetching = function(){
    axios.get(`http://52.79.199.94:8080/callback/kakao/?code=${Data.code}`).then(function(response){
      console.log(response.data)
    });
  }

  fetching();

  res.redirect('/',200);
}
