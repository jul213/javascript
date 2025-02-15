repl.start(prompt, stream);

var net = require('net'), repl = require("repl");

net.createServer(function (socket){
    var replServer = repl.start(
        "remote>", socket
    );
}).listen(5001)

repl.on('exit', function(){
    console.log('este es un evento de salida');
    process.exit();
})