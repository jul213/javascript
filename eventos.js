
const eventEmitter = require("EventEmitter").eventEmitter;



const evento = new eventEmitter;



evento.on("buenas", function(){
    console.log("soy el primer evento");
})



