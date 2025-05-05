import express from "express";

const app = express()
app.use(express.json())

app.use((req, res)=>{
    res.send({'message':'my first server app'})
})

export default app;
