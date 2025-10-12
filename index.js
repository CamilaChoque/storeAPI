import { agregarProducto, eliminarProducto, obtenerProductos } from "./apiFetch.js"

const argumentos = process.argv.slice(2)
console.log(argumentos)
/*const argumentos_sin_slice=proccess.argv
console.log(argumentos_sin_slice)*/

if(argumentos[0]=="GET" && argumentos[1]=="products"){
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
}