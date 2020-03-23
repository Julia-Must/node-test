var express = require("express");
var app = express();
var http = require("http").createServer(app);

http.listen(process.env.PORT || 3000, function(){
    app.get("/", function(request, result){
        result.send("Hello world !");
    })
})