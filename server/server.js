const http = require("http")
const express = require("express");
const iq = require("./iq.json")


const app = express();
const server = http.createServer(app)




//MiddleWare
app.use(express.static("public"))


app.get("/iq", (req, res)=>{
    res.json(iq)
})




//Express technology

const PORT = process.env.PORT || 8000

server.listen(PORT, ()=>console.log(`${PORT} is running...`))

