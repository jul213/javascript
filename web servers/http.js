const http = require('http')

function requestHandler(request, response){
    response.end('test response')
}


const server = http.createServer(requestHandler);


server.listen(8000, function(){
    console.log('server listening here: http:/localhost/%s', 8000);
});