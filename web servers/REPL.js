repl.start(prompt, stream);

var net = require('net'), repl = require("repl");

net.createServer(function (socket){
    var replServer = repl.start({
        prompt: "remote>",
        input: socket,
        output: socket
    });

    repl.on('exit', function(){
        console.log('este es un evento de salida');
        socket.end()
    })
    
}).listen(5001)


replServer.defineCommand(keyword, cmd)