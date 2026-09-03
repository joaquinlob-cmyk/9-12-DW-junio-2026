/*
function saludar(){
    console.log('Hola')
}

let miFuncion = function() {

}
miFuncion()

let despedir = () => { console.log('Chao') }

despedir()


let saludar = () => { 
    console.log('Holi') 
}

saludar()

function perro(){
    console.log('¡guaf!')
}
perro()
*/

/* Scope */

let saberEdad = function() {
    let anoInicial = prompt('Año de nacimiento')
    let edad = 2026 - anoInicial

    if (edad > 18) {
        alert(`Tiene ${edad} años, es mayor de edad.`)
    } else {
        alert(`Tiene ${edad} años, es menor de edad.`)
    }

    return edad
}

console.log(edad)

/* Documente Object Model */

const miTitulo = document.getElementById('mi-titulo')

miTitulo.innerText = 'Pepe'
miTitulo.style = 'color: red;'

miTitulo.classList.add('Pepito')
miTitulo.classList.remove('small')
miTitulo.classList.toggle('texto')

console.log(miTitulo.classList)
