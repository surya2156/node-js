const http = require('http');

const myserver = http.createServer((req, res) => {
  console.log('server 1');

  if (req.url === '/about') {
    res.end('this is about page');  //router
  }
  else if (req.url === '/aboutus') {
    res.end('this is about us page');  //router
  }
  else {
    res.end('hello world');
  }
});

myserver.listen(8000, () => {
  console.log('server running on port 8000');  //port number
});
                  