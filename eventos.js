
const EventEmitter = require("events").EventEmitter;



const evento = new EventEmitter();



evento.on("buenas", function(){
    console.log("soy el primer evento");
})



evento.on("adios", function(){
    console.log("soy el segundo evento");
})



evento.emit("buenas");
evento.emit("adios");


