import app from "./app.js";
import dotenv from 'dotenv';

// em caso de uso das variaveis de ambiente: 
dotenv.config()

const normalizePort = p =>{
    const porta = parseInt(p, 10)

    if (isNaN(porta)){
        return p;
    } 
    if (porta >= 0){
        return p
    } else {
        return false
    }
}

const PORT = normalizePort(process.env.PORT)

const handleError = error => {
    if (error.syscall !== 'listen'){
        throw error
    }

    const bind = typeof(PORT) === "string" ? 'pipe' + address : 'port' + address

    if (error.code === 'EACESS') {
        console.error(bind + "requer permissões elevadas :C")
        process.exit(1)
    } 
    if (error.code === "EADDRINUSE") {
        console.error(bind + "está em uso!!")
        process.exit(1)
    }

    throw error
}

const server = app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING IN http://127.0.0.1:${PORT}`)
})


server.on('error', handleError)