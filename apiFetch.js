export async function obtenerProductos(idProd){
    let url="https://fakestoreapi.com/products"
    //let argumentos = process.argv.slice(2)
    try{
        if(idProd){
            url+="/"+idProd
        }
        const response = await fetch(url,{method: "GET"})
        const data = await response.json()
        //muestra del producto/s
        if(idProd){
            console.log(`Información del producto ${idProd} : `,data)
        }else{
            console.log("Todos los productos: ")
            data.forEach(function(producto){
                console.log(producto)
            })
        }
        
        
    }catch(error){
        console.log(error)
    }
}


export async function agregarProducto(producto){
    try{
        const response = await fetch(`https://fakestoreapi.com/products`,{
            method: "POST",
            headers:{ //avisamos la manera de enviar la info
                "Content-type": "application/json"
            },
            body:JSON.stringify(producto) //dentro del body va la info
        })
        const data = await response.json()
        console.log("El producto fue agregado exitosamente: ",data)
        
    }catch(error){
        console.log(error)
    }
}

export async function eliminarProducto(idProd) {
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${idProd}`,{
            method:"DELETE"
        })
        const data = await response.json()
        console.log(`El producto ${idProd} ha sido eliminado: `,data)
    }catch(error){
        console.log(error)
    }
}
