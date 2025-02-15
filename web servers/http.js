const http = require('http')

function requestHandler(request, response){
    response.end('test response')
}


const server = http.createServer(requestHandler);

