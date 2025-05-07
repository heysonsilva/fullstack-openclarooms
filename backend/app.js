import express from "express";

const app = express()
app.use(express.json())

const message = {
    message: 'Server Running :D'
}

app.use((req, res, next)=>{
    res.json(message)
    next()
})

// middleware que mostra o endereço ip do host que ta acessando
app.use((req, res)=>{
    const infoHeader = req.headers
    const IP_ADDRESS = infoHeader.host
    console.log(IP_ADDRESS)
})


export default app;