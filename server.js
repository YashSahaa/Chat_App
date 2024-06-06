const express = require('express'); //here we were importing express from node modules
const http = require('http'); // we don't have to install implicitly from npm since http is alredy present in nodejs
const socketIo = require('socket.io');

const sockerIoServer = socketIo.Server;


const app = express(); // we were invoking express and here app is an express server
const httpVersionOfApp = http.createServer(app); // it takes server and it gives http version of server
//socketio works with http version that's why we need to create http version of our app



httpVersionOfApp.listen(3000); //it will give port to server
//in terminal we have to write node server.js to run server