
const EventEmitter = require("events").eventEmitter;



const evento = new EventEmitter();



evento.on("buenas", function(){
    console.log("soy el primer evento");
})



evento.emit("buenas");



