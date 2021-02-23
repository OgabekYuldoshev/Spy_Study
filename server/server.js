const http = require("http")
const express = require("express");
const helmet = require("helmet")
const morgan = require("morgan")
const iakt = require("./iakt.json")
const rus = require("./rus.json")
const uzb = require("./uzb.json")


const app = express();
const server = http.createServer(app)




//MiddleWare
app.use(express.static("public"))
app.use(helmet())
app.use(morgan("combined"));

app.get("/iakt", (req, res)=>{
    res.json(iakt)
})

app.get("/rus", (req, res)=>{
    res.json(rus)
})

app.get("/uzb", (req, res)=>{
    res.json(uzb)
})

app.get("*", (req, res)=>{
    res.send("Nothing")
})



//Express technology

const PORT = process.env.PORT || 8000

server.listen(PORT, ()=>console.log(`${PORT} is running...`))

