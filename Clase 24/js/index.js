/* Datos

strings
number
baolean

*/

/* keywords 

let
const
var
function
if / else / else if

*/

/* Objects 

console
documente (DOM)

*/

// Funciones nombradas
    function nombreFuncion(){
        //mi código
    }

// Funciones anonimas
    let miFuncion = function(){ }
        //mi código

//Funciones flecha
    let miArrow = () => {
        // mi código
    }
// Funciones IIFE
    (Function() {
        //mi código
    })()

// -------------------

// Condicionales
    if (ticket) {
        // mi código
    } else if () {
        // mi código
    } else {
        // mi código
    }

// Condicionales ternarias
    (5>6) ? '' : ''

// DOM
    let miElemento = document.getElementById('miTitulo') // -> Nodo
    // document.querySelector('') // -> Nodo

    // document.getElementsByClassName('') // -> Node List
    let misElementos = document.querySelectorAll('') // -> Node List
    // document.getElementsByTagName('') // -> Node List

    miElemento.classList.add('')
    miElemento.classList.remove('')
    miElemento.classList.toggle('')

    miElemento.innerText = ''
    miElemento.innerHTML = ''
    
    miElemento.style = ''
    miElemento.src = ''
    miElemento.href = ''