var http = require('node:http');
var fs = require('node:fs');

const server = http.createServer((req, res) => {
  // Retrieve slideshow images
  let images = fs.readdirSync('media/images');

  // Allow cross-origin for local development
  const headers = {
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Max-Age': 2592000, // 30 days
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(200, haeders);
    res.end();
    return
  }

  headers['Content-Type'] = 'text/json';
  res.writeHead(200, headers);
  res.end(JSON.stringify(images));
})

server.listen(8081, '0.0.0.0', () => {});
