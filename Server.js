var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(8081);

io.on("connection", function(socket){
    console.log(socket.id + " is connecting");
    socket.on("client-send-Username", function(data){
        console.log(data);
    });
});

app.get("/", function(reg, res){
    res.render("Home");
});


