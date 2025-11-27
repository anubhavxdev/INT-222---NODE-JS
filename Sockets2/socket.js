//using socket.io  send a message from client to server using a text box  and a send button 

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const http = createServer(app);
const io = new Server(http);

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'socket.html'));
});

let clients = 0;

// Socket.io connection
io.on("connection", (socket) => {
    console.log('a user connected');

    // Send welcome message ONLY to that user
    socket.emit("welcome", "Welcome to the broadcast server!");

    clients++;

    // Notify others that a user has joined
    socket.broadcast.emit("user-joined", `A new user has joined. Total users: ${clients}`);

    // Receive message from client
    socket.on("client-message", (msg) => {
        console.log("Client says:", msg);

        // Broadcast to all users
        io.emit("server-broadcast", `User: ${msg}`);
    });

    // When user leaves
    socket.on("disconnect", () => {
        console.log('user disconnected');

        clients--;

        // Notify everyone
        io.emit("user-left", `A user has left. Total users: ${clients}`);
    });
});

// Start server
http.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
