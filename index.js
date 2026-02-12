const http = require('http');

const myserver = http.createServer((req, res) => {

  if (req.url === '/') {
   
    res.end(`
      <html>
        <head>
          <title>Home</title>
        </head>
        <body>
          <h1>Home Page</h1>            
          <h2>ABES Engineering College</h2>
          <a href="/about">About</a><br>
          <a href="/contact">Contact</a>
        </body>
      </html>
    `);
  }

  else if (req.url === '/about') {
    // ABOUT PAGE WITH IMAGE
    res.end(`
      <html>
        <head>
          <title>About</title>
        </head>
        <body>
          <h1>About Page</h1>
          <p>This page is about ABES Engineering College.</p>
          <img src="./image copy.png" width="400"/>
          <br><br>
          <a href="/">Home</a>
        </body>
      </html>
    `);
  }

  else if (req.url === '/contact') {
    // CONTACT PAGE
    res.end(`
      <html>
        <head>
          <title>Contact</title>
        </head>
        <body>
          <h1>Contact Page</h1>
          <p>Email: info@abes.ac.in</p>
          <p>Phone: 0120-7135112</p>
          <a href="/">Home</a>
        </body>
      </html>
    `);
  }

  else {
    res.end("404 Page Not Found");
  }
});

myserver.listen(3000, () => {
  console.log('Server running on port 3000');
});

                  