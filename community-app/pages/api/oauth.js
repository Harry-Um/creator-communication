
const url = require('url');

export default function handler(req, res) {

  const Data = url.parse(req.url, true).query;
    console.log(Data);
    console.log(Data.code);
    res.status(200).json({code: Data.code})
}
