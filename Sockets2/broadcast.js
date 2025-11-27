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
    res.sendFile(path.join(__dirname, 'broadcast.html'));
});

let clients = 0;

io.on('connection', (socket) => {
    clients++;
    io.emit("Broadcast", `New client connected. Total clients: ${clients}`);

    socket.on('disconnect', () => {
        clients--;
        io.emit("Broadcast", `Client disconnected. Total clients: ${clients}`);
    });
})


http.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});