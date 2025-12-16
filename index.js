import express from "express"
import cors from "cors"
import {configDotenv} from "dotenv"
import rutasProductos from "./src/routes/products.routes.js"
import rutasLog from "./src/routes/auth.routes.js"

const app=express()
const PORT = process.env.PORT || 3000;
const corsConfig = {
    origin: ['http://localhost:3000', 'https://midominio.com'], // dominios permitidos: acá permite dominios de si mismas
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}

app.use(cors(corsConfig));
app.use(express.json())

app.use("/api",rutasLog)



app.use((req, res, next) => {
    console.log(`Datos received at:  ${req.method} ${req.url}`);
    
    next();
});

app.use("/api",rutasProductos)

app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta inválida');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
//---------------------

/*import { agregarProducto, eliminarProducto, obtenerProductos } from "./apiFetch.js"

const argumentos = process.argv.slice(2)
console.log(argumentos)*/
/*const argumentos_sin_slice=proccess.argv
console.log(argumentos_sin_slice)*/

/*if(argumentos[0]=="GET" && argumentos[1]=="products"){
    obtenerProductos()
}else if(argumentos[0]=="GET" && argumentos[1].includes("products/")){
    obtenerProductos(argumentos[1].split("/")[1])
}else if(argumentos[0]=="POST" && argumentos[1]=="products" && argumentos.length==5){
    const producto ={
        title:argumentos[2],
        price:argumentos[3],
        category:argumentos[4]
    }
    agregarProducto(producto)
}else if(argumentos[0]=="DELETE" && argumentos[1].includes("products/") ){
    eliminarProducto(argumentos[1].split("/")[1])
}
else{
    console.log("Error")
}*/