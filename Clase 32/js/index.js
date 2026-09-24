// DOM
window.console.log()

// Temporizadores
setTimeout(() => {}, 300)
const miIntervalo = setInterval(() => {}, 300)
clearInterval(miIntervalo)

// Guardar datos
let miMensaje = prompt()
localStorage.setItem('mensaje', miMensaje)