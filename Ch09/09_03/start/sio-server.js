let express = require("express");
let http = require("http");
let app = express();
let server = http.createServer(app).listen(3000);
let io = require("socket.io")(server);

app.use(express.static("./public"));

io.on("connection", function(socket) {

    console.log("Connection, socket");

    socket.on("chat", function(message) {
        socket.broadcast.emit("message", message);
    });

    socket.emit("message", "Welcome to Cyber Chat");

});

console.log("Starting Socket App - http://localhost:3000");

// var express = require("express");
// var http = require("http");
// var app = express();
// var server = http.createServer(app).listen(3000);
// var io = require("socket.io")(server);
//
// app.use(express.static("./public"));
//
// io.on("connection", function(socket) {
//
//     socket.on("chat", function(message) {
//     	socket.broadcast.emit("message", message);
//     });
//
// 	socket.emit("message", "Welcome to Cyber Chat");
//
// });
//
// console.log("Starting Socket App - http://localhost:3000");

/*
* "express": "^4.13.3",
    "socket.io": "^1.3.7",
    "socket.io-client": "^1.3.7"
* */