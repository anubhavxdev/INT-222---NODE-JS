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
    res.sendFile(path.join(__dirname, 'client.html'));
});

// when a client connects, send a message
io.on('connection', (socket) => {
    console.log('a user connected');

    // send a single message to the connected client
    socket.emit('message', 'Welcome from server!');

    // send a message every 2 seconds to this connected client
    const interval = setInterval(() => {
        socket.emit('hi my name Ankush');
    }, 2000);

    // optional: listen for messages from client
    socket.on('clientMessage', (msg) => {
        console.log('Received from client:', msg);
        // broadcast the message to all connected clients
        io.emit('message', msg);
    });

    socket.on('disconnect', () => {
        clearInterval(interval);
        console.log('user disconnected');
    });
});

// optional: broadcast to all connected clients via HTTP endpoint
app.get('/broadcast', (req, res) => {
    io.emit('message', 'Broadcast from server to all clients');
    res.send('Broadcast sent');
});

const DEFAULT_PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

function startServer(port) {
    const server = http.listen(port, () => {
        console.log(`listening on *:${port}`);
    });

    server.on('error', (err) => {
        if (err && err.code === 'EADDRINUSE') {
            console.warn(`Port ${port} in use, trying ${port + 1}...`);
            // try next port
            startServer(port + 1);
        } else {
            console.error('Server error:', err);
            process.exit(1);
        }
    });
}

startServer(DEFAULT_PORT);