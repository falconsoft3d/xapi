## Documentation
This app is a simple app to test api rest.

# App
https://xapi-one.vercel.app/


## Posts
```
https://xapi-one.vercel.app/api/posts/
https://xapi-one.vercel.app/api/posts/1
```

## People
```
https://xapi-one.vercel.app/api/people/
https://xapi-one.vercel.app/api/people/1
```

## Python
```
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://xapi-one.vercel.app/api/posts',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```


