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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'broadcast1.html'));
});


let clients = 0;

io.on("connection", (socket) => {
    console.log('a user connected');
    socket.emit("welcome", "Welcome to the broadcast server!");
    clients++;
    socket.broadcast.emit("user-joined", `A new user has joined. Total users: ${clients}`);

    socket.on("disconnect", () => {
        console.log('user disconnected');
        clients--;
        io.emit("user-left", `A user has left. Total users: ${clients}`);
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});