const http = require("http")
const express = require("express");
const eng = require("./eng.json")


const app = express();
const server = http.createServer(app)


//MiddleWare
app.use(express.static("public"))


app.get("/eng", (req, res)=>{
    res.json(eng)
})




//Express technology

const PORT = process.env.PORT || 8000

server.listen(PORT, ()=>console.log(`${PORT} is running...`))

