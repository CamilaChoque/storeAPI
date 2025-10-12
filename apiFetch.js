export async function obtenerProductos(){
    try{
        const response = await fetch("https://fakestoreapi.com/products",{
            method: "GET"
        })
        const data = await response.json()
        console.log("Todos los productos: ")
        data.map((producto)=>{
            console.log(producto)
        })
        
    }catch(error){
        console.log(error)
    }
}

export async function obtenerProducto(idProd){
    try{
        const response=await fetch(`https://fakestoreapi.com/${idProd}`,{
            method:"GET"
        })
        const data = await response.json()
        console.log(`Producto ${idProd} es: `,data)
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
        const response = await fetch(`https://fakestoreapi.com/${idProd}`,{
            method:"DELETE"
        })
        const data = await response.json()
        console.log("El producto ha sido eliminado: ",data)
    }catch(error){
        console.log(error)
    }
}
