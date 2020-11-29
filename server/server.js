const http = require("http")
const express = require("express");


const app = express();
const server = http.createServer(app)
const io = require("socket.io")(server)

//MiddleWare
app.use(express.static("public"))




io.on("connection", socket=>{
    socket.on("send-massage", msg=>{
        socket.broadcast.emit("massage", msg)
    })
})


const PORT = process.env.PORT || 8000

server.listen(PORT, ()=>console.log(`${PORT} is running...`))
 