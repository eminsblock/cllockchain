const express = require('express')
const cors = require("cors")
const helmet = require("helmet")

const server = express()

server.use(cors());
server.use(helmet());
server.use(express.json())

server.get('/', (req, res) => {
    const data = req.body
    
    console.log(data)
    if(Object.keys(data).length>0){
        res.status(200).json({
            message: "We FART"
        })
    }else{
        res.status(400).json({message: "Sorry, we couldn't FART"})
    }
    
})



module.exports = server