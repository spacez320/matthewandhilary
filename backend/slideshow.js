var http = require('node:http');
var fs = require('node:fs');

process.on('SIGINT', () => {
  process.exit(0);
})

process.on('SIGTERM', () => {
  process.exit(0);
})

const server = http.createServer((req, res) => {
  // Retrieve slideshow images
  let images = fs.readdirSync('media/images');

  // Allow cross-origin for local development
  //
  // TODO This defeats the purpose, undo this or make it conditional on local development
  const headers = {
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Max-Age': 2592000, // 30 days
  };

  // Cross-origin requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200, haeders);
    res.end();
    return
  }

  // Normal requests
  headers['Content-Type'] = 'text/json';
  res.writeHead(200, headers);
  res.end(JSON.stringify(images));
})

server.listen(8081, '0.0.0.0', () => {});
