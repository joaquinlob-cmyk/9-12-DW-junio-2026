/* let botella = {
    alto: '45cm',
    color: 'verde'
}

botella.color ='azul' */

/* ARRAY */

const productos = [
    {nombre: 'Botella', precio: 15, añadir: ()=>{}},
    {nombre: 'Mantel', precio: 10, añadir: ()=>{}},
    {nombre: 'Casco', precio: 24, añadir: ()=>{}},
    {nombre: 'Móvil', precio: 150, añadir: ()=>{}},
    {nombre: 'Batería', precio: 20, añadir: ()=>{}}

]

productos.forEach((producto) => {
    console.log(producto.nombre)
})


