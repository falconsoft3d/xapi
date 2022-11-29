var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://random-data-api.com/api/v2/beers',
  'headers': {
  }
};

export default function handler(req, res) {
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.status(200).json(JSON.parse(response.body));
      });      
    
  }