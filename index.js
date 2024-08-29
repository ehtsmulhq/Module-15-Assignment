const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/':
      res.write('This is the Home Page');
      break;

    case '/about':
      res.write('This is the About Page');
      break;

    case '/contact':
      res.write('This is the Contact Page');
      break;

    case '/file-write':
      
      fs.writeFile('demo.txt', 'hello world', (err) => {
        if (err) {
          res.write('Failed to write to file');
        } else {
          res.write('File written successfully');
        }
        res.end(); 
      });
      return; 

    default:
      res.write('404 Not Found');
      break;
  }

  
  res.end();
});


server.listen(5500, () => {
  console.log('Server is listening on port 5500');
});
