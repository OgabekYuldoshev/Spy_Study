const http = require("http")
const express = require("express");
const helmet = require("helmet")
const morgan = require("morgan")




const app = express();
const server = http.createServer(app)




//MiddleWare
app.use(express.static("public"))
app.use(helmet())
app.use(morgan("combined"));

app.get("/iakt", (req, res)=>{
    res.json(data)
})



//Express technology

const PORT = process.env.PORT || 8000

server.listen(PORT, ()=>console.log(`${PORT} is running...`))

