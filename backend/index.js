import app from "./app.js"

const port = 8080

app.listen(port,()=>{
    console.log(`server run in http://127.0.0.1:${port}`)
})