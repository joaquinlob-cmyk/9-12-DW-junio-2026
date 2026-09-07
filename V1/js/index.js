// Seleccionamos el elemento HTML con id "gloton" y lo guardamos en una constante
// Seleccionamos el elemento HTML con id "points" y lo guardamos en una constante

// Creamos una variable para llevar el conteo de puntos, empezando en 0

// Creamos una función llamada "alimentar" que se ejecutará cuando hagamos click en el botón
    // Verificamos si los puntos son menores a 10
        // Incrementamos los puntos en 1
        // Actualizamos el texto visible en el elemento "points" con el nuevo valor de puntos
        // Aumentamos el tamaño de la fuente del elemento "gloton" dinámicamente. El tamaño base es 3rem + los puntos acumulados en rem
    // Si los puntos ya son 10 o más, ejecutamos este código
        // Removemos la clase que muestra la cara triste      
        // Añadimos la clase que muestra la cara feliz

// -------------------------------------------------------------------------------------------------

const gloton = document.getElementById('gloton')
const points = document.getElementById('points')

let count = 0

function alimentar() {
    if (count < 9) {
        count++
        points.innerText = count
        gloton.style = `font-size: calc(3rem + ${count}rem)`
    }
    else if (count < 19) {
        count++
        points.innerText = count
        gloton.style = `font-size: calc(3rem + ${count}rem)`
        gloton.classList.remove('ri-emotion-unhappy-fill')
        gloton.classList.add('ri-emotion-happy-fill')
    }
    else {
        count++
        points.innerText = count
        gloton.classList.remove('ri-emotion-happy-fill')
        gloton.classList.add('ri-cross-fill')
    }
}





