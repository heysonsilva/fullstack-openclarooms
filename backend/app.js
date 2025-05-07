import express from "express";

const app = express()
app.use(express.json())

app.use((req, res, next)=>{
    console.log("Requisição Recebida com Sucesso !!")
    next()
})

app.use((req, res, next)=>{
    const STATUSCODE = 200
    res.status(STATUSCODE)
    console.log("STATUS CODE ALTERADO COM SUCESSO !!")
    next()
})

// middleware que mostra o endereço ip do host que ta acessando
app.use((req, res)=>{
    res.send({'message':'my first server app'})
    console.log("resposta enviada com sucesso !!")
})


export default app;
