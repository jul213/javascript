let express = require('express')
let app = express()

app.get("/", function(request, response){
    response.send("hola desde express");
})