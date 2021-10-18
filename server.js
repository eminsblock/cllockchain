const express = require('express')
const cors = require("cors")
const helmet = require("helmet")

const server = express()

server.use(cors());
server.use(helmet());
server.use(express.json())

server.get('/', (req, res) => {
    const data = req.body
    
    if(!data){
        res.status(200).json({
            message: "We FART"
        })
        console.log(data);
    }else{
        res.status(400).json({message: "Sorry, we couldn't FART"})
    }
    
})



module.exports = server