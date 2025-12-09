import express from 'express'
import {createServer} from 'http'
import {Server} from 'socket.io'

const app=express()
const http = createServer(app)
const io=new Server(http)

import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "chat-client.html"))
})

io.on("connection", (socket)=>{
    console.log('a client is connected ' , socket.id);
    socket.on("chat message", (msg)=>{
        io.emit("chat message", msg)
    })

    socket.on("disconnect", ()=>{
        console.log('a client is disconnected ', socket.id);
    })
})

http.listen(3000, ()=>{
    console.log('listening on *:3000');
})