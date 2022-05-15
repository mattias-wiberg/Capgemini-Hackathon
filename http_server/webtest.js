const http = require('http');

http.createServer((request, res) => {
  //console.log('Now we have a http message with headers but no data yet.');
  request.on('data', chunk => {
    //console.log('A chunk of data has arrived: ', chunk);
    var data = JSON.parse(chunk);
    console.log('Recived x:'+data.horizontal+' y:'+data.vertical);
  });
  request.on('end', () => {
    //console.log('No more data');
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write('Status: OK');
    res.end();
  })
}).listen(8081)