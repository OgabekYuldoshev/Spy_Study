const http = require("http")
const express = require("express");
const helmet = require("helmet")
const morgan = require("morgan")
const mongoose = require("mongoose");
const MsgSchema = require("./model/schema")


//Connected to DB
const db = mongoose.connect("mongodb+srv://Anonymous:ogabek2001@cluster0.uz1y4.mongodb.net/chatMassages?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("Connected")).catch((error)=>(console.error(error)))

const app = express();
const server = http.createServer(app)
const io = require("socket.io")(server)



//MiddleWare
app.use(express.static("public"))
app.use(helmet())
app.use(morgan("combined"));



//Express technology



const users = {}

//Socket
io.on("connection", socket=>{
    socket.on("joined-user", name=>{
        users[socket.id] = name
        socket.broadcast.emit("newUser", name)
    })
    socket.on("disconnect", ()=>{
        socket.broadcast.emit("user-disconected", users[socket.id])
        delete users[socket.id]
    })
    socket.on("send-massage", msg=>{
        socket.broadcast.emit("massage", {
            massage: msg,
            username: users[socket.id]
        })
    })
})
io.on("disconnect", socket=>{
    console.log(socket)
})





const PORT = process.env.PORT || 8000

server.listen(PORT, ()=>console.log(`${PORT} is running...`))

