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

    replServer.defineCommand("hello", {
        help: "say hello",
        action(name){
            this.clearBufferedCommand();
            console.log(`hello i am server REPL ${name}`);
            this.displayPrompt();
        }
    })
}).listen(5001)

