let express = require('express')
let app = express()

app.get("/", function(request, response){
    response.send("hola desde express");
})

app.listen(8000, function(){
    console.log("servidor express escuchando desde el puerto 8000");
})